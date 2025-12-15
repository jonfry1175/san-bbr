# Research: Reusable Email Configuration System

## Decision: Centralized Configuration Module

**What was chosen**: Create `src/lib/email-config.ts` as a centralized configuration module

**Rationale**:

- Follows React/TypeScript best practices for configuration management
- Maintains single source of truth principle (DRY)
- Enables type safety through TypeScript interfaces
- Allows easy maintenance and updates from one location
- Compatible with existing i18n system and build tools

**Alternatives considered**:

1. **Environment Variables**: Rejected because emails are not secrets and should be bundled
2. **JSON Configuration File**: Rejected because TypeScript provides better type safety and IDE support
3. **Constants in each file**: Current state - creates maintenance burden and duplication

## Decision: Export Structure Pattern

**What was chosen**: Named exports for individual email addresses and array export for bulk operations

**Rationale**:

- Supports both individual email access and bulk operations (form submission to multiple recipients)
- Maintains backward compatibility with existing code patterns
- Provides clear, descriptive naming convention
- Follows modern ES module patterns

**Alternatives considered**:

1. **Default export object**: Less flexible for individual imports
2. **Class-based configuration**: Overkill for simple configuration data
3. **Namespace export**: Less compatible with existing React patterns

## Decision: Type Safety Implementation

**What was chosen**: TypeScript interfaces for email configuration with strict typing

**Rationale**:

- Prevents runtime errors from typos or incorrect email formats
- Provides IDE autocomplete and validation
- Maintains consistency with existing TypeScript codebase
- Enables compile-time validation

**Alternatives considered**:

1. **Runtime validation only**: Misses compile-time catching of errors
2. **No typing**: Loses TypeScript benefits and IDE support
3. **Zod schemas**: Overkill for static configuration data

## Decision: Integration with Existing i18n System

**What was chosen**: Import email config into i18n files rather than replacing the i18n email fields

**Rationale**:

- Maintains existing i18n structure and component interfaces
- Allows future localization of email labels/descriptions if needed
- Preserves type compatibility with existing components
- Minimizes refactoring surface area

**Alternatives considered**:

1. **Remove emails from i18n entirely**: Would break existing component contracts
2. **Duplicate in both systems**: Violates DRY principle
3. **Move i18n to email config**: Wrong separation of concerns

## Technical Implementation Notes

### Import Pattern

```typescript
import { PRIMARY_EMAIL, SECONDARY_EMAIL, ALL_EMAILS } from "@/lib/email-config";
```

### Configuration Structure

```typescript
export const PRIMARY_EMAIL = "ptkarya_halim@yahoo.co.id";
export const SECONDARY_EMAIL = "hire.us@karyahalimsampoerna.id";
export const ALL_EMAILS = [PRIMARY_EMAIL, SECONDARY_EMAIL];

export interface EmailConfiguration {
  primary: string;
  secondary: string;
  all: string[];
}
```

### Integration Points

- i18n files: Import and use in contact sections
- Components: Replace hardcoded strings with imports
- SEO metadata: Use for contact information
- Form handlers: Use ALL_EMAILS for multi-recipient submission

## Performance Impact

- **Bundle size**: Negligible increase (~100 bytes)
- **Build time**: No impact, simple static imports
- **Runtime**: No impact, compiled at build time
- **Memory**: Minimal, shared references

## Validation Requirements

- Email format validation at compile time through TypeScript
- ESLint rules to prevent hardcoded email strings in components
- Build-time verification that all imports resolve correctly
