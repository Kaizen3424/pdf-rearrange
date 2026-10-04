/**
 * Image -> PDF engine.
 *
 * Takes one or more images and builds a single PDF from them, entirely in the
 * browser. Three published tools share this component — `jpg-to-pdf`,
 * `png-to-pdf` and `images-to-pdf` — differing only in which file types they
 * accept, because the search intent behind each is distinct even though the
 * work is identical.
 *
 * ## Why this is simpler than `OrganizeTool`
 *
 * There is no pdf.js here. The input is decoded images, not a PDF, so there is
 * no document to open, no page tree, and no password prompt. The output side
 * uses pdf-lib, the same library the reorganise tools export with.
 *
 * ## Destructive-by-default choices
 *
 * Two settings are easy to get wrong and both were deliberate:
 *
 * - **Images are re-encoded to JPEG unless they are PNGs with alpha.** Embedding
 *   a PNG with an alpha channel into a PDF requires an SMask, which pdf-lib
 *   cannot produce for image XObjects without extra work; silently flattening to
 *   white would surprise anyone placing a logo on a transparent background. So
 *   PNG-with-alpha is drawn onto a white page explicitly rather than embedded.
 * - **Nothing is upscaled.** A 400px-wide screenshot placed on A4 stays 400px
 *   wide. Scaling it up to fill the page would invent detail and make the result
 *   larger for no benefit.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { PDFDocument } from 'pdf-lib';
import { ArrowRight, Download, GripVertical, LoaderCircle, Plus, ShieldCheck, Trash2, Upload, X } from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ImageItem {
  id: string;
  name: string;
  /** Object URL for the preview. Revoked on removal and unmount. */
  url: string;
  width: number;
  height: number;
  /** True when the source PNG carries transparency. */
  hasAlpha: boolean;
  type: string;
}

/** Paper sizes in PDF points (72 per inch). */
const PAGE_SIZES = {
  a4: { w: 595.28, h: 841.89, label: 'A4' },
  letter: { w: 612, h: 792, label: 'Letter' },
  image: { w: 0, h: 0, label: 'Fit to image' },
} as const;

export type PageSizeKey = keyof typeof PAGE_SIZES;

export type Orientation = 'auto' | 'portrait' | 'landscape';

export interface ImageToPdfOptions {
  pageSize: PageSizeKey;
  orientation: Orientation;
  /** Uniform margin in points around the image. */
  margin: number;
  /** Keep each image on its own page. Always true today; the flag exists so the
   *  setting can be exposed without reshaping the export contract. */
  onePerPage: true;
}

// ---------------------------------------------------------------------------
// Images
// ---------------------------------------------------------------------------

/**
 * Detects an alpha channel without decoding the whole file.
 *
 * The header byte of a PNG's IHDR (colour type 6 = RGBA, 4 = grey+alpha, 3 =
 * indexed with a tRNS chunk) is authoritative and cheap. Anything else — JPEG,
 * WEBP without alpha, or a PNG we fail to parse — is treated as opaque, which
 * is the safe default: embedding an opaque image on a white page looks correct,
 * whereas wrongly assuming transparency gives a white box where artwork should
 * be.
 */
function detectAlpha(bytes: Uint8Array, type: string): boolean {
  const isPng = type === 'image/png' || bytes[0] === 0x89;
  if (!isPng || bytes.length < 26) return false;
  // Bytes 24-25 are IHDR's colour type once past the 8-byte signature and the
  // 25-byte length+type prefix.
  const colourType = bytes[25];
  return colourType === 4 || colourType === 6;
}

