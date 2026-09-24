import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Clock } from "lucide-react";
import {
  generateBreadcrumbJsonLd,
  generateWebPageJsonLd,
  generatePageFAQJsonLd,
  generateLocationPageJsonLd,
} from "@/lib/schema/jsonLd";
import { pricingTable } from "@/lib/data/pricing";
import type { VehicleId } from "@/lib/data/pricing";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageFAQ } from "@/components/ui/PageFAQ";
import type { PageFAQItem } from "@/components/ui/PageFAQ";

const PAGE_URL = "https://www.taxibhai.com/locations/jeddah";

export const metadata: Metadata = {
  title: "Taxi Service in Jeddah — Airport Transfers & City Rides | Taxi Bhai",
  description:
    "Private taxi in Jeddah: from JED Airport to Makkah from SAR 250, JED to Madinah from SAR 500, Jeddah city rides from SAR 200. 24/7, fixed fares. Book on WhatsApp: +966 57 306 7785.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Taxi Service in Jeddah — Airport & City | Taxi Bhai",
    description:
      "Private taxi in Jeddah: JED to Makkah from SAR 250, JED to Madinah from SAR 500, local city rides from SAR 200. Fixed fares, 24/7.",
    url: PAGE_URL,
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Jeddah", href: "/locations/jeddah" },
];

const faqs: PageFAQItem[] = [
  {
    question: "How much is Jeddah Airport to Makkah?",
    answer:
      "A private taxi from King Abdulaziz International Airport (JED) to a Makkah hotel costs SAR 250 in a Camry/Sonata sedan, SAR 350 in a Hyundai Staria (7-seater), or SAR 550 in a GMC Yukon XL. All fares are fixed — no meter, no surge pricing. The driver meets you in arrivals with a name board.",
  },
  {
    question: "How far is Jeddah from Makkah?",
    answer:
      "Jeddah and Makkah are approximately 80 km apart, connected by the Haramain Expressway (Route 40). A private taxi covers this distance in 1 to 1.5 hours under normal traffic conditions. During peak Hajj and Ramadan periods, allow 2 to 2.5 hours.",
  },
  {
    question: "Is there a taxi from Jeddah Airport to Madinah?",
    answer:
      "Yes — Taxi Bhai offers a direct private transfer from Jeddah Airport (JED) to Madinah hotels. The route covers approximately 430 km and takes 5 to 6 hours. The fixed sedan fare is SAR 500. A comfort stop is included. This route is popular with pilgrims whose Umrah itinerary starts with Madinah.",
  },
  {
    question: "What is the IATA code for Jeddah Airport?",
    answer:
      "The IATA code for Jeddah Airport is JED. The full name is King Abdulaziz International Airport. It is the primary international arrival point for Umrah pilgrims from Europe, South Asia, South-East Asia, and Africa. Terminal 1 handles international arrivals. The airport is located approximately 30 km north of central Jeddah.",
  },
];

const jeddahRoutes = [
  { id: "jed-airport-makkah", label: "JED Airport → Makkah", note: "~80 km · 1–1.5 hrs" },
  { id: "makkah-jed-airport", label: "Makkah → JED Airport", note: "~80 km · 1–1.5 hrs" },
  { id: "jed-airport-madinah", label: "JED Airport → Madinah", note: "~430 km · 5–6 hrs" },
  { id: "madinah-jed-airport", label: "Madinah → JED Airport", note: "~430 km · 5–6 hrs" },
  { id: "jed-airport-jed-hotel", label: "JED Airport → Jeddah Hotel", note: "~30 km · 20–40 mins" },
  { id: "jeddah-ziyarat", label: "Jeddah Ziyarat Tour", note: "Full day · heritage sites" },
];

const heritage = [
  {
    name: "Al-Balad (Historic Jeddah)",
    note: "UNESCO World Heritage Site since 2014. The old city of Jeddah, characterised by coral-stone merchant houses (Rawasheen), traditional souks, and historic mosques. A must for heritage travellers.",
  },
  {
    name: "Floating Mosque (Masjid Al-Rahma)",
    note: "Built over the Red Sea on the Corniche, Masjid Al-Rahma appears to float at high tide. One of Jeddah's most distinctive and photographed landmarks.",
  },
  {
    name: "Jeddah Corniche",
    note: "A 30 km waterfront promenade along the Red Sea, stretching from south of the city to the north. Includes parks, cafes, sculptures, and views of King Fahd Fountain.",
  },
  {
    name: "King Fahd Fountain",
    note: "The world's tallest fountain at 312 m — taller than the Eiffel Tower. Located in the Red Sea off the Corniche, it is visible from across the city and lit spectacularly at night.",
  },
];

