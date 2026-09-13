import {
  defaultLocale,
  isLocale,
  localeMeta,
  locales,
  nonDefaultLocales,
  type Locale,
} from './ui';
import { dictionaries, type SiteDictionary } from './locales';

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
 * Prefixes a logical path with the locale. The default locale keeps clean URLs:
 * `localePath('/', 'es')` → `/es/`, `localePath('/about', 'es')` → `/es/about`,
 * `localePath('/#faq', 'fr')` → `/fr/#faq`, `localePath('/about', 'en')` → `/about`.
 */
export function localePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  const [purePath, ...fragment] = path.split('#');
  const prefixed =
    purePath === '/' ? `/${locale}/` : `/${locale}${purePath}`;
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

/** `getStaticPaths` helper for the `src/pages/[lang]/` routes. */
export function localeStaticPaths() {
  return nonDefaultLocales.map((lang) => ({ params: { lang } }));
}

/** hreflang cluster (all locales + x-default) for a logical path. */
export function getAlternates(
  logicalPath: string,
  site: URL,
): { hreflang: string; href: string }[] {
  const alternates = locales.map((locale) => ({
    hreflang: localeMeta[locale].hreflang,
    href: new URL(localePath(logicalPath, locale), site).href,
  }));
  alternates.push({
    hreflang: 'x-default',
    href: new URL(localePath(logicalPath, defaultLocale), site).href,
  });
  return alternates;
}
