import type { APIRoute } from 'astro';
import { getAlternates, localePath } from '../i18n/utils';
import { localesForLogicalPath } from '../content/registry';

const FALLBACK_SITE = 'https://rearrangepdf.com';
const EXCLUDED_PAGES = new Set(['404', '500']);

/**
 * sitemaps.org caps a single file at 50,000 URLs / 50 MB uncompressed. This site
 * is over two orders of magnitude below that (29 logical paths across 8 locales
 * = 211 URLs at the time of writing), so a single file stays the right answer —
 * splitting into a <sitemapindex> early would only add indirection. The guard
 * exists so that if the tool catalogue ever grows that far, the build fails
 * loudly instead of silently emitting a sitemap the protocol disallows.
 */
const MAX_URLS = 50_000;

/**
 * Logical (locale-independent) paths for every indexable root page, derived
 * from the route files themselves so newly added pages appear automatically.
 * The `[lang]` routes mirror these, so only the root `*.astro` files matter.
 */
function logicalPaths(): string[] {
  return Object.keys(import.meta.glob('./*.astro'))
    .map((file) => file.replace(/^\.\//, '').replace(/\.astro$/, ''))
    .filter((name) => !EXCLUDED_PAGES.has(name))
    .map((name) => (name === 'index' ? '/' : `/${name}`))
    .sort();
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/*
 * No <lastmod>. It was previously derived from git and file mtimes, and it
 * emitted the same date for every URL — a single commit stamps the whole site,
 * and uncommitted work falls back to mtimes, so every entry was identical.
 *
 * Google reads <lastmod> only while it is verifiably accurate and "will stop
 * reading it" once it is not; a column of identical dates teaches Google the
 * field is noise here. John Mueller's guidance is that setting a current date
 * "isn't going to help anyone... it makes it harder for search engines to spot
 * truly updated pages". A crawl hint for pages that genuinely change is better
 * signalled by <lastmod> in the *response* headers, not by fabricating a
 * per-URL grid here.
 *
 * <priority> and <changefreq> are likewise absent because Google ignores both
 * outright.
 *
 * The xhtml:link alternates ARE kept: they are how a crawler discovers the
 * hreflang cluster, which is load-bearing for a site published in 8 locales.
 */
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL(FALLBACK_SITE);
  const paths = logicalPaths();

  // Fan out over locales each logical path is actually published in, not all of
  // them. Listing a locale that was never built hands Google a URL that 404s,
  // which is worse than omitting it: the sitemap is the one file a crawler is
  // guaranteed to trust wholesale, so a single wrong entry invites re-crawl
  // budget spent on a page that does not exist.
  const entries = paths.flatMap((logical) =>
    localesForLogicalPath(logical).map((locale) => {
      const loc = new URL(localePath(logical, locale), base).href;
      const alternates = getAlternates(logical, base)
        .map(
          (alternate) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.hreflang)}" href="${escapeXml(alternate.href)}" />`,
        )
        .join('\n');
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n${alternates}\n  </url>`;
    }),
  );

  if (entries.length > MAX_URLS) {
    throw new Error(
      `sitemap.xml would contain ${entries.length} URLs, over the sitemaps.org limit of ${MAX_URLS}. ` +
        'Split this into a <sitemapindex> across several files before deploying.',
    );
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
