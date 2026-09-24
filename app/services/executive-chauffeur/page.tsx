import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, ArrowRight, Star } from "lucide-react";
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

const PAGE_URL = "https://www.taxibhai.com/services/executive-chauffeur";

export const metadata: Metadata = {
  title: "Executive Chauffeur Service — GMC Yukon XL & Hourly Hire | Taxi Bhai",
  description:
    "Premium GMC Yukon XL chauffeur in Makkah, Madinah & Jeddah. Hourly hire from SAR 180/hr or fixed routes from SAR 400. VIP transfers, business travel, luxury family transport. Book on WhatsApp.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Executive Chauffeur Service — GMC Yukon XL & Hourly Hire | Taxi Bhai",
    description:
      "Premium GMC Yukon XL chauffeur in Makkah, Madinah & Jeddah. Hourly hire from SAR 180/hr or fixed routes from SAR 400. VIP transfers, business travel, luxury family transport.",
    url: PAGE_URL,
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Executive Chauffeur", href: "/services/executive-chauffeur" },
];

const execRoutes = [
  { id: "per-hour", label: "Hourly Hire (per hour)", duration: "Min 1 hr" },
  { id: "jed-airport-makkah", label: "Jeddah Airport (JED) → Makkah", duration: "1–1.5 hrs" },
  { id: "makkah-madinah", label: "Makkah → Madinah", duration: "4–5 hrs" },
  { id: "jed-airport-jed-hotel", label: "Jeddah Airport → Jeddah Hotel", duration: "20–40 mins" },
];

const faqs: PageFAQItem[] = [
  {
    question: "How much is a GMC Yukon XL taxi in Saudi Arabia?",
    answer:
      "The GMC Yukon XL can be hired per hour at SAR 180/hr (minimum 1 hour), or at fixed route fares — for example, Jeddah Airport to Makkah is SAR 550, Makkah to Madinah is SAR 1,000, and Jeddah Airport to Jeddah Hotel is SAR 400. All fares are for the whole vehicle, not per person.",
  },
  {
    question: "Can I hire a driver by the hour in Makkah, Madinah, or Jeddah?",
    answer:
      "Yes. Taxi Bhai offers hourly hire in all three cities. The GMC Yukon XL is SAR 180 per hour, the Hyundai Staria is SAR 120 per hour, and a sedan is SAR 100 per hour. The minimum booking is 1 hour. Hourly hire is ideal for hospital visits, multiple errands, business appointments, or flexible Ziyarat.",
  },
  {
    question: "Is the GMC Yukon XL available 24 hours a day?",
    answer:
      "Yes. The executive GMC Yukon XL chauffeur service operates 24 hours a day, 7 days a week, with no surcharge for late-night or early-morning bookings. Whether you need a 3 AM airport pick-up or a midnight hotel drop-off, the same fixed fare applies.",
  },
  {
    question: "What makes the executive service different from a standard taxi?",
    answer:
      "The executive service uses a new-model GMC Yukon XL — a full-size luxury SUV with leather seating, a smooth V8 ride, and generous three-row cabin space for up to 7 passengers with luggage. The assigned chauffeur is professional, punctual, and discrete. There is no rush, no meter anxiety — just a confirmed fare and a driver who handles everything.",
  },
];

