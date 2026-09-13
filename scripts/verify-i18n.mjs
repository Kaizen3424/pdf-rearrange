/**
 * Post-build i18n verification. Run `npm run build` first, then:
 *
 *   node scripts/verify-i18n.mjs
 *
 * Validates the generated `dist/` against the expectations encoded in
 * `src/i18n/ui.ts` (locales + metadata) and `src/layouts/Layout.astro`
 * (canonical / hreflang / og:locale emission). Exits non-zero on any failure.
 */
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const SITE = 'https://rearrangepdf.com';

// Mirror of src/i18n/ui.ts localeMeta (kept in sync by hand; ui.ts is TS).
const LOCALES = [
  { code: 'en', hreflang: 'en', htmlLang: 'en', ogLocale: 'en_US' },
  { code: 'es', hreflang: 'es', htmlLang: 'es', ogLocale: 'es_ES' },
  { code: 'ja', hreflang: 'ja', htmlLang: 'ja', ogLocale: 'ja_JP' },
  { code: 'fr', hreflang: 'fr', htmlLang: 'fr', ogLocale: 'fr_FR' },
  { code: 'de', hreflang: 'de', htmlLang: 'de', ogLocale: 'de_DE' },
  { code: 'pt-br', hreflang: 'pt-BR', htmlLang: 'pt-BR', ogLocale: 'pt_BR' },
  { code: 'ko', hreflang: 'ko', htmlLang: 'ko', ogLocale: 'ko_KR' },
  { code: 'it', hreflang: 'it', htmlLang: 'it', ogLocale: 'it_IT' },
];
const DEFAULT_LOCALE = 'en';
const CJK_FONT = { ja: 'Noto Sans JP', ko: 'Noto Sans KR' };

// Logical pages, mirroring the route folders under src/pages.
const PAGES = ['/', '/about', '/contact', '/how-to-organize-pdf-pages', '/privacy', '/terms'];

const failures = [];
const notes = [];
function fail(msg) {
  failures.push(msg);
}

/** Expected clean URL for a logical page in a locale (home keeps a slash). */
function localeUrl(logical, code) {
  const prefix = code === DEFAULT_LOCALE ? '' : `/${code}`;
  if (logical === '/') return `${SITE}${prefix}/`;
  return `${SITE}${prefix}${logical}`;
}

/** On-disk path for a logical page in a locale. */
function localeFile(logical, code) {
  const prefix = code === DEFAULT_LOCALE ? '' : `${code}/`;
  const leaf = logical === '/' ? 'index.html' : `${logical.slice(1)}/index.html`;
  return path.join(dist, prefix + leaf);
}

function matchAll(html, re) {
  return [...html.matchAll(re)];
}

let checkedPages = 0;

for (const code of LOCALES.map((l) => l.code)) {
  const meta = LOCALES.find((l) => l.code === code);
  for (const logical of PAGES) {
    const file = localeFile(logical, code);
    if (!existsSync(file)) {
      fail(`missing page: dist/${path.relative(dist, file)}`);
      continue;
    }
    const html = await readFile(file, 'utf8');
    const where = `${code}${logical}`;
    checkedPages++;

    // <html lang>
    const lang = /<html lang="([^"]+)"/.exec(html)?.[1];
    if (lang !== meta.htmlLang) fail(`${where}: html lang="${lang}" != "${meta.htmlLang}"`);

    // canonical
    const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
    const expectedUrl = localeUrl(logical, code);
    if (canonical !== expectedUrl) fail(`${where}: canonical ${canonical} != ${expectedUrl}`);

    // hreflang cluster: 8 locales + x-default, each pointing at the right URL.
    const alternates = matchAll(html, /<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g);
    const gotAlternates = alternates.map((m) => ({ hreflang: m[1], href: m[2] }));
    const expectedAlternates = [
      ...LOCALES.map((l) => ({ hreflang: l.hreflang, href: localeUrl(logical, l.code) })),
      { hreflang: 'x-default', href: localeUrl(logical, DEFAULT_LOCALE) },
    ];
    if (gotAlternates.length !== expectedAlternates.length) {
      fail(`${where}: ${gotAlternates.length} hreflang links, expected ${expectedAlternates.length}`);
    } else {
      for (const exp of expectedAlternates) {
        const got = gotAlternates.find((a) => a.hreflang === exp.hreflang);
        if (!got) fail(`${where}: missing hreflang ${exp.hreflang}`);
        else if (got.href !== exp.href) {
          fail(`${where}: hreflang ${exp.hreflang} = ${got.href}, expected ${exp.href}`);
        }
      }
    }

    // og:locale + og:locale:alternate (all other locales).
    const ogLocale = /<meta property="og:locale" content="([^"]+)"/.exec(html)?.[1];
    if (ogLocale !== meta.ogLocale) fail(`${where}: og:locale ${ogLocale} != ${meta.ogLocale}`);
    const ogAlt = matchAll(html, /<meta property="og:locale:alternate" content="([^"]+)"/g).map(
      (m) => m[1],
    );
    const expectedOgAlt = LOCALES.filter((l) => l.code !== code).map((l) => l.ogLocale);
    if (ogAlt.length !== expectedOgAlt.length) {
      fail(`${where}: ${ogAlt.length} og:locale:alternate, expected ${expectedOgAlt.length}`);
    } else if (expectedOgAlt.some((v) => !ogAlt.includes(v))) {
      fail(`${where}: og:locale:alternate mismatch (${ogAlt.join(',')})`);
    }

    // Localized title/description and no corruption in inline links.
    const title = /<title>([\s\S]*?)<\/title>/.exec(html)?.[1] ?? '';
    if (!title.trim()) fail(`${where}: empty <title>`);
    if (/\/[a-z-]+mailto:/.test(html)) fail(`${where}: locale-prefixed mailto: link`);
    if (html.includes('\uFFFD')) fail(`${where}: contains U+FFFD replacement character`);

    // JSON-LD blocks must parse.
    for (const m of matchAll(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        JSON.parse(m[1]);
      } catch {
        fail(`${where}: invalid JSON-LD`);
      }
    }

    // CJK font isolation: only ja/ko pages may load a stylesheet that actually
    // defines @font-face rules for the CJK fonts. The shared global CSS only
    // mentions the families inside :lang() rules, so match @font-face blocks.
    const cssHrefs = matchAll(html, /<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)"/g).map(
      (m) => m[1],
    );
    const loaded = new Set();
    for (const href of cssHrefs) {
      const cssPath = path.join(dist, href.replace(/^\//, ''));
      if (!existsSync(cssPath)) continue;
      const css = await readFile(cssPath, 'utf8');
      for (const [fontLocale, needle] of Object.entries(CJK_FONT)) {
        if (new RegExp(`@font-face[^{]*\\{[^}]*${needle}`).test(css)) loaded.add(fontLocale);
      }
    }
    for (const fontLocale of Object.keys(CJK_FONT)) {
      if (code === fontLocale && !loaded.has(fontLocale)) {
        fail(`${where}: missing ${CJK_FONT[fontLocale]} @font-face stylesheet`);
      }
      if (code !== fontLocale && loaded.has(fontLocale)) {
        fail(`${where}: unexpectedly loads ${CJK_FONT[fontLocale]} @font-face stylesheet`);
      }
    }
  }
}

