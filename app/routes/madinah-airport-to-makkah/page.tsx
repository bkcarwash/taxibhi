import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, MapPin, ArrowRight, Plane } from "lucide-react";
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

const ROUTE_ID = "med-airport-makkah";
const PAGE_URL = "https://www.taxibhai.com/routes/madinah-airport-to-makkah";

export const metadata: Metadata = {
  title: "Madinah Airport to Makkah Taxi — Private Transfer from SAR 500 | Taxi Bhai",
  description:
    "Private taxi from Madinah Airport (MED) to Makkah from SAR 500 in a sedan. ~435 km, 5–5.5 hrs. Rest stop included. Name board in arrivals. Book on WhatsApp: +966 57 306 7785.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Madinah Airport to Makkah Taxi — SAR 500 | Taxi Bhai",
    description:
      "MED airport to Makkah hotel. Sedan SAR 500 · Staria SAR 600 · GMC SAR 1,000. Rest stop + water included. 24/7.",
    url: PAGE_URL,
  },
};

const faqs: PageFAQItem[] = [
  {
    question: "How much is a taxi from Madinah Airport to Makkah?",
    answer:
      "A private taxi from Prince Mohammad bin Abdulaziz International Airport (MED) in Madinah to a Makkah hotel costs SAR 500 in a Camry/Sonata sedan, SAR 600 in a Hyundai Staria (7-seater), SAR 1,000 in a GMC Yukon XL, SAR 700 in a Toyota Hiace, or SAR 1,100 in a Coaster. All fares are fixed — no hidden charges.",
  },
  {
    question: "How long does the journey from Madinah Airport to Makkah take?",
    answer:
      "The journey from MED Airport to a Makkah hotel covers approximately 435 km and takes 5 to 5.5 hours. The route goes south along the Haramain Expressway. A rest stop of around 20–30 minutes is included midway.",
  },
  {
    question: "Who flies into Madinah Airport instead of Jeddah Airport for Umrah?",
    answer:
      "Many Umrah pilgrims choose a Madinah-first itinerary — they visit Madinah before Makkah. Airlines from Pakistan, Bangladesh, Indonesia, and the UK offer direct flights to Madinah Airport (MED). After spending time in Madinah, these pilgrims need a transfer to Makkah to perform Umrah.",
  },
  {
    question: "Does the driver wait if my flight into Madinah is delayed?",
    answer:
      "Yes — Taxi Bhai monitors your flight number in real time. If your flight is delayed, the driver adjusts their arrival time and waits in the arrivals hall. There is no extra charge for flight delays.",
  },
  {
    question: "Is there a rest stop on the Madinah Airport to Makkah route?",
    answer:
      "Yes. A rest stop is included on all routes over two hours. The driver stops at a licensed rest area approximately halfway through the journey, usually near the Rabigh area. Bottled water is provided in the vehicle throughout the trip.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Routes", href: "/routes" },
  { name: "Madinah Airport → Makkah", href: "/routes/madinah-airport-to-makkah" },
];

const included = [
  "Name-board meet & greet in the arrivals hall — driver holds your name",
  "Real-time flight monitoring — driver adjusts for any delay",
  "Luggage loading and unloading assistance",
  "Rest stop approximately halfway through the journey",
  "Bottled water provided in the vehicle",
  "Fixed fare — no hidden charges, no meter",
];

