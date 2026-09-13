# Dark Mode — Task Checklist

- [x] Task 1: Dark tokens + mechanism in `src/styles/global.css`
- [x] Task 2: Pre-paint theme script + meta theme-color in `src/layouts/Layout.astro`
- [x] Checkpoint A: build clean; `data-theme="dark"` flips home
- [x] Task 3: Theme icons (`sun`, `moon`, `monitor`) in `Icon.astro`
- [x] Task 4: `theme.*` i18n strings in `src/i18n/locales/*.ts` (8 locales)
- [x] Task 5: `ThemeToggle.astro` + mount in `Nav.astro`
- [x] Checkpoint B: toggle, persistence, OS follow, no FOUC
- [x] Task 6: Solid/on-solid migration on marketing surfaces
- [x] Checkpoint C: marketing pages both themes
- [x] Task 7: Scrim/solid migration in React PDF tool
- [x] Task 8: Dark elevation + status tints
- [x] Checkpoint D: full tool flow in dark
- [x] Task 9: `DESIGN.md` dark section + drift fixes
- [x] Task 10: Favicon SVG theme handling
- [x] Task 11: Verification pass (build / check / verify:i18n / audit:seo / browser)

## Verification results

- `npx astro check` — 0 errors, 0 warnings (82 files)
- `npm run build` — passed, 50 pages
- `npm run verify:i18n` — passed, 48/48 indexable pages
- `npm run audit:seo` — passed with 39 pre-existing title/description length warnings
- Browser — light + dark on `/`; light mode byte-identical to pre-change values
- Browser — `/ja/` dark: `color-scheme: dark`, meta `#0d120c`, page `#0d120c`, footer `#060906`, toggle labelled カラーテーマ
- Browser — responsive 320 / 768 / 1024 / 1440: no horizontal overflow
- Browser — React editor dark: 4-page doc, selection, BatchBar `#060906`/`#e8ebe6`, PreviewModal `bg-scrim/85` with `on-solid` controls
- Browser — React editor light: white cards / ink text, dark BatchBar preserved (solid)
- Browser — mobile menu theme row works at 320 (switching applies + persists)

## Fix: 320 px nav overflow

Adding the nav `ThemeToggle` pushed the mobile hamburger off-screen at 320 px (39 px overflow). Fixed in `src/components/site/Nav.astro`:

- Top-bar toggle wrapped in `hidden md:flex` (visible ≥ 768 px).
- Second `ThemeToggle` instance added as a row inside `#mobile-menu` (`md:hidden`).
- Both instances stay in sync — `ThemeToggle.astro`'s `apply()` updates every `[data-theme-icon]` / `[data-theme-option]` in the document.

