# Email Configuration Contract

## Module Contract: `@/lib/email-config`

### Exports Contract

```typescript
// Required exports from email-config.ts
export const PRIMARY_EMAIL: string;
export const SECONDARY_EMAIL: string;
export const ALL_EMAILS: string[];

// Optional advanced exports
export const emailConfig: EmailConfiguration;
export interface EmailConfiguration {
  primary: string;
  secondary: string;
  all: string[];
}
```

### Consumer Contract

```typescript
// What components can expect when importing
import {
  PRIMARY_EMAIL, // "info@san-bbr.id"
  SECONDARY_EMAIL, // "hire.us@san-bbr.id"
  ALL_EMAILS, // ["info@san-bbr.id", "hire.us@san-bbr.id"]
} from "@/lib/email-config";

// Type guarantees
typeof PRIMARY_EMAIL === "string"; // ✓
typeof SECONDARY_EMAIL === "string"; // ✓
Array.isArray(ALL_EMAILS) === true; // ✓
ALL_EMAILS.length === 2; // ✓
```

### Integration Contracts

#### i18n Files Contract

```typescript
// i18n-en.ts and i18n-id.ts must import and use email config
import { PRIMARY_EMAIL, SECONDARY_EMAIL } from "@/lib/email-config";

export const translations = {
  // ... other translations
  footer: {
    contact: {
      email: PRIMARY_EMAIL, // Replace hardcoded value
      emailSecondary: SECONDARY_EMAIL, // Replace hardcoded value
      emails: [PRIMARY_EMAIL, SECONDARY_EMAIL],
    },
  },
};
```

#### Component Contract

```typescript
// Components must import rather than hardcode
// ❌ OLD WAY:
const email = "info@san-bbr.id";

// ✅ NEW WAY:
import { PRIMARY_EMAIL } from "@/lib/email-config";
const email = PRIMARY_EMAIL;
```

#### SEO Contract

```typescript
// seo.ts integration
import { PRIMARY_EMAIL, SECONDARY_EMAIL } from "@/lib/email-config";

export const seoConfig = {
  contactEmail: PRIMARY_EMAIL,
  contactEmailSecondary: SECONDARY_EMAIL,
  contactEmails: [PRIMARY_EMAIL, SECONDARY_EMAIL],
};
```

## Backward Compatibility

### Existing Code Support

- All existing component interfaces remain unchanged
- i18n translation keys stay the same (contact.email, etc.)
- TypeScript types remain compatible
- Build process unaffected

### Breaking Changes

**None expected** - This is a pure refactoring that maintains all existing APIs while centralizing the data source.

## Contract Tests

### Import Resolution Test

```typescript
// Verify all imports resolve correctly
import { PRIMARY_EMAIL, SECONDARY_EMAIL, ALL_EMAILS } from "@/lib/email-config";

test("email config exports are defined", () => {
  expect(PRIMARY_EMAIL).toBeDefined();
  expect(SECONDARY_EMAIL).toBeDefined();
  expect(ALL_EMAILS).toBeDefined();
});
```

### Value Consistency Test

```typescript
test("email configuration consistency", () => {
  expect(ALL_EMAILS).toContain(PRIMARY_EMAIL);
  expect(ALL_EMAILS).toContain(SECONDARY_EMAIL);
  expect(ALL_EMAILS.length).toBe(2);
});
```

### Component Integration Test

```typescript
test("components use email config imports", () => {
  // Verify no hardcoded email strings remain in components
  const componentFiles = ["Footer.tsx", "CTASection.tsx", "Contact.tsx"];

  componentFiles.forEach((file) => {
    const content = readFileSync(file, "utf8");
    expect(content).not.toMatch(/ptkarya_halim@yahoo\.co\.id/);
    expect(content).not.toMatch(/hire\.us@san-bbr\.id/);
  });
});
```
