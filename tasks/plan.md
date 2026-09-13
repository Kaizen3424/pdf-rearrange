# Implementation Plan: Multi-language i18n + hreflang for rearrangepdf.com

## Overview
Add 7 locales (es, ja, fr, de, pt-br, ko, it) alongside English at `/`, using Astro's built-in i18n routing config + the dictionary pattern from the official i18n recipe. Every page emits a full hreflang cluster (8 locales + x-default), localized SEO meta, JSON-LD, and a language switcher — so the site can rank for non-English keywords.

## Approved Decisions
- **Locales:** en (default), es, ja, fr, de, pt-br, ko, it. Spanish listed once (Español = Spanish).
- **Portuguese variant:** pt-BR (folder `pt-br/`, hreflang `pt-BR`).
- **URL structure:** English stays at `/` (no prefix, `prefixDefaultLocale: false`) — zero risk to existing rankings.
- **Slugs:** kept in English (`/es/how-to-organize-pdf-pages/`). Localized slugs can be layered on later.
- **Translations:** AI-drafted for all locales, including legal pages.

## Architecture Decisions
1. **Astro i18n config** in `astro.config.mjs`: `locales: ['en','es','ja','fr','de','pt-br','ko','it']`, `defaultLocale: 'en'`, `routing: { prefixDefaultLocale: false }`.
2. **Dictionaries, not duplicated pages**: `src/i18n/locales/*.ts` — one structured file per locale (~500 segments). `en.ts` defines the shape via `export type Dictionary = typeof en`; every other locale is typed `Dictionary`, so **missing keys fail `astro check`**.
3. **Shared page templates**: root pages become thin wrappers around `src/page-templates/*.astro`; `src/pages/[lang]/*.astro` dynamic routes (`getStaticPaths` × 7 locales) render the same templates. Page logic exists exactly once.
4. **React tool i18n**: `OrganizeTool` accepts a `locale` prop; ~140 client strings move to `dict.tool` (functions for plurals/placeholders); `formatBytes` → `Intl.NumberFormat`.
5. **404/500 stay English root-only** (Cloudflare Pages serves a single `404.html`); both remain `noindex`.

### Locale matrix
| Locale | URL prefix | hreflang | og:locale | html lang | Font |
|---|---|---|---|---|---|
| English | `/` (none) | `en` | `en_US` | `en` | Inter |
| Español | `/es/` | `es` | `es_ES` | `es` | Inter |
| 日本語 | `/ja/` | `ja` | `ja_JP` | `ja` | + Noto Sans JP |
| Français | `/fr/` | `fr` | `fr_FR` | `fr` | Inter |
| Deutsch | `/de/` | `de` | `de_DE` | `de` | Inter |
| Português (BR) | `/pt-br/` | `pt-BR` | `pt_BR` | `pt-BR` | Inter |
| 한국어 | `/ko/` | `ko` | `ko_KR` | `ko` | + Noto Sans KR |
| Italiano | `/it/` | `it` | `it_IT` | `it` | Inter |

Head additions on every page: self-canonical, `<link rel="alternate" hreflang="…">` × 8 + `x-default` → English, `og:locale` + `og:locale:alternate` × 7.

## File Structure (target)
```
src/i18n/
  ui.ts          — locale registry (code, native label, hreflang, og:locale, htmlLang)
  utils.ts       — getLangFromUrl, localePath, getAlternateUrls, getDictionary
  schema.ts      — JSON-LD builders taking a dictionary
  locales/       — en.ts (master), es.ts, ja.ts, fr.ts, de.ts, pt-br.ts, ko.ts, it.ts, index.ts
src/page-templates/  — Home, HowTo, About, Contact, Privacy, Terms (.astro)
src/pages/           — root wrappers (en) + [lang]/ dynamic routes (7 locales)
```

## Task List

### Phase 1: Foundation (English parity, no new content)
- [x] T1 — i18n config + scaffolding + Layout head (hreflang cluster, og:locale, html lang, CJK font stacks)
- [x] T2 — English master dictionary (absorbs src/data/faqs.ts)
- [x] T3 — Refactor chrome components (Nav, Footer, Hero, CtaSection, ErrorPage/404/500)
- [x] T4 — Refactor content sections (HowItWorks, Features, PrivacySection, Faq, SeoContent)
- [x] T5 — Home + HowTo templates & [lang] routes; localized meta/keywords/JSON-LD from dict
- [x] T6 — About/Contact/Privacy/Terms templates & [lang] routes
- [x] T7 — React tool i18n part 1 (OrganizeTool, DropZone, Toolbar, types/formatBytes)
- [x] T8 — React tool i18n part 2 (PageGrid, PageCard, PreviewModal, PasswordModal, SuccessPanel, BatchBar, StarRating, Toasts)
- [x] T9 — Language switcher (Nav dropdown + Footer links)

**Checkpoint A:** `npx astro check` + `npm run build` green; English HTML output identical to pre-refactor; `/es/`…`/it/` return 200 with English fallback strings.

### Phase 2: Translations (parallelizable, one per locale)
- [x] T10 es · [x] T11 ja (+Noto Sans JP) · [x] T12 ko (+Noto Sans KR) · [x] T13 fr · [x] T14 de · [x] T15 it · [x] T16 pt-br
- AC per task: `astro check` passes (typed = no missing keys); pages fully translated incl. meta, keywords & JSON-LD; hreflang/og:locale correct.

**Checkpoint B:** all 8 languages live and complete.

### Phase 3: SEO hardening & verification
- [x] T17 — Sitemap `serialize` → `xhtml:link` hreflang alternates; `scripts/verify-i18n.mjs` crawling `dist/` (all locale URLs 200, reciprocal & complete hreflang clusters, html lang/og:locale/canonical match)
- [x] T18 — Browser E2E pass (language switching across pages, tool interactions in 3+ locales, ja/ko font rendering)

**Checkpoint Complete:** verification script 100% clean → ready for review before deploy.

## Verification Commands
- Type check: `npx astro check`
- Build: `npm run build`
- i18n verification: `node scripts/verify-i18n.mjs`
- Dev server: `astro dev --background` (see AGENTS.md)

## Risks & Mitigations
| Risk | Impact | Mitigation |
|---|---|---|
| Translation quality (AI-drafted) | Med | Typed dicts + native-speaker review later; strings are simple UI/SEO copy |
| CJK font payload | Med | Fontsource unicode-range subsets → only ja/ko pages download slices |
| Tool bundle +7 locale dicts | Low | ~15KB gz total, cached across site |
| Trailing-slash/canonical mismatches in hreflang | Med | T17 script verifies built URLs match emitted hreflang exactly |

## Out of Scope
Translated URL slugs, localized og-images, localized 404 pages, robots.txt changes (already points to sitemap).
