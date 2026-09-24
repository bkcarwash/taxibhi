import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Car, ArrowRight, Train, MapPin } from "lucide-react";
import {
  generateBreadcrumbJsonLd,
  generateWebPageJsonLd,
  generatePageFAQJsonLd,
  generateServicePillarJsonLd,
} from "@/lib/schema/jsonLd";
import { getPricingRowForRoute } from "@/lib/data/pricing";
import type { VehicleId } from "@/lib/data/pricing";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageFAQ } from "@/components/ui/PageFAQ";
import type { PageFAQItem } from "@/components/ui/PageFAQ";

const PAGE_URL = "https://www.taxibhai.com/services/local-city-rides";

export const metadata: Metadata = {
  title: "Local Taxi in Makkah, Madinah & Jeddah | City Rides & Hourly Hire | Taxi Bhai",
  description:
    "Local city taxi in Makkah, Madinah & Jeddah. Hotel ↔ Haramain Train Station from SAR 100. JED Airport → Jeddah Hotel from SAR 200. Hourly hire from SAR 100/hr. Book on WhatsApp.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Local Taxi in Makkah, Madinah & Jeddah | City Rides & Hourly Hire | Taxi Bhai",
    description:
      "Local city taxi in Makkah, Madinah & Jeddah. Hotel ↔ Haramain Train Station from SAR 100. JED Airport → Jeddah Hotel from SAR 200. Hourly hire from SAR 100/hr.",
    url: PAGE_URL,
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Local City Rides", href: "/services/local-city-rides" },
];

const keyFeatures = [
  "Hotel ↔ Haramain High-Speed Railway station in Makkah or Madinah — from SAR 100",
  "Jeddah Airport ↔ Jeddah Hotel — from SAR 200",
  "Hourly hire from SAR 100/hr (Camry) with driver on standby",
  "Hospital trips, shopping runs, custom city itineraries",
  "Available in all three cities: Makkah, Madinah, and Jeddah",
  "No fixed route required — go wherever you need",
];

const localRoutes: {
  id: string;
  label: string;
  duration: string;
  distance: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "hotel-train-station",
    label: "Hotel → Haramain Train Station",
    duration: "15–30 mins",
    distance: "Varies by city",
    icon: <Train size={18} className="text-brand-700" aria-hidden="true" />,
  },
  {
    id: "train-station-hotel",
    label: "Train Station → Hotel",
    duration: "15–30 mins",
    distance: "Varies by city",
    icon: <Train size={18} className="text-brand-700" aria-hidden="true" />,
  },
  {
    id: "jed-airport-jed-hotel",
    label: "Jeddah Airport → Jeddah Hotel",
    duration: "20–40 mins",
    distance: "~30 km",
    icon: <MapPin size={18} className="text-brand-700" aria-hidden="true" />,
  },
  {
    id: "per-hour",
    label: "Hourly Hire (anywhere in the city)",
    duration: "Min. 1 hour",
    distance: "Unlimited within hours",
    icon: <Clock size={18} className="text-brand-700" aria-hidden="true" />,
  },
];

const vehicleColumns: { id: VehicleId; label: string }[] = [
  { id: "camry", label: "Sedan" },
  { id: "staria", label: "Staria (7)" },
  { id: "gmc", label: "GMC XL (7)" },
  { id: "hiace", label: "Hiace (12)" },
  { id: "coaster", label: "Coaster (30)" },
];

