/**
 * The per-tool content contract.
 *
 * Only `meta`, `breadcrumb`, `h1`, `intro` and `faq` are required. Everything
 * else is optional and falls back to the shared, already-translated sections
 * from `src/i18n/locales/` — that fallback is the whole reason 9 tools × 8
 * locales is tractable. A tool page only pays for copy that is genuinely unique
 * to it; the privacy proof, benefit grid and CTA are rendered from the site
 * dictionary and cost nothing per tool.
 *
 * `intro`, `benefits[].text` and `faq[].a` may use the inline markup subset
 * parsed by `src/i18n/rich.ts`: `<strong>…</strong>` and
 * `<a href="/…">…</a>`. Internal hrefs are localised at render time.
 */

export interface ToolContent {
  meta: {
    title: string;
    description: string;
  };
  /** Nav label and breadcrumb trail. */
  breadcrumb: string;
  h1: string;
  /** One or two sentences above the tool. */
  intro: string;
  /**
   * Tool-specific benefits. When omitted, `ToolPage.astro` renders the shared
   * feature grid from the site dictionary instead.
   */
  benefits?: { title: string; text: string }[];
  /** Tool-specific walkthrough. Falls back to the shared how-it-works steps. */
  howTo?: {
    heading: string;
    sub: string;
    steps: { title: string; text: string }[];
  };
  faq: { q: string; a: string }[];
}
