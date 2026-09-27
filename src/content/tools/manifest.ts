/**
 * Single source of truth for every standalone tool page.
 *
 * `src/pages/sitemap.xml.ts` derives its `<url>` entries from here, and
 * `scripts/verify-i18n.mjs` asserts that each enabled tool actually emitted a
 * page in every locale. Adding a tool therefore means adding one entry here
 * plus its two route files — nothing else needs to learn about it.
 *
 * Slugs are locale-independent logical paths: `merge-pdf` → `/merge-pdf/`
 * (English) and `/fr/merge-pdf/` (French). Keep them lowercase and hyphenated;
 * they are already live URLs, so renaming one is a 301, not an edit.
 */

import { locales, type Locale } from '../../i18n/ui';
import type { ToolFocus } from '../../components/organize/types';

/**
 * Which client-side engine renders the page's interactive tool.
 *
 * - `organize` — the existing `OrganizeTool`, driven by a `focus` value.
 * - `split`    — page-range selection, exports N files.
 * - `extract`  — keep-selected-pages, exports 1 file.
 */
export type ToolEngine = 'organize' | 'split' | 'extract';

export type { ToolFocus };

export interface ToolEntry {
  /** Logical path segment. Becomes `/<slug>/`. */
  slug: string;
  /** `Icon.astro` name for the hub, cards and nav. */
  icon: string;
  engine: ToolEngine;
  /** Required when `engine` is `organize`. */
  focus?: ToolFocus;
  /**
   * The head term this page targets. Documentation and test assertions only —
   * never rendered. Used to keep the cluster from cannibalising itself: two
   * tools must not share a primary term.
   */
  primary: string;
  /** Slugs of sibling tools linked from this page's "related tools" block. */
  related: string[];
  /**
   * Locales this page is published in. Omit for all locales. Tier 2 tools are
   * added English-first, so the field exists now to avoid a second refactor —
   * a restricted tool must not be emitted by the `[lang]` routes, the sitemap
   * or the hreflang cluster.
   */
  locales?: Locale[];
}

export const tools: readonly ToolEntry[] = [
  {
    slug: 'merge-pdf',
    icon: 'file-stack',
    engine: 'organize',
    focus: 'merge',
    primary: 'merge pdf',
    related: ['split-pdf', 'insert-pdf-pages', 'rotate-pdf'],
  },
  {
    slug: 'split-pdf',
    icon: 'columns',
    engine: 'split',
    primary: 'split pdf',
    related: ['extract-pdf-pages', 'merge-pdf', 'delete-pdf-pages'],
  },
  {
    slug: 'delete-pdf-pages',
    icon: 'trash',
    engine: 'organize',
    focus: 'delete',
    primary: 'delete pdf pages',
    related: ['extract-pdf-pages', 'split-pdf', 'insert-pdf-pages'],
  },
  {
    slug: 'rotate-pdf',
    icon: 'rotate-cw',
    engine: 'organize',
    focus: 'rotate',
    primary: 'rotate pdf',
    related: ['reverse-pdf-pages', 'merge-pdf', 'insert-blank-page'],
  },
  {
    slug: 'reverse-pdf-pages',
    icon: 'refresh-cw',
    engine: 'organize',
    focus: 'reverse',
    primary: 'reverse pdf pages',
    related: ['rotate-pdf', 'merge-pdf', 'duplicate-pdf-pages'],
  },
  {
    slug: 'extract-pdf-pages',
    icon: 'scan-line',
    engine: 'extract',
    primary: 'extract pdf pages',
    related: ['delete-pdf-pages', 'split-pdf', 'merge-pdf'],
  },
  {
    slug: 'insert-pdf-pages',
    icon: 'file-plus',
    engine: 'organize',
    focus: 'insert',
    primary: 'insert pdf pages',
    related: ['merge-pdf', 'insert-blank-page', 'duplicate-pdf-pages'],
  },
  {
    slug: 'duplicate-pdf-pages',
    icon: 'copy',
    engine: 'organize',
    focus: 'duplicate',
    primary: 'duplicate pdf pages',
    related: ['insert-pdf-pages', 'merge-pdf', 'delete-pdf-pages'],
  },
  {
    slug: 'insert-blank-page',
    icon: 'plus',
    engine: 'organize',
    focus: 'blank',
    primary: 'insert blank page pdf',
    related: ['insert-pdf-pages', 'merge-pdf', 'rotate-pdf'],
  },
] as const;

/** Slugs that get a `/tools/` hub card, in manifest order. */
export const toolSlugs: readonly string[] = tools.map((tool) => tool.slug);

const bySlug = new Map(tools.map((tool) => [tool.slug, tool]));

export function getTool(slug: string): ToolEntry | undefined {
  return bySlug.get(slug);
}

export function getTools(slugs: readonly string[]): ToolEntry[] {
  return slugs.map((slug) => bySlug.get(slug)).filter((tool): tool is ToolEntry => Boolean(tool));
}

/** Locales a tool is published in. Omitted `locales` means every locale. */
export function toolLocales(tool: ToolEntry): Locale[] {
  return tool.locales ?? [...locales];
}

export function isToolLiveIn(tool: ToolEntry, locale: Locale): boolean {
  return toolLocales(tool).includes(locale);
}

/** Tools published in `locale`, in manifest order. */
export function toolsForLocale(locale: Locale): ToolEntry[] {
  return tools.filter((tool) => isToolLiveIn(tool, locale));
}
