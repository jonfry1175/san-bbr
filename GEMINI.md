 # Gemini Project Context: SAN & BBR Platform

This document provides context for the AI assistant to understand the project structure, conventions, and goals.

## Project Overview

This is a modern web application serving as a platform for two entities:
- **PT SINERGY AGTER NUSANTARA** (Rental Alat Berat)
- **PT BUMI BLAMBANGAN RESOURCES** (Jasa Konstruksi Tambang)

The application serves as a corporate profile or marketing platform.

- **Framework:** React (using Vite for bundling)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with `shadcn/ui` for the component library.
- **Routing:** React Router for single-page application (SPA) navigation.
- **Linting/Formatting:** ESLint and Prettier.
- **Internationalization (i18n):** The application supports both English (`EN`) and Indonesian (`ID`), with translation files located in `src/lib/`.

The architecture is component-based, with a clear separation of concerns:

- `src/pages/`: Top-level page components for each route.
- `src/components/`: Reusable, higher-level components and feature sections.
- `src/components/ui/`: Base UI primitives from `shadcn/ui`.
- `src/lib/`: Utility functions, data sources, and i18n setup.
- `src/hooks/`: Custom React hooks.

## Building and Running

The project uses `npm` as the package manager.

- **Install Dependencies:**

  ```sh
  npm install
  ```

- **Run Development Server:**
  Starts the app on `http://localhost:8080`.

  ```sh
  npm run dev
  ```

- **Create Production Build:**
  Bundles the application into the `dist/` directory.

  ```sh
  npm run build
  ```

- **Preview Production Build:**
  Serves the `dist/` directory locally.

  ```sh
  npm run preview
  ```

- **Linting:**
  Runs ESLint to check for code quality issues.
  ```sh
  npm run lint
  ```

## Development Conventions

- **File Naming:**
  - Components: `PascalCase.tsx`
  - Hooks: `use-kebab-case.ts`
  - Utilities/Libraries: `camelCase.ts`

- **Path Aliases:**
  Use the `@/` alias to refer to the `src/` directory.
  - **Example:** `import { Button } from "@/components/ui/button";`

- **Component Structure:**
  - Build pages by composing sections from `src/components/`.
  - Use the pre-built, unstyled primitives from `src/components/ui/` as the foundation for custom components.

- **State Management:**
  - For client-side state, use React hooks (`useState`, `useContext`).
  - For server-side state (data fetching), consider using a library like TanStack Query, which is already a dependency.

- **Internationalization (i18n):**
  - All user-facing strings should be added to the translation files in `src/lib/i18n-en.ts` and `src/lib/i18n-id.ts`.
  - Use the `useTranslation` hook from `src/lib/i18n.tsx` to access translated strings in components.

- **Git & Commits:**
  - Follow the "Conventional Commits" specification for commit messages (e.g., `feat: ...`, `fix: ...`, `docs: ...`).
