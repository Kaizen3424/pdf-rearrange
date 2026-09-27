/**
 * Post-build i18n verification. Run `npm run build` first, then:
 *
 *   node scripts/verify-i18n.mjs
 *
 * Validates the generated `dist/` against the expectations encoded in
 * `src/i18n/ui.ts` (locales + metadata) and `src/layouts/Layout.astro`
 * (canonical / hreflang / og:locale emission), plus the per-tool copy in
 * `src/content/tools/`. Exits non-zero on any failure.
 *
 * The page list is read back out of `dist/` instead of being hardcoded, so a
 * new route needs no edit here. That same walk is what the sitemap is compared
 * against, which is what turns "a page exists but nobody can reach it" and "a
 * page exists in one locale only" from invisible into build failures.
 */
import { readFile, readdir } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const toolContent = path.join(root, 'src', 'content', 'tools');
const SITE = 'https://rearrangepdf.com';
const CJK_FONT = { ja: 'Noto Sans JP', ko: 'Noto Sans KR' };
/** Per-check cap: a systemic bug must not print one line per page. */
const MAX_LINES_PER_CHECK = 10;

// Failures are grouped by check name, so one broken assumption reports once
// instead of hundreds of near-identical lines once the site has many pages.
const failures = new Map();
function fail(check, msg) {
  if (!failures.has(check)) failures.set(check, []);
  failures.get(check).push(msg);
}
const issueCount = () => [...failures.values()].reduce((total, list) => total + list.length, 0);

const notes = [];

/**
 * Locale codes plus the metadata fields the assertions depend on, read out of
 * `src/i18n/ui.ts` as text.
 *
 * A plain `import()` is not an option: `ui.ts` is TypeScript and Node only
 * strips types by default from 22.18, while package.json allows >= 22.12.
 * Parsing the two literal blocks is what keeps this script from carrying a
 * second hand-maintained copy of the locale list — the same drift that made the
 * old hardcoded page list wrong. If `ui.ts` is restructured, this fails loudly
 * and names the file rather than quietly checking the wrong set.
 */
function readLocaleMetadata() {
  const source = readFileSync(path.join(root, 'src', 'i18n', 'ui.ts'), 'utf8');
  const codes = [
    ...(source.match(/export const locales[^=]*=\s*\[([^\]]*)\]/)?.[1] ?? '').matchAll(/'([^']+)'/g),
  ].map((m) => m[1]);
  const defaultLocale = /export const defaultLocale[^=]*=\s*'([^']+)'/.exec(source)?.[1];
  const record = /export const localeMeta[^=]*=\s*\{([\s\S]*?)\n\};/.exec(source)?.[1] ?? '';
  // `[^}]*` is safe for the entry bodies: localeMeta holds string fields only,
  // and the anchor above starts the match at the `localeMeta` record rather
  // than the `LocaleMeta` interface declared above it.
  const metaByCode = new Map();
  for (const [, code, body] of record.matchAll(/'?([A-Za-z][\w-]*)'?\s*:\s*\{([^}]*)\}/g)) {
    metaByCode.set(code, {
      code,
      hreflang: /hreflang:\s*'([^']+)'/.exec(body)?.[1],
      htmlLang: /htmlLang:\s*'([^']+)'/.exec(body)?.[1],
      ogLocale: /ogLocale:\s*'([^']+)'/.exec(body)?.[1],
    });
  }
  return { codes, defaultLocale, metaByCode };
}

const i18n = readLocaleMetadata();
const localeCodes = i18n.codes;
const metaByCode = i18n.metaByCode;
let { defaultLocale } = i18n;
if (localeCodes.length === 0 || !defaultLocale) {
  fail(
    'i18n metadata',
    `could not read the locale list from src/i18n/ui.ts (parsed ${localeCodes.length} code(s)) — locales cannot be checked without it`,
  );
  defaultLocale = localeCodes[0] ?? 'en';
}
for (const code of localeCodes) {
  const meta = metaByCode.get(code);
  if (!meta) fail('i18n metadata', `${code}: listed in locales but absent from localeMeta in src/i18n/ui.ts`);
  else if (!meta.hreflang || !meta.htmlLang || !meta.ogLocale) {
    fail('i18n metadata', `${code}: localeMeta in src/i18n/ui.ts is missing hreflang / htmlLang / ogLocale`);
  }
}
for (const code of metaByCode.keys()) {
  if (!localeCodes.includes(code)) {
    fail('i18n metadata', `${code}: present in localeMeta but missing from the locales list in src/i18n/ui.ts`);
  }
}
// Locales with complete metadata are the ones per-page expectations can be
// built from; a metadata gap is already reported above and would only produce
// misleading follow-up failures here.
const verifiableLocales = localeCodes.filter((code) => metaByCode.has(code));
const isLocale = (value) => localeCodes.includes(value);
// Without the locale list every directory looks English, so the walk would
// report a page tree that does not exist. The metadata failure is the whole story.
const canWalkDist = localeCodes.length > 0;

