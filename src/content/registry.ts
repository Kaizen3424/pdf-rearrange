/**
 * Single source of truth for every standalone page, by locale-independent path.
 *
 * The data lives in `registry.json` rather than here for one reason: three
 * consumers need it and only two of them can import TypeScript. `ToolPage.astro`
 * and `sitemap.xml.ts` can; `scripts/verify-i18n.mjs` and `scripts/audit-seo.mjs`
 * are plain Node and cannot. Emitting a generated `.ts` alongside the JSON was
 * the obvious alternative and is exactly the wrong one — two artefacts that can
 * drift, where a typo in the generator's import silently desynchronises the
 * sitemap from the routes and nothing notices until Google does.
 *
 * ## Paths are locale-independent
 *
 * A slug is one logical path that fans out to every locale it is published in:
 * `merge-pdf` → `/merge-pdf/` (English) and `/fr/merge-pdf/` (French). Keep
 * slugs lowercase and hyphenated. They are live URLs, so renaming one is a 301,
 * not an edit.
 *
 * ## Adding a tool
 *
 * One entry in `registry.json` plus two route files (`src/pages/<slug>.astro`
 * and `src/pages/[lang]/<slug>.astro`). Nothing else needs to learn about it —
 * the `/tools/` hub, the footer column, the homepage strip, the sitemap, the
 * hreflang cluster and the JSON-LD `ItemList` are all derived from here.
 *
 * ## Per-locale copy
 *
 * Not here. `locales` says *whether* a locale is published, never what the page
 * says in it. Tool copy is `src/content/tools/<locale>/<slug>.ts`; editorial
 * copy is `src/i18n/locales/<locale>.ts`.
 */

import rawJson from './registry.json';
import { locales, isLocale, type Locale } from '../i18n/ui';
import { icons } from '../components/site/icons';
import type { ToolFocus } from '../components/organize/types';

/** Icon names `Icon.astro` can actually draw. Validated, not trusted. */
const ICON_NAMES = new Set(Object.keys(icons));

/**
 * Which client-side engine renders the page's interactive tool.
 *
 * - `organize` — the shared `OrganizeTool`, driven by a `focus` value.
 * - `split`    — page-range selection, exports N files.
 * - `extract`  — keep-selected-pages, exports 1 file.
 * - `image`    — images in, one PDF out (`jpg-to-pdf` and friends).
 * - `raster`   — PDF pages out as images (`pdf-to-jpg` and friends).
 * - `overlay`  — draw onto each page (watermark, page numbers, signature).
 * - `geometry` — change page boxes (crop, resize).
 *
 * Adding a member here does *not* make it render. `ToolPage.astro` resolves
 * this union through `ENGINE_COMPONENTS`; an engine missing from that map is a
 * build error rather than a silent fallthrough to `OrganizeTool`, which would
 * render a working page showing the wrong tool.
 */
export type ToolEngine = 'organize' | 'split' | 'extract' | 'image' | 'raster' | 'overlay' | 'geometry';

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
   * The head term this page targets. Documentation and assertions only — never
   * rendered. Used to keep the cluster from cannibalising itself: two tools
   * must not share a primary term.
   */
  primary: string;
  /** Slugs of sibling tools linked from this page's "related tools" block. */
  related: string[];
  /**
   * Locales this page is published in. Omit for all of them.
   *
   * Omitting is the common case and the safe default. Setting it is a promise
   * that the `[lang]` routes, the hreflang cluster and the sitemap all honour
   * the restriction — `localesForLogicalPath` below is the single lookup those
   * three share, and `verify-i18n.mjs` fails the build if any of them emit a
   * locale the registry does not list. New tools are staged English-first and
   * ported once the English page earns impressions, so this is not theoretical.
   */
  locales?: Locale[];
}

export interface PageEntry {
  /**
   * Logical path without a leading slash, e.g. `smallpdf-alternative`. The
   * homepage is `/`. Used for non-tool editorial pages that may be staged per
   * locale the same way tools are.
   */
  path: string;
  /** Locales published in. Omit for all of them. */
  locales?: Locale[];
}

/**
 * The JSON import is cast through `unknown` rather than trusted.
 *
 * TypeScript infers a JSON module's shape from its literal contents, so an
 * absent optional key resolves to `never` and a typo'd key resolves to a type
 * that merely looks plausible. Both are silent. The cast states the intended
 * contract; `assertRegistry` below is what actually checks it, at runtime, on
 * every build — which is the only place the real contents are known.
 */
interface RegistryShape {
  tools: ToolEntry[];
  pages: PageEntry[];
}

const raw = rawJson as unknown as RegistryShape;

/**
 * Shape check on data that crossed a JSON boundary.
 *
 * `registry.json` is imported as a value, so TypeScript will happily accept a
 * misspelled key or a locale code that does not exist and only discover it when
 * a page renders wrong — or, for a bogus locale, never at all, because
 * `toolLocales` would silently return a list nothing matches. Failing here
 * turns a silent misconfiguration into a build error at import time.
 */
