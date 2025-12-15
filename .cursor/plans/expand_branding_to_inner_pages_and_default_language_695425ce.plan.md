---
name: Expand Branding to Inner Pages and Default Language
overview: Apply the split branding (PT SAN & PT BBR) to inner pages (Works, News, Team, Certifications, Awards), set default language to Indonesian, and refine the Career navigation.
todos:
  - id: set_default_lang
    content: Set default language to ID in src/lib/i18n.tsx
    status: completed
  - id: update_works
    content: Update Works.tsx hero and branding
    status: completed
  - id: update_news
    content: Update News.tsx hero and branding
    status: completed
  - id: update_team
    content: Update OurTeam.tsx hero and branding
    status: completed
  - id: update_certifications
    content: Update CertificationGallery.tsx hero and branding
    status: completed
  - id: update_awards
    content: Update CompanyAwardsGallery.tsx hero and branding
    status: completed
  - id: refactor_header_career
    content: Refactor Career navigation in Header.tsx
    status: completed
---

# Expand Branding Plan

## Goal

Extend the dual-entity branding (PT SAN & PT BBR) to inner pages, switch the default language to Indonesian, and refine the Career navigation.

## Detailed Changes

### 1. Configuration

- **`src/lib/i18n.tsx`**: Change `defaultLanguage` from "EN" to "ID".

### 2. Header & Navigation (`src/components/Header.tsx`)

- Refactor "Career" navigation item.
- The user requested "split menjadi 2". I will split the single "Career" dropdown into two distinct sections or links if possible, or at least ensure the dropdown clearly presents options relevant to both (currently it is Employee vs Intern).
- I will verify if "Career" needs to be split by company (Career PT SAN / Career PT BBR) or just kept as Employee/Intern but with better UI. Given the current `careerLinkConfig` is Employee/Intern, I will stick to that but maybe visually separate or label them clearly if needed.
- *Correction*: The user explicitly pointed to the DOM element. I will try to make it look "better" and maybe clearer.

### 3. Page Refactoring (Hero & Content)

Apply the "PT SAN & PT BBR" branding to the Hero sections of:

- **`src/pages/Works.tsx`**: Update Hero text. Ensure content reflects Construction (PT BBR) focus if mostly construction, or both if rental projects exist.
- **`src/pages/News.tsx`**: Update Hero text to "Berita & Wawasan PT SAN & PT BBR".
- **`src/pages/about-us/OurTeam.tsx`**: Update Hero text to "Tim PT SAN & PT BBR".
- **`src/pages/about-us/CertificationGallery.tsx`**: Update Hero text.
- **`src/pages/about-us/CompanyAwardsGallery.tsx`**: Update Hero text.

### 4. UI Polish

- Ensure consistent use of "PT SAN & PT BBR" in titles/descriptions across these pages.