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

ES/HE is visual only, as in the approved design. No Hebrew copy exists yet, and choosing HE does not change content or direction. State lives in `src/i18n/LanguageContext.tsx`.

## Original references (kept, not part of the build)

`PATRIA Home Mobile*.html`, `PATRIA Sabores Mobile*.html`, `_ds/`, `assets/`, `screenshots/`.
While `npm run dev` is running they can be opened next to the React version, e.g. `http://127.0.0.1:5173/PATRIA%20Home%20Mobile.html`.
