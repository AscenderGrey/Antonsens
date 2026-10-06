# Antonsens – Implementation & Ship Plan

Next.js site for **Antonsens Trädgård & Fastighet** (Fred Antonsen, Roma, Gotland).
Goals: **#1 local SEO**, **#2 trust** (Fred's face, real jobs, years in business), **#3 conversion** (call or quote).
Leads go to **GoHighLevel**, which handles automatic SMS/email.

Legend: ✅ done · 🔧 in progress · ⬜ todo · 👤 needs Fred / client input

---

## Phase 0 – Research & assets ✅
- ✅ Scraped Instagram (@antonsenshem, 12 posts) and Facebook (/antonsens) for proof
- ✅ Proof found: **Visby Strandby Norderstrand** (season contract), **Hop Shed Brew Pub** (disc golf course mowing),
  Visby planting (with **Växthuset Linds**), insulation with **Ekoiso Gotland**, roof-window cleaning, table restoration before/after, well cover build
- ✅ Downloaded and optimized photos → `public/img/work/`, logo and portrait → `public/img/brand/`
- ✅ Brand colors sampled from logo: lime `#94c11f`, forest `#145324`
- ✅ Old site (WordPress) URLs: `/` and `/integritetspolicy/`, both kept → no redirects needed for SEO

## Phase 1 – Build ✅
| Route | Purpose |
|---|---|
| `/` | Hero with Fred's face, what/where/when, services, proof wall, client strip, Meet Fred, hustomte, seasons, process, areas, quote form, FAQ |
| `/tjanster/[slug]` ×5 | Service landing pages (main SEO pages): trädgård, städ/fönster, fastighetsskötsel, tillsyn fritidshus, hantverk |
| `/omraden`, `/omraden/[slug]` ×8 | Local pages: Visby, Roma, Tofta, Ljugarn, Slite, Hemse, Klintehamn, Fårö |
| `/offert` | Quote form (3 steps) |
| `/tack` | Thank-you / conversion page (noindex) |
| `/om-fred` | About Fred (Person schema) |
| `/integritetspolicy` | GDPR |
| `/api/quote` | Validates and forwards lead to GHL webhook |

- ✅ Schema: LocalBusiness (NAP, geo, areaServed, sameAs), Service, FAQPage, BreadcrumbList, Person
- ✅ `sitemap.xml`, `robots.txt`, canonical URLs, OG image, favicon
- ✅ Sticky mobile call/quote bar, `data-cta` attributes on every CTA for tracking
- ✅ All pages statically generated; `next/image` for images

## Phase 2 – QA 🔧
- 🔧 Lint + production build clean
- 🔧 Playwright smoke test: all routes return 200, quote form completes the 3 steps → `/tack`, API rejects bad input / honeypot
- 🔧 Visual check desktop + mobile (screenshots)
- ⬜ Lighthouse ≥ 95 performance / 100 SEO / 100 a11y on mobile
- ⬜ Rich Results Test on `/` and one service page (after deploy)

## Phase 3 – Content verification 👤
Must be confirmed by Fred before launch (wrong info = bad for trust and local SEO):
- ⬜ 👤 Start year (currently `foundedYear: 2021` → "5 år") in `src/lib/site.ts`
- ⬜ 👤 Postal code for Sockerparken 3 (left out of schema until confirmed)
- ⬜ 👤 OK to name **Visby Strandby Norderstrand, Hop Shed Brew Pub, Ekoiso Gotland, Växthuset Linds** + real logo files
- ⬜ 👤 Approve caption wording in `src/lib/proof.ts` (some shortened)
- ⬜ 👤 F-skatt / insurance → add as trust badges if true (not claimed yet)
- ⬜ 👤 Original-resolution photos (several IG images are only 640px)
- ⬜ 👤 Review privacy policy text

## Phase 4 – GoHighLevel integration ⬜
1. GHL → Automation → Workflow → trigger **Inbound Webhook** → copy URL into `GHL_WEBHOOK_URL`
2. Send one test lead, then map payload → contact fields:
   `first_name, last_name, phone (E.164), email, services, area, property_type, timing, message, rut_rot, source, page, utm, tags`
3. Workflow actions:
   - SMS to lead immediately: *"Hej {first_name}! Tack för din förfrågan om {services}. Jag hör av mig snart. /Fred, Antonsens 070-509 49 59"*
   - Email confirmation to lead (if email given)
   - Internal SMS/push to Fred with all details
   - Create opportunity in pipeline "Offertförfrågan"
   - After job is won/done → **review request SMS** with Google review link (most important ongoing SEO lever)
4. Optional: GHL tracking script / chat widget in `src/app/layout.tsx` (marked comment)
5. The `/tack` page already says an SMS will be sent → make sure step 3 is live before launch

## Phase 5 – Deploy ⬜
1. Push `feat/nextjs-site` → PR into `main` (AscenderGrey/Antonsens)
2. Vercel: import repo, framework Next.js, region `arn1` (Stockholm)
3. Env vars: `NEXT_PUBLIC_SITE_URL=https://antonsens.se`, `GHL_WEBHOOK_URL=…`
4. Test on the preview URL (form → GHL → SMS arrives)
5. DNS: point `antonsens.se` + `www` to Vercel (www → apex redirect); keep WordPress host until verified
6. Note: in production the API returns 503 if `GHL_WEBHOOK_URL` is missing, so leads are never silently lost

## Phase 6 – Local SEO launch ⬜
- ⬜ **Google Business Profile**: verify/claim, category "Trädgårdsskötsel" (+ Städfirma, Fastighetsskötsel), service area = Gotland, website = antonsens.se, same NAP as site, add the proof photos, weekly posts
- ⬜ Search Console: add property, submit `sitemap.xml`
- ⬜ Bing Webmaster Tools (import from GSC)
- ⬜ Citations with identical NAP: hitta.se, eniro.se, allabolag/merinfo (auto), Facebook page website link, Instagram bio link
- ⬜ Reviews: ask the existing clients above for Google reviews → then add a reviews section to the site (never invented)
- ⬜ Analytics: GA4 or Plausible; conversions = `quote_submitted` (dataLayer) + clicks on `[data-cta^="call"]`

## Phase 7 – After launch ⬜
- Add new jobs to `src/lib/proof.ts` monthly (photo + caption) → fresh content + proof
- Monitor GSC queries ("gräsklippning gotland", "fönsterputs visby", "tillsyn fritidshus gotland") and expand the matching page
- Consider seasonal landing content (snöskottning in Nov, vårstädning in Mar)

---

### Where to edit things
| What | File |
|---|---|
| Phone, email, address, years, socials | `src/lib/site.ts` |
| Service texts, FAQs, quote options | `src/lib/services.ts` |
| Area pages | `src/lib/areas.ts` |
| Proof posts + client names | `src/lib/proof.ts` |
| Colors / fonts | `src/app/globals.css`, `src/app/layout.tsx` |
| Lead forwarding | `src/app/api/quote/route.ts` |