export default function ExecutiveChauffeurPage() {
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Services", url: "https://www.taxibhai.com/services" },
    { name: "Executive Chauffeur", url: PAGE_URL },
  ]);

  const serviceLd = generateServicePillarJsonLd({
    serviceId: "executive-chauffeur",
    name: "Executive Chauffeur Service",
    description:
      "Premium GMC Yukon XL chauffeur in Makkah, Madinah & Jeddah. Hourly hire from SAR 180/hr or fixed routes.",
    pageUrl: PAGE_URL,
    startingPrice: "SAR 180/hr",
  });

  const webPageLd = generateWebPageJsonLd({
    name: "Executive Chauffeur Service — GMC Yukon XL & Hourly Hire | Taxi Bhai",
    description:
      "Premium GMC Yukon XL chauffeur in Makkah, Madinah & Jeddah. Hourly hire from SAR 180/hr or fixed routes from SAR 400.",
    url: PAGE_URL,
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Services", url: "https://www.taxibhai.com/services" },
      { name: "Executive Chauffeur", url: PAGE_URL },
    ],
    speakableSelectors: ["h1", ".answer-block", "h2"],
  });

  const faqLd = generatePageFAQJsonLd(faqs, PAGE_URL);

  const perHourRow = pricingTable.find((r) => r.routeId === "per-hour");

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
            Executive Chauffeur
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Executive Chauffeur Service — Luxury Hire in Saudi Arabia
          </h1>
          <p className="answer-block text-brand-300 text-lg max-w-2xl leading-relaxed mb-8">
            Taxi Bhai&rsquo;s executive service puts you in a new-model GMC Yukon XL with a professional
            chauffeur. Choose hourly hire at SAR&nbsp;180/hr (minimum 1 hour) or fixed-fare routes —
            for example, Jeddah Airport to Makkah at SAR&nbsp;550. Available 24/7 across Makkah,
            Madinah, and Jeddah.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20the%20executive%20GMC%20chauffeur%20service."
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
              View GMC Fares <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-parchment py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Section 1 — GMC Yukon XL */}
          <section aria-labelledby="gmc-yukon">
            <h2 id="gmc-yukon" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              GMC Yukon XL — the flagship vehicle
            </h2>
            <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gold-400 font-semibold text-sm uppercase tracking-widest">Premium SUV</span>
                  </div>
                  <p className="text-brand-700/80 leading-relaxed mb-4">
                    The GMC Yukon XL is a full-size luxury SUV — the largest and most prestigious vehicle in
                    the Taxi Bhai fleet. It is used for VIP transfers, business travel, executive airport
                    collections, and families who want maximum comfort on long Saudi Arabian intercity routes.
                  </p>
                  <p className="text-brand-700/80 leading-relaxed mb-5">
                    Taxi Bhai operates the latest model year Yukon XL, ensuring a contemporary cabin
                    experience. The three-row seating accommodates up to 7 passengers with generous legroom
                    on every row. The extended wheelbase provides a smooth, planted ride even on Saudi
                    highway surfaces.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {[
                      "New-model GMC Yukon XL",
                      "3-row leather seating for up to 7",
                      "Generous cargo space behind third row",
                      "Powerful V8 engine — smooth at motorway speeds",
                      "Full climate control, individual zones",
                      "Tinted windows for privacy",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-brand-700">
                        <Check size={13} aria-hidden="true" className="text-brand-700 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:w-48 shrink-0 bg-brand-50 border border-brand-100 rounded-2xl p-5 text-center">
                  <p className="text-brand-500 text-xs mb-1">Starting from</p>
                  <p className="font-display font-bold text-brand-950 text-3xl">SAR 180</p>
                  <p className="text-brand-500 text-xs mb-4">per hour</p>
                  <div className="border-t border-brand-100 pt-4">
                    <p className="text-brand-500 text-xs mb-1">Fixed routes from</p>
                    <p className="font-display font-bold text-brand-950 text-2xl">SAR 400</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 — Hourly vs fixed */}
          <section aria-labelledby="hourly-vs-fixed">
            <h2 id="hourly-vs-fixed" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Hourly hire vs fixed routes — which should I choose?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Taxi Bhai offers two booking modes for executive hire. The right choice depends on the
              nature of your journey:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white border border-sand rounded-2xl p-6">
                <p className="font-display font-bold text-brand-950 text-lg mb-1">Hourly Hire</p>
                <p className="text-brand-500 text-xs mb-4">SAR 180/hr · Minimum 1 hour · GMC Yukon XL</p>
                <p className="text-brand-700/80 text-sm leading-relaxed mb-4">
                  Book the GMC and driver by the hour. The vehicle remains with you throughout, ready to
                  move whenever you need. No return journey to arrange separately.
                </p>
                <p className="text-brand-700/80 text-sm font-semibold mb-2">Best for:</p>
                <ul className="space-y-1.5">
                  {[
                    "Hospital appointments with uncertain duration",
                    "Multiple business meetings in one day",
                    "Conference and event transport (standby between sessions)",
                    "Flexible Ziyarat with no fixed itinerary",
                    "Shopping trips across multiple locations",
                  ].map((use) => (
                    <li key={use} className="flex items-start gap-2 text-sm text-brand-700">
                      <ArrowRight size={12} className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-sand rounded-2xl p-6">
                <p className="font-display font-bold text-brand-950 text-lg mb-1">Fixed Route</p>
                <p className="text-brand-500 text-xs mb-4">From SAR 400 · Point-to-point · All cities</p>
                <p className="text-brand-700/80 text-sm leading-relaxed mb-4">
                  Book a specific route at a confirmed fixed fare. Perfect when you know your origin,
                  destination, and approximate timing. No ambiguity, no meter watching.
                </p>
                <p className="text-brand-700/80 text-sm font-semibold mb-2">Best for:</p>
                <ul className="space-y-1.5">
                  {[
                    "VIP airport collections (JED or MED)",
                    "Hotel-to-hotel intercity (Makkah ↔ Madinah)",
                    "One-way transfers between cities",
                    "Delegation arrivals with confirmed flight details",
                    "When the journey has a single clear destination",
                  ].map((use) => (
                    <li key={use} className="flex items-start gap-2 text-sm text-brand-700">
                      <ArrowRight size={12} className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 — Pricing table */}
          <section aria-labelledby="exec-pricing">
            <h2 id="exec-pricing" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              What are the executive service fares?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Below are the per-hour rates and key route fares for all Taxi Bhai vehicles. The GMC Yukon XL
              column is highlighted as the executive option.
            </p>

            {/* Per-hour rates */}
            <div className="mb-6">
              <h3 className="font-display font-semibold text-brand-950 text-base mb-3">Hourly hire rates (per hour, minimum 1 hour)</h3>
              <div className="overflow-x-auto rounded-2xl border border-sand">
                <table className="w-full text-sm bg-white">
                  <thead>
                    <tr className="bg-brand-900 text-white">
                      <th className="text-left px-4 py-3 font-semibold">Vehicle</th>
                      <th className="text-left px-4 py-3 font-semibold">Capacity</th>
                      <th className="text-right px-4 py-3 font-semibold">Per hour (SAR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: "Camry / Sonata (Sedan)", capacity: "1–3 pax", id: "camry" as VehicleId },
                      { label: "Hyundai Staria", capacity: "Up to 7 pax", id: "staria" as VehicleId },
                      { label: "GMC Yukon XL", capacity: "Up to 7 pax", id: "gmc" as VehicleId, highlight: true },
                      { label: "Toyota Hiace", capacity: "Up to 12 pax", id: "hiace" as VehicleId },
                      { label: "Coaster", capacity: "Up to 30 pax", id: "coaster" as VehicleId },
                    ].map((v, i) => (
                      <tr
                        key={v.id}
                        className={v.highlight ? "bg-brand-50 border-l-4 border-brand-700" : i % 2 === 0 ? "bg-white" : "bg-parchment/60"}
                      >
                        <td className={`px-4 py-3 font-medium ${v.highlight ? "text-brand-950 font-bold" : "text-brand-800"}`}>
                          {v.label}
                          {v.highlight && <span className="ml-2 text-xs text-gold-600 font-normal">(Executive)</span>}
                        </td>
                        <td className="px-4 py-3 text-brand-500">{v.capacity}</td>
                        <td className={`px-4 py-3 text-right font-bold ${v.highlight ? "text-brand-950 text-base" : "text-brand-900"}`}>
                          SAR {perHourRow?.prices[v.id] ?? "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Fixed route fares - GMC focus */}
            <div>
              <h3 className="font-display font-semibold text-brand-950 text-base mb-3">Key fixed route fares — GMC Yukon XL</h3>
              <div className="overflow-x-auto rounded-2xl border border-sand">
                <table className="w-full text-sm bg-white">
                  <thead>
                    <tr className="bg-brand-900 text-white">
                      <th className="text-left px-4 py-3 font-semibold min-w-[200px]">Route</th>
                      <th className="text-left px-3 py-3 font-semibold whitespace-nowrap">Duration</th>
                      <th className="text-right px-3 py-3 font-semibold">Sedan</th>
                      <th className="text-right px-3 py-3 font-semibold">Staria</th>
                      <th className="text-right px-3 py-3 font-semibold font-bold text-gold-300">GMC XL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {execRoutes.filter((r) => r.id !== "per-hour").map((route, i) => {
                      const row = pricingTable.find((r) => r.routeId === route.id);
                      return (
                        <tr key={route.id} className={i % 2 === 0 ? "bg-white" : "bg-parchment/60"}>
                          <td className="px-4 py-3 text-brand-950 font-medium">{route.label}</td>
                          <td className="px-3 py-3 text-brand-500 whitespace-nowrap">
                            <span className="flex items-center gap-1"><Clock size={12} aria-hidden="true" />{route.duration}</span>
                          </td>
                          <td className="px-3 py-3 text-right text-brand-700">SAR {row?.prices.camry ?? "—"}</td>
                          <td className="px-3 py-3 text-right text-brand-700">SAR {row?.prices.staria ?? "—"}</td>
                          <td className="px-3 py-3 text-right text-brand-950 font-bold text-base">SAR {row?.prices.gmc ?? "—"}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-brand-500 text-xs mt-2">
                Full pricing for all routes and vehicles:{" "}
                <Link href="/pricing" className="underline underline-offset-1 hover:text-brand-700">see the pricing page</Link>.
              </p>
            </div>
          </section>

          {/* Section 4 — When does hourly make sense */}
          <section aria-labelledby="hourly-use-cases">
            <h2 id="hourly-use-cases" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              When does hourly hire make the most sense?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Hourly hire is ideal any time your schedule is open-ended, you have multiple stops, or
              you simply want a vehicle on standby throughout an event or day. Here are the most common use cases:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Hospital & medical visits",
                  desc: "Appointments often run over time. Hourly hire means the driver waits — no need to arrange a return trip separately, and no anxiety about timing.",
                },
                {
                  title: "Multiple stops in one city",
                  desc: "Running errands across Makkah, Madinah, or Jeddah? Book by the hour and the driver stays with you between each stop.",
                },
                {
                  title: "Conference and business transport",
                  desc: "For executives attending multi-session conferences, hourly hire provides a dedicated vehicle between venues and during breaks.",
                },
                {
                  title: "Flexible Ziyarat (sacred site visits)",
                  desc: "If you want to spend more time at certain Ziyarat sites without rushing, hourly hire lets you control the pace. Stay as long as you like at Jabal al-Nour or Masjid Quba.",
                },
              ].map((use) => (
                <div key={use.title} className="bg-white border border-sand rounded-2xl p-5">
                  <div className="flex items-start gap-2 mb-2">
                    <Star size={14} className="text-gold-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <p className="font-semibold text-brand-950 text-sm">{use.title}</p>
                  </div>
                  <p className="text-brand-700/75 text-sm leading-relaxed">{use.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — VIP protocol */}
          <section aria-labelledby="vip-protocol">
            <h2 id="vip-protocol" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              What is the executive service protocol?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              The Taxi Bhai executive service follows a consistent professional standard:
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: "Confirmed driver details sent in advance",
                  body: "Before your journey, you receive the driver's name, phone number, and vehicle registration. No uncertainty — you know exactly who is collecting you.",
                },
                {
                  title: "Punctual — arrives before the confirmed time",
                  body: "For airport collections, the driver is in arrivals before you land. For hotel collections, the driver arrives 5–10 minutes before the agreed pick-up time.",
                },
                {
                  title: "Professional and discreet",
                  body: "Drivers maintain professional conduct throughout. No unsolicited conversation, no distraction. Your privacy is respected.",
                },
                {
                  title: "Luggage handled",
                  body: "The driver loads and unloads luggage at both ends of the journey. You do not need to handle heavy bags.",
                },
                {
                  title: "Fixed fare confirmed at booking — no surprises",
                  body: "Whether by hour or by fixed route, the agreed fare at booking is the final fare. No meter, no surge, no renegotiation at the destination.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 bg-white border border-sand rounded-2xl p-5">
                  <Check size={16} className="text-brand-700 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-brand-950 text-sm mb-1">{item.title}</p>
                    <p className="text-brand-700/80 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Internal links */}
          <section aria-labelledby="exec-related">
            <h2 id="exec-related" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Explore more Taxi Bhai services
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/services/airport-transfers", label: "Airport Transfers", sub: "JED and MED airports, 24/7" },
                { href: "/services/intercity-transfers", label: "Intercity Transfers", sub: "Makkah ↔ Madinah from SAR 450" },
                { href: "/services/group-family-transport", label: "Group & Family Transport", sub: "Up to 30+ passengers" },
                { href: "/fleet", label: "View the GMC Yukon XL", sub: "Full fleet specifications" },
                { href: "/pricing", label: "Full Pricing Page", sub: "All routes, all vehicles — fixed fares" },
                { href: "/book-ride", label: "Book Executive Hire", sub: "WhatsApp booking, confirmed in minutes" },
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

      <PageFAQ faqs={faqs} heading="Executive chauffeur — common questions" />
      <CtaBanner />
    </>
  );
}
