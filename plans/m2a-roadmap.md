# M2a roadmap — 11 tools, 4 engines

**Scope:** the highest-volume PDF tools that are honestly buildable client-side.
English-first; each locale is ported only after the English page shows
impressions.

**Sequencing rule: browser-test each engine before starting the next.** Two M1
bugs — one of which made *every split silently fail* — were invisible to the
type checker and to the build, and only surfaced when driven in a real browser.
Writing four engines blind is how you ship four broken tools.

---

## Step 0 — Foundation (blocking, ships no new tools)

### 0.1 Move the manifest to JSON

**Problem:** `verify-i18n.mjs` fails if any locale lacks any English tool. That
is precisely what English-first staging produces, so M2a is blocked on it. The
manifest already has the right field (`locales?: Locale[]`) but the script cannot
import TypeScript.

**Do:** `src/content/tools/manifest.ts` → `src/content/tools/tools.json`, with a
thin typed wrapper that validates the shape and re-exports the same API. Update
`sitemap.xml.ts`, `ToolPage.astro` and `verify-i18n.mjs` to read it. The script
must then assert, per tool, that it is only emitted for locales in its `locales`
list.

**Why JSON and not a generated sidecar:** two artefacts can drift. One data file
read by both sides cannot.

### 0.2 Promote shared PDF primitives

`src/components/organize/{lib,hooks}/` → `src/lib/pdf/`. These are used by all
engines; the `organize/` path is now actively misleading with 20 tools importing
from it. Pure move, update imports, no behaviour change.

### 0.3 Extract the shared tool session

`usePdfToolSession()` (file loading, password prompt, encrypted detection, toasts,
live-region announcements, the six global listeners, unmount cleanup) and
`<ToolShell>` (file header, zoom, page grid, result panel, caveats).

**Do this before engine #3.** `SplitTool` and `ExtractTool` each independently
re-implement all of it. Extracting after the fact is harder than doing it now.

### 0.4 Per-page JS budget in the audit

Shared chunks today: pdfjs 421 KB, pdf-lib 161 KB, React 216 KB, locale
dictionary 410 KB (code-split per locale). Heavy dependencies are shared across
all tool pages, so **marginal cost per tool is its ~20 KB island** — that is the
number to cap. Add a per-page script-weight assertion to `scripts/audit-seo.mjs`.

### 0.5 Measure Core Web Vitals

~800 KB of JS loads `client:load` on the homepage and every tool page. Some of
this is unavoidable for a client-side PDF tool, but it is the most likely ceiling
on rankings and it is currently unmeasured. Run Lighthouse against the production
build (not dev) and record the numbers here. Decide then whether mitigation is
worth it.

---

## Step 1 — Engine A: image → PDF

**Tools:** `jpg-to-pdf`, `png-to-pdf`, `images-to-pdf`

Highest search volume of anything buildable client-side. No new dependency —
`pdf-lib`'s `embedJpg` / `embedPng` are verified working.

**Needs:** page size (A4/Letter/Fit-to-image), orientation, multi-file merge,
per-image ordering.

**Acceptance:** a phone JPEG converts to a correctly-sized multi-page PDF, order
is preserved, quality is not visibly degraded, no upload occurs.

**Browser test:** load 3 images of differing aspect ratios; confirm page sizing
and ordering; download and verify page count.

---

## Step 2 — Engine B: PDF → image

**Tools:** `pdf-to-jpg`, `pdf-to-png`

The inverse of Step 1 and shares most of its plumbing. pdf.js renders a page to
a canvas, `toBlob` produces the image.

**Needs:** scale/DPI choice, colour (JPG has no alpha — be explicit about the
background), per-page download vs bundled ZIP, batch and progress.

**Needs a decision:** ZIP bundling requires a dependency (~50 KB). Either add it
here or ship per-page downloads only and say so.

**Acceptance:** a 5-page PDF yields 5 correct images at the chosen resolution; a
multi-page PDF with transparency renders sensibly as JPG.

