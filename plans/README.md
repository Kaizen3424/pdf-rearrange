# Rearrange PDF — project plans

Working plans for **rearrangepdf.com**, a privacy-first PDF page-organising tool.

**If you are starting a new session, read this file first.** It tells you what the
project is, what state it is in, and where the detail lives. Everything else in
this folder is supporting material; this file is the briefing.

---

## What the site is

A free browser tool for rearranging, merging, splitting, rotating, deleting,
duplicating and extracting the pages of a PDF. The defining constraint:

> **No user file is ever uploaded. All processing happens in the visitor's
> browser.** This is not a feature preference — it is the product. Never
> introduce a server round-trip for file processing, and never describe a tool
> as client-side if it is not.

Secondary positioning: free, no sign-up, no watermark, no page or size limits.

## Stack

| | |
|---|---|
| Framework | Astro 7 (static output, SSG) |
| UI islands | React 19, hydrated with `client:load` |
| PDF read/render | `pdfjs-dist` 6 |
| PDF write | `pdf-lib` 1 |
| Drag & drop | `@dnd-kit` |
| Styling | Tailwind CSS v4 with project design tokens |
| i18n | 8 locales: `en` (default) `es` `ja` `fr` `de` `pt-br` `ko` `it` |
| Deploy | Cloudflare Pages via `wrangler` |
| URL shape | `trailingSlash: 'always'`; English at root, others under `/<locale>/` |

## Current state

**Milestone 1 is shipped** — deployed, 128 indexable URLs.

- 16 logical paths x 8 locales = **128 indexable pages**, plus `404`/`500`.
- **9 tool pages**: `merge-pdf`, `split-pdf`, `delete-pdf-pages`, `rotate-pdf`,
  `reverse-pdf-pages`, `extract-pdf-pages`, `insert-pdf-pages`,
  `duplicate-pdf-pages`, `insert-blank-page`
- Plus `/tools/` hub, and a tool strip on the homepage.
- Sitemap: single file, 128 URLs, hreflang alternates on every entry, **no
  `lastmod`** (deliberate — see `seo-indexing.md`).
- All four gates green: `astro check` 0 errors, build, `verify:i18n`, `audit:seo`
  0 warnings.

**Next up: Milestone 2a** — 11 more tools across 4 new engines. See
`m2a-roadmap.md`.

## Where things live

| Concern | Location |
|---|---|
| Tool registry (add a tool here first) | `src/content/tools/manifest.ts` |
| Per-tool page copy, per locale | `src/content/tools/<locale>/<slug>.ts` |
| Copy resolver | `src/content/tools/index.ts` |
| Shared tool page template | `src/page-templates/ToolPage.astro` |
| Tool hub template | `src/page-templates/Tools.astro` |
| Engine components | `src/components/{organize,split,extract}/` |
| Site copy, per locale | `src/i18n/locales/<locale>.ts` |
| Interactive tool UI strings | `src/i18n/tool/<locale>.ts` |
| JSON-LD | `src/i18n/schema.ts` |
| Sitemap | `src/pages/sitemap.xml.ts` |
| Verification gates | `scripts/verify-i18n.mjs`, `scripts/audit-seo.mjs` |

## Adding a tool — the short version

1. Add an entry to `src/content/tools/manifest.ts`.
2. Write copy at `src/content/tools/en/<slug>.ts` (`ToolContent` in
   `src/content/tools/types.ts`; only 6 keys are required).
3. Add two route files: `src/pages/<slug>.astro` and
   `src/pages/[lang]/<slug>.astro`, each a thin wrapper around `ToolPage.astro`.
4. If it needs a new engine, add it to the `ToolEngine` union in the manifest and
   branch in `ToolPage.astro`.
5. Translate to the other 7 locales.
6. Run the gates in `verification.md`.

The hub, footer, sitemap and verification script pick it up automatically.

## Verification gates

```bash
npx astro check        # types across 194 files — must be 0 errors
npm run build          # static output to dist/
npm run verify:i18n    # hreflang, canonical, locale symmetry, sitemap, robots
npm run audit:seo      # titles, descriptions, schema, indexability
```

Plus a **browser pass** on any new engine — see `verification.md`. This is not
optional: two M1 bugs that made the split tool silently non-functional were only
found by driving it in a real browser.

Dev server:

```bash
astro dev --background        # http://localhost:4321
astro dev status | logs | stop
```

## Read next

| File | What it answers |
|---|---|
| `strategy.md` | Why the project is shaped this way, and which decisions are settled |
| `architecture.md` | How the tool system fits together |
| `m2a-roadmap.md` | The next milestone, step by step |
| `seo-indexing.md` | Sitemap, robots, hreflang, and the Search Console playbook |
| `verification.md` | Every gate, what it proves, and the browser checklist |
