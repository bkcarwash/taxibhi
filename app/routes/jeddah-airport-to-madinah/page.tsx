import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, MapPin, ArrowRight } from "lucide-react";
import {
  generateBreadcrumbJsonLd,
  generateWebPageJsonLd,
  generatePageFAQJsonLd,
  generateRoutePageJsonLd,
} from "@/lib/schema/jsonLd";
import { vehicles } from "@/lib/data/vehicles";
import { getPricingRowForRoute } from "@/lib/data/pricing";
import type { VehicleId } from "@/lib/data/pricing";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageFAQ } from "@/components/ui/PageFAQ";
import type { PageFAQItem } from "@/components/ui/PageFAQ";

const ROUTE_ID = "jed-airport-madinah";
const PAGE_URL = "https://www.taxibhai.com/routes/jeddah-airport-to-madinah";

export const metadata: Metadata = {
  title: "Jeddah Airport to Madinah Taxi — Private Transfer from SAR 500 | Taxi Bhai",
  description:
    "Private taxi from Jeddah Airport (JED) to Madinah from SAR 500. ~430 km, 5–6 hrs. Rest stop included. Ideal for Madinah-first Umrah itineraries. Book on WhatsApp: +966 57 306 7785.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Jeddah Airport to Madinah Taxi — SAR 500 | Taxi Bhai",
    description: "JED to Madinah hotel. Sedan SAR 500 · Staria SAR 600 · GMC SAR 1,000. Rest stop included. 24/7.",
    url: PAGE_URL,
  },
};

const faqs: PageFAQItem[] = [
  {
    question: "How much is a taxi from Jeddah Airport to Madinah?",
    answer:
      "A private taxi from King Abdulaziz International Airport (JED) to a Madinah hotel costs SAR 500 in a sedan, SAR 600 in a Hyundai Staria (7-seater), SAR 1,000 in a GMC Yukon XL, SAR 750 in a Toyota Hiace, SAR 1,100 in a Coaster, or SAR 1,400 in a full-size bus.",
  },
  {
    question: "How long is the journey from Jeddah Airport to Madinah?",
    answer:
      "The journey covers approximately 430 km and takes 5 to 6 hours. The route goes north along the Haramain Expressway from Jeddah through the western coastal region to Madinah. A rest stop is included approximately halfway through the journey.",
  },
  {
    question: "Why would I fly into Jeddah and travel to Madinah rather than fly direct to Madinah?",
    answer:
      "Many Umrah packages route pilgrims through Jeddah's King Abdulaziz International Airport (JED) because it has more international connections and lower fares than Madinah Airport (MED). Pilgrims on a Madinah-first itinerary (visiting Madinah before Makkah) often land in Jeddah and take a private transfer directly to Madinah.",
  },
  {
    question: "Is the Jeddah Airport to Madinah transfer available at any time?",
    answer:
      "Yes — Taxi Bhai operates 24/7. The driver monitors your flight and meets you in the arrivals hall at Terminal 1 with a name board. Overnight transfers are available for late-night flights.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Routes", href: "/routes" },
  { name: "Jeddah Airport → Madinah", href: "/routes/jeddah-airport-to-madinah" },
];

