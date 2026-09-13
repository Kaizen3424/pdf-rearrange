import { localeMeta, localePath, type Locale } from './utils';
import type { SiteDictionary } from './locales';

type JsonLd = Record<string, unknown>;

const ORG_EMAIL = 'kaizen3242@gmail.com';

function langOf(locale: Locale): string {
  return localeMeta[locale].hreflang;
}

function homeUrl(locale: Locale, site: URL): string {
  return new URL(localePath('/', locale), site).href;
}

/** JSON-LD for the home page: WebApplication, HowTo, FAQPage, Organization, WebSite. */
export function homeSchemas(dict: SiteDictionary, locale: Locale, site: URL): JsonLd[] {
  const url = homeUrl(locale, site);
  const webApp = dict.pages.home.jsonLd.webApplication;
  const howTo = dict.pages.home.jsonLd.howTo;

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
      '@type': 'HowTo',
      name: howTo.name,
      description: howTo.description,
      inLanguage: langOf(locale),
      totalTime: 'PT1M',
      step: howTo.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: langOf(locale),
      mainEntity: dict.faq.items.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
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

/** JSON-LD for the how-to guide page: HowTo + BreadcrumbList. */
export function howToSchemas(dict: SiteDictionary, locale: Locale, site: URL): JsonLd[] {
  const howTo = dict.pages.howto.jsonLd.howTo;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: howTo.name,
      description: howTo.description,
      inLanguage: langOf(locale),
      totalTime: 'PT2M',
      step: howTo.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    },
    breadcrumbSchema(dict, locale, site, dict.pages.howto.breadcrumb, '/how-to-organize-pdf-pages'),
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
    breadcrumbSchema(dict, locale, site, dict.pages.contact.breadcrumb, '/contact'),
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
    breadcrumbSchema(dict, locale, site, options.breadcrumb, options.logicalPath),
  ];
}

function breadcrumbSchema(
  dict: SiteDictionary,
  locale: Locale,
  site: URL,
  pageName: string,
  logicalPath: string,
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: langOf(locale),
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: dict.siteName,
        item: homeUrl(locale, site),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageName,
        item: new URL(localePath(logicalPath, locale), site).href,
      },
    ],
  };
}
