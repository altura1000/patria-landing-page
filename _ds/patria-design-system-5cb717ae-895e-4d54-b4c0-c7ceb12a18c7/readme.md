# PATRIA — Design System

**PATRIA · Orgullo Argentino** — artisanal Argentine alfajores, handmade in Israel.

PATRIA makes generous, hand-finished alfajores in the Argentine tradition: thick shells, a heavy layer of dulce de leche, a full chocolate or white-chocolate coating, wrapped in waxed paper and sealed with a round PATRIA sticker. The brand exists to bring a piece of Argentina to Israel — nostalgia you can eat — for both Spanish- and Hebrew-speaking customers. Instagram is the primary discovery channel, so **mobile is the design default, not the adaptation**.

## Product line (as documented by the supplied photography)

| Flavour | What's inside | Coating |
| --- | --- | --- |
| **El Clásico de Siempre** | dulce de leche, classic chocolate shell | dark chocolate |
| **Bon Bon** | thick dulce de leche between pale shortbread shells | milk chocolate |
| **Dulce de Leche & Halva** | dulce de leche + halva threads, sesame crumb | white chocolate |
| **Dulce de Leche & Frutos Rojos** | dulce de leche + red-berry compote, cocoa shells | milk chocolate |
| **Malbec** | dark chocolate cake shells + glossy Malbec wine reduction | dark chocolate |
| **AlfaDubai** | pistachio-kadaif style green filling | dark chocolate |
| **BlaNut** | walnut + cream filling, walnut pieces through the coating | white chocolate |
| **Proteína** | protein shells, dulce filling, cocoa nibs | dark chocolate |

## Sources given

- 8 product / campaign photographs and 2 logo files, supplied as image uploads (originals kept in `uploads/`, curated copies in `assets/`).
- No codebase, Figma file, website, or brand book was supplied. **Everything in this system is derived from the photography and the written brief** — no live product UI existed to recreate, so the UI kits are the brand's first canonical surfaces rather than recreations. Treat them as proposals to approve, not as documentation of something shipped.
- The campaign images carry several different display fonts (retro script, brush, marker, rounded slab). Per the brief these are **campaign graphics, not the type system**, and were deliberately not adopted.

---

## CONTENT FUNDAMENTALS

**Voice.** Warm, direct, first-person-plural and proud. PATRIA speaks as a family kitchen that happens to be very good at what it does: *"Los hacemos a mano, uno por uno."* Never corporate, never salesy, never cute.

**Person.** "Nosotros" for the making ("amasamos", "lo hacemos"), "vos" — Argentine *voseo*, never "tú" — for the reader ("probalo", "elegí tu favorito", "llevate media docena"). Hebrew copy uses second person singular, informal.

**Casing.** Sentence case for everything readable. UPPERCASE with wide tracking is reserved for the eyebrow/label register inherited from the seal — `ORGULLO ARGENTINO`, `HECHO A MANO`, `ENVÍOS`. Never all-caps a sentence or a headline.

**Length.** Headlines 2–6 words. Product descriptions 12–25 words, sensory and concrete: *"Dulce de leche espeso entre dos tapas de chocolate negro, cubierto entero."* Never marketing abstractions ("an unforgettable experience"), never nutritional-panel dryness.

**Naming.** Flavour names stay in their original language and are never translated: *Bon Bon, Malbec, Frutos Rojos, AlfaDubai, BlaNut, Proteína*. The classic is always **El Clásico de Siempre**.

**Bilingual rule.** Spanish and Hebrew never mix inside one content state. The site is either `dir="ltr"` Spanish or `dir="rtl"` Hebrew; a language switch swaps the whole surface. Product names and the word PATRIA are the only Latin strings allowed to stay inside Hebrew copy.

**Emoji.** Not in product copy, navigation, buttons, or headings. Tolerated only inside reposted Instagram caption quotes, verbatim.

**Numbers.** Prices as `₪38` / `$4.800` with no decimals when whole. Quantities written out for small counts ("media docena", "seis unidades").

**Sample copy**

