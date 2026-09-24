import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import {
  generateBreadcrumbJsonLd,
  generateWebPageJsonLd,
  generatePageFAQJsonLd,
} from "@/lib/schema/jsonLd";
import { pricingTable } from "@/lib/data/pricing";
import type { VehicleId } from "@/lib/data/pricing";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageFAQ } from "@/components/ui/PageFAQ";
import type { PageFAQItem } from "@/components/ui/PageFAQ";

const PAGE_URL = "https://www.taxibhai.com/fleet";

export const metadata: Metadata = {
  title: "Our Fleet — Private Taxi Vehicles for Umrah in Saudi Arabia | Taxi Bhai",
  description:
    "Taxi Bhai's fleet: Sedan (1–3 passengers), Hyundai Staria (7 seats), GMC Yukon XL (7 seats luxury), Toyota Hiace (12 seats), Coaster (30 seats), Bus (30+). All air-conditioned, privately chartered. Fixed SAR fares.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Taxi Bhai Fleet — Vehicles for Every Group Size",
    description:
      "Sedan, Staria, GMC Yukon XL, Hiace, Coaster, Bus. All A/C, privately chartered, fixed SAR fares for Umrah across Makkah, Madinah & Jeddah.",
    url: PAGE_URL,
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Fleet", href: "/fleet" },
];

const faqs: PageFAQItem[] = [
  {
    question: "What vehicles does Taxi Bhai have?",
    answer:
      "Taxi Bhai operates six vehicle types: Camry/Sonata sedan (1–3 passengers), Hyundai Staria MPV (up to 7 passengers), Hyundai H1 (up to 7 passengers), GMC Yukon XL luxury SUV (up to 7 passengers), Toyota Hiace minibus (up to 12 passengers), Coaster coach (up to 30 passengers), and full-size Bus (30+ passengers). All vehicles are air-conditioned and privately chartered.",
  },
  {
    question: "What is the most popular vehicle for Umrah families?",
    answer:
      "The Hyundai Staria is the most popular choice for Umrah families. It seats up to 7 passengers with ample luggage space, features a sliding door for easy access, and is purpose-built as a premium MPV. It offers a significant step up in space and comfort from a sedan without the premium cost of an SUV.",
  },
  {
    question: "Is the GMC Yukon XL available in Saudi Arabia?",
    answer:
      "Yes — Taxi Bhai operates new-model GMC Yukon XL full-size SUVs available for bookings in Makkah, Madinah, and Jeddah. The Yukon XL seats up to 7 passengers across three rows with leather upholstery and large luggage capacity. It is the most popular option for VIP and luxury private transfers.",
  },
  {
    question: "Can I book a bus for a group of 30?",
    answer:
      "Yes. For groups of up to 30 passengers, Taxi Bhai offers the Coaster (mid-size coach). For groups larger than 30, a full-size bus is available — contact Taxi Bhai on WhatsApp (+966 57 306 7785) for a custom quote as bus pricing varies by route and group size.",
  },
];

