# Architecture — how the tool system works

## The shape

```
src/content/tools/manifest.ts     registry: slug, icon, engine, focus, related
        │
        ├── src/content/tools/<locale>/<slug>.ts    page copy per locale
        │        └── types.ts                       ToolContent contract
        │
        ├── src/page-templates/ToolPage.astro       renders one tool page
        ├── src/page-templates/Tools.astro         the /tools/ hub
        │
        └── src/pages/<slug>.astro                 English route
            src/pages/[lang]/<slug>.astro          localised route
```

Everything downstream — sitemap URLs, the `/tools/` hub, the footer's tool
column, the homepage tool strip, cross-links between related tools — is derived
from the manifest. **Adding a tool is a manifest entry plus two thin route
files.** No other file needs to learn about it.

## Why the mirror-route pattern

Every page exists twice: `src/pages/<slug>.astro` (English, at the root) and
`src/pages/[lang]/<slug>.astro`. Each is a 13-line wrapper that resolves the
locale and delegates to a shared `page-templates/*.astro`.

This looks redundant and is deliberate. `sitemap.xml.ts` globs **only** the root
`*.astro` files to discover which logical paths exist, then multiplies by locale.
If the two halves could drift, the sitemap would silently miss pages. Because
the root file is the single definition of "this page exists", they cannot drift.

The same applies to `verify-i18n.mjs`, which walks `dist/` rather than trusting
any hardcoded page list.

## Content model: why per-file, not one dictionary

`ToolContent` requires six keys — `meta.title`, `meta.description`,
`breadcrumb`, `h1`, `intro`, `faq`. Everything else (`benefits`, `howTo`) is
optional and **falls back to the shared, already-translated sections** in
`src/i18n/locales/`.

That is the whole reason 8 locales is tractable. A tool page pays only for copy
that is genuinely unique to it. The privacy proof, the benefit grid, the how-to
steps and the CTA are rendered from the site dictionary and cost nothing per
tool. Adding a ninth locale to nine tools is nine files per locale, not a
rewrite of a 3,500-line object.

Content is discovered with `import.meta.glob('./*/*.ts', { eager: true })`, so
adding a tool or a locale needs no edit to the resolver.

## Two ways a tool page is built

### 1. Focus — reuse the editor, foreground one operation

Seven of the nine M1 tools are the **same editor** with a different control
brought to the foreground, via the `focus` prop threaded through
`OrganizeTool` → `Toolbar` / `PageGrid` / `PageCard` / `BatchBar`:

- `Toolbar` rings the matching control and tints it `bg-primary-pale`
- `PageCard` keeps the matching action permanently visible instead of
  hover-revealed, and outlines it
- `BatchBar` rings the matching batch action

Focus values: `merge`, `delete`, `rotate`, `reverse`, `insert`, `duplicate`,
`blank`.

**Use this whenever a new tool is a mode of the existing page editor.** It is
one manifest entry and a day's copy — not a new component.

> Implementation note: the emphasis on `CardAction` uses `outline-*`, not
> `ring-*`. That element already carries `elev-1`, which claims `box-shadow`;
> Tailwind's ring also sets `box-shadow`, so the ring was being silently
> overridden. `outline` is a separate property and cannot collide.

### 2. Engine — a genuinely new tool

`split-pdf` and `extract-pdf-pages` needed real new UI, so the manifest carries
an `engine` and `ToolPage.astro` branches:

```astro
tool.engine === 'split'    ? <SplitTool client:load />
: tool.engine === 'extract' ? <ExtractTool client:load />
: <OrganizeTool client:load focus={tool.focus} />
```

`client:load` directives must be literal on the tag — they cannot live in a
variable, or the build fails to parse. That is why this is an inline
conditional rather than a pre-built element.

## The engine contract

Every engine island follows the same shape, because they all do the same
job: take files, do something locally, produce a file.

- Wraps its inner component in `<ToolI18nProvider locale={...}>`
- Handles password-protected PDFs via the existing `PasswordModal`
- Surfaces the "encrypted, cannot be rebuilt for download" case honestly rather
  than failing silently
- Has an `aria-live` region, keyboard support, and no hover-only affordances
- Revokes object URLs, drops pdf.js documents, and removes all global listeners
  on unmount
- Uses only Tailwind design tokens — no raw hex, no new visual language
- Uses logical properties (`ps-`, `pe-`, `ms-`, `me-`, `start-`, `end-`) so RTL
  stays correct

**M2a's first job is to stop writing this six times.** `SplitTool` and
`ExtractTool` each independently re-implement the same six global listeners
(`paste`, `dragenter`, `dragover`, `dragleave`, `drop`, `keydown`) plus the
password modal, encrypted banner, toasts, live region and cleanup. Extract
`usePdfToolSession()` + `<ToolShell>` before writing engine #3.

## Shared PDF primitives

`src/components/organize/lib/pdfService.ts` (read/render/thumbnails) and
`exportService.ts` (write) are already used by all engines — but they live under
`organize/`, which is now misleading. Move both plus `hooks/` to
`src/lib/pdf/` as the first step of M2a.

Verified library behaviour worth knowing before building on it:

| API | Behaviour |
|---|---|
| `copyPages(src, [i])` | Returns a **single** page for a single index, not an array. Existing code destructures it correctly. |
| `drawPage(page, opts)` | Requires an **embedded** page from `embedPage()`. Passing a `copyPages` result throws. This is how n-up compositing works. |
| `setCropBox` / `setMediaBox` / `setSize` | All work. Crop and resize are feasible losslessly. |
| `drawText` | Supports `opacity`, `rotate`, `lineHeight`. `maxWidth` exists but do not rely on it — wrap manually with `widthOfTextAtSize`. |
| `setProducer` | **Silently does not survive save/load** in pdf-lib 1.x; `setCreator` does. Don't expect producer metadata to persist. |
| `embedJpg` / `embedPng` | Work. Images→PDF is feasible with no new dependency. |

## Structured data

`src/i18n/schema.ts`. Tool pages emit `SoftwareApplication` + `WebApplication`
(co-typed, no `aggregateRating`), `WebPage`, and a depth-correct
`BreadcrumbList` (Home → Tools → Tool). The hub emits `CollectionPage` +
`ItemList`. See `strategy.md` for what was deliberately removed.

## i18n model

Two dictionaries, both keyed identically across all 8 locales:

- `src/i18n/locales/` — site chrome and long-form page copy
- `src/i18n/tool/` — strings for the interactive tool, imported by the client
  bundle, so it must stay small

Every non-English file is typed against English, so a missing or misspelled key
is a compile error. Functions in these dictionaries handle pluralisation, and
each locale implements its own rules (e.g. Italian agrees the participle, French
embeds verb agreement, ja/ko use counters).

Inline markup: `<strong>…</strong>` and `<a href="/…">…</a>` only, parsed by
`src/i18n/rich.ts`. Internal hrefs are locale-prefixed at render time.

Locale-restricted tools are supported by the manifest's optional `locales` field,
but `verify-i18n.mjs` cannot read it yet — see the M2a roadmap.
