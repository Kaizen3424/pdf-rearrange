/**
 * Content contract for the `[competitor]-alternative` pages.
 *
 * These pages are structured, not free-form: the same twelve blocks render for
 * every competitor, so a missing block is a layout bug rather than a shorter
 * page. Modelling the shape as a type (rather than letting each page hand-write
 * its own Astro) means adding a section later touches one template, not three.
 *
 * ## Why this is not in `src/i18n/locales/`
 *
 * That dictionary holds chrome and fixed editorial copy. A comparison page is
 * keyed by *slug* and shares almost no strings between competitors, so the
 * per-locale file mirrors the `src/content/tools/<locale>/` pattern instead.
 */

/** One row of the side-by-side table. */
export interface ComparisonRow {
  /** The axis being compared, e.g. "Where your file is processed". */
  label: string;
  /**
   * RearrangePDF's position. Every value here is a property of our own code and
   * is verifiable by the reader in DevTools, so this column may be specific.
   */
  ours: string;
  /**
   * The competitor's position, stated only where it is a stable, checkable fact.
   *
   * Where we are not confident — and competitor pricing, quotas and free-tier
   * terms change without notice — this holds a short deferral and `theirsHref`
   * points at their own page. Stating a stale number to win a comparison is
   * both wrong and self-defeating: the reader checks, finds it moved, and
   * discounts everything else on the page too.
   */
  theirs: string;
  /** Optional link to where the competitor's current terms are documented. */
  theirsHref?: string;
  /** Link text, when the label needs clarifying. */
  theirsHrefLabel?: string;
}

export interface ComparisonAdvantage {
  title: string;
  text: string;
}

export interface ComparisonFaq {
  q: string;
  /** Rich-text: `<a href>`, `<strong>` are rendered, everything else is escaped. */
  a: string;
}

export interface ComparisonPage {
  /** Logical path segment; matches the `pages` entry in `registry.json`. */
  slug: string;
  /** Display name of the tool being compared against, e.g. "Smallpdf". */
  competitor: string;
  /** Their homepage, for the honest "what they do well" section. */
  competitorHome: string;

  meta: {
    title: string;
    description: string;
  };
  breadcrumb: string;
  h1: string;
  /** Rich-text intro under the h1. */
  intro: string;

  /** Heading and bullets for why a reader would arrive on this page. */
  reasonsH2: string;
  reasons: string[];

  /** The differentiators we can prove, rendered as cards. */
  advantagesH2: string;
  advantages: ComparisonAdvantage[];

  tableH2: string;
  /** Discloses the deferrals above so the table is not read as a claim. */
  tableNote: string;
  rows: ComparisonRow[];

  /**
   * What the competitor genuinely does well.
   *
   * Not SEO filler. A comparison page that only attacks reads as a sales page
   * and gets the reader to check the competitor anyway; conceding the real
   * strengths is what makes the rows above it credible.
   */
  strengthsH2: string;
  strengths: string[];

  ctaH2: string;
  ctaP: string;

  faqH2: string;
  faq: ComparisonFaq[];
}

/**
 * Template chrome shared by every comparison page in one locale.
 *
 * These two labels live here rather than in `src/i18n/locales/<locale>.ts`
 * because that dictionary is strictly typed across all eight locales: adding a
 * key forces a translation into seven locales whose comparison pages are not
 * published yet, which is dead copy and a translation nobody can check against
 * a rendered page. Here, the strings arrive with the pages that use them.
 */
export interface ComparisonChrome {
  /** First column header in the side-by-side table. */
  tableFeature: string;
  /** Primary CTA button label. */
  ctaButton: string;
  /** Heading above the links to the other comparison pages. */
  otherAlternatives: string;
}

export interface ComparisonBundle {
  chrome: ComparisonChrome;
  pages: Record<string, ComparisonPage>;
}