# axelp.id

My personal portfolio website — a single-page application showcasing my projects.

## Stack

- **React 19** + **TypeScript**
- **Vite** — build tooling and dev server
- **Less** — scoped component styles and design tokens
- **@vercel/analytics** + **@vercel/speed-insights** — page analytics and performance monitoring

## Features

- Dark / light theme toggle with `localStorage` persistence and `prefers-color-scheme` fallback
- Scroll reveal animations (slide-up, slide-left, clip-path wipe, blur focus-in, stagger)
- Dynamic **Projects** section powered by the GitHub API — pulls live repo data, tech tags, and last-updated dates
- **Contact form** with Web3Forms and h-captcha verification 
- Fully responsive layout with mobile hamburger navigation

## Project Structure

```
src/
  assets/            # Background and misc images
  components/        # Page sections, each with a co-located .less file
    Nav.tsx/.less
    Hero.tsx/.less
    About.tsx/.less
    Projects.tsx/.less
    Contact.tsx/.less
    Footer.tsx/.less
  icons/
    about/           # AI, data science, coding, and tools icon components
    footer/          # Social media icon components
    project/         # GitHub and external-link icon components
  hooks/
    useScrollReveal.ts   # IntersectionObserver-based scroll 
  styles/
    global.less      # Animations, utility classes, base styles
    variables.less   # CSS custom properties and LESS aliases
  App.tsx
  main.tsx
  vite-env.d.ts
```

## Getting Started

```bash
pnpm install
pnpm dev
```

```bash
pnpm build    # type-check + production build
pnpm preview  # preview the production build locally
```

## Environment Variables

Create a `.env` file in the root:

```
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

## Adding Icons

Icons live in `src/components/icons/` as `.tsx` React components using `currentColor` for theming:

```tsx
import Brain from './icons/about/Brain'
```
