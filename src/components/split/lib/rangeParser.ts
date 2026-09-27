/**
 * Page-range grammar for the split tool.
 *
 * Users type `1-4, 9, 15-20`. Every comma-separated part becomes one output
 * file, in the order it was typed. The parser is pure and total: it never
 * throws and never quietly drops a page — anything it cannot honour comes back
 * as an `error` with the offending fragment so the UI can say what to fix.
 * That is the whole promise of the page copy: "a typo will not silently drop
 * pages".
 */

export type RangeErrorKind =
  | 'empty'
  | 'zero'
  | 'syntax'
  | 'unfinished'
  | 'trailing'
  | 'reversed'
  | 'outOfBounds';

export interface ParsedRanges {
  /** One group of zero-based page indices per comma-separated range, in typed order. */
  groups: number[][];
  /** A short human echo of each range (`"1-4"`, `"9"`), for names and the plan list. */
  labels: string[];
  error: RangeErrorKind | null;
  /** The fragment the error is about, when it is about one specific range. */
  part: string | null;
  /** Page count of the document being split, echoed in out-of-bounds messages. */
  total: number;
}

/** Hyphen, minus sign and the Unicode dashes people paste in from documents. */
const DASH = /[-‐‑‒–—―]/;
const DIGITS = /^\d+$/;

function fail(error: RangeErrorKind, total: number, part: string | null = null): ParsedRanges {
  return { groups: [], labels: [], error, part, total };
}

/**
 * Parses `input` against a document of `total` pages.
 *
 * Page numbers are one-based in the UI and zero-based in the output, so
 * `1-4` yields `[0, 1, 2, 3]`. Overlapping ranges are allowed on purpose —
 * `1-3, 2-4` legitimately means "give me two documents that share pages" — but
 * a reversed or out-of-bounds range is always an error, never a silent clamp.
 */
export function parseRanges(input: string, total: number): ParsedRanges {
  const trimmed = input.trim();
  if (trimmed === '') return fail('empty', total);
  if (total < 1) return fail('outOfBounds', total, trimmed);

  const groups: number[][] = [];
  const labels: string[] = [];

  for (const raw of trimmed.split(',')) {
    const part = raw.trim();
    // A leading or trailing comma, or `1,,2`.
    if (part === '') return fail('trailing', total, part);

    const dashAt = part.search(DASH);
    if (dashAt === -1) {
      if (!DIGITS.test(part)) return fail('syntax', total, part);
      const page = Number.parseInt(part, 10);
      if (page === 0) return fail('zero', total, part);
      if (page > total) return fail('outOfBounds', total, part);
      groups.push([page - 1]);
      labels.push(String(page));
      continue;
    }

    const head = part.slice(0, dashAt).trim();
    const tail = part.slice(dashAt + 1).trim();
    if (head === '' || tail === '') return fail('unfinished', total, part);
    if (!DIGITS.test(head) || !DIGITS.test(tail)) return fail('syntax', total, part);

    const from = Number.parseInt(head, 10);
    const to = Number.parseInt(tail, 10);
    if (from === 0 || to === 0) return fail('zero', total, part);
    if (from > to) return fail('reversed', total, part);
    if (to > total) return fail('outOfBounds', total, part);

    const group: number[] = [];
    for (let page = from; page <= to; page++) group.push(page - 1);
    groups.push(group);
    labels.push(`${from}-${to}`);
  }

  return { groups, labels, error: null, part: null, total };
}

/** One group per page — the "every page" mode, in document order. */
export function everyPageGroups(total: number): Pick<ParsedRanges, 'groups' | 'labels'> {
  const groups: number[][] = [];
  const labels: string[] = [];
  for (let index = 0; index < total; index++) {
    groups.push([index]);
    labels.push(String(index + 1));
  }
  return { groups, labels };
}

/**
 * The plan for one parsed input: the page indices per output file, in order.
 * Both split modes funnel through this so the export path is identical.
 */
export function planFor(
  mode: 'range' | 'every',
  input: string,
  total: number,
): ParsedRanges {
  return mode === 'every'
    ? { ...everyPageGroups(total), error: null, part: null, total }
    : parseRanges(input, total);
}

/**
 * Appends a single page number to whatever is already typed, so the grid can
 * build a range by clicking. Keeps the input valid-ish: a dangling dash is
 * completed rather than left for the user to fix by hand.
 */
export function appendPage(input: string, page: number): string {
  const trimmed = input.trim().replace(/,\s*$/, '');
  if (trimmed === '') return String(page);
  if (trimmed.endsWith('-')) return `${trimmed}${page}`;
  return `${trimmed}, ${page}`;
}
