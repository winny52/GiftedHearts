# Gifted Hearts Kenya Foundation

Website for the Gifted Hearts Kenya Foundation — a faith-based organization dedicated to serving vulnerable communities across Kenya through orphanage visits, home construction, education sponsorship, mental health campaigns, and community outreach.

## Tech Stack

- **React 19** with TypeScript
- **Vite** — build tooling with SWC
- **Tailwind CSS v4** — utility-first styling via `@theme` in CSS
- **React Router v7** — Data Mode with `createBrowserRouter` and lazy-loaded routes
- **Framer Motion** — scroll-triggered reveals, page entrance animations
- **Tabler Icons** — icon library
- **CVA + tailwind-merge** — component variant management with `cn()` utility
- **Prettier** — code formatting with Tailwind class sorting
- **ESLint** — linting with TypeScript and React plugins
- **Husky + lint-staged** — pre-commit hooks for lint and format enforcement

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+

### Install

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Opens the dev server at `http://localhost:5173`.

### Build

```bash
pnpm build
```

Runs TypeScript type-checking then produces an optimized production build in `dist/`.

### Preview

```bash
pnpm preview
```

Serves the production build locally for testing.

## Scripts

| Script              | Description                          |
| ------------------- | ------------------------------------ |
| `pnpm dev`          | Start Vite dev server                |
| `pnpm build`        | Type-check and build for production  |
| `pnpm preview`      | Preview the production build locally |
| `pnpm lint`         | Run ESLint                           |
| `pnpm lint:fix`     | Run ESLint with auto-fix             |
| `pnpm format`       | Format all files with Prettier       |
| `pnpm format:check` | Check formatting without writing     |

## Project Structure

```
src/
  main.tsx                        # Entry point with RouterProvider
  index.css                       # Tailwind v4 @theme + dark mode + globals
  router.tsx                      # Route definitions (lazy-loaded)

  assets/images/                  # All images (kebab-case)

  components/
    ui/                           # Reusable atomic components
      button.tsx                  # CVA-powered button (link or button)
      card.tsx                    # Card with hover elevation
      container.tsx               # Max-width centered wrapper
      error-boundary.tsx          # Router error boundary
      glitch-text.tsx             # CSS glitch text effect
      input.tsx                   # Input and Textarea with dark mode
      motion.tsx                  # Framer Motion wrappers (Reveal, StaggerReveal)
      section-heading.tsx         # Section title + subtitle + accent bar
      stat-counter.tsx            # Animated number counter
    layout/
      root-layout.tsx             # Navbar + Outlet + Footer
      navbar.tsx                  # Sticky nav with mobile menu
      footer.tsx                  # Multi-column footer
      mobile-menu.tsx             # Full-screen mobile nav overlay
      logo.tsx                    # Brand mark
      theme-toggle.tsx            # Light/dark toggle

  pages/
    home/                         # Homepage sections
    about/                        # About page + Our Story timeline
    projects/                     # Projects grid + detail page
    get-involved/                 # Volunteer form + donate section
    contact/                      # Contact form + info
    not-found-page.tsx            # 404 page

  hooks/
    use-scroll-to-top.ts          # Scroll to top on route change
    use-intersection-observer.ts  # Viewport detection
    use-theme.ts                  # Light/dark theme with localStorage

  lib/
    constants.ts                  # Site name, contact info, social links
    types.ts                      # Shared TypeScript interfaces
    utils.ts                      # cn() class merge utility

  data/
    projects.ts                   # Project content
    navigation.ts                 # Nav link definitions
    timeline.ts                   # Our Story timeline entries
    team-members.ts               # Team/founders
    impact-stats.ts               # Impact statistics
```

## Theming

### Tailwind v4

All design tokens are defined in `src/index.css` using `@theme`. No `tailwind.config.js` needed.

### Dark Mode

Dark mode is toggled via a `.dark` class on `<html>`. The toggle is in the navbar. Theme preference is persisted to `localStorage` and defaults to the OS preference on first visit. A blocking inline script in `index.html` prevents flash of wrong theme.

### Fonts

- **Space Grotesk** — display/hero headings (Google Fonts)
- **Inter** — section headings and body text (Google Fonts)

### Colors

| Role      | Palette | Usage                          |
| --------- | ------- | ------------------------------ |
| Primary   | Blue    | CTAs, links, nav, trust        |
| Secondary | Amber   | Accents, active states, warmth |
| Accent    | Rose    | Donation CTAs, hearts, urgency |
| Neutral   | Zinc    | Dark mode backgrounds/text     |

## Git Hooks

Husky runs `lint-staged` on every commit:

- **`.ts` / `.tsx` files** — ESLint fix + Prettier format
- **`.json` / `.css` / `.md` / `.html` files** — Prettier format

## License

All rights reserved. Gifted Hearts Kenya Foundation.
