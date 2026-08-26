# SAARTHI — Hackathon Website

> Official hackathon landing page for **SAARTHI-26**, built with React 19 + TypeScript + Vite.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 6 |
| Build Tool | Vite 8 |
| Routing | React Router DOM v7 |
| Styling | CSS Modules + Vanilla CSS |
| Linting | Oxlint |

---

## Project Architecture

```
SAARTHI/
├── index.html                  # App entry point (Vite root)
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript root config
│
├── public/
│   ├── favicon.svg             # Site favicon
│   └── icons.svg               # SVG icon sprite
│
└── src/
    ├── main.tsx                # React DOM render root
    ├── App.tsx                 # Root component — router setup
    │
    ├── config/
    │   └── site.ts             # Global site constants (name, links, dates)
    │
    ├── data/                   # Static content data
    │   ├── faq.ts              # FAQ items
    │   ├── judges.ts           # Judges list
    │   ├── prizes.ts           # Prize tiers
    │   ├── sponsors.ts         # Sponsor list
    │   ├── timeline.ts         # Event timeline entries
    │   └── tracks.ts           # Hackathon tracks
    │
    ├── pages/                  # Route-level page components
    │   ├── Home.tsx            # Main landing page
    │   ├── Rules.tsx           # Rules page
    │   ├── Rules.module.css
    │   ├── NotFound.tsx        # 404 fallback
    │   └── NotFound.module.css
    │
    ├── components/
    │   ├── layout/             # Persistent UI shell
    │   │   ├── Navbar.tsx      # Sticky top navigation
    │   │   ├── Navbar.module.css
    │   │   ├── Footer.tsx      # Site footer
    │   │   └── Footer.module.css
    │   │
    │   └── sections/           # Page sections (rendered in Home.tsx)
    │       ├── HeroSection     # Animated hero with portal canvas
    │       ├── StatsBar        # Live stats bar
    │       ├── AboutSection    # About the hackathon
    │       ├── TracksSection   # Hackathon tracks
    │       ├── TimelineSection # Event timeline
    │       ├── PrizesSection   # Prize breakdown
    │       ├── JudgesSection   # Judges panel
    │       ├── SponsorsSection # Sponsors grid
    │       └── FAQSection      # FAQ accordion
    │
    ├── hooks/                  # Reusable React hooks
    │   ├── usePortalCanvas.ts  # Canvas 2D animation engine (hero portal)
    │   ├── useIntersectionObserver.ts  # Scroll-triggered visibility
    │   ├── useScrollSpy.ts     # Active nav link detection
    │   └── useReducedMotion.ts # Respects prefers-reduced-motion
    │
    ├── styles/                 # Global CSS
    │   ├── globals.css         # Base reset + global styles
    │   ├── tokens.css          # Design tokens (colors, spacing, fonts)
    │   └── animations.css      # Shared keyframe animations
    │
    └── assets/
        ├── hero.png            # Hero background asset
        └── vite.svg            # Vite logo
```

---

## Key Design Decisions

### CSS Modules
Every component has a co-located `.module.css` file. This ensures styles are locally scoped and avoids global class collisions.

### Static Data Layer (`/data`)
All page content — judges, prizes, sponsors, FAQ — lives in typed TypeScript files under `src/data/`. This makes content updates fast and keeps components clean of hardcoded strings.

### Custom Hooks (`/hooks`)
- **`usePortalCanvas`** — A self-contained Canvas 2D animation that powers the hero section portal effect (starfield, circuit grid, geometric rings, particle field, pointer parallax).
- **`useIntersectionObserver`** — Drives scroll-triggered entrance animations on sections.
- **`useScrollSpy`** — Tracks which section is in view to highlight the active navbar link.
- **`useReducedMotion`** — Gates all animations behind the OS `prefers-reduced-motion` setting for accessibility.

### Design Tokens (`tokens.css`)
Color palette, typography, spacing, and breakpoints are all defined as CSS custom properties in `tokens.css`, giving the entire site a consistent design system.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#050538` | World background (deep blue) |
| `--color-surface` | `#F5F7FF` | Structural elements (white) |
| `--color-accent` | `#FFD43B` | Energy / highlights (yellow) |
