# Tasks: Reusable Email Configuration System

**Input**: Design documents from `/specs/002-saya-ingin-di/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)

```
1. Load plan.md from feature directory ✓
   → Tech stack: TypeScript 5.x with React 18+, Vite, Tailwind CSS
   → Structure: Single-page web application (React SPA)
2. Load design documents ✓:
   → data-model.md: EmailConfiguration entity → email-config.ts creation task
   → contracts/: email-config-contract.md → contract validation tasks
   → research.md: Centralized configuration module → refactoring tasks
3. Generate tasks by category:
   → Setup: Create email configuration module
   → Refactor: Update components to use imports instead of hardcoded values
   → Validation: Build, lint, UI verification
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Configuration before refactoring (dependency order)
5. Number tasks sequentially (T001, T002...)
6. Focus: 8 files to refactor + 1 new config file + validation
```

## Format: `[ID] [P?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions

Single project structure: `src/` at repository root per implementation plan

## Phase 3.1: Setup & Configuration Module

- [x] T001 Create centralized email configuration module in `src/lib/email-config.ts`
- [x] T002 [P] Verify TypeScript compilation passes with new email-config module
- [x] T003 [P] Verify ESLint passes with new module structure

## Phase 3.2: Core Refactoring (ONLY after T001 completes)

**CRITICAL: email-config.ts MUST exist before these refactoring tasks**

### Internationalization Files

- [x] T004 [P] Refactor `src/lib/i18n-en.ts` to import from email-config instead of hardcoded values
- [x] T005 [P] Refactor `src/lib/i18n-id.ts` to import from email-config instead of hardcoded values
- [x] T006 [P] Refactor `src/lib/seo.ts` to import from email-config instead of hardcoded values

### Component Files

- [x] T007 [P] Refactor `src/components/Footer.tsx` to import from email-config instead of hardcoded values
- [x] T008 [P] Refactor `src/components/CTASection.tsx` to import from email-config instead of hardcoded values

### Page Files

- [x] T009 [P] Refactor `src/pages/Contact.tsx` to import from email-config instead of hardcoded values
- [x] T010 [P] Refactor `src/pages/Career.tsx` to import from email-config instead of hardcoded values
- [x] T011 [P] Refactor `src/pages/Products.tsx` to import from email-config instead of hardcoded values

## Phase 3.3: Validation & Quality Assurance

- [x] T012 Verify no hardcoded email strings remain in components (grep verification)
- [x] T013 Run full TypeScript build validation (`npm run build`)
- [x] T014 Run ESLint validation (`npm run lint`)
- [x] T015 [P] Manual UI testing - verify both emails display correctly in Footer
- [x] T016 [P] Manual UI testing - verify both emails display correctly in CTA Section
- [x] T017 [P] Manual UI testing - verify contact form logs both email recipients

## Phase 3.4: Polish & Documentation

- [x] T018 [P] Add JSDoc comments to email-config.ts exports
- [x] T019 [P] Update `.github/copilot-instructions.md` to mention new email config pattern
- [x] T020 Verify quickstart.md validation steps pass (run quickstart guide)

## Dependencies

- T001 blocks T004-T011 (config module must exist before refactoring)
- T004-T011 before T012-T017 (refactoring before validation)
- T012-T014 before T015-T017 (build validation before UI testing)
- T015-T017 before T018-T020 (functionality before polish)

## Parallel Execution Groups

### Group 1: Setup (Sequential - T001 dependency)

```
Task: "Create centralized email configuration module in src/lib/email-config.ts"
```

### Group 2: Lib Files Refactoring (Parallel after T001)

```
Task: "Refactor src/lib/i18n-en.ts to import from email-config"
Task: "Refactor src/lib/i18n-id.ts to import from email-config"
Task: "Refactor src/lib/seo.ts to import from email-config"
```

### Group 3: Component Files Refactoring (Parallel after T001)

```
Task: "Refactor src/components/Footer.tsx to import from email-config"
Task: "Refactor src/components/CTASection.tsx to import from email-config"
```

### Group 4: Page Files Refactoring (Parallel after T001)

```
Task: "Refactor src/pages/Contact.tsx to import from email-config"
Task: "Refactor src/pages/Career.tsx to import from email-config"
Task: "Refactor src/pages/Products.tsx to import from email-config"
```

### Group 5: UI Testing (Parallel after build validation)

```
Task: "Manual UI testing - verify Footer email display"
Task: "Manual UI testing - verify CTA Section email display"
Task: "Manual UI testing - verify contact form functionality"
```

### Group 6: Polish (Parallel after functionality verification)

```
Task: "Add JSDoc comments to email-config.ts"
Task: "Update copilot instructions with email config pattern"
```

## Detailed Task Specifications

### T001: Create Email Configuration Module

**File**: `src/lib/email-config.ts`
**Requirements**:

- Export `PRIMARY_EMAIL` = "info@san-bbr.id"
- Export `SECONDARY_EMAIL` = "hire.us@san-bbr.id"
- Export `ALL_EMAILS` = [PRIMARY_EMAIL, SECONDARY_EMAIL]
- Include TypeScript interface `EmailConfiguration`
- Follow existing code style and patterns

### T004-T011: Component Refactoring Pattern

**For each file**:

1. Add import statement: `import { PRIMARY_EMAIL, SECONDARY_EMAIL, ALL_EMAILS } from '@/lib/email-config'`
2. Replace hardcoded email strings with imported constants
3. Verify TypeScript compilation passes
4. Maintain existing functionality and UI appearance

### T012: Hardcoded String Verification

**Command**: `grep -r "info@san-bbr.id\|hire.us@san-bbr.id" src/ --exclude="src/lib/email-config.ts"`
**Expected**: No matches found (all hardcoded emails removed)

### T015-T017: UI Validation

**Requirements**:

- Start dev server (`npm run dev`)
- Navigate to localhost:8080
- Verify both email addresses display consistently
- Test mailto links functionality
- Verify contact form console logging shows both recipients

## Risk Mitigation

- Each component refactor is independent (parallel-safe)
- Rollback: Delete email-config.ts and restore original hardcoded values
- Build verification catches TypeScript errors early
- UI testing ensures user-facing functionality preserved

## Notes

- Total estimated time: 2-3 hours for all tasks
- [P] tasks can run simultaneously on different files
- Focus on maintaining existing UI/UX while centralizing configuration
- No external dependencies or API changes required
