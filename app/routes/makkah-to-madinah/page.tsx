import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, MapPin, ArrowRight, Train } from "lucide-react";
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

const ROUTE_ID = "makkah-madinah";
const PAGE_URL = "https://www.taxibhai.com/routes/makkah-to-madinah";

export const metadata: Metadata = {
  title: "Makkah to Madinah Taxi — Private Transfer from SAR 450 | Taxi Bhai",
  description:
    "Private taxi from Makkah to Madinah from SAR 450 in a sedan. ~420 km, 4–5 hrs via Haramain Expressway. Rest stop included. Door-to-door, no shared passengers. Book on WhatsApp: +966 57 306 7785.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Makkah to Madinah Taxi — SAR 450 | Taxi Bhai",
    description:
      "Door-to-door private transfer. Sedan SAR 450 · Staria SAR 550 · GMC SAR 1,000. Rest stop + water included. 24/7.",
    url: PAGE_URL,
  },
};

const faqs: PageFAQItem[] = [
  {
    question: "How much does a taxi from Makkah to Madinah cost?",
    answer:
      "A private taxi from Makkah to Madinah with Taxi Bhai costs SAR 450 in a Camry/Sonata sedan, SAR 550 in a Hyundai Staria (7-seater), SAR 1,000 in a GMC Yukon XL, SAR 650 in a Toyota Hiace, SAR 1,100 in a Coaster, or SAR 1,400 in a full-size bus. All fares are fixed — agreed before departure.",
  },
  {
    question: "How long does it take to travel from Makkah to Madinah by taxi?",
    answer:
      "The taxi journey from Makkah to Madinah takes approximately 4 to 5 hours, covering ~420 km via the Haramain Expressway (Route 15). A rest stop of approximately 20–30 minutes is included, usually around the halfway point near the Rabigh area. During Hajj season, allow extra time for traffic.",
  },
  {
    question: "Is private taxi better than the Haramain High-Speed Railway from Makkah to Madinah?",
    answer:
      "The Haramain train takes about 2 hours and is faster, but requires getting to the train station from your hotel, purchasing tickets, and arranging transport from Madinah station to your hotel. The total door-to-door time is often 4–5 hours anyway. A private taxi picks you up from your hotel and drops you at your next hotel with no station transfers — especially valuable for families with young children or heavy luggage.",
  },
  {
    question: "Is there a rest stop on the Makkah to Madinah taxi journey?",
    answer:
      "Yes — a rest stop is included on all Makkah–Madinah routes. The driver stops at a licensed rest area approximately halfway through the journey for 20–30 minutes. Bottled water is provided in the vehicle throughout the trip.",
  },
  {
    question: "Can I choose my departure time for the Makkah to Madinah taxi?",
    answer:
      "Yes — one of the key advantages of a private taxi is flexible departure. You choose the time that fits your itinerary. Overnight departures are also available for those with early-morning commitments in Madinah.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Routes", href: "/routes" },
  { name: "Makkah → Madinah", href: "/routes/makkah-to-madinah" },
];

const included = [
  "Hotel pickup at your Makkah hotel entrance",
  "Rest stop ~halfway (Rabigh area) for 20–30 minutes",
  "Bottled water provided throughout the journey",
  "Child seats available on request at no extra charge",
  "Fully private — no other passengers in your vehicle",
  "Direct drop-off to your Madinah hotel entrance",
];