/** Decodes dimensions (and alpha) via createImageBitmap, then releases it. */
async function probe(file: File): Promise<{ width: number; height: number; hasAlpha: boolean }> {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const hasAlpha = detectAlpha(bytes, file.type);
  const bitmap = await createImageBitmap(file);
  const dims = { width: bitmap.width, height: bitmap.height, hasAlpha };
  bitmap.close();
  return dims;
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

/**
 * Builds the PDF.
 *
 * Images are embedded losslessly where the format allows it: JPEG bytes are
 * embedded verbatim, so a photograph is never re-encoded. PNGs without alpha go
 * in verbatim too. A PNG *with* alpha is drawn onto an opaque page canvas
 * because PDF image XObjects cannot carry an alpha channel in pdf-lib without
 * a soft mask, and dropping the transparency would be a silent data loss.
 */
export async function buildPdf(
  items: readonly ImageItem[],
  files: ReadonlyMap<string, File>,
  options: ImageToPdfOptions,
): Promise<Blob> {
  // pdf-lib is ~415 KB. `exportService` already loads it on demand for the
  // reorganise tools, and this page should cost the same: the library is only
  // needed once there are pages to write, which is after the user has picked
  // their files and can no longer be helped by a faster first paint.
  const { PDFDocument: PdfDocumentCtor } = await import('pdf-lib');
  const doc = await PdfDocumentCtor.create();
  const margin = Math.max(0, options.margin);

  for (const item of items) {
    const file = files.get(item.id);
    if (!file) continue;

    const bytes = new Uint8Array(await file.arrayBuffer());
    let pageW: number;
    let pageH: number;

    if (options.pageSize === 'image') {
      pageW = item.width + margin * 2;
      pageH = item.height + margin * 2;
    } else {
      const base = PAGE_SIZES[options.pageSize];
      const landscape =
        options.orientation === 'landscape' ||
        (options.orientation === 'auto' && item.width > item.height);
      // Portrait uses the base's own w/h; landscape swaps them. Written as a
      // swap rather than `max`/`min` so the two cases cannot drift apart.
      const [shortSide, longSide] =
        base.w <= base.h ? [base.w, base.h] : [base.h, base.w];
      pageW = landscape ? longSide : shortSide;
      pageH = landscape ? shortSide : longSide;
    }

    const page = doc.addPage([pageW, pageH]);
    const maxW = Math.max(1, pageW - margin * 2);
    const maxH = Math.max(1, pageH - margin * 2);
    // Contain, never cover: fitting means the whole image is visible.
    const scale = Math.min(maxW / item.width, maxH / item.height, 1);
    const drawW = item.width * scale;
    const drawH = item.height * scale;
    const x = margin + (maxW - drawW) / 2;
    const y = pageH - margin - drawH - (maxH - drawH) / 2;

    if (item.hasAlpha) {
      const bitmap = await createImageBitmap(file);
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(drawW));
      canvas.height = Math.max(1, Math.round(drawH));
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        bitmap.close();
        throw new Error('Canvas is not supported in this browser');
      }
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      bitmap.close();
      const embedded = await doc.embedPng(canvas.toDataURL('image/png'));
      page.drawImage(embedded, { x, y, width: drawW, height: drawH });
    } else if (item.type === 'image/png') {
      const embedded = await doc.embedPng(bytes);
      page.drawImage(embedded, { x, y, width: drawW, height: drawH });
    } else {
      const embedded = await doc.embedJpg(bytes);
      page.drawImage(embedded, { x, y, width: drawW, height: drawH });
    }
  }

  const bytesOut = await doc.save();
  // pdf-lib hands back a Uint8Array over a larger buffer; slice it so the Blob
  // reports the real size rather than the buffer's capacity.
  return new Blob([bytesOut.slice()], { type: 'application/pdf' });
}

// ---------------------------------------------------------------------------
// Strings
// ---------------------------------------------------------------------------

/**
 * English-only UI copy.
 *
 * Deliberately not routed through `src/i18n/locales/<locale>.ts`: that
 * dictionary is strictly typed across all eight locales, so a new string there
 * forces a translation into every locale on the next build even when the tool
 * is staged English-first. Keeping an engine's strings beside the engine means
 * a locale gains them when its tool page is actually published.
 */
const STRINGS = {
  dropHeading: 'Add your images',
  dropSelect: 'Select images',
  dropHint: 'You can also drop files here or paste with Ctrl+V. Add more at any time.',
  dropPrivacy: 'Images are converted on your device, never uploaded.',
  reading: 'Reading images',
  processingLocally: 'Everything happens locally',
  reorderHint: 'Drag to set the page order',
  pageOf: (n: number, total: number) => `Image ${n} of ${total}`,
  addMore: 'Add images',
  startOver: 'Start over',
  download: 'Download PDF',
  downloading: 'Building PDF',
  remove: 'Remove image',
  moveUp: 'Move earlier',
  moveDown: 'Move later',
  emptyTitle: 'Nothing here yet',
  emptyBody: 'Add one or more images and they will become the pages of your PDF.',
  ready: (n: number) => `${n} page${n === 1 ? '' : 's'} ready to download`,
  privacy: 'Images are converted on your device, never uploaded.',
  settingsHeading: 'Page setup',
  pageSize: 'Page size',
  orientation: 'Orientation',
  margin: 'Margin',
  orientationAuto: 'Match image',
  orientationPortrait: 'Portrait',
  orientationLandscape: 'Landscape',
  sizeImage: 'Fit to image',
  marginNone: 'None',
  errorNotImage: 'That file is not a supported image.',
  errorTooLarge: 'That image is too large to convert.',
} as const;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export interface ImageToPdfProps {
  /** MIME types accepted from the file picker. */
  accept: string;
  /** Restricts dropped/pasted files to these extensions as well. */
  acceptExtensions: readonly string[];
  /** Output file name, without the extension. */
  fileName: string;
}

