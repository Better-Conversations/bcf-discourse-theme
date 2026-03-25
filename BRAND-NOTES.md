# BCF Brand Guidelines - Working Notes

> Temporary document capturing decisions made during the Discourse theme redesign (March 2026).
> Move this to the `Better-Conversations/brand` repo when created.

## Colour Palette (Updated)

The original brand guidelines (October 2022) specified a primary and secondary palette.
During the community platform redesign, several changes were made based on practical usage.

### Changes from Original Guidelines

1. **Lavender (#BD88BE) removed** - felt weak and too close to the purple theme accent. Replaced with Coral.
2. **Coral (#E8635A) added** - warm, energetic, used for community/discussion categories
3. **Dark teal (#2E8B82) added** - as a variant for "the foundation" category, giving it more weight and authority
4. **Grey (#8E99A4) added** - for admin/utility categories (site feedback)
5. **Dark (#333333) added** - for staff/internal categories
6. **Teal hex corrected** - the colour palette document corrected the original brand guidelines teal from `#SEC486` to `#54C4B6`

### Current Palette

#### Primary

| Colour | Hex | RGB | Usage |
|---|---|---|---|
| Purple | `#503F99` | 80, 63, 153 | Brand anchor, BCF faculty, theme accent colour |
| Blue | `#4495D1` | 68, 149, 209 | Partners, exploration (digging deeper) |
| Teal | `#54C4B6` | 84, 196, 182 | Foundation brand identity, welcoming categories |
| Red | `#EF404E` | 239, 64, 78 | Energy, action (in action category) |

#### Secondary

| Colour | Hex | RGB | Usage |
|---|---|---|---|
| Orange | `#FBB050` | 251, 176, 80 | Course-related categories |
| Green | `#A8D381` | 168, 211, 129 | International, growth (translations) |
| Coral | `#E8635A` | 232, 99, 90 | Community discussion (replaces Lavender) |
| Sky blue | `#6BCBDE` | 107, 203, 222 | Outward-facing (Outside The Walls, site feedback) |

#### Variants

| Colour | Hex | RGB | Usage |
|---|---|---|---|
| Dark teal | `#2E8B82` | 46, 139, 130 | The foundation (darker variant for authority) |
| Grey | `#8E99A4` | 142, 153, 164 | Admin/utility (site feedback) |
| Dark | `#333333` | 51, 51, 51 | Staff/internal categories |
| Dark purple | `#8678C2` | 134, 120, 194 | Dark mode tertiary (links, buttons) |
| Dark red | `#C42D39` | 196, 45, 57 | Danger/errors (light mode, WCAG compliant) |
| Dark red alt | `#D44A4A` | 212, 74, 74 | Danger (dark mode) |
| Warm red | `#E05555` | 224, 85, 85 | Love/like (dark mode) |
| Dark green | `#5B8A2C` | 91, 138, 44 | Success (light mode, WCAG compliant) |

### Removed

| Colour | Hex | Reason |
|---|---|---|
| Lavender | `#BD88BE` | Too weak, too close to purple accent, lacked energy |

## Typography (Updated)

### Original Brand Guidelines
- **Digital:** Livvic (Google Fonts)
- **Print/Design:** Congenial (Adobe CC) - used on logo

### Updated for Accessibility
- **Headings:** Lato - clean, warm, good weight variation
- **Body:** Open Sans - excellent readability, dyslexia-friendly
- **Print/Design:** Congenial (unchanged) - logo font, Adobe CC only

**Rationale:** Livvic was replaced because it poses readability challenges for people with dyslexia. Both Lato and Open Sans have clear letter differentiation (b/d, p/q, I/l/1), generous spacing, and consistent stroke width. Both are available natively in Discourse and Google Fonts.

## Logo

From the original brand guidelines (unchanged):
- Logo lock-up with defined safe area spacing
- Main logo and partner lock-up versions
- Single colour logo variants available
- Gradient: light to dark, left to right (green #A8D381 to teal #54C4B6)
- Logo font: Congenial

### Gradient CSS
```css
background-image: linear-gradient(to right, #a8d381, #8fd18e, #77ce9d, #63c9aa, #54c4b6);
```

## Partner Logo Positioning

From the original brand guidelines (unchanged):
- Partner logos appear top left
- Use single colour .png versions from logo bank

## Design Principles (Learned from Theme Work)

These principles emerged during the Discourse community platform redesign:

1. **Accessibility first** - font choices prioritise readability over brand aesthetics
2. **Vibrant but professional** - use the full colour palette, don't let one colour dominate
3. **Clean over decorative** - subtle shadows, no gradient blobs, thin borders
4. **Consistent weight** - buttons, borders, and icons should feel balanced
5. **Brand colours for meaning** - each colour maps to a purpose (teal=foundation, orange=course, purple=authority, etc.)
6. **WCAG 2.1 AA compliance** - all text must meet 4.5:1 contrast ratio, non-text elements 3:1. Links distinguished by underline not just colour. Focus indicators visible on all interactive elements. Touch targets minimum 44px on mobile.

## Technical Design Standards

Established during theme implementation — these should be codified in the brand guidelines.

### Shadows
- **Standard:** neutral `rgba(0, 0, 0, ...)` only — never colour-tinted
- **Card shadow:** `0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.06)`
- **Hover shadow:** `0 4px 20px rgba(0, 0, 0, 0.08)`
- **Light shadow (topic items):** `0 1px 2px rgba(0, 0, 0, 0.05)`

### Border Radius
- **Standard radius:** 10px (`--bcf-border-radius` CSS variable)
- Applied consistently to all cards, buttons, inputs, modals, pills

### Buttons
- **Default style:** outlined — transparent background, 1px border in accent colour
- **Hover:** fills solid with accent colour
- **Active nav pills:** solid dark background (`var(--primary)`)

### Responsive Breakpoints
- **960px:** Tablet — 2-column category grid
- **768px:** Phone landscape — single column, simplified topic list
- **480px:** Phone portrait — tighter spacing, shorter header

### Dark Mode Rules
- Use CSS custom properties (`var(--primary)`, `var(--secondary)`, etc.) — never hardcode colours
- Never use `prefers-color-scheme` media query — use Discourse's theme switcher mechanism
- Border opacity should be 0.12-0.15 (not 0.08-0.1) for dark background visibility
- Shadow opacity should be 0.05-0.06 minimum for dark background visibility
- `var(--header_background)` works correctly in both modes (light: #ffffff, dark: #202020)

## TODO for Brand Repo

- [ ] Create `Better-Conversations/brand` repository
- [ ] Move this document there as the foundation for the full brand guide
- [ ] Add logo assets (SVG, PNG, PDF) from Box brand folder
- [ ] Create colour swatch images
- [ ] Add font pairing examples
- [ ] Document logo usage rules with visual examples
- [ ] Create a downloadable brand kit for partners
- [ ] Publish on BCF website