export default function MakkahToMadinahPage() {
  const pricing = getPricingRowForRoute(ROUTE_ID);
  const webPageLd = generateWebPageJsonLd({
    name: "Makkah to Madinah Taxi Transfer — Private, Door-to-Door",
    description:
      "Private taxi from Makkah to Madinah. SAR 450 sedan, SAR 550 Staria, SAR 1,000 GMC. ~420 km, 4–5 hrs. Rest stop included. Door-to-door, 24/7.",
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

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} light />
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={16} className="text-gold-400" aria-hidden="true" />
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
              Intercity Transfer
            </p>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Makkah to Madinah Taxi Transfer
          </h1>
          <p className="answer-block text-brand-200 text-lg leading-relaxed max-w-2xl mb-8">
            Private door-to-door taxi from your Makkah hotel to Madinah Al-Munawwarah from{" "}
            <strong className="text-white">SAR 450</strong>. Covers ~420 km via the Haramain
            Expressway in 4–5 hours. A rest stop and bottled water are included. Fully
            private — your family, your vehicle, your schedule.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20taxi%20from%20Makkah%20to%20Madinah."
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
              All fare options <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Route stats bar */}
      <div className="bg-brand-800 border-b border-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2 text-brand-200">
            <MapPin size={14} className="text-gold-400" aria-hidden="true" />
            <span>~420 km</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <Clock size={14} className="text-gold-400" aria-hidden="true" />
            <span>4–5 hours</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <span className="text-gold-400 font-bold">SAR</span>
            <span>From SAR 450 (sedan)</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <span className="text-gold-400">✓</span>
            <span>Rest stop · Water · Door-to-door · 24/7</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 lg:py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Pricing table */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-2">
              Makkah to Madinah taxi fare — all vehicle options
            </h2>
            <p className="text-brand-600 mb-6 text-sm">
              All fares are fixed — agreed before departure, no surprises at the destination.
            </p>
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
                            <a
                              href={`https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20${encodeURIComponent(v.name)}%20from%20Makkah%20to%20Madinah.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-brand-600 hover:text-brand-800 font-medium text-xs whitespace-nowrap"
                            >
                              Book →
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="bg-brand-50 border-t border-sand px-5 py-3 text-xs text-brand-500">
                Prices include: fuel, driver, A/C, rest stop, bottled water, luggage loading. Payment: cash (SAR) or bank transfer.
              </div>
            </div>
          </section>

          {/* What's included */}
          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950 mb-5">
              What's included in the Makkah–Madinah transfer
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white border border-sand rounded-xl p-4">
                  <Check size={16} className="text-brand-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <p className="text-brand-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Train comparison */}
          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950 mb-4">
              Private taxi vs. Haramain High-Speed Railway
            </h2>
            <div className="bg-white border border-sand rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-50 border-b border-sand">
                      <th className="text-left py-3 px-5 font-semibold text-brand-700" />
                      <th className="text-center py-3 px-4 font-semibold text-brand-700">Taxi Bhai (Private)</th>
                      <th className="text-center py-3 px-4 font-semibold text-brand-700">Haramain Train</th>
                    </tr>
                  </thead>
                  <tbody className="text-brand-700">
                    {[
                      ["Door-to-door", "✓ Hotel to hotel", "✗ Station to station only"],
                      ["Journey time (door-to-door)", "4–5 hrs total", "2 hrs train + 1–2 hrs transfers"],
                      ["Departure flexibility", "✓ Any time you choose", "Fixed train schedules"],
                      ["Luggage", "✓ Unlimited, handled for you", "Weight limits, you carry it"],
                      ["Group price (7 people)", "SAR 550 total (Staria)", "SAR 100–300 × 7 people"],
                      ["Child-friendly", "✓ Child seats, your pace", "Limited space"],
                    ].map(([aspect, taxi, train]) => (
                      <tr key={aspect} className="border-b border-sand last:border-0">
                        <td className="py-3 px-5 font-medium text-brand-800 text-xs">{aspect}</td>
                        <td className="py-3 px-4 text-center text-xs text-brand-700">{taxi}</td>
                        <td className="py-3 px-4 text-center text-xs text-brand-500">{train}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-3 flex items-start gap-2 text-xs text-brand-500">
              <Train size={12} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>
                Taxi Bhai also provides{" "}
                <Link href="/pricing#hotel-train-station" className="text-brand-600 hover:underline">
                  hotel ↔ Haramain train station transfers
                </Link>{" "}
                for those choosing the train.
              </span>
            </div>
          </section>

          {/* Related links */}
          <section>
            <h2 className="font-display text-xl font-bold text-brand-950 mb-4">Related routes & services</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "Madinah → Makkah", href: "/routes/madinah-to-makkah", note: "Return transfer" },
                { label: "Jeddah Airport → Makkah", href: "/routes/jeddah-airport-to-makkah", note: "Airport pickup" },
                { label: "Madinah Ziyarat Tour", href: "/services/umrah-ziyarat-transport", note: "Sacred sites" },
                { label: "Intercity Transfers", href: "/services/intercity-transfers", note: "All intercity routes" },
                { label: "Group Transport", href: "/services/group-family-transport", note: "7–30+ passengers" },
                { label: "All Pricing", href: "/pricing", note: "Complete fare table" },
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

      <PageFAQ faqs={faqs} heading="Makkah to Madinah taxi — common questions" />
      <CtaBanner />
    </>
  );
}