/** Expected canonical URL for a logical page in a locale (trailing slash; home included). */
function localeUrl(logical, code) {
  const prefix = code === defaultLocale ? '' : `/${code}`;
  const leaf = logical === '/' ? '' : logical;
  return `${SITE}${prefix}${leaf}/`;
}

function matchAll(html, re) {
  return [...html.matchAll(re)];
}

/**
 * Directory-index files under `dist/`, as directory prefixes relative to it.
 * `trailingSlash: 'always'` means a route is always a directory: English at the
 * dist root, every other locale under its code directory.
 */
async function findPageDirs(dir, prefix = '') {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      // `_`-prefixed segments are build artefacts (`_astro/`, `_headers`):
      // Astro never routes them, so they can only be mistaken for pages.
      if (entry.name.startsWith('_')) continue;
      found.push(...(await findPageDirs(path.join(dir, entry.name), `${prefix}${entry.name}/`)));
    } else if (entry.name === 'index.html') {
      found.push(prefix);
    }
  }
  return found;
}

/** `fr/merge-pdf/` → `fr` + `/merge-pdf`; `about/` → `en` + `/about`; `''` → `en` + `/`. */
function toPage(prefix) {
  const segments = prefix.split('/').filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    return { locale: segments[0], logical: `/${segments.slice(1).join('/')}` };
  }
  return { locale: defaultLocale, logical: `/${segments.join('/')}` };
}

const hasDist = existsSync(dist);
if (!hasDist) fail('build output', 'dist/ does not exist — run `npm run build` before `npm run verify:i18n`');

/** The page set under verification: every page the build actually emitted. */
const pages = [];
if (hasDist && canWalkDist) {
  const seen = new Map();
  for (const prefix of await findPageDirs(dist)) {
    const { locale, logical } = toPage(prefix);
    const where = `${locale}${logical}`;
    if (seen.has(where)) {
      fail('dist layout', `dist/${prefix}index.html and dist/${seen.get(where)} both resolve to ${where}`);
      continue;
    }
    seen.set(where, `${prefix}index.html`);
    pages.push({ locale, logical, file: path.join(dist, prefix, 'index.html') });
  }
  // The default locale is served from the dist root, so a dist/en/ directory
  // would be silently misread as the home page rather than reported.
  if (existsSync(path.join(dist, defaultLocale))) {
    fail('dist layout', `dist/${defaultLocale}/ exists — ${defaultLocale} pages are emitted at the dist root, not under a locale directory`);
  }
}
const localeOrder = new Map(localeCodes.map((code, index) => [code, index]));
pages.sort(
  (a, b) =>
    (localeOrder.get(a.locale) ?? 99) - (localeOrder.get(b.locale) ?? 99) ||
    a.logical.localeCompare(b.logical),
);

const logicalByLocale = new Map();
for (const page of pages) {
  if (!logicalByLocale.has(page.locale)) logicalByLocale.set(page.locale, new Set());
  logicalByLocale.get(page.locale).add(page.logical);
}
const englishLogical = logicalByLocale.get(defaultLocale) ?? new Set();

// A locale directory that is empty or absent is a build that silently shipped
// one language: nothing in the per-page checks would notice, because those
// checks only look at pages that exist.
for (const code of localeCodes) {
  if (code === defaultLocale) continue;
  const dir = path.join(dist, code);
  if (!hasDist || !existsSync(dir)) {
    fail('locale directory', `dist/${code}/ is missing — no ${code} pages were emitted`);
  } else if (!logicalByLocale.has(code)) {
    fail('locale directory', `dist/${code}/ contains no index.html — the directory exists but no ${code} page was emitted`);
  }
}

