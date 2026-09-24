import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Clock } from "lucide-react";
import { generateBreadcrumbJsonLd, generateWebPageJsonLd } from "@/lib/schema/jsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Umrah Taxi Routes — All Transfers in Saudi Arabia | Taxi Bhai",
  description:
    "All private taxi routes for Umrah pilgrims: Jeddah Airport to Makkah, Makkah to Madinah, Madinah to Makkah, airport transfers, Ziyarat tours. Fixed SAR fares. Book on WhatsApp.",
  alternates: { canonical: "https://www.taxibhai.com/routes" },
  openGraph: {
    title: "All Umrah Taxi Routes in Saudi Arabia | Taxi Bhai",
    description:
      "Private taxi routes: JED Airport → Makkah from SAR 250, Makkah → Madinah from SAR 450, MED Airport → Hotel from SAR 150. Fixed fares, 24/7.",
    url: "https://www.taxibhai.com/routes",
  },
};

const PAGE_URL = "https://www.taxibhai.com/routes";

const routeGroups = [
  {
    heading: "Airport Transfers",
    description: "Flight-tracked private pickups from both Saudi airports",
    routes: [
      {
        slug: "jeddah-airport-to-makkah",
        label: "Jeddah Airport → Makkah",
        from: "King Abdulaziz Airport (JED)",
        to: "Makkah Hotel",
        distance: "~80 km",
        duration: "1–1.5 hrs",
        from_sar: 250,
        highlight: "Most popular route",
      },
      {
        slug: "madinah-airport-to-madinah-hotel",
        label: "Madinah Airport → Madinah Hotel",
        from: "Prince Mohammad Airport (MED)",
        to: "Madinah Hotel",
        distance: "~15 km",
        duration: "30–45 mins",
        from_sar: 150,
        highlight: "Shortest transfer",
      },
      {
        slug: "jeddah-airport-to-madinah",
        label: "Jeddah Airport → Madinah",
        from: "King Abdulaziz Airport (JED)",
        to: "Madinah Hotel",
        distance: "~430 km",
        duration: "5–6 hrs",
        from_sar: 500,
        highlight: "Madinah-first itinerary",
      },
    ],
  },
  {
    heading: "Intercity Transfers",
    description: "Door-to-door between Makkah, Madinah & Jeddah — rest stop included",
    routes: [
      {
        slug: "makkah-to-madinah",
        label: "Makkah → Madinah",
        from: "Makkah Hotel",
        to: "Madinah Hotel",
        distance: "~420 km",
        duration: "4–5 hrs",
        from_sar: 450,
        highlight: "Classic Umrah route",
      },
      {
        slug: "madinah-to-makkah",
        label: "Madinah → Makkah",
        from: "Madinah Hotel",
        to: "Makkah Hotel",
        distance: "~420 km",
        duration: "4–5 hrs",
        from_sar: 450,
        highlight: "Return journey",
      },
    ],
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Routes", href: "/routes" },
];

export default function RoutesPage() {
  const bcSchema = breadcrumbItems.map(i => ({ name: i.name, url: i.href }));
  const webPageLd = generateWebPageJsonLd({
    name: "All Umrah Taxi Routes in Saudi Arabia — Taxi Bhai",
    description:
      "Private taxi routes for Umrah pilgrims: JED Airport to Makkah, Makkah to Madinah, MED Airport to hotel, intercity transfers. Fixed SAR fares, 24/7.",
    url: PAGE_URL,
    breadcrumb: bcSchema,
    speakableSelectors: ["h1", "h2"],
  });
  const breadcrumbLd = generateBreadcrumbJsonLd(bcSchema);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} light />
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Routes</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Umrah taxi routes — all transfers in Saudi Arabia
          </h1>
          <p className="text-brand-200 text-lg leading-relaxed max-w-2xl">
            Private taxi routes for Umrah pilgrims across Makkah, Madinah, and Jeddah. Airport
            pickups, intercity hotel-to-hotel transfers, and Ziyarat tours — all with fixed SAR
            fares and 24/7 availability.
          </p>
        </div>
      </div>

      {/* Route groups */}
      <div className="py-16 lg:py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {routeGroups.map((group) => (
            <section key={group.heading}>
              <div className="mb-6">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950">
                  {group.heading}
                </h2>
                <p className="text-brand-600 mt-1 text-sm">{group.description}</p>
              </div>
              <div className="grid gap-4">
                {group.routes.map((route) => (
                  <Link
                    key={route.slug}
                    href={`/routes/${route.slug}`}
                    className="bg-white border border-sand hover:border-brand-300 rounded-2xl p-5 sm:p-6 group transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          {route.highlight && (
                            <span className="text-xs font-semibold text-brand-600 bg-brand-50 border border-brand-100 px-2 py-0.5 rounded-full">
                              {route.highlight}
                            </span>
                          )}
                        </div>
                        <h3 className="font-display font-bold text-brand-950 text-lg mb-1 group-hover:text-brand-700 transition-colors">
                          {route.label}
                        </h3>
                        <p className="text-brand-500 text-sm">
                          {route.from} → {route.to}
                        </p>
                      </div>
                      <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-1 shrink-0">
                        <div className="flex items-center gap-3 text-sm text-brand-500">
                          <span className="flex items-center gap-1">
                            <MapPin size={12} aria-hidden="true" />
                            {route.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} aria-hidden="true" />
                            {route.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-brand-500">from</span>
                          <span className="font-bold text-brand-900 text-lg">SAR {route.from_sar}</span>
                        </div>
                      </div>
                      <ArrowRight size={18} className="hidden sm:block text-brand-400 group-hover:text-brand-700 transition-colors shrink-0" aria-hidden="true" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          {/* Other routes */}
          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950 mb-6">
              All other routes & services
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Makkah → Jeddah Airport", href: "/pricing#makkah-jed-airport", note: "SAR 200 sedan" },
                { label: "Madinah Hotel → Jeddah Airport", href: "/pricing#madinah-jed-airport", note: "SAR 500 sedan" },
                { label: "Madinah Hotel → MED Airport", href: "/pricing#madinah-med-airport", note: "SAR 100 sedan" },
                { label: "Makkah Ziyarat Day Tour", href: "/pricing#makkah-ziyarat", note: "SAR 200 sedan" },
                { label: "Madinah Ziyarat Day Tour", href: "/pricing#madinah-ziyarat", note: "SAR 200 sedan" },
                { label: "Makkah → Taif Day Trip", href: "/pricing#makkah-taif-ziyarat", note: "SAR 450 sedan" },
                { label: "Madinah → Badr Day Trip", href: "/pricing#madinah-badr", note: "SAR 400+ sedan" },
                { label: "Hotel ↔ Haramain Train Station", href: "/pricing#hotel-train-station", note: "SAR 100 sedan" },
                { label: "Jeddah Airport → Jeddah Hotel", href: "/pricing#jed-airport-jed-hotel", note: "SAR 200 sedan" },
                { label: "Per Hour Hire", href: "/pricing#per-hour", note: "SAR 100/hr sedan" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between gap-3 bg-white border border-sand hover:border-brand-300 rounded-xl px-4 py-3.5 text-sm group transition-colors"
                >
                  <div>
                    <p className="font-medium text-brand-800 group-hover:text-brand-700">{link.label}</p>
                    <p className="text-brand-400 text-xs">{link.note}</p>
                  </div>
                  <ArrowRight size={14} className="text-brand-400 shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>

          {/* Cross-links */}
          <section className="bg-white border border-sand rounded-2xl p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-brand-950 mb-4">Explore by service or location</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "Airport Transfers", href: "/services/airport-transfers" },
                { label: "Intercity Transfers", href: "/services/intercity-transfers" },
                { label: "Ziyarat Tours", href: "/services/umrah-ziyarat-transport" },
                { label: "Group Transport", href: "/services/group-family-transport" },
                { label: "Taxi in Makkah", href: "/locations/makkah" },
                { label: "Taxi in Madinah", href: "/locations/madinah" },
                { label: "Taxi in Jeddah", href: "/locations/jeddah" },
                { label: "Our Fleet", href: "/fleet" },
                { label: "Full Pricing Table", href: "/pricing" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="flex items-center justify-between gap-2 border border-sand hover:border-brand-300 rounded-lg px-3 py-2.5 text-sm text-brand-700 hover:text-brand-900 transition-colors">
                  {link.label}
                  <ChevronRight size={12} className="text-brand-400 shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

      <CtaBanner />
    </>
  );
}
