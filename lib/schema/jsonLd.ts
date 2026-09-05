import { faqs } from "@/lib/data/faqs";
import { testimonials, aggregateRating } from "@/lib/data/testimonials";
import { routes } from "@/lib/data/routes";
import { vehicles } from "@/lib/data/vehicles";
import { pricingTable } from "@/lib/data/pricing";

const SITE_URL = "https://www.taxibhai.com";

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Taxi Bhai",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/og-image.png`,
    width: 1200,
    height: 630,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+44-7413-467638",
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: ["English", "Urdu"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+966-57-306-7785",
      contactType: "customer service",
      areaServed: "SA",
      availableLanguage: ["Arabic", "English", "Urdu"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+92-371-2300606",
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["Urdu", "English"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/share/18gKWJ2csX/",
    "https://www.instagram.com/taxibhai_",
    "https://youtube.com/@taxi_bhai",
    "https://www.tiktok.com/@taxi_bhai",
    "https://www.linkedin.com/company/taxibhai/",
  ],
  email: "info@taxibhai.com",
};

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    ...organization,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function generateTaxiServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Taxi Bhai",
    description:
      "Affordable 24/7 Umrah taxi service for pilgrimage and Ziyarah tours in Makkah, Madinah, and Jeddah, including airport pick-ups and hotel-to-hotel transfers.",
    url: SITE_URL,
    telephone: "+966-57-306-7785",
    email: "info@taxibhai.com",
    priceRange: "SAR 100–1800",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Bank Transfer",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: [
      { "@type": "City", name: "Makkah", sameAs: "https://en.wikipedia.org/wiki/Mecca" },
      { "@type": "City", name: "Madinah", sameAs: "https://en.wikipedia.org/wiki/Medina" },
      { "@type": "City", name: "Jeddah", sameAs: "https://en.wikipedia.org/wiki/Jeddah" },
      { "@type": "City", name: "Taif" },
      { "@type": "City", name: "Badr" },
    ],
    provider: {
      "@id": `${SITE_URL}/#organization`,
      name: "Taxi Bhai",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Taxi Bhai Umrah Transfer Routes",
      itemListElement: pricingTable.map((row, i) => {
        const route = routes.find((r) => r.id === row.routeId);
        return {
          "@type": "Offer",
          position: i + 1,
          name: route?.label ?? row.routeId,
          description: route?.description ?? "",
          priceCurrency: "SAR",
          price: row.prices.camry,
          eligibleTransportModes: "PrivateVehicle",
        };
      }),
    },
  };
}

export function generateServiceJsonLdItems() {
  return pricingTable.map((row) => {
    const route = routes.find((r) => r.id === row.routeId);
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: route?.label ?? row.routeId,
      description: route?.description ?? "",
      provider: {
        "@id": `${SITE_URL}/#organization`,
        name: "Taxi Bhai",
      },
      areaServed: [
        { "@type": "City", name: "Makkah" },
        { "@type": "City", name: "Madinah" },
        { "@type": "City", name: "Jeddah" },
      ],
      offers: vehicles.map((v) => ({
        "@type": "Offer",
        name: v.name,
        priceCurrency: "SAR",
        price: row.prices[v.id as keyof typeof row.prices] ?? 0,
        eligibleQuantity: {
          "@type": "QuantitativeValue",
          name: v.capacity,
        },
      })),
    };
  });
}

export function generateFAQPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateReviewsJsonLd() {
  return testimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "TaxiService",
      name: "Taxi Bhai",
    },
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
    },
    reviewBody: t.body,
    datePublished: new Date().toISOString().split("T")[0],
    publisher: {
      "@type": "Organization",
      name: "Google",
    },
  }));
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateHowToBookJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Book a Taxi with Taxi Bhai",
    description:
      "Book an Umrah taxi or airport transfer with Taxi Bhai via WhatsApp in three simple steps.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Choose Your Route and Vehicle",
        text: "Select your pickup location, drop-off location, and preferred vehicle (sedan, Staria, GMC, Hiace, Coaster, or bus). Use the fare finder on the website to see the exact price instantly.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Provide Your Travel Details",
        text: "Enter your travel date, time, number of passengers, flight number (for airport transfers), luggage requirements, and your WhatsApp number.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Send Booking via WhatsApp",
        text: "Click 'Send on WhatsApp' — this opens WhatsApp with a pre-filled booking message to +966 57 306 7785. Taxi Bhai confirms your booking and driver details within minutes.",
      },
    ],
  };
}

export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Taxi Bhai",
    description:
      "Professional Umrah taxi and private transfer service in Makkah, Madinah, and Jeddah. Airport transfers, hotel-to-hotel transfers, and Ziyarah tours. Available 24/7.",
    url: SITE_URL,
    telephone: "+966-57-306-7785",
    email: "info@taxibhai.com",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.3891,
      longitude: 39.8579,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: ["Makkah", "Madinah", "Jeddah", "Taif", "Badr"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5.0,
      reviewCount: 8,
      bestRating: 5,
    },
    priceRange: "SAR 100–1800",
    sameAs: organization.sameAs,
  };
}
