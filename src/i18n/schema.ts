import { localeMeta, localePath, type Locale } from './utils';
import type { SiteDictionary } from './locales';
import type { ResolvedTool, ToolContent } from '../content/tools';
import type { ToolEntry } from '../content/tools/manifest';

type JsonLd = Record<string, unknown>;

const ORG_EMAIL = 'kaizen3242@gmail.com';

function langOf(locale: Locale): string {
  return localeMeta[locale].hreflang;
}

function homeUrl(locale: Locale, site: URL): string {
  return new URL(localePath('/', locale), site).href;
}

/**
 * FAQPage and HowTo markup are deliberately absent.
 *
 * Google removed the How-to rich result in June 2024 and then ended FAQ rich
 * results for every site — including the government and health sites that had
 * retained them — on 7 May 2026, dropping the Search Console report in June
 * and the API in August. The visible FAQ content still earns its place as
 * on-page copy and as citation surface for AI answers, but marking it up buys
 * nothing and only creates markup that can drift out of sync with the page.
 */

/** JSON-LD for the home page: WebApplication, Organization, WebSite. */
export function homeSchemas(dict: SiteDictionary, locale: Locale, site: URL): JsonLd[] {
  const url = homeUrl(locale, site);
  const webApp = dict.pages.home.jsonLd.webApplication;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: webApp.name,
      alternateName: webApp.alternateName,
      url,
      inLanguage: langOf(locale),
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any (web browser)',
      browserRequirements: 'Requires JavaScript. Works in all modern browsers.',
      description: webApp.description,
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: webApp.featureList,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: dict.siteName,
      url: new URL('/', site).href,
      logo: new URL('/logo.png', site).href,
      email: ORG_EMAIL,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: dict.siteName,
      url: new URL('/', site).href,
      inLanguage: langOf(locale),
    },
  ];
}

/**
 * JSON-LD for a standalone tool page.
 *
 * `SoftwareApplication` is co-typed with `WebApplication` so the page is
 * eligible for Google's Software App treatment while still declaring itself a
 * web app. No `aggregateRating` is emitted: the only rating the UI collects is a
 * single self-selected value kept in the visitor's own localStorage, with no
 * aggregate and no count, and marking up a rating that is not genuinely shown
 * on the page is a manual-action risk. When real, aggregated, on-page reviews
 * exist, that is the moment to add it.
 */
export function toolSchemas(
  tool: ToolEntry,
  content: ToolContent,
  labels: { siteName: string; tools: string },
  locale: Locale,
  site: URL,
): JsonLd[] {
  const url = new URL(localePath(`/${tool.slug}`, locale), site).href;
  const { siteName, tools: toolsCrumb } = labels;
  return [
    {
      '@context': 'https://schema.org',
      '@type': ['SoftwareApplication', 'WebApplication'],
      name: content.h1,
      description: content.meta.description,
      url,
      inLanguage: langOf(locale),
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any (web browser)',
      browserRequirements: 'Requires JavaScript. Works in all modern browsers.',
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: content.h1,
      description: content.meta.description,
      url,
      inLanguage: langOf(locale),
      primaryImageOfPage: new URL('/og-image.png', site).href,
    },
    breadcrumbSchema(locale, site, [
      { name: siteName, path: '/' },
      { name: toolsCrumb, path: '/tools' },
      { name: content.breadcrumb, path: `/${tool.slug}` },
    ]),
  ];
}

/** JSON-LD for the tool hub: an ItemList of every tool published in this locale. */
export function toolsHubSchemas(tools: ResolvedTool[], locale: Locale, site: URL): JsonLd[] {
  const url = new URL(localePath('/tools', locale), site).href;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: tools[0]?.content.meta.title ?? 'Tools',
      description: tools[0]?.content.meta.description ?? '',
      url,
      inLanguage: langOf(locale),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'PDF tools',
      inLanguage: langOf(locale),
      numberOfItems: tools.length,
      itemListElement: tools.map(({ tool, content }, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: content.h1,
        url: new URL(localePath(`/${tool.slug}`, locale), site).href,
      })),
    },
  ];
}


/** JSON-LD for the contact page: ContactPage + BreadcrumbList. */
export function contactSchemas(dict: SiteDictionary, locale: Locale, site: URL): JsonLd[] {
  const contact = dict.pages.contact.jsonLd.contactPage;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: contact.name,
      description: contact.description,
      url: new URL(localePath('/contact', locale), site).href,
      inLanguage: langOf(locale),
    },
    breadcrumbSchema(locale, site, [
      { name: dict.siteName, path: '/' },
      { name: dict.pages.contact.breadcrumb, path: '/contact' },
    ]),
  ];
}

/** JSON-LD for simple content pages (About/Privacy/Terms): WebPage/AboutPage + BreadcrumbList. */
export function webPageSchemas(
  dict: SiteDictionary,
  locale: Locale,
  site: URL,
  options: {
    type?: 'WebPage' | 'AboutPage';
    logicalPath: string;
    name: string;
    description: string;
    breadcrumb: string;
  },
): JsonLd[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': options.type ?? 'WebPage',
      name: options.name,
      description: options.description,
      url: new URL(localePath(options.logicalPath, locale), site).href,
      inLanguage: langOf(locale),
    },
    breadcrumbSchema(locale, site, [
      { name: dict.siteName, path: '/' },
      { name: options.breadcrumb, path: options.logicalPath },
    ]),
  ];
}

/**
 * `trail` runs from the site root to the current page, and its length decides
 * how deep the BreadcrumbList goes — two levels for a normal page, three for a
 * tool page sitting under the hub.
 */
function breadcrumbSchema(
  locale: Locale,
  site: URL,
  trail: { name: string; path: string }[],
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: langOf(locale),
    itemListElement: trail.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: new URL(localePath(entry.path, locale), site).href,
    })),
  };
}
