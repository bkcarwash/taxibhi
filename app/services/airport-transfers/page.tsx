import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, MapPin, ArrowRight, Plane } from "lucide-react";
import {
  generateBreadcrumbJsonLd,
  generateWebPageJsonLd,
  generatePageFAQJsonLd,
  generateServicePillarJsonLd,
} from "@/lib/schema/jsonLd";
import { pricingTable } from "@/lib/data/pricing";
import type { VehicleId } from "@/lib/data/pricing";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageFAQ } from "@/components/ui/PageFAQ";
import type { PageFAQItem } from "@/components/ui/PageFAQ";

const PAGE_URL = "https://www.taxibhai.com/services/airport-transfers";

export const metadata: Metadata = {
  title: "Airport Transfer Service — Jeddah (JED) & Madinah (MED) | Taxi Bhai",
  description:
    "Private airport transfers from Jeddah Airport (JED) to Makkah from SAR 250 and Madinah Airport (MED) from SAR 150. Flight-tracked, name board meet & greet, 24/7. Book on WhatsApp.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Airport Transfer Service — Jeddah (JED) & Madinah (MED) | Taxi Bhai",
    description:
      "Private airport transfers from Jeddah Airport (JED) to Makkah from SAR 250 and Madinah Airport (MED) from SAR 150. Flight-tracked, name board meet & greet, 24/7.",
    url: PAGE_URL,
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Airport Transfers", href: "/services/airport-transfers" },
];

const airportRoutes = [
  { id: "jed-airport-makkah", label: "Jeddah Airport (JED) → Makkah", duration: "1–1.5 hrs", distance: "~80 km" },
  { id: "makkah-jed-airport", label: "Makkah → Jeddah Airport (JED)", duration: "1–1.5 hrs", distance: "~80 km" },
  { id: "med-airport-madinah", label: "Madinah Airport (MED) → Madinah Hotel", duration: "30–45 mins", distance: "~15 km" },
  { id: "madinah-med-airport", label: "Madinah Hotel → Madinah Airport (MED)", duration: "30–45 mins", distance: "~15 km" },
  { id: "jed-airport-madinah", label: "Jeddah Airport (JED) → Madinah", duration: "5–6 hrs", distance: "~430 km" },
  { id: "jed-airport-jed-hotel", label: "Jeddah Airport (JED) → Jeddah Hotel", duration: "20–40 mins", distance: "~30 km" },
];

const vehicleColumns: { id: VehicleId; label: string }[] = [
  { id: "camry", label: "Sedan" },
  { id: "staria", label: "Staria (7)" },
  { id: "gmc", label: "GMC XL (7)" },
  { id: "hiace", label: "Hiace (12)" },
  { id: "coaster", label: "Coaster (30)" },
  { id: "bus", label: "Bus (30+)" },
];

const faqs: PageFAQItem[] = [
  {
    question: "How far is Jeddah Airport from Makkah?",
    answer:
      "Jeddah's King Abdulaziz International Airport (JED) is approximately 80 km from the centre of Makkah. By private taxi via the Haramain Expressway the journey takes 1 to 1.5 hours depending on traffic. Taxi Bhai's fixed fare for this route starts from SAR 250 in a sedan.",
  },
  {
    question: "Does the driver wait if my flight is delayed?",
    answer:
      "Yes. Taxi Bhai tracks your flight in real time using your flight number provided at booking. If your flight is delayed — whether by 30 minutes or several hours — the driver adjusts their arrival time accordingly and waits in the arrivals hall. There is no extra charge for flight delays.",
  },
  {
    question: "Can I book an airport transfer at midnight or early morning?",
    answer:
      "Yes, Taxi Bhai operates 24 hours a day, 7 days a week, including late-night arrivals, pre-dawn departures, and all hours in between. There is no extra charge for unsociable hours — the quoted fare applies at all times.",
  },
  {
    question: "Do you cover both Jeddah Airport (JED) and Madinah Airport (MED)?",
    answer:
      "Yes. Taxi Bhai covers King Abdulaziz International Airport in Jeddah (IATA: JED) and Prince Mohammad bin Abdulaziz International Airport in Madinah (IATA: MED). Both airports are served 24/7 with fixed fares and flight-monitored meet & greet.",
  },
  {
    question: "How much is Madinah Airport to a Madinah hotel?",
    answer:
      "The fixed fare from Madinah Airport (MED) to a Madinah hotel (near Al-Masjid an-Nabawi) starts from SAR 150 in a sedan. The journey is roughly 15 km and takes 30 to 45 minutes. Larger vehicles — Staria SAR 200, GMC SAR 400, Hiace SAR 350 — are available for families and groups.",
  },
];

