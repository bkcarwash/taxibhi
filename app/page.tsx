import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Plane, ArrowLeftRight, MapPin, Users, Star, Car, MapPinned } from "lucide-react";
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
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-5 h-5" aria-hidden="true" />,
  ArrowLeftRight: <ArrowLeftRight className="w-5 h-5" aria-hidden="true" />,
  MapPin: <MapPin className="w-5 h-5" aria-hidden="true" />,
  Users: <Users className="w-5 h-5" aria-hidden="true" />,
  Star: <Star className="w-5 h-5" aria-hidden="true" />,
  Car: <Car className="w-5 h-5" aria-hidden="true" />,
};

const ROUTE_SLUGS: Record<string, string> = {
  "jed-airport-makkah": "/routes/jeddah-airport-to-makkah",
  "makkah-madinah": "/routes/makkah-to-madinah",
  "madinah-makkah": "/routes/madinah-to-makkah",
  "jed-airport-madinah": "/routes/jeddah-airport-to-madinah",
  "med-airport-madinah": "/routes/madinah-airport-to-madinah-hotel",
  "med-airport-makkah": "/routes/madinah-airport-to-makkah",
};

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

      {/* Service pillars hub — links every service pillar page from the homepage */}
      <section className="py-16 bg-white" aria-labelledby="service-pillars-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-2">All Services</p>
            <h2 id="service-pillars-heading" className="font-display text-2xl sm:text-3xl font-bold text-brand-950">
              Private taxi services for every part of your Umrah journey
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="group flex items-start gap-4 bg-parchment border border-sand hover:border-brand-300 rounded-2xl p-5 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 shrink-0 group-hover:bg-brand-100 transition-colors">
                  {SERVICE_ICONS[s.icon] ?? <Car className="w-5 h-5" aria-hidden="true" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-brand-950 text-base mb-0.5 group-hover:text-brand-700 transition-colors">{s.name}</h3>
                  <p className="text-brand-500 text-xs">From {s.startingFrom}</p>
                </div>
                <ArrowRight size={14} className="text-brand-400 shrink-0 mt-1 group-hover:text-brand-700 transition-colors" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular routes — links to individual route pages */}
      <section className="py-16 bg-parchment" aria-labelledby="routes-overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-2">Popular Routes</p>
              <h2 id="routes-overview-heading" className="font-display text-2xl sm:text-3xl font-bold text-brand-950">
                Umrah taxi routes &amp; fares
              </h2>
            </div>
            <Link href="/routes" className="hidden sm:flex items-center gap-1.5 text-brand-700 hover:text-brand-900 text-sm font-semibold transition-colors shrink-0">
              View all routes <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {routes
              .filter((r) => Object.keys(ROUTE_SLUGS).includes(r.id))
              .map((route) => {
                const row = pricingTable.find((p) => p.routeId === route.id);
                const fromPrice = row ? row.prices.camry : null;
                const slug = ROUTE_SLUGS[route.id];
                return (
                  <Link
                    key={route.id}
                    href={slug}
                    className="group bg-white border border-sand hover:border-brand-300 rounded-2xl p-5 flex flex-col transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-display font-bold text-brand-900 text-base group-hover:text-brand-700 transition-colors leading-snug">
                        {route.label}
                      </h3>
                      <ArrowRight size={14} className="text-brand-400 shrink-0 mt-0.5 group-hover:text-brand-700 transition-colors" aria-hidden="true" />
                    </div>
                    {fromPrice !== null && (
                      <p className="text-gold-700 font-bold text-sm mb-2">From SAR {fromPrice}</p>
                    )}
                    <p className="text-brand-500 text-xs mb-3">{route.approxDuration} · {route.distanceKm}</p>
                    {row && (
                      <div className="mt-auto flex flex-wrap gap-1.5">
                        {vehicles.slice(0, 3).map((v) => {
                          const p = row.prices[v.id as keyof typeof row.prices];
                          return (
                            <span key={v.id} className="inline-flex items-center gap-1 bg-parchment border border-sand rounded-full px-2 py-0.5 text-xs text-brand-700">
                              {v.name.split("/")[0]}: SAR {p}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </Link>
                );
              })}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="/routes" className="inline-flex items-center gap-1.5 text-brand-700 hover:text-brand-900 text-sm font-semibold transition-colors">
              View all routes <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Fleet />

      {/* Locations hub — links every city page from the homepage */}
      <section className="py-16 bg-white" aria-labelledby="locations-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-2">Service Area</p>
            <h2 id="locations-heading" className="font-display text-2xl sm:text-3xl font-bold text-brand-950">
              Where we operate
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {locations.map((loc) => (
              <Link
                key={loc.id}
                href={`/locations/${loc.slug}`}
                className="group bg-brand-900 hover:bg-brand-800 rounded-2xl p-6 flex flex-col gap-3 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display font-bold text-white text-xl">{loc.name}</h3>
                    <p className="text-brand-300 text-sm" dir="rtl">{loc.arabicName}</p>
                  </div>
                  <MapPinned size={20} className="text-gold-400 shrink-0" aria-hidden="true" />
                </div>
                <p className="text-brand-300 text-sm leading-relaxed flex-1">{loc.altNames[0]}</p>
                <div className="flex items-center gap-1.5 text-gold-400 text-sm font-medium">
                  Explore <ArrowRight size={13} aria-hidden="true" />
                </div>
              </Link>
            ))}
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
