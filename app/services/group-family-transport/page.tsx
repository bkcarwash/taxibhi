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
import { vehicles } from "@/lib/data/vehicles";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageFAQ } from "@/components/ui/PageFAQ";
import type { PageFAQItem } from "@/components/ui/PageFAQ";

const PAGE_URL = "https://www.taxibhai.com/services/group-family-transport";

export const metadata: Metadata = {
  title: "Group & Family Taxi Service — 7 to 30+ Passengers for Umrah | Taxi Bhai",
  description:
    "Private group transport for Umrah: Hyundai Staria (7 seats), Toyota Hiace (12 seats), Coaster (30 seats), Bus (30+). All routes in Saudi Arabia. Fixed group fares. Book on WhatsApp.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Group & Family Taxi Service — 7 to 30+ Passengers for Umrah | Taxi Bhai",
    description:
      "Private group transport for Umrah: Hyundai Staria (7 seats), Toyota Hiace (12 seats), Coaster (30 seats), Bus (30+). Fixed group fares. Book on WhatsApp.",
    url: PAGE_URL,
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Group & Family Transport", href: "/services/group-family-transport" },
];

const vehicleColumns: { id: VehicleId; label: string }[] = [
  { id: "camry", label: "Sedan (1–3)" },
  { id: "staria", label: "Staria (7)" },
  { id: "gmc", label: "GMC XL (7)" },
  { id: "hiace", label: "Hiace (12)" },
  { id: "coaster", label: "Coaster (30)" },
  { id: "bus", label: "Bus (30+)" },
];

const faqs: PageFAQItem[] = [
  {
    question: "What is the best vehicle for a family of 6 for Umrah?",
    answer:
      "For a family of 6, the Hyundai Staria (7-seater) is the ideal choice. It is a premium MPV with ample boot space for large Umrah luggage, comfortable seats for all 6 passengers, and is the most popular vehicle Taxi Bhai uses for family transfers. The Makkah–Madinah fare for a Staria is SAR 550.",
  },
  {
    question: "Do you have minibuses for groups of 12?",
    answer:
      "Yes. Taxi Bhai operates the Toyota Hiace with capacity for up to 12 passengers. It is a spacious minibus widely used across Saudi Arabia, with adequate luggage space. The Makkah–Madinah fare for a Hiace is SAR 650.",
  },
  {
    question: "Can you transport a group of 30 people?",
    answer:
      "Yes. Taxi Bhai has a Coaster (mid-size coach, up to 30 seats) available for all routes in Saudi Arabia. The Makkah–Madinah fare for the Coaster is SAR 1,100. For groups over 30, a full-size bus is available at SAR 1,400 for Makkah–Madinah. Advance booking is recommended for large groups.",
  },
  {
    question: "What is the Makkah to Madinah price for a group of 7?",
    answer:
      "For a group of 7 passengers on the Makkah to Madinah route, the Hyundai Staria (7-seater) is the right vehicle at a fixed fare of SAR 550. This is the full vehicle fare — not per person. Divided across 7 people, that is approximately SAR 79 per person for a 4–5 hour door-to-door private transfer.",
  },
  {
    question: "Can I book a bus for a large Umrah delegation?",
    answer:
      "Yes. Taxi Bhai can arrange full-size buses for large Umrah delegations of 30 or more passengers. For very large groups, multiple vehicles can be coordinated to travel in convoy. Please contact Taxi Bhai via WhatsApp or phone for a custom quote — fares vary based on route, group size, and scheduling requirements.",
  },
];