export default function MadinahAirportToMakkahPage() {
  const pricing = getPricingRowForRoute(ROUTE_ID);
  const webPageLd = generateWebPageJsonLd({
    name: "Madinah Airport to Makkah Taxi Transfer — Private, Fixed Fare",
    description:
      "Private taxi from Prince Mohammad bin Abdulaziz International Airport (MED) to Makkah. SAR 500 sedan, SAR 600 Staria, SAR 1,000 GMC. ~435 km, 5–5.5 hrs. Rest stop, flight-tracked, 24/7.",
    url: PAGE_URL,
    breadcrumb: breadcrumbItems.map((i) => ({ name: i.name, url: i.href })),
    speakableSelectors: ["h1", ".answer-block", "h2"],
  });
  const breadcrumbLd = generateBreadcrumbJsonLd(
    breadcrumbItems.map((i) => ({ name: i.name, url: i.href }))
  );
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
            <Plane size={16} className="text-gold-400" aria-hidden="true" />
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
              Airport Transfer
            </p>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Madinah Airport to Makkah Taxi Transfer
          </h1>
          <p className="answer-block text-brand-200 text-lg leading-relaxed max-w-2xl mb-8">
            A private taxi from Madinah Airport (Prince Mohammad bin Abdulaziz International, IATA: MED)
            to a Makkah hotel costs <strong className="text-white">SAR 500</strong> in a sedan, covering
            ~435 km in approximately 5 to 5.5 hours. A rest stop is included. The driver meets you in the
            arrivals hall with a name board.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20taxi%20from%20Madinah%20Airport%20to%20Makkah."
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
            <span>~435 km</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <Clock size={14} className="text-gold-400" aria-hidden="true" />
            <span>5–5.5 hours</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <span className="text-gold-400 font-bold">SAR</span>
            <span>From SAR 500 (sedan)</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <span className="text-gold-400">✓</span>
            <span>Rest stop · Name board · 24/7</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 lg:py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Pricing table */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-2">
              Madinah Airport to Makkah fare — all vehicle options
            </h2>
            <p className="text-brand-600 mb-6 text-sm">
              All fares are fixed and inclusive. No meter, no surge pricing, no hidden charges.
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
                          <td className="py-3.5 px-5 text-right font-bold text-brand-900 text-base">
                            {price}
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <a
                              href={`https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20${encodeURIComponent(v.name)}%20from%20Madinah%20Airport%20to%20Makkah.`}
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
                Prices include: fuel, driver, A/C, luggage assist, name board, flight monitoring, rest stop. Payment: cash (SAR) or bank transfer.
              </div>
            </div>
          </section>

          {/* What's included */}
          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950 mb-5">
              What&apos;s included in every airport transfer
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

          {/* Route context */}
          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950 mb-4">
              Who uses the Madinah Airport to Makkah transfer?
            </h2>
            <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 space-y-4 text-brand-700/80 leading-relaxed text-sm sm:text-base">
              <p>
                This route serves pilgrims on a <strong className="text-brand-900">Madinah-first itinerary</strong> —
                those who fly into{" "}
                <Link href="/locations/madinah" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                  Madinah
                </Link>{" "}
                before travelling to{" "}
                <Link href="/locations/makkah" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                  Makkah
                </Link>{" "}
                for Umrah. Many airlines from Pakistan, Bangladesh, Indonesia, and the UK operate direct
                flights to MED, making it a common entry point.
              </p>
              <p>
                After completing their time in Madinah, pilgrims need a direct{" "}
                <Link href="/services/airport-transfers" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                  airport transfer service
                </Link>{" "}
                south to Makkah. The ~435 km journey follows the Haramain Expressway and takes 5 to 5.5 hours.
                A rest stop is included around the midpoint, usually near the Rabigh area.
              </p>
              <p>
                If you are travelling in the opposite direction after Umrah, see{" "}
                <Link href="/routes/makkah-to-madinah" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                  Makkah to Madinah
                </Link>
                . If you need a shorter transfer on arrival — from the airport to your hotel in Madinah — see{" "}
                <Link href="/routes/madinah-airport-to-madinah-hotel" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                  Madinah Airport to hotel
                </Link>
                . View{" "}
                <Link href="/fleet" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                  our fleet
                </Link>{" "}
                to choose the right vehicle for your group size.
              </p>
            </div>
          </section>

          {/* Related routes */}
          <section>
            <h2 className="font-display text-xl font-bold text-brand-950 mb-4">
              Related routes &amp; services
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "Makkah → Madinah", href: "/routes/makkah-to-madinah", note: "Return intercity transfer" },
                { label: "Madinah Airport → Madinah Hotel", href: "/routes/madinah-airport-to-madinah-hotel", note: "Short airport transfer" },
                { label: "Jeddah Airport → Makkah", href: "/routes/jeddah-airport-to-makkah", note: "Alternative airport route" },
                { label: "Airport Transfer Service", href: "/services/airport-transfers", note: "All airport routes" },
                { label: "View All Fares", href: "/pricing", note: "Complete pricing table" },
                { label: "Book a Ride", href: "/book-ride", note: "Booking form" },
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

      <PageFAQ faqs={faqs} heading="Madinah Airport to Makkah — common questions" />
      <CtaBanner />
    </>
  );
}
