# Implementation Plan: Reusable Email Configuration System

**Branch**: `002-saya-ingin-di` | **Date**: September 27, 2025 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/002-saya-ingin-di/spec.md`

## Execution Flow (/plan command scope)

```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from file system structure or context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, `GEMINI.md` for Gemini CLI, `QWEN.md` for Qwen Code or `AGENTS.md` for opencode).
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:

- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary

Refactor the dual email display feature to use centralized, reusable configuration instead of hardcoding email values across multiple files. Create a centralized email configuration system that can be imported and used consistently throughout the React/TypeScript application.

## Technical Context

**Language/Version**: TypeScript 5.x with React 18+  
**Primary Dependencies**: Vite (build tool), React, Tailwind CSS, shadcn/ui components  
**Storage**: Static configuration files, no database required  
**Testing**: Built-in ESLint, no dedicated test framework configured  
**Target Platform**: Modern web browsers via Vite build system  
**Project Type**: Single-page web application (React SPA)  
**Performance Goals**: Fast build times, minimal bundle size impact for config  
**Constraints**: Must maintain existing i18n system, TypeScript type safety  
**Scale/Scope**: Small configuration change affecting ~8 components/pages  
**User Clarification**: "instead of add email value to all file, i need to make it reusable variable"

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

**Constitution Status**: Template only - proceeding with standard best practices

- ✅ **DRY Principle**: Centralizing email configuration eliminates duplication
- ✅ **Type Safety**: TypeScript interfaces will ensure consistency
- ✅ **Maintainability**: Single source of truth for email configuration
- ✅ **Minimal Impact**: Refactoring existing feature, no new complexity

## Project Structure

### Documentation (this feature)

```
specs/[###-feature]/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)

```
src/
├── lib/
│   ├── email-config.ts      # NEW: Centralized email configuration
│   ├── i18n-en.ts           # MODIFY: Use email config imports
│   ├── i18n-id.ts           # MODIFY: Use email config imports
│   └── seo.ts               # MODIFY: Use email config imports
├── components/
│   ├── Footer.tsx           # MODIFY: Use email config imports
│   └── CTASection.tsx       # MODIFY: Use email config imports
└── pages/
    ├── Contact.tsx          # MODIFY: Use email config imports
    ├── Career.tsx           # MODIFY: Use email config imports
    └── Products.tsx         # MODIFY: Use email config imports
```

**Structure Decision**: Single React SPA structure. The feature adds one new configuration file in `src/lib/` and refactors existing components to import from this centralized location instead of hardcoding email values.

## Phase 0: Outline & Research

1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:

   ```
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts

_Prerequisites: research.md complete_

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:
   - For each user action → endpoint
   - Use standard REST/GraphQL patterns
   - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Generate contract tests** from contracts:
   - One test file per endpoint
   - Assert request/response schemas
   - Tests must fail (no implementation yet)

4. **Extract test scenarios** from user stories:
   - Each story → integration test scenario
   - Quickstart test = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/bash/update-agent-context.sh copilot`
     **IMPORTANT**: Execute it exactly as specified above. Do not add or remove any arguments.
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md, /contracts/\*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach

_This section describes what the /tasks command will do - DO NOT execute during /plan_

**Task Generation Strategy**:

- Load `.specify/templates/tasks-template.md` as base
- Generate tasks from email configuration refactoring requirements
- Create email-config.ts module creation task [P]
- Each component/file → refactor task to use imports
- Integration verification tasks for UI consistency
- Build and lint validation tasks

**Ordering Strategy**:

- **Dependency order**: Email config creation → i18n updates → component updates
- **Parallel opportunities**: [P] Component updates can run in parallel after email-config.ts exists
- **Validation last**: Build/lint/UI testing after all refactoring complete

**Specific Task Categories**:

1. **Setup Tasks**: Create email-config.ts module
2. **Refactor Tasks**: Update each file to use imports (8 files total)
3. **Validation Tasks**: Build, lint, UI verification, cleanup
4. **Quality Tasks**: Remove hardcoded strings, add ESLint rules

**Estimated Output**: 12-15 numbered, ordered tasks in tasks.md

**Risk Mitigation**: Each component refactor is independent, allowing parallel execution and easy rollback if needed.

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation

_These phases are beyond the scope of the /plan command_

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking

_Fill ONLY if Constitution Check has violations that must be justified_

**No complexity violations identified.** This is a straightforward refactoring that:

- Reduces code duplication (follows DRY principle)
- Improves maintainability (single source of truth)
- Maintains existing functionality (no behavioral changes)
- Uses standard TypeScript/React patterns (no exotic solutions)

## Progress Tracking

_This checklist is updated during execution flow_

**Phase Status**:

- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:

- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented (None required)

---

_Based on Constitution v2.1.1 - See `/memory/constitution.md`_
