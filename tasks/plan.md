# Implementation Plan: Premium Polish (Apple-design pass)

## Overview

Give the Rearrange PDF site (Astro 7 + React 19 islands, Tailwind v4 tokens) a
premium, Apple-grade polish across desktop, tablet and mobile, **without changing
the Wise-inspired brand** (lime accent, sage canvas, 24px radius, ink text).
Craft is layered through one token layer in `src/styles/global.css` plus
targeted component work: fluid optical typography, translucent materials,
anchored motion, spring entrances, smoother drag, stronger accessibility and
robustness. Motion is **dependency-free** (CSS transitions with Apple-tuned
easings, `@starting-style`, Web Animations, IntersectionObserver) so the CSP and
dependency graph stay untouched. Restrained scroll-reveals are
`prefers-reduced-motion` safe. Verified in-browser with screenshots at five
viewports in both themes and a full functional test matrix.

## Architecture Decisions

- **Preserve the brand.** No second accent, no radius/colour changes. Polish is
  typography, spacing rhythm, depth, material and motion.
- **Dependency-free motion.** Reuse the existing `is:inline` script pattern; no
  new packages, no CSP changes. Default motion is critically damped; overshoot
  is reserved for momentum/drag.
- **Single token layer.** New motion, elevation, hairline and material tokens
  live in `@theme`; anything that flips theme is overridden once under
  `[data-theme="dark"]`. Components never hard-code values.
- **Progressive enhancement.** Scroll-edge, reveals, theme cross-fade and
  material surfaces degrade under `prefers-reduced-motion`,
  `prefers-reduced-transparency` and `prefers-contrast`.
- **Fluid type via existing token names.** `--text-display-*` become `clamp()`
  with size-specific leading + negative tracking, so no markup rename cascade.

## Task List

### Phase 0: Foundation (`src/styles/global.css`)
- [x] Task 1: Motion tokens + easings + reduced-motion scaling
- [x] Task 2: Elevation (`--shadow-e1/e2/e3`) + hairline + `.material` helpers
- [x] Task 3: Fluid display type (`clamp`), optical sizing, tracking, `text-wrap`
- [x] Task 4: Base ergonomics (tap-highlight, overscroll, scrollbar-gutter, focus ring)

### Checkpoint: Foundation
- [x] `npx astro check` + `npm run build` clean
- [x] No layout regressions at 320 / 768 / 1440 (light + dark)

### Phase 1: Chrome & materials
- [x] Task 5: Nav scroll-edge material (`data-scrolled`) + bright edge
- [x] Task 6: Theme + language popovers (material, anchored origin, Escape/focus)
- [x] Task 7: Mobile menu (material, slide-down, focus + scroll lock)
- [x] Task 8: Footer + CTA rhythm and hover/tap states

### Checkpoint: Chrome
- [x] Both themes, 320/768/1440; keyboard-only nav/popover/menu pass

### Phase 2: Marketing surfaces
- [x] Task 9: Hero (fluid type, tool-card depth, tablet layout, chip/bullets)
- [x] Task 10: HowItWorks + Features (card elevation, hover, rhythm)
- [x] Task 11: PrivacySection + SeoContent + Faq (dark band, smooth `<details>`)
- [x] Task 12: Inner templates + ErrorPage/404/500 consistency
- [x] Task 13: Restrained scroll-reveal (reduced-motion-safe)

### Checkpoint: Marketing
- [x] All marketing pages both themes × 3 viewports, no overflow, reveals tasteful

### Phase 3: React tool
- [x] Task 14: DropZone (material, drag-over, press feedback)
- [x] Task 15: Toolbar (mobile density, ≥44px hit areas, segmented control)
- [x] Task 16: PageGrid/PageCard (lift, drag easing, selection animation, hit-slop)
- [x] Task 17: BatchBar + Toasts (spring entrances, safe-area, no overlap)
- [x] Task 18: PreviewModal + PasswordModal (materialize, focus trap, `dvh`)
- [x] Task 19: SuccessPanel + StarRating polish

### Checkpoint: Tool
- [x] Full flow (upload → reorder → rotate/dup/delete → undo/redo → preview →
      password → success) both themes × 3 viewports

### Phase 4: Hardening & docs
- [x] Task 20: `prefers-reduced-transparency` / `prefers-contrast: more`
- [x] Task 21: A11y + robustness sweep (focus, aria, targets, overflow, states)
- [x] Task 22: `DESIGN.md` motion/material/type documentation

### Checkpoint: Complete
- [x] Gates pass; contrast re-measured; docs updated

### Phase 5: Browser verification
- [x] Task 23: Screenshot matrix (320/390/768/1024/1440, Home + inner + tool, light+dark)
- [x] Task 24: Functional test matrix (multi-file, drag/kbd reorder, rotate/dup/delete,
      undo/redo, zoom, preview, password, non-PDF, export→success, toggles, menu, paste/drop)
- [x] Task 25: Fix findings, re-verify, report

### Findings from verification
- Fixed tablet nav overflow (desktop nav moved `md` → `lg`) in `src/components/site/Nav.astro`.
- Fixed long localized CTA overflow at ≤320px (`max-width: 100%` + ≤420px wrap) in `src/styles/global.css`.
- Overflow scan clean across 8 locales + inner pages at 320/390/768/1024/1440.
- Tool flow (4-page PDF: rotate, delete, undo, redo, download) verified; console clean.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Fluid type changes page height / overflow | Med | Test 320/768/1440 after each task; clamp bounds conservative |
| CSP blocks new inline scripts | Med | Reuse existing `is:inline` pattern; verify built hashes |
| Motion overdone → cheap feel | Med | Critically damped default; overshoot only for momentum |
| `@starting-style` / backdrop-filter support | Low | Progressive enhancement; reduced-transparency fallback |
| Many touched components regress a11y | Med | `astro check` + keyboard pass at each checkpoint |
| Dark surfaces lose separation | Med | Hairline borders + layered shadows re-tuned for dark |

## Gates

- `npx astro check`
- `npm run build`
- `npm run verify:i18n`
- `npm run audit:seo` (pre-existing title/description warnings tolerated)
- Browser matrix (Phase 5)

## Open Questions

- None blocking. Brand identity and dependency-free motion confirmed by the user.
