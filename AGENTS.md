# Repository Guidelines

## Project Structure & Module Organization

- App code lives in `src/`:
  - `src/components/` (feature sections) and `src/components/ui/` (shadcn/ui primitives)
  - `src/pages/`, `src/hooks/`, `src/lib/`, `src/assets/`
  - Entry points: `src/main.tsx`, `src/App.tsx`; styles in `src/index.css`, `src/App.css`
- Public assets: `public/`
- Tooling: `vite.config.ts` (port 8080, `@` alias → `src`), `tailwind.config.ts`, `eslint.config.js`, `tsconfig*.json`

## Build, Test, and Development Commands

- `npm i` — install dependencies
- `npm run dev` — start Vite dev server on `http://localhost:8080`
- `npm run build` — production build to `dist/`
- `npm run build:dev` — development-mode build (useful for faster, labeled bundles)
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over `src/`
- `npm run generate:sitemap` — regenerate `public/sitemap.xml` (runs automatically before `npm run build`)

## Coding Style & Naming Conventions

- Language: TypeScript + React function components.
- Indentation: 2 spaces; prefer named exports.
- Filenames: Components `PascalCase.tsx`; hooks `use-*.ts`; utilities `camelCase.ts`.
- Imports: use `@/` alias for paths inside `src` (e.g., `import { Button } from "@/components/ui/button"`).
- Linting: ESLint (TS recommended, React Hooks, React Refresh). Fix warnings before PRs.
- UI: Prefer shadcn/ui primitives in `src/components/ui/`; compose higher-level components in `src/components/`.

## Testing Guidelines

- No test runner is configured yet. Recommended: Vitest + React Testing Library.
- When added: colocate tests as `*.test.ts(x)` next to source or in `__tests__/`.
- Aim for clear unit tests of hooks and reusable components; snapshot only where stable.

## Commit & Pull Request Guidelines

- Commits: Use Conventional Commits (e.g., `feat: add hero carousel`, `fix: correct header z-index`). Tags like `[skip lovable]` are acceptable when needed.
- PRs: Provide a clear description, link issues, include before/after screenshots for UI changes, list testing steps, and note breaking changes.
- Pre-submit: `npm run lint` and `npm run build` must pass.

## Security & Configuration Tips

- Environment variables must be prefixed with `VITE_` and stored in `.env.local` (do not commit secrets).
- Avoid large inline images; place assets in `public/` or `src/assets/`.

## Agent-Specific Instructions

- Keep changes scoped; avoid broad refactors.
- Preserve public APIs and paths; prefer `@/` imports.
- Follow lint rules and update docs when adding commands or structure.
