import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = process.argv[2] || 'dist';
const indexable = (robots) => !robots || !/noindex/.test(robots);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (entry.endsWith('.html')) out.push(p);
  }
  return out;
}

const grab = (html, re) => {
  const m = html.match(re);
  return m ? (m[2] ?? m[1] ?? '').trim() : null;
};

// Title/description targets are character proxies for the SERP pixel limits;
// CJK glyphs are ~2x wider, so allow fewer characters there.
const cjk = (lang) => /^(ja|ko|zh)/.test(lang || '');

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
  if (p.hreflang.length !== 9) errors.push(`${p.rel}: expected 9 hreflang tags, got ${p.hreflang.length}`);
  if (!p.xDefault) errors.push(`${p.rel}: missing hreflang x-default`);
  if (!p.ogLocale) errors.push(`${p.rel}: missing og:locale`);
  if (!/index, follow/.test(p.robots || '')) errors.push(`${p.rel}: missing "index, follow" robots meta`);
  if (!/max-image-preview:large/.test(p.robots || '')) warnings.push(`${p.rel}: robots meta lacks max-image-preview:large`);
  if (!p.title) errors.push(`${p.rel}: missing <title>`);
  if (!p.desc) errors.push(`${p.rel}: missing meta description`);
  if (p.jsonldTypes.length && !p.hasInLanguage) errors.push(`${p.rel}: JSON-LD missing inLanguage`);

  const maxTitle = cjk(p.lang) ? 38 : 60;
  const maxDesc = cjk(p.lang) ? 100 : 160;
  if (p.title && p.title.length > maxTitle) warnings.push(`${p.rel}: title ${p.title.length} chars (max ${maxTitle})`);
  if (p.desc && p.desc.length > maxDesc) warnings.push(`${p.rel}: description ${p.desc.length} chars (max ${maxDesc})`);
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

  const today = new Date().toISOString().slice(0, 10);
  for (const block of sitemap.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1] ?? '(no <loc>)';
    const lastmod = block.match(/<lastmod>([^<]*)<\/lastmod>/)?.[1];
    if (!lastmod) errors.push(`sitemap.xml: ${loc} missing <lastmod>`);
    else if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod))
      errors.push(`sitemap.xml: ${loc} lastmod not YYYY-MM-DD: ${lastmod}`);
    else if (lastmod > today) errors.push(`sitemap.xml: ${loc} lastmod is in the future`);
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
