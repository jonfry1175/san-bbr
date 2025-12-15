# Quickstart: Reusable Email Configuration

## Overview

This quickstart validates the reusable email configuration system by testing all integration points and verifying that email values are centralized and consistently displayed.

## Prerequisites

- Node.js and npm installed
- Project built successfully (`npm run build`)
- All linting passes (`npm run lint`)

## Quick Validation Steps

### 1. Verify Email Configuration Module

```bash
# Check that the email config file exists and exports correctly
cat src/lib/email-config.ts

# Expected output should show:
# - export const PRIMARY_EMAIL = "ptkarya_halim@yahoo.co.id"
# - export const SECONDARY_EMAIL = "hire.us@san-bbr.id"
# - export const ALL_EMAILS = [PRIMARY_EMAIL, SECONDARY_EMAIL]
```

### 2. Verify Component Integration

```bash
# Check that components import from email config instead of hardcoding
grep -r "import.*email-config" src/components/
grep -r "import.*email-config" src/pages/
grep -r "import.*email-config" src/lib/

# Expected: Should find imports in Footer.tsx, CTASection.tsx, Contact.tsx, Career.tsx, Products.tsx, i18n files, seo.ts
```

### 3. Verify No Hardcoded Emails Remain

```bash
# Check that no hardcoded email strings remain (except in email-config.ts)
grep -r "ptkarya_halim@yahoo.co.id" src/ --exclude="src/lib/email-config.ts"
grep -r "hire.us@san-bbr.id" src/ --exclude="src/lib/email-config.ts"

# Expected: No matches found (all references should now be imports)
```

### 4. Build and Runtime Verification

```bash
# Verify project builds successfully
npm run build

# Check build output for any email-related errors
npm run lint
```

## Manual UI Testing

### 5. Visual Verification (Development Server)

```bash
# Start development server
npm run dev

# Navigate to http://localhost:8080 and verify:
```

**Footer Section:**

- [ ] Two email addresses displayed with mail icons
- [ ] Both emails are clickable mailto links
- [ ] Email display formatting is consistent

**Contact Section (CTA):**

- [ ] Both email addresses shown in contact card
- [ ] Emails are stacked vertically with proper spacing
- [ ] Hover states work for both email links

**Products Page:**

- [ ] Product inquiry descriptions show "contact [email] or [secondary email]"
- [ ] Both English and Indonesian versions display correctly

**Contact Form:**

- [ ] Form submission logs both email recipients in console
- [ ] Success message displays after form submission

**Career Page:**

- [ ] Job application sections reference appropriate email addresses
- [ ] Mailto links work correctly for job applications

### 6. Internationalization Verification

```bash
# Switch language in UI and verify:
```

- [ ] Both languages (EN/ID) show both email addresses
- [ ] Email format remains consistent across languages
- [ ] Translation keys properly use email config imports

## Automated Test Validation

### 7. Contract Test Execution

```bash
# If contract tests are implemented, run them
npm test -- --grep "email config"

# Expected: All contract tests pass
# - Import resolution tests
# - Value consistency tests
# - Component integration tests
```

## Success Criteria Checklist

### Implementation Completeness

- [ ] `src/lib/email-config.ts` exists with correct exports
- [ ] All components import from email config instead of hardcoding
- [ ] i18n files use email config imports
- [ ] SEO configuration uses email config imports
- [ ] Build process completes without errors
- [ ] Linting passes without email-related violations

### Functional Validation

- [ ] All email displays show both addresses consistently
- [ ] Mailto links work correctly for all instances
- [ ] Contact form submission targets both email addresses
- [ ] No hardcoded email strings remain in components
- [ ] UI appearance and behavior unchanged from user perspective

### Quality Validation

- [ ] TypeScript compilation passes
- [ ] No console errors related to email configuration
- [ ] Bundle size impact is minimal (< 1KB increase)
- [ ] All existing email functionality preserved

## Troubleshooting

### Common Issues

**Import Errors:**

```bash
# If TypeScript reports import errors:
npm run build 2>&1 | grep email-config

# Solution: Check file paths and export names match exactly
```

**Missing Email Display:**

```bash
# If emails don't appear in UI:
# 1. Check browser console for JavaScript errors
# 2. Verify component imports are correct
# 3. Check that email-config exports are not undefined
```

**Build Failures:**

```bash
# If build fails with email-config related errors:
# 1. Verify email-config.ts syntax is correct
# 2. Check all import statements use correct paths (@/lib/email-config)
# 3. Ensure no circular dependencies introduced
```

## Rollback Plan

If issues arise, rollback can be performed by:

1. Reverting email-config.ts creation
2. Restoring original hardcoded values in components
3. Running `npm run build` to verify functionality restored

The modular nature of this change makes rollback straightforward and low-risk.
