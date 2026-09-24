import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, ArrowRight, Users } from "lucide-react";
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

const PAGE_URL = "https://www.taxibhai.com/services/intercity-transfers";

export const metadata: Metadata = {
  title: "Intercity Taxi Transfers — Makkah, Madinah & Jeddah | Taxi Bhai",
  description:
    "Private door-to-door intercity taxi between Makkah, Madinah & Jeddah. Makkah to Madinah from SAR 450. Rest stop + water included. 24/7, no shared passengers. Book on WhatsApp.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Intercity Taxi Transfers — Makkah, Madinah & Jeddah | Taxi Bhai",
    description:
      "Private door-to-door intercity taxi between Makkah, Madinah & Jeddah. Makkah to Madinah from SAR 450. Rest stop + water included. 24/7, no shared passengers.",
    url: PAGE_URL,
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Intercity Transfers", href: "/services/intercity-transfers" },
];

const intercityRoutes = [
  { id: "makkah-madinah", label: "Makkah → Madinah", duration: "4–5 hrs", distance: "~420 km" },
  { id: "madinah-makkah", label: "Madinah → Makkah", duration: "4–5 hrs", distance: "~420 km" },
  { id: "jed-airport-madinah", label: "Jeddah Airport → Madinah", duration: "5–6 hrs", distance: "~430 km" },
  { id: "madinah-jed-airport", label: "Madinah → Jeddah Airport", duration: "5–6 hrs", distance: "~430 km" },
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
    question: "How much is Makkah to Madinah by private taxi?",
    answer:
      "The fixed fare from Makkah to Madinah starts from SAR 450 in a sedan (Camry/Sonata). For a 7-seater Hyundai Staria it is SAR 550, GMC Yukon XL SAR 1,000, Toyota Hiace (12 seats) SAR 650, Coaster (30 seats) SAR 1,100, and full-size bus SAR 1,400. All fares are door-to-door and include a rest stop.",
  },
  {
    question: "Is there a rest stop on the Makkah–Madinah route?",
    answer:
      "Yes. The ~420 km journey takes 4 to 5 hours, so Taxi Bhai includes a stop at a licensed rest area approximately halfway. The stop typically lasts 15 to 20 minutes and allows passengers to use facilities, pray, and stretch. Bottled water is also provided throughout the journey.",
  },
  {
    question: "Can I travel from Makkah to Madinah at any time of day or night?",
    answer:
      "Yes. Taxi Bhai operates 24 hours a day, 7 days a week with no time-of-day surcharge. Many pilgrims prefer early morning or late-night departures to avoid daytime heat and traffic. Simply choose your preferred departure time when booking.",
  },
  {
    question: "How long does the Makkah to Madinah journey take?",
    answer:
      "The Makkah to Madinah distance is approximately 420 km. By private taxi via the main highway the journey typically takes 4 to 5 hours, including a rest stop. Travel time can vary slightly during Hajj season or if there is heavy traffic near the holy cities.",
  },
  {
    question: "What is the price from Madinah to Makkah?",
    answer:
      "The Madinah to Makkah fare is the same as Makkah to Madinah — starting from SAR 450 in a sedan. Both directions cover the same ~420 km route and include a rest stop and bottled water. See the full pricing table on this page or visit the pricing page for all vehicle options.",
  },
];

