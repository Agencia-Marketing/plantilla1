# AGENTS — Plantilla 1 | Agencia Digital

## Project Overview

Professional landing page template for a digital marketing agency. Built with Astro + Tailwind CSS, deployable to Cloudflare Pages. Includes standalone HTML version for quick delivery.

## Critical Conventions

- **Two variants coexist**: `src/` (Astro with local Tailwind + PostCSS) and `html/` (standalone HTML with Tailwind CDN + inline CSS). Keep both in sync when making visual/style changes.
- **All brand colors**: defined as CSS custom properties in `:root` in both `src/styles/global.css` and each HTML file's `<style>` block. Also mirrored in `tailwind.config.mjs` (Astro) and the inline `tailwind.config` (HTML).
- **Tailwind is v3**, not v4. Use `@tailwind base/components/utilities` directives, not `@import "tailwindcss"`.
- **PostCSS + Autoprefixer** — handled by `postcss.config.mjs`.

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview build locally |

No linter or typecheck commands configured.

## Project Structure

```
├── src/
│   ├── layouts/Layout.astro      # Global layout (nav, footer, head)
│   ├── pages/
│   │   ├── index.astro           # Landing page
│   │   ├── nosotros.astro        # About us
│   │   ├── contacto.astro        # Contact
│   │   └── servicios/            # 9 service pages
│   └── styles/global.css
├── html/                         # Standalone CDN version (12 files)
│   ├── index.html
│   ├── nosotros.html
│   ├── contacto.html
│   └── servicios/
├── tailwind.config.mjs
├── astro.config.mjs
└── postcss.config.mjs
```

## Design System

### Colors — defined in `:root`
- `--color-primary: #7e22ce` — main brand purple
- `--color-primary-dark: #6d28d9` — hover state
- `--color-primary-fixed: #ede9fe` — light tint (icon backgrounds)
- `--color-primary-fixed-dim: #ddd6fe`
- `--color-inverse-primary: #c4b5fd` — lighter accent
- `--color-on-primary: #ffffff`
- `--color-on-primary-fixed: #3b0764`
- `--color-surface: #ffffff`
- `--color-surface-dim: #f8f9fc`
- `--color-on-surface: #0f172a`
- `--color-on-surface-variant: #475569`
- `--color-body-text: #334155`
- `--color-outline: #e2e8f0`
- `--color-footer-bg: #3b0764`

### RGB variants used for `rgba()` shadows
- `--color-primary-rgb: 124, 58, 237`
- `--color-primary-dark-rgb: 109, 40, 217`
- `--color-on-surface-rgb: 15, 23, 42`
- `--color-body-text-rgb: 51, 65, 85`

### Rebranding flow
Change colors in TWO places:
1. `:root` block in `src/styles/global.css` (and each HTML file's `<style>`)
2. `theme.extend.colors` in `tailwind.config.mjs` (and inline config in HTMLs)

### Typography
- **Display/Headings**: Syne (700/600 weight, -0.03em letter-spacing)
- **Body**: Outfit (400 weight, 1.65 line-height)
- **Label**: Outfit 600, 0.05em tracking

### Spacing tokens
- `gutter: 24px`, `container-max: 1280px`
- `section-padding-desktop: 120px`, `section-padding-mobile: 64px`

## Key CSS Classes (custom)

| Class | What it does |
|---|---|
| `.btn-magnetic` | Button with lift + translateX icon-wrap on hover |
| `.press-effect` | Scale(0.97) on active |
| `.card-hover` | Card with translateY(-6px) + shadow on hover |
| `.glass-card` | Semi-transparent white card for dark sections |
| `.stagger-fade` | Staggered fade-in animation (9 children) |
| `.reveal` | Single fade-up on scroll via `.in-view` |
| `.icon-wrap` | Inline icon-wrapper with translateX on parent hover |
| `.hover-lift` | Simple translateY(-3px) on hover |

## Deployment

Push to `main` on GitHub → Cloudflare Pages auto-builds.

## Ecommerce (planned)

Stripe Checkout + Cloudflare Worker for selling service packages. No backend.
