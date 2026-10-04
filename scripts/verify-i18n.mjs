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
const registryPath = path.join(root, 'src', 'content', 'registry.json');
const SITE = 'https://rearrangepdf.com';
const CJK_FONT = { ja: 'Noto Sans JP', ko: 'Noto Sans KR' };
/** Per-check cap: a systemic bug must not print one line per page. */
const MAX_LINES_PER_CHECK = 10;

/**
 * Locales each logical path is published in, from `src/content/registry.json`.
 *
 * This script cannot import the TypeScript wrapper, which is precisely why the
 * registry is JSON: the build and the verifier then read the *same* file rather
 * than two representations of it that can disagree. A path absent from the
 * registry is published in every locale, matching `localesForLogicalPath`.
 */
function readRegistryLocales() {
  if (!existsSync(registryPath)) {
    fail('registry', 'src/content/registry.json does not exist');
    return new Map();
  }
  let parsed;
  try {
    parsed = JSON.parse(readFileSync(registryPath, 'utf8'));
  } catch (error) {
    fail('registry', `src/content/registry.json is not valid JSON: ${error.message}`);
    return new Map();
  }
  const byPath = new Map();
  for (const tool of parsed.tools ?? []) {
    if (tool.locales) byPath.set(`/${tool.slug}`, [...tool.locales]);
  }
  for (const page of parsed.pages ?? []) {
    if (page.locales) byPath.set(`/${page.path}`, [...page.locales]);
  }
  return byPath;
}

/**
 * Non-tool page paths from `registry.json`, whether or not they carry a
 * restriction. Separate from `restrictedTo`, which only holds paths that
 * actually declare `locales` — the comparison checks need to know that all three
 * `-alternative` pages exist even though each one lists just `["en"]`.
 */
function readRegistryPages() {
  if (!existsSync(registryPath)) return new Set();
  try {
    const parsed = JSON.parse(readFileSync(registryPath, 'utf8'));
    return new Set((parsed.pages ?? []).map((page) => page.path));
  } catch {
    return new Set();
  }
}

const restrictedTo = readRegistryLocales();
const registryPages = readRegistryPages();

/** Locales a logical path should be emitted in, per the registry. */
function expectedLocalesFor(logical) {
  return restrictedTo.get(logical) ?? localeCodes;
}

/** True when the registry deliberately publishes `logical` in fewer locales. */
function isRestricted(logical) {
  return restrictedTo.has(logical);
}

/**
 * Inverse of `localeUrl`: a full `<loc>` back to its locale-independent path.
 * `/fr/merge-pdf/` → `/merge-pdf`, `/about/` → `/about`, `/` → `/`.
 */
function sitemapLogicalPath(loc) {
  let pathname;
  try {
    pathname = new URL(loc).pathname;
  } catch {
    return loc;
  }
  for (const code of localeCodes) {
    if (code === defaultLocale) continue;
    if (pathname === `/${code}/`) return '/';
    if (pathname.startsWith(`/${code}/`)) {
      pathname = `/${pathname.slice(code.length + 2)}`;
      break;
    }
  }
  // Registry keys carry no trailing slash (`/merge-pdf`, not `/merge-pdf/`),
  // so normalise once at the end — doing it per-branch misses the locales that
  // returned early.
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
}

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
// exists in one locale and not another is otherwise invisible.
//
// The one legitimate exception is a path the registry restricts to a subset of
// locales — a tool or editorial page staged English-first and ported only once
// the English page earns impressions. Those are checked in the *opposite*
// direction below: not "is it in every locale" but "is it in exactly the
// locales the registry claims". That inversion is the point. The old check
// simply exempted restricted paths, which would have let a typo in `locales`
// silently drop a page from a language it was meant to ship in.
for (const code of verifiableLocales) {
  if (code === defaultLocale) continue;
  const own = logicalByLocale.get(code) ?? new Set();
  for (const logical of englishLogical) {
    // English is the staging locale, so a restricted page is always expected
    // to exist there; the reverse (a page that exists only in a non-default
    // locale) is caught by the second loop.
    if (isRestricted(logical)) {
      if (expectedLocalesFor(logical).includes(code) && !own.has(logical)) {
        fail(
          'locale restriction',
          `${code}: missing ${logical}, which registry.json publishes in ${code}`,
        );
      }
      continue;
    }
    if (!own.has(logical)) fail('locale symmetry', `${code}: missing ${logical} (emitted in ${defaultLocale})`);
  }
  for (const logical of own) {
    if (!englishLogical.has(logical)) {
      fail('locale symmetry', `${code}: emits ${logical}, which ${defaultLocale} does not`);
    }
  }
}