function assertRegistry(): void {
  const fail = (message: string): never => {
    throw new Error(`registry.json is invalid: ${message}`);
  };

  if (!Array.isArray(raw.tools)) return fail('`tools` must be an array');
  if (!Array.isArray(raw.pages)) return fail('`pages` must be an array');

  const seen = new Set<string>();
  const checkLocales = (where: string, value: Locale[] | undefined): void => {
    if (value === undefined) return;
    if (!Array.isArray(value)) {
      throw new Error(`registry.json is invalid: ${where}: \`locales\` must be an array`);
    }
    for (const code of value) {
      if (!isLocale(code)) {
        throw new Error(
          `registry.json is invalid: ${where}: unknown locale code ${JSON.stringify(code)}`,
        );
      }
    }
  };

  for (const tool of raw.tools) {
    if (typeof tool.slug !== 'string' || tool.slug === '') fail('a tool has no slug');
    if (seen.has(tool.slug)) fail(`duplicate tool slug ${tool.slug}`);
    seen.add(tool.slug);
    if (typeof tool.icon !== 'string' || tool.icon === '') fail(`${tool.slug}: no icon`);
    if (!ICON_NAMES.has(tool.icon)) {
      // An unknown icon used to surface as a prerender crash on whichever page
      // rendered the tool — far from the typo that caused it, and with a message
      // that named the icon but not the tool. Checking here names both.
      fail(`${tool.slug}: unknown icon "${tool.icon}" — not in src/components/site/icons.ts`);
    }
    if (!['organize', 'split', 'extract', 'image', 'raster', 'overlay', 'geometry'].includes(tool.engine)) {
      fail(`${tool.slug}: unknown engine ${JSON.stringify(tool.engine)}`);
    }
    if (tool.engine === 'organize' && typeof tool.focus !== 'string') {
      fail(`${tool.slug}: engine "organize" requires a \`focus\``);
    }
    if (!Array.isArray(tool.related)) fail(`${tool.slug}: \`related\` must be an array`);
    if (typeof tool.primary !== 'string' || tool.primary === '') fail(`${tool.slug}: no \`primary\``);
    checkLocales(tool.slug, tool.locales);
  }

  const primaries = new Map<string, string>();
  for (const tool of raw.tools) {
    const key = tool.primary.toLowerCase();
    const owner = primaries.get(key);
    // Self-cannibalisation is invisible in the SERP: two pages competing for one
    // term split its impressions and can rank neither. It is a data-entry slip,
    // so it is caught here rather than left to a search console report weeks later.
    if (owner) fail(`${tool.slug} and ${owner} both target the primary term "${tool.primary}"`);
    primaries.set(key, tool.slug);
  }

  for (const [slug, tool] of bySlug) {
    for (const related of tool.related) {
      if (!bySlug.has(related)) fail(`${slug}: related tool "${related}" does not exist`);
    }
  }

  for (const page of raw.pages) {
    if (typeof page.path !== 'string' || page.path === '') fail('a page has no path');
    if (seen.has(page.path)) fail(`${page.path} is registered as both a tool and a page`);
    seen.add(page.path);
    checkLocales(page.path, page.locales);
  }
}

const bySlug = new Map<string, ToolEntry>(raw.tools.map((tool) => [tool.slug, tool]));
const pagePaths = new Map<string, PageEntry>(raw.pages.map((page) => [page.path, page]));

assertRegistry();

export const tools: readonly ToolEntry[] = raw.tools;

/** Non-tool editorial pages that declare a locale restriction. */
export const pages: readonly PageEntry[] = raw.pages;

/** Slugs that get a `/tools/` hub card, in registry order. */
export const toolSlugs: readonly string[] = tools.map((tool) => tool.slug);

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

/** Tools published in `locale`, in registry order. */
export function toolsForLocale(locale: Locale): ToolEntry[] {
  return tools.filter((tool) => isToolLiveIn(tool, locale));
}

/**
 * Locales a logical path is published in — the one lookup that the `[lang]`
 * routes, the hreflang cluster, the sitemap and `verify-i18n.mjs` all share.
 *
 * This exists so a locale restriction has exactly one implementation. Before it,
 * those four consumers each independently assumed "all locales", which is why
 * `locales: ['en']` on a tool made the build throw rather than stage the page.
 * Adding a third consumer of this rule would otherwise reintroduce the bug.
 *
 * Paths are passed with or without a leading slash and with or without a
 * trailing slash. Anything unregistered returns every locale, which is the
 * correct default: `/about/` and `/` have no reason to ever be restricted, and
 * defaulting to "all" means forgetting to register a new page costs nothing.
 */
export function localesForLogicalPath(logicalPath: string): Locale[] {
  const key = logicalPath.replace(/^\/+|\/+$/g, '');
  const tool = key === '' ? undefined : bySlug.get(key);
  if (tool) return toolLocales(tool);
  const page = key === '' ? undefined : pagePaths.get(key);
  if (page) return page.locales ?? [...locales];
  return [...locales];
}

/** True when `logicalPath` is published in `locale`. */
export function isPublishedIn(logicalPath: string, locale: Locale): boolean {
  return localesForLogicalPath(logicalPath).includes(locale);
}