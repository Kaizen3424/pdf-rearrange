# Verification

Four gates plus a browser pass. **All five before any milestone is called done.**

## 1. Types

```bash
npx astro check
```

Must report `0 errors` across ~194 files. This is what catches a missing
dictionary key in any of the 8 locales, a malformed `ToolContent` object, and
`client:*` directive mistakes.

Expected noise: `hint` diagnostics about unused function parameters in
`src/i18n/tool/*.ts`. Those parameters exist to keep the `typeof enTool` contract
aligned across locales — do not remove them.

## 2. Build

```bash
npm run build
```

Static output to `dist/`. After M1: **130 pages** (128 indexable + 404 + 500).

## 3. i18n and sitemap

```bash
npm run verify:i18n
```

Expected: `locales 8; logical paths 16; pages checked 128/128; sitemap urls 128;
tool slugs 9`.

What it proves — and note these are *derived from `dist/`*, not from any
hardcoded list, so it stays correct as pages are added:

- every emitted page has the right `<html lang>`, canonical, and 9-link
  hreflang cluster with `x-default` = English
- `og:locale` and `og:locale:alternate` correct
- **locale symmetry** — every locale has the same set of logical pages
- no empty or missing locale directory
- non-empty `<title>`, no locale-prefixed `mailto:`, no U+FFFD
- all JSON-LD parses
- CJK font stylesheet loaded on `ja`/`ko` only
- `404`/`500` are noindex with no hreflang
- **sitemap ↔ pages agreement in both directions**
- **no `lastmod` / `changefreq` / `priority`**
- every `<loc>` absolute-https on `rearrangepdf.com`
- `robots.txt` allows `/` and references the production sitemap
- every locale has a content file for every English tool slug, and no stale slugs

## 4. SEO audit

```bash
npm run audit:seo
```

Expected: `indexable: 128, noindex: 2` and **0 warnings**.

Checks title/description lengths, canonical, hreflang completeness, `x-default`,
indexability, and JSON-LD parsing. The `grab()` helper decodes HTML entities, so
an apostrophe in a title counts as one character, not six.

M2a adds a per-page JS weight assertion here.

## 5. Browser pass — not optional

```bash
astro dev --background     # http://localhost:4321
```

Drive the actual UI. Type checking cannot see a runtime `TypeError`, a leaked
listener, a promise that resolves to `undefined`, or a flex row that collapses on
mobile. **Two M1 bugs were found exactly this way**, one of which made every
split silently fail while passing types, build, and all automated checks.

### Checklist for any new or changed tool

- [ ] Load a real PDF. Generate one first: a 5-page doc with distinct page
      labels makes it obvious whether the right pages came out.
- [ ] Exercise every error path and confirm the message is specific, not generic.
- [ ] Confirm the output is a valid PDF — `PDFDocument.load()` the bytes and
      check the page count.
- [ ] Intercept the download to count blobs and confirm the number matches
      expectation:
      ```js
      const real = URL.createObjectURL.bind(URL);
      URL.createObjectURL = (b) => { if (b.type === 'application/pdf') window.__n = (window.__n ?? 0) + 1; return real(b); };
      ```
      Beware double-patching across a reused page — navigate fresh first, or the
      count will be a multiple of the truth.
- [ ] Keyboard: tab through, operate without a mouse, check visible focus.
- [ ] Mobile at 390x844: no horizontal overflow, no crushed text, tap targets
      ≥24px (inline text links excepted), no hover-only affordances.
- [ ] A non-English locale: the tool works and its strings are translated.
- [ ] DevTools console is clean — zero errors, zero warnings.
- [ ] Confirm no network request carries file content. This is the product.

### Verifying a tool's PDF output is honest

```js
const bytes = new Uint8Array(await (await fetch('/__test.pdf')).arrayBuffer());
const dt = new DataTransfer();
dt.items.add(new File([bytes], 'test.pdf', { type: 'application/pdf' }));
const input = document.querySelector('input[type=file]');
input.files = dt.files;
input.dispatchEvent(new Event('change', { bubbles: true }));
```

Serve the fixture from `public/` (and delete it before committing) so the page can
fetch it — a `file://` path is not reachable from the page.

To inspect the produced PDF, base64 the captured blob out through
`evaluate_script` and load it with `pdf-lib` in Node. `src/i18n/tool/*.ts` is a
good source of realistic fixture pages.

## Deploy

```bash
git add -A ':!google_console_report' && git commit -m "<short, plain summary>"
npm run deploy
```

`google_console_report/` is a GSC data export, not source — keep it out of commits.

After deploying:

1. GSC → Sitemaps → re-submit `sitemap.xml`
2. GSC → URL Inspection → **Request Indexing** on `/`, `/tools/` and the tool
   pages. There is a quota; spend it on the 10 highest-value pages, not all 128.
3. Expect nothing in Search Results for 2–4 weeks. That is normal for a young
   domain and is not a signal that something is broken.

## Before calling a milestone done

```bash
npx astro check && npm run build && npm run verify:i18n && npm run audit:seo
```

All green, browser pass complete, and the roadmap file in `plans/` updated to
reflect what actually shipped.
