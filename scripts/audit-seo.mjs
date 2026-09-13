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
else if (!readFileSync(join(DIST, 'robots.txt'), 'utf8').includes('sitemap-index.xml'))
  errors.push('dist/robots.txt does not reference the sitemap');

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
