# SAARTHI Hackathon Website — Project Plan
### Product Architect + UI/UX Architect | Discovery & Planning Document
> **Status**: Awaiting approval before implementation begins.
> **Date**: 2026-08-20
> **Repository state**: Greenfield — only `AGENTS.md` and `.agents/` exist.

---

## Table of Contents

1. [Repository Discovery](#1-repository-discovery)
2. [Reference Site Analysis](#2-reference-site-analysis)
3. [Product Requirements Analysis](#3-product-requirements-analysis)
4. [Information Architecture](#4-information-architecture)
5. [Visual Concept](#5-visual-concept)
6. [Hero Experience Design](#6-hero-experience-design)
7. [3D Strategy Evaluation](#7-3d-strategy-evaluation)
8. [Technical Architecture](#8-technical-architecture)
9. [Performance Strategy](#9-performance-strategy)
10. [Responsive Strategy](#10-responsive-strategy)
11. [Accessibility + SEO Requirements](#11-accessibility--seo-requirements)
12. [Risk / Pre-Mortem](#12-risk--pre-mortem)
13. [Implementation Roadmap](#13-implementation-roadmap)
14. [Open Questions](#14-open-questions)
15. [Executive Summary](#15-executive-summary)

---

## 1. Repository Discovery

### What exists?

| Item | Status |
|------|--------|
| `AGENTS.md` | Exists — 1,589 lines of engineering rules + SAARTHI-specific project rules |
| `.agents/skills/` | Exists — large library of skill SKILL.md files |
| `.agents/skills_library/` | Exists — additional skills |
| Application code | None |
| `package.json` | None |
| `index.html` | None |
| Build system | None |
| Styling system | None |
| Assets | None |
| Routes / components | None |
| Backend / API | None |
| Design system | None |

### Assessment: Greenfield project

This is a completely empty application workspace. There are no existing design decisions, dependencies, framework choices, or architectural patterns that must be preserved. We have full freedom to make the right choices from scratch.

**Implication**: This is both an opportunity and a risk. We must make deliberate, well-justified architectural decisions now because changing them mid-project is expensive.

---

## 2. Reference Site Analysis

**Reference**: https://acehack.uem.edu.in/ (AceHack 5.0)

> The following is conceptual analysis only. No code, assets, branding, or design from AceHack will be copied.

### What works well (concepts to learn from, not copy)

| Pattern | What they do | What we can learn |
|---------|-------------|-------------------|
| **Immersive loading** | Neon title appears on black before scene loads | Build expectation before heavy assets arrive |
| **Companion character** | A sidebar character updates dialog as user scrolls sections | Section-aware context creates delight without being intrusive |
| **Section headings as world elements** | Each section title is styled as part of the world theme | Consistency of visual language builds the "world" feel |
| **Themed CTAs** | Buttons look like in-world objects (chests, signs) | CTA should feel like a natural action in the world |
| **Track visualization** | Each track is a 3D voxel cube sitting on a rail/conveyor | Tracks are not boring cards — they are objects to discover |
| **Prize as treasure** | Prize amounts shown as chests — clicking reveals amounts | Makes prize reveal interactive, not just a number |
| **Sponsor grid with theme** | Sponsor logos sit inside themed frames | Sponsors don't feel like an afterthought |
| **Audio toggle** | Optional background music + hover sound effects | Opt-in audio enhances atmosphere without forcing it |
| **Multi-level navigation** | Primary nav (pages) + secondary nav (portals/actions) | Important actions (registration, projects) have their own visual track |

### What the reference does poorly (what SAARTHI should avoid)

| Problem | Risk |
|---------|------|
| Heavy reliance on Minecraft-specific aesthetics | Copyright risk + feels derivative |
| Audio plays unexpectedly | Can annoy users — SAARTHI should default audio OFF |
| Navigation is cluttered with 10+ items | Cognitive overload — SAARTHI needs cleaner hierarchy |
| Some sections are slow to paint | 3D overuse creates jank — SAARTHI must budget carefully |
| Creeper companion is a copyrighted character | Must use an entirely original SAARTHI mascot |
| Very dark background everywhere | Readability suffers — SAARTHI needs better contrast management |

---

## 3. Product Requirements Analysis

### 3.1 Primary Purpose
The SAARTHI hackathon website is the **primary digital presence** of the event. Its purpose is:
1. Inform potential participants about the event
2. Convert visitors into registered participants
3. Build credibility with sponsors, judges, and mentors
4. Create excitement and brand identity for SAARTHI

### 3.2 Target Users

| User Type | Primary Need | Secondary Need |
|-----------|-------------|----------------|
| **Potential participant (student)** | "Is this worth attending? Can I register?" | Tracks, prizes, timeline |
| **Team captain** | "How do I register my team?" | Rules, eligibility, problem statements |
| **Sponsor/Partner** | "Is this event credible?" | Past stats, organizer info, sponsorship tiers |
| **Judge/Mentor** | "What is this event about?" | Schedule, tracks, organizer contact |
| **Faculty/College admin** | "Can I endorse this?" | Organizer legitimacy, venue, timeline |

### 3.3 Primary User Journeys

**Journey A — Participant Conversion (most important)**
```
Land on hero → Understand the event → See prizes/tracks → Check timeline → Register
```

**Journey B — Information Seeker**
```
Land on hero → Navigate to specific section → FAQ → Contact
```

**Journey C — Sponsor/Institutional**
```
Land on hero → About → Stats → Judges/Sponsors → Contact
```

### 3.4 Primary Conversion Action
**Register for the hackathon.** Every section should reinforce this.

### 3.5 Information Hierarchy

Priority order for a first-time visitor:
1. What is SAARTHI? (event identity)
2. When/Where? (feasibility check)
3. What are the tracks/themes? (relevance check)
4. What can I win? (motivation)
5. Who else is involved? (credibility check)
6. How do I register? (conversion)
7. Rules + FAQ (due diligence)

### 3.6 Missing Information (requires input from organizer)
The following content is **unknown** and must be provided before the content phase:
- Event date and venue
- Prize amounts and categories
- Hackathon tracks/themes
- Team size limits
- Eligibility criteria
- Judges/mentors list
- Sponsors list
- Problem statements (if any)
- Registration platform (Devfolio / custom / Google Forms)
- Total estimated participants

**Approach**: During development, clearly marked placeholder content will be used. A `src/data/` content layer will allow non-technical organizers to update content without touching components.

---

## 4. Information Architecture

### Recommended Page Structure: Single-Page Application

**Rationale**: A hackathon website is a focused marketing/information product. A single scroll journey creates better narrative flow than multi-page navigation. Secondary pages (FAQ, Rules) can be separate routes but share the same visual system.

### Sections (in scroll order)

| # | Section | Reason for inclusion | Priority |
|---|---------|---------------------|----------|
| 1 | **Hero** | First impression + primary CTA. Non-negotiable. | Critical |
| 2 | **About** | Answers "what is SAARTHI?" immediately. Establishes identity. | Critical |
| 3 | **Stats / Social Proof** | Short stat bar (participants, countries, prize pool, editions). Builds credibility fast. | High |
| 4 | **Tracks** | Core decision factor for participants. Which track fits me? | Critical |
| 5 | **Timeline** | Answers "when is this?" — prevents registrations from dropping off. | Critical |
| 6 | **Prizes** | Strong motivator. Visual impact matters here. | High |
| 7 | **Judges / Mentors** | Builds credibility with participants and institutions. | Medium |
| 8 | **Sponsors** | Required for sponsor relationships. Kept lean. | Medium |
| 9 | **FAQ** | Reduces support burden. Addresses common drop-off objections. | High |
| 10 | **Footer + Contact** | Navigation, social links, organizer contact. | High |

### Sections deliberately NOT included

| Section | Reason |
|---------|--------|
| **Problem Statements** | Often released late — add dynamically once known, not at launch |
| **Gallery** | No past content yet for a new/current edition — creates empty sections |
| **Rules** | Content too dense for inline display — linked PDF or dedicated `/rules` route |
| **Why Participate** | Absorbed into About and Prizes sections — avoids redundant section |
| **Registration form** | Should redirect to platform (Devfolio/custom) — inline forms create security/UX complexity |

### Navigation Structure

```
[Logo]    [About] [Tracks] [Timeline] [Prizes] [FAQ]    [Register →]
```

- Sticky navbar that becomes frosted-glass on scroll
- On mobile: hamburger that opens a full-screen themed menu
- "Register" is always styled as the primary action button — never hidden in dropdown
- Active section highlight via scroll spy

### Routes

| Route | Content |
|-------|---------|
| `/` | Main single-page experience |
| `/rules` | Full rules document (Markdown rendered) |
| `/faq` | Expanded FAQ page |
| `404` | Themed not-found page |

---

## 5. Visual Concept

### 5.1 The SAARTHI Identity

**SAARTHI** means "charioteer" or "guide" in Hindi — the one who leads you through the journey. This creates an original concept that is **distinctly Indian, distinctly forward-looking**, and entirely separate from any game franchise.

### 5.2 Visual Metaphor: The Digital Circuit-World

The world of SAARTHI is a **neon-lit, floating voxel city suspended in cyberspace** — like a civilization built from code blocks, floating on a grid of light. Think:

- Circuit boards as terrain
- Glowing neon edges on block structures
- A starfield / particle field as the sky
- Data streams flowing between structures like rivers of light
- Everything is precise, geometric, modular — like good code itself

This is distinctly **not Minecraft**. It is:
- More architectural, less natural
- Neon-lit, not grass-and-dirt
- Futuristic, not medieval fantasy
- Cyberpunk meets isometric digital city

### 5.3 Color Direction

```
Primary background:    #070B14  (deep space navy — not pure black)
Secondary background:  #0D1526  (slightly lighter — card surfaces)
Primary accent:        #00F5FF  (electric cyan — "data stream" color)
Secondary accent:      #7B2FFF  (deep violet — "power" color)
Tertiary accent:       #FF6B35  (ember orange — "energy" — used sparingly)
Success/highlight:     #00FF88  (neon green — "online/active" indicator)
Text primary:          #E8F4F8  (near white with slight blue tint)
Text secondary:        #8BA7BC  (muted blue-grey)
Border/glow:           rgba(0, 245, 255, 0.3) (subtle cyan glow)
```

**Palette rationale**: The cyan+violet combination creates a distinctive "digital realm" feel without copying any existing brand. Orange provides warm contrast for CTAs. The palette has enough contrast for accessibility while feeling premium and futuristic.

### 5.4 Typography Direction

| Role | Font | Variant | Use |
|------|------|---------|-----|
| Display / Hero | **Space Grotesk** | Bold 700 | Section headings, hero title |
| UI / Body | **Inter** | 400/500/600 | All body text, nav, cards |
| Code / Accent | **JetBrains Mono** | 400/700 | Stats, countdown, terminal-style elements |
| Pixel accent (optional) | **Press Start 2P** | 400 | Small decorative labels — used minimally |

**Rationale**: Space Grotesk has geometric, slightly futuristic letterforms. Inter is the gold standard for UI readability. JetBrains Mono reinforces the "digital/code" world. Press Start 2P is used *minimally* for themed flavor — not as the primary font — avoiding the trap of making everything hard to read.

### 5.5 Component Visual Language

**Buttons**
- Primary: Solid cyan background, dark text, subtle glow shadow, 4px rounded corners
- Secondary: Transparent with 1px cyan border, cyan text, glow on hover
- Hover state: `scale(1.03)` + increased glow — 200ms ease
- Active state: `scale(0.97)` — tactile feel

**Cards**
- Background: `#0D1526` with 1px cyan border at 30% opacity
- On hover: border glows brighter, subtle Y translate (-4px)
- Corner decoration: small pixel-style bracket `⌐ ¬` in CSS
- Glow shadows instead of standard drop shadows

**Navigation**
- Frosted glass on scroll (backdrop-filter blur)
- Thin 1px bottom border in cyan at 20% opacity
- Active link: animated underline glow
- Logo: SAARTHI wordmark + small voxel icon (CSS/SVG)

**Section Headings**
- All-caps label above in `JetBrains Mono` (e.g. `// ABOUT`)
- Large display heading in `Space Grotesk Bold`
- Subtle animated underline in cyan gradient

**Borders and Section Separation**
- No hard horizontal rules between sections
- Use gradient fades into background color
- Voxel/block "terrain" SVG silhouette at section transitions

### 5.6 Animation Language

| Animation type | Technique | Duration | Purpose |
|----------------|-----------|----------|---------|
| Scroll entrance | CSS `@keyframes` + `IntersectionObserver` | 400–600ms | Elements build as user scrolls |
| Hero scene | Canvas 2D animation loop | 60fps | Central visual spectacle |
| Hover glow | CSS transition on box-shadow | 200ms | Tactile feedback |
| Counter animation | JS number tween | 1000ms | Stats feel live |
| Typing effect | JS typewriter | Varies | Hero subtitle drama |
| Data stream | CSS linear gradient animation | 3–5s | Background depth |
| Particle field | Canvas 2D | 60fps, minimal | Starfield in hero |
| Section transition | CSS clip-path animation | 400ms | Smooth scroll reveals |

**`prefers-reduced-motion`**: All animations must check this. When enabled, entrance animations become instant, hero scene shows a static pre-rendered image, counters skip to final value.

### 5.7 Loading Experience

1. Immediate: HTML skeleton with CSS renders (background color, nav, hero text) — no blank screen
2. Phase 1 (0–500ms): SAARTHI logo fades in with glow animation (pure CSS)
3. Phase 2 (500ms–2s): Canvas hero scene loads asynchronously in background
4. Phase 3 (2s+): Hero scene fades in, replacing the static placeholder
5. Fallback: If Canvas fails, the static hero image persists — no broken experience

---

## 6. Hero Experience Design

### Concept A — "Circuit City Descent"

**What the user sees:**
A top-down isometric voxel city made of glowing circuit-board blocks slowly rotating. The city floats on a starfield. "SAARTHI" appears in large Space Grotesk type above. Below: event tagline types character-by-character. Two CTAs: `[Register Now]` and `[Learn More ↓]`.

**Interaction:** Mouse movement tilts the isometric view (parallax). Hovering the city increases circuit glow intensity. Scrolling initiates a "zoom into the city" effect.

**Technical implementation:** Canvas 2D. Isometric cubes drawn procedurally. Tilt via `mousemove`. Particle system (~100 particles max).

**Performance cost:** Medium. Canvas 2D at 60fps. On mobile, replaced with static WebP + CSS animation.

---

### Concept B — "Command Center"

**What the user sees:**
Split-screen hero. Left: large "SAARTHI" wordmark with animated glitch effect + event metadata. Right: a terminal/console UI that types out key event parameters — location, prize pool, duration. A voxel robot mascot (the "Saarthi Guide") stands at lower-right.

**Technical implementation:** 100% CSS + JS DOM. No Canvas. No 3D. Extremely fast, reliable, accessible.

**Performance cost:** Very low. Pure CSS animations + minimal JS.

---

### Concept C — "The Portal" (Recommended)

**What the user sees:**
Centered hero: a glowing voxel hexagonal portal that pulses and rotates. The portal "opens" as the page loads. Text overlays: "SAARTHI" above the portal, event tagline below, `[Enter the Hackathon →]` as the primary CTA below the portal. Floating block fragments drift slowly in background.

**Interaction:**
- Hovering the portal increases glow and rotation speed
- Clicking "Enter" triggers a brief portal expansion before scroll-to-about
- Background: floating block fragments drift slowly (CSS + SVG)

**Animation:**
- Portal ring rotation (CSS transform)
- Glow pulse (CSS box-shadow animation)
- Block particle drift (CSS animation on SVG elements)
- Portal open on load (CSS clip-path reveal)

**Technical implementation:** SVG portal + CSS animations. Canvas 2D for particle field (optional enhancement).

**Performance cost:** Low-Medium. SVG + CSS. Mobile-friendly.

**Mobile behavior:** Portal scales down. Same experience, smaller canvas. Works well.

---

### Recommended: Concept C — The Portal (with particle field from A)

**Recommendation:** Concept C with the circuit-world particle field from Concept A.

**Why:**
- The portal metaphor directly ties to "entering the digital world of SAARTHI" — perfectly aligned with the "charioteer guides you through the journey" brand meaning
- Technically achievable with SVG + CSS — no WebGL risk
- The `[Enter the Hackathon]` CTA is thematically perfect
- Original — not a Minecraft trapping, it's a universal digital mythology symbol
- Lower performance cost than Concept A's full Canvas scene

**Tradeoffs:**
- Less "world-building" detail than Concept A
- Requires skilled CSS/SVG execution to not look cheap

**Risk:** Portal must be executed with high quality. Mitigate: prototype the portal component standalone before committing.

**Validation:** Build the portal component in isolation. Test on iOS Safari and Chrome Android. Test with `prefers-reduced-motion`.

---

## 7. 3D Strategy Evaluation

### Comparison Matrix

| Approach | Visual Quality | Dev Complexity | Performance | Mobile | A11y | Bundle Size | Loading |
|----------|---------------|----------------|-------------|--------|------|-------------|---------|
| A — CSS/DOM | Medium | Low | Excellent | Excellent | Excellent | Minimal | Instant |
| B — Canvas 2D | High | Medium | Good | Good | Fair | Minimal | Fast |
| C — Three.js | Very High | High | Fair | Fair | Poor | +600KB+ | Slow |
| D — React Three Fiber | Very High | Very High | Fair | Poor | Poor | +900KB+ | Very Slow |
| E — Pre-rendered assets | Very High | Low | Excellent | Excellent | Excellent | Medium (images) | Fast |
| F — Hybrid (CSS+SVG+Canvas) | High | Medium | Good | Good | Good | Minimal | Fast |

### Analysis

**Three.js / React Three Fiber:**
Three.js adds 600KB+ (minified) to the bundle. For a hackathon website with a short lifecycle, the maintenance burden and performance cost are not justified, especially since the site needs to perform well on budget Android devices common among student participants in India.

Key insight: Most of what makes the reference site visually impressive is CSS + 2D canvas + sprite-based assets, not true 3D. The "3D voxel" track cubes are likely rendered sprites or CSS `perspective()` tricks.

**Canvas 2D:**
Sufficient for the voxel aesthetic. Isometric cubes, particle systems, and glowing effects are all achievable in Canvas 2D without any framework. Works across all browsers. Accessible with proper `aria-label`.

### Recommended: Option F — Hybrid (CSS + SVG + Canvas 2D)

**Recommendation:**
- Hero: Canvas 2D for the portal/particle scene + CSS animations
- Section backgrounds: CSS animations (isometric grid, data streams)
- Track cards: CSS `perspective()` + `transform: rotateX/Y` for pseudo-3D
- Prize podium: SVG isometric illustration
- Terrain transitions: SVG path silhouettes
- **No Three.js. No React Three Fiber. No WebGL.**

**Why:** Achieves 85–90% of the visual quality of a Three.js solution at 20% of the complexity. No large dependency. Fallback is trivial. Excellent mobile performance.

**Tradeoffs:** Cannot do true camera movement through a 3D world. More handcrafted work on voxel geometry.

**Risk:** Canvas 2D voxel scenes can look amateurish if not carefully executed. Build a prototype first.

**Validation:** Build the portal hero component standalone. Test on iPhone Safari, Chrome Android. Check Lighthouse score.

---

## 8. Technical Architecture

### 8.1 Frontend Architecture

**Recommendation: React 18 + Vite + TypeScript**

| Decision | Choice | Reason |
|----------|--------|--------|
| Framework | React 18 | Componentization, ecosystem, widespread team familiarity |
| Build tool | Vite | Fast HMR, excellent code splitting, minimal config |
| Language | TypeScript | Catches content/prop errors early, safer data layer |
| Styling | CSS Modules + CSS custom properties | Scoped styles, design token system, zero runtime cost |
| State management | React useState + useContext | No Redux needed — site is not application-complex |
| Routing | React Router v6 | Simple SPA routing for `/`, `/rules`, `/faq`, `404` |
| Animation | CSS animations + IntersectionObserver | CSS handles 90% — avoids adding a heavy animation library |

> Challenge to Framer Motion: Before adding it, evaluate whether CSS-only `IntersectionObserver` + `@keyframes` can handle scroll entrance animations. If yes, skip Framer Motion entirely and save ~40KB gzipped.

### 8.2 Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollProgress.tsx
│   ├── hero/
│   │   ├── HeroSection.tsx
│   │   ├── PortalCanvas.tsx         (Canvas 2D portal scene)
│   │   └── HeroText.tsx
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── TracksSection.tsx
│   │   ├── TimelineSection.tsx
│   │   ├── PrizesSection.tsx
│   │   ├── JudgesSection.tsx
│   │   ├── SponsorsSection.tsx
│   │   └── FAQSection.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── CounterStat.tsx
│   │   └── Accordion.tsx
│   └── voxel/
│       ├── VoxelCube.tsx            (CSS isometric cube component)
│       ├── TerrainDivider.tsx       (SVG terrain silhouette)
│       └── ParticleField.tsx        (Canvas particle system)
├── pages/
│   ├── Home.tsx
│   ├── Rules.tsx
│   └── FAQ.tsx
├── hooks/
│   ├── useScrollSpy.ts              (Track active section)
│   ├── useIntersectionObserver.ts   (Scroll entrance trigger)
│   ├── useReducedMotion.ts          (prefers-reduced-motion)
│   └── useCounterAnimation.ts       (Animated number counters)
├── data/
│   ├── tracks.ts                    (Event content — easily updated)
│   ├── timeline.ts
│   ├── prizes.ts
│   ├── judges.ts
│   ├── sponsors.ts
│   └── faq.ts
├── assets/
│   ├── images/                      (WebP images, optimized)
│   ├── icons/                       (SVG icon components)
│   └── fonts/                       (Self-hosted fonts)
├── styles/
│   ├── globals.css                  (CSS reset + global tokens)
│   ├── tokens.css                   (Design token custom properties)
│   └── animations.css               (Shared keyframe animations)
└── utils/
    ├── canvas.ts                    (Canvas drawing helpers)
    └── math.ts                      (Isometric projection utils)
```

### 8.3 Content/Data Architecture

All event-specific content lives in `src/data/` as TypeScript objects. This achieves:
- Easy updates without touching component code
- Type safety (no missing fields)
- Easy migration to a CMS later if needed

Example:
```typescript
// src/data/tracks.ts
export interface Track {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
}

export const tracks: Track[] = [
  // populated by organizer
];
```

### 8.4 Registration Architecture

**Recommendation: Link to external registration platform (Devfolio or similar).**

Devfolio handles team management, eligibility, duplicate detection, email confirmations — all of which are hard to build securely. Reduces backend complexity to zero for registration. Participants are familiar with Devfolio.

If a custom registration form is required later, it would need a backend API, database, rate limiting, and email confirmation — a Phase 6 decision.

### 8.5 Backend Architecture

**Current recommendation: No backend.**

The site is a static marketing site. Built with `npm run build`, deployed as static files, served via CDN. Contact can be a mailto link or Formspree/Netlify Forms.

### 8.6 Deployment Architecture

**Recommendation: Vercel (free tier for static sites)**

| Property | Value |
|----------|-------|
| Hosting | Vercel free tier |
| CDN | Vercel Edge Network (global) |
| CI/CD | Git push → automatic deploy |
| Preview URLs | Per-PR preview deployments |
| HTTPS | Automatic (Let's Encrypt) |

---

## 9. Performance Strategy

### Measurable Goals

| Metric | Target | Rationale |
|--------|--------|-----------|
| LCP (Largest Contentful Paint) | < 2.5s | Core Web Vital green zone |
| INP | < 100ms | Interaction responsiveness |
| CLS | < 0.1 | No layout shifts on load |
| Lighthouse Performance | ≥ 90 | Desktop and mobile |
| Total JS bundle (gzipped) | < 150KB | No Three.js = achievable |
| Total page weight | < 2MB | Reasonable on 4G mobile |
| Time to Interactive | < 3.5s on 3G | Student devices in India |

### Strategies

| Strategy | Implementation |
|----------|----------------|
| Font loading | Self-host fonts with `font-display: swap`. Preload critical fonts in `<head>`. |
| Image optimization | All images in WebP. Use `<picture>` with srcset. Pre-optimize with Squoosh. |
| Canvas lazy loading | Hero Canvas loads after first paint. Static WebP placeholder shown immediately. |
| Code splitting | React Router lazy loads each route. |
| No unnecessary deps | No animation library, no UI kit, no heavy charting libs. |
| SVG inline | Critical SVGs inlined to eliminate network requests. |
| Preconnect | `<link rel="preconnect">` for any external resource. |

### Mobile-specific

- Canvas scene replaced with static WebP on `max-width: 768px` (via `matchMedia` in JS)
- Detect `prefers-reduced-motion` AND slow connection (`navigator.connection.effectiveType < 4g`) to disable heavy animations
- Font subset: Latin character sets only

### Low-end device fallback

- If Canvas context fails to initialize: show static hero image
- If JS fails entirely: page renders all content (no JS-only content gates)
- CSS animations must work without JS — JS only enhances them

---

## 10. Responsive Strategy

### Breakpoint System

```css
--bp-mobile:  375px   /* Small phones */
--bp-sm:      480px   /* Large phones */
--bp-md:      768px   /* Tablets */
--bp-lg:     1024px   /* Laptops */
--bp-xl:     1280px   /* Desktops */
--bp-2xl:    1536px   /* Large monitors */
```

### Design per Viewport

**Desktop (≥1024px)**
- Full hero with Canvas portal scene
- Multi-column layouts (tracks: 3-col, judges: 4-col)
- Navigation full horizontal

**Tablet (768–1023px)**
- Canvas hero still active (reduced particle count)
- Tracks: 2-column grid
- Navigation: horizontal, condensed

**Mobile (< 768px)**
- Canvas hero replaced with static WebP + CSS float/glow animation
- All layouts stack vertically
- Navigation: hamburger → full-screen overlay menu
- Tracks: single column, swipeable carousel
- Timeline: vertical step-by-step list
- Touch targets: minimum 44×44px
- Minimum body font: 16px

**Key rule:** Every interactive element must be touch-accessible. No hover-only information revelation.

---

## 11. Accessibility + SEO Requirements

### Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| WCAG 2.1 AA contrast | Verify all text/background pairs. Cyan on dark navy must hit 4.5:1 ratio. |
| Keyboard navigation | Tab order is logical. All interactive elements reachable by keyboard. Custom focus rings in cyan. |
| Screen reader | Canvas has `aria-label`. All images have alt text. Decorative SVG icons have `aria-hidden`. |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` disables all keyframe animations, Canvas paused. |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section aria-label="...">`, `<footer>`. One `<h1>` per page. |
| Skip link | "Skip to main content" link as first focusable element |
| Form labels | Any input/form has associated `<label>` |
| Color not sole indicator | Don't rely on color alone to convey status |

### SEO Requirements

| Requirement | Implementation |
|-------------|----------------|
| Title tag | `<title>SAARTHI Hackathon 2026 — [Tagline]</title>` |
| Meta description | 150–160 char summary with event date and value prop |
| Open Graph | `og:title`, `og:description`, `og:image` (1200×630), `og:url` |
| Twitter Card | `twitter:card`, `twitter:image`, `twitter:title` |
| Structured Data | JSON-LD Event schema with date, location, organizer |
| Heading hierarchy | h1 → h2 per section → h3 for cards |
| Sitemap | `sitemap.xml` for multi-page routes |
| Page speed | Indirectly affects SEO — target Lighthouse ≥ 90 |
| Favicon | SVG favicon + PNG fallbacks at 16, 32, 192, 512px |

---

## 12. Risk / Pre-Mortem

> Assume SAARTHI's website was a failure before the hackathon. What most likely caused it?

### Risk 1: Canvas/Animation performance tanked on mobile

| Field | Detail |
|-------|--------|
| **Risk** | The voxel animations cause jank (< 30fps) on budget Android devices common among student participants in India. |
| **Probability** | High (if Canvas is not carefully budgeted) |
| **Impact** | Critical — poor first impression destroys the "premium digital world" concept |
| **Mitigation** | Explicit mobile breakpoint to replace Canvas with static image. Particle count capped. Test on low-end device emulation in Chrome DevTools (CPU 4x slowdown). |
| **Validation** | Run Lighthouse on emulated Moto G4 before launch. Target ≥ 80 mobile score. |

### Risk 2: Content was never filled in — sections showed placeholder text at launch

| Field | Detail |
|-------|--------|
| **Risk** | Organizers don't provide tracks, prizes, judges, sponsors in time. Site launches with placeholder content everywhere. |
| **Probability** | High (common for hackathons) |
| **Impact** | High — undermines credibility, damages trust |
| **Mitigation** | Design all sections to gracefully show "Coming Soon" states — not empty boxes. Implement content in `src/data/` so any team member can update it with a PR. Create clear content deadlines. |
| **Validation** | Test each section in the "empty data" state before launch. |

### Risk 3: The 3D/animation work took too long — functional sections were rushed

| Field | Detail |
|-------|--------|
| **Risk** | Team spent 3 weeks perfecting the hero portal and ran out of time to implement Tracks, Timeline, FAQ properly. |
| **Probability** | Medium |
| **Impact** | High — a beautiful hero with broken sections is worse than a simple site with complete information |
| **Mitigation** | Phase 3 (core sections) before Phase 4 (hero/animations). Core content sections must be complete and tested before any animation work begins. |
| **Validation** | Gate Phase 4 on Phase 3 sign-off. |

### Risk 4: Registration link broke / was wrong at the worst moment

| Field | Detail |
|-------|--------|
| **Risk** | The "Register Now" button points to a wrong URL during peak traffic (when announcement goes viral). |
| **Probability** | Medium |
| **Impact** | Critical — direct loss of participants |
| **Mitigation** | Registration CTA URL is a single constant in `src/config.ts`. Easy to update and redeploy (Vercel deploys in < 60s). |
| **Validation** | Manual verification 24h before each promotion event (social post, email blast). |

### Risk 5: The website broke on iOS Safari

| Field | Detail |
|-------|--------|
| **Risk** | CSS features like `backdrop-filter`, `clip-path` have varying support on iOS Safari. Animations fail. Layout breaks. |
| **Probability** | Medium |
| **Impact** | High — a significant portion of student users are on iPhones |
| **Mitigation** | Test on actual iOS Safari from Phase 1. Use `@supports` for experimental CSS. Progressive enhancement throughout. |
| **Validation** | Manual testing on iOS Safari 16+ at each phase completion. |

---

## 13. Implementation Roadmap

### Phase 0 — Discovery (Current)
- [x] Read AGENTS.md
- [x] Inspect repository
- [x] Study reference site
- [x] Define product requirements
- [x] Define information architecture
- [x] Define visual concept
- [x] Define technical architecture
- [x] Create this planning document
- [ ] **Await user approval**

---

### Phase 1 — Foundation
**Goal:** Scaffold the project correctly. Get a working, deployable shell.

- Initialize Vite + React + TypeScript project
- Configure ESLint + Prettier + TypeScript strict mode
- Set up folder structure
- Implement design token system (`tokens.css`)
- Set up CSS reset + global styles
- Configure React Router v6 with placeholder routes
- Configure Vite for image optimization
- Set up font imports (Space Grotesk, Inter, JetBrains Mono)
- Basic `index.html` with SEO meta tags + OG tags
- Verify build succeeds and deploys to Vercel preview

**Exit criteria:** `npm run build` succeeds. Empty page deploys to Vercel preview URL.

---

### Phase 2 — Design System
**Goal:** Build all reusable UI components before any page-level work.

- `Button` component (primary, secondary, ghost variants)
- `Card` component with glow hover
- `SectionHeading` component with animated underline
- `Navbar` (responsive, scroll-spy-ready, hamburger on mobile)
- `Footer`
- `Accordion` (for FAQ)
- `CounterStat` (animated number)
- `VoxelCube` (CSS isometric block)
- `TerrainDivider` (SVG section separator)
- `ScrollEntranceWrapper` (IntersectionObserver entrance animation)
- Internal component review page (`/dev`) — not shipped

**Exit criteria:** All components visible in `/dev` page. Responsive. Keyboard-accessible.

---

### Phase 3 — Core Website
**Goal:** Implement all content sections with placeholder data. Site is fully navigable, even without animations.

- `HeroSection` — static version (no Canvas yet)
- `AboutSection`
- `StatsBar` — 4 animated counters
- `TracksSection`
- `TimelineSection`
- `PrizesSection`
- `JudgesSection`
- `SponsorsSection`
- `FAQSection`
- `/rules` page
- `/faq` page
- `404` page

**Exit criteria:** Full page renders on desktop + mobile. All sections complete with placeholder data. Lighthouse ≥ 90 performance without animations.

---

### Phase 4 — Interactive / Visual Experience
**Goal:** Layer the SAARTHI visual identity on top of the functional foundation.

- Implement `PortalCanvas` — hero portal in Canvas 2D
- Implement `ParticleField` — starfield background
- Isometric grid background CSS
- Scroll entrance animations on all sections
- Terrain/voxel section dividers
- CSS perspective track cards
- Prize animation (CSS + SVG)
- Counter animation on scroll
- Hover states and micro-interactions
- Mobile static hero fallback
- `prefers-reduced-motion` behavior throughout

**Exit criteria:** Full visual experience works on desktop + mobile. Lighthouse ≥ 85 mobile with animations.

---

### Phase 5 — Content Population
**Goal:** Replace placeholder content with real event information.

- Populate `src/data/` with actual tracks, timeline, prizes, judges, sponsors
- Generate actual assets (mascot if desired, track icons)
- Finalize registration link
- Update SEO metadata with real event details
- Finalize Open Graph image

**Exit criteria:** No placeholder content visible on the site.

---

### Phase 6 — Registration / Backend (conditional)
**Goal:** Only execute if a custom registration flow is required.

- If using Devfolio: verify the link is live (Phase 6 is very short)
- If custom form needed: design and implement backend API (Node.js, database, rate limiting, email confirmation)

**Decision gate:** Confirm with organizer whether Devfolio will be used before starting this phase.

---

### Phase 7 — Responsive + Accessibility Audit
**Goal:** Systematic verification.

- Test every section at all breakpoints (375, 768, 1024, 1440px)
- Manual keyboard navigation test — every interactive element
- Test with screen reader (NVDA or VoiceOver)
- Verify color contrast ratios for all text/background pairs
- Test with `prefers-reduced-motion` enabled
- Test on actual iOS Safari
- Test on Android Chrome (mid-range device or DevTools emulation)

**Exit criteria:** WCAG 2.1 AA for all critical flows. Lighthouse Accessibility ≥ 95.

---

### Phase 8 — Performance Optimization
**Goal:** Measure and fix performance bottlenecks.

- Run Lighthouse on desktop and mobile
- Optimize any images > 100KB
- Audit unused CSS
- Verify no render-blocking resources
- Verify font loading doesn't cause FOUT
- Verify no layout shifts (CLS)
- Check bundle size

**Exit criteria:** Desktop Lighthouse ≥ 95. Mobile ≥ 85.

---

### Phase 9 — QA
**Goal:** Systematic quality assurance before launch.

- Cross-browser: Chrome, Firefox, Safari, Edge
- Cross-device: Desktop, tablet, mobile (iOS + Android)
- All links functional (including registration CTA)
- All navigation anchors correct
- 404 page works
- No console errors
- SEO: valid structured data, correct meta tags
- Social sharing preview (OG image + title)

**Exit criteria:** Zero critical bugs. Zero broken links.

---

### Phase 10 — Deployment
**Goal:** Ship to production.

- Configure custom domain on Vercel
- Verify HTTPS works
- Submit sitemap to Google Search Console
- Share preview URL with organizer for final review
- Tag v1.0.0 in git
- Monitor analytics (Vercel Analytics or Plausible — privacy-first)

---

## 14. Open Questions

> These questions materially affect implementation. Please answer before Phase 1 begins.

| # | Question | Why it matters |
|---|----------|----------------|
| Q1 | **What is the event date, venue, and duration?** | Timeline section, SEO metadata, hero subtext |
| Q2 | **What are the hackathon tracks/themes?** | TracksSection data, track icons, track colors |
| Q3 | **What are the prize amounts and categories?** | PrizesSection design — number of tiers affects layout |
| Q4 | **Is registration handled by Devfolio, a custom form, or something else?** | Determines if a backend is needed — major scope change |
| Q5 | **Is there an existing domain name?** | Affects deployment configuration |
| Q6 | **Are there existing brand colors or a logo that must be used?** | May constrain the visual concept |
| Q7 | **What is the expected participant count / total editions held?** | Stats bar content |
| Q8 | **Will there be a mascot / companion character?** | Affects hero and sidebar scope |
| Q9 | **Is this a 24h, 36h, or 48h hackathon?** | Timeline design — a 24h event has a different structure |
| Q10 | **Do you want optional ambient music / sound effects?** | Audio implementation is non-trivial — worth doing only if desired |

---

## 15. Executive Summary

### Recommended Architecture
React 18 + Vite + TypeScript. Single-page application with React Router for `/rules` and `/faq` sub-pages. No backend. Static deployment via Vercel. Content in `src/data/` TypeScript files.

### Recommended Visual Direction
**"The Digital Circuit-World"** — An original SAARTHI identity: neon-lit voxel structures floating in cyberspace. Deep space navy background, electric cyan + deep violet + ember orange accent palette. Space Grotesk display type. Modular, architectural block language. Futuristic and technological — distinctly not Minecraft.

### Recommended 3D Strategy
**Hybrid: CSS + SVG + Canvas 2D.** No Three.js. No React Three Fiber. The hero uses Canvas 2D for the portal/particle scene. All other "3D" effects use CSS `perspective()` and SVG. Mobile replaces Canvas with a static WebP. Achieves ~85% of the visual impact at 20% of the complexity and performance cost.

### Recommended Page Structure
Single page (scroll-based narrative). 9 sections in order: Hero → About → Stats → Tracks → Timeline → Prizes → Judges → Sponsors → FAQ → Footer. Sub-pages: `/rules`, `/faq`, `404`.

### Recommended Technology Stack

| Layer | Technology |
|-------|-----------|
| Frontend framework | React 18 |
| Build tool | Vite |
| Language | TypeScript |
| Styling | CSS Modules + CSS custom properties |
| Routing | React Router v6 |
| Animation | CSS animations + IntersectionObserver |
| 2D graphics | Canvas 2D API (native) |
| Vector graphics | SVG (inline) |
| Hosting | Vercel (free tier) |
| CI/CD | Vercel Git integration |
| Fonts | Space Grotesk + Inter + JetBrains Mono (self-hosted) |

### Major Risks
1. Mobile Canvas performance → Mitigate with static WebP fallback at < 768px
2. Content never populated → Mitigate with `src/data/` content layer + "Coming Soon" states
3. Animations prioritized over content → Mitigate by gating Phase 4 on Phase 3 completion
4. Registration link broken at peak traffic → Mitigate with single config constant + pre-launch verification
5. iOS Safari compatibility → Mitigate with progressive enhancement + early testing on actual devices

### Implementation Phases

```
Phase 0   Discovery + Planning          (current — awaiting approval)
Phase 1   Foundation (Vite scaffold)    ~1 day
Phase 2   Design System                 ~2 days
Phase 3   Core Content Sections         ~3 days
Phase 4   Visual / Interactive Layer    ~3 days
Phase 5   Real Content Population       ~1 day (depends on organizer)
Phase 6   Registration / Backend        ~1–3 days (conditional)
Phase 7   Responsive + A11y Audit       ~1 day
Phase 8   Performance Optimization      ~1 day
Phase 9   QA                            ~1 day
Phase 10  Deployment                    ~0.5 days
```

**Total estimated development time:** ~14–17 days, assuming content is provided promptly by the organizer.

---

> **Awaiting approval.** Please review Section 14 (Open Questions) and provide any feedback on the architecture, visual concept, or page structure before implementation begins.
