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

const ROUTE_ID = "jed-airport-makkah";
const PAGE_URL = "https://www.taxibhai.com/routes/jeddah-airport-to-makkah";

export const metadata: Metadata = {
  title: "Jeddah Airport to Makkah Taxi — Private Transfer, Fixed Fare | Taxi Bhai",
  description:
    "Private taxi from Jeddah Airport (JED) to Makkah from SAR 250 in a sedan. ~80 km, 1–1.5 hrs via Haramain Expressway. Driver meets you in arrivals with name board. Book on WhatsApp: +966 57 306 7785.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Jeddah Airport to Makkah Taxi — SAR 250 | Taxi Bhai",
    description:
      "Private transfer from JED to your Makkah hotel. Sedan SAR 250 · Staria SAR 350 · GMC SAR 550. Flight-tracked, name board, 24/7.",
    url: PAGE_URL,
  },
};

const faqs: PageFAQItem[] = [
  {
    question: "How much is a taxi from Jeddah Airport to Makkah?",
    answer:
      "A private taxi from King Abdulaziz International Airport (JED) in Jeddah to a Makkah hotel costs SAR 250 in a Camry/Sonata sedan, SAR 350 in a Hyundai Staria (7-seater), SAR 550 in a GMC Yukon XL, SAR 400 in a Toyota Hiace, or SAR 800 in a Coaster. All fares are fixed — no meter, no surge pricing.",
  },
  {
    question: "How long does the taxi from Jeddah Airport to Makkah take?",
    answer:
      "The journey from Jeddah Airport to Makkah takes approximately 1 to 1.5 hours under normal traffic conditions, covering ~80 km via the Haramain Expressway. During peak Hajj season or Friday afternoons, allow an extra 20–30 minutes. The driver monitors traffic in real time.",
  },
  {
    question: "Does the driver wait if my flight is delayed?",
    answer:
      "Yes — Taxi Bhai monitors your flight number in real time. If your flight is delayed, the driver adjusts the pickup time and waits in the arrivals hall at no extra charge. You do not need to call or update anyone.",
  },
  {
    question: "Where exactly does the driver meet me at Jeddah Airport?",
    answer:
      "Your driver meets you inside the arrivals hall of King Abdulaziz International Airport holding a name board with your name. International arrivals use Terminal 1. After you collect your luggage and clear customs, the driver will be visible in the arrivals meeting area.",
  },
  {
    question: "Can I book a Jeddah Airport to Makkah taxi at night or early morning?",
    answer:
      "Yes — Taxi Bhai operates 24 hours a day, 7 days a week. Early-morning and late-night flights are fully covered. The driver will be at the airport waiting whenever your flight lands.",
  },
  {
    question: "How do I book a taxi from Jeddah Airport to Makkah?",
    answer:
      "The fastest way is to WhatsApp +966 57 306 7785 with your flight number, arrival date and time, hotel address in Makkah, number of passengers, and preferred vehicle. Confirmation is usually within minutes. You can also use the booking form at taxibhai.com/book-ride, which builds the WhatsApp message automatically.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Routes", href: "/routes" },
  { name: "Jeddah Airport → Makkah", href: "/routes/jeddah-airport-to-makkah" },
];

const included = [
  "Meet & greet in arrivals hall with name board showing your name",
  "Real-time flight monitoring — driver adjusts for any delay",
  "Luggage loading and unloading assistance",
  "Air-conditioned, clean vehicle (pre-cleaned before every journey)",
  "Direct drop-off to your hotel entrance in Makkah",
  "24/7 WhatsApp support if anything changes",
];

