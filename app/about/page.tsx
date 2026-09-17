import type { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "@/lib/schema/jsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Star, Car, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "About Taxi Bhai — Experienced Umrah Taxi Service in Makkah, Madinah & Jeddah",
  description:
    "Taxi Bhai is a professional, 5.0-star-rated private Umrah taxi service covering Makkah, Madinah, Jeddah, Taif, and Badr. Experienced drivers, modern fleet, transparent fixed fares, available 24/7.",
  alternates: { canonical: "https://www.taxibhai.com/about" },
  openGraph: {
    title: "About Taxi Bhai — Trusted Umrah Taxi Service | 5.0 ★ Google Rating",
    description:
      "Professional private Umrah taxi in Makkah, Madinah & Jeddah. 6 vehicle types, experienced drivers, fixed fares. 5.0 ★ rated. Available 24/7.",
    url: "https://www.taxibhai.com/about",
  },
};

const stats = [
  { icon: <Star className="w-5 h-5" aria-hidden="true" />, value: "5.0 ★", label: "Google rating" },
  { icon: <Clock className="w-5 h-5" aria-hidden="true" />, value: "24/7", label: "Availability" },
  { icon: <Car className="w-5 h-5" aria-hidden="true" />, value: "6", label: "Vehicle types" },
  { icon: <Users className="w-5 h-5" aria-hidden="true" />, value: "3", label: "Countries served" },
];

export default function AboutPage() {
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "About", url: "https://www.taxibhai.com/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Page hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            About Us
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Reliable Umrah transport, built for pilgrims
          </h1>
          <p className="text-brand-300 text-lg max-w-2xl leading-relaxed">
            Taxi Bhai is a professional private taxi and transfer service dedicated to
            Umrah pilgrims, families, and groups travelling in Saudi Arabia.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex justify-center text-brand-700 mb-2">{s.icon}</div>
                <div className="font-display text-3xl font-bold text-brand-900">{s.value}</div>
                <div className="text-brand-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 lg:py-24 bg-parchment">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-brand">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-5">
            Who we are
          </h2>
          <p className="text-brand-700/80 leading-relaxed mb-6">
            Taxi Bhai is a professional and reliable Umrah transportation service
            serving Makkah (Mecca), Madinah Al-Munawwarah, and Jeddah. We provide
            comfortable and safe private transfers for individuals, families, and
            groups — covering Jeddah Airport transfers, Makkah–Madinah transfers,
            hotel transfers, Ziyarat tours, and other private transportation needs.
          </p>
          <p className="text-brand-700/80 leading-relaxed mb-6">
            Our drivers are experienced, courteous, and familiar with the pilgrimage
            routes. Every booking is private — there are no shared vehicles, no
            strangers, and no uncertainty. Fares are quoted upfront and fixed; there
            are no meters, no surge charges, and no hidden fees.
          </p>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-5">
            Our fleet
          </h2>
          <p className="text-brand-700/80 leading-relaxed mb-4">
            We operate a modern, well-maintained fleet to suit every group size:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-brand-700/80 mb-8">
            <li>
              <strong>Camry / Sonata (sedan)</strong> — ideal for 1–3 passengers
              travelling light.
            </li>
            <li>
              <strong>Hyundai Staria (7-seater MPV)</strong> — a premium people-carrier
              with generous luggage space, popular for families.
            </li>
            <li>
              <strong>GMC Yukon XL (new model)</strong> — a full-size luxury SUV for
              passengers who want extra space and comfort.
            </li>
            <li>
              <strong>Toyota Hiace (12-seater)</strong> — the workhorse of group
              transfers, combining capacity with reliability.
            </li>
            <li>
              <strong>Coaster</strong> — mid-size coach for Ziyarah tour groups of up
              to 30.
            </li>
            <li>
              <strong>Full-size Bus</strong> — for large pilgrim delegations and
              group packages.
            </li>
          </ul>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-5">
            Service area
          </h2>
          <p className="text-brand-700/80 leading-relaxed mb-4">
            Taxi Bhai operates across the full Umrah travel corridor:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-brand-700/80 mb-8">
            <li>Makkah (Mecca) — including Mina, Arafat, Muzdalifah, and surrounding areas</li>
            <li>Madinah Al-Munawwarah — city, Quba, Uhud, and outskirts</li>
            <li>Jeddah — King Abdulaziz International Airport (JED), city hotels</li>
            <li>Taif — full-day tour from Makkah</li>
            <li>Badr — day trip from Madinah</li>
            <li>Haramain High-Speed Railway stations in Makkah and Madinah</li>
          </ul>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-5">
            How to reach us
          </h2>
          <p className="text-brand-700/80 leading-relaxed mb-2">
            The fastest way to book is via WhatsApp at{" "}
            <a
              href="https://wa.me/966573067785"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-700 font-semibold underline"
            >
              +966 57 306 7785
            </a>
            . We also take calls and messages on:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-brand-700/80 mb-6">
            <li>UK: +44 7413 467638</li>
            <li>Pakistan: +92 371 2300606</li>
            <li>Email: info@taxibhai.com</li>
          </ul>
        </div>
      </div>

      <CtaBanner />
    </>
  );
}
