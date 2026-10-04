import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = process.argv[2] || 'dist';
const SITE_URL = 'https://rearrangepdf.com';
const indexable = (robots) => !robots || !/noindex/.test(robots);

/**
 * How many hreflang tags each page should carry: its published locales plus
 * x-default.
 *
 * This used to be the constant 9. That was correct only while every page shipped
 * in all eight locales, and the moment a page was staged English-first it
 * reported "expected 9 hreflang tags, got 2" — an error, in the opposite
 * direction from the real bug it was meant to catch. It looked like missing
 * hreflang when the page was actually correct, so the honest fix is to ask the
 * registry rather than count a number that has to be edited every time a locale
 * is added.
 *
 * Reads `registry.json` directly because this is plain Node and cannot import the
 * TypeScript wrapper. An unregistered path returns the full locale count, which
 * is the right default for pages like `/about`.
 */
const REGISTRY = new Map(); // logical path -> Locale[]
const ALL_LOCALES = 8;
try {
  const registry = JSON.parse(readFileSync(join('src', 'content', 'registry.json'), 'utf8'));
  for (const entry of [...(registry.tools ?? []), ...(registry.pages ?? [])]) {
    if (entry.locales) REGISTRY.set(entry.slug ?? entry.path, [...entry.locales]);
  }
} catch {
  // No registry readable: fall back to assuming every page is fully localized,
  // which is what this script assumed before the registry existed.
}

/** `merge-pdf-alternative/index.html` or `fr/merge-pdf-alternative/index.html`. */
function expectedHreflangCount(rel) {
  const segments = rel.split('/').filter(Boolean);
  // The last segment is the file (`index.html`); the logical path is the one
  // before it. `/index.html` for the homepage has nothing before it, which is
  // correctly unregistered and so falls back to the full locale count.
  const last = segments[segments.length - 1];
  const logical = last === 'index.html' ? segments[segments.length - 2] : last;
  const locales = logical === undefined ? undefined : REGISTRY.get(logical);
  return (locales ? locales.length : ALL_LOCALES) + 1;
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (entry.endsWith('.html')) out.push(p);
  }
  return out;
}

/**
 * Decodes the entities Astro emits into attribute values. Without this a title
 * containing an apostrophe is measured as `&#39;` and reads 4 characters long,
 * which produced false length warnings on perfectly good titles.
 */
const decodeEntities = (value) =>
  value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');

const grab = (html, re) => {
  const m = html.match(re);
  return m ? decodeEntities((m[2] ?? m[1] ?? '').trim()) : null;
};

const cjk = (lang) => /^(ja|ko|zh)/.test(lang || '');

// Title/description targets are character proxies for the SERP pixel limits;
// CJK glyphs are ~2x wider, so allow fewer characters there.
//
// Floors exist as well as ceilings. The original check was ceiling-only, which
// means a page could ship a 20-character title and still pass. A title that
// short cannot carry the query term plus a differentiator, and the SERP gives
// you the pixels whether you use them or not — an under-filled title is a
// wasted slot, not a safe one. CJK floors are set low deliberately: Google
// truncates Japanese descriptions at roughly 70-80 full-width glyphs, so
// padding to a Latin-equivalent number would only buy stilted translation.
const BUDGETS = {
  latin: { title: [50, 60], description: [140, 160] },
  cjk: { title: [24, 38], description: [70, 100] },
};
const budgetsFor = (lang) => BUDGETS[cjk(lang) ? 'cjk' : 'latin'];

/**
 * Legal and utility pages are excluded from the length *floor*.
 *
 * Nobody searches "rearrangepdf terms of service" or "rearrangepdf privacy
 * policy" — these pages exist to satisfy a legal or trust requirement, and
 * their traffic is navigational. Padding a Terms page description out to 140
 * characters to satisfy an SEO budget produces keyword-stuffed filler on the
 * one page type where filler is most visible to a human reader and least
 * valuable to a crawler. They still keep the *ceiling*, because a legal page
 * with a 300-character title does get truncated badly in a tab.
 *
 * Everything else — tool pages, the /tools/ hub, editorial pages — is
 * search-targeting and gets the full range.
 */
const NON_SEARCH_PAGES = new Set(['about', 'contact', 'privacy', 'terms']);

/** `fr/terms/index.html` -> `terms`; `index.html` -> `/`; `es/index.html` -> `/`. */
const logicalName = (rel) => {
  const path = rel.replace(/^.*?\/?(?=[^/]*\/index\.html$)/, '').replace(/index\.html$/, '');
  const trimmed = path.replace(/^\/+|\/+$/g, '');
  return trimmed === '' ? '/' : trimmed;
};

const pages = [];
for (const file of walk(DIST)) {
  const rel = relative(DIST, file).replace(/\\/g, '/');
  if (rel.startsWith('_astro/')) continue;
  const html = readFileSync(file, 'utf8');
  const jsonlds = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((m) => { try { return JSON.parse(m[1]); } catch { return null; } })
    .filter(Boolean);

  pages.push({
    rel,
    lang: grab(html, /<html lang="([^"]*)"/),
    title: grab(html, /<title>([^<]*)<\/title>/),
    desc: grab(html, /<meta name="description" content="([^"]*)"/),
    canonical: grab(html, /<link rel="canonical" href="([^"]*)"/),
    robots: grab(html, /<meta name="robots" content="([^"]*)"/),
    hreflang: [...html.matchAll(/rel="alternate" hreflang="([^"]*)"/g)].map((m) => m[1]),
    xDefault: /hreflang="x-default"/.test(html),
    ogLocale: grab(html, /<meta property="og:locale" content="([^"]*)"/),
    jsonldTypes: jsonlds.map((j) => j['@type']),
    hasInLanguage: jsonlds.length > 0 && jsonlds.every((j) => j.inLanguage || j['@type'] === 'Organization'),
  });
}

