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

const ROUTE_ID = "med-airport-madinah";
const PAGE_URL = "https://www.taxibhai.com/routes/madinah-airport-to-madinah-hotel";

export const metadata: Metadata = {
  title: "Madinah Airport (MED) to Hotel Taxi — From SAR 150 | Taxi Bhai",
  description:
    "Private taxi from Prince Mohammad bin Abdulaziz Airport (MED) to your Madinah hotel from SAR 150. ~15 km, 30–45 mins. Name board, flight-tracked, 24/7. Book on WhatsApp: +966 57 306 7785.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Madinah Airport to Hotel Taxi — SAR 150 | Taxi Bhai",
    description: "MED airport to Madinah hotel. Sedan SAR 150 · Staria SAR 200 · GMC SAR 400. Name board. 24/7.",
    url: PAGE_URL,
  },
};

const faqs: PageFAQItem[] = [
  {
    question: "How much is a taxi from Madinah Airport to a Madinah hotel?",
    answer:
      "A private taxi from Prince Mohammad bin Abdulaziz International Airport (MED) to a Madinah hotel costs SAR 150 in a sedan, SAR 200 in a Hyundai Staria, SAR 400 in a GMC Yukon XL, SAR 350 in a Toyota Hiace, SAR 500 in a Coaster, or SAR 700 in a full-size bus.",
  },
  {
    question: "How far is Madinah Airport from the Masjid an-Nabawi area?",
    answer:
      "Prince Mohammad bin Abdulaziz International Airport (MED) is approximately 15 km from the Al Haram area near Masjid an-Nabawi. The transfer takes 30–45 minutes depending on traffic. It is one of the shortest airport-to-hotel routes in the region.",
  },
  {
    question: "Does the driver wait if my flight to Madinah is delayed?",
    answer:
      "Yes — Taxi Bhai monitors your flight number in real time. The driver adjusts their arrival time to match your actual landing and waits in the arrivals hall with a name board. No extra charge for flight delays.",
  },
  {
    question: "What is the IATA code for Madinah Airport?",
    answer:
      "Madinah Airport's IATA code is MED. Its full official name is Prince Mohammad bin Abdulaziz International Airport (PMIA). It serves domestic routes within Saudi Arabia and international pilgrimage flights from many countries.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Routes", href: "/routes" },
  { name: "Madinah Airport → Hotel", href: "/routes/madinah-airport-to-madinah-hotel" },
];

export default function MadinahAirportToHotelPage() {
  const pricing = getPricingRowForRoute(ROUTE_ID);
  const webPageLd = generateWebPageJsonLd({
    name: "Madinah Airport (MED) to Hotel Taxi Transfer",
    description: "Private taxi from MED to Madinah hotel from SAR 150. ~15 km, 30–45 mins. Name board, flight-tracked, 24/7.",
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
            <Plane size={16} className="text-gold-400" aria-hidden="true" />
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Airport Transfer</p>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Madinah Airport to Hotel Taxi Transfer
          </h1>
          <p className="answer-block text-brand-200 text-lg leading-relaxed max-w-2xl mb-8">
            Private transfer from Prince Mohammad bin Abdulaziz International Airport (MED) to
            your Madinah hotel from <strong className="text-white">SAR 150</strong>. Just ~15 km
            and 30–45 minutes. Driver monitors your flight and meets you in arrivals with a name
            board — available 24/7.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20taxi%20from%20Madinah%20Airport%20to%20my%20hotel." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-brand-900 font-semibold text-sm px-5 py-3 rounded-full hover:bg-brand-50 active:scale-95 transition-colors">
              Book on WhatsApp
            </a>
            <Link href="/pricing" className="inline-flex items-center gap-2 border border-white/30 text-white font-medium text-sm px-5 py-3 rounded-full hover:bg-white/10 transition-colors">
              All fares <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-brand-800 border-b border-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2 text-brand-200"><MapPin size={14} className="text-gold-400" aria-hidden="true" /><span>~15 km</span></div>
          <div className="flex items-center gap-2 text-brand-200"><Clock size={14} className="text-gold-400" aria-hidden="true" /><span>30–45 minutes</span></div>
          <div className="flex items-center gap-2 text-brand-200"><span className="text-gold-400 font-bold">SAR</span><span>From SAR 150</span></div>
          <div className="flex items-center gap-2 text-brand-200"><span className="text-gold-400">✓</span><span>Flight-tracked · Name board · 24/7</span></div>
        </div>
      </div>

      <div className="py-16 lg:py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-2">
              Madinah Airport to hotel fare — all vehicles
            </h2>
            <p className="text-brand-600 mb-6 text-sm">Fixed fares. No meter. One of the shortest airport routes in the Holy Cities.</p>
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
                            <a href={`https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20${encodeURIComponent(v.name)}%20from%20Madinah%20Airport%20to%20my%20hotel.`} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-800 font-medium text-xs whitespace-nowrap">Book →</a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="bg-brand-50 border-t border-sand px-5 py-3 text-xs text-brand-500">
                Includes: fuel, driver, A/C, name board, flight monitoring, luggage assistance. Cash (SAR) or bank transfer.
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950 mb-5">What's included</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Name board meet & greet inside arrivals hall",
                "Real-time flight monitoring — no need to call if delayed",
                "Luggage loading and unloading assistance",
                "Air-conditioned, clean vehicle",
                "Direct drop-off to your hotel entrance",
                "24/7 availability — all flight times covered",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white border border-sand rounded-xl p-4">
                  <Check size={16} className="text-brand-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <p className="text-brand-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-950 mb-4">Related routes & services</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "Madinah Hotel → MED Airport", href: "/pricing#madinah-med-airport", note: "Return drop-off" },
                { label: "Madinah → Makkah", href: "/routes/madinah-to-makkah", note: "Intercity transfer" },
                { label: "Madinah Ziyarat Tour", href: "/services/umrah-ziyarat-transport", note: "Sacred sites" },
                { label: "Airport Transfers", href: "/services/airport-transfers", note: "All airports" },
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

      <PageFAQ faqs={faqs} heading="Madinah Airport transfers — common questions" />
      <CtaBanner />
    </>
  );
}
