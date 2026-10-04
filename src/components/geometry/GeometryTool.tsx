/**
 * Geometry engine: change the page boxes of an existing PDF.
 *
 * Backs `crop-pdf` and `resize-pdf`, which differ in intent but share one
 * operation on the page tree.
 *
 * ## Crop and resize are the same edit
 *
 * A PDF page has two boxes: `MediaBox` (the sheet) and `CropBox` (what is
 * actually shown). "Crop" means change the CropBox. "Resize" is usually that
 * too — shrinking the visible area is what a user means by "make this smaller".
 * So both tools write the CropBox, and resize additionally writes the MediaBox
 * when the user asks to change the paper rather than just the visible area.
 *
 * ## What this cannot do
 *
 * Cropping does not reclaim the hidden content — PDF viewers only render what
 * the CropBox covers, but the original bytes stay in the file. That is standard
 * and it is stated on the page rather than hidden: promising "removes the data"
 * would be false. A tool that truly strips it must re-encode each page as an
 * image, which loses text and links — the same trade `OverlayTool` avoids.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { PDFDocument } from 'pdf-lib';
import { Download, FileText, LoaderCircle, Plus, ShieldCheck, Upload, X } from 'lucide-react';
import { isPdfEncrypted } from '../../lib/pdf/pdfService';

export type GeometryMode = 'crop' | 'resize';

export interface GeometryOptions {
  mode: GeometryMode;
  /** Points removed from each edge in crop mode. */
  margin: { top: number; right: number; bottom: number; left: number };
  /** Target paper in resize mode; 'keep' leaves the page size alone. */
  target: 'keep' | 'a4' | 'letter' | 'a5';
  orientation: 'keep' | 'portrait' | 'landscape';
  /** Resize only: scale content to fill, or leave it at its original size. */
  scaleContent: boolean;
}

const PAPER: Record<Exclude<GeometryOptions['target'], 'keep'>, [number, number]> = {
  a4: [595.28, 841.89],
  letter: [612, 792],
  a5: [419.53, 595.28],
};

/**
 * Works out the sheet size for a page.
 *
 * With an explicit target, "keep current orientation" means *keep the page's own*
 * orientation rather than defaulting to portrait: someone resizing a landscape
 * A4 to Letter wants landscape Letter, not a portrait sheet with their content
 * shrunk into a letterbox.
 */
function resolveTarget(
  width: number,
  height: number,
  options: GeometryOptions,
): [number, number] {
  if (options.target === 'keep') {
    if (options.orientation === 'landscape' && width < height) return [height, width];
    if (options.orientation === 'portrait' && width > height) return [height, width];
    return [width, height];
  }
  const [a, b] = PAPER[options.target];
  const landscape = options.orientation === 'landscape' || (options.orientation === 'keep' && width > height);
  return landscape ? [b, a] : [a, b];
}

/**
 * pdf-lib on demand.
 *
 * It is ~415 KB, which is more than every other script on this page combined.
 * Imported statically it would be in the initial payload, so a visitor would pay
 * for it before they had chosen a file - and the only thing they can do at that
 * point is choose a file. `exportService` already loads it this way for the
 * reorganise tools; these engines match that. The promise is cached, so the cost
 * is at most one request no matter how many files are added.
 */
type PdfLib = typeof import('pdf-lib');
let pdfLibPromise: Promise<PdfLib> | null = null;
const loadPdfLib = (): Promise<PdfLib> => (pdfLibPromise ??= import('pdf-lib'));

