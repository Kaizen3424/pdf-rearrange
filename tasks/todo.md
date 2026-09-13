# i18n TODO - rearrangepdf.com

## Phase 1: Foundation
- [x] T1: i18n config + scaffolding (ui.ts, utils.ts) + Layout head (hreflang, og:locale, html lang)
- [x] T2: English master dictionary (src/i18n/locales/en.ts)
- [x] T3: Refactor chrome components (Nav, Footer, Hero, CtaSection, ErrorPage/404/500)
- [x] T4: Refactor content sections (HowItWorks, Features, PrivacySection, Faq, SeoContent)
- [x] T5: Home + HowTo page templates + [lang] routes + root wrappers
- [x] T6: About/Contact/Privacy/Terms templates + [lang] routes
- [x] T7: React tool i18n part 1 (OrganizeTool, DropZone, Toolbar, types)
- [x] T8: React tool i18n part 2 (PageGrid, PageCard, PreviewModal, PasswordModal, SuccessPanel, BatchBar, StarRating, Toasts)
- [x] T9: Language switcher (Nav dropdown + Footer links)

### Checkpoint A
- [x] `npx astro check` passes (0 errors/warnings/hints)
- [x] `npm run build` succeeds (50 pages: 8 en + 7x6 locales)
- [x] English HTML output identical to pre-refactor (parity diff: only language-switcher additions + 4 fixed pre-existing `\u2019` bugs)
- [x] `/es/` ... `/it/` all return 200 with English fallback strings (hreflang x8 + x-default, canonical, og:locale, html lang, locale-prefixed links)

Notes from Checkpoint A (bugs fixed):
- LanguagePicker toggle logic was inverted -> fixed.
- Nav mobile menu toggle was inverted (pre-existing bug: menu never opened) -> fixed.
- 4 literal `\u2019` escapes in template text (Features x2, PrivacySection x2) rendered as text on the old site -> replaced with real characters.
- Removed unused imports in SeoContent.astro.

## Phase 2: Translations
- [x] T10: Spanish (es) — 531 lines, PASS check-lang, 14 home keywords
- [x] T11: Japanese (ja) + Noto Sans JP — 525 lines, PASS check-lang, 14 home keywords, Noto Sans JP Variable CSS served only on ja pages via `?url`
- [x] T12: Korean (ko) + Noto Sans KR — 506 lines, PASS check-lang, 14 home keywords, Noto Sans KR Variable CSS served only on ko pages via `?url`
- [x] T13: French (fr) — 524 lines, PASS check-lang, 14 home keywords (accents normalized: réorganiser, façons)
- [x] T14: German (de) — 534 lines, PASS check-lang, 14 home keywords
- [x] T15: Italian (it) — 534 lines, PASS check-lang, 14 home keywords
- [x] T16: Portuguese BR (pt-br) — 534 lines, PASS check-lang, 14 home keywords, Cyrillic stray `прямо` fixed

### Checkpoint B
- [x] All 8 languages complete (UI + tool + pages + meta + JSON-LD)
- [x] `npx astro check` passes (0 errors/warnings/hints)
- [x] `npm run build` succeeds (50 pages)
- [x] All 7 locale dictionaries + tool strings PASS `check-lang.mjs` (no Hangul/Kana/simplified-Chinese/Cyrillic/U+FFFD contamination)
- [x] All arrays structurally identical to en.ts (14 keywords, 6 features, 4 hero bullets, 3 steps, 14 FAQ, 6 tricks, 3 bestList, 7 privacy sections, 7 terms sections)
- [x] English parity unchanged (only pre-existing `\u2019` fix diff)
- [x] CJK fonts load only on correct pages (root: none, ja: JP, ko: KR) via conditional `?url` imports

## Phase 3: SEO hardening & verification
- [x] T17: Sitemap hreflang alternates + `scripts/verify-i18n.mjs`
- [x] T18: Browser E2E verification pass

