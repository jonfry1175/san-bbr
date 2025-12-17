# SAN & BBR Platform

Vite + React + TypeScript + Tailwind CSS with shadcn/ui.

This platform serves as the digital presence for two entities:
- **PT SINERGY AGTER NUSANTARA** (Rental Alat Berat)
- **PT BUMI BLAMBANGAN RESOURCES** (Jasa Konstruksi Tambang)

## Brand color (primary)

Primary color is designed to be editable from `tailwind.config.ts` (single source of truth). See the `brand.primary` value there.

## Quick Start

Prerequisites:

- Node.js 18+ and npm (recommended install via nvm)

Install and run locally:

```sh
npm i
npm run dev
```

The app runs on `http://localhost:8080` (see `vite.config.ts`).

Common scripts:

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run build:dev` — development-mode build (faster, labeled bundles)
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over `src/`

## Project Structure

Source lives in `src/`:

- `src/components/` — feature sections and composed UI
- `src/components/ui/` — shadcn/ui primitives
- `src/pages/` — route pages (React Router)
- `src/hooks/` — reusable hooks
- `src/lib/` — utilities, data helpers
- `src/assets/` — local images and assets
- Entry points: `src/main.tsx`, `src/App.tsx`
- Styles: `src/index.css`, `src/App.css`

Public assets: `public/`

Tooling:

- `vite.config.ts` — dev server on port 8080; alias `@` → `src`
- `tailwind.config.ts`, `eslint.config.js`, `tsconfig*.json`

## Conventions

- Language: TypeScript + React function components
- Indentation: 2 spaces; prefer named exports
- Filenames: components `PascalCase.tsx`; hooks `use-*.ts`; utils `camelCase.ts`
- Imports: use `@/` alias (e.g., `import { Button } from "@/components/ui/button"`)
- UI: favor shadcn/ui primitives in `src/components/ui/` and compose higher-level pieces in `src/components/`
- Linting: ESLint (TS recommended, React Hooks, React Refresh). Fix warnings before PRs

## Environment & Security

- Environment variables must be prefixed with `VITE_`
- Store local env in `.env.local` (do not commit secrets)
- Place large images in `public/` or `src/assets/` (avoid large inline data)

## Testing

No test runner is configured yet. Recommended stack:

- Vitest + React Testing Library
- Co-locate tests as `*.test.ts(x)` next to sources or in `__tests__/`

## Development Tips

- Use `npm run build:dev` for faster development builds when needed
- `npm run preview` to verify production output locally

Vercel deployment note:

- This repository includes a `vercel.json` which rewrites all routes to `/index.html` so the single-page app (React Router) won't produce 404s on direct navigation. Build output is expected in the `dist/` directory.

## Contributing

- Use Conventional Commits (e.g., `feat: add hero carousel`, `fix: correct header z-index`)
- PRs: include clear description, link issues, before/after screenshots for UI changes, testing steps, and note breaking changes
- Pre-submit: ensure `npm run lint` and `npm run build` pass