export default function ImageToPdfTool({ accept, acceptExtensions, fileName }: ImageToPdfProps) {
  const [items, setItems] = useState<ImageItem[]>([]);
  const [files, setFiles] = useState<Map<string, File>>(new Map());
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [zoom, setZoom] = useState<'s' | 'm' | 'l'>('m');
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [options, setOptions] = useState<ImageToPdfOptions>({
    pageSize: 'a4',
    orientation: 'auto',
    margin: 0,
    onePerPage: true,
  });

  const inputRef = useRef<HTMLInputElement | null>(null);

  const isAccepted = useCallback(
    (file: File) => {
      if (acceptExtensions.length === 0) return true;
      const ext = file.name.slice(file.name.lastIndexOf('.') + 1).toLowerCase();
      return acceptExtensions.includes(ext);
    },
    [acceptExtensions],
  );

  const addFiles = useCallback(
    async (incoming: readonly File[]) => {
      setError(null);
      const usable = incoming.filter((f) => f.type.startsWith('image/') && isAccepted(f));
      if (usable.length !== incoming.length) setError(STRINGS.errorNotImage);
      if (usable.length === 0) return;

      setLoading(true);
      const added: ImageItem[] = [];
      const nextFiles = new Map(files);
      for (const file of usable) {
        try {
          const { width, height, hasAlpha } = await probe(file);
          const id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
          const url = URL.createObjectURL(file);
          urlsRef.current.add(url);
          added.push({ id, name: file.name, url, width, height, hasAlpha, type: file.type });
          nextFiles.set(id, file);
        } catch {
          setError(STRINGS.errorTooLarge);
        }
      }
      if (added.length > 0) {
        setItems((prev) => [...prev, ...added]);
        setFiles(nextFiles);
      }
      setLoading(false);
    },
    [files, isAccepted],
  );

  /**
   * Every object URL this component hands out, tracked so they can all be
   * released on unmount.
   *
   * A `Set` rather than a `Map` keyed by id: the only thing cleanup needs is
   * the URL itself. Each URL is registered at creation and revoked exactly once,
   * either by `remove`/`clearAll` or by the unmount effect below — whichever
   * happens first removes it from the set, so a later unmount cannot revoke an
   * already-revoked URL (harmless, but it hides double-revocation bugs).
   */
  const urlsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const urls = urlsRef.current;
    return () => {
      for (const url of urls) URL.revokeObjectURL(url);
      urls.clear();
    };
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => {
      const gone = prev.find((i) => i.id === id);
      if (gone) {
        URL.revokeObjectURL(gone.url);
        urlsRef.current.delete(gone.url);
      }
      return prev.filter((i) => i.id !== id);
    });
    setFiles((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    setItems((prev) => {
      for (const item of prev) {
        URL.revokeObjectURL(item.url);
        urlsRef.current.delete(item.url);
      }
      return [];
    });
    setFiles(new Map());
    setError(null);
  }, []);

  const move = useCallback((from: number, to: number) => {
    setItems((prev) => {
      if (to < 0 || to >= prev.length) return prev;
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  }, []);

  const download = useCallback(async () => {
    if (items.length === 0) return;
    setBusy(true);
    setError(null);
    try {
      const blob = await buildPdf(items, files, options);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName}.pdf`;
      a.click();
      // Revoking immediately can cancel the download in some browsers; a short
      // delay is the reliable compromise and costs nothing.
      setTimeout(() => URL.revokeObjectURL(url), 30_000);
    } catch {
      setError(STRINGS.errorTooLarge);
    } finally {
      setBusy(false);
    }
  }, [items, files, options, fileName]);

  // Paste support, matching the behaviour the other tools advertise.
  useEffect(() => {
    const onPaste = (event: ClipboardEvent) => {
      const files = [...(event.clipboardData?.files ?? [])];
      if (files.length > 0) {
        event.preventDefault();
        void addFiles(files);
      }
    };
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, [addFiles]);

  const zoomClass = { s: 'grid-cols-3', m: 'grid-cols-2 sm:grid-cols-3', l: 'grid-cols-1 sm:grid-cols-2' }[zoom];
  const summary = useMemo(() => STRINGS.ready(items.length), [items.length]);

  return (
    <div className="flex flex-col gap-4">
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        // `hidden`, not `sr-only`, matching OrganizeTool/SplitTool/ExtractTool.
        // The input is only ever reached through the visible buttons, so it
        // should not appear in the accessibility tree at all — as `sr-only` it
        // did appear, and an exposed file input with no label fails axe.
        className="hidden"
        onChange={(event) => {
          void addFiles([...(event.target.files ?? [])]);
          event.target.value = '';
        }}
      />

      {items.length === 0 ? (
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
              {summary}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex overflow-hidden rounded-md ring-1 ring-hairline" role="group">
                {(['s', 'm', 'l'] as const).map((z) => (
                  <button
                    key={z}
                    type="button"
                    aria-pressed={zoom === z}
                    onClick={() => setZoom(z)}
                    className={`px-3 py-1.5 text-caption font-semibold uppercase transition-colors ${
                      zoom === z ? 'bg-solid text-primary' : 'bg-canvas text-body hover:bg-canvas-soft'
                    }`}
                  >
                    {z}
                  </button>
                ))}
              </div>
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

          <p className="text-body-sm text-mute">{STRINGS.reorderHint}</p>

          <ul className={`grid list-none gap-4 p-0 ${zoomClass}`}>
            {items.map((item, index) => (
              <li
                key={item.id}
                draggable
                onDragStart={() => setDragIndex(index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (dragIndex !== null && dragIndex !== index) move(dragIndex, index);
                  setDragIndex(null);
                }}
                className="relative flex flex-col overflow-hidden rounded-xl bg-canvas elev-1 ring-1 ring-hairline"
              >
                <div className="flex items-center gap-2 px-3 py-2">
                  <GripVertical size={16} className="shrink-0 text-mute" aria-hidden="true" />
                  <span className="truncate text-body-sm text-body">{item.name}</span>
                  <button
                    type="button"
                    className="btn-icon ml-auto"
                    onClick={() => remove(item.id)}
                    aria-label={`${STRINGS.remove}: ${item.name}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <img
                  src={item.url}
                  alt={STRINGS.pageOf(index + 1, items.length)}
                  className="w-full flex-1 bg-canvas-soft object-contain"
                  style={{ aspectRatio: `${item.width} / ${item.height}` }}
                />
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-caption text-mute">{STRINGS.pageOf(index + 1, items.length)}</span>
                  <span className="flex gap-1">
                    <button
                      type="button"
                      className="btn-icon"
                      disabled={index === 0}
                      onClick={() => move(index, index - 1)}
                      aria-label={STRINGS.moveUp}
                    >
                      <ArrowRight size={15} className="-rotate-90" />
                    </button>
                    <button
                      type="button"
                      className="btn-icon"
                      disabled={index === items.length - 1}
                      onClick={() => move(index, index + 1)}
                      aria-label={STRINGS.moveDown}
                    >
                      <ArrowRight size={15} className="rotate-90" />
                    </button>
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="rounded-xl bg-canvas p-5 ring-1 ring-hairline">
            <h3 className="text-body-md-strong">{STRINGS.settingsHeading}</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <label className="flex flex-col gap-1.5">
                <span className="text-body-sm text-mute">{STRINGS.pageSize}</span>
                <select
                  className="rounded-md bg-canvas px-3 py-2 text-body-md ring-1 ring-hairline"
                  value={options.pageSize}
                  onChange={(e) => setOptions((o) => ({ ...o, pageSize: e.target.value as PageSizeKey }))}
                >
                  <option value="a4">{PAGE_SIZES.a4.label}</option>
                  <option value="letter">{PAGE_SIZES.letter.label}</option>
                  <option value="image">{STRINGS.sizeImage}</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-body-sm text-mute">{STRINGS.orientation}</span>
                <select
                  className="rounded-md bg-canvas px-3 py-2 text-body-md ring-1 ring-hairline"
                  value={options.orientation}
                  onChange={(e) =>
                    setOptions((o) => ({ ...o, orientation: e.target.value as Orientation }))
                  }
                >
                  <option value="auto">{STRINGS.orientationAuto}</option>
                  <option value="portrait">{STRINGS.orientationPortrait}</option>
                  <option value="landscape">{STRINGS.orientationLandscape}</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-body-sm text-mute">{STRINGS.margin}</span>
                <select
                  className="rounded-md bg-canvas px-3 py-2 text-body-md ring-1 ring-hairline"
                  value={options.margin}
                  onChange={(e) => setOptions((o) => ({ ...o, margin: Number(e.target.value) }))}
                >
                  <option value={0}>{STRINGS.marginNone}</option>
                  <option value={24}>Small</option>
                  <option value={48}>Medium</option>
                  <option value={96}>Large</option>
                </select>
              </label>
            </div>
          </div>

          <button type="button" className="btn btn-primary" onClick={() => void download()} disabled={busy}>
            {busy ? <LoaderCircle size={18} className="animate-spin" /> : <Download size={18} />}
            {busy ? STRINGS.downloading : STRINGS.download}
          </button>

          {error && <p className="text-body-md text-negative-deep" role="alert">{error}</p>}
        </>
      )}

      {loading && (
        <p className="text-body-md text-body" role="status">
          {STRINGS.reading} — {STRINGS.processingLocally}
        </p>
      )}
    </div>
  );
}