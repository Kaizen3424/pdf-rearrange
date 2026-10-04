import {
  defaultLocale,
  isLocale,
  localeMeta,
  locales,
  nonDefaultLocales,
  type Locale,
} from './ui';
import { dictionaries, type SiteDictionary } from './locales';
import { localesForLogicalPath } from '../content/registry';

export { defaultLocale, isLocale, localeMeta, locales, nonDefaultLocales };
export type { Locale, LocaleMeta } from './ui';
export type { SiteDictionary } from './locales';

/** Detects the locale of a page from its URL (first path segment), e.g. `/es/about` → `es`. */
export function getLangFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  if (isLocale(first)) return first;
  return defaultLocale;
}

/**
 * Prefixes a logical path with the locale. Non-root paths carry a trailing
 * slash so the emitted URLs match the directory-index pages served by the host
 * (and the canonical/hreflang/sitemap forms agree):
 * `localePath('/', 'es')` → `/es/`, `localePath('/about', 'es')` → `/es/about/`,
 * `localePath('/about', 'en')` → `/about/`, `localePath('/#faq', 'fr')` → `/fr/#faq`.
 */
export function localePath(path: string, locale: Locale): string {
  const [purePath, ...fragment] = path.split('#');
  const normalized =
    purePath === '/' ? '/' : `${purePath.replace(/\/+$/, '')}/`;
  const prefixed =
    locale === defaultLocale ? normalized : `/${locale}${normalized}`;
  return fragment.length > 0 ? `${prefixed}#${fragment.join('#')}` : prefixed;
}

/**
 * Inverse of `localePath`: returns the locale-independent path for a URL.
 * `/es/about/` → `/about`, `/pt-br/` → `/`, `/about` → `/about`.
 * The English-only 404/500 pages are mapped back to `/` so the language
 * switcher never links to a route that does not exist.
 */
export function getLogicalPathFromUrl(url: URL): string {
  let path = url.pathname;
  if (path === '/404' || path === '/404/' || path === '/500' || path === '/500/') {
    return '/';
  }
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (path === `/${locale}` || path === `/${locale}/`) return '/';
    if (path.startsWith(`/${locale}/`)) {
      path = path.slice(locale.length + 1);
      break;
    }
  }
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return path === '' ? '/' : path;
}

export function getDictionary(locale: Locale): SiteDictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/**
 * `getStaticPaths` helper for the `src/pages/[lang]/` routes.
 *
 * `logicalPath` is the route's own locale-independent path (`/merge-pdf`). It is
 * required rather than optional because these routes stand for one specific page,
 * and only the registry knows which locales that page is published in. Passing
 * `logicalPath` is what makes an English-first tool possible: the route emits
 * only the locales the registry lists, so `locales: ['en']` produces no `/fr/`
 * page instead of a build that throws.
 */
export function localeStaticPaths(logicalPath: string) {
  return localesForLogicalPath(logicalPath)
    .filter((locale) => locale !== defaultLocale)
    .map((lang) => ({ params: { lang } }));
}

/**
 * hreflang cluster for a logical path: every locale it is published in, plus
 * `x-default`.
 *
 * `x-default` is the fallback for a searcher whose language matches none of
 * them. English is the right choice here because it is the only locale every
 * restricted page is guaranteed to have — the sitemap, the `[lang]` routes and
 * this function must never emit an alternate pointing at a page that was never
 * built, and English is the staging locale.
 *
 * A cluster that advertised an unpublished locale would be worse than a missing
 * one: Google would treat the cluster as incomplete, and a `hreflang` pointing
 * at a 404 is a signal we would be volunteering.
 */
export function getAlternates(
  logicalPath: string,
  site: URL,
): { hreflang: string; href: string }[] {
  const alternates = localesForLogicalPath(logicalPath).map((locale) => ({
    hreflang: localeMeta[locale].hreflang,
    href: new URL(localePath(logicalPath, locale), site).href,
  }));
  alternates.push({
    hreflang: 'x-default',
    href: new URL(localePath(logicalPath, defaultLocale), site).href,
  });
  return alternates;
}
