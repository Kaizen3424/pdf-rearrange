/**
 * PDF -> image engine (PDF to JPG / PDF to PNG).
 *
 * The inverse of `ImageToPdfTool`, and the second engine to need its own module
 * rather than a `focus` value: the input is a PDF and the output is N files, so
 * neither the page model nor the export path is shared with the reorganise
 * tools.
 *
 * ## Resolution is the whole product here
 *
 * Users arrive wanting a specific image size. Rather than exposing an abstract
 * "scale" slider, this picks DPI, which is the unit print and scan workflows
 * actually think in — and reports the resulting pixel dimensions for the first
 * page, so a 300 DPI choice on A4 visibly means 2480x3508 before anything is
 * rendered. Rendering happens at the chosen DPI and never upscales beyond the
 * source page, because inventing pixels produces a bigger file and no detail.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Download, FileText, LoaderCircle, Plus, ShieldCheck, Upload, X } from 'lucide-react';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { openPdf, PasswordCancelledError } from '../../lib/pdf/pdfService';
import { createZip } from '../../lib/zip';

export type ImageFormat = 'jpeg' | 'png';

export const DPI_OPTIONS = [72, 150, 300] as const;
export type Dpi = (typeof DPI_OPTIONS)[number];

const MIME: Record<ImageFormat, string> = {
  jpeg: 'image/jpeg',
  png: 'image/png',
};

export interface RasterOptions {
  format: ImageFormat;
  dpi: Dpi;
  /** 0-1, JPEG only. */
  quality: number;
  /** Fill behind the page. Transparent is only honoured for PNG. */
  whiteBackground: boolean;
}

/**
 * Renders one page at `dpi` and encodes it.
 *
 * The canvas is always allocated at the full target size even when the source
 * page is smaller, so that a 72 DPI request on a small page still produces a
 * correctly-sized canvas rather than a smaller image the user then has to
 * scale. Scale is clamped at 1 for the *draw* but not for the canvas, so the
 * output dimensions match the DPI promise.
 */
export async function renderPage(
  doc: PDFDocumentProxy,
  pageIndex: number,
  options: RasterOptions,
): Promise<{ bytes: Uint8Array<ArrayBuffer>; width: number; height: number }> {
  const page = await doc.getPage(pageIndex + 1);
  const base = page.getViewport({ scale: 1 });
  const scale = options.dpi / 72;
  const viewport = page.getViewport({ scale });

  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.ceil(viewport.width));
  canvas.height = Math.max(1, Math.ceil(viewport.height));
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas is not supported in this browser');

  // JPEG has no alpha channel; an unfilled canvas would encode black. PNG keeps
  // transparency only when the user asked for it, since a PDF page normally
  // paints an opaque background anyway.
  if (options.format === 'jpeg' || options.whiteBackground) {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  const task = page.render({ canvas, viewport, background: 'rgba(0,0,0,0)' });
  await task.promise;

  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, MIME[options.format], options.format === 'jpeg' ? options.quality : undefined);
  });
  const width = canvas.width;
  const height = canvas.height;
  canvas.width = 0;
  canvas.height = 0;
  if (!blob) throw new Error('Image encoding failed');
  return { bytes: new Uint8Array(await blob.arrayBuffer()), width, height };
}

/** Zero-pads a page number so files sort correctly in an archive: page-2, page-10. */
function pad(n: number, total: number): string {
  return String(n).padStart(String(total).length, '0');
}

const STRINGS = {
  dropHeading: 'Add your PDF',
  dropSelect: 'Select a PDF',
  dropHint: 'Drop a file here or click to browse. Your PDF never leaves this device.',
  dropPrivacy: 'Pages are rendered locally, never uploaded.',
  reading: 'Reading PDF',
  format: 'Format',
  dpi: 'Resolution',
  quality: 'Quality',
  background: 'Background',
  whiteBg: 'White',
  transparentBg: 'Transparent',
  convert: 'Convert to images',
  converting: (n: number) => `Rendering page ${n}…`,
  startOver: 'Start over',
  addMore: 'Add another PDF',
  ready: (n: number) => `${n} page${n === 1 ? '' : 's'} ready`,
  estimated: (w: number, h: number) => `First page will be ${w} × ${h} px`,
  errorPassword: 'That PDF is password protected.',
  errorGeneric: 'That file could not be read as a PDF.',
} as const;

