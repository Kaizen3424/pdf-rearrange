/**
 * File names for split output.
 *
 * One file per range, named after the pages it holds so the downloads folder
 * is self-describing. In "every page" mode the page number already makes each
 * name unique, so no `part` prefix is needed; in range mode the prefix appears
 * whenever there is more than one file, which keeps repeated ranges
 * (`1-3, 1-3`) from overwriting each other and sorts into reading order.
 */

const UNSAFE = /[\\/:*?"<>|]/g;

/** Strips anything a filesystem will not accept, without touching the extension. */
export function safeBaseName(fileName: string): string {
  const base = fileName.replace(/\.pdf$/i, '').replace(UNSAFE, '').trim();
  return base === '' ? 'split' : base.slice(0, 120);
}

export function splitFileName(
  sourceName: string,
  label: string,
  index: number,
  total: number,
): string {
  const base = safeBaseName(sourceName);
  if (total <= 1) return `${base} (pages ${label}).pdf`;
  if (label === String(index + 1)) return `${base} (page ${label}).pdf`;
  return `${base} (part ${index + 1}, pages ${label}).pdf`;
}