**Browser test:** check output dimensions match the chosen DPI, and that a
long PDF reports progress rather than freezing.

---

## Step 3 — Engine C: overlay

**Tools:** `watermark`, `add-page-numbers`, `sign`

One engine, three tools — all "draw on top of copied pages".
`drawText` with `opacity` + `rotate` is verified.

**Needs:** text watermark (content, font size, rotation, opacity, position,
tile vs single), image watermark, page numbers (format, position, start value,
first-page exclusion), signature (draw with mouse/touch/stylus, or type; embedded
as PNG).

**Signature is the risk.** It must work with touch and stylus, and degrade
gracefully for mouse users. A mouse-drawn signature is the common case.

**Acceptance:** watermark tiles correctly across a multi-page doc at low opacity;
page numbers respect start value and position; a drawn signature lands at the
chosen position on the chosen pages.

**Browser test:** draw a signature with a pointer, confirm it is not mirrored or
distorted, and confirm the canvas is sized for device pixel ratio.

---

## Step 4 — Engine D: geometry

**Tools:** `crop-pdf`, `resize-pdf`

`setCropBox` / `setMediaBox` / `setSize` are all verified working, and both are
lossless.

**This is the largest single piece of design work in M2a** — a *visual* crop
editor: render the page, drag handles to set the crop rect, live preview, plus a
paper-size picker for resize (A4/Letter/Legal/A3/A5/orientation).

**Acceptance:** crop removes exactly the selected margins with no content loss;
resize changes page geometry and scales content proportionally; both are
undoable and reversible.

**Browser test:** crop a real scanned page with asymmetric margins; confirm the
CropBox is exact; test resize on mixed-orientation pages; test on touch.

---

## Per-tool checklist

For each of the 11 tools:

1. `src/content/tools/manifest.ts` — entry with `locales: ['en']`
2. `src/content/tools/en/<slug>.ts` — copy
3. `src/pages/<slug>.astro` + `src/pages/[lang]/<slug>.astro`
4. Engine component under `src/components/<engine>/`
5. UI strings added to `src/i18n/tool/en.ts` **and all 7 other locales in the
   same commit** — the type system will fail otherwise
6. JSON-LD in `toolSchemas` if the tool needs its own claims
7. Cross-links: add the new slug to the `related` arrays of neighbouring tools
8. Run the gates, then the browser test

**Content quality bar** (this is what ranks):

- `meta.title` 50–60 chars leading with the real search term, then a benefit
  and/or "free". Descriptions 140–160 chars.
- Match the terminology already used in that locale's `locales/<locale>.ts` and
  `tool/<locale>.ts`, or the site reads as two products.
- Vary sentence length. No translated-English rhythm, no telegraphic fragments.
- Keep the inconvenient caveats — the device-memory limit, the JPG alpha loss,
  the lossy paths. Dropping them is a bug, not a style choice.

---

## Deferred to M2b

`pdf-to-text`, `pdf-to-markdown`, `csv-to-pdf`, `txt-to-pdf`, `markdown-to-pdf`,
`n-up-pdf`, `pdf-to-zip`, `pdf-metadata`, `grayscale-pdf`, `repair-pdf`

**Standing limitation for the text→PDF tools:** pdf-lib's Standard Fonts are
WinAnsi-only, so **CJK text will not render**. They ship Latin-only at launch
and must say so in the UI rather than silently emitting tofu. Supporting CJK
means embedding a multi-MB font — a real decision, not a detail.

**`grayscale-pdf` is lossy** (it rasterises) and slow on large documents. It must
say so on the page.

**`markdown-to-pdf`** needs either a dependency or a hand-written minimal
parser — decide before starting.

---

## After M2a

Port the 11 new tools to the other 7 locales, **English page first, one locale
at a time, only after the English page shows impressions.**

Then M2b, then M3 (privacy proof: network-request visualiser, `/open-source/`,
PWA offline, screenshots and demo video), then M4 (comparison pages and link
building — the only thing that actually competes with Adobe).