const STRINGS = {
  dropHeading: 'Add your PDF',
  dropSelect: 'Select a PDF',
  dropHint: 'Drop a file here or click to browse. Nothing is uploaded.',
  dropPrivacy: 'Your PDF is edited on this device.',
  apply: (mode: GeometryMode) => (mode === 'crop' ? 'Crop pages' : 'Resize pages'),
  applying: 'Applying…',
  startOver: 'Start over',
  addMore: 'Add another PDF',
  pagesReady: (n: number) => `${n} page${n === 1 ? '' : 's'} ready`,
  margins: 'Margins to remove (points)',
  top: 'Top',
  right: 'Right',
  bottom: 'Bottom',
  left: 'Left',
  sameAll: 'Set all four',
  pageSize: 'Page size',
  keep: 'Keep current size',
  orientation: 'Orientation',
  keepOrientation: 'Keep current',
  portrait: 'Portrait',
  landscape: 'Landscape',
  scaleContent: 'Scale content to fit the new page',
  scaleContentHint: 'On: content is resized and centred, keeping its proportions. Off: the page changes size and content stays put, so edges may be cut off.',
  fromTo: (w: number, h: number) => `Currently ${Math.round(w)} × ${Math.round(h)} pt`,
  errorGeneric: 'That file could not be read as a PDF.',
  errorEncrypted: 'That PDF is password protected, so it cannot be edited here.',
  errorTooSmall: 'The margins leave no page left. Use smaller margins.',
  done: (name: string, pages: number) => `${name} — ${pages} pages`,
} as const;

export interface GeometryToolProps {
  mode: GeometryMode;
}

