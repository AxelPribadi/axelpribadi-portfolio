# axelpribadi.dev

Personal portfolio website for Axel Pribadi — data scientist building applied AI systems.

## Stack

- **React 19** + **TypeScript**
- **Vite** — build tooling and dev server
- **Less** — scoped component styles and design tokens
- **vite-plugin-svgr** — SVG files imported as inline React components

## Project Structure

```
src/
  assets/
    images/          # SVG icons and background images
  components/        # Page sections, each with a co-located .less file
    Nav.tsx/.less
    Hero.tsx/.less
    About.tsx/.less
    Projects.tsx/.less
    Contact.tsx/.less
    Footer.tsx/.less
  hooks/
    useScrollReveal.ts   # IntersectionObserver-based scroll animation hook
  styles/
    global.less      # Animations, utility classes, base styles
    variables.less   # CSS custom properties and LESS aliases
  App.tsx
  main.tsx
  vite-env.d.ts
```

## Features

- Dark / light theme toggle with `localStorage` persistence and `prefers-color-scheme` fallback
- Scroll reveal animations (slide-up, slide-left, clip-path wipe, blur focus-in, stagger)
- Batik Kawung SVG background pattern as a masked overlay
- Contact form with Name, Email, and Message fields
- Fully responsive layout

## Getting Started

```bash
pnpm install
pnpm dev
```

```bash
pnpm build    # type-check + production build
pnpm preview  # preview the production build locally
```

## Adding Icons

Icons live in `src/assets/images/` as plain `.svg` files using `currentColor` for theming. Import them as inline React components via the `?react` suffix:

```tsx
import BrainIcon from '../assets/images/brain2.svg?react'
```