export default function GroupFamilyPage() {
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Services", url: "https://www.taxibhai.com/services" },
    { name: "Group & Family Transport", url: PAGE_URL },
  ]);

  const serviceLd = generateServicePillarJsonLd({
    serviceId: "group-family-transport",
    name: "Group & Family Taxi Service",
    description:
      "Private group transport for Umrah: Hyundai Staria (7 seats), Toyota Hiace (12 seats), Coaster (30 seats), Bus (30+). All routes in Saudi Arabia.",
    pageUrl: PAGE_URL,
    startingPrice: "SAR 350",
  });

  const webPageLd = generateWebPageJsonLd({
    name: "Group & Family Taxi Service — 7 to 30+ Passengers for Umrah | Taxi Bhai",
    description:
      "Private group transport for Umrah: Hyundai Staria (7 seats), Toyota Hiace (12 seats), Coaster (30 seats), Bus (30+). Fixed group fares.",
    url: PAGE_URL,
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Services", url: "https://www.taxibhai.com/services" },
      { name: "Group & Family Transport", url: PAGE_URL },
    ],
    speakableSelectors: ["h1", ".answer-block", "h2"],
  });

  const faqLd = generatePageFAQJsonLd(faqs, PAGE_URL);

  // Get the Makkah-Madinah pricing row for the comparison section
  const makkahMadinahRow = pricingTable.find((r) => r.routeId === "makkah-madinah");

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
            Group &amp; Family Transport
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Group &amp; Family Taxi Service for Umrah — 7 to 30+ Passengers
          </h1>
          <p className="answer-block text-brand-300 text-lg max-w-2xl leading-relaxed mb-8">
            Taxi Bhai serves Umrah groups of all sizes across Saudi Arabia. For families of up to 7, the
            Hyundai Staria or GMC Yukon XL; up to 12 in a Toyota Hiace; up to 30 in a Coaster; 30&nbsp;+
            in a full-size bus. Every vehicle is privately chartered — no shared passengers, no strangers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20a%20group%20transfer."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold px-7 py-3.5 rounded-full text-base transition-all"
            >
              Book on WhatsApp
            </a>
            <Link
              href="/fleet"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full text-base transition-all"
            >
              View Fleet <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-parchment py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Section 1 — Vehicle selection guide */}
          <section aria-labelledby="vehicle-selector">
            <h2 id="vehicle-selector" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Which vehicle is right for your group size?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Use this quick guide to match your party size to the right vehicle. Always count passengers
              and major luggage pieces when choosing — larger luggage may reduce effective passenger capacity.
            </p>
            <div className="space-y-3">
              {[
                {
                  range: "1–3 passengers",
                  vehicle: "Camry / Sonata (Sedan)",
                  luggage: "2–3 large bags",
                  best: "Solo travellers, couples, and small groups travelling light.",
                },
                {
                  range: "4–7 passengers",
                  vehicle: "Hyundai Staria",
                  luggage: "5–7 large bags",
                  best: "Most popular for Umrah families. Premium MPV with a spacious boot.",
                },
                {
                  range: "4–7 passengers (luxury)",
                  vehicle: "GMC Yukon XL",
                  luggage: "5–7 large bags",
                  best: "Full-size luxury SUV for families wanting extra comfort and space.",
                },
                {
                  range: "8–12 passengers",
                  vehicle: "Toyota Hiace",
                  luggage: "10–12 large bags",
                  best: "Spacious minibus ideal for extended families, small delegations.",
                },
                {
                  range: "13–30 passengers",
                  vehicle: "Coaster",
                  luggage: "Underfloor storage",
                  best: "Mid-size coach for larger pilgrim groups and small tour parties.",
                },
                {
                  range: "30+ passengers",
                  vehicle: "Full-size Bus",
                  luggage: "Large underfloor hold",
                  best: "Full coach for large pilgrim delegations, mosques, and travel agencies.",
                },
              ].map((row) => (
                <div key={row.vehicle} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-white border border-sand rounded-2xl px-5 py-4">
                  <div className="flex items-center gap-2 sm:w-40 shrink-0">
                    <Users size={14} className="text-brand-500 shrink-0" aria-hidden="true" />
                    <span className="text-brand-700 text-sm font-medium">{row.range}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-brand-950 text-sm">{row.vehicle}</p>
                    <p className="text-brand-500 text-xs">{row.best}</p>
                  </div>
                  <span className="text-brand-500 text-xs whitespace-nowrap shrink-0">{row.luggage}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 — Vehicle details */}
          <section aria-labelledby="vehicle-details">
            <h2 id="vehicle-details" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              What vehicles does Taxi Bhai operate for groups?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              All Taxi Bhai vehicles are well-maintained, air-conditioned, and cleaned between journeys.
              Here is a full breakdown of the group and family vehicle options:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  name: "Hyundai Staria",
                  capacity: "Up to 7 passengers",
                  badge: "Most popular for families",
                  desc: "The Hyundai Staria is a modern premium MPV and the most frequently requested vehicle for Umrah families. It has three rows of comfortable seating, a large boot, and a smooth ride. Ample overhead space and individual seat adjustment make it ideal for 4–6 hour intercity journeys.",
                  highlights: ["Smooth, quiet ride", "Generous luggage boot", "USB charging points", "Ideal for 4–7 passengers"],
                },
                {
                  name: "Hyundai H1",
                  capacity: "Up to 7 passengers",
                  badge: "Reliable family MPV",
                  desc: "The Hyundai H1 is a trusted 7-seater MPV with a proven track record in Saudi Arabia. Slightly more utilitarian than the Staria, it is spacious, reliable, and comfortable for families who want a good-value vehicle for intercity and airport transfers.",
                  highlights: ["Air-conditioned throughout", "Good boot space", "Comfortable seating", "24/7 available"],
                },
                {
                  name: "Toyota Hiace",
                  capacity: "Up to 12 passengers",
                  badge: "Best for groups of 8–12",
                  desc: "The Toyota Hiace is a full-width minibus with seating for up to 12 passengers. Long used in Saudi Arabia for pilgrim transport, the Hiace has generous head and shoulder room, overhead luggage racks, and a large rear storage area. Perfect for extended families and small Umrah groups.",
                  highlights: ["Overhead luggage storage", "Rear cargo area", "Forward-facing bench seating", "Proven reliability on long routes"],
                },
                {
                  name: "Coaster",
                  capacity: "Up to 30 passengers",
                  badge: "Best for groups of 13–30",
                  desc: "The Coaster is a mid-size coach capable of carrying up to 30 passengers with luggage stored below in the underfloor hold. It is the vehicle of choice for medium-sized pilgrim groups, Ziyarat tour parties, and mosque delegations. Reclining seats and a centre aisle provide good passenger comfort on longer routes.",
                  highlights: ["Underfloor luggage storage", "Reclining seats", "Centre aisle access", "Suitable for full-day Ziyarat tours"],
                },
                {
                  name: "Full-size Bus",
                  capacity: "30+ passengers",
                  badge: "Large delegations",
                  desc: "For Umrah delegations of over 30 passengers, Taxi Bhai can arrange full-size coaches. These vehicles have a large underfloor hold for heavy luggage, reclining seats, and are well-suited to long intercity routes such as Makkah to Madinah. Please contact Taxi Bhai in advance for large bus bookings.",
                  highlights: ["Large underfloor hold", "30+ passenger capacity", "Advance booking recommended", "Custom convoy arrangements available"],
                },
              ].map((v) => (
                <div key={v.name} className={`bg-white border border-sand rounded-2xl p-5 ${v.name === "Full-size Bus" ? "sm:col-span-2" : ""}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-display font-bold text-brand-950 text-lg">{v.name}</p>
                      <p className="text-brand-500 text-xs">{v.capacity}</p>
                    </div>
                    <span className="text-xs font-semibold text-brand-700 bg-brand-50 border border-brand-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {v.badge}
                    </span>
                  </div>
                  <p className="text-brand-700/80 text-sm leading-relaxed mb-3">{v.desc}</p>
                  <ul className="space-y-1">
                    {v.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-brand-700">
                        <Check size={12} aria-hidden="true" className="text-brand-700 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Pricing comparison */}
          <section aria-labelledby="group-pricing">
            <h2 id="group-pricing" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              How much does group transport cost?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              The table below shows Makkah to Madinah fares for all vehicles as a reference. All fares are
              fixed for the whole vehicle — divide by your group size for an approximate per-person cost.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-sand">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-brand-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Vehicle</th>
                    <th className="text-center px-4 py-3 font-semibold">Capacity</th>
                    <th className="text-right px-4 py-3 font-semibold">Makkah → Madinah</th>
                    <th className="text-right px-4 py-3 font-semibold whitespace-nowrap">Per person (avg)</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicleColumns.map((v, i) => {
                    const vData = vehicles.find((ve) => ve.id === v.id);
                    const price = makkahMadinahRow?.prices[v.id] ?? 0;
                    // Calculate average per person based on max capacity
                    const capacityNums: Record<VehicleId, number> = {
                      camry: 3, staria: 7, gmc: 7, hiace: 12, coaster: 30, bus: 35,
                    };
                    const perPerson = Math.round(price / capacityNums[v.id]);
                    return (
                      <tr key={v.id} className={i % 2 === 0 ? "bg-white" : "bg-parchment/60"}>
                        <td className="px-4 py-3 font-semibold text-brand-950">{vData?.name ?? v.label}</td>
                        <td className="px-4 py-3 text-center text-brand-500">{vData?.capacity ?? "—"}</td>
                        <td className="px-4 py-3 text-right text-brand-900 font-bold">SAR {price}</td>
                        <td className="px-4 py-3 text-right text-brand-500">~SAR {perPerson}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-brand-500 text-xs mt-2">
              Per-person cost is approximate, based on full vehicle occupancy.{" "}
              <Link href="/pricing" className="underline underline-offset-1 hover:text-brand-700">
                See all routes and vehicles on the pricing page.
              </Link>
            </p>
          </section>

          {/* Section 4 — Multi-vehicle convoys */}
          <section aria-labelledby="multi-vehicle">
            <h2 id="multi-vehicle" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Can I book multiple vehicles for a very large group?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-4">
              Yes. Taxi Bhai regularly coordinates multi-vehicle convoys for large Umrah delegations —
              particularly from mosques, travel agencies, and community groups with 50–200 pilgrims.
              Here is how it works:
            </p>
            <ul className="space-y-3">
              {[
                "Contact Taxi Bhai via WhatsApp with your total passenger count, route, and desired departure date and time.",
                "Taxi Bhai proposes the optimal vehicle mix (e.g. 2 × Coasters + 1 × Hiace) and provides a total fleet fare.",
                "All vehicles depart together and are coordinated by the lead driver — your group stays together throughout the journey.",
                "For very large groups (100+), advance booking of at least 72 hours is requested to ensure vehicle availability.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4 bg-white border border-sand rounded-2xl p-5">
                  <span className="w-7 h-7 rounded-full bg-brand-900 text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <p className="text-brand-700/80 text-sm leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5 — Practical tips */}
          <section aria-labelledby="group-tips">
            <h2 id="group-tips" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Practical tips for booking group transport
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Count luggage, not just passengers",
                  body: "Each Umrah pilgrim typically travels with one large suitcase and one carry-on. A family of 4 with 4 large suitcases and 4 carry-ons may fit better in a Hiace than a Staria, even if the 7-seat capacity is technically sufficient.",
                },
                {
                  title: "Book large vehicles at least 48 hours in advance",
                  body: "Coasters and buses need to be booked at least 48 hours ahead. Sedans, Starias, and Hiaces can usually be arranged within a few hours.",
                },
                {
                  title: "Confirm the exact number of passengers at booking",
                  body: "Provide the exact passenger count (including children) at booking so the right vehicle is allocated. Over-booking seat capacity is not allowed for safety and licensing reasons.",
                },
                {
                  title: "Child seats are available on request",
                  body: "Infant and child seats are available for all vehicle types. Request at booking — there is no additional charge.",
                },
              ].map((tip) => (
                <div key={tip.title} className="bg-white border border-sand rounded-2xl p-5">
                  <p className="font-semibold text-brand-950 text-sm mb-2">{tip.title}</p>
                  <p className="text-brand-700/80 text-sm leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <section aria-labelledby="group-related">
            <h2 id="group-related" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Explore more Taxi Bhai services
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/services/airport-transfers", label: "Airport Transfers", sub: "JED and MED airports, 24/7" },
                { href: "/services/intercity-transfers", label: "Intercity Transfers", sub: "Makkah ↔ Madinah from SAR 450" },
                { href: "/services/umrah-ziyarat-transport", label: "Ziyarat Tours", sub: "Sacred sites from SAR 200" },
                { href: "/fleet", label: "Full Fleet Overview", sub: "Specifications for every vehicle" },
                { href: "/pricing", label: "Pricing for All Routes", sub: "Fixed SAR fares, no hidden charges" },
                { href: "/book-ride", label: "Book Group Transport", sub: "WhatsApp booking, confirmed in minutes" },
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

      <PageFAQ faqs={faqs} heading="Group & family transport — common questions" />
      <CtaBanner />
    </>
  );
}
