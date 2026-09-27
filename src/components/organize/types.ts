import type { PDFDocumentProxy } from 'pdfjs-dist';

export interface SourceDoc {
  id: string;
  name: string;
  bytes: Uint8Array;
  doc: PDFDocumentProxy | null;
  pageCount: number;
  blank?: boolean;
  blankSize?: { width: number; height: number };
  encrypted?: boolean;
}

export interface PageItem {
  id: string;
  sourceId: string;
  sourcePageIndex: number;
  rotation: 0 | 90 | 180 | 270;
}

export type Zoom = 'sm' | 'md' | 'lg';

export type Status = 'empty' | 'loading' | 'ready' | 'exporting' | 'done';

/**
 * The single page operation a tool page foregrounds.
 *
 * The engine already implements every one of these, so a tool page is the same
 * editor with a different control brought to the foreground: `PageCard` keeps
 * the matching action permanently visible instead of hover-revealed, and
 * `Toolbar`/`BatchBar` ring the matching control. This is what lets seven tool
 * pages share one component instead of shipping near-duplicates.
 */
export type ToolFocus =
  | 'merge'
  | 'delete'
  | 'rotate'
  | 'reverse'
  | 'insert'
  | 'duplicate'
  | 'blank';

export interface ToastMessage {
  id: string;
  kind: 'success' | 'error' | 'info';
  text: string;
}

export const ZOOM_WIDTHS: Record<Zoom, number> = {
  sm: 110,
  md: 165,
  lg: 235,
};

export const SOURCE_COLORS = [
  '#b86700',
  '#0e6e8c',
  '#054d28',
  '#a72027',
  '#4a3b1c',
  '#163300',
];

export const A4_RATIO = 595.28 / 841.89;

export function blankPageRatio(rotation: number): number {
  return rotation % 180 === 90 ? 1 / A4_RATIO : A4_RATIO;
}

export function uid(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function formatBytes(bytes: number, locale = 'en'): string {
  const format = (value: number, unit: string, maximumFractionDigits = 0) =>
    `${new Intl.NumberFormat(locale, {
      useGrouping: false,
      maximumFractionDigits,
    }).format(value)} ${unit}`;
  if (bytes < 1024) return format(bytes, 'B');
  if (bytes < 1024 * 1024) return format(bytes / 1024, 'KB');
  return format(bytes / (1024 * 1024), 'MB', 1);
}
