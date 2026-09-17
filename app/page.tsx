import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { FareFinder } from "@/components/sections/FareFinder";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { Fleet } from "@/components/sections/Fleet";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BookingWidget } from "@/components/sections/BookingWidget";
import { RouteButtons } from "@/components/sections/RouteButtons";
import {
  generateTaxiServiceJsonLd,
  generateFAQPageJsonLd,
  generateReviewsJsonLd,
  generateBreadcrumbJsonLd,
  generateHowToBookJsonLd,
  generateWebPageJsonLd,
} from "@/lib/schema/jsonLd";
import { routes } from "@/lib/data/routes";
import { pricingTable } from "@/lib/data/pricing";
import { vehicles } from "@/lib/data/vehicles";

export const metadata: Metadata = {
  title: "Taxi Bhai — Umrah Taxi Service | Makkah, Madinah & Jeddah",
  description:
    "Book a private Umrah taxi 24/7 — Jeddah Airport to Makkah from SAR 250, Makkah to Madinah from SAR 450. Fixed fares, airport meet-and-greet, Ziyarah tours. 5.0 ★ on Google. WhatsApp +966 57 306 7785.",
  alternates: { canonical: "https://www.taxibhai.com" },
  openGraph: {
    title: "Taxi Bhai — Private Umrah Taxi | Makkah · Madinah · Jeddah",
    description:
      "24/7 private Umrah taxi. Airport transfers from SAR 250, Makkah–Madinah from SAR 450. Fixed fares, 5.0 ★ Google. Book on WhatsApp.",
    url: "https://www.taxibhai.com",
  },
};

export default function HomePage() {
  const taxiServiceLd = generateTaxiServiceJsonLd();
  const faqLd = generateFAQPageJsonLd();
  const reviewsLd = generateReviewsJsonLd();
  const howToLd = generateHowToBookJsonLd();
  const webPageLd = generateWebPageJsonLd({
    type: "WebPage",
    name: "Taxi Bhai — Umrah Taxi Service | Makkah, Madinah & Jeddah",
    description:
      "Private Umrah taxi service in Saudi Arabia — airport transfers, hotel-to-hotel transfers, and Ziyarah tours. Fixed fares 24/7.",
    url: "https://www.taxibhai.com",
    breadcrumb: [{ name: "Home", url: "https://www.taxibhai.com" }],
    speakableSelectors: ["h1", ".trust-bar", ".faq-answer", ".pricing-answer"],
  });
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
      />
      {reviewsLd.map((r, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(r) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Hero />
      <TrustBar />
      <RouteButtons />
      <BookingWidget />
      <Services />
      <Fleet />

      {/* Answer-first route content blocks — server-rendered for SEO/AI crawlers */}
      <section
        className="py-16 bg-white"
        aria-labelledby="routes-overview-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="routes-overview-heading"
            className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-10"
          >
            Umrah taxi routes &amp; fares — quick guide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes
              .filter((r) =>
                [
                  "jed-airport-makkah",
                  "makkah-madinah",
                  "madinah-makkah",
                  "makkah-jed-airport",
                  "med-airport-madinah",
                  "makkah-ziyarat",
                ].includes(r.id)
              )
              .map((route) => {
                const row = pricingTable.find((p) => p.routeId === route.id);
                const fromPrice = row ? row.prices.camry : null;
                return (
                  <article
                    key={route.id}
                    id={route.id}
                    className="bg-parchment border border-sand rounded-2xl p-5"
                  >
                    <h3 className="font-display font-bold text-brand-900 text-base mb-1">
                      {route.label}
                    </h3>
                    {fromPrice !== null && (
                      <p className="text-gold-700 font-bold text-sm mb-2">
                        From SAR {fromPrice}
                      </p>
                    )}
                    <p className="text-brand-700/70 text-sm leading-relaxed mb-3">
                      {route.description}
                    </p>
                    <p className="text-brand-500 text-xs">
                      {route.approxDuration} · {route.distanceKm}
                    </p>
                    {row && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {vehicles.map((v) => {
                          const p = row.prices[v.id as keyof typeof row.prices];
                          return (
                            <span
                              key={v.id}
                              className="inline-flex items-center gap-1 bg-white border border-sand rounded-full px-2 py-0.5 text-xs text-brand-700"
                            >
                              {v.name.split("/")[0]}: SAR {p}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </article>
                );
              })}
          </div>
        </div>
      </section>

      <FareFinder />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection preview />
      <CtaBanner />
    </>
  );
}
