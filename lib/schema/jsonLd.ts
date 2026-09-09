import { faqs } from "@/lib/data/faqs";
import { testimonials, aggregateRating } from "@/lib/data/testimonials";
import { routes } from "@/lib/data/routes";
import { vehicles } from "@/lib/data/vehicles";
import { pricingTable } from "@/lib/data/pricing";

const SITE_URL = "https://www.taxibhai.com";

const AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: aggregateRating.ratingValue,
  reviewCount: aggregateRating.reviewCount,
  bestRating: 5,
  worstRating: 1,
};

const SOCIAL_PROFILES = [
  "https://www.facebook.com/share/18gKWJ2csX/",
  "https://www.instagram.com/taxibhai_",
  "https://youtube.com/@taxi_bhai",
  "https://www.tiktok.com/@taxi_bhai",
  "https://www.linkedin.com/company/taxibhai/",
];

const CONTACT_POINTS = [
  {
    "@type": "ContactPoint",
    telephone: "+44-7413-467638",
    contactType: "customer service",
    areaServed: "GB",
    availableLanguage: ["English", "Urdu"],
    contactOption: "TollFree",
  },
  {
    "@type": "ContactPoint",
    telephone: "+966-57-306-7785",
    contactType: "customer service",
    areaServed: "SA",
    availableLanguage: ["Arabic", "English", "Urdu"],
    contactOption: "TollFree",
  },
  {
    "@type": "ContactPoint",
    telephone: "+92-371-2300606",
    contactType: "customer service",
    areaServed: "PK",
    availableLanguage: ["Urdu", "English"],
    contactOption: "TollFree",
  },
];

const AREA_SERVED = [
  { "@type": "City", name: "Makkah", sameAs: "https://en.wikipedia.org/wiki/Mecca" },
  { "@type": "City", name: "Madinah", sameAs: "https://en.wikipedia.org/wiki/Medina" },
  { "@type": "City", name: "Jeddah", sameAs: "https://en.wikipedia.org/wiki/Jeddah" },
  { "@type": "City", name: "Taif", sameAs: "https://en.wikipedia.org/wiki/Ta%27if" },
  { "@type": "City", name: "Badr", sameAs: "https://en.wikipedia.org/wiki/Badr,_Hejaz" },
];