export default function GeometryTool({ mode }: GeometryToolProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [pageCounts, setPageCounts] = useState<number[]>([]);
  const [firstSize, setFirstSize] = useState<[number, number] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const [options, setOptions] = useState<GeometryOptions>({
    mode,
    margin: { top: 36, right: 36, bottom: 36, left: 36 },
    target: 'keep',
    orientation: 'keep',
    scaleContent: true,
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  const totalPages = useMemo(() => pageCounts.reduce((a, b) => a + b, 0), [pageCounts]);

  useEffect(() => {
    setOptions((o) => ({ ...o, mode, target: mode === 'resize' ? 'a4' : 'keep' }));
  }, [mode]);

  const addFiles = useCallback(async (incoming: readonly File[]) => {
    setError(null);
    const accepted = incoming.filter((f) => f.type === 'application/pdf' || /\.pdf$/i.test(f.name));
    if (accepted.length === 0) {
      setError(STRINGS.errorGeneric);
      return;
    }
    const counts: number[] = [];
    let size: [number, number] | null = null;
    for (const file of accepted) {
      const bytes = new Uint8Array(await file.arrayBuffer());
      if (isPdfEncrypted(bytes)) {
        setError(STRINGS.errorEncrypted);
        continue;
      }
      try {
        // See the note on `loadPdfLib`: pdf-lib is loaded on demand, not shipped
        // in the page's initial JavaScript.
        const { PDFDocument: PdfDocumentCtor } = await loadPdfLib();
        const probe = await PdfDocumentCtor.load(bytes, { ignoreEncryption: true });
        counts.push(probe.getPageCount());
        if (!size) {
          const { width, height } = probe.getPage(0).getSize();
          size = [width, height];
        }
      } catch {
        setError(STRINGS.errorGeneric);
      }
    }
    if (counts.length > 0) {
      setFiles((prev) => [...prev, ...accepted]);
      setPageCounts((prev) => [...prev, ...counts]);
      if (size) setFirstSize(size);
    }
  }, []);

  const clearAll = useCallback(() => {
    setFiles([]);
    setPageCounts([]);
    setFirstSize(null);
    setDone(null);
    setError(null);
  }, []);

  const apply = useCallback(async () => {
    if (files.length === 0) return;
    setBusy(true);
    setError(null);
    try {
      const { PDFDocument: PdfDocumentCtor } = await loadPdfLib();
      const merged = await PdfDocumentCtor.create();
      let outPages = 0;
      // Scaling rebuilds each page as a form XObject, which loses the source
      // page's link annotations. That is the only way to move content onto a
      // different sheet without rasterising, and the copy path below is used
      // whenever scaling is off so links survive the common cases (crop, and
      // resize that only changes the visible box).
      const scaleContent = options.mode === 'resize' && options.scaleContent;

      for (const file of files) {
        const src = await PdfDocumentCtor.load(await file.arrayBuffer(), { ignoreEncryption: true });
        if (scaleContent) {
          for (const srcPage of src.getPages()) {
            const { width, height } = srcPage.getSize();
            const [targetW, targetH] = resolveTarget(width, height, options);
            const embedded = await merged.embedPage(srcPage);
            const page = merged.addPage([targetW, targetH]);
            // Contain rather than stretch: fitting to the new sheet while keeping
            // the aspect ratio is what "fit" means, and stretching would distort
            // every page of a document.
            const scale = Math.min(targetW / width, targetH / height);
            const drawW = width * scale;
            const drawH = height * scale;
            page.drawPage(embedded, {
              x: (targetW - drawW) / 2,
              y: (targetH - drawH) / 2,
              width: drawW,
              height: drawH,
            });
            outPages += 1;
          }
          continue;
        }
        const copied = await merged.copyPages(src, src.getPageIndices());
        for (const page of copied) merged.addPage(page);
        outPages += copied.length;
      }

      if (!scaleContent) {
        for (const page of merged.getPages()) {
          const { width, height } = page.getSize();

          if (options.mode === 'crop') {
            const { top, right, bottom, left } = options.margin;
            const w = width - left - right;
            const h = height - top - bottom;
            // Guards a negative box, which pdf-lib would serialise and which makes
            // the document unopenable — the worst possible failure here.
            if (w < 1 || h < 1) throw new Error(STRINGS.errorTooSmall);
            page.setCropBox(left, bottom, w, h);
            page.setMediaBox(left, bottom, w, h);
            continue;
          }

          const [targetW, targetH] = resolveTarget(width, height, options);
          page.setSize(targetW, targetH);
        }
      }

      const bytes = await merged.save();
      const blob = new Blob([bytes.slice()], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${files[0].name.replace(/\.pdf$/i, '')}-${options.mode}.pdf`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 30_000);
      setDone(a.download);
    } catch (err) {
      setError(err instanceof Error && err.message === STRINGS.errorTooSmall ? STRINGS.errorTooSmall : STRINGS.errorGeneric);
    } finally {
      setBusy(false);
    }
  }, [files, options]);

  const set = <K extends keyof GeometryOptions>(key: K, value: GeometryOptions[K]) =>
    setOptions((o) => ({ ...o, [key]: value }));
  const setMargin = (edge: keyof GeometryOptions['margin'], value: number) =>
    setOptions((o) => ({ ...o, margin: { ...o.margin, [edge]: value } }));

  return (
    <div className="flex flex-col gap-4">
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf,.pdf"
        multiple
        className="hidden"
        onChange={(e) => {
          void addFiles([...(e.target.files ?? [])]);
          e.target.value = '';
        }}
      />

      {files.length === 0 ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            void addFiles([...e.dataTransfer.files]);
          }}
          className="rounded-xl border-2 border-dashed border-ink/20 bg-canvas p-8 text-center sm:p-12"
        >
          <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-canvas-soft">
            <Upload className="size-7 text-ink" strokeWidth={1.75} />
          </span>
          <h2 className="mt-6 text-display-xs font-semibold">{STRINGS.dropHeading}</h2>
          <p className="mt-2 text-body-md text-body">{STRINGS.dropHint}</p>
          <button type="button" className="btn btn-primary mt-3" onClick={() => inputRef.current?.click()}>
            <Plus size={18} />
            {STRINGS.dropSelect}
          </button>
          <p className="mt-6 inline-flex items-center gap-2 text-body-sm-strong text-positive-deep">
            <ShieldCheck size={16} />
            {STRINGS.dropPrivacy}
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-body-md-strong" aria-live="polite">
              {STRINGS.pagesReady(totalPages)}
              {firstSize && ` · ${STRINGS.fromTo(firstSize[0], firstSize[1])}`}
            </p>
            <div className="flex items-center gap-2">
              <button type="button" className="btn btn-tertiary" onClick={() => inputRef.current?.click()}>
                <Plus size={16} />
                {STRINGS.addMore}
              </button>
              <button type="button" className="btn btn-tertiary" onClick={clearAll}>
                <X size={16} />
                {STRINGS.startOver}
              </button>
            </div>
          </div>

          <ul className="list-none space-y-2 p-0">
            {files.map((file, i) => (
              <li key={`${file.name}-${i}`} className="flex items-center gap-3 rounded-lg bg-canvas px-4 py-3 ring-1 ring-hairline">
                <FileText size={18} className="shrink-0 text-mute" />
                <span className="truncate text-body-md">{file.name}</span>
                <span className="ml-auto shrink-0 text-body-sm text-mute">{pageCounts[i]} pages</span>
              </li>
            ))}
          </ul>

          <div className="grid gap-4 rounded-xl bg-canvas p-5 ring-1 ring-hairline sm:grid-cols-2">
            {options.mode === 'crop' ? (
              <>
                {(['top', 'right', 'bottom', 'left'] as const).map((edge) => (
                  <label key={edge} className="flex flex-col gap-1.5">
                    <span className="text-body-sm text-mute">
                      {STRINGS[edge]} — {options.margin[edge]} pt
                    </span>
                    <input
                      type="range"
                      min={0}
                      max={200}
                      value={options.margin[edge]}
                      onChange={(e) => setMargin(edge, Number(e.target.value))}
                    />
                  </label>
                ))}
                <button
                  type="button"
                  className="btn btn-secondary w-fit"
                  onClick={() => setOptions((o) => ({ ...o, margin: { top: 36, right: 36, bottom: 36, left: 36 } }))}
                >
                  {STRINGS.sameAll}
                </button>
              </>
            ) : (
              <>
                <label className="flex flex-col gap-1.5">
                  <span className="text-body-sm text-mute">{STRINGS.pageSize}</span>
                  <select
                    value={options.target}
                    onChange={(e) => set('target', e.target.value as GeometryOptions['target'])}
                    className="rounded-md bg-canvas px-3 py-2 text-body-md ring-1 ring-hairline"
                  >
                    <option value="keep">{STRINGS.keep}</option>
                    <option value="a4">A4</option>
                    <option value="letter">Letter</option>
                    <option value="a5">A5</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-body-sm text-mute">{STRINGS.orientation}</span>
                  <select
                    value={options.orientation}
                    onChange={(e) => set('orientation', e.target.value as GeometryOptions['orientation'])}
                    className="rounded-md bg-canvas px-3 py-2 text-body-md ring-1 ring-hairline"
                  >
                    <option value="keep">{STRINGS.keepOrientation}</option>
                    <option value="portrait">{STRINGS.portrait}</option>
                    <option value="landscape">{STRINGS.landscape}</option>
                  </select>
                </label>
                <label className="flex items-center gap-2 text-body-md sm:col-span-2">
                  <input
                    type="checkbox"
                    checked={options.scaleContent}
                    onChange={(e) => set('scaleContent', e.target.checked)}
                    className="size-4"
                  />
                  {STRINGS.scaleContent}
                </label>
                <p className="text-body-sm text-mute sm:col-span-2">{STRINGS.scaleContentHint}</p>
              </>
            )}
          </div>

          <button type="button" className="btn btn-primary" onClick={() => void apply()} disabled={busy}>
            {busy ? <LoaderCircle size={18} className="animate-spin" /> : <Download size={18} />}
            {busy ? STRINGS.applying : STRINGS.apply(options.mode)}
          </button>

          {done && (
            <p className="text-body-md text-positive-deep" role="status">
              {done}
            </p>
          )}
          {error && (
            <p className="text-body-md text-negative-deep" role="alert">
              {error}
            </p>
          )}
        </>
      )}
    </div>
  );
}