export default function AirportTransfersPage() {
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Services", url: "https://www.taxibhai.com/services" },
    { name: "Airport Transfers", url: PAGE_URL },
  ]);

  const serviceLd = generateServicePillarJsonLd({
    serviceId: "airport-transfers",
    name: "Airport Transfers",
    description:
      "Private airport transfers from Jeddah Airport (JED) and Madinah Airport (MED). Flight-tracked, name board meet & greet, fixed fares, 24/7.",
    pageUrl: PAGE_URL,
    startingPrice: "SAR 150",
  });

  const webPageLd = generateWebPageJsonLd({
    name: "Airport Transfer Service — Jeddah (JED) & Madinah (MED) | Taxi Bhai",
    description:
      "Private airport transfers from Jeddah Airport (JED) to Makkah from SAR 250 and Madinah Airport (MED) from SAR 150. Flight-tracked, name board meet & greet, 24/7.",
    url: PAGE_URL,
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Services", url: "https://www.taxibhai.com/services" },
      { name: "Airport Transfers", url: PAGE_URL },
    ],
    speakableSelectors: ["h1", ".answer-block", "h2"],
  });

  const faqLd = generatePageFAQJsonLd(faqs, PAGE_URL);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} light />
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Airport Transfers
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Private Airport Transfer Service — Jeddah &amp; Madinah Airports
          </h1>
          <p className="answer-block text-brand-300 text-lg max-w-2xl leading-relaxed mb-8">
            Taxi Bhai offers private airport transfers from Jeddah Airport (JED) from SAR&nbsp;250 and
            Madinah Airport (MED) from SAR&nbsp;150. Your driver monitors your flight number in real
            time, meets you in arrivals with a name board, and is available 24/7 — no extra charge
            for delays or late-night arrivals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20an%20airport%20transfer."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold px-7 py-3.5 rounded-full text-base transition-all"
            >
              Book on WhatsApp
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full text-base transition-all"
            >
              View All Fares <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-parchment py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Section 1 — Airports served */}
          <section aria-labelledby="airports-served">
            <h2 id="airports-served" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Which airports does Taxi Bhai serve?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-6">
              Taxi Bhai operates private transfers from two international airports in Saudi Arabia:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white border border-sand rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Plane size={20} className="text-brand-700" aria-hidden="true" />
                  <span className="font-display font-bold text-brand-950 text-lg">Jeddah Airport (JED)</span>
                </div>
                <p className="text-brand-700/80 text-sm leading-relaxed mb-3">
                  King Abdulaziz International Airport is the primary gateway for Umrah pilgrims. It has two
                  international terminals — the dedicated Hajj Terminal (Terminal 1) and the main North Terminal.
                  The airport is approximately 80&nbsp;km from Makkah and 430&nbsp;km from Madinah.
                </p>
                <ul className="space-y-1.5 text-sm text-brand-700">
                  <li className="flex items-center gap-2"><MapPin size={13} aria-hidden="true" className="text-gold-400 shrink-0" /> JED → Makkah: from SAR 250</li>
                  <li className="flex items-center gap-2"><MapPin size={13} aria-hidden="true" className="text-gold-400 shrink-0" /> JED → Madinah: from SAR 500</li>
                  <li className="flex items-center gap-2"><MapPin size={13} aria-hidden="true" className="text-gold-400 shrink-0" /> JED → Jeddah Hotel: from SAR 200</li>
                </ul>
              </div>
              <div className="bg-white border border-sand rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Plane size={20} className="text-brand-700" aria-hidden="true" />
                  <span className="font-display font-bold text-brand-950 text-lg">Madinah Airport (MED)</span>
                </div>
                <p className="text-brand-700/80 text-sm leading-relaxed mb-3">
                  Prince Mohammad bin Abdulaziz International Airport serves Madinah directly. It has a single
                  international terminal with an arrivals hall where your driver will meet you. The airport is
                  only ~15&nbsp;km from Al-Masjid an-Nabawi, making it the fastest route into the city.
                </p>
                <ul className="space-y-1.5 text-sm text-brand-700">
                  <li className="flex items-center gap-2"><MapPin size={13} aria-hidden="true" className="text-gold-400 shrink-0" /> MED → Madinah Hotel: from SAR 150</li>
                  <li className="flex items-center gap-2"><MapPin size={13} aria-hidden="true" className="text-gold-400 shrink-0" /> Madinah Hotel → MED: from SAR 100</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 — Flight monitoring */}
          <section aria-labelledby="flight-monitoring">
            <h2 id="flight-monitoring" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              How does flight monitoring work?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-6">
              When you book an airport pick-up, simply provide your flight number. Taxi Bhai tracks your
              flight status automatically. Here is what happens step by step:
            </p>
            <ol className="space-y-4">
              {[
                { step: "1", title: "You provide your flight number at booking", body: "When sending your booking via WhatsApp or the booking form, include your IATA flight number (e.g. EK803 or SV892). This is all the driver needs." },
                { step: "2", title: "Driver monitors real-time flight status", body: "From two hours before your scheduled landing, the driver watches the live arrival feed. If the flight is delayed — whether by 30 minutes or 3 hours — the driver adjusts their departure from base accordingly." },
                { step: "3", title: "Driver is at arrivals when you land", body: "The driver arrives at the airport at the revised landing time plus 20–30 minutes to allow for passport control and baggage collection. They wait in the arrivals hall holding a name board with your name." },
                { step: "4", title: "You walk out — no waiting, no stress", body: "Spot your name on the board, follow the driver to the vehicle already parked in the designated private hire bay, and let the driver assist with your luggage. No delays, no surcharges." },
              ].map((item) => (
                <li key={item.step} className="flex gap-4 bg-white border border-sand rounded-2xl p-5">
                  <span className="w-8 h-8 rounded-full bg-brand-900 text-white text-sm font-bold flex items-center justify-center shrink-0">{item.step}</span>
                  <div>
                    <p className="font-semibold text-brand-950 mb-1">{item.title}</p>
                    <p className="text-brand-700/80 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Section 3 — Pricing table */}
          <section aria-labelledby="airport-pricing">
            <h2 id="airport-pricing" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              How much does an airport transfer cost?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              All fares are fixed in SAR. No meters, no surge pricing, no hidden charges.
              <Link href="/pricing" className="text-brand-700 underline underline-offset-2 hover:text-brand-900 ml-1">
                See the full pricing page
              </Link>{" "}
              for every route and vehicle.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-sand">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-brand-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold min-w-[200px]">Route</th>
                    <th className="text-left px-3 py-3 font-semibold whitespace-nowrap">Duration</th>
                    {vehicleColumns.map((v) => (
                      <th key={v.id} className="text-right px-3 py-3 font-semibold whitespace-nowrap">{v.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {airportRoutes.map((route, i) => {
                    const row = pricingTable.find((r) => r.routeId === route.id);
                    return (
                      <tr key={route.id} className={i % 2 === 0 ? "bg-white" : "bg-parchment/60"}>
                        <td className="px-4 py-3 text-brand-950 font-medium">{route.label}</td>
                        <td className="px-3 py-3 text-brand-500 whitespace-nowrap">
                          <span className="flex items-center gap-1"><Clock size={12} aria-hidden="true" />{route.duration}</span>
                        </td>
                        {vehicleColumns.map((v) => (
                          <td key={v.id} className="px-3 py-3 text-right text-brand-900 font-semibold whitespace-nowrap">
                            {row ? `SAR ${row.prices[v.id]}` : "—"}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-brand-500 text-xs mt-2">All prices in Saudi Riyal (SAR). Price shown is the fixed total fare for the vehicle, not per person.</p>
          </section>

          {/* Section 4 — What's included */}
          <section aria-labelledby="whats-included">
            <h2 id="whats-included" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              What is included in every airport transfer?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Every Taxi Bhai airport transfer includes these six standard features — at no extra charge:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Real-time flight tracking — driver adjusts for all delays",
                "Name board meet & greet inside the arrivals hall",
                "Luggage loading and unloading assistance",
                "Air-conditioned, clean, well-maintained private vehicle",
                "Fixed fare — zero surcharges for delays, night hours, or traffic",
                "24/7 availability — early morning, late night, and all hours",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white border border-sand rounded-2xl px-5 py-4">
                  <Check size={16} className="text-brand-700 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-brand-700/80 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5 — Internal links */}
          <section aria-labelledby="related-routes">
            <h2 id="related-routes" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Which route do you need?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Browse route-specific pages for full details, journey times, and advice for each transfer:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/routes/jeddah-airport-to-makkah", label: "Jeddah Airport → Makkah", sub: "~80 km · 1–1.5 hrs · from SAR 250" },
                { href: "/routes/madinah-airport-to-madinah-hotel", label: "Madinah Airport → Madinah Hotel", sub: "~15 km · 30–45 mins · from SAR 150" },
                { href: "/routes/jeddah-airport-to-madinah", label: "Jeddah Airport → Madinah", sub: "~430 km · 5–6 hrs · from SAR 500" },
                { href: "/fleet", label: "Choose your vehicle", sub: "Sedan, Staria, GMC, Hiace, Coaster, Bus" },
                { href: "/pricing", label: "Full pricing for all routes", sub: "Every vehicle, every route — fixed SAR fares" },
                { href: "/book-ride", label: "Book your transfer now", sub: "WhatsApp booking, confirmed in minutes" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between gap-3 bg-white border border-sand hover:border-brand-400 rounded-2xl px-5 py-4 group transition-colors"
                >
                  <div>
                    <p className="font-semibold text-brand-950 text-sm group-hover:text-brand-700 transition-colors">{link.label}</p>
                    <p className="text-brand-500 text-xs mt-0.5">{link.sub}</p>
                  </div>
                  <ArrowRight size={14} className="text-brand-400 shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>

      <PageFAQ faqs={faqs} heading="Airport transfers — common questions" />
      <CtaBanner />
    </>
  );
}
