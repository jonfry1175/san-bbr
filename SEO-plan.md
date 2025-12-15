whats user neeeds

## User Goal

- Improve SEO for https://karyahalimsampoerna.id by adding sitemap, enhancing metadata, and strengthening structured data.

## High-Level Plan

1. Introduce `react-helmet-async` and a reusable `<SEO>` helper to control titles, meta tags, and JSON-LD.
2. Apply page-specific SEO data across all routes (home, services, works, news, career, contact, etc.) leveraging existing content libraries.
3. Generate a comprehensive `sitemap.xml`, register it in `robots.txt`, and ensure dynamic content (services, works, news) are included.

## Todo Checklist

- [ ] Review current routes, meta tags, and data sources that will feed the sitemap.
- [ ] Draft detailed implementation plan (tooling, page updates, sitemap scope).
- [ ] Implement SEO runtime (HelmetProvider, SEO component) and update route pages.
- [ ] Build sitemap XML covering static + dynamic URLs and reference it from `robots.txt`.
- [ ] Run lint/build to verify integration and manually spot-check rendered head metadata.
