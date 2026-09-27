# SEO and indexing playbook

## Current technical state

Verified good. **Do not spend more effort here — it is not the bottleneck.**

| Item | State |
|---|---|
| Sitemap | Single file, 128 URLs, 123 KB, `xhtml:link` alternates on every entry, `xsi:schemaLocation`, XSL for humans |
| `lastmod` / `changefreq` / `priority` | **Deliberately absent**, and the build fails if they reappear |
| `robots.txt` | `Allow: /` + `Sitemap: https://rearrangepdf.com/sitemap.xml` |
| `public/_headers` | `X-Robots-Tag: noindex` scoped to `https://rearrangepdf.pages.dev/*` only — the **preview** host. Correct: it stops the preview URL competing with production. Do not remove. |
| Canonical | `trailingSlash: 'always'`, one self-referencing canonical per page |
| Hreflang | 8 locales + `x-default` on every page and in every sitemap entry; `x-default` = English |
| Meta robots | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| Internal link depth | ≤ 2 clicks: nav → `/tools/` → any tool. Footer lists all tools + hub in every locale. |
| Structured data | `SoftwareApplication`+`WebApplication` (tools), `WebPage`, `BreadcrumbList` (3 levels on tool pages), `ItemList` (hub), `Organization`+`WebSite` (home) |

## Why there is no `lastmod`

It was emitting **the same date for all 128 URLs** — a single commit stamps the
whole site, and uncommitted work falls back to file mtimes, so every entry
collapses to the deploy date.

Google reads `lastmod` only while it is verifiably accurate, and *"will stop
reading it"* once it is not. A column of identical dates is the textbook case of
misreporting. Mueller: *"Setting today's date in a sitemap file isn't going to
help anyone. It's just lazy. It makes it harder for search engines to spot truly
updated pages."*

`priority` and `changefreq` are ignored by Google outright.

`scripts/verify-i18n.mjs` now fails the build if any of the three reappear, if a
`<loc>` is not absolute-https on the production host, or if `robots.txt` blocks
`/` or points at the wrong sitemap.

## Sitemap sizing

The cap is **50,000 URLs / 50 MB uncompressed**. We are at 128 URLs / 123 KB —
two orders of magnitude below. **Do not split into a `<sitemapindex>`.** It adds
indirection for nothing.

`sitemap.xml.ts` throws above 50,000 with a message telling us to split, so the
limit can never be crossed silently. Revisit only at roughly 40,000 URLs.

## What does not help Google index faster

Recorded so nobody re-litigates it:

- **IndexNow does not reach Google.** Google evaluated it in 2021 and never
  adopted it. It notifies Bing, Yandex, Seznam, Naver and Yep. Worth adding later
  — Bing's index feeds ChatGPT Search and Perplexity, so it is a real lever on
  *AI answer* citations — but it does nothing for Google. (Implementation is
  cheap: host a key file at the root, POST changed URLs to
  `https://api.indexnow.org/indexnow` after each deploy.)
- **The Google Indexing API is scoped to `JobPosting` and `BroadcastEvent`.** It
  does not apply to tool pages.
- **`<lastmod>` games, `changefreq="always"`, `priority`** — all ignored.

## What does work for Google

1. **Submit the sitemap in Search Console** (Sitemaps → re-submit `sitemap.xml`).
2. **URL Inspection → Request Indexing** on the **10 highest-value pages**:
   `/`, `/tools/`, and the 9 tool pages. There is a daily quota; spending it on
   128 pages wastes it on the long tail.
3. **Internal links.** Already ≤2 clicks. Keep every new tool reachable from the
   hub and the footer — sitemap-only discovery is weak.
4. **Let time pass.** A 15-day-old domain with 110 impressions is still in
   discovery. Nothing here changes that.

## Measurement: what to watch, and when

**Do not use CTR or average position as the scoreboard yet.**

| Window | What to do |
|---|---|
| Day 0–3 | Submit sitemap; request indexing on 10 pages |
| Day 7 | Check **Indexing → Pages** for how many of the 128 are indexed. This is the real signal. |
| Day 14 | Check for crawl errors or "Discovered – currently not indexed" |
| Day 28 | First real re-baseline |

**Day-28 scoreboard:**

- **Indexed URL count** — target: all 128
- **Non-brand impressions per tool page** — which of the 9 has demand?
- Which queries surface, and in which locale

**Why not CTR:** 110 impressions total. A CTR measured across a few dozen
impressions is noise, and "improving" it usually means reacting to randomness.
CTR needs ~1,000 impressions per page to carry signal. Likewise, average position
needs ~100 clicks before it moves meaningfully.

**Watch for "Discovered – currently not indexed"** on the tool pages. With 128
new URLs at once, some sitting in the queue is normal; if it persists past a
couple of weeks it points at thin content or weak internal linking rather than
sitemap problems.

## Known gaps

| Gap | When |
|---|---|
| Zero in-content images → zero image-search impressions. Search Appearance report is empty and will stay empty. | M3 |
| No demo video | M3 |
| ~800 KB of JS on `client:load` — unmeasured, and the most likely mobile ceiling | M2a step 0.5 |
| No comparison pages — the highest-leverage low-authority play | M4 |
| No blog / editorial layer | M4 |
| `Organization` schema has no `sameAs` (no social profiles) | Low priority |
| `FAQPage`/`HowTo` markup removed — Google killed both rich results. Content stays as copy; do not re-add the markup. | Done, intentionally |
