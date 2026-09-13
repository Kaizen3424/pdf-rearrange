# Implementation Plan: Dark Mode (Wise-inspired)

## Overview

Add a first-class dark mode to the Rearrange PDF site (Astro + React islands) that
matches the existing Wise-inspired light design. Colors are already centralized as
Tailwind v4 `@theme` tokens in `src/styles/global.css`, so the core work is a
semantic token override under `[data-theme="dark"]`, a pre-paint theme script, and
an accessible Light/Dark/System toggle. Dark bands (footer, dark cards, scrims)
stay dark via new role tokens. `DESIGN.md` gains a documented dark palette.

## Architecture Decisions

- **Single lever point.** All colors are `@theme` custom properties in
  `global.css`; utilities compile to `var(--color-*)`, so overriding the variables
  under `[data-theme="dark"]` flips the whole site without touching most markup.
- **Switching mechanism: one attribute.** `<html data-theme="light|dark">` is the
  only signal CSS reads. A pre-paint inline script resolves `localStorage` mode
  (`light|dark|system`) + `matchMedia` into the attribute and keeps `color-scheme`
  in sync. No mixed media/class token logic.
- **Role tokens for dark bands.** `ink` was overloaded as text *and* dark fill.
  Add `--color-solid`, `--color-on-solid`, `--color-scrim` (constants, dark in
  both themes) and migrate `bg-ink`→`bg-solid`, band text→`text-on-solid*`,
  scrims→`bg-scrim/xx`. All other neutrals flip via variable override.
- **Keep dark bands dark** in dark mode (user decision).
- **Elevation via surface contrast**, matching DESIGN.md; shadows reinforced with
  hairline borders on opaque dark surfaces.
- **Accent preserved.** Lime `#9fe870` is the single accent in both themes.

## Dark Palette (measured WCAG contrast)

| Role | Token | Light | Dark | Contrast page / surface |
|---|---|---|---|---|
| Page bg | `--color-canvas-soft` | `#e8ebe6` | `#0d120c` | — |
| Card/surface | `--color-canvas` | `#ffffff` | `#1a2018` | — |
| Primary text | `--color-ink` | `#0e0f0c` | `#f2f5ee` | 17.2 / 15.1 |
| Hover text | `--color-ink-deep` | `#163300` | `#c9f7ad` | 14.8 / 13.0 |
| Secondary text | `--color-body` | `#454745` | `#b9c0b2` | 10.1 / 8.9 |
| Muted text | `--color-mute` | `#6d6f6d` | `#949c8c` | 6.7 / 5.9 |
| Soft green surface | `--color-primary-pale` | `#e2f6d5` | `#21331b` | — |
| Positive | `--color-positive` | `#2ead4b` | `#5fd67a` | 10.3 / 9.0 |
| Positive strong | `--color-positive-strong` | `#22833c` | `#8ce89a` | 12.7 / 11.2 |
| Positive deep | `--color-positive-deep` | `#054d28` | `#b7f0c0` | 10.5 on pale |
| Negative | `--color-negative` | `#d03238` | `#ff6b70` | 6.8 / 6.0 |
| Negative deep | `--color-negative-deep` | `#a72027` | `#ff8a8e` | 8.4 / 7.3 |
| Warning deep | `--color-warning-deep` | `#b86700` | `#e0a24a` | 8.4 / 7.4 |
| Warning content | `--color-warning-content` | `#4a3b1c` | `#f2d9a8` | 14.3 / 12.5 |
| Gold (stars) | `--color-gold` | `#f59e0b` | `#fbbf24` | 11.3 / 10.0 |
| Accent | `--color-primary` | `#9fe870` | `#9fe870` | 12.9 / 11.3 |
| Solid band (new) | `--color-solid` | `#0e0f0c` | `#060906` | on-solid 16.6 |
| On-solid (new) | `--color-on-solid` | `#e8ebe6` | `#e8ebe6` | — |
| Scrim (new) | `--color-scrim` | `#0b0d0a` | `#0b0d0a` | always dark |

## Task List

### Phase 0: Foundation
- [ ] Task 1: Dark tokens + mechanism in `global.css`
- [ ] Task 2: Pre-paint theme script + `<meta name="theme-color">` in `Layout.astro`

### Checkpoint: Foundation
- [ ] `npm run build` clean
- [ ] Manually setting `data-theme="dark"` flips the home page

### Phase 1: Toggle
- [ ] Task 3: `sun`/`moon`/`monitor` icons in `Icon.astro`
- [ ] Task 4: `theme.*` i18n strings across 8 locales
- [ ] Task 5: `ThemeToggle.astro` + mount in `Nav`

### Checkpoint: Toggle
- [ ] Toggle works, persists, follows OS in system mode, no FOUC, keyboard accessible

### Phase 2: Core migration
- [ ] Task 6: Solid/on-solid migration on marketing surfaces

### Checkpoint: Core migration
- [ ] All marketing pages correct in both themes; light unchanged

### Phase 3: React PDF tool
- [ ] Task 7: Scrim/solid migration in React tool
- [ ] Task 8: Dark elevation + status tints

### Checkpoint: Tool
- [ ] Full tool flow usable in dark (upload → reorder → preview → password → success)

### Phase 4: Assets, docs, verification
- [ ] Task 9: `DESIGN.md` dark section + drift fixes
- [ ] Task 10: Favicon SVG theme handling
- [ ] Task 11: Verification pass (build/check/i18n/browser)

### Checkpoint: Complete
- [ ] All acceptance criteria met
- [ ] Contrast re-measured; docs updated

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| CSP may not hash the inline pre-paint script | High | Keep tiny + `is:inline`; verify built hash; fall back to bundled module if blocked |
| Missed overloaded `ink`/`canvas` role | Med | Grep sweep (`bg-ink`, `text-canvas`, `bg-ink/`) + visual pass |
| Shadow-only elevation invisible on dark | Med | Add hairline borders to modal/toast/dropdown surfaces |
| i18n type break across 8 locales | Med | Update `en.ts` master then all locales; `astro check` gates |
| Translucent nav over dark content | Low | `bg-canvas/90` + blur; verify over dark sections |

## Open Questions
- None blocking. Assumption: raster social/favicon assets stay light; only the SVG favicon may adapt.