// English-only 404/500: noindex, no hreflang, no og:locale:alternate.
for (const special of ['404', '500']) {
  const file = path.join(dist, `${special}.html`);
  if (!existsSync(file)) {
    fail(`missing dist/${special}.html`);
    continue;
  }
  const html = await readFile(file, 'utf8');
  if (!/<meta name="robots" content="noindex, nofollow"/.test(html)) {
    fail(`${special}: missing noindex`);
  }
  if (/<link rel="alternate" hreflang=/.test(html)) fail(`${special}: has hreflang links`);
  if (/og:locale:alternate/.test(html)) fail(`${special}: has og:locale:alternate`);
}

// Sitemap: one <url> per indexable page, 9 alternates each, x-default = English,
// canonical URL form (no trailing slash except home pages).
const sitemapPath = path.join(dist, 'sitemap-0.xml');
if (!existsSync(sitemapPath)) {
  fail('missing dist/sitemap-0.xml');
} else {
  const xml = await readFile(sitemapPath, 'utf8');
  const urlBodies = matchAll(xml, /<url>([\s\S]*?)<\/url>/g).map((m) => m[1]);
  const expectedUrls = new Set();
  for (const code of LOCALES.map((l) => l.code)) {
    for (const logical of PAGES) expectedUrls.add(localeUrl(logical, code));
  }
  if (urlBodies.length !== expectedUrls.size) {
    fail(`sitemap: ${urlBodies.length} urls, expected ${expectedUrls.size}`);
  }
  for (const body of urlBodies) {
    const loc = /<loc>([^<]+)<\/loc>/.exec(body)?.[1];
    if (!expectedUrls.has(loc)) fail(`sitemap: unexpected loc ${loc}`);
    const links = matchAll(body, /hreflang="([^"]+)" href="([^"]+)"/g);
    if (links.length !== LOCALES.length + 1) {
      fail(`sitemap ${loc}: ${links.length} alternates, expected ${LOCALES.length + 1}`);
    }
    const xd = links.find((m) => m[1] === 'x-default');
    const en = links.find((m) => m[1] === 'en');
    if (!xd) fail(`sitemap ${loc}: missing x-default`);
    else if (en && xd[2] !== en[2]) fail(`sitemap ${loc}: x-default != en href`);
  }
  for (const url of expectedUrls) {
    if (!xml.includes(`<loc>${url}</loc>`)) fail(`sitemap: missing ${url}`);
  }
  const index = await readFile(path.join(dist, 'sitemap-index.xml'), 'utf8');
  if (!index.includes('sitemap-0.xml')) fail('sitemap-index.xml does not reference sitemap-0.xml');
}

// Report
const totalPages = LOCALES.length * PAGES.length;
notes.push(`indexable pages checked: ${checkedPages}/${totalPages}`);
if (failures.length === 0) {
  console.log(`✓ i18n verification passed (${notes.join('; ')})`);
  process.exit(0);
}
console.error(`✗ i18n verification failed (${failures.length} issue(s); ${notes.join('; ')})`);
for (const f of failures) console.error(`  - ${f}`);
process.exit(1);
