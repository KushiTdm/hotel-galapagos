# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Next.js, port 3000)
npm run build    # Production build
npm run lint     # ESLint
npm run start    # Start production server (requires build first)
```

No test suite is configured.

## Stack

- **Next.js 16.2.6** (App Router) — see AGENTS.md: read `node_modules/next/dist/docs/` before writing Next.js code
- **React 19** with TypeScript
- **Tailwind CSS v4** — configured via `@theme` block in `app/globals.css`, no `tailwind.config.js`
- **GSAP 3** + `@gsap/react` for scroll-driven animations
- **Lenis** for smooth scroll, integrated with GSAP ticker in `lib/smoothScroll.tsx`
- **Swiper 12** for the villas carousel

## Architecture

Single-page hotel landing site. All content lives on one route (`app/page.tsx`), assembled from section components rendered top to bottom:

```
Header → HeroSection → ExperienceSplit → VillasSlider →
GalapagosParallax → AtAGlance → FullBleedCTA → LocationMap → Footer
```

`lib/smoothScroll.tsx` is a client wrapper that initialises Lenis and hooks it into `gsap.ticker` so GSAP ScrollTrigger stays in sync. It wraps `<body>` content in `app/layout.tsx`.

`data.json` is a reference file documenting the three villas (Yellow Heron House, Sandy Feet House, Flip Flop House) and site info — it is not imported by the app, only used for content reference.

## Key conventions

**Tailwind v4 theming** — brand tokens are CSS custom properties declared in the `@theme` block in `globals.css`. Use them as Tailwind utilities (e.g. `bg-bronze`, `text-ink`, `bg-cream`). Do not add a `tailwind.config.js`.

**All section components are client components** (`"use client"`) because they use GSAP or browser APIs.

**GSAP pattern** — each component that uses ScrollTrigger calls `gsap.registerPlugin(ScrollTrigger)` at module scope. Animations run inside `useGSAP(() => { ... }, { scope: sectionRef })` (not plain `useEffect`) for proper scoping and cleanup. Every animation block checks `prefers-reduced-motion` and returns early if set.

**Parallax containers** use `inset-[-15%]` or `inset-[-20%]` with `will-change-transform` to give the parallax `yPercent` room to move without revealing edges.

**`.reveal-line` class** is the convention for elements targeted by stagger-in text animations (e.g. in `GalapagosParallax`).

**Layout wrapper** — sections use `max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20` for consistent full-bleed-to-constrained layout.

**Fonts** — `--font-serif` (Cormorant Garamond, loaded via `next/font`) and `--font-sans` (Inter). Use `font-serif` / `font-sans` Tailwind utilities; never hardcode font names.

**Images** — all images are from Unsplash (`images.unsplash.com`), which is allowlisted in `next.config.ts`. Use `next/image` with `fill` + a sized container, or explicit `width`/`height`.