export function generateSiteGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Taxi Bhai",
        alternateName: "TaxiBhai",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/images/logo/taxibhai-logo-header.webp`,
          contentUrl: `${SITE_URL}/images/logo/taxibhai-logo-header.webp`,
          width: 712,
          height: 256,
          caption: "Taxi Bhai — Umrah Taxi Service",
        },
        image: { "@id": `${SITE_URL}/#logo` },
        contactPoint: CONTACT_POINTS,
        sameAs: SOCIAL_PROFILES,
        email: "info@taxibhai.com",
        telephone: "+966-57-306-7785",
        aggregateRating: AGGREGATE_RATING,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "Taxi Bhai",
        alternateName: "TaxiBhai Saudi Taxi Service",
        description:
          "Professional Umrah taxi and private transfer service in Makkah, Madinah, and Jeddah, Saudi Arabia. Private airport transfers, hotel-to-hotel transfers, and Ziyarah tours. Available 24/7 with fixed fares.",
        url: SITE_URL,
        telephone: "+966-57-306-7785",
        email: "info@taxibhai.com",
        image: `${SITE_URL}/og-image.png`,
        logo: { "@id": `${SITE_URL}/#logo` },
        hasMap: "https://maps.google.com/?q=Taxi+Bhai,+Makkah,+Saudi+Arabia",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 21.3891,
          longitude: 39.8579,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "SA",
          addressLocality: "Makkah",
          addressRegion: "Makkah Province",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        areaServed: AREA_SERVED,
        aggregateRating: AGGREGATE_RATING,
        priceRange: "SAR 100–1800",
        currenciesAccepted: "SAR",
        paymentAccepted: "Cash, Bank Transfer",
        sameAs: SOCIAL_PROFILES,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Taxi Bhai",
        description:
          "Private Umrah taxi service in Makkah, Madinah & Jeddah — airport transfers, hotel-to-hotel, Ziyarah tours. Fixed fares, 24/7.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/pricing?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Taxi Bhai",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo/taxibhai-logo-header.webp`,
      width: 712,
      height: 256,
    },
    contactPoint: CONTACT_POINTS,
    sameAs: SOCIAL_PROFILES,
    email: "info@taxibhai.com",
    aggregateRating: AGGREGATE_RATING,
  };
}

export function generateTaxiServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${SITE_URL}/#taxiservice`,
    name: "Taxi Bhai — Umrah Private Taxi Service",
    description:
      "Affordable 24/7 private Umrah taxi service for pilgrimage and Ziyarah tours in Makkah (Mecca), Madinah, and Jeddah, including airport pick-ups and hotel-to-hotel transfers across Saudi Arabia.",
    url: SITE_URL,
    telephone: "+966-57-306-7785",
    email: "info@taxibhai.com",
    priceRange: "SAR 100–1800",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Bank Transfer",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: AREA_SERVED,
    provider: { "@id": `${SITE_URL}/#organization` },
    aggregateRating: AGGREGATE_RATING,
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
          priceSpecification: {
            "@type": "PriceSpecification",
            price: row.prices.camry,
            priceCurrency: "SAR",
            valueAddedTaxIncluded: true,
          },
          availability: "https://schema.org/InStock",
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
      "@id": `${SITE_URL}/pricing#${row.routeId}`,
      name: route?.label ?? row.routeId,
      description: route?.description ?? "",
      url: `${SITE_URL}/pricing#${row.routeId}`,
      provider: {
        "@id": `${SITE_URL}/#organization`,
        name: "Taxi Bhai",
      },
      areaServed: AREA_SERVED,
      offers: vehicles.map((v) => ({
        "@type": "Offer",
        name: v.name,
        priceCurrency: "SAR",
        price: row.prices[v.id as keyof typeof row.prices] ?? 0,
        priceSpecification: {
          "@type": "PriceSpecification",
          price: row.prices[v.id as keyof typeof row.prices] ?? 0,
          priceCurrency: "SAR",
          valueAddedTaxIncluded: true,
        },
        availability: "https://schema.org/InStock",
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
    "@id": `${SITE_URL}/faq#faqpage`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      "@id": `${SITE_URL}/faq#${faq.id}`,
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
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Taxi Bhai",
      image: `${SITE_URL}/og-image.png`,
    },
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
    name: t.route,
    reviewBody: t.body,
    datePublished: t.datePublished,
    publisher: {
      "@type": "Organization",
      name: "Google",
      url: "https://www.google.com",
    },
  }));
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
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
        url: `${SITE_URL}/pricing`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Provide Your Travel Details",
        text: "Enter your travel date, time, number of passengers, flight number (for airport transfers), luggage requirements, and your WhatsApp number.",
        url: `${SITE_URL}/book-ride`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Send Booking via WhatsApp",
        text: "Click 'Send on WhatsApp' — this opens WhatsApp with a pre-filled booking message to +966 57 306 7785. Taxi Bhai confirms your booking and driver details within minutes.",
        url: "https://wa.me/966573067785",
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
    alternateName: "TaxiBhai",
    description:
      "Professional Umrah taxi and private transfer service in Makkah, Madinah, and Jeddah. Airport transfers, hotel-to-hotel transfers, and Ziyarah tours. Available 24/7 with fixed fares.",
    url: SITE_URL,
    telephone: "+966-57-306-7785",
    email: "info@taxibhai.com",
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/images/logo/taxibhai-logo-header.webp`,
    hasMap: "https://maps.google.com/?q=Taxi+Bhai,+Makkah,+Saudi+Arabia",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.3891,
      longitude: 39.8579,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressLocality: "Makkah",
      addressRegion: "Makkah Province",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: AREA_SERVED,
    aggregateRating: AGGREGATE_RATING,
    priceRange: "SAR 100–1800",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Bank Transfer",
    sameAs: SOCIAL_PROFILES,
  };
}

export function generateWebPageJsonLd(opts: {
  type?: string;
  name: string;
  description: string;
  url: string;
  breadcrumb?: { name: string; url: string }[];
  speakableSelectors?: string[];
}) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": opts.type ?? "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en",
    potentialAction: {
      "@type": "ReadAction",
      target: [opts.url],
    },
  };

  if (opts.speakableSelectors && opts.speakableSelectors.length > 0) {
    base.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: opts.speakableSelectors,
    };
  }

  if (opts.breadcrumb && opts.breadcrumb.length > 0) {
    base.breadcrumb = {
      "@type": "BreadcrumbList",
      itemListElement: opts.breadcrumb.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    };
  }

  return base;
}

export function generateRouteItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/pricing#routelist`,
    name: "Taxi Bhai — All Umrah Transfer Routes",
    description: "Complete list of private taxi routes for Umrah pilgrims in Saudi Arabia with fixed SAR fares.",
    numberOfItems: routes.length,
    itemListElement: routes.map((route, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: route.label,
      description: route.description,
      url: `${SITE_URL}/pricing#${route.id}`,
    })),
  };
}
