import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { generateBreadcrumbJsonLd, generateWebPageJsonLd } from "@/lib/schema/jsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Taxi Service Locations — Makkah, Madinah & Jeddah | Taxi Bhai",
  description:
    "Taxi Bhai serves Makkah (Mecca), Madinah (Medina), and Jeddah in Saudi Arabia. Private taxis for Umrah pilgrims — airport transfers, hotel-to-hotel, and Ziyarat tours. Fixed SAR fares, 24/7.",
  alternates: { canonical: "https://www.taxibhai.com/locations" },
  openGraph: {
    title: "Taxi Service Locations — Makkah, Madinah & Jeddah | Taxi Bhai",
    description:
      "Private Umrah taxi in Makkah, Madinah, and Jeddah. Fixed fares, 24/7 availability.",
    url: "https://www.taxibhai.com/locations",
  },
};

const PAGE_URL = "https://www.taxibhai.com/locations";

const locationCards = [
  {
    slug: "makkah",
    name: "Makkah",
    arabicName: "مكة المكرمة",
    altName: "Mecca",
    headline: "The holiest city in Islam — private taxi for Umrah, Ziyarat, and airport transfers",
    keyFacts: [
      "Nearest airport: Jeddah (JED), ~80 km",
      "Madinah: ~420 km, 4–5 hrs",
      "Ziyarat tour from SAR 200",
      "Airport transfer from SAR 250",
    ],
    href: "/locations/makkah",
  },
  {
    slug: "madinah",
    name: "Madinah",
    arabicName: "المدينة المنورة",
    altName: "Medina",
    headline: "City of the Prophet — airport transfers from MED, Ziyarat tours, intercity to Makkah",
    keyFacts: [
      "Madinah Airport (MED), ~15 km",
      "Makkah: ~420 km, 4–5 hrs",
      "Ziyarat tour from SAR 200",
      "Airport transfer from SAR 150",
    ],
    href: "/locations/madinah",
  },
  {
    slug: "jeddah",
    name: "Jeddah",
    arabicName: "جدة",
    altName: "Gateway city",
    headline: "International gateway — King Abdulaziz Airport (JED) connections to Makkah and Madinah",
    keyFacts: [
      "JED Airport, ~30 km from city",
      "Makkah: ~80 km, 1–1.5 hrs",
      "Madinah: ~430 km, 5–6 hrs",
      "JED → Makkah from SAR 250",
    ],
    href: "/locations/jeddah",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
];

export default function LocationsPage() {
  const bcSchema = breadcrumbItems.map(i => ({ name: i.name, url: i.href }));
  const webPageLd = generateWebPageJsonLd({
    name: "Taxi Bhai Locations — Makkah, Madinah & Jeddah",
    description:
      "Private Umrah taxi in Makkah, Madinah, and Jeddah. Airport transfers, intercity transfers, Ziyarat tours. Fixed SAR fares, 24/7.",
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
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            <MapPin size={13} className="inline mr-1" aria-hidden="true" />
            Service Area
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Taxi Bhai service locations — Saudi Arabia
          </h1>
          <p className="text-brand-200 text-lg leading-relaxed max-w-2xl">
            Taxi Bhai operates private taxi services across the three cities that matter most
            for Umrah pilgrims — Makkah, Madinah, and Jeddah — plus day trips to Taif and
            Badr. All transfers are private, fixed-fare, and available 24/7.
          </p>
        </div>
      </div>

      {/* Location cards */}
      <div className="py-16 lg:py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {locationCards.map((loc) => (
            <Link
              key={loc.slug}
              href={loc.href}
              className="block bg-white border border-sand hover:border-brand-300 rounded-2xl p-6 sm:p-8 group transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h2 className="font-display font-bold text-2xl text-brand-950 group-hover:text-brand-700 transition-colors">
                      {loc.name}
                    </h2>
                    <span className="text-brand-400 text-sm font-medium" dir="rtl">{loc.arabicName}</span>
                    <span className="text-brand-400 text-xs">({loc.altName})</span>
                  </div>
                  <p className="text-brand-600 text-sm mb-4 leading-relaxed">{loc.headline}</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {loc.keyFacts.map((fact) => (
                      <li key={fact} className="flex items-start gap-1.5 text-xs text-brand-600">
                        <span className="text-gold-500 mt-0.5">→</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="shrink-0 flex items-center gap-2 text-brand-600 group-hover:text-brand-800 transition-colors">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}

          {/* Context note */}
          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6">
            <h2 className="font-display font-bold text-lg text-brand-950 mb-2">
              Secondary destinations
            </h2>
            <p className="text-brand-700 text-sm leading-relaxed mb-4">
              Taxi Bhai also operates day trips from Makkah to <strong>Taif</strong> (City of Roses, ~180 km round trip) and from Madinah to <strong>Badr</strong> (historic Islamic battlefield, ~150 km one way). These are covered under the{" "}
              <Link href="/services/umrah-ziyarat-transport" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                Umrah & Ziyarat Transport service
              </Link>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/pricing#makkah-taif-ziyarat" className="text-sm text-brand-600 hover:text-brand-800 font-medium">
                Makkah → Taif fares →
              </Link>
              <Link href="/pricing#madinah-badr" className="text-sm text-brand-600 hover:text-brand-800 font-medium">
                Madinah → Badr fares →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CtaBanner />
    </>
  );
}
