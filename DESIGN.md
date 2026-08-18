# Iratxe — Design Specification

> Figma source: https://www.figma.com/design/r1AIN9YqW8VmssVzXQcHh8/Iratxe?node-id=0-1
>
> A Basque tavern menu app for a bar in the Canary Islands. Mobile-first (390px viewport).

---

## Fonts

### Fraunces (Display / Headings)

- **Source**: [Google Fonts — Fraunces](https://fonts.google.com/specimen/Fraunces)
- **Variable axes**: `SOFT` (0), `WONK` (1)
- **Weights used**:
  - **Bold (700)** — section titles, item names, page headings
  - **Bold Italic (700 italic)** — brand wordmark "Iratxe", sub-page titles in header

| Usage | Weight | Style | Size | Line Height |
|---|---|---|---|---|
| Hero brand name | Bold Italic | italic | 64px | 60px |
| Page title (e.g. "Nuestros Grifos y Botellas") | Bold | normal | 28px | normal |
| Section heading (e.g. "Drinks / Bebidas") | Bold | normal | 22px | normal |
| Header page title (e.g. "Cervezas") | Bold Italic | italic | 22px | normal |
| Card title on image (e.g. "Cervezas (Beers)") | Bold | normal | 22px | normal |
| Welcome subtitle (e.g. "Taberna Euskalduna...") | Bold | normal | 24px | normal |
| Search results heading | Bold | normal | 20px | normal |
| Menu item name (e.g. "Tropical") | Bold | normal | 18px | normal |
| Daily recommendation title | Bold | normal | 16px | normal |

### DM Sans (Body / UI)

- **Source**: [Google Fonts — DM Sans](https://fonts.google.com/specimen/DM+Sans)
- **Variable axes**: `opsz` (14)
- **Weights used**:
  - **Regular (400)** — body text, descriptions, search input
  - **Medium (500)** — hero tagline
  - **SemiBold (600)** — status bar time, size labels (Caña, Jarra, etc.), active chip text
  - **Bold (700)** — prices (size label), badges, heritage text, CTA button, section labels

| Usage | Weight | Size | Line Height | Transform |
|---|---|---|---|---|
| Hero tagline | Medium | 20px | normal | — |
| Body / description | Regular | 15px | 1.5 | — |
| Menu item description | Regular | 14px | 1.4 | — |
| Search input text | Regular | 15px | normal | — |
| Recent search text | Regular | 14px | normal | — |
| CTA button text | Bold | 16px | normal | — |
| Price amount (e.g. "€2.50") | Bold | 16px | normal | — |
| Status bar time | SemiBold | 14px | normal | — |
| Section label (e.g. "Quick categories") | Bold | 13px | normal | UPPERCASE |
| Category chip text (active) | SemiBold | 13px | normal | — |
| Category chip text (inactive) | Regular | 13px | normal | — |
| Section badge on heading (e.g. "Basque") | Regular | 14px | normal | — |
| Item count on card | Bold | 12px | normal | — |
| Serving size label (e.g. "Caña") | SemiBold | 11px | normal | UPPERCASE |
| Card tag (e.g. "LOCAL & IMPORT") | Bold | 11px | normal | UPPERCASE |
| Heritage badge text | Bold | 10px | normal | — |
| Origin badge (e.g. "Canarias") | Bold | 10px | normal | — |

---

## Colour Palette

### Core Colours

| Name | Hex | Usage |
|---|---|---|
| Background | `#FAF8F4` | Main page background (warm off-white) |
| Text Primary | `#1E1A18` | Headings, item names, primary text |
| Text Secondary | `#6B625E` | Descriptions, labels, muted text |
| Brand Red | `#B81F26` | CTA button, prices, header wordmark, active chips |
| Basque Red | `#D52B1E` | Basque flag background in heritage badge |
| Accent Gold | `#F2A900` | Decorative divider line on hero |

### Badge / Tag Colours

| Name | Hex | Background | Usage |
|---|---|---|---|
| Canarias Blue | `#007BC4` | `rgba(0, 123, 196, 0.1)` | "Canarias" origin badge text + bg |
| Canary Flag Blue | `#007DC6` | — | Canary Islands flag blue band |
| Canary Flag Yellow | `#F9C013` | — | Canary Islands flag yellow band |
| Craft Green | `#009A44` | `rgba(0, 154, 68, 0.1)` | "Craft" badge text + bg |

### Neutral / Surface Colours

| Name | Hex / Value | Usage |
|---|---|---|
| White | `#FFFFFF` | Cards, badges, input backgrounds, flag band |
| Border | `#EBE5DF` | Borders on cards, inputs, menu row dividers, heritage badge |
| Subtle Fill | `rgba(30, 26, 24, 0.05)` | Icon button backgrounds (search, back) |
| Clear Button | `rgba(30, 26, 24, 0.1)` | Clear/dismiss button background |
| Image Overlay | `rgba(0, 0, 0, 0.4)` | Dark overlay on category card images |
| Hero Overlay | `rgba(0, 0, 0, 0.5)` | Dark overlay on hero banner image |
| Card Tag | `rgba(255, 255, 255, 0.2)` | Semi-transparent tag on image cards |
| Daily Recommend | `rgba(184, 31, 38, 0.05)` | Light red tint for "Recomendación del Día" |

---

## Spacing System

| Token | Value | Usage |
|---|---|---|
| Page padding | `20px` | Left/right content padding on all screens |
| Welcome padding | `24px` | Welcome bottom section padding |
| Hero padding | `32px` | Internal hero banner padding |
| Section gap | `24px` | Gap between major content sections |
| Content gap (within section) | `20px` | Scroll content gap |
| Card internal gap | `12px` | Gap between cards in a list |
| Row padding | `16px` top/bottom | Menu row vertical padding |
| Element small gap | `4px` | Between item name and description |
| Badge gap | `8px` | Between item name and origin badge |
| Price columns gap | `12px` | Between price size columns (Caña / Jarra) |
| Heritage badge gap | `4px` | Between flag icons and text |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| CTA Button | `28px` | Fully rounded pill button |
| Category chip | `20px` | Pill-shaped filter chips |
| Search icon button | `18px` | Round icon button |
| Category card | `16px` | Image cards with rounded corners |
| Back button | `16px` | Round back navigation button |
| Search result card | `16px` | Results container card |
| Daily recommendation | `12px` | Recommendation banner |
| Search input | `12px` | Text input field |
| Clear button | `10px` | Small dismiss button |
| Heritage badge | `6px` | Small inline badge |
| Origin badge (e.g. "Canarias") | `4px` | Tiny pill tag |
| Flag icon | `1px` | Mini flag icons in heritage badge |

---

## Component Patterns

### Heritage Badge
A small inline badge showing both the Basque and Canary Islands flags with "EUSKADI · CANARIAS" text. White background, border `#EBE5DF`, rounded `6px`. Used in hero and header.

### Header (Interior Pages)
- Background: `#FAF8F4`
- Height: `56px`
- Bottom border: `1px solid #EBE5DF`
- Left: back button (32x32, rounded 16px, subtle fill) + page title (Fraunces Bold Italic 22px, Brand Red)
- Right: search icon button (36x36, rounded 18px, subtle fill)

### Menu Row
- Top border: `1px solid #EBE5DF` (except first row)
- Padding: `16px` top and bottom
- Left: item name (Fraunces Bold 18px) + optional origin badge + description (DM Sans Regular 14px, line-height 1.4)
- Right: one or two price columns aligned to end, with size label (DM Sans SemiBold 11px UPPERCASE, secondary text) and price (DM Sans Bold 16px, Brand Red)

### Category Card
- Height: `140px`, rounded `16px`, overflow hidden
- Background image with `rgba(0,0,0,0.4)` overlay
- Padding: `16px`
- Top row: tag badge (semi-transparent white) + item count
- Bottom: category title (Fraunces Bold 22px, white)

### CTA Button
- Height: `56px`, full width, rounded `28px`
- Background: Brand Red `#B81F26`
- Text: DM Sans Bold 16px, white, centered
- Arrow icon on right side

### Filter Chip
- Active: background Brand Red, text white (DM Sans SemiBold 13px)
- Inactive: white background, border `#EBE5DF`, text primary (DM Sans Regular 13px)
- Padding: `12px` horizontal, `8px` vertical, rounded `20px`

### Search Input
- White background, border `#EBE5DF`, rounded `12px`
- Padding: `16px` horizontal, `12px` vertical
- Search icon left, clear button right
- Text: DM Sans Regular 15px

### Section Heading Badge (e.g. "Basque" next to "Bocadillos")
- Small pill: border `#EBE5DF`, rounded, DM Sans Regular 14px
- Sits inline right of section title

---

## Screens Overview

| Screen | Figma Node | Description |
|---|---|---|
| Welcome Landing | `4:9` | Hero image, brand name, tagline, CTA |
| Menu Categories | `4:42` | Header with heritage badge, daily recommendation, category cards grid |
| Cervezas (Beers) | `4:107` | Beer list with prices by serving size |
| Whiskies | `4:228` | Whisky list with Copa/Chupito/Mixer prices |
| Food Menu | `4:337` | Bocadillos and Platos sections with origin badges |
| Search/Filter | `4:471` | Search input, quick category chips, results, recent searches |

---

## Icons

All icons are inline SVGs, sourced from what appears to be **Lucide** or a similar set:
- `chevron-left` — back navigation (16x16)
- `search` — search action (18x18)
- `arrow-right` — CTA forward arrow (18x18)
- `star` — daily recommendation (24x24)
- `x-circle` — clear search (10x10 inside 20x20 button)
- `history` — recent search clock icon (16x16)
- `arrow-up-left` — re-apply recent search (14x14)

---

## Layout Notes

- Mobile-first design at **390px** width
- No fixed bottom navigation; pages are stacked with header + scrollable content
- Content area starts at **y=100** (44px status bar + 56px header)
- Category cards and menu rows are full-width within the 20px page padding (350px effective content width)
- The welcome landing uses `justify-between` to push the CTA section to the bottom of the viewport (844px assumed height)