export default function IntercityTransfersPage() {
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Services", url: "https://www.taxibhai.com/services" },
    { name: "Intercity Transfers", url: PAGE_URL },
  ]);

  const serviceLd = generateServicePillarJsonLd({
    serviceId: "intercity-transfers",
    name: "Intercity Transfers",
    description:
      "Private door-to-door intercity taxi between Makkah, Madinah, and Jeddah. Rest stop and water included. 24/7, no shared passengers.",
    pageUrl: PAGE_URL,
    startingPrice: "SAR 450",
  });

  const webPageLd = generateWebPageJsonLd({
    name: "Intercity Taxi Transfers — Makkah, Madinah & Jeddah | Taxi Bhai",
    description:
      "Private door-to-door intercity taxi between Makkah, Madinah & Jeddah. Makkah to Madinah from SAR 450. Rest stop + water included. 24/7, no shared passengers.",
    url: PAGE_URL,
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Services", url: "https://www.taxibhai.com/services" },
      { name: "Intercity Transfers", url: PAGE_URL },
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
            Intercity Transfers
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Private Intercity Transfers — Makkah, Madinah &amp; Jeddah
          </h1>
          <p className="answer-block text-brand-300 text-lg max-w-2xl leading-relaxed mb-8">
            Taxi Bhai provides private, door-to-door intercity transfers between Makkah, Madinah, and Jeddah.
            The Makkah–Madinah route (~420&nbsp;km, 4–5 hrs) starts from SAR&nbsp;450 in a sedan and includes
            a rest stop and bottled water. No shared passengers — your vehicle is exclusively yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20an%20intercity%20transfer."
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

          {/* Section 1 — Available routes */}
          <section aria-labelledby="available-routes">
            <h2 id="available-routes" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              What intercity routes are available?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Taxi Bhai covers the four most important intercity corridors for Umrah pilgrims:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  route: "Makkah → Madinah",
                  distance: "~420 km",
                  duration: "4–5 hours",
                  from: "SAR 450",
                  note: "Most popular Umrah intercity route. Rest stop included.",
                },
                {
                  route: "Madinah → Makkah",
                  distance: "~420 km",
                  duration: "4–5 hours",
                  from: "SAR 450",
                  note: "Return direction. Same fixed fare, same rest stop.",
                },
                {
                  route: "Jeddah Airport → Madinah",
                  distance: "~430 km",
                  duration: "5–6 hours",
                  from: "SAR 500",
                  note: "For itineraries starting with Madinah. Comfort stop included.",
                },
                {
                  route: "Madinah → Jeddah Airport",
                  distance: "~430 km",
                  duration: "5–6 hours",
                  from: "SAR 500",
                  note: "Return to JED. Overnight transfers available for early flights.",
                },
              ].map((r) => (
                <div key={r.route} className="bg-white border border-sand rounded-2xl p-5">
                  <p className="font-display font-bold text-brand-950 mb-2">{r.route}</p>
                  <div className="flex items-center gap-3 text-xs text-brand-500 mb-2">
                    <span className="flex items-center gap-1"><Clock size={11} aria-hidden="true" /> {r.duration}</span>
                    <span>·</span>
                    <span>{r.distance}</span>
                    <span>·</span>
                    <span className="font-semibold text-brand-700">from {r.from}</span>
                  </div>
                  <p className="text-brand-700/75 text-sm">{r.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 — Private taxi vs Haramain train */}
          <section aria-labelledby="taxi-vs-train">
            <h2 id="taxi-vs-train" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Private taxi vs Haramain train — which is better for Umrah?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              The Haramain High-Speed Railway connects Makkah and Madinah via Jeddah in about 2.5 hours.
              For some travellers it is a good option — for others, a private taxi is the better choice.
              Here is a direct comparison:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-sand">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-brand-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Feature</th>
                    <th className="text-center px-4 py-3 font-semibold">Private Taxi (Taxi Bhai)</th>
                    <th className="text-center px-4 py-3 font-semibold">Haramain Train</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Door-to-door", "Yes — hotel pick-up and drop-off", "No — need taxi to/from station"],
                    ["Departure time", "Choose any time, 24/7", "Fixed train timetable only"],
                    ["Luggage", "Unlimited — fits in vehicle", "Restricted to 23 kg per person"],
                    ["Family with children", "Child seats available, full privacy", "Shared public carriage"],
                    ["Group of 7+", "Single vehicle for the whole group", "Multiple seats, separate carriages"],
                    ["Price for family of 4", "SAR 450 (sedan) — shared per person", "SAR 120+ per person = SAR 480+"],
                    ["Flexibility mid-journey", "Stop anywhere en route", "Fixed route only"],
                  ].map(([feature, taxi, train], i) => (
                    <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-parchment/60"}>
                      <td className="px-4 py-3 font-medium text-brand-950">{feature}</td>
                      <td className="px-4 py-3 text-center text-brand-700">{taxi}</td>
                      <td className="px-4 py-3 text-center text-brand-500">{train}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-brand-500 text-xs mt-2">
              For families with heavy luggage, small children, or groups of 4+, a private taxi typically offers better value and far greater convenience.
            </p>
          </section>

          {/* Section 3 — Pricing */}
          <section aria-labelledby="intercity-pricing">
            <h2 id="intercity-pricing" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              How much do intercity transfers cost?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Fixed fares in SAR — one price for the whole vehicle, not per person. No meters, no surprises.
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
                  {intercityRoutes.map((route, i) => {
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
            <p className="text-brand-500 text-xs mt-2">Price is for the whole vehicle. Divide by your group size for an approximate per-person cost.</p>
          </section>

          {/* Section 4 — What's included */}
          <section aria-labelledby="intercity-included">
            <h2 id="intercity-included" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              What is included in intercity transfers?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Rest stop approximately halfway on all long routes (Makkah–Madinah, JED–Madinah)",
                "Complimentary bottled water for all passengers",
                "Fully private vehicle — no shared passengers, ever",
                "Flexible departure time — 24/7, choose any hour",
                "Child seats available on request at no extra charge",
                "Door-to-door — hotel pick-up to hotel drop-off, no station transfers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white border border-sand rounded-2xl px-5 py-4">
                  <Check size={16} className="text-brand-700 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-brand-700/80 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5 — Vehicle guide */}
          <section aria-labelledby="vehicle-guide">
            <h2 id="vehicle-guide" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Which vehicle is right for my group size?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Use this guide to choose the best vehicle for your party. Prices shown are for Makkah–Madinah
              as a reference. For all routes visit the{" "}
              <Link href="/fleet" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                fleet page
              </Link>{" "}
              or the{" "}
              <Link href="/pricing" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                full pricing page
              </Link>.
            </p>
            <div className="space-y-3">
              {[
                { range: "1–3 passengers", vehicle: "Camry / Sonata (Sedan)", price: "SAR 450", note: "Best value for solo travellers and couples." },
                { range: "4–7 passengers", vehicle: "Hyundai Staria", price: "SAR 550", note: "Most popular for families. Ample boot space for large luggage." },
                { range: "4–7 passengers (luxury)", vehicle: "GMC Yukon XL", price: "SAR 1,000", note: "Premium full-size SUV for those who want extra comfort." },
                { range: "8–12 passengers", vehicle: "Toyota Hiace", price: "SAR 650", note: "Spacious minibus — ideal for extended families and small groups." },
                { range: "13–30 passengers", vehicle: "Coaster", price: "SAR 1,100", note: "Mid-size coach with luggage storage below." },
                { range: "30+ passengers", vehicle: "Full-size Bus", price: "SAR 1,400", note: "Full coach for large pilgrim delegations." },
              ].map((row) => (
                <div key={row.vehicle} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 bg-white border border-sand rounded-2xl px-5 py-4">
                  <div className="flex items-center gap-2 sm:w-36 shrink-0">
                    <Users size={14} className="text-brand-500 shrink-0" aria-hidden="true" />
                    <span className="text-brand-700 text-sm font-medium">{row.range}</span>
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-brand-950 text-sm">{row.vehicle}</span>
                    <span className="text-brand-500 text-xs ml-2">{row.note}</span>
                  </div>
                  <span className="text-brand-700 font-bold text-sm whitespace-nowrap">{row.price}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <PageFAQ faqs={faqs} heading="Intercity transfers — common questions" />
      <CtaBanner />
    </>
  );
}