// Locale symmetry. Every page below is verified in isolation, so a page that
// exists in one locale and not another is otherwise invisible. The one
// legitimate cause is a locale-restricted tool in src/content/tools/manifest.ts,
// which only works once the [lang] routes and the hreflang cluster honour it.
for (const code of verifiableLocales) {
  if (code === defaultLocale) continue;
  const own = logicalByLocale.get(code) ?? new Set();
  for (const logical of englishLogical) {
    if (!own.has(logical)) fail('locale symmetry', `${code}: missing ${logical} (emitted in ${defaultLocale})`);
  }
  for (const logical of own) {
    if (!englishLogical.has(logical)) {
      fail('locale symmetry', `${code}: emits ${logical}, which ${defaultLocale} does not`);
    }
  }
}

let checkedPages = 0;
const cssCache = new Map();

for (const page of pages) {
  const meta = metaByCode.get(page.locale);
  if (!meta) continue;
  const { locale, logical, file } = page;
  const html = await readFile(file, 'utf8');
  const where = `${locale}${logical}`;
  checkedPages++;

  // <html lang>
  const lang = /<html lang="([^"]+)"/.exec(html)?.[1];
  if (lang !== meta.htmlLang) fail('html lang', `${where}: html lang="${lang}" != "${meta.htmlLang}"`);

  // canonical
  const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
  const expectedUrl = localeUrl(logical, locale);
  if (canonical !== expectedUrl) fail('canonical', `${where}: canonical ${canonical} != ${expectedUrl}`);

  // hreflang cluster: every locale + x-default, each pointing at the right URL.
  const alternates = matchAll(html, /<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g);
  const gotAlternates = alternates.map((m) => ({ hreflang: m[1], href: m[2] }));
  const expectedAlternates = [
    ...verifiableLocales.map((code) => ({
      hreflang: metaByCode.get(code).hreflang,
      href: localeUrl(logical, code),
    })),
    { hreflang: 'x-default', href: localeUrl(logical, defaultLocale) },
  ];
  if (gotAlternates.length !== expectedAlternates.length) {
    fail('hreflang', `${where}: ${gotAlternates.length} hreflang links, expected ${expectedAlternates.length}`);
  } else {
    for (const exp of expectedAlternates) {
      const got = gotAlternates.find((a) => a.hreflang === exp.hreflang);
      if (!got) fail('hreflang', `${where}: missing hreflang ${exp.hreflang}`);
      else if (got.href !== exp.href) {
        fail('hreflang', `${where}: hreflang ${exp.hreflang} = ${got.href}, expected ${exp.href}`);
      }
    }
  }

  // og:locale + og:locale:alternate (all other locales).
  const ogLocale = /<meta property="og:locale" content="([^"]+)"/.exec(html)?.[1];
  if (ogLocale !== meta.ogLocale) fail('og:locale', `${where}: og:locale ${ogLocale} != ${meta.ogLocale}`);
  const ogAlt = matchAll(html, /<meta property="og:locale:alternate" content="([^"]+)"/g).map(
    (m) => m[1],
  );
  const expectedOgAlt = verifiableLocales
    .filter((code) => code !== locale)
    .map((code) => metaByCode.get(code).ogLocale);
  if (ogAlt.length !== expectedOgAlt.length) {
    fail('og:locale', `${where}: ${ogAlt.length} og:locale:alternate, expected ${expectedOgAlt.length}`);
  } else if (expectedOgAlt.some((v) => !ogAlt.includes(v))) {
    fail('og:locale', `${where}: og:locale:alternate mismatch (${ogAlt.join(',')})`);
  }

  // Localized title/description and no corruption in inline links.
  const title = /<title>([\s\S]*?)<\/title>/.exec(html)?.[1] ?? '';
  if (!title.trim()) fail('title', `${where}: empty <title>`);
  if (/\/[a-z-]+mailto:/.test(html)) fail('links', `${where}: locale-prefixed mailto: link`);
  if (html.includes('\uFFFD')) fail('encoding', `${where}: contains U+FFFD replacement character`);

  // JSON-LD blocks must parse.
  for (const m of matchAll(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch {
      fail('json-ld', `${where}: invalid JSON-LD`);
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
    // Cached: every page links the same handful of bundles.
    if (!cssCache.has(href)) {
      const cssPath = path.join(dist, href.replace(/^\//, ''));
      cssCache.set(href, existsSync(cssPath) ? await readFile(cssPath, 'utf8') : null);
    }
    const css = cssCache.get(href);
    if (!css) continue;
    for (const [fontLocale, needle] of Object.entries(CJK_FONT)) {
      if (new RegExp(`@font-face[^{]*\\{[^}]*${needle}`).test(css)) loaded.add(fontLocale);
    }
  }
  for (const fontLocale of Object.keys(CJK_FONT)) {
    if (locale === fontLocale && !loaded.has(fontLocale)) {
      fail('cjk fonts', `${where}: missing ${CJK_FONT[fontLocale]} @font-face stylesheet`);
    }
    if (locale !== fontLocale && loaded.has(fontLocale)) {
      fail('cjk fonts', `${where}: unexpectedly loads ${CJK_FONT[fontLocale]} @font-face stylesheet`);
    }
  }
}

// English-only 404/500: noindex, no hreflang, no og:locale:alternate.
for (const special of ['404', '500']) {
  const file = path.join(dist, `${special}.html`);
  if (!existsSync(file)) {
    fail('error pages', `missing dist/${special}.html`);
    continue;
  }
  const html = await readFile(file, 'utf8');
  if (!/<meta name="robots" content="noindex, nofollow"/.test(html)) {
    fail('error pages', `${special}: missing noindex`);
  }
  if (/<link rel="alternate" hreflang=/.test(html)) fail('error pages', `${special}: has hreflang links`);
  if (/og:locale:alternate/.test(html)) fail('error pages', `${special}: has og:locale:alternate`);
}

// Tool copy coverage. src/content/tools/<locale>/<slug>.ts holds the page copy
// and en/ is the master list. The runtime resolver falls back to English per
// tool, which keeps the build green but ships English copy to a localised URL
// and hreflang to it — so every (locale, English slug) pair needs a real file.
async function toolSlugsIn(code) {
  const dir = path.join(toolContent, code);
  if (!existsSync(dir)) return null;
  return (await readdir(dir)).filter((name) => name.endsWith('.ts')).map((name) => name.slice(0, -3));
}

const formatList = (items) => {
  const shown = items.slice(0, MAX_LINES_PER_CHECK);
  return `${shown.join(', ')}${items.length > shown.length ? `, +${items.length - shown.length} more` : ''}`;
};

const masterSlugs = await toolSlugsIn(defaultLocale);
if (masterSlugs === null) {
  fail('tool copy', `missing src/content/tools/${defaultLocale}/ — the master slug list this check verifies against does not exist`);
} else {
  const master = new Set(masterSlugs);
  for (const code of verifiableLocales) {
    const own = await toolSlugsIn(code);
    if (own === null) {
      fail('tool copy', `${code}: missing src/content/tools/${code}/ — all ${master.size} slug(s) absent: ${formatList([...master])}`);
      continue;
    }
    const ownSet = new Set(own);
    const missing = masterSlugs.filter((slug) => !ownSet.has(slug));
    if (missing.length > 0) {
      fail('tool copy', `${code}: missing ${formatList(missing)} (no src/content/tools/${code}/<slug>.ts — the page would silently serve English)`);
    }
    const stale = own.filter((slug) => !master.has(slug));
    if (stale.length > 0) {
      fail('tool copy', `${code}: has slug(s) ${formatList(stale)} with no master file in src/content/tools/${defaultLocale}/`);
    }
  }
  // Content without a route is dead weight the sitemap and hub will not know
  // about, so a tool can look "shipped" while nothing renders it.
  for (const slug of masterSlugs) {
    if (!logicalByLocale.get(defaultLocale)?.has(`/${slug}`)) {
      fail('tool pages', `no page emitted for tool "${slug}" (expected dist/${slug}/index.html)`);
    }
  }
}
notes.push(`tool slugs ${masterSlugs === null ? 'unavailable' : masterSlugs.length}`);

/**
 * Sitemap agreement. The sitemap is the only route by which an engine discovers
 * these pages, so a route that exists but is absent from it will never be
 * indexed. Compared against the same `localePath` canonical form Layout.astro
 * and sitemap.xml.ts use, in both directions and in total.
 */
let sitemapUrls = 0;
const sitemapPath = path.join(dist, 'sitemap.xml');
if (!existsSync(sitemapPath)) {
  fail('sitemap', 'missing dist/sitemap.xml');
} else if (pages.length > 0) {
  // An empty page set is already explained above (no dist, or an unreadable
  // locale list); every <loc> would look unexpected and bury that cause.
  const xml = await readFile(sitemapPath, 'utf8');
  const urlBodies = matchAll(xml, /<url>([\s\S]*?)<\/url>/g).map((m) => m[1]);
  sitemapUrls = urlBodies.length;
  const expectedUrls = new Set(pages.map((page) => localeUrl(page.logical, page.locale)));
  if (urlBodies.length !== expectedUrls.size) {
    fail('sitemap', `${urlBodies.length} <url> entries for ${expectedUrls.size} emitted page(s)`);
  }
  for (const body of urlBodies) {
    const loc = /<loc>([^<]+)<\/loc>/.exec(body)?.[1];
    if (!loc) {
      fail('sitemap', '<url> entry with no <loc>');
      continue;
    }
    if (!expectedUrls.has(loc)) fail('sitemap', `<loc>${loc}</loc> has no matching emitted page`);
    const links = matchAll(body, /hreflang="([^"]+)" href="([^"]+)"/g);
    if (verifiableLocales.length > 0 && links.length !== verifiableLocales.length + 1) {
      fail('sitemap', `${loc}: ${links.length} alternates, expected ${verifiableLocales.length + 1}`);
    }
    const xd = links.find((m) => m[1] === 'x-default');
    const en = links.find((m) => m[1] === metaByCode.get(defaultLocale)?.hreflang);
    if (!xd) fail('sitemap', `${loc}: missing x-default`);
    else if (en && xd[2] !== en[2]) fail('sitemap', `${loc}: x-default ${xd[2]} != en href ${en[2]}`);
  }
  for (const url of expectedUrls) {
    if (!xml.includes(`<loc>${url}</loc>`)) fail('sitemap', `emitted page missing from sitemap: ${url}`);
  }

  /*
   * Honesty of the freshness hints. Google reads <lastmod> only while it is
   * verifiably accurate and stops reading it once it is not; this sitemap
   * previously emitted the same date for every URL, which is exactly the
   * misrepresentation that voids the field. <priority> and <changefreq> are
   * ignored by Google outright. None of the three may come back.
   */
  for (const tag of ['lastmod', 'changefreq', 'priority']) {
    const hits = matchAll(xml, new RegExp(`<${tag}>`, 'g')).length;
    if (hits > 0) {
      fail('sitemap', `${hits} <${tag}> element(s) present; this sitemap deliberately omits them`);
    }
  }

  // Absolute https on the production host. A relative or off-host <loc> is
  // silently discarded by crawlers, which would hide whole pages.
  for (const body of urlBodies) {
    const loc = /<loc>([^<]+)<\/loc>/.exec(body)?.[1];
    if (!loc) continue;
    if (loc !== SITE && !loc.startsWith(`${SITE}/`)) {
      fail('sitemap', `<loc>${loc}</loc> is not an absolute https URL on ${SITE}`);
    }
  }
}

/*
 * robots.txt is how crawlers are told they may fetch the sitemap at all. A
 * missing file, a Disallow on "/", or a stale sitemap host means the sitemap
 * above can sit valid and still never be read.
 */
const robotsPath = path.join(dist, 'robots.txt');
if (!existsSync(robotsPath)) {
  fail('robots', 'missing dist/robots.txt');
} else {
  const robots = await readFile(robotsPath, 'utf8');
  const disallowRoot = robots
    .split(/\r?\n/)
    .filter((line) => /^\s*disallow\s*:\s*\/\s*$/i.test(line));
  if (disallowRoot.length > 0) fail('robots', 'disallows "/" — the whole site is blocked from crawling');
  if (!/^\s*allow\s*:\s*\/\s*$/im.test(robots)) {
    fail('robots', 'no explicit "Allow: /" line');
  }
  const sitemapLine = robots.match(/^\s*sitemap\s*:\s*(\S+)\s*$/im)?.[1];
  if (!sitemapLine) {
    fail('robots', 'no Sitemap: line — crawlers have to guess where it lives');
  } else if (sitemapLine !== `${SITE}/sitemap.xml`) {
    fail('robots', `Sitemap: ${sitemapLine} != ${SITE}/sitemap.xml`);
  }
}

// Report
notes.unshift(
  `locales ${localeCodes.length}; logical paths ${englishLogical.size}; pages checked ${checkedPages}/${pages.length}; sitemap urls ${sitemapUrls}`,
);
if (issueCount() === 0) {
  console.log(`✓ i18n verification passed (${notes.join('; ')})`);
  process.exit(0);
}
console.error(`✗ i18n verification failed (${issueCount()} issue(s); ${notes.join('; ')})`);
for (const [check, list] of failures) {
  console.error(`\n  ${check} (${list.length})`);
  for (const msg of list.slice(0, MAX_LINES_PER_CHECK)) console.error(`    - ${msg}`);
  if (list.length > MAX_LINES_PER_CHECK) {
    console.error(`    - … and ${list.length - MAX_LINES_PER_CHECK} more`);
  }
}
process.exit(1);