export default function JeddahAirportToMadinahPage() {
  const pricing = getPricingRowForRoute(ROUTE_ID);
  const webPageLd = generateWebPageJsonLd({
    name: "Jeddah Airport to Madinah Taxi Transfer",
    description: "Private taxi from JED to Madinah hotel from SAR 500. ~430 km, 5–6 hrs. Rest stop included. 24/7.",
    url: PAGE_URL,
    breadcrumb: breadcrumbItems.map(i => ({ name: i.name, url: i.href })),
    speakableSelectors: ["h1", ".answer-block", "h2"],
  });
  const breadcrumbLd = generateBreadcrumbJsonLd(breadcrumbItems.map(i => ({ name: i.name, url: i.href })));
  const routeLd = generateRoutePageJsonLd(ROUTE_ID, PAGE_URL);
  const faqLd = generatePageFAQJsonLd(faqs, PAGE_URL);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {routeLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(routeLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} light />
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={16} className="text-gold-400" aria-hidden="true" />
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Airport Transfer</p>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Jeddah Airport to Madinah Taxi Transfer
          </h1>
          <p className="answer-block text-brand-200 text-lg leading-relaxed max-w-2xl mb-8">
            Private transfer from King Abdulaziz International Airport (JED) directly to your
            Madinah hotel from <strong className="text-white">SAR 500</strong>. Covers ~430 km
            in 5–6 hours. Rest stop and flight monitoring included. Perfect for Madinah-first
            Umrah itineraries.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20taxi%20from%20Jeddah%20Airport%20to%20Madinah." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-brand-900 font-semibold text-sm px-5 py-3 rounded-full hover:bg-brand-50 active:scale-95 transition-colors">
              Book on WhatsApp
            </a>
            <Link href="/pricing" className="inline-flex items-center gap-2 border border-white/30 text-white font-medium text-sm px-5 py-3 rounded-full hover:bg-white/10 transition-colors">
              All fare options <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-brand-800 border-b border-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2 text-brand-200"><MapPin size={14} className="text-gold-400" aria-hidden="true" /><span>~430 km</span></div>
          <div className="flex items-center gap-2 text-brand-200"><Clock size={14} className="text-gold-400" aria-hidden="true" /><span>5–6 hours</span></div>
          <div className="flex items-center gap-2 text-brand-200"><span className="text-gold-400 font-bold">SAR</span><span>From SAR 500</span></div>
          <div className="flex items-center gap-2 text-brand-200"><span className="text-gold-400">✓</span><span>Flight-tracked · Rest stop · 24/7</span></div>
        </div>
      </div>

      <div className="py-16 lg:py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-2">
              Fare from Jeddah Airport to Madinah — all vehicles
            </h2>
            <p className="text-brand-600 mb-6 text-sm">Fixed fares. No meter, no hidden charges.</p>
            <div className="bg-white border border-sand rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-50 border-b border-sand">
                      <th className="text-left py-3 px-5 font-semibold text-brand-700">Vehicle</th>
                      <th className="text-left py-3 px-4 font-semibold text-brand-700">Passengers</th>
                      <th className="text-right py-3 px-5 font-semibold text-brand-700">Fixed Fare (SAR)</th>
                      <th className="py-3 px-4 text-right" />
                    </tr>
                  </thead>
                  <tbody>
                    {vehicles.map((v) => {
                      const price = pricing?.prices[v.id as VehicleId];
                      if (!price) return null;
                      return (
                        <tr key={v.id} className="border-b border-sand last:border-0 hover:bg-brand-50/50 transition-colors">
                          <td className="py-3.5 px-5 font-medium text-brand-900">{v.name}</td>
                          <td className="py-3.5 px-4 text-brand-600">{v.capacity}</td>
                          <td className="py-3.5 px-5 text-right font-bold text-brand-900 text-base">{price}</td>
                          <td className="py-3.5 px-4 text-right">
                            <a href={`https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20${encodeURIComponent(v.name)}%20from%20Jeddah%20Airport%20to%20Madinah.`} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-800 font-medium text-xs whitespace-nowrap">Book →</a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="bg-brand-50 border-t border-sand px-5 py-3 text-xs text-brand-500">
                Includes: fuel, driver, A/C, rest stop, name board, flight monitoring. Cash (SAR) or bank transfer.
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950 mb-4">
              Why pilgrims travel this route
            </h2>
            <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 space-y-4 text-brand-700/80 text-sm sm:text-base leading-relaxed">
              <p>
                King Abdulaziz International Airport (JED) in Jeddah serves far more international flights than Madinah Airport (MED), including connections from the UK, Pakistan, South Asia, and Southeast Asia. Many Umrah travel packages route through Jeddah even when the pilgrim's first destination is Madinah.
              </p>
              <p>
                Pilgrims on a Madinah-first itinerary — spending time at Masjid an-Nabawi before travelling to Makkah for Umrah — typically book this transfer directly from Jeddah Airport to Madinah on arrival day, then later travel Madinah → Makkah.
              </p>
              <p>
                The 5–6 hour journey includes a comfort stop. For families travelling with children or heavy luggage, the private taxi offers significant advantages over public bus or shared transfer options.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-950 mb-4">Related routes & services</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "Madinah → Jeddah Airport", href: "/pricing#madinah-jed-airport", note: "Return transfer" },
                { label: "Madinah → Makkah", href: "/routes/madinah-to-makkah", note: "Intercity" },
                { label: "Jeddah Airport → Makkah", href: "/routes/jeddah-airport-to-makkah", note: "Direct to Makkah" },
                { label: "Airport Transfers", href: "/services/airport-transfers", note: "All airport routes" },
                { label: "Locations: Madinah", href: "/locations/madinah", note: "City guide" },
                { label: "All Pricing", href: "/pricing", note: "Complete fares" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="flex flex-col gap-0.5 bg-white border border-sand hover:border-brand-300 rounded-xl px-4 py-3.5 transition-colors">
                  <span className="text-brand-800 font-medium text-sm">{link.label}</span>
                  <span className="text-brand-400 text-xs">{link.note}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

      <PageFAQ faqs={faqs} heading="Jeddah Airport to Madinah — common questions" />
      <CtaBanner />
    </>
  );
}