const vehicleCards = [
  {
    id: "camry" as VehicleId,
    name: "Sedan — Camry / Sonata",
    capacity: "1–3 passengers",
    bestFor: "Solo travellers, couples, and small families travelling light",
    image: "/images/vehicles/sedan-night-makkah.webp",
    imageAlt: "Toyota Camry sedan taxi in Makkah at night",
    features: ["Standard air conditioning", "Ample boot for 2–3 bags", "Most economical option"],
  },
  {
    id: "staria" as VehicleId,
    name: "Hyundai Staria",
    capacity: "Up to 7 passengers",
    bestFor: "Families and small groups needing extra luggage space",
    image: "/images/vehicles/staria-7-seater-makkah.webp",
    imageAlt: "Hyundai Staria 7-seater MPV in Makkah",
    features: ["Premium MPV with sliding door", "Generous luggage compartment", "Comfortable for long journeys"],
  },
  {
    id: "staria" as VehicleId,
    name: "Hyundai H1",
    capacity: "Up to 7 passengers",
    bestFor: "Families seeking a reliable, spacious MPV at mid-range pricing",
    image: "/images/vehicles/van-jeddah-airport.webp",
    imageAlt: "Hyundai H1 van at Jeddah Airport",
    features: ["Reliable 7-seat MPV", "Spacious cabin", "Same pricing band as Staria"],
  },
  {
    id: "gmc" as VehicleId,
    name: "GMC Yukon XL",
    capacity: "Up to 7 passengers",
    bestFor: "VIP transfers, luxury travel, and groups requiring a prestigious vehicle",
    image: "/images/vehicles/gmc-yukon-madinah-front.webp",
    imageAlt: "GMC Yukon XL luxury SUV in Madinah",
    features: ["Full-size luxury SUV", "Leather interior · 3rd row seating", "Maximum luggage capacity"],
  },
  {
    id: "hiace" as VehicleId,
    name: "Toyota Hiace",
    capacity: "Up to 12 passengers",
    bestFor: "Larger groups needing a single vehicle with luggage space for all",
    image: "/images/vehicles/van-madinah-makkah.webp",
    imageAlt: "Toyota Hiace minibus on the Madinah–Makkah route",
    features: ["Spacious minibus configuration", "Large rear luggage area", "Ideal for group Ziyarat tours"],
  },
  {
    id: "coaster" as VehicleId,
    name: "Coaster",
    capacity: "Up to 30 passengers",
    bestFor: "Group tours, delegations, and large Umrah parties travelling together",
    image: "/images/vehicles/coaster-bus-makkah-hotel.webp",
    imageAlt: "Coaster bus at a Makkah hotel",
    features: ["Coach seating with overhead storage", "Air-conditioned throughout", "Group travel — single vehicle"],
  },
];

const jedMakkahRow = pricingTable.find((r) => r.routeId === "jed-airport-makkah");

const selectorGuide = [
  { passengers: "1–3 people", vehicle: "Sedan (Camry/Sonata)", id: "camry" as VehicleId },
  { passengers: "4–7 people", vehicle: "Hyundai Staria or H1", id: "staria" as VehicleId },
  { passengers: "Premium / VIP", vehicle: "GMC Yukon XL", id: "gmc" as VehicleId },
  { passengers: "8–12 people", vehicle: "Toyota Hiace", id: "hiace" as VehicleId },
  { passengers: "13–30 people", vehicle: "Coaster", id: "coaster" as VehicleId },
  { passengers: "30+ people", vehicle: "Bus (contact for quote)", id: "bus" as VehicleId },
];

const sharedFeatures = [
  "Air conditioning — fully climate-controlled throughout the vehicle",
  "Pre-cleaned before every journey",
  "No shared passengers — your vehicle is privately chartered",
  "Fixed fare agreed before departure — no meter, no surge pricing",
];

