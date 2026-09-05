import type { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbJsonLd, generateServiceJsonLdItems } from "@/lib/schema/jsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Fleet } from "@/components/sections/Fleet";
import { routes } from "@/lib/data/routes";
import { ArrowRight, Plane, MapPin, Hotel, Car, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Umrah Taxi Services — Airport Transfers, Ziyarah Tours & Hotel Transfers",
  description:
    "Taxi Bhai offers private airport pick-ups from Jeddah & Madinah airports, hotel-to-hotel transfers between Makkah and Madinah, and private Ziyarah tours. 24/7, fixed fares. Book on WhatsApp.",
  alternates: { canonical: "https://www.taxibhai.com/services" },
};

const serviceCategories = [
  {
    id: "airport",
    icon: <Plane className="w-8 h-8" aria-hidden="true" />,
    title: "Airport Pick-Ups & Drop-Offs",
    description:
      "Comfortable, timely private transfers from King Abdulaziz International Airport in Jeddah (IATA: JED) and Prince Mohammad bin Abdulaziz International Airport in Madinah (IATA: MED). The driver monitors your flight in real time and meets you in the arrivals hall with a name board — even if your flight is delayed.",
    bullets: [
      "Meet-and-greet in arrivals with name board",
      "Real-time flight monitoring",
      "Luggage loading assistance",
      "Fixed fare — no meter, no surge",
      "24/7 availability for all flight times",
    ],
    relatedRoutes: ["jed-airport-makkah", "makkah-jed-airport", "med-airport-madinah", "madinah-med-airport", "jed-airport-madinah", "jed-airport-jed-hotel"],
  },
  {
    id: "ziyarat",
    icon: <MapPin className="w-8 h-8" aria-hidden="true" />,
    title: "Ziyarah Tours (Sacred Site Visits)",
    description:
      "Private guided Ziyarah tours of the sacred Islamic sites around Makkah (Mecca) and Madinah Al-Munawwarah. See every significant site at your own pace, with a driver who knows the religious and historical context of each location.",
    bullets: [
      "Makkah Ziyarah: Jabal al-Nour (Hira Cave), Jabal Thawr, Mina, Muzdalifah, Arafat",
      "Madinah Ziyarah: Masjid Quba, Uhud, Al-Baqi Cemetery, Masjid al-Qiblatayn",
      "Jeddah Ziyarat day tour",
      "Makkah → Taif day trip (City of Roses)",
      "Madinah → Badr day trip (historic battlefield)",
    ],
    relatedRoutes: ["makkah-ziyarat", "madinah-ziyarat", "jeddah-ziyarat", "makkah-taif-ziyarat", "madinah-badr"],
  },
  {
    id: "hotel-transfers",
    icon: <Hotel className="w-8 h-8" aria-hidden="true" />,
    title: "Hotel-to-Hotel Transfers",
    description:
      "Seamless private transfers between your hotels in Makkah and Madinah — the two most important cities on the Umrah itinerary. A rest stop is included on the long Makkah–Madinah route, and child seats are available on request.",
    bullets: [
      "Makkah Hotel → Madinah Hotel (approx. 4–5 hrs)",
      "Madinah Hotel → Makkah Hotel (approx. 4–5 hrs)",
      "Rest stop included on inter-city routes",
      "Bottled water provided",
      "Fully private — no shared passengers",
    ],
    relatedRoutes: ["makkah-madinah", "madinah-makkah"],
  },
  {
    id: "city-transfers",
    icon: <Car className="w-8 h-8" aria-hidden="true" />,
    title: "City Transfers & Hourly Hire",
    description:
      "Local transfers within Makkah, Madinah, or Jeddah — hotel to train station, hotel to hospital, or any custom route. Hourly hire is also available if you need a vehicle and driver on standby for the day.",
    bullets: [
      "Hotel ↔ Haramain Train Station",
      "Jeddah Airport ↔ Jeddah Hotel",
      "Hourly hire from SAR 100/hr (Camry)",
      "Custom itineraries available",
      "All cities: Makkah, Madinah, Jeddah",
    ],
    relatedRoutes: ["hotel-train-station", "train-station-hotel", "jed-airport-jed-hotel", "per-hour"],
  },
];

export default function ServicesPage() {
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Services", url: "https://www.taxibhai.com/services" },
  ]);
  const serviceLdItems = generateServiceJsonLdItems();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {serviceLdItems.slice(0, 5).map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Private Umrah taxi services for every journey
          </h1>
          <p className="text-brand-300 text-lg max-w-2xl leading-relaxed">
            Airport transfers, inter-city routes, Ziyarah tours, and city transfers —
            all private, all fixed-fare, all available 24/7.
          </p>
        </div>
      </div>

      {/* Service categories */}
      <div className="py-16 lg:py-24 bg-parchment">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {serviceCategories.map((cat, i) => (
              <article
                key={cat.id}
                id={cat.id}
                className="bg-white border border-sand rounded-3xl overflow-hidden"
              >
                <div className="p-7 sm:p-10">
                  <div className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-start`}>
                    <div className="flex-1">
                      <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 mb-5">
                        {cat.icon}
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
                        {cat.title}
                      </h2>
                      <p className="text-brand-700/75 leading-relaxed mb-5">
                        {cat.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {cat.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-sm text-brand-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" aria-hidden="true" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-3 flex-wrap">
                        <a
                          href={`https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20a%20${encodeURIComponent(cat.title.toLowerCase())}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                        >
                          Book this service
                        </a>
                        <Link
                          href="/pricing"
                          className="inline-flex items-center gap-1.5 text-brand-700 hover:text-brand-600 font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
                        >
                          See fares <ArrowRight size={14} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>

                    {/* Related routes */}
                    <div className="lg:w-60 shrink-0 w-full">
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3">
                        Related routes
                      </h3>
                      <div className="flex flex-col gap-2">
                        {cat.relatedRoutes.map((rid) => {
                          const route = routes.find((r) => r.id === rid);
                          if (!route) return null;
                          return (
                            <Link
                              key={rid}
                              href={`/pricing#${rid}`}
                              className="flex items-center justify-between gap-2 bg-parchment border border-sand hover:border-brand-300 rounded-xl px-4 py-2.5 text-sm text-brand-800 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                            >
                              <span>{route.label}</span>
                              <ArrowRight size={12} className="shrink-0 text-brand-400" aria-hidden="true" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Duration strip */}
                <div className="bg-brand-50 border-t border-brand-100 px-7 sm:px-10 py-3 flex items-center gap-2">
                  <Clock size={14} className="text-brand-500" aria-hidden="true" />
                  <span className="text-brand-600 text-xs font-medium">Available 24/7 · Fixed fares · No hidden charges · WhatsApp booking</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Fleet />
      <CtaBanner />
    </>
  );
}