const faqs: PageFAQItem[] = [
  {
    question: "How do I get from my hotel to the Haramain train station in Makkah or Madinah?",
    answer:
      "Taxi Bhai provides a fixed-fare private transfer from your hotel to the Haramain High-Speed Railway station in Makkah or Madinah. The fare starts from SAR 100 for a sedan. You can book on WhatsApp at least an hour before your train.",
  },
  {
    question: "How much is a taxi from Jeddah Airport to a Jeddah hotel?",
    answer:
      "A private taxi from King Abdulaziz International Airport (JED) to a Jeddah hotel costs SAR 200 in a sedan, SAR 250 in a Hyundai Staria, or SAR 400 in a GMC Yukon XL. The journey takes 20–40 minutes depending on traffic.",
  },
  {
    question: "Can I hire a taxi by the hour in Makkah, Madinah or Jeddah?",
    answer:
      "Yes. Hourly hire starts from SAR 100 per hour in a Camry, SAR 120 in a Staria, or SAR 180 in a GMC. There is a minimum booking of one hour. The driver stays with you throughout, so you can make multiple stops — hospital, shopping, Ziyarat visits — at your own pace.",
  },
  {
    question: "What is the difference between an intercity transfer and a local city ride?",
    answer:
      "Intercity transfers go between cities — for example, Makkah to Madinah (~420 km). Local city rides stay within one city or nearby area — for example, your hotel to the train station in Makkah (usually under 10 km). Local rides have lower fares because the distances are shorter.",
  },
  {
    question: "Does Taxi Bhai cover local rides in Jeddah, not just Makkah and Madinah?",
    answer:
      "Yes — Taxi Bhai operates in Jeddah too. Common local rides in Jeddah include the airport-to-hotel transfer from King Abdulaziz Airport (JED), rides to the Corniche or Al-Balad old city, and custom city tours. Hourly hire is available in Jeddah as well.",
  },
];

