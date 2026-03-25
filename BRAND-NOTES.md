# BCF Brand Notes — Discourse Implementation

> The canonical brand guide and design tokens now live in the **[bc-brand](https://github.com/Better-Conversations/bc-brand)** repository. This file documents how the brand is applied specifically within Discourse.

## How Discourse Consumes the Brand

Discourse does not import external SCSS or CSS files. Brand values are applied in three ways:

### 1. Colour Palettes (`about.json`)

The `about.json` file defines two Discourse colour palettes (BCF-light, BCF-dark) that map brand colours to Discourse's palette slots:

| Discourse Slot | Brand Token | Light | Dark |
|---|---|---|---|
| tertiary | Purple | `#503F99` | `#8678C2` |
| quaternary | Orange | `#FBB050` | `#FBB050` |
| highlight | Teal | `#5BC3B6` | `#5BC3B6` |
| danger | Red | `#C42D39` | `#D44A4A` |
| success | Green | `#5B8A2C` | `#A8D381` |
| love | Red | `#C42D39` | `#E05555` |

These palettes are only auto-created on first theme install. Updates must be made manually in **Admin > Appearance > Color palettes** as well as in `about.json`.

### 2. Category Badge Colours

Set per-category in **Admin > Categories > [category] > Settings**. See the [README](README.md#category-colours) for the full mapping.

### 3. Theme SCSS

Brand values used in the theme SCSS are hardcoded (Discourse cannot import external token files). If a brand colour changes in bc-brand, the corresponding value must be updated manually in the theme SCSS and `about.json`.

**Current brand values used in theme SCSS:**

| Token | Variable | Value |
|---|---|---|
| Border radius | `--bcf-border-radius` | `10px` |
| Card shadow | `$bcf-shadow-card` | `0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)` |
| Hover shadow | `--bcf-hover-shadow` | `0 4px 12px rgba(0,0,0,0.08)` |

Most colours come from Discourse CSS variables (`var(--tertiary)`, `var(--primary)`, etc.) which are set by the palette, not hardcoded.

## Discourse-Specific Dark Mode

Discourse does **not** use `prefers-color-scheme` or `[data-theme]`. It has its own theme switcher that sets CSS variables automatically. The brand's `[data-theme="dark"]` / `.bcf-dark` selectors in `css/variables.css` do not apply in Discourse — use Discourse's palette system instead.

## Fonts in Discourse

Set in **Admin > Appearance > Fonts** (not in theme CSS):

- **Base font:** Open Sans
- **Heading font:** Lato

Both are available natively in Discourse. No `@import` or `@font-face` needed.

## Keeping in Sync with bc-brand

When brand values change in bc-brand:

1. Check if the change affects any Discourse palette slot — update `about.json` and the live palette in admin
2. Check if the change affects any hardcoded value in the theme SCSS — update `scss/variables.scss`
3. Check if the change affects category badge colours — update in admin per-category
4. Check if the change affects fonts — update in admin font settings
