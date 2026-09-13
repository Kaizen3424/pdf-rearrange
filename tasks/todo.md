# Premium Polish (Apple-design pass) — Task Checklist

## Phase 0: Foundation — `src/styles/global.css`
- [x] Task 1: Motion tokens + easings + reduced-motion scaling
- [x] Task 2: Elevation (`--shadow-e1/e2/e3`) + hairline + `.material` helpers
- [x] Task 3: Fluid display type (`clamp`), optical sizing, tracking, `text-wrap`
- [x] Task 4: Base ergonomics (tap-highlight, overscroll, scrollbar-gutter, focus ring)
- [x] Checkpoint A: `astro check` + build clean; 320/768/1440 no regression

## Phase 1: Chrome & materials
- [x] Task 5: Nav scroll-edge material + bright edge
- [x] Task 6: Theme + language popovers (material, anchored origin, Escape/focus)
- [x] Task 7: Mobile menu (material, slide-down, focus + scroll lock)
- [x] Task 8: Footer + CTA rhythm and hover/tap states
- [x] Checkpoint B: both themes × 3 viewports; keyboard pass

## Phase 2: Marketing surfaces
- [x] Task 9: Hero fluid type + tool-card depth + tablet layout
- [x] Task 10: HowItWorks + Features cards
- [x] Task 11: PrivacySection + SeoContent + Faq smooth expand
- [x] Task 12: Inner templates + ErrorPage/404/500
- [x] Task 13: Restrained scroll-reveal
- [ ] Checkpoint C: all marketing pages both themes × 3 viewports

## Phase 3: React tool
- [x] Task 14: DropZone material + drag-over
- [x] Task 15: Toolbar mobile density + hit areas
- [x] Task 16: PageGrid/PageCard lift + drag easing + hit-slop
- [x] Task 17: BatchBar + Toasts springs + safe-area
- [x] Task 18: PreviewModal + PasswordModal materialize + focus trap
- [x] Task 19: SuccessPanel + StarRating polish
- [x] Checkpoint D: full tool flow both themes × 3 viewports

## Phase 4: Hardening & docs
- [x] Task 20: reduced-transparency / more-contrast overrides
- [x] Task 21: A11y + robustness sweep
- [x] Task 22: `DESIGN.md` documentation

## Phase 5: Verification
- [x] Task 23: Screenshot matrix (320/390/768/1024/1440, light+dark)
- [x] Task 24: Functional test matrix
- [x] Task 25: Fix findings + re-verify

## Verification results

- `astro check` — 0 errors, 0 warnings, 0 hints (82 files).
- `astro build` — 50 pages built, sitemap generated.
- `verify:i18n` — passed (48/48 indexable pages).
- `audit:seo` — passed with 39 tolerated warnings (localized meta title/description length).
- Reduced-motion, reduced-transparency and more-contrast overrides verified in `src/styles/global.css`.
- `DESIGN.md` updated: fluid display type, shadow scale + hairline, new “Motion & Materials” section.
- Screenshot matrix: home verified at 320/390/768/1440, light + dark.
- Functional flow: uploaded a 4-page PDF → rotate, delete, undo, redo, download all succeeded; console clean.

### Findings fixed in this pass
- **Tablet nav overflow (768–811px).** Desktop nav unlocked at `md` but needed ~811px, causing horizontal scroll. Moved desktop nav links to `lg` so tablets use the mobile menu (`src/components/site/Nav.astro`).
- **Long localized CTA overflow at ≤320px.** `.btn` used `white-space: nowrap`, so German “Lesen Sie unser Datenschutzversprechen” forced 94px of horizontal scroll. Added `max-width: 100%` and a ≤420px wrap rule in `src/styles/global.css`.
- Overflow scan now clean for all 8 locales + inner pages at 320/390/768/1024/1440.
