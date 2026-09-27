# Strategy — why this project is shaped this way

## Starting evidence (GSC export, `google_console_report/`, 16–24 Sep 2026)

| Metric | Value | What it actually means |
|---|---|---|
| Domain age | **14 days** (first commit 12 Sep 2026) | The site is in its discovery phase |
| Date range with data | 9 days | The "Last 3 months" filter was mostly empty |
| Impressions | **110** total | ~12/day — this is Google's crawl-and-test budget for a new domain |
| Clicks | **0** | Within noise at n=110 |
| Average position | **~55** (page 6) | Google is *discovering*, not *rejecting* |
| URLs with impressions | 12 of 128 | Normal for a new site; impressions ≠ indexed |
| Best positions | pos 1–11 on single-impression queries (Guatemala, Venezuela, Canada) | Long-tail discovery |
| Search Appearance report | empty | Expected — see "Dead rich results" below |

**The central conclusion:** this is an indexation and surface-area problem, not a
ranking-competition problem. You cannot lose a competition you have not entered.
Average position 55 with zero clicks is what a 2-week-old domain looks like.

**Do not optimise CTR yet.** At n=110 impressions, CTR is statistically
meaningless. It needs ~1,000 impressions per page before it tells you anything,
and position needs ~100 clicks to move meaningfully. Judging the site on CTR now
means making changes based on noise.

## The competitive landscape

Head terms in this niche are owned by Adobe, iLovePDF, Smallpdf, PDF24, PDFChef
and PDFResizer. None of that is reachable by on-page work.

The important finding is a second tier. Live at the time of writing, running an
**identical "no upload / private / browser-based" pitch with near-identical copy**:

- `pdforganize.app` — *"Organize PDF Free — No Upload, Private Browser Tool"*
- `trulyfreepdf.com` — published 2026-09-03, two weeks before us
- `docifra.com` — has `/comparisons` and `/blog` hubs
- `gopdf.live`, `ihatepdf.cv`

`trulyfreepdf.com` already ranks page 1 with a ~20-article content cluster while
we had one editorial page. **The "no upload" angle is commodity.** Any copy
parity with these sites is a liability, not a differentiator.

## Settled decisions

Do not relitigate these without new evidence.

### Stay 100% client-side — never upload a user file

The strongest asset the site has. Building a server-side tool tier (PDF→Word,
Office conversion, OCR) would add high-volume keywords and simultaneously destroy
the only claim competitors cannot copy. The trade is deliberate: **breadth of
tools is explicitly subordinate to the privacy moat.**

### These tools will never exist, and that is correct

| Requested / expected | Why not |
|---|---|
| PDF → Word / Excel / PowerPoint | Requires full layout reconstruction. Not honestly doable in a browser. |
| Protect / Unlock PDF (password) | `pdf-lib` does not support encryption at all. |
| OCR, "make scanned PDF searchable" | Needs Tesseract WASM (~2 MB + language data); poor in-browser accuracy. |
| HTML → PDF, Email → PDF | Needs a headless layout engine. |
| AI summarise / chat / translate | Requires uploading to an LLM — directly contradicts the core claim. |
| Word/Excel/PPT → PDF | Needs full document parsers; heavy and lossy. |

Shipping a broken or lossy version of any of these would waste crawl budget on a
page that cannot rank, and disappoint the user. Better to have no page.

### Redact PDF — rejected on legal-risk grounds

Drawing a black rectangle over content does **not** remove the underlying text
layer. Anyone relying on a naive redaction tool can leak exactly the data they
believed they removed — contracts, medical records, financial statements. It
could be built safely *only* by forcing rasterisation, which destroys text
selectability and inflates file size. Not built.

### No `aggregateRating` in structured data

`src/components/organize/StarRating.tsx` writes a single self-selected rating to
the visitor's own `localStorage`. There is no aggregate, no count, nothing shared.
Emitting `aggregateRating` from that would be fabricated structured data and a
manual-action risk. Tool pages emit `SoftwareApplication` + `WebApplication` with
`offers` only. **Revisit only when real, aggregated, on-page reviews exist.**

### Dead rich results — markup removed, content kept

- **FAQ rich results ended 7 May 2026 for every site**, including the
  government/health sites that had retained them. GSC report removed June 2026,
  API August 2026.
- **HowTo rich result removed June 2024**; documentation deleted.

The visible FAQ content stays — it earns its place as on-page copy and as
citation surface for AI answers. The `FAQPage` and `HowTo` JSON-LD were deleted
from `src/i18n/schema.ts` because markup that can never produce a result is only
markup that can drift out of sync with the page.

### `<lastmod>` deliberately absent from the sitemap

It was emitting the same date for all 128 URLs (a single commit stamps the whole
site; uncommitted work falls back to mtimes). Google reads `lastmod` only while
verifiably accurate and **stops reading it** otherwise — a column of identical
dates is the textbook case. `scripts/verify-i18n.mjs` now fails the build if
`lastmod`, `changefreq` or `priority` reappear.

### No sitemap index

The cap is 50,000 URLs / 50 MB; we are at 128 URLs / 123 KB. Splitting early
adds indirection for nothing. `sitemap.xml.ts` fails the build above 50,000 with
a message to split, so the limit can never be crossed silently.

### Measure indexed URLs, not CTR

Day-28 re-baseline is on **indexed URL count** and **non-brand impressions** per
tool page. CTR and average position are explicitly not the scoreboard at this
stage.

## Known technical debt

| Item | Status |
|---|---|
| `src/components/organize/{lib,hooks}/` is now site-wide, not organize-specific | Move to `src/lib/pdf/` — first step of M2a |
| Split and Extract each re-implement the same six global listeners, password modal, encrypted banner, toasts, live region and unmount cleanup | Extract `usePdfToolSession()` + `<ToolShell>` — first step of M2a |
| `verify-i18n.mjs` fails if any locale lacks any English tool | Blocks the English-first staging M2a needs; move the manifest to JSON |
| ~800 KB of JS loads `client:load` (pdfjs 421 + pdf-lib 161 + React 216) | Measure with Lighthouse; likely the biggest ranking risk on mobile |
| No in-content images, so zero image-search impressions | M3 |
| Text→PDF tools cannot render CJK (pdf-lib Standard Fonts are WinAnsi-only) | M2b; must be labelled in the UI, not hidden |
| No blog / comparison pages | M4; this is the real off-page lever |

## What actually moves rankings here

In rough order of expected impact:

1. **Off-page.** Links and mentions. No amount of on-page work closes an
   authority gap with Adobe. Product Hunt, Hacker News Show HN, Reddit
   (`r/PDFs`, `r/privacy`, `r/selfhosted`, `r/sysadmin`), and directory
   listicles. The "no upload, open source" angle performs well on those surfaces.
2. **Comparison content.** `rearrangepdf vs smallpdf` / `vs ilovepdf` /
   `vs pdf24` — the highest-leverage low-authority play, and the exact content
   the competitors ranking above us are using.
3. **Page depth on the tool cluster**, which M1 and M2a build out.
4. **Technical SEO**, which is already ahead of the field. Do not spend more here.
5. **Mobile performance**, which is unmeasured and may be a real ceiling.

## Be honest about the timeline

M1 took ~14 days from a standing start to a deployed, tested, 128-URL cluster.
That produced no traffic yet, and will not for weeks. This is a 6-month play.
The realistic path to first measurable non-brand impressions is M1 + comparison
content + some links — not M2a alone.
