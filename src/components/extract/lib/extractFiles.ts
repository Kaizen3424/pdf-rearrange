/**
 * File name for the extracted document.
 *
 * `exportRearrangedPdf` names its own output, so the download is triggered under
 * this name instead: a document built from a chosen subset of pages is not a
 * rearrangement, and the downloads folder should not claim it is one.
 */

const UNSAFE = /[\\/:*?"<>|]/g;

/** Strips anything a filesystem will not accept, without touching the extension. */
export function safeBaseName(fileName: string): string {
  const base = fileName.replace(/\.pdf$/i, '').replace(UNSAFE, '').trim();
  return base === '' ? 'extract' : base.slice(0, 120);
}

export function extractFileName(sourceName: string, pageCount: number): string {
  const base = safeBaseName(sourceName);
  if (pageCount === 1) return `${base} (extracted 1 page).pdf`;
  return `${base} (extracted ${pageCount} pages).pdf`;
}