const errors = [];
const warnings = [];

for (const p of pages) {
  if (!indexable(p.robots)) {
    if (p.hreflang.length > 0) errors.push(`${p.rel}: noindex page must not emit hreflang`);
    if (!/noindex/.test(p.robots || '')) errors.push(`${p.rel}: expected noindex robots meta`);
    continue;
  }
  if (!p.canonical) errors.push(`${p.rel}: missing canonical`);
  if (p.hreflang.length !== expectedHreflangCount(p.rel))
    errors.push(
      `${p.rel}: expected ${expectedHreflangCount(p.rel)} hreflang tags, got ${p.hreflang.length}`,
    );
  if (!p.xDefault) errors.push(`${p.rel}: missing hreflang x-default`);
  if (!p.ogLocale) errors.push(`${p.rel}: missing og:locale`);
  if (!/index, follow/.test(p.robots || '')) errors.push(`${p.rel}: missing "index, follow" robots meta`);
  if (!/max-image-preview:large/.test(p.robots || '')) warnings.push(`${p.rel}: robots meta lacks max-image-preview:large`);
  if (!p.title) errors.push(`${p.rel}: missing <title>`);
  if (!p.desc) errors.push(`${p.rel}: missing meta description`);
  if (p.jsonldTypes.length && !p.hasInLanguage) errors.push(`${p.rel}: JSON-LD missing inLanguage`);

  const { title: tRange, description: dRange } = budgetsFor(p.lang);
  const enforceFloor = !NON_SEARCH_PAGES.has(logicalName(p.rel));
  if (p.title && p.title.length > tRange[1])
    errors.push(`${p.rel}: title ${p.title.length} chars, over max ${tRange[1]} — SERP will truncate mid-keyword`);
  else if (enforceFloor && p.title && p.title.length < tRange[0])
    errors.push(`${p.rel}: title ${p.title.length} chars, under min ${tRange[0]} — too short to carry term + differentiator`);
  if (p.desc && p.desc.length > dRange[1])
    errors.push(`${p.rel}: description ${p.desc.length} chars, over max ${dRange[1]}`);
  else if (enforceFloor && p.desc && p.desc.length < dRange[0])
    errors.push(`${p.rel}: description ${p.desc.length} chars, under min ${dRange[0]}`);
}

if (!existsSync(join(DIST, 'robots.txt'))) errors.push('missing dist/robots.txt');
else if (!readFileSync(join(DIST, 'robots.txt'), 'utf8').includes('sitemap.xml'))
  errors.push('dist/robots.txt does not reference the sitemap');
if (!existsSync(join(DIST, 'sitemap.xml'))) errors.push('missing dist/sitemap.xml');
else {
  const sitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf8');
  if (
    !sitemap.includes(
      'xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"'
    )
  )
    errors.push('sitemap.xml: missing xsi:schemaLocation for the sitemaps.org schema');

  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (new Set(locs).size !== locs.length) errors.push('sitemap.xml: duplicate <loc> URLs');

  // No <lastmod>, by decision. It previously emitted the same date for every URL
  // (a single commit stamps the site; uncommitted work falls back to mtimes),
  // and Google stops reading the field once it is not verifiably accurate — so a
  // column of identical dates is worse than none. <priority> and <changefreq>
  // are ignored by Google outright. Assert their absence so neither can creep
  // back in, and so a future lastmod cannot reintroduce the misleading form.
  for (const tag of ['lastmod', 'changefreq', 'priority']) {
    const hits = [...sitemap.matchAll(new RegExp(`<${tag}>`, 'g'))].length;
    if (hits > 0) {
      errors.push(
        `sitemap.xml: ${hits} <${tag}> element(s) present; this sitemap deliberately omits them`,
      );
    }
  }

  // Every <loc> must be absolute https on the production host; a relative or
  // off-host URL is silently discarded by crawlers. The host is taken from the
  // pages' own canonicals rather than hardcoded, so the check follows the site.
  for (const loc of locs) {
    let origin = null;
    try {
      origin = new URL(loc).origin;
    } catch {
      errors.push(`sitemap.xml: <loc>${loc}</loc> is not an absolute URL`);
    }
    if (origin && origin !== new URL(SITE_URL).origin) {
      errors.push(`sitemap.xml: <loc>${loc}</loc> is on ${origin}, not ${SITE_URL}`);
    }
  }

  // The sitemap must list exactly the canonical URLs of the indexable pages.
  const expected = new Set(
    pages
      .filter((p) => indexable(p.robots))
      .map((p) => p.canonical)
      .filter(Boolean),
  );
  for (const canonical of expected)
    if (!locs.includes(canonical)) errors.push(`sitemap.xml: missing indexable page ${canonical}`);
  for (const loc of locs)
    if (!expected.has(loc)) errors.push(`sitemap.xml: lists ${loc} with no matching indexable page`);
}
if (existsSync(join(DIST, 'sitemap-index.xml')) || existsSync(join(DIST, 'sitemap-0.xml')))
  errors.push('dist contains a stale sitemap-index.xml / sitemap-0.xml');

console.log(`SEO audit — ${pages.length} HTML pages in ${DIST}`);
console.log(`  indexable: ${pages.filter((p) => indexable(p.robots)).length}, noindex: ${pages.filter((p) => !indexable(p.robots)).length}`);

if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`);
  for (const w of warnings) console.log(`  ! ${w}`);
}
if (errors.length) {
  console.log(`\nErrors (${errors.length}):`);
  for (const e of errors) console.log(`  x ${e}`);
  process.exit(1);
}
console.log(`\n\u2713 SEO audit passed with ${warnings.length} warning(s)`);
