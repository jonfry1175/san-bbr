# Copilot Instructions — Karya Halim Modern Platform

Purpose: give AI coding agents the minimal, actionable repository knowledge to be productive immediately.

- Quick commands: `npm i`, `npm run dev` (Vite on `http://localhost:8080`), `npm run build`, `npm run build:dev`, `npm run preview`, `npm run lint`.

- Big picture: Vite + React + TypeScript SPA using Tailwind CSS + shadcn/ui. Routes are defined in `src/App.tsx` and wrapped by `src/components/AppLayout.tsx` (Header, Footer, Hero, FloatingWhatsApp).

- Key directories and files to check first:
  - `src/components/` — composed feature components (Header, Footer, HeroSection, etc.)
  - `src/components/ui/` — shadcn/ui primitives (Button, Input, Card, dialog, sheet, etc.). Edit primitives here when changing core UI tokens.
  - `src/pages/` — route pages (lazy-loaded).
  - `src/hooks/` — custom hooks (e.g., `use-hero.ts`, `use-toast.ts`).
  - `src/lib/` — data helpers and adapters (`news.ts`, `projects.ts`, `services.ts`, `whatsapp.ts`).
  - `public/` and `src/assets/` — static images; prefer placing large files in `public/`.
  - `vite.config.ts`, `tailwind.config.ts`, `eslint.config.js`, `vercel.json` — environment, build and deployment details.

- Project conventions (follow exactly):
  - Use the `@/` alias for imports from `src` (example: `import { Button } from "@/components/ui/button"`).
  - Components: PascalCase filenames `ComponentName.tsx`, prefer named exports.
  - Hooks: `useSomething.ts` naming pattern.
  - Utilities: `camelCase.ts`.
  - Indentation: 2 spaces; TypeScript strict settings enabled.
  - Styling: Tailwind CSS with design tokens in `tailwind.config.ts`; prefer shadcn/ui primitives composed in `src/components/`.

- Architecture & runtime patterns:
  - Routing: React Router v6 with lazy-loaded pages in `src/App.tsx`.
  - State: server-side state and caching use `@tanstack/react-query` — look in `src/lib/` for data adapters.
  - Forms: `react-hook-form` + `zod` for validation (pages like `src/pages/Contact.tsx`).
  - Animations: `framer-motion` is used for page transitions and component animation (check `src/components/MotionSection.tsx`).

- Integration and deployment notes:
  - Vite dev server default port is 8080 (see `vite.config.ts`).
  - `vercel.json` rewrites SPA routes to `/index.html` — verify when changing routing or base paths.
  - Environment variables must be prefixed with `VITE_` and kept in `.env.local` (do not commit secrets).

- Agent behavior rules (must follow):
  - Keep changes scoped; avoid broad refactors or renames unless requested.
  - Preserve public APIs and import paths; prefer adding new files over moving many files.
  - Always run (or ask user to run) `npm run lint` and `npm run build` after non-trivial changes.
  - Update `AGENTS.md` or `CLAUDE.md` when adding new developer scripts or changing workflows.

- Concrete examples to reference when editing:
  - Edit layout or route wrappers: `src/components/AppLayout.tsx` and `src/App.tsx`.
  - Update hero/provider patterns: `src/components/HeroProvider.tsx` and `src/hooks/use-hero.ts`.
  - Change shared ui primitives: `src/components/ui/button.tsx`, `src/components/ui/card.tsx`, `src/components/ui/dialog.tsx`.
  - Data helpers live in `src/lib/` (e.g., `src/lib/news.ts`, `src/lib/projects.ts`).
  - Email configuration: Use centralized `src/lib/email-config.ts` for all email addresses. Import `PRIMARY_EMAIL`, `SECONDARY_EMAIL`, or `ALL_EMAILS` instead of hardcoding email strings.

- Tests: no test runner configured. Recommended stack: Vitest + React Testing Library; colocate tests next to sources when added.

- PR & commit expectations: use Conventional Commits (`feat:`, `fix:`). PRs must include a clear description, screenshots for UI changes, and pass `npm run lint` and `npm run build` before merging.

If anything in these instructions is unclear or you need more examples from specific files, say which area (layout, UI primitives, data adapters, routing) and I will expand with concrete code excerpts.
