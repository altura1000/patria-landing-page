# PATRIA — landing page (Vite + React + TypeScript + React Router)

Migrated from the approved HTML designs. The visual design is unchanged.

## Run

```
npm install
npm run dev         # http://127.0.0.1:5173
npm run typecheck
npm run build       # output in dist/
npm run preview
```

## Routes

| Path       | Page                                   | Source of truth                  |
| ---------- | -------------------------------------- | -------------------------------- |
| `/`        | Homepage                               | `PATRIA Home Mobile.html`        |
| `/sabores` | All eight flavours                     | `PATRIA Sabores Mobile.html`     |

Unknown paths redirect to `/`. When deploying, the host needs an SPA fallback (serve `index.html` for every path) so `/sabores` works on refresh.

## Things you will want to edit

- **WhatsApp number & messages:** `src/config/whatsapp.ts` (`WHATSAPP_PHONE`, digits only, e.g. `972501234567`).
- **Price placeholder / Instagram URL:** `src/config/site.ts`.
- **Flavours (names, copy, photos, colour dots):** `src/data/flavours.ts`.
- **Images:** `src/assets/images/` (imported via `index.ts`; a missing file fails the build).
- **Fonts:** self-hosted in `src/assets/fonts/`, declared in `src/styles/tokens/fonts.css`.

## Responsive layout

Breakpoints (plain CSS media queries, no JS viewport detection): **mobile < 640px · tablet 640–1023px · desktop ≥ 1024px**.

- The un-queried rules in `src/styles/home.css` and `src/styles/sabores.css` are the approved mobile design, unchanged. Tablet and desktop rules are layered on top inside `@media (min-width: …)`.
- `src/styles/global.css` defines the shared tokens: `--gutter` (22px → 40px → 64px), `--content-max` (1240px) and `--pad` (side padding that keeps content aligned to the centered column on wide screens).
- The hero is a full-bleed photo on mobile/tablet and a photo + chocolate-panel split on desktop (same photograph). The solid-header and floating-button scroll thresholds follow the hero height (`src/hooks/useHeroHeight.ts`).
- To change how a section behaves at a breakpoint, edit its class in the matching stylesheet. Layout properties are no longer inline in the components (inline styles can't be overridden by media queries).

## Language control

The ES / עב switch swaps the whole site between Spanish (`<html lang="es" dir="ltr">`, the default and the approved design) and Hebrew (`<html lang="he" dir="rtl">`).

- **State:** `src/i18n/LanguageContext.tsx` (`useLanguage()`, `useCopy()`). It also sets `<html lang dir>` on every change. The choice is not persisted: a reload starts in Spanish.
- **Copy:** every user-facing string lives in `src/i18n/translations.ts` (`es` and `he`, both typed as `Copy`, so a missing key fails `npm run typecheck`). Hebrew lines that a native speaker should still check are tagged `// REVIEW`. Hebrew flavour names/descriptions come from the design-system kit.
- **Layout:** the CSS is written with logical properties, so `dir="rtl"` mirrors most layouts by itself. `src/styles/rtl.css` (scoped to `[dir="rtl"]`, so it never touches Spanish) holds only the Hebrew extras: fonts, tracking/italics, +1px optical size for tiny labels, and the few physical left/right values. Photos are repositioned, never flipped.
- **Fonts:** Hebrew display = Frank Ruhl Libre (`--font-display-he`), Hebrew body/UI = Assistant (`--font-body-he` / `--font-label`). In RTL, `--font-display` and `--font-statement` are remapped to Frank Ruhl Libre; the Latin PATRIA wordmark stays in Bodoni Moda.
- **WhatsApp:** links and their pre-filled messages are identical in both languages (`src/config/whatsapp.ts` is unchanged).

## Original references (kept, not part of the build)

`PATRIA Home Mobile*.html`, `PATRIA Sabores Mobile*.html`, `_ds/`, `assets/`, `screenshots/`.
While `npm run dev` is running they can be opened next to the React version, e.g. `http://127.0.0.1:5173/PATRIA%20Home%20Mobile.html`.
