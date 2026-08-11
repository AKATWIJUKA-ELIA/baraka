# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is the marketing/brochure website for Baraka Hotel (Bweyale, Kiryandongo District, Uganda), built with Next.js 16 (App Router), React 19, and TypeScript. It is a single-package repo — no monorepo tooling, no backend service, no database, and no API routes. All "data" (rooms, facilities) is hardcoded as TypeScript constants under `src/lib/`.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next`)

There is no test suite configured (no Jest/Vitest/Playwright, no `test` script) and no CI workflow — validate changes with `npm run lint` and `npm run build`, and check the dev server manually.

## Architecture

- `src/app/` — routes only, following Next.js App Router conventions (`page.tsx`, `layout.tsx`, `loading.tsx`, `not-found.tsx`, `robots.ts`, `sitemap.ts`). Route files are server components: they read `params`, pull data from `src/lib/*-data.ts`, generate SEO `Metadata`, and call `generateStaticParams()` for static generation (SSG) where applicable — e.g. `src/app/rooms/[id]/page.tsx`, `src/app/facilities/[id]/page.tsx`.
- `src/components/` — all UI, in two tiers:
  - Top-level page-section components (`hero.tsx`, `rooms.tsx`, `Restaurant.tsx`, `amenities.tsx`, `testimonials.tsx`, `navBar.tsx`, `footer.tsx`, etc.) composed directly into `src/app/page.tsx`.
  - `src/components/ui/` — shadcn/ui primitives (button, card, dialog, sheet, carousel, dropdown-menu, etc.) on top of Radix UI. Style is "new-york" per `components.json`; base color `neutral`; global CSS at `src/app/globals.css`.
  - "Detail content" components (`RoomDetailContent.tsx`, `FacilityDetailContent.tsx`, `ContactContent.tsx`, `AmenitiesPageContent.tsx`) are `"use client"` — the interactive body of a route, kept separate from the server-rendered `page.tsx` so metadata generation stays server-side while UI state (carousels, menus) lives client-side.
- `src/lib/` — the data layer: `rooms-data.ts` and `facilities-data.ts` export hardcoded arrays (`Room[]`, etc.) plus lookup helpers (`getRoomByClassification`, `getSerializableRoom`, ...). A `SerializableRoom` type strips React-component fields (e.g. `amenityIcons`) before data is passed from a server component into a `"use client"` component, since React elements can't cross that boundary as props. `utils.ts` has the shadcn `cn()` classname helper.

**Typical flow (e.g. a room detail page):** `src/app/rooms/[id]/page.tsx` (server) → looks up the room in `src/lib/rooms-data.ts` → generates metadata + static params → passes serializable data as props to `src/components/RoomDetailContent.tsx` (client) which owns local interactive state (e.g. image carousel index). The same pattern repeats for facilities.

Other notes:
- Path alias `@/*` resolves to `./src/*` (see `tsconfig.json`).
- No global state management (no Redux/Zustand/Context store) — components use local `useState`/`useEffect` only.
- `src/app/layout.tsx` is the app entry point: wraps all routes with `Navigation`/`Footer` and injects site-wide JSON-LD (`@type: Hotel`) structured data for SEO. `sitemap.ts` and `robots.ts` are Next's typed metadata route conventions.
- `gsap` / `@gsap/react` are dependencies but currently unused anywhere in `src/` — don't assume GSAP animations exist yet.
- `next.config.ts` whitelists remote image hosts `images.unsplash.com` and `fra.cloud.appwrite.io`, but no Appwrite SDK is wired into the app currently — images are referenced by URL only.
- `src/components/task.md` is a content/copywriting brief (not code) documenting the intended page-by-page copy for the site — useful for understanding intended content but not imported anywhere.
