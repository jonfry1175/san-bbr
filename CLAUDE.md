# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm i` - Install dependencies
- `npm run dev` - Start Vite dev server on http://localhost:8080
- `npm run build` - Production build to `dist/`
- `npm run build:dev` - Development-mode build (faster, labeled bundles)
- `npm run preview` - Serve the production build locally
- `npm run lint` - Run ESLint over `src/`

Before submitting changes, ensure `npm run lint` and `npm run build` pass.

## Project Architecture

This is a Vite + React + TypeScript web application for PT SAN (Rental Alat Berat) and PT BBR (Jasa Konstruksi Tambang) using shadcn/ui + Tailwind CSS.

### Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: React Router v6 with lazy-loaded pages
- **State Management**: TanStack React Query for server state
- **Animation**: Framer Motion for page transitions and animations
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with SWC

### Key Directories

- `src/components/` - Feature components (Header, Footer, HeroSection, etc.)
- `src/components/ui/` - shadcn/ui primitive components (Button, Input, etc.)
- `src/pages/` - Route components (Index, About, Works, Gallery, etc.)
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utilities and helpers
- `src/assets/` - Local images and assets
- `public/` - Static assets served directly

### Routing Structure

All routes are defined in `src/App.tsx` using lazy loading:

- `/` - Homepage (Index)
- `/about` - About Us page
- `/works` - Portfolio listing
- `/works/:slug` - Individual project details
- `/gallery` - Image/video gallery
- `/news` - News listing
- `/news/:slug` - Individual news articles
- `/services/:slug` - Service detail pages
- `/career` - Career opportunities
- `/contact` - Contact page

Routes are wrapped with `AppLayout` component which provides Header, Footer, HeroSection, and FloatingWhatsApp components.

### Component Patterns

- Use `@/` alias for imports from `src` directory
- Prefer named exports for components
- Components use PascalCase.tsx filenames
- Hooks use use-\*.ts naming
- Utilities use camelCase.ts naming
- All components are functional components with TypeScript

### Styling System

- Uses Tailwind CSS with custom design tokens in `tailwind.config.ts`
- Extended color palette with CSS custom properties (--primary, --secondary, etc.)
- Custom fonts: Poppins for headings, Open Sans for body text
- Responsive design with mobile-first approach
- shadcn/ui components provide consistent UI patterns

### State Management

- React Query for server-side state and caching
- Local component state with useState/useReducer
- Context providers for cross-component state (HeroProvider)

### Animation System

- Framer Motion for page transitions and component animations
- Page transitions use opacity and y-axis transforms
- Custom transition timings defined in tailwind config

### Key Features

- Lazy-loaded routes for performance
- Page transition animations
- Responsive navigation with mobile menu
- SEO-optimized structure
- Image optimization and responsive images
- Form validation with Zod schemas

## Coding Conventions

- **Language**: TypeScript with strict mode
- **Indentation**: 2 spaces
- **Exports**: Prefer named exports
- **Imports**: Use `@/` path alias for src imports
- **Components**: PascalCase filenames, functional components only
- **Hooks**: use-\* naming pattern
- **Utilities**: camelCase naming
- **Styling**: Use shadcn/ui components and cn() utility for class composition

## Business Context

This is a corporate website platform for PT SAN and PT BBR. The site showcases:

- **PT SAN**: Heavy equipment rental services (Rental Alat Berat)
- **PT BBR**: Mining construction services (Jasa Konstruksi Tambang)
- Portfolio of completed projects
- Company news and updates
- Career opportunities
- Company information and contact details

The design follows a professional corporate aesthetic.

## Configuration Notes

- Vite dev server runs on port 8080
- Uses TypeScript with strict configuration
- ESLint with React and TypeScript rules
- PostCSS with Tailwind and Autoprefixer
- Vercel deployment with SPA routing support
- Lovable tagger plugin for development mode