export default function JeddahAirportToMakkahPage() {
  const pricing = getPricingRowForRoute(ROUTE_ID);
  const webPageLd = generateWebPageJsonLd({
    name: "Jeddah Airport to Makkah Taxi Transfer — Private, Fixed Fare",
    description:
      "Private taxi from King Abdulaziz International Airport (JED) to Makkah. SAR 250 sedan, SAR 350 Staria, SAR 550 GMC. ~80 km, 1–1.5 hrs. Flight-tracked, 24/7.",
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
            <Plane size={16} className="text-gold-400" aria-hidden="true" />
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
              Airport Transfer
            </p>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Jeddah Airport to Makkah Taxi Transfer
          </h1>
          <p className="answer-block text-brand-200 text-lg leading-relaxed max-w-2xl mb-8">
            Private taxi from King Abdulaziz International Airport (JED) to your Makkah hotel
            from <strong className="text-white">SAR 250</strong>. Covers ~80 km via the
            Haramain Expressway in 1–1.5 hours. Driver monitors your flight and meets you in
            arrivals with a name board — fixed fare, no meter, available 24/7.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20taxi%20from%20Jeddah%20Airport%20to%20Makkah."
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
            <span>~80 km</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <Clock size={14} className="text-gold-400" aria-hidden="true" />
            <span>1–1.5 hours</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <span className="text-gold-400 font-bold">SAR</span>
            <span>From SAR 250 (sedan)</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <span className="text-gold-400">✓</span>
            <span>Flight-tracked · Name board · 24/7</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 lg:py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* How the pickup works */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              How does the Jeddah Airport pickup work?
            </h2>
            <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8">
              <ol className="space-y-5">
                {[
                  { step: "1", title: "Share your flight details at booking", body: "When you book via WhatsApp, provide your flight number, arrival date and time, hotel name and area in Makkah, number of passengers, and preferred vehicle. The driver uses your flight number to track the arrival status in real time." },
                  { step: "2", title: "Driver monitors your flight", body: "Taxi Bhai tracks your flight from departure. If your flight is delayed by 30 minutes or 3 hours, the driver adjusts their timing automatically. You do not need to send updates." },
                  { step: "3", title: "Name board in arrivals", body: "After you collect your luggage and clear customs at King Abdulaziz International Airport, your driver will be waiting in the arrivals meeting area holding a board with your name. International arrivals are at Terminal 1." },
                  { step: "4", title: "Direct to your Makkah hotel", body: "The driver loads your luggage and drives directly to your hotel in Makkah via the Haramain Expressway. Drop-off is at the hotel entrance. The journey takes 1–1.5 hours under normal conditions." },
                ].map((s) => (
                  <li key={s.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {s.step}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-900 mb-1">{s.title}</p>
                      <p className="text-brand-700/80 text-sm leading-relaxed">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Pricing table */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-2">
              Jeddah Airport to Makkah fare — all vehicle options
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
                              href={`https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20${encodeURIComponent(v.name)}%20from%20Jeddah%20Airport%20to%20Makkah.`}
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
                Prices include: fuel, driver, A/C, luggage assist, name board, flight monitoring. Payment: cash (SAR) or bank transfer.
              </div>
            </div>
          </section>

          {/* What's included */}
          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950 mb-5">
              What's included in every airport transfer
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
              About the Jeddah Airport to Makkah route
            </h2>
            <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 space-y-4 text-brand-700/80 leading-relaxed text-sm sm:text-base">
              <p>
                King Abdulaziz International Airport (IATA: JED) in Jeddah is the primary arrival point for international Umrah pilgrims. The airport is located approximately 80 km northwest of Makkah city centre. Most pilgrim hotels — whether in the Al Haram area, Aziziyah, or Abraj Al Bait — are reachable in 1 to 1.5 hours under normal traffic conditions.
              </p>
              <p>
                The route runs via the Haramain Expressway (Route 40), a high-speed dual carriageway connecting Jeddah's urban area to the outskirts of Makkah. The driver will have your hotel address confirmed before departure and will use the most appropriate entry point into the city.
              </p>
              <p>
                During peak Hajj season and Ramadan Umrah peak, journey times can extend to 2–2.5 hours due to traffic volume at city entry points. Taxi Bhai drivers are experienced with all seasonal traffic patterns and will plan the timing accordingly.
              </p>
            </div>
          </section>

          {/* Internal links */}
          <section>
            <h2 className="font-display text-xl font-bold text-brand-950 mb-4">
              Related routes & services
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "Makkah → Jeddah Airport", href: "/pricing#makkah-jed-airport", note: "Return transfer" },
                { label: "Makkah → Madinah", href: "/routes/makkah-to-madinah", note: "Intercity transfer" },
                { label: "Makkah Ziyarat Tour", href: "/services/umrah-ziyarat-transport", note: "Sacred site tour" },
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

      <PageFAQ faqs={faqs} heading="Jeddah Airport to Makkah — common questions" />
      <CtaBanner />
    </>
  );
}