Notes from Phase 3 (bugs fixed):
- `RichText.astro` prefixed `mailto:` hrefs with the locale (`/esmailto:…`) -> now only internal `/…` paths are localized. Verified on `/ja/privacy`: 1 mailto, 0 broken.
- `Layout.astro`: `ogAlternates` now `noindex ? []` so 404/500 are fully English-only.
- Untranslated remnants removed from `locales/ja.ts` (12 lines: copyright, `pBestOutro`, `localP`, `p1`, `p2`, `emailH2`, `beforeP`, `dataP`, 2 privacy lines, etc.) and `locales/ko.ts` (copyright, `파일을 전달하는`, alternateName).
- `astro.config.mjs` serializer normalizes sitemap URLs to canonical form (trailing slash only on home pages) and appends `x-default` -> English. JSDoc param type added for `// @ts-check`.

### Checkpoint Complete
- [x] `npm run verify:i18n` 100% clean (48/48 indexable pages; sitemap 48 urls + x-default, canonical form)
- [x] `npm run build` (50 pages) + `npx astro check` clean after all fixes
- [x] Browser E2E (dev server :4321):
  - `/ko/` and `/ja/` render fully localized; CJK fonts correct, no tofu; copyright + `最初の選択肢が最善です` fix visible.
  - Language switcher opens (previously inverted) and navigates ko -> ja.
  - Tool E2E on `/ja/` and `/`: 5 blob thumbnails (no upload), localized toolbar + live region, delete -> undo (5->4->5), rotate (`aria-label` 0°->90°->…), export = `application/pdf` blob -> download.
  - 404: `lang=en`, `noindex, nofollow`, canonical `/404`, 0 hreflang, 0 og:locale:alternate.
  - `/ja/privacy`: 9 hreflang (incl. `pt-BR` + x-default), `og:locale` ja_JP + 7 alternates, CJK-isolated `@font-face`, 0 broken mailto.
  - `/ja/how-to-organize-pdf-pages`: localized headings, 9 hreflang, no console errors.
  - No console errors/warnings on en / ja / ko or the tool after full interaction.
- [x] Download filename suffix stays ASCII/English (`(rearranged)`), per decision — safest across OSes; `src/components/organize/lib/exportService.ts:12` unchanged.
- [ ] Ready for human review before deploy

## Phase 4: Technical SEO (multi-language ranking)
- [x] `public/robots.txt` (allow all + `Sitemap: …/sitemap-index.xml`) — `_headers` intentionally untouched (Cloudflare rules verified correct)
- [x] `src/i18n/schema.ts`: `inLanguage` on every page schema, `isAccessibleForFree`, `webPageSchemas()` (AboutPage/WebPage + BreadcrumbList), `langOf()` locale -> hreflang code
- [x] `Layout.astro`: indexable pages emit `robots: index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`; noindex pages unchanged
- [x] About/Privacy/Terms templates wire `webPageSchemas` JSON-LD
- [x] `scripts/audit-seo.mjs` + `npm run audit:seo` (canonical, hreflang, og:locale, JSON-LD, title/description length)
- [x] `locales/ja.ts` About description: Chinese `以及` contamination removed
- [x] Verified after changes: `astro check` 0/0/0, build 50 pages, `verify:i18n` 48/48, `audit:seo` 0 errors / 39 advisory warnings
- [x] Decision: the 39 meta title/description length warnings are accepted as-is (length is not a ranking factor; audit passes with advisories only)
- [x] `locales/fr.ts` accented throughout (meta + body); also fixed untranslated leftovers (`Experiment freely` -> `Expérimentez librement`, `Teleporter` -> `Télécharger`, `subpoena` -> `assigner`, `PDF organizers` -> `organisateurs PDF`) and the `connaetre` typo -> `connaître`
- [x] Verified after fr accent pass: `astro check` 0/0/0, build 50 pages, `verify:i18n` 48/48, `audit:seo` 0 errors / 39 accepted warnings; `dist/fr/index.html` has `lang="fr"`, 0 stripped tokens, 0 U+FFFD