export default function FleetPage() {
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Fleet", url: PAGE_URL },
  ]);
  const webPageLd = generateWebPageJsonLd({
    name: "Taxi Bhai Fleet — Vehicles for Every Group Size",
    description:
      "Sedan, Staria, H1, GMC Yukon XL, Hiace, Coaster, Bus. All air-conditioned, privately chartered, fixed SAR fares for Umrah across Saudi Arabia.",
    url: PAGE_URL,
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Fleet", url: PAGE_URL },
    ],
    speakableSelectors: ["h1", ".answer-block", "h2"],
  });
  const faqLd = generatePageFAQJsonLd(faqs, PAGE_URL);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} light />
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Taxi Bhai Fleet — Vehicles for Every Group Size
          </h1>
          <p className="answer-block text-brand-200 text-lg leading-relaxed max-w-2xl mb-8">
            Taxi Bhai operates a diverse fleet for Umrah pilgrim transport across Saudi Arabia —
            from sedans for solo travellers and couples, to Hyundai Starias and GMC Yukon XLs for
            families, Toyota Hiaces for groups, and Coasters/buses for large delegations. All
            vehicles are air-conditioned, privately chartered, and cleaned before every journey.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book-ride"
              className="inline-flex items-center gap-2 bg-white text-brand-900 font-semibold text-sm px-5 py-3 rounded-full transition-colors hover:bg-brand-50 active:scale-95"
            >
              Book your vehicle
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium text-sm px-5 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              View all fares
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 lg:py-20 bg-parchment">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Vehicle cards */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-8">
              Vehicle guide
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicleCards.map((vehicle, index) => {
                const startingFare = jedMakkahRow?.prices[vehicle.id];
                return (
                  <div
                    key={`${vehicle.id}-${index}`}
                    className="bg-white border border-sand rounded-2xl overflow-hidden flex flex-col"
                  >
                    <div className="relative h-48 w-full bg-brand-100">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <div>
                        <p className="font-display font-bold text-brand-950 text-base mb-0.5">
                          {vehicle.name}
                        </p>
                        <p className="text-brand-500 text-xs">{vehicle.capacity}</p>
                      </div>
                      <p className="text-brand-700/80 text-xs leading-relaxed">
                        <strong className="text-brand-800">Best for:</strong> {vehicle.bestFor}
                      </p>
                      {startingFare && (
                        <p className="text-brand-700 text-xs">
                          <strong className="text-brand-900">From SAR {startingFare}</strong>
                          <span className="text-brand-400 ml-1">— JED Airport → Makkah</span>
                        </p>
                      )}
                      <ul className="space-y-1.5 mt-auto pt-2 border-t border-sand">
                        {vehicle.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2">
                            <Check size={12} className="text-brand-600 mt-0.5 shrink-0" aria-hidden="true" />
                            <span className="text-brand-600 text-xs">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Selector guide */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Which vehicle should I choose?
            </h2>
            <div className="bg-white border border-sand rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-50 border-b border-sand">
                      <th className="text-left py-3 px-5 font-semibold text-brand-700">Group size</th>
                      <th className="text-left py-3 px-5 font-semibold text-brand-700">Recommended vehicle</th>
                      <th className="text-right py-3 px-5 font-semibold text-brand-700">JED → Makkah (SAR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectorGuide.map((row) => {
                      const fare = jedMakkahRow?.prices[row.id];
                      return (
                        <tr key={row.passengers} className="border-b border-sand last:border-0 hover:bg-brand-50/50 transition-colors">
                          <td className="py-3.5 px-5 font-medium text-brand-900">{row.passengers}</td>
                          <td className="py-3.5 px-5 text-brand-700">{row.vehicle}</td>
                          <td className="py-3.5 px-5 text-right font-bold text-brand-900">
                            {row.id === "bus" ? "Contact us" : fare ?? "—"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="bg-brand-50 border-t border-sand px-5 py-3 text-xs text-brand-500">
                All fares above are for the Jeddah Airport to Makkah route as an example.{" "}
                <Link href="/pricing" className="text-brand-600 hover:text-brand-800 font-medium">
                  See all routes →
                </Link>
              </div>
            </div>
          </section>

          {/* All vehicles feature */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-5">
              All vehicles feature
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {sharedFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-white border border-sand rounded-xl p-4"
                >
                  <Check size={16} className="text-brand-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <p className="text-brand-700 text-sm leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <section>
            <h2 className="font-display text-xl font-bold text-brand-950 mb-4">
              Book your transfer
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "View All Fares", href: "/pricing", note: "Complete pricing table" },
                { label: "Group & Family Transport", href: "/services/group-family-transport", note: "Groups of any size" },
                { label: "Book a Ride", href: "/book-ride", note: "Booking form — all vehicles" },
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

      <PageFAQ faqs={faqs} heading="Fleet — common questions" />
      <CtaBanner />
    </>
  );
}
