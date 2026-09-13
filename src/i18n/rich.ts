/**
 * Translation strings may carry a tiny, safe subset of inline markup:
 * `<strong>…</strong>` and `<a href="/…">…</a>`. This parser turns such a
 * string into typed segments that Astro/React components can render, so
 * translators can move emphasis and links freely inside a sentence.
 * Everything is allow-listed: unknown markup stays literal text.
 */

export type RichSegment =
  | { kind: 'text'; text: string }
  | { kind: 'strong'; text: string }
  | { kind: 'link'; text: string; href: string };

const PATTERN = /<strong>(.*?)<\/strong>|<a\s+href="([^"]*)"\s*>(.*?)<\/a>/g;

function isSafeHref(href: string): boolean {
  return href.startsWith('/') || href.startsWith('mailto:') || href.startsWith('#');
}

export function parseRich(text: string): RichSegment[] {
  const segments: RichSegment[] = [];
  let lastIndex = 0;
  for (const match of text.matchAll(PATTERN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      segments.push({ kind: 'text', text: text.slice(lastIndex, index) });
    }
    if (match[1] !== undefined) {
      segments.push({ kind: 'strong', text: match[1] });
    } else {
      const href = match[2] ?? '';
      const label = match[3] ?? '';
      if (isSafeHref(href)) {
        segments.push({ kind: 'link', text: label, href });
      } else {
        segments.push({ kind: 'text', text: match[0] });
      }
    }
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    segments.push({ kind: 'text', text: text.slice(lastIndex) });
  }
  return segments;
}
