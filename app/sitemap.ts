import type { MetadataRoute } from "next";

const BASE = "https://www.taxibhai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-09-24");

  return [
    // Core
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/book-ride`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // FAQ individual pages
    { url: `${BASE}/faq/umrah-service`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/faq/jeddah-airport-makkah-price`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${BASE}/faq/makkah-madinah-price`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${BASE}/faq/airport-pickup`, lastModified: now, changeFrequency: "monthly", priority: 0.78 },
    { url: `${BASE}/faq/jeddah-makkah-distance`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/faq/availability-24-7`, lastModified: now, changeFrequency: "monthly", priority: 0.72 },
    { url: `${BASE}/faq/makkah-madinah-duration`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq/vehicles`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/faq/large-groups`, lastModified: now, changeFrequency: "monthly", priority: 0.72 },
    { url: `${BASE}/faq/payment`, lastModified: now, changeFrequency: "monthly", priority: 0.72 },
    { url: `${BASE}/faq/how-to-book`, lastModified: now, changeFrequency: "monthly", priority: 0.78 },
    { url: `${BASE}/faq/ziyarat-tours`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/faq/same-day-booking`, lastModified: now, changeFrequency: "monthly", priority: 0.72 },
    { url: `${BASE}/faq/makkah-to-taif`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq/madinah-to-badr`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Services hub + pillars
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/airport-transfers`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/services/intercity-transfers`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/services/umrah-ziyarat-transport`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/services/group-family-transport`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/executive-chauffeur`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${BASE}/services/local-city-rides`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },

    // Routes hub + route pages
    { url: `${BASE}/routes`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/routes/jeddah-airport-to-makkah`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE}/routes/makkah-to-madinah`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE}/routes/madinah-to-makkah`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/routes/jeddah-airport-to-madinah`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${BASE}/routes/madinah-airport-to-madinah-hotel`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${BASE}/routes/madinah-airport-to-makkah`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Locations hub + city pages
    { url: `${BASE}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/locations/makkah`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/locations/madinah`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/locations/jeddah`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },

    // Fleet
    { url: `${BASE}/fleet`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },

    // Blog hub + posts
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/blog/jeddah-airport-to-makkah-taxi-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.78 },
    { url: `${BASE}/blog/makkah-madinah-taxi-vs-train`, lastModified: now, changeFrequency: "monthly", priority: 0.78 },
    { url: `${BASE}/blog/umrah-taxi-booking-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.78 },
    { url: `${BASE}/blog/makkah-ziyarat-sacred-sites-taxi`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/blog/umrah-taxi-prices-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // About + contact
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Trust + legal pages
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${BASE}/safety`, lastModified: now, changeFrequency: "yearly", priority: 0.65 },
    { url: `${BASE}/policies/booking`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/sitemap`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];
}
