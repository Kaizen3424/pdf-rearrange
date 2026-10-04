/**
 * Overlay engine: draw *onto* an existing PDF without touching its content.
 *
 * Backs three tools that share one implementation and differ only in what gets
 * drawn:
 *
 * - `watermark-pdf`     — text, optionally tiled diagonally across every page.
 * - `add-page-numbers`  — a number per page, with its own format and origin.
 * - `sign-pdf`          — an uploaded signature image placed on chosen pages.
 *
 * ## Why drawing, not rasterising
 *
 * The tempting shortcut is to render each page to a canvas, draw on top, and
 * rebuild the PDF as images. That would work and it would destroy the file: text
 * would stop being text, links would stop being links, and a 2 MB document would
 * become 30 MB of JPEG. pdf-lib appends to the existing content stream instead,
 * so the original pages are untouched and the file grows by only the watermark.
 *
 * ## Standard fonts only
 *
 * Watermarks and page numbers use the built-in Helvetica rather than an embedded
 * TTF. Embedding needs `@pdf-lib/fontkit`, and a watermark in a custom face is
 * not worth an extra dependency that would ship to every visitor. Signatures are
 * images instead, which sidesteps the font question and matches how people
 * actually sign: they already have one.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Color, PDFDocument, PDFFont, PDFPage } from 'pdf-lib';
import { Download, FileText, LoaderCircle, Plus, ShieldCheck, Upload, X } from 'lucide-react';
import { isPdfEncrypted } from '../../lib/pdf/pdfService';

/**
 * pdf-lib on demand.
 *
 * ~415 KB, larger than every other script on the page combined, and nothing
 * needs it until a file has been loaded and an edit requested. Importing it
 * statically put it in the initial payload and measurably hurt total blocking
 * time. `exportService` already loads it this way for the reorganise tools, so
 * this follows suit; the cached promise means at most one request regardless of
 * how many PDFs are added.
 */
type PdfLib = typeof import('pdf-lib');
let pdfLibPromise: Promise<PdfLib> | null = null;
const loadPdfLib = (): Promise<PdfLib> => (pdfLibPromise ??= import('pdf-lib'));

export type OverlayMode = 'watermark' | 'numbers' | 'sign';

export type Anchor = 'top-left' | 'top-center' | 'top-right' | 'center' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface OverlayOptions {
  text: string;
  fontSize: number;
  /** 0-1. Watermarks need low values to read as a watermark. */
  opacity: number;
  rotation: number;
  anchor: Anchor;
  color: string;
  /** Watermark only: repeat across the page rather than once. */
  tile: boolean;
  /** Page numbers only: value of the first page's label. */
  startAt: number;
  /** Page numbers only: `{{n}}` is replaced, `{total}` is the page count. */
  numberFormat: string;
  /** Sign only. */
  signOpacity: number;
  /** Pages the mark applies to; empty means all. */
  targetPages: number[];
}

const ANCHOR_PADDING = 36;

/** Plain components, so this does not need pdf-lib loaded to parse a colour. */
function hexToRgb(hex: string) {
  const clean = hex.replace('#', '');
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean;
  return {
    r: parseInt(full.slice(0, 2), 16) / 255,
    g: parseInt(full.slice(2, 4), 16) / 255,
    b: parseInt(full.slice(4, 6), 16) / 255,
  };
}

/**
 * Converts an anchor plus padding into the *centre* of the drawn object.
 *
 * Returns a centre rather than a corner on purpose. pdf-lib rotates text and
 * images about the origin it is handed, so an origin chosen to look centred
 * only looks centred while the rotation is zero: a 45-degree watermark placed by
 * corner arithmetic lands well off the page centre. Callers turn this centre
 * into an origin with `rotatedOrigin`, which works at any angle.
 */
function anchorCentre(page: PDFPage, anchor: Anchor, width: number, height: number) {
  const { width: pw, height: ph } = page.getSize();
  const x =
    anchor.endsWith('center')
      ? pw / 2
      : anchor.endsWith('right')
        ? pw - ANCHOR_PADDING - width / 2
        : ANCHOR_PADDING + width / 2;
  const y =
    anchor.startsWith('top')
      ? ph - ANCHOR_PADDING - height / 2
      : anchor.startsWith('bottom')
        ? ANCHOR_PADDING + height / 2
        : ph / 2;
  return { x, y };
}

