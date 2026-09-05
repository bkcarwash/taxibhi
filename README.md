# Taxi Bhai — Umrah Taxi Website

Production-grade Next.js marketing and booking website for **Taxi Bhai**, a 24/7 private Umrah taxi service in Makkah, Madinah, and Jeddah, Saudi Arabia.

## Tech Stack

- **Next.js 16** (App Router, TypeScript, SSG-first)
- **Tailwind CSS v4** with custom emerald/gold design tokens
- **Framer Motion** for scroll-reveal and micro-interactions
- **next/font** — Playfair Display (display) + Plus Jakarta Sans (body), self-hosted via Google Fonts
- **next-sitemap** for `sitemap.xml` and `robots.txt`
- WhatsApp-driven booking — no backend or payment gateway

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building for Production

```bash
npm run build   # also runs next-sitemap postbuild hook
npm run start
```

## Deploying to Vercel

1. Push to GitHub
2. Import into Vercel (auto-detects Next.js)
3. Deploy — Vercel handles CDN, edge caching, and automatic HTTPS

## Project Structure

```
app/                     Pages (App Router)
  page.tsx               Home
  about/page.tsx         About
  services/page.tsx      Services
  pricing/page.tsx       Pricing + full fare table
  book-ride/page.tsx     Booking form
  contact/page.tsx       Contact + Google Maps

components/
  layout/                Header, Footer, StickyWhatsAppBar
  sections/              Hero, TrustBar, Services, FareFinder,
                         WhyChooseUs, Testimonials, FaqSection, CtaBanner
  booking/               BookingForm

lib/
  data/                  Single source of truth for all content
    routes.ts            All routes with metadata
    vehicles.ts          Fleet information
    pricing.ts           Full pricing table
    testimonials.ts      Real Google reviews
    faqs.ts              FAQ questions and answers
  schema/
    jsonLd.ts            All JSON-LD generators (reads from /data)
  utils/
    index.ts             buildWhatsAppUrl, formatSAR, cn

public/
  llms.txt               AI crawler summary
  llms-full.txt          Full business profile for LLM retrieval systems
```

## How to Add Real Photos

The site currently uses SVG illustrations (no photos were provided at build time). To add real photos:

1. Place optimised WebP images in `/public/images/`
2. Use `next/image` with descriptive `alt` text:

```tsx
import Image from "next/image";

<Image
  src="/images/makkah-hotel-transfer.webp"
  alt="Taxi Bhai driver meeting pilgrim at Makkah hotel entrance"
  width={800}
  height={600}
  priority  // use for above-fold / hero images only
/>
```

## How to Update Pricing

Pricing lives in **one place**: `lib/data/pricing.ts`. The JSON-LD schema, on-page table, fare finder, and booking form all read from this file.

After changing a price:
1. Edit `lib/data/pricing.ts`
2. **Also update `public/llms.txt` and `public/llms-full.txt`** manually — these static files must match the data layer exactly
3. Run `npm run build` to confirm no errors

## SEO/Schema Validation

After deploying, validate structured data at:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

## Adding Urdu / Arabic Support

The HTML `lang="en"` and font setup supports future internationalisation. To add Urdu/Arabic:
1. Create `/ur/` or `/ar/` route group pages
2. Add `hreflang` alternates to metadata
3. Set `dir="rtl"` on the `<html>` tag for RTL languages