export default function JeddahLocationPage() {
  const locationLd = generateLocationPageJsonLd({
    name: "Jeddah",
    arabicName: "جدة",
    description:
      "Jeddah is Saudi Arabia's main international arrival gateway for Umrah pilgrims. King Abdulaziz International Airport (JED) connects Jeddah to Makkah (~80 km) and Madinah (~430 km). Taxi Bhai provides private airport transfers, local Jeddah rides, and Jeddah Ziyarat heritage tours.",
    pageUrl: PAGE_URL,
    lat: 21.4858,
    lng: 39.1925,
  });
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Locations", url: "https://www.taxibhai.com/locations" },
    { name: "Jeddah", url: PAGE_URL },
  ]);
  const webPageLd = generateWebPageJsonLd({
    name: "Taxi Service in Jeddah — Airport Transfers & City Rides",
    description:
      "Private taxi in Jeddah: JED Airport to Makkah from SAR 250, JED to Madinah from SAR 500, Jeddah city rides from SAR 200. 24/7 fixed fares.",
    url: PAGE_URL,
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Locations", url: "https://www.taxibhai.com/locations" },
      { name: "Jeddah", url: PAGE_URL },
    ],
    speakableSelectors: ["h1", ".answer-block", "h2"],
  });
  const faqLd = generatePageFAQJsonLd(faqs, PAGE_URL);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} light />
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={16} className="text-gold-400" aria-hidden="true" />
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
              Jeddah · جدة · Gateway to Makkah
            </p>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
            Taxi Service in Jeddah
          </h1>
          <p className="text-brand-300 text-xl mb-5 font-arabic" lang="ar" dir="rtl">
            جدة
          </p>
          <p className="answer-block text-brand-200 text-lg leading-relaxed max-w-2xl mb-8">
            Taxi Bhai provides private taxi services in Jeddah — including transfers from King
            Abdulaziz International Airport (JED) to Makkah (~80 km, from{" "}
            <strong className="text-white">SAR 250</strong>) and to Madinah (~430 km, from{" "}
            <strong className="text-white">SAR 500</strong>), local Jeddah city rides, and
            Jeddah Ziyarat heritage tours. Jeddah is the main arrival gateway for international
            Umrah pilgrims.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20taxi%20in%20Jeddah."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-900 font-semibold text-sm px-5 py-3 rounded-full transition-colors hover:bg-brand-50 active:scale-95"
            >
              Book on WhatsApp
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium text-sm px-5 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              View all fares <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-brand-800 border-b border-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2 text-brand-200">
            <MapPin size={14} className="text-gold-400" aria-hidden="true" />
            <span>~80 km to Makkah · ~430 km to Madinah</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <Clock size={14} className="text-gold-400" aria-hidden="true" />
            <span>1–1.5 hrs to Makkah</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <span className="text-gold-400">✓</span>
            <span>24/7 · Fixed fares · No meter</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 lg:py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Section 1: Airport connections */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Jeddah Airport (JED) — connections to Makkah and Madinah
            </h2>
            <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 space-y-4 text-brand-700/80 leading-relaxed text-sm sm:text-base">
              <p>
                King Abdulaziz International Airport (IATA: <strong className="text-brand-900">JED</strong>)
                is the primary international arrival point for Umrah and Hajj pilgrims. Terminal 1
                handles international flights arriving from Europe, South Asia, South-East Asia,
                and Africa. The airport is located approximately 30 km north of Jeddah city
                centre.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-brand-50 rounded-xl p-4">
                  <p className="font-semibold text-brand-900 text-sm mb-1">JED → Makkah</p>
                  <p className="text-brand-600 text-xs leading-relaxed">
                    ~80 km · 1–1.5 hrs via Haramain Expressway.<br />
                    <strong>Sedan: SAR 250</strong> · Staria: SAR 350 · GMC: SAR 550
                  </p>
                </div>
                <div className="bg-brand-50 rounded-xl p-4">
                  <p className="font-semibold text-brand-900 text-sm mb-1">JED → Madinah</p>
                  <p className="text-brand-600 text-xs leading-relaxed">
                    ~430 km · 5–6 hrs via Haramain Highway.<br />
                    <strong>Sedan: SAR 500</strong> · Staria: SAR 600 · GMC: SAR 1000
                  </p>
                </div>
                <div className="bg-brand-50 rounded-xl p-4">
                  <p className="font-semibold text-brand-900 text-sm mb-1">JED → Jeddah Hotel</p>
                  <p className="text-brand-600 text-xs leading-relaxed">
                    ~30 km · 20–40 mins within Jeddah.<br />
                    <strong>Sedan: SAR 200</strong>
                  </p>
                </div>
                <div className="bg-brand-50 rounded-xl p-4">
                  <p className="font-semibold text-brand-900 text-sm mb-1">All airport pickups</p>
                  <p className="text-brand-600 text-xs leading-relaxed">
                    Name board in arrivals · Flight tracking · 24/7 availability
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Heritage sites */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Jeddah Ziyarat — heritage and landmark sites
            </h2>
            <p className="text-brand-700/80 mb-5 text-sm sm:text-base leading-relaxed">
              Jeddah offers a distinctive mix of Islamic heritage, Red Sea scenery, and historic
              architecture. A private Jeddah Ziyarat tour with Taxi Bhai visits the city's key
              sites in a single day, starting from{" "}
              <strong className="text-brand-900">SAR 600</strong> for a sedan.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {heritage.map((site) => (
                <div
                  key={site.name}
                  className="bg-white border border-sand rounded-xl p-4 flex flex-col gap-1.5"
                >
                  <p className="font-semibold text-brand-900 text-sm">{site.name}</p>
                  <p className="text-brand-600 text-xs leading-relaxed">{site.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Local Jeddah city rides */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Local Jeddah city rides
            </h2>
            <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 space-y-4 text-brand-700/80 leading-relaxed text-sm sm:text-base">
              <p>
                Beyond airport transfers, Taxi Bhai serves pilgrims and visitors who need
                transport within Jeddah itself — hotel to hotel, hotel to the airport for
                an early departure, or a flexible hourly hire for business or sightseeing.
              </p>
              <p>
                Common Jeddah city requests include: transport between the airport and Jeddah
                hotels during layovers, rides from hotels to Al-Balad for heritage visits, and
                transfers to the Haramain High-Speed Railway station for passengers travelling
                onward to Makkah or Madinah by train.
              </p>
              <p>
                Local Jeddah rides start from <strong className="text-brand-900">SAR 200</strong>{" "}
                in a sedan. Hourly hire is available at SAR 100/hr for flexible itineraries.
              </p>
            </div>
          </section>

          {/* Section 4: Pricing table */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-2">
              Jeddah taxi fares — sedan prices
            </h2>
            <p className="text-brand-600 mb-6 text-sm">
              Sedan (Camry/Sonata, 1–3 passengers) fixed fares. All fares are inclusive — no extras.
            </p>
            <div className="bg-white border border-sand rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-50 border-b border-sand">
                      <th className="text-left py-3 px-5 font-semibold text-brand-700">Route</th>
                      <th className="text-left py-3 px-4 font-semibold text-brand-700">Details</th>
                      <th className="text-right py-3 px-5 font-semibold text-brand-700">Sedan (SAR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jeddahRoutes.map((route) => {
                      const row = pricingTable.find((r) => r.routeId === route.id);
                      const price = row?.prices["camry" as VehicleId];
                      if (!price) return null;
                      return (
                        <tr key={route.id} className="border-b border-sand last:border-0 hover:bg-brand-50/50 transition-colors">
                          <td className="py-3.5 px-5 font-medium text-brand-900">{route.label}</td>
                          <td className="py-3.5 px-4 text-brand-500 text-xs">{route.note}</td>
                          <td className="py-3.5 px-5 text-right font-bold text-brand-900 text-base">
                            {price}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="bg-brand-50 border-t border-sand px-5 py-3 text-xs text-brand-500 flex items-center justify-between flex-wrap gap-2">
                <span>Staria, GMC, Hiace, Coaster and Bus rates available.</span>
                <Link href="/pricing" className="text-brand-600 hover:text-brand-800 font-medium">
                  Full pricing table →
                </Link>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section>
            <h2 className="font-display text-xl font-bold text-brand-950 mb-4">
              Related routes and services from Jeddah
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "JED Airport → Makkah", href: "/routes/jeddah-airport-to-makkah", note: "Most popular route" },
                { label: "JED Airport → Madinah", href: "/routes/jeddah-airport-to-madinah", note: "Long-haul transfer" },
                { label: "Airport Transfers", href: "/services/airport-transfers", note: "All airports" },
                { label: "View All Fares", href: "/pricing", note: "Complete pricing table" },
                { label: "Book a Ride", href: "/book-ride", note: "Booking form" },
                { label: "Our Fleet", href: "/fleet", note: "Vehicle options" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex flex-col gap-0.5 bg-white border border-sand hover:border-brand-300 rounded-xl px-4 py-3.5 transition-colors"
                >
                  <span className="text-brand-800 font-medium text-sm">{link.label}</span>
                  <span className="text-brand-400 text-xs">{link.note}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

      <PageFAQ faqs={faqs} heading="Jeddah taxi — common questions" />
      <CtaBanner />
    </>
  );
}
