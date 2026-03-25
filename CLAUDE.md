# Claude Code — Discourse Theme BCF

## Project Overview

This is a standalone Discourse theme for the Better Conversations Foundation (BCF) community, installed from Git into the live Discourse instance.

## File Structure

```
about.json          — Theme metadata, colour palettes, component references
common/common.scss  — Main styles (shared across desktop + mobile)
desktop/desktop.scss — Desktop-only overrides
mobile/mobile.scss  — Mobile-only overrides
scss/variables.scss — Mixins, CSS custom properties, gradient definitions
scss/sidebar.scss   — Sidebar-specific styles
scss/chat.scss      — Chat drawer/panel styles
BRAND-NOTES.md      — Brand colour palette, design principles, branding project notes
README.md           — Installation, configuration, and development docs
```

## Development Approach

### How Discourse themes work

- Discourse compiles SCSS server-side. The theme uses `@import` for partials in `scss/`.
- CSS custom properties from Discourse (e.g. `var(--primary)`, `var(--secondary)`, `var(--tertiary)`) change between light and dark mode automatically.
- Category badge colours are set per-category in Discourse admin, NOT in theme CSS.
- Category icons are managed by the `discourse-category-icons` component, configured via theme settings in admin.

### Key constraints

- **No preview server** — you cannot run Discourse locally. Changes must be tested on the live instance.
- **`discourse_theme watch`** is the fastest iteration loop — it live-syncs files to Discourse. See README for setup.
- **Dev theme required** — before running `discourse_theme watch`, install a separate dev theme in Discourse pointing at the `dev` branch. Only you will see changes.
- **Colour palettes don't sync** — changes to `about.json` colour values are NOT picked up by `discourse_theme watch` or Git updates. Palettes are only auto-created on first install. If you change a colour in `about.json`, you must also update it manually in Admin > Appearance > Color palettes.
- **Brace counting** — always verify `grep -c '{' file.scss` matches `grep -c '}' file.scss` after edits. Discourse silently drops malformed SCSS.
- **Selector specificity** — Discourse's own styles are aggressive. Prefer overriding Discourse CSS variables (e.g. `--d-nav-*`) over fighting selectors with `!important`.
- **Don't override button colours globally** — Discourse handles button colours via its palette system. Only override `border-radius`. Global colour overrides cause invisible buttons on admin pages and dark mode.
- **Dark mode** — never use `prefers-color-scheme` media queries. Discourse has its own theme switcher that sets CSS variables. Use `var(--primary)`, `var(--secondary)`, etc.
- **`@mixin bcf-card-bg`** — uses `var(--header_background)` which works in both light (#ffffff) and dark (#202020) modes.

### Visual verification is essential

CSS changes often have unintended side effects in Discourse because:
- Selectors can match elements on pages you didn't consider (admin, user profile, topic view, etc.)
- Dark mode may render differently
- Mobile layout may break

**Rules for when to ask the user for a visual check:**
1. After changing any selector that affects layout (grid, flexbox, width, padding, margin)
2. After changing colours or opacity values
3. After any change to nav pills, buttons, or interactive elements
4. After adding new media queries / breakpoints
5. When you're unsure if a selector targets the right element

### Commit strategy

- Make small, focused commits — one logical change per commit
- Each commit should be independently revertable (`git revert <sha>`)
- Commit message format: `type: description` (fix, feat, docs, refactor)
- Push after each commit so the user can pull changes into Discourse
- If iterating with `discourse_theme watch`, batch changes into a single commit once stable

### Common pitfalls we've hit

1. **Ghost borders on nav pills** — Discourse applies borders/outlines from multiple selectors. Use `border: 1px solid transparent !important` as base state, then set border colour on active/hover.
2. **Category card lock icons** — these are inline `<span>` elements inside the heading, not separate elements. Can't reliably position them with `position: absolute`. Use `order` with flexbox instead.
3. **Sidebar styling leaks** — rules targeting `.sidebar-wrapper` can affect admin sidebar too. Scope carefully.
4. **Font Awesome versions** — Discourse may use FA5 or FA6 depending on version. Check which is loaded before using `font-family: "Font Awesome 6 Free"` hacks.
5. **`prefers-color-scheme` doesn't work** — Discourse uses its own dark mode toggle, not the OS-level one. Always use Discourse CSS variables.
6. **Colour palettes don't live-sync** — `about.json` palette values are only read on first theme install. Any colour changes need to be made both in `about.json` (for future installs) AND manually in Admin > Appearance > Color palettes (for the live site).
7. **Global button colour overrides break things** — Never override `.btn-default`, `.btn[href]`, or `a { color }` globally. These cause invisible text on admin pages and dark mode. Only override `border-radius`.

## Brand Context

- **BCF brand colour:** Teal (#54C4B6 light, #2E8B82 dark)
- **Online discussions:** Purple (#503F99)
- **Course-related:** Orange (#FBB050)
- **Partners:** Blue (#4495D1)
- **Full palette and design principles:** see BRAND-NOTES.md
- **Fonts:** Lato (headings) + Open Sans (body) — chosen for dyslexia accessibility over brand-specified Livvic
- **Related Linear issue for branding project:** BCF-678

## Testing Checklist

Before considering a change complete, verify:

- [ ] Homepage categories page renders correctly
- [ ] Topic list view renders correctly
- [ ] Dark mode (BCF-dark palette) looks good
- [ ] Mobile viewport (375px) doesn't break layout
- [ ] Admin pages are not affected by homepage-specific styles
- [ ] Brace counts match in all modified SCSS files
