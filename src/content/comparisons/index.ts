import { en } from './en';
import type { ComparisonBundle, ComparisonChrome, ComparisonPage } from './types';
import { isLocale, type Locale } from '../../i18n/ui';
import { localesForLogicalPath } from '../registry';

/**
 * Comparison-page lookup, mirroring `src/content/tools/index.ts`.
 *
 * Bundles are keyed by locale so a page can be ported independently — an
 * English-first page stays English on `/de/smallpdf-alternative/` rather than
 * silently serving English copy at a localised URL.
 *
 * ## Why there is no fallback here, unlike tool copy
 *
 * `getToolContent` falls back to English for a missing locale, which is the
 * right call for a tool whose route exists in every locale. For comparison
 * pages the route set is exactly the registry's `locales` list, so a locale
 * with no bundle cannot be reached at all — there is nothing to fall back
 * *from*. Keeping the throw means adding a bundle to `en` without registering
 * the path fails the build instead of producing a page nobody linked.
 */

const bundles: Partial<Record<Locale, ComparisonBundle>> = { en };

/** Comparison slugs published in English, for nav/footer and the verifier. */
export const comparisonSlugs: readonly string[] = Object.keys(en.pages);

/** Every locale that has a bundle loaded, for the verifier's copy check. */
export function localesWithComparisons(): Locale[] {
  return (Object.keys(bundles) as Locale[]).filter(isLocale);
}

export function getComparisonBundle(locale: Locale): ComparisonBundle | undefined {
  return bundles[locale];
}

/** Template chrome for a locale's comparison pages. */
export function getComparisonChrome(locale: Locale): ComparisonChrome | undefined {
  return bundles[locale]?.chrome;
}

/**
 * Content for one comparison page in one locale.
 *
 * Throws when the page is unknown, because a missing slug is a registry/content
 * mismatch that should break the build. It returns `undefined` for a known slug
 * in an unpublished locale, which is a normal staging state — the route for
 * that locale is not generated, so this never gets called.
 */
export function getComparison(slug: string, locale: Locale): ComparisonPage | undefined {
  return bundles[locale]?.pages[slug];
}

/**
 * True when `slug` has content for `locale` *and* the registry publishes it
 * there. Both are required: a bundle without a registry entry builds a page the
 * sitemap will not list, and a registry entry without a bundle builds a route
 * that throws at render.
 */
export function isComparisonLive(slug: string, locale: Locale): boolean {
  return Boolean(getComparison(slug, locale)) && localesForLogicalPath(slug).includes(locale);
}

export type { ComparisonPage, ComparisonRow, ComparisonAdvantage, ComparisonFaq } from './types';