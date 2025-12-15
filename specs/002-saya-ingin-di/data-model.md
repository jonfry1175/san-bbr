# Data Model: Email Configuration System

## Core Entity: EmailConfiguration

### Primary Entity

```typescript
interface EmailConfiguration {
  primary: string; // Main company email for business inquiries
  secondary: string; // Secondary email for hiring/recruitment
  all: string[]; // Array containing both emails for bulk operations
}
```

### Fields and Validation Rules

- **primary**:
  - Type: `string`
  - Format: Valid email address
  - Value: `"ptkarya_halim@yahoo.co.id"`
  - Usage: Primary business contact, job applications, product inquiries
- **secondary**:
  - Type: `string`
  - Format: Valid email address
  - Value: `"hire.us@san-bbr.id"`
  - Usage: Hiring inquiries, alternative contact method
- **all**:
  - Type: `string[]`
  - Format: Array of valid email addresses
  - Value: `[primary, secondary]`
  - Usage: Form submissions, bulk operations, display lists

### Relationships

- **No external relationships**: This is a pure configuration entity
- **Internal consistency**: `all` array must always contain `primary` and `secondary`
- **Immutable at runtime**: Configuration is set at build time, no runtime mutations

## State Transitions

**Not applicable** - This is static configuration data with no state changes during application lifecycle.

## Usage Patterns

### Import Pattern

```typescript
// Individual imports for specific use cases
import { PRIMARY_EMAIL, SECONDARY_EMAIL } from "@/lib/email-config";

// Bulk import for multi-email operations
import { ALL_EMAILS } from "@/lib/email-config";

// Full configuration object (if needed)
import { emailConfig } from "@/lib/email-config";
```

### Consumer Components

1. **Footer.tsx**: Displays both emails with mailto links
2. **CTASection.tsx**: Shows contact information cards
3. **Contact.tsx**: Form submission to multiple recipients
4. **Career.tsx**: Job application email references
5. **Products.tsx**: Product inquiry contact information
6. **i18n-en.ts / i18n-id.ts**: Localized contact information
7. **seo.ts**: SEO metadata contact fields

### Type Safety Guarantees

```typescript
// Compile-time validation of email format (basic)
type EmailAddress = `${string}@${string}.${string}`;

// Runtime validation helper (optional)
export const validateEmailConfig = (config: EmailConfiguration): boolean => {
  return (
    config.all.includes(config.primary) &&
    config.all.includes(config.secondary) &&
    config.all.length === 2
  );
};
```

## Implementation Constraints

- **Immutability**: Configuration cannot be changed at runtime
- **Build-time resolution**: All imports must resolve at build time
- **Type consistency**: All consuming code must use proper TypeScript imports
- **No circular dependencies**: Email config is a leaf dependency (imports nothing from components)

## Migration Strategy

1. Create `email-config.ts` with centralized configuration
2. Update i18n files to import from email config
3. Update components one by one to use imports instead of hardcoded values
4. Verify build passes and all email displays work correctly
5. Add ESLint rule to prevent future hardcoded email strings
