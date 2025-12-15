<!--
Sync Impact Report

- Version change: none -> 0.1.0
- Modified principles: (added descriptive principles derived from repository conventions)
- Added sections: Development Workflow, Security & Conventions
- Removed sections: none
- Templates requiring updates:
	- .specify/templates/plan-template.md -> ⚠ pending (manual review required)
	- .specify/templates/spec-template.md -> ⚠ pending (manual review required)
	- .specify/templates/tasks-template.md -> ⚠ pending (manual review required)
	- .specify/templates/commands/ -> ⚠ pending (manual review required)
- Follow-up TODOs:
	- TODO(RATIFICATION_DATE): Ratification date missing; please supply original adoption date if known.
	- Verify templates listed above for alignment with Principles.
-->

# Karya Halim Modern Platform Constitution

## Core Principles

### I. User-centered Simplicity

All user-facing features MUST prioritize clarity and minimal cognitive load. Components and pages
should have a focused purpose, avoid unnecessary options, and present defaults that work for
most users. Rationale: a simple UI leads to faster adoption and fewer support costs.

### II. Component-first Architecture

UI and functional pieces MUST be implemented as small, reusable components located under
`src/components/` or `src/components/ui/`. Components MUST be documented and accept clear,
typed props. Rationale: encourages reuse, easier testing, and maintainable code.

### III. Type-safe, Tested Changes

All code in TypeScript MUST use strict typing. New features or changes that affect behavior MUST
include unit or integration tests where practical (see testing guidance). Rationale: prevents
regressions and enables safer refactors.

### IV. Observable & Small Releases

Applications MUST emit structured logs and include basic observability for production issues.
Versioning follows semantic versioning for releases; breaking changes MUST be clearly
documented and versioned as MAJOR changes. Rationale: easier debugging and clear upgrade
paths for consumers.

### V. Security and Secrets Hygiene

Secrets and environment-specific configuration MUST live in `.env.local` or environment
variables prefixed with `VITE_`. Do not commit secrets to the repository. Rationale: protect
sensitive data and follow platform constraints (Vercel, etc.).

## Development Workflow & Conventions

- Use the `@/` import alias for sources inside `src/` (e.g., `import { Button } from "@/components/ui/button"`).
- Follow file and naming conventions: Components PascalCase, hooks `use-*.ts`, utilities camelCase.
- Pre-submit checks: run `npm run lint` and `npm run build` before opening a PR.

## Governance

Amendments to this constitution MUST be proposed as a repository change (PR) with a short
summary, rationale, and a migration plan for any breaking guidance. Minor clarifications
(typos, formatting) MAY be merged as patch-level amendments. Major procedural or principle
changes (removing or redefining existing principles) MUST be versioned as MAJOR bumps.

All PRs SHOULD reference the relevant principle(s) that the change affects and include
automated checks where applicable (linting/build/tests).

**Version**: 0.1.0 | **Ratified**: TODO(RATIFICATION_DATE) | **Last Amended**: 2025-09-27