// A path the registry restricts must appear in exactly those locales — no more
// (a stray `/fr/` build of an English-only page) and no fewer (above). Crawler
// budget spent on a 404 is the failure mode this exists to prevent.
for (const [logical, allowed] of restrictedTo) {
  for (const locale of localeCodes) {
    const present = (logicalByLocale.get(locale) ?? new Set()).has(logical);
    const shouldBe = allowed.includes(locale);
    if (present && !shouldBe) {
      fail(
        'locale restriction',
        `${locale}${logical} was emitted but registry.json does not publish it in ${locale}`,
      );
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

  // hreflang cluster: every locale this page is published in, plus x-default.
  // A restricted page must NOT advertise a locale that was never built, so the
  // expectation comes from the registry rather than from the full locale list.
  const alternates = matchAll(html, /<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g);
  const gotAlternates = alternates.map((m) => ({ hreflang: m[1], href: m[2] }));
  const expectedAlternates = [
    ...expectedLocalesFor(logical).map((code) => ({
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
// and hreflang to it — so every published (locale, English slug) pair needs a
// real file.
//
// "Published" comes from the registry, not from all locales. A tool staged
// English-first has no route in the other seven locales and no hreflang
// pointing at one, so demanding copy there would forbid exactly the workflow
// Phase 0 was built to enable — and the copy would have to be written before
// anyone knows whether the English page earns impressions.
async function toolSlugsIn(code) {
  const dir = path.join(toolContent, code);
  if (!existsSync(dir)) return null;
  return (await readdir(dir)).filter((name) => name.endsWith('.ts')).map((name) => name.slice(0, -3));
}

/** Master slugs the registry actually publishes in `code`. */
const requiredSlugsFor = (code) =>
  code === defaultLocale
    ? masterSlugs
    : masterSlugs.filter((slug) => expectedLocalesFor(`/${slug}`).includes(code));

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
      fail('tool copy', `${code}: missing src/content/tools/${code}/ — directory absent`);
      continue;
    }
    const ownSet = new Set(own);
    const required = requiredSlugsFor(code);
    // The default locale must have copy for every registered slug, restricted
    // or not: `en/` is the master list, and a slug staged for English with no
    // English copy has nothing to publish.
    const requiredSet = new Set(required);
    const missing = required.filter((slug) => !ownSet.has(slug));
    if (missing.length > 0) {
      fail(
        'tool copy',
        `${code}: missing ${formatList(missing)} (no src/content/tools/${code}/<slug>.ts — the page would silently serve English)`,
      );
    }
    // Copy for a locale the registry does not publish is dead weight and a
    // latent bug: the moment someone drops the `locales` restriction the page
    // goes live with copy nobody reviewed against the rendered template.
    const unpublished = own.filter((slug) => master.has(slug) && !requiredSet.has(slug));
    if (unpublished.length > 0) {
      fail(
        'tool copy',
        `${code}: has copy for ${formatList(unpublished)} but registry.json does not publish those tools in ${code}`,
      );
    }
    const orphan = own.filter((slug) => !master.has(slug));
    if (orphan.length > 0) {
      fail('tool copy', `${code}: has slug(s) ${formatList(orphan)} with no master file in src/content/tools/${defaultLocale}/`);
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
 * Comparison-page copy agreement.
 *
 * These pages are staged English-first, so the check is the mirror image of the
 * tool check: rather than "every locale must have every comparison", it is
 * "every registered comparison must exist in exactly the locales the registry
 * publishes it in, and nowhere else". The registry already drives the routes,
 * so the failure this catches is a *content* mismatch — a slug in
 * `src/content/comparisons/en.ts` that nobody registered (no route, no sitemap
 * entry, invisible), or a registry entry with no content behind it.
 */
const comparisonDir = path.join(root, 'src', 'content', 'comparisons');
if (!existsSync(comparisonDir)) {
  fail('comparison copy', 'missing src/content/comparisons/');
} else {
  const bundleFiles = (await readdir(comparisonDir)).filter((name) => name.endsWith('.ts'));
  /** slug -> locale codes whose bundle defines it. Read by parsing the export. */
  const defined = new Map();
  for (const name of bundleFiles) {
    if (name === 'types.ts' || name === 'index.ts') continue;
    const locale = name.replace(/\.ts$/, '');
    const source = await readFile(path.join(comparisonDir, name), 'utf8');
    for (const match of source.matchAll(/^\s{4}'?([a-z0-9-]+-alternative)'?:\s*\{/gm)) {
      const slug = match[1];
      if (!defined.has(slug)) defined.set(slug, []);
      defined.get(slug).push(locale);
    }
  }

  for (const [slug, localesDefining] of defined) {
    if (!registryPages.has(slug)) {
      fail(
        'comparison copy',
        `src/content/comparisons defines "${slug}" but registry.json has no pages entry — no route, no sitemap entry, unreachable`,
      );
      continue;
    }
    const allowed = restrictedTo.get(`/${slug}`) ?? localeCodes;
    for (const locale of localesDefining) {
      if (!allowed.includes(locale)) {
        fail(
          'comparison copy',
          `"${slug}" has ${locale} content but registry.json does not publish it in ${locale}`,
        );
      }
      if (!(logicalByLocale.get(locale) ?? new Set()).has(`/${slug}`)) {
        fail('comparison pages', `no page emitted for comparison "${slug}" in ${locale}`);
      }
    }
  }

  // The other direction: a registered *comparison page* with no content behind it
// renders a route that throws. Scoped to `registryPages` rather than every
// restricted path — restricted tools live in `registry.json` too, and they have
// their own copy check below.
for (const slug of registryPages) {
    if (!defined.has(slug)) {
      fail('comparison copy', `registry.json publishes "${slug}" but no content bundle defines it`);
    }
  }

  /**
   * Footer link integrity for staged pages.
   *
   * The footer is rendered on every page in every locale, so a link to a page
   * that is not published in that locale is an internal link to a 404 — present
   * on every page of the site, in seven languages. The comparison footer column
   * filters on `isComparisonLive` for exactly this reason; this check proves it
   * rather than trusting it, because the failure is invisible in review (the
   * link looks correct) and only surfaces as crawl waste.
   */
  const footerChecks = pages.filter((p) => p.locale === defaultLocale);
  for (const page of footerChecks) {
    const html = await readFile(page.file, 'utf8');
    for (const slug of defined.keys()) {
      const publishedHere = expectedLocalesFor(`/${slug}`).includes(page.locale);
      if (!publishedHere && new RegExp(`href="/${slug}/?"`).test(html)) {
        fail(
          'comparison links',
          `${page.locale}${page.logical}: links to /${slug} but it is not published in ${page.locale}`,
        );
      }
    }
  }
}
notes.push(`comparison slugs ${registryPages.size}`);

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
    // Same rule as the page's own hreflang cluster: the alternates must cover
    // exactly the locales this path is published in, plus x-default.
    const locLogical = sitemapLogicalPath(loc);
    const expectedAlternates = expectedLocalesFor(locLogical).length + 1;
    if (verifiableLocales.length > 0 && links.length !== expectedAlternates) {
      fail('sitemap', `${loc}: ${links.length} alternates, expected ${expectedAlternates}`);
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
