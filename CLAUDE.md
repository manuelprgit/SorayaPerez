# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static multi-page website for **Soraya Pérez**, a luxury interior design firm based in the Dominican Republic (targeting Punta Cana, Cap Cana, Santiago, and Santo Domingo markets). Content is in Spanish.

## Development

No build process or dependencies. Files are served directly as static HTML/CSS/JS. To preview locally, use any static file server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

## Architecture

**6 HTML pages** (MPA — traditional multi-page navigation):
- `index.html` — Homepage with hero, featured projects, trust signals
- `about.html` — Designer biography
- `services.html` — Service offerings
- `projects.html` — Portfolio showcase
- `locations.html` — Service area pages
- `contact.html` — Contact form and WhatsApp link (`wa.me/18292590296`)

**Single CSS file** (`css/style.css`): Design system built on CSS custom properties for colors, spacing, and typography. Mobile-first with breakpoints at 860px and 640px. Uses CSS Grid and Flexbox.

**Single JS file** (`js/main.js`, 33 lines): Only two behaviors:
1. Mobile hamburger nav toggle (uses `aria-expanded`)
2. Scroll-reveal animation via `IntersectionObserver` on `.reveal` elements — respects `prefers-reduced-motion`

**Images** (`img/`): `hero.jpg` + `1.jpg`–`6.jpg` (portfolio project images).

## CSS Conventions

- All design tokens are CSS variables on `:root` — update values there, not inline
- Add `.reveal` class to new sections/cards to get the scroll-in animation for free
- The `.sr-only` utility class is defined for screen-reader-only text