/**
 * The origin to hand a rotated draw call so the object ends up centred on
 * `centre`. Rotating about the object's own bottom-left corner swings its centre
 * away, so the corner is pushed back by the rotated half-extent.
 */
function rotatedOrigin(
  centre: { x: number; y: number },
  width: number,
  height: number,
  degrees: number,
) {
  const rad = (degrees * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const hx = width / 2;
  const hy = height / 2;
  return { x: centre.x - (hx * cos - hy * sin), y: centre.y - (hx * sin + hy * cos) };
}

/** Replaces `{n}` / `{total}` and escapes the non-ASCII glyphs Helvetica lacks. */
function formatNumber(template: string, pageNumber: number, total: number): string {
  return template
    .replaceAll('{n}', String(pageNumber))
    .replaceAll('{total}', String(total))
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"');
}

/**
 * Draws one string at its anchor.
 *
 * pdf-lib anchors text at its left baseline and offers no horizontal alignment,
 * so a centred watermark is positioned by `anchorPoint` from the measured text
 * width. That measurement needs the font, which is why it cannot live inside
 * `anchorPoint`.
 */
function drawCenteredText(
  page: PDFPage,
  text: string,
  font: PDFFont,
  size: number,
  anchor: Anchor,
color: Color,
  opacity: number,
  rotation: number,
  lib: PdfLib,
) {
  const width = font.widthOfTextAtSize(text, size);
  const height = font.heightAtSize(size);
  const origin = rotatedOrigin(anchorCentre(page, anchor, width, height), width, height, rotation);
  page.drawText(text, {
    x: origin.x,
    y: origin.y,
    size,
    font,
    color,
    opacity,
    rotate: lib.degrees(rotation),
  });
}

/** Applies the overlay to an already-loaded pdf-lib document, in place. */
async function applyOverlay(
  doc: PDFDocument,
  mode: OverlayMode,
  options: OverlayOptions,
  signImage: { bytes: Uint8Array; isPng: boolean } | null,
  lib: PdfLib,
): Promise<void> {
  const pages = doc.getPages();
  const targets = options.targetPages.length
    ? new Set(options.targetPages)
    : new Set(pages.map((_, i) => i + 1));

  if (mode === 'sign') {
    if (!signImage) throw new Error('No signature image supplied');
    const image = signImage.isPng
      ? await doc.embedPng(signImage.bytes)
      : await doc.embedJpg(signImage.bytes);
    for (const page of pages) {
      const number = pages.indexOf(page) + 1;
      if (!targets.has(number)) continue;
      const { width: pw, height: ph } = page.getSize();
      // Scaled to a quarter of the page's shorter edge: a signature that fills
      // the page is useless, and any real signature scan is wide and short.
      const targetWidth = Math.min(pw * 0.3, image.width * 0.4);
      const targetHeight = (image.height / image.width) * targetWidth;
      const origin = rotatedOrigin(
        anchorCentre(page, options.anchor, targetWidth, targetHeight),
        targetWidth,
        targetHeight,
        0,
      );
      page.drawImage(image, {
        x: origin.x,
        y: origin.y,
        width: targetWidth,
        height: targetHeight,
        opacity: options.signOpacity,
      });
    }
    return;
  }

  const font = await doc.embedFont(lib.StandardFonts.Helvetica);

  for (const page of pages) {
    const number = pages.indexOf(page) + 1;
    if (!targets.has(number)) continue;

    if (mode === 'numbers') {
      const text = formatNumber(options.numberFormat, number + options.startAt - 1, pages.length);
      drawCenteredText(page, text, font, options.fontSize, options.anchor, lib.rgb(0.15, 0.15, 0.15), 1, 0, lib);
      continue;
    }

    // Watermark.
    const { r, g, b } = hexToRgb(options.color);
    const color = lib.rgb(r, g, b);
    const width = font.widthOfTextAtSize(options.text, options.fontSize);
    const height = font.heightAtSize(options.fontSize);
    const rot = lib.degrees(options.rotation);

    if (!options.tile) {
      drawCenteredText(page, options.text, font, options.fontSize, 'center', color, options.opacity, options.rotation, lib);
      continue;
    }

    // Tiling: a diagonal lattice centred on the page.
    //
    // The obvious implementation - loop x and y over the page rectangle from
    // -pw to 2*pw - puts almost every stamp outside the visible sheet: for
    // A4 with the default 48pt CONFIDENTIAL it draws 108 copies and only 5 land
    // on the page, which reads as a sparse smudge rather than a watermark.
    //
    // Instead the grid is laid out in the rotated frame, spanning the page
    // *diagonal* so it still reaches every corner after rotation, and each
    // stamp is positioned so its centre sits on its lattice point. pdf-lib
    // rotates about the text origin, so the origin has to be pushed back by the
    // rotated half-extent or the whole pattern drifts off to one side.
    const { width: pw, height: ph } = page.getSize();
    const stepX = width + 60;
    const stepY = height + 60;
    const reach = Math.hypot(pw, ph);
    const cols = Math.ceil(reach / stepX) + 1;
    const rows = Math.ceil(reach / stepY) + 1;
    const cx = pw / 2;
    const cy = ph / 2;
    const rad = (options.rotation * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);

    for (let j = -rows; j <= rows; j++) {
      for (let i = -cols; i <= cols; i++) {
        const ox = i * stepX;
        const oy = j * stepY;
        // Lattice point: page centre plus the offset turned by the rotation, so
        // the lattice itself is diagonal and stays centred on the sheet.
        const point = { x: cx + ox * cos - oy * sin, y: cy + ox * sin + oy * cos };
        const origin = rotatedOrigin(point, width, height, options.rotation);
        page.drawText(options.text, {
          x: origin.x,
          y: origin.y,
          size: options.fontSize,
          font,
          color,
          opacity: options.opacity,
          rotate: rot,
        });
      }
    }
  }
}

const STRINGS = {
  dropHeading: 'Add your PDF',
  dropSelect: 'Select a PDF',
  dropHint: 'Drop a file here or click to browse. Nothing is uploaded.',
  dropPrivacy: 'Edits are applied on your device.',
  apply: (mode: OverlayMode) =>
    mode === 'watermark' ? 'Add watermark' : mode === 'numbers' ? 'Add page numbers' : 'Add signature',
  applying: 'Applying…',
  startOver: 'Start over',
  addMore: 'Add another PDF',
  pagesReady: (n: number) => `${n} page${n === 1 ? '' : 's'} ready`,
  watermarkText: 'Watermark text',
  fontSize: 'Size',
  opacity: 'Opacity',
  rotation: 'Rotation',
  colour: 'Colour',
  tile: 'Repeat across the page',
  position: 'Position',
  startAt: 'Start numbering at',
  format: 'Number format',
  formatHint: 'Use {n} for the page number and {total} for the total.',
  signatureImage: 'Signature image',
  signatureHint: 'A PNG with a transparent background works best.',
  pages: 'Pages',
  allPages: 'All pages',
  errorGeneric: 'That file could not be read as a PDF.',
  errorEncrypted: 'That PDF is password protected, so it cannot be edited here.',
  errorNoSignature: 'Add a signature image first.',
  done: (name: string, pagesOut: number) => `${name} — ${pagesOut} pages`,
} as const;

const ANCHOR_LABELS: Record<Anchor, string> = {
  'top-left': 'Top left',
  'top-center': 'Top centre',
  'top-right': 'Top right',
  center: 'Centre',
  'bottom-left': 'Bottom left',
  'bottom-center': 'Bottom centre',
  'bottom-right': 'Bottom right',
};

export interface OverlayToolProps {
  mode: OverlayMode;
}

export default function OverlayTool({ mode }: OverlayToolProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [pageCounts, setPageCounts] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const [signImage, setSignImage] = useState<{ file: File; isPng: boolean } | null>(null);
  const [options, setOptions] = useState<OverlayOptions>({
    text: 'CONFIDENTIAL',
    fontSize: 48,
    opacity: 0.18,
    rotation: 45,
    anchor: 'center',
    color: '#808080',
    tile: true,
    startAt: 1,
    numberFormat: '{n}',
    signOpacity: 1,
    targetPages: [],
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  const signRef = useRef<HTMLInputElement | null>(null);
  const signUrlRef = useRef<string | null>(null);

  useEffect(() => {
    // Defaults that suit the mode, so each tool opens ready to use.
    setOptions((o) =>
      mode === 'numbers'
        ? { ...o, anchor: 'bottom-center', fontSize: 12, opacity: 1, rotation: 0, numberFormat: 'Page {n} of {total}' }
        : mode === 'sign'
          ? { ...o, anchor: 'bottom-right', opacity: 1, rotation: 0 }
          : o,
    );
  }, [mode]);

  useEffect(() => {
    const url = signUrlRef.current;
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, []);

  const totalPages = useMemo(() => pageCounts.reduce((a, b) => a + b, 0), [pageCounts]);

  const addFiles = useCallback(async (incoming: readonly File[]) => {
    setError(null);
    const accepted = incoming.filter((f) => f.type === 'application/pdf' || /\.pdf$/i.test(f.name));
    if (accepted.length === 0) {
      setError(STRINGS.errorGeneric);
      return;
    }
    const counts: number[] = [];
    for (const file of accepted) {
      const bytes = new Uint8Array(await file.arrayBuffer());
      if (isPdfEncrypted(bytes)) {
        setError(STRINGS.errorEncrypted);
        continue;
      }
      try {
        // Count pages with pdf-lib rather than pdf.js: it is already loaded for
        // the write path, and opening a second engine just to read a count
        // would double the work for large files.
        const { PDFDocument: PdfDocumentCtor } = await loadPdfLib();
        const probe = await PdfDocumentCtor.load(bytes, { ignoreEncryption: true });
        counts.push(probe.getPageCount());
      } catch {
        setError(STRINGS.errorGeneric);
      }
    }
    if (counts.length > 0) {
      setFiles((prev) => [...prev, ...accepted]);
      setPageCounts((prev) => [...prev, ...counts]);
    }
  }, []);

  const clearAll = useCallback(() => {
    setFiles([]);
    setPageCounts([]);
    setDone(null);
    setError(null);
    setOptions((o) => ({ ...o, targetPages: [] }));
  }, []);

  const apply = useCallback(async () => {
    if (files.length === 0) return;
    if (mode === 'sign' && !signImage) {
      setError(STRINGS.errorNoSignature);
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const lib = await loadPdfLib();
      const { PDFDocument: PdfDocumentCtor } = lib;
      const merged = await PdfDocumentCtor.create();
      let outPages = 0;
      for (const file of files) {
        const src = await PdfDocumentCtor.load(await file.arrayBuffer(), { ignoreEncryption: true });
        const copied = await merged.copyPages(src, src.getPageIndices());
        for (const page of copied) merged.addPage(page);
        outPages += copied.length;
      }
await applyOverlay(
        merged,
        mode,
        options,
        signImage ? { bytes: new Uint8Array(await signImage.file.arrayBuffer()), isPng: signImage.isPng } : null,
        lib,
      );
      const bytes = await merged.save();
      const blob = new Blob([bytes.slice()], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${files[0].name.replace(/\.pdf$/i, '')}-${mode}.pdf`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 30_000);
      setDone(a.download);
    } catch {
      setError(STRINGS.errorGeneric);
    } finally {
      setBusy(false);
    }
  }, [files, mode, options, signImage]);

  const set = <K extends keyof OverlayOptions>(key: K, value: OverlayOptions[K]) =>
    setOptions((o) => ({ ...o, [key]: value }));

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
      <input
        ref={signRef}
        type="file"
        accept="image/png,image/jpeg"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          if (signUrlRef.current) URL.revokeObjectURL(signUrlRef.current);
          const url = URL.createObjectURL(file);
          signUrlRef.current = url;
          setSignImage({ file, isPng: file.type === 'image/png' });
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
            {mode === 'watermark' && (
              <>
                <label className="flex flex-col gap-1.5 sm:col-span-2">
                  <span className="text-body-sm text-mute">{STRINGS.watermarkText}</span>
                  <input
                    type="text"
                    value={options.text}
                    onChange={(e) => set('text', e.target.value)}
                    className="rounded-md bg-canvas px-3 py-2 text-body-md ring-1 ring-hairline"
                  />
                </label>
                <label className="flex items-center gap-2 text-body-md">
                  <input
                    type="checkbox"
                    checked={options.tile}
                    onChange={(e) => set('tile', e.target.checked)}
                    className="size-4"
                  />
                  {STRINGS.tile}
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-body-sm text-mute">{STRINGS.colour}</span>
                  <input
                    type="color"
                    value={options.color}
                    onChange={(e) => set('color', e.target.value)}
                    className="h-10 rounded-md ring-1 ring-hairline"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-body-sm text-mute">
                    {STRINGS.fontSize} — {options.fontSize}
                  </span>
                  <input
                    type="range"
                    min={12}
                    max={120}
                    value={options.fontSize}
                    onChange={(e) => set('fontSize', Number(e.target.value))}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-body-sm text-mute">
                    {STRINGS.opacity} — {Math.round(options.opacity * 100)}%
                  </span>
                  <input
                    type="range"
                    min={5}
                    max={100}
                    value={Math.round(options.opacity * 100)}
                    onChange={(e) => set('opacity', Number(e.target.value) / 100)}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-body-sm text-mute">
                    {STRINGS.rotation} — {options.rotation}°
                  </span>
                  <input
                    type="range"
                    min={-90}
                    max={90}
                    value={options.rotation}
                    onChange={(e) => set('rotation', Number(e.target.value))}
                  />
                </label>
              </>
            )}

            {mode === 'numbers' && (
              <>
                <label className="flex flex-col gap-1.5 sm:col-span-2">
                  <span className="text-body-sm text-mute">{STRINGS.format}</span>
                  <input
                    type="text"
                    value={options.numberFormat}
                    onChange={(e) => set('numberFormat', e.target.value)}
                    className="rounded-md bg-canvas px-3 py-2 text-body-md ring-1 ring-hairline"
                  />
                  <span className="text-body-sm text-mute">{STRINGS.formatHint}</span>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-body-sm text-mute">{STRINGS.startAt}</span>
                  <input
                    type="number"
                    min={0}
                    max={9999}
                    value={options.startAt}
                    onChange={(e) => set('startAt', Number(e.target.value))}
                    className="rounded-md bg-canvas px-3 py-2 text-body-md ring-1 ring-hairline"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-body-sm text-mute">{STRINGS.fontSize}</span>
                  <input
                    type="number"
                    min={6}
                    max={48}
                    value={options.fontSize}
                    onChange={(e) => set('fontSize', Number(e.target.value))}
                    className="rounded-md bg-canvas px-3 py-2 text-body-md ring-1 ring-hairline"
                  />
                </label>
              </>
            )}

            {mode === 'sign' && (
              <div className="flex flex-col gap-3 sm:col-span-2">
                <button type="button" className="btn btn-secondary w-fit" onClick={() => signRef.current?.click()}>
                  <Upload size={16} />
                  {STRINGS.signatureImage}
                </button>
                {signImage && (
                  <img
                    src={signUrlRef.current ?? ''}
                    alt="Signature preview"
                    className="max-h-24 w-fit rounded-md bg-canvas-soft object-contain ring-1 ring-hairline"
                  />
                )}
                <p className="text-body-sm text-mute">{STRINGS.signatureHint}</p>
              </div>
            )}

            <label className="flex flex-col gap-1.5">
              <span className="text-body-sm text-mute">{STRINGS.position}</span>
              <select
                value={options.anchor}
                onChange={(e) => set('anchor', e.target.value as Anchor)}
                className="rounded-md bg-canvas px-3 py-2 text-body-md ring-1 ring-hairline"
              >
                {Object.entries(ANCHOR_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button type="button" className="btn btn-primary" onClick={() => void apply()} disabled={busy}>
            {busy ? <LoaderCircle size={18} className="animate-spin" /> : <Download size={18} />}
            {busy ? STRINGS.applying : STRINGS.apply(mode)}
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