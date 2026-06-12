# Technical SEO Audit Checklist

Verify these SEO elements to guarantee maximum search visibility and local relevance for Patna search queries.

## 1. Title & Meta Tags Setup
- [x] **Page Title:** Set dynamically in Next.js Metadata API (`English Guide | Best Spoken English Coaching in Patna`).
- [x] **Meta Description:** Clear, engaging 150-160 character snippet targeting core keywords.
- [x] **Canonical URLs:** Self-referential canonical tag pointing to `https://englishguidepatna.in`.
- [x] **Open Graph Metadata:** 1200x630px structured image, title, and site name declared for Facebook/LinkedIn sharing.
- [x] **Twitter Card:** Set to `summary_large_image` referencing the customized OG card.

## 2. Robots & Indexing
- [x] **robots.txt:** Native route dynamically served at `/robots.txt`. Blocking `/api/` routing while permitting crawler access to public paths.
- [x] **sitemap.xml:** Native route dynamically served at `/sitemap.xml` referencing current pages with priority signals.

## 3. Local SEO Optimization (Patna Focus)
- [x] **NAP Consistency:** Exact same Name, Address, and Phone number maintained across all footer, contact sections, and schema markings.
- [x] **Geo coordinates:** Map coordinates correctly registered in schemas (`latitude: 25.6152536`, `longitude: 85.1849416`).
- [x] **Google Maps Frame:** Map embedded dynamically with lazy loading to prevent initial thread blocking.
- [x] **Location Keywords:** Titles, subtitles, and text body aligned with high-value local queries:
  - *Best Spoken English Classes in Patna*
  - *English Coaching in Patna*
  - *Spoken English Institute Patna*

## 4. Structured Data (JSON-LD Schemas)
Verify schemas by pasting the page code into Google's Rich Results Tool:
- [x] **WebSite:** Correctly links site name and URL.
- [x] **Organization:** Includes official social profiles (`sameAs`) and logo URL.
- [x] **LocalBusiness / EducationalOrganization:** Structured NAP details, coordinate locations, business hours, and rating markers.
- [x] **BreadcrumbList:** Structured breadcrumbs for indexing navigation.
