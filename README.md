# BCF Theme

A standalone Discourse theme for the Better Conversations Foundation community.

## 🚀 Installation

The theme must be installed from Git so that updates to this repository are automatically available in Discourse.

### Installing from Git (fresh install)

1. Go to **Admin > Customize > Themes & components**
2. Click **Install** and select **From a Git repository**
3. Enter the repo URL: `https://github.com/Better-Conversations/discourse-theme-bcf`
4. Click **Install**
5. Once installed, click on the theme and set it as the **active theme** for your site

### Migrating from a manually pasted theme

If the theme was previously created by pasting CSS directly into the admin editor:

1. **Note down** any included components (e.g. Category Icons, Homepage Feature) — you'll re-add these
2. **Note down** any theme setting overrides (colour palette selections, etc.)
3. Install the theme from Git using the steps above
4. Re-add the same components to the new Git-linked theme
5. Re-apply any theme setting overrides
6. Set the new theme as active
7. Delete the old manually-created theme

### Updating the theme

Once installed from Git, go to **Admin > Customize > Themes & components > BCF-Bespoke-Theme** and click the **update** button (or enable auto-update in the theme settings to check for updates periodically).

## 🛠️ Local Development

Use the `discourse_theme` CLI to live-sync local changes to your Discourse instance without committing to Git.

### Setup

```bash
gem install discourse_theme
```

### Usage

```bash
discourse_theme watch .
```

On first run, it will prompt for:
- **Discourse URL** — e.g. `https://community.betterconversations.foundation`
- **API key** — create one at **Admin > API > Keys** (scoped to your admin user, with global scope)

These are saved for subsequent runs. After setup, every file save is instantly uploaded to Discourse — no commit/push/update cycle needed.

### Tips

- Keep a browser tab open on your Discourse site to see changes in real time
- Use `Ctrl+C` to stop watching
- If you need to reset the saved credentials: `discourse_theme config`
- The CLI only syncs the theme files — component settings (Category Icons config, etc.) still need to be changed in the admin UI

### Safe development with a dev branch

`discourse_theme watch` syncs directly to your live Discourse — all users see changes immediately. To avoid disrupting the community, use a dev branch and a separate theme:

**One-time setup:**

1. Create a `dev` branch: `git checkout -b dev`
2. In Discourse, install a second copy of the theme from Git using the **same repo URL** but set the branch to `dev`
3. Name it **BCF-Dev-Theme**
4. Add the same components (Category Icons, Homepage Feature) to the dev theme
5. In your user preferences (**Preferences > Interface > Theme**), select **BCF-Dev-Theme** — only you will see it

**Development workflow:**

1. Work on the `dev` branch locally
2. Run `discourse_theme watch .` pointed at the dev theme
3. Iterate — changes are visible only to you
4. When happy, commit to `dev` and push
5. Create a PR from `dev` → `main`
6. After merging, update the production theme in admin (or let auto-update pick it up)

**Quick changes (low traffic):**

For minor tweaks during quiet hours, working directly on `main` is acceptable. Use your judgement based on community activity.

### When to commit

Use the CLI for iterative development, then commit once you're happy with the result. This avoids cluttering the Git history with trial-and-error commits.

## 🎨 Colour Palettes

The theme includes two colour palettes defined in `about.json`:

- **BCF-light** — white background, purple (#503F99) tertiary, orange (#FBB050) quaternary
- **BCF-dark** — dark background (#2d2d2d), lighter purple (#8b5ca2) tertiary

These are created automatically when the theme is installed from Git. Set them in **Admin > Customize > Themes > BCF-Bespoke-Theme** under Colour Palette / Dark Color Palette.

## 🔤 Fonts

Set in **Admin > Appearance > Fonts**:

- **Base font:** Open Sans
- **Heading font:** Lato

Both are dyslexia-friendly with clear letter differentiation. The brand guidelines specify Livvic, but these were chosen for accessibility. No custom CSS needed — Discourse loads them natively.

## 📦 Required Components

The theme requires two components:

1. **Homepage Feature** — `https://github.com/nolosb/discourse-featured-cards`
   (listed in `about.json`, may auto-install)
2. **Category Icons** — `https://github.com/discourse/discourse-category-icons`
   (see configuration below)

Add both via **Admin > Customize > Components > Install** and attach them to the BCF-Bespoke-Theme.

## ⚙️ Configuration

### Discourse Settings

Following setting changes are required for this theme to render properly:

- `top menu` needs to be set to **category, latest, new, unread, top**
- `desktop category page style` needs to be set to **Boxes with Subcategories**

### Welcome Banner (Core)

The old `discourse-search-banner` theme component has been removed from this theme.  
Use Discourse core welcome banner functionality instead:

- Configure your banner from the admin interface using the current Discourse "welcome banner" feature.
- If the old search banner component is still installed on your site, remove it from your active theme/component list.

### Category Colours

Colours use the official BCF brand palette from the brand guidelines:

**Primary:** Purple `#503F99`, Blue `#4495D1`, Teal `#54C4B6`, Red `#EF404E`
**Secondary:** Orange `#FBB050`, Green `#A8D381`, Coral `#E8635A`, Sky blue `#6BCBDE`

> **Note:** Coral replaces Lavender (#BD88BE) from the original brand guidelines.

Set the **category badge colour** for each category in **Admin > Categories > [category] > Settings**:

| Category | Colour | Hex |
|---|---|---|
| start here | Teal | `#54C4B6` |
| course updates | Orange | `#FBB050` |
| in action | Red | `#EF404E` |
| the foundation | Dark teal | `#2E8B82` |
| anything else? | Coral | `#E8635A` |
| digging deeper | Blue | `#4495D1` |
| course delivery | Orange | `#FBB050` |
| translations | Green | `#A8D381` |
| BCF faculty | Purple | `#503F99` |
| staff | Dark | `#333333` |
| site feedback | Grey | `#8E99A4` |
| Outside The Walls | Sky blue | `#6BCBDE` |
| Partners | Blue | `#4495D1` |

### Category Icons

Icons are managed via the [discourse-category-icons](https://github.com/discourse/discourse-category-icons) theme component.

**Installation:**

1. Go to **Admin > Customize > Components > Install**
2. Add the Git URL: `https://github.com/discourse/discourse-category-icons`
3. Add the component to the BCF-Bespoke-Theme

**Configuration:**

In the component settings, set `category_icon_list` (one per line, format: `slug,icon,color`):

```
start-here,compass,#54C4B6
course-updates,bell,#FBB050
in-action,rocket,#EF404E
foundation,building-columns,#2E8B82
anything-else,comments,#E8635A
digging-deeper,microscope,#4495D1
delivering-better,chalkboard-user,#FBB050
translations,globe,#A8D381
bcf-faculty,graduation-cap,#503F99
staff,shield-halved,#333333
site-feedback,lightbulb,#8E99A4
otw,person-hiking,#6BCBDE
partners,handshake,#4495D1
```

Set `svg_icons` to:

```
compass|bell|rocket|building-columns|comments|microscope|chalkboard-user|globe|graduation-cap|shield-halved|lightbulb|person-hiking|handshake
```

> **Note:** Verify category slugs match your actual slugs in **Admin > Categories > [category] > Settings** (or from the category URL).

