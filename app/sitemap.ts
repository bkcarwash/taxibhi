import type { MetadataRoute } from "next";

const BASE = "https://www.taxibhai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-09-23");

  return [
    // Core
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/book-ride`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // Services hub + pillars
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/airport-transfers`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/services/intercity-transfers`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/services/umrah-ziyarat-transport`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/services/group-family-transport`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/executive-chauffeur`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },

    // Routes hub + route pages
    { url: `${BASE}/routes`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/routes/jeddah-airport-to-makkah`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE}/routes/makkah-to-madinah`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE}/routes/madinah-to-makkah`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/routes/jeddah-airport-to-madinah`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${BASE}/routes/madinah-airport-to-madinah-hotel`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },

    // Locations hub + city pages
    { url: `${BASE}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/locations/makkah`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/locations/madinah`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/locations/jeddah`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },

    // Fleet
    { url: `${BASE}/fleet`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },

    // About + contact
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