- Hero: *Alfajores argentinos, hechos a mano en Israel.*
- Sub: *Tapas gruesas, dulce de leche de verdad y una cobertura que cruje. Como los de allá.*
- Button: *Ver los sabores* / *Pedir ahora* / *Elegir caja*
- Eyebrow: *ORGULLO ARGENTINO*
- Empty cart: *Todavía no elegiste nada. Empezá por el clásico.*
- Hebrew hero: *אלפחורס ארגנטינאי, בעבודת יד, בישראל.*

---

## VISUAL FOUNDATIONS

**The one-line rule:** cream paper, chocolate ink, food at full bleed. Everything else is restraint.

**Colour.** Backgrounds are warm cream (`--cream-100` #F7F1E6, alternate `--cream-200`). Ink is chocolate brown (`--choc-700`/`--choc-900`), never pure black. The dark mode of the brand is a chocolate ground (`--choc-800`) with cream text — used for one or two full-width moments per page, never more. Accents are used sparingly and always for meaning: **Argentine blue** (`--celeste-700`, from the logo lettering) for links, language switching and anything that says "Argentina"; **gold** (`--gold-500`, the seal's rule) for hairline dividers, the seal ring and small ornaments only — never for large fills; **dulce caramel** (`--dulce-500`) for eyebrows, prices, and the "new" marker. Flavour accents (`--berry`, `--pistachio`, `--walnut`, `--halva`) are pulled directly out of the photographs and used only as small flavour dots/tags. Maximum two background colours per page: cream and chocolate.

**Typography.** Display: **Bodoni Moda** — high-contrast didone, the closest available relative of the engraved logo lettering; used at large sizes, weight 500–700, tracking −0.015em, line-height 1.04. Body: **Assistant** — a warm humanist sans that covers Latin *and* Hebrew, so one family serves both languages at 400/600/700, line-height 1.62. Hebrew display falls back to **Frank Ruhl Libre**. The third register is the label: Assistant 600 uppercase at 12–13px with 0.22em tracking — this is the logo's `ORGULLO ARGENTINO` voice and it appears as eyebrows, badges and nav. Three registers total; never introduce a fourth. Measure caps at 64ch (46ch for lede paragraphs).

**Spacing & layout.** 4px base scale, 8px rhythm; section padding 56px mobile / 96px desktop; container 1200px with 20/48px gutters. Layouts are simple stacked bands, one idea per band. Grids are 1-column mobile, 2–3-column desktop, with generous gaps (24–32px) rather than generous emptiness — the brand is *generous*, so the page is comfortably full, not airy. Sticky header only; nothing else is fixed. No sidebars on marketing surfaces.

**Backgrounds.** Photography does the work: full-bleed hero images, edge-to-edge product photos, image-left/text-right bands. Flat cream fills everywhere else. A very subtle warm paper texture is permitted at ≤4% opacity; there are **no gradients as decoration** — the only gradients in the system are the dark scrims that protect text over food (`--scrim-bottom`). No patterns, no illustrated backgrounds, no blobs.

**Imagery.** Warm-toned, low-key, natural light, shot on the actual product: wooden boards, dark wood or stone tables, the waxed-paper wrapper with the round seal visible. The hero frame is always a **cut-open alfajor** — the dulce de leche, berry, pistachio or walnut layer must be visible. Slight grain and real crumbs are features, not defects. Never stock photography, never rendered/AI food, never white-cyclorama packshots, never cool or clinical grading. Crop tight; let the product exceed the frame.

**Corners & borders.** Radii are small: 4px on buttons and inputs, 8px on tiles, 14px on the largest image cards, `50%` only for the seal and avatars. Borders are 1px hairlines in `rgba(74,42,23,.16)`; the emphasis border is a 1px gold rule used as a horizontal divider, often with a centred sun/ornament. No thick outlines, no coloured left-border accent bars.

**Cards.** A PATRIA card is a photo with type under it, on cream, with a hairline and at most `--shadow-sm`. It is not a floating white SaaS panel: no heavy elevation, no rounded 24px pills, no glassmorphism, no blur backdrops. Transparency is used in exactly two places — text scrims over photography, and the 16% hairline borders.

**Shadows.** Warm-brown tinted and low: `--shadow-sm` for resting cards, `--shadow-md` on hover, `--shadow-lg` for the one dialog/drawer layer, `--shadow-seal` for the sticker. Never grey, never large-radius glow.

**Motion.** Quiet and edible. 120ms for state changes, 220ms for hovers and menus, 420ms for drawers, 700ms for a scroll reveal. Easing `cubic-bezier(.22,.61,.36,1)`. Reveals are a short fade + 12px rise. Images scale 1.03 on hover over 420ms. No bounce, no spring, no parallax, no autoplaying carousels.

**Hover states.** Buttons darken (chocolate → `--choc-900`), never lighten and never change hue. Text links go blue → chocolate with the underline strengthening. Cards lift `-2px` and go `--shadow-sm` → `--shadow-md` while the photo inside scales 1.03. Ghost/outline elements fill with `rgba(74,42,23,.06)`.

**Press states.** `scale(.985)` plus the darker hover colour, 120ms. No ripple.

**Focus.** 2px `--celeste-600` ring, 2px offset — the blue is doing brand work here, so never suppress it.

**Disabled.** 45% opacity, no pointer events, colour unchanged.

**RTL.** Every layout must mirror: logical properties (`margin-inline`, `padding-inline`, `inset-inline`) throughout, `dir="rtl"` on `<html>`, arrow icons flipped, seal and ornaments centred so they need no mirroring.

---

## ICONOGRAPHY

The supplied materials contain **no icon set** — the only vector-like artwork is the logo emblem (sun, alfajor, Argentine ribbon, wheat ears, gold ring). So:

- **Line icons: Lucide, loaded from CDN** (`https://unpkg.com/lucide-static`), 1.5px stroke, 20/24px, `currentColor`. This is a flagged substitution chosen to match the brand's hairline weight — it is not PATRIA's own set. Swap it the moment a real set exists.
- **Icons are functional only**: cart, search, menu, close, chevron, WhatsApp/Instagram links, location, clock. No decorative icon rows, no icon-per-feature grids, no icons inside headings.
- **The brand's real "icons" are the seal and the gold rule.** The round PATRIA sticker (`assets/logo-emblem-color.jpg`, `assets/logo-seal-cream.jpg`) is the badge/stamp element; the gold hairline with a small centred ornament is the section divider. Use these rather than inventing symbols.
- **Emoji are never used as icons.** Unicode is used for exactly two marks: the middot `·` in `PATRIA · Orgullo Argentino`, and the em dash in copy.
- **Flavour "icons" are colour dots**, filled with the flavour accent tokens — not illustrations, not photos of ingredients.
- Never redraw the emblem. The two supplied raster logos are the only brand marks; a vector version should be requested from the brand.

---

## Index

- `styles.css` — the single entry point consumers link. `@import` list only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`, `fonts.css`, `base.css`.
- `assets/` — `logo-emblem-color.jpg`, `logo-seal-cream.jpg`, `photos/` (bon-bon, clasico, malbec, alfadubai, blanut, halva, frutos-rojos, proteina).
- `guidelines/` — foundation specimen cards (colour, type, spacing, motion, photography, brand).
- `components/core/` — Button, Badge, Tag, FlavourDot, Rule, Seal, Eyebrow.
- `components/product/` — ProductCard, FlavourStrip, PriceTag, QuantityStepper.
- `components/layout/` — SiteHeader, SiteFooter, SectionHeading, PhotoBand.
- `components/forms/` — Input, Select, Checkbox, RadioGroup, LangSwitch.
- `components/feedback/` — Dialog, Toast, EmptyState.
- `ui_kits/website/` — the Spanish marketing site (home, flavours, product, cart).
- `ui_kits/mobile/` — the mobile / Instagram-landing surface, including the Hebrew RTL state.
- `SKILL.md` — makes this folder usable as a Claude Code skill.

### Intentional additions

- **FlavourDot, Seal, Rule, Eyebrow** — no component source existed; these encode the brand's three real ornaments so designers stop hand-rolling them.
- **LangSwitch** — required by the ES/HE split, which the brief mandates.

### Substitutions to confirm

- **Bodoni Moda / Assistant / Frank Ruhl Libre** stand in for the unknown real brand fonts. If PATRIA owns licensed files, send them and the `@font-face` layer swaps in one file.
- **Lucide** stands in for an icon set PATRIA does not yet have.
- **Logos are JPEG rasters with baked-in backgrounds**; an SVG or transparent PNG is needed for dark-ground use.