export default function LocalCityRidesPage() {
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Services", url: "https://www.taxibhai.com/services" },
    { name: "Local City Rides", url: PAGE_URL },
  ]);

  const serviceLd = generateServicePillarJsonLd({
    serviceId: "local-city-rides",
    name: "Local City Rides",
    description:
      "Local city taxi in Makkah, Madinah, and Jeddah. Hotel to Haramain train station, Jeddah Airport to Jeddah hotel, and hourly hire with driver on standby.",
    pageUrl: PAGE_URL,
    startingPrice: "SAR 100",
  });

  const webPageLd = generateWebPageJsonLd({
    name: "Local Taxi in Makkah, Madinah & Jeddah | City Rides & Hourly Hire | Taxi Bhai",
    description:
      "Local city taxi in Makkah, Madinah & Jeddah. Hotel ↔ Haramain Train Station from SAR 100. JED Airport → Jeddah Hotel from SAR 200. Hourly hire from SAR 100/hr.",
    url: PAGE_URL,
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Services", url: "https://www.taxibhai.com/services" },
      { name: "Local City Rides", url: PAGE_URL },
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
            Local City Rides
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Local Taxi in Makkah, Madinah &amp; Jeddah — City Rides &amp; Hourly Hire
          </h1>
          <p className="answer-block text-brand-300 text-lg max-w-2xl leading-relaxed mb-8">
            Taxi Bhai provides local city taxi rides within{" "}
            <Link href="/locations/makkah" className="underline underline-offset-2 hover:text-white transition-colors">
              Makkah
            </Link>
            ,{" "}
            <Link href="/locations/madinah" className="underline underline-offset-2 hover:text-white transition-colors">
              Madinah
            </Link>
            , and{" "}
            <Link href="/locations/jeddah" className="underline underline-offset-2 hover:text-white transition-colors">
              Jeddah
            </Link>
            . Common bookings include hotel to Haramain train station (from SAR&nbsp;100), Jeddah Airport to
            Jeddah hotel (from SAR&nbsp;200), and hourly hire with a driver on standby (from SAR&nbsp;100 per
            hour in a Toyota Camry).
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20a%20local%20city%20ride."
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
              See all fares <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-parchment py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Section 1 — What's included */}
          <section aria-labelledby="what-we-cover">
            <h2 id="what-we-cover" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              What do local city rides cover?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Local rides stay within one city. They cost less than{" "}
              <Link href="/services/intercity-transfers" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                intercity transfers
              </Link>{" "}
              because the distances are shorter. Here is what Taxi Bhai covers in every city:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 bg-white border border-sand rounded-2xl px-5 py-4">
                  <Check size={16} className="text-brand-700 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-brand-700/80 text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2 — Route cards with pricing */}
          <section aria-labelledby="local-route-pricing">
            <h2 id="local-route-pricing" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Local route fares — all prices in SAR
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-6">
              All fares are fixed. No meter, no surge pricing, no hidden charges.{" "}
              <Link href="/pricing" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                See all fares
              </Link>{" "}
              for every route and vehicle.
            </p>
            <div className="space-y-6">
              {localRoutes.map((route) => {
                const row = getPricingRowForRoute(route.id);
                return (
                  <div key={route.id} className="bg-white border border-sand rounded-2xl overflow-hidden">
                    {/* Route header */}
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-sand bg-brand-50/40">
                      {route.icon}
                      <div>
                        <p className="font-display font-bold text-brand-950 text-base">{route.label}</p>
                        <p className="text-brand-500 text-xs mt-0.5 flex items-center gap-2">
                          <Clock size={11} aria-hidden="true" />
                          {route.duration}
                          <span aria-hidden="true">·</span>
                          {route.distance}
                        </p>
                      </div>
                    </div>
                    {/* Price table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-brand-900 text-white">
                            {vehicleColumns.map((v) => (
                              <th key={v.id} className="text-right px-4 py-2.5 font-semibold whitespace-nowrap first:text-left">
                                {v.label}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            {vehicleColumns.map((v) => (
                              <td key={v.id} className="px-4 py-3 text-right text-brand-900 font-semibold whitespace-nowrap first:text-left">
                                {row ? `SAR ${row.prices[v.id]}` : "—"}
                                {route.id === "per-hour" ? "/hr" : ""}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-brand-500 text-xs mt-3">
              All prices in Saudi Riyal (SAR). Price shown is the fixed total fare for the vehicle — not per person.
              Hourly hire has a minimum booking of one hour.
            </p>
          </section>

          {/* Section 3 — Hotel to train station */}
          <section aria-labelledby="hotel-train-station">
            <h2 id="hotel-train-station" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Hotel to Haramain train station
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-4">
              The Haramain High-Speed Railway connects{" "}
              <Link href="/locations/makkah" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                Makkah
              </Link>
              ,{" "}
              <Link href="/locations/madinah" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                Madinah
              </Link>
              , and{" "}
              <Link href="/locations/jeddah" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                Jeddah
              </Link>{" "}
              at high speed. Many pilgrims use the train between cities, then need a local taxi at
              each end.
            </p>
            <p className="text-brand-700/80 leading-relaxed mb-4">
              Taxi Bhai picks you up from your hotel and drops you at the station with time to spare.
              The driver loads your luggage. You just walk to your platform. Fares start from SAR&nbsp;100
              in a sedan.
            </p>
            <p className="text-brand-700/80 leading-relaxed">
              On arrival, the train-station-to-hotel transfer works the same way. Your driver waits
              in the arrivals area with a name board.
            </p>
          </section>

          {/* Section 4 — Jeddah Airport local */}
          <section aria-labelledby="jeddah-airport-local">
            <h2 id="jeddah-airport-local" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Jeddah Airport to a Jeddah hotel
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-4">
              King Abdulaziz International Airport (JED) is about 30&nbsp;km from central Jeddah.
              The drive takes 20–40 minutes in normal traffic. This is a local ride — not an intercity
              transfer — so the fare is lower.
            </p>
            <p className="text-brand-700/80 leading-relaxed mb-4">
              Fixed fares: SAR&nbsp;200 in a sedan, SAR&nbsp;250 in a Hyundai Staria, SAR&nbsp;400 in a GMC Yukon XL.
              See{" "}
              <Link href="/fleet" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                our fleet
              </Link>{" "}
              for full vehicle details.
            </p>
            <p className="text-brand-700/80 leading-relaxed">
              If you are staying in Jeddah before or after Umrah, this is the transfer you need.
              Your driver meets you in the arrivals hall and helps with luggage.
            </p>
          </section>

          {/* Section 5 — Hourly hire */}
          <section aria-labelledby="hourly-hire">
            <h2 id="hourly-hire" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Hourly hire — driver on standby
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-4">
              Sometimes you do not know your exact itinerary in advance. Hourly hire lets you book a
              driver by the hour. The driver stays with you. You set the pace.
            </p>
            <p className="text-brand-700/80 leading-relaxed mb-4">
              Common uses: hospital visits, pharmacy runs, shopping trips, Ziyarat site visits, or
              just getting around the city without stress. You can also combine hourly hire with{" "}
              <Link href="/services/umrah-ziyarat-transport" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                Ziyarat tours
              </Link>{" "}
              if you prefer a flexible schedule over a fixed itinerary.
            </p>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Minimum booking is one hour. Hourly rates:
            </p>
            <ul className="space-y-2">
              {[
                { vehicle: "Toyota Camry (sedan)", rate: "SAR 100/hr" },
                { vehicle: "Hyundai Staria (7 seats)", rate: "SAR 120/hr" },
                { vehicle: "GMC Yukon XL (7 seats, executive)", rate: "SAR 180/hr" },
                { vehicle: "Toyota Hiace (12 seats)", rate: "SAR 200/hr" },
                { vehicle: "Coaster (30 seats)", rate: "SAR 250/hr" },
              ].map((item) => (
                <li key={item.vehicle} className="flex items-center justify-between gap-4 bg-white border border-sand rounded-xl px-5 py-3">
                  <span className="text-brand-700/80 text-sm">{item.vehicle}</span>
                  <span className="text-brand-900 font-bold text-sm whitespace-nowrap">{item.rate}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 6 — Contextual prose + internal links */}
          <section aria-labelledby="cities-covered">
            <h2 id="cities-covered" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Which cities does Taxi Bhai cover for local rides?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-4">
              Taxi Bhai operates local city rides in all three main pilgrimage cities in Saudi Arabia.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  href: "/locations/makkah",
                  city: "Makkah",
                  detail: "Hotel ↔ train station, Masjid al-Haram area, Mina, Arafat, Aziziyah",
                },
                {
                  href: "/locations/madinah",
                  city: "Madinah",
                  detail: "Hotel ↔ train station, Masjid an-Nabawi area, Quba, Al-Baqi",
                },
                {
                  href: "/locations/jeddah",
                  city: "Jeddah",
                  detail: "Airport ↔ hotel, Corniche, Al-Balad old city, shopping malls",
                },
              ].map((item) => (
                <Link
                  key={item.city}
                  href={item.href}
                  className="flex flex-col gap-2 bg-white border border-sand hover:border-brand-400 rounded-2xl px-5 py-4 group transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-display font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
                      {item.city}
                    </p>
                    <ArrowRight size={14} className="text-brand-400 shrink-0" aria-hidden="true" />
                  </div>
                  <p className="text-brand-500 text-xs leading-relaxed">{item.detail}</p>
                </Link>
              ))}
            </div>
            <p className="text-brand-700/80 leading-relaxed">
              Need to travel between cities? See our{" "}
              <Link href="/services/intercity-transfers" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                intercity transfers
              </Link>{" "}
              page for Makkah–Madinah, Makkah–Jeddah, and related long-distance routes.
            </p>
          </section>

          {/* Section 7 — Related links */}
          <section aria-labelledby="related-services">
            <h2 id="related-services" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Browse these pages for more detail on each type of journey:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/services/intercity-transfers",
                  label: "Intercity Transfers",
                  sub: "Makkah–Madinah, Makkah–Jeddah, and more",
                },
                {
                  href: "/services/airport-transfers",
                  label: "Airport Transfers",
                  sub: "JED and MED airports, 24/7, flight-tracked",
                },
                {
                  href: "/services/umrah-ziyarat-transport",
                  label: "Ziyarat Tours",
                  sub: "Private tours of sacred sites in Makkah & Madinah",
                },
                {
                  href: "/fleet",
                  label: "Our Fleet",
                  sub: "Sedan, Staria, GMC, Hiace, Coaster — view all vehicles",
                },
                {
                  href: "/pricing",
                  label: "Full Pricing Table",
                  sub: "Every route, every vehicle — fixed SAR fares",
                },
                {
                  href: "/book-ride",
                  label: "Book Your Ride Now",
                  sub: "WhatsApp booking, confirmed in minutes",
                },
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

      <PageFAQ faqs={faqs} heading="Local city rides — common questions" />
      <CtaBanner />
    </>
  );
}