export interface PdfToImageProps {
  /** Locks the output format; `undefined` lets the user choose. */
  defaultFormat?: ImageFormat;
}

export default function PdfToImageTool({ defaultFormat }: PdfToImageProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [pageCounts, setPageCounts] = useState<number[]>([]);
  /** Size of the first page of the first file, in points, for the DPI readout. */
  const [firstPage, setFirstPage] = useState<{ width: number; height: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState<{ name: string; count: number; bytes: number } | null>(null);
  const [options, setOptions] = useState<RasterOptions>({
    format: defaultFormat ?? 'jpeg',
    dpi: 150,
    quality: 0.92,
    whiteBackground: true,
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  /** Docs opened for rendering; closed on unmount so pdf.js can free workers. */
  const docsRef = useRef<PDFDocumentProxy[]>([]);

  const totalPages = useMemo(() => pageCounts.reduce((a, b) => a + b, 0), [pageCounts]);

  useEffect(() => {
    const docs = docsRef.current;
    return () => {
      for (const doc of docs) void doc.cleanup().catch(() => undefined);
      docs.length = 0;
    };
  }, []);

  const addFiles = useCallback(async (incoming: readonly File[]) => {
    setError(null);
    const accepted = incoming.filter((f) => f.type === 'application/pdf' || /\.pdf$/i.test(f.name));
    if (accepted.length === 0) {
      setError(STRINGS.errorGeneric);
      return;
    }
    const counts: number[] = [];
    let first: { width: number; height: number } | null = null;
    for (const file of accepted) {
      const bytes = new Uint8Array(await file.arrayBuffer());
      try {
        const doc = await openPdf(bytes);
        docsRef.current.push(doc);
        counts.push(doc.numPages);
        if (!first) {
          // The viewport already accounts for page rotation, and it is the same
          // value `renderPage` scales, so the readout cannot drift from the file.
          const viewport = await doc.getPage(1).then((page) => page.getViewport({ scale: 1 }));
          first = { width: viewport.width, height: viewport.height };
        }
      } catch (err) {
        if (err instanceof PasswordCancelledError) setError(STRINGS.errorPassword);
        else setError(STRINGS.errorGeneric);
      }
    }
    if (counts.length > 0) {
      setFiles((prev) => [...prev, ...accepted]);
      setPageCounts((prev) => [...prev, ...counts]);
      if (first) setFirstPage(first);
    }
  }, []);

  const clearAll = useCallback(() => {
    for (const doc of docsRef.current) void doc.cleanup().catch(() => undefined);
    docsRef.current = [];
    setFiles([]);
    setPageCounts([]);
    setFirstPage(null);
    setDone(null);
    setError(null);
  }, []);

  const convert = useCallback(async () => {
    if (docsRef.current.length === 0) return;
    setBusy(true);
    setError(null);
    setDone(null);
    try {
      const entries: { name: string; data: Uint8Array<ArrayBuffer> }[] = [];
      const total = docsRef.current.reduce((sum, d) => sum + d.numPages, 0);
      let seen = 0;

      for (const [docIndex, doc] of docsRef.current.entries()) {
        for (let i = 0; i < doc.numPages; i++) {
          const { bytes } = await renderPage(doc, i, options);
          // Multiple PDFs would otherwise collide on page-1.jpg; only the
          // single-file case (the common one) uses the short name.
          const prefix = docsRef.current.length > 1 ? `pdf-${docIndex + 1}-` : '';
          entries.push({
            name: `${prefix}page-${pad(i + 1, total)}.${options.format === 'jpeg' ? 'jpg' : 'png'}`,
            data: bytes,
          });
          seen += 1;
          setProgress(seen);
        }
      }

      const blob = createZip(entries);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${files[0]?.name.replace(/\.pdf$/i, '') ?? 'pages'}-images.zip`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 30_000);
      setDone({ name: a.download, count: entries.length, bytes: blob.size });
    } catch {
      setError(STRINGS.errorGeneric);
    } finally {
      setBusy(false);
      setProgress(0);
    }
  }, [options, files]);

  useEffect(() => {
    const onPaste = (event: ClipboardEvent) => {
      const pasted = [...(event.clipboardData?.files ?? [])];
      if (pasted.length > 0) {
        event.preventDefault();
        void addFiles(pasted);
      }
    };
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, [addFiles]);

  // Pixel dimensions of the first page at the current DPI, so the choice is
  // concrete before anything is rendered. Measured from the real page rather
  // than an A4 assumption, and rounded the same way `renderPage` rounds, because
  // a promise of "1240 x 1754" next to a delivered 1241 px image is the kind of
  // one-pixel lie that makes the whole readout untrustworthy.
  const estimate = useMemo(() => {
    if (!firstPage) return null;
    const scale = options.dpi / 72;
    return { w: Math.ceil(firstPage.width * scale), h: Math.ceil(firstPage.height * scale) };
  }, [firstPage, options.dpi]);

  return (
    <div className="flex flex-col gap-4">
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf,.pdf"
        multiple
        className="hidden"
        onChange={(event) => {
          void addFiles([...(event.target.files ?? [])]);
          event.target.value = '';
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
              {STRINGS.ready(totalPages)}
              {files.length > 1 && ` · ${files.length} files`}
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
              <li
                key={`${file.name}-${i}`}
                className="flex items-center gap-3 rounded-lg bg-canvas px-4 py-3 ring-1 ring-hairline"
              >
                <FileText size={18} className="shrink-0 text-mute" />
                <span className="truncate text-body-md">{file.name}</span>
                <span className="ml-auto shrink-0 text-body-sm text-mute">
                  {pageCounts[i]} page{pageCounts[i] === 1 ? '' : 's'}
                </span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl bg-canvas p-5 ring-1 ring-hairline">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-body-sm text-mute">{STRINGS.dpi}</span>
                <select
                  className="rounded-md bg-canvas px-3 py-2 text-body-md ring-1 ring-hairline"
                  value={options.dpi}
                  onChange={(e) => setOptions((o) => ({ ...o, dpi: Number(e.target.value) as Dpi }))}
                >
                  {DPI_OPTIONS.map((d) => (
                    <option key={d} value={d}>
                      {d} DPI{d === 72 ? ' — screen' : d === 150 ? ' — documents' : ' — print'}
                    </option>
                  ))}
                </select>
              </label>

              {defaultFormat === undefined && (
                <label className="flex flex-col gap-1.5">
                  <span className="text-body-sm text-mute">{STRINGS.format}</span>
                  <select
                    className="rounded-md bg-canvas px-3 py-2 text-body-md ring-1 ring-hairline"
                    value={options.format}
                    onChange={(e) => setOptions((o) => ({ ...o, format: e.target.value as ImageFormat }))}
                  >
                    <option value="jpeg">JPG</option>
                    <option value="png">PNG</option>
                  </select>
                </label>
              )}

              {options.format === 'jpeg' && (
                <label className="flex flex-col gap-1.5">
                  <span className="text-body-sm text-mute">{STRINGS.quality}</span>
                  <select
                    className="rounded-md bg-canvas px-3 py-2 text-body-md ring-1 ring-hairline"
                    value={options.quality}
                    onChange={(e) => setOptions((o) => ({ ...o, quality: Number(e.target.value) }))}
                  >
                    <option value={0.75}>Small file</option>
                    <option value={0.92}>Balanced</option>
                    <option value={1}>Maximum</option>
                  </select>
                </label>
              )}

              {options.format === 'png' && (
                <label className="flex flex-col gap-1.5">
                  <span className="text-body-sm text-mute">{STRINGS.background}</span>
                  <select
                    className="rounded-md bg-canvas px-3 py-2 text-body-md ring-1 ring-hairline"
                    value={options.whiteBackground ? 'white' : 'transparent'}
                    onChange={(e) => setOptions((o) => ({ ...o, whiteBackground: e.target.value === 'white' }))}
                  >
                    <option value="white">{STRINGS.whiteBg}</option>
                    <option value="transparent">{STRINGS.transparentBg}</option>
                  </select>
                </label>
              )}
            </div>
            {estimate && (
              <p className="mt-3 text-body-sm text-mute">{STRINGS.estimated(estimate.w, estimate.h)}</p>
            )}
          </div>

          <button type="button" className="btn btn-primary" onClick={() => void convert()} disabled={busy}>
            {busy ? <LoaderCircle size={18} className="animate-spin" /> : <Download size={18} />}
            {busy ? STRINGS.converting(progress) : STRINGS.convert}
          </button>

          {done && (
            <p className="text-body-md text-positive-deep" role="status">
              {done.name} — {done.count} image{done.count === 1 ? '' : 's'},{' '}
              {Math.round(done.bytes / 1024)} KB
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