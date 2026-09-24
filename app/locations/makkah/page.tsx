import type { Metadata } from "next";
import Link from "next/link";
import { Check, MapPin, ArrowRight } from "lucide-react";
import {
  generateBreadcrumbJsonLd,
  generateWebPageJsonLd,
  generatePageFAQJsonLd,
  generateLocationPageJsonLd,
} from "@/lib/schema/jsonLd";
import { pricingTable } from "@/lib/data/pricing";
import type { VehicleId } from "@/lib/data/pricing";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageFAQ } from "@/components/ui/PageFAQ";
import type { PageFAQItem } from "@/components/ui/PageFAQ";

const PAGE_URL = "https://www.taxibhai.com/locations/makkah";

export const metadata: Metadata = {
  title: "Taxi Service in Makkah (Mecca) — Airport Transfers & Ziyarat | Taxi Bhai",
  description:
    "Private taxi in Makkah (Mecca): from Jeddah Airport from SAR 250, Makkah Ziyarat from SAR 200, Makkah–Madinah from SAR 450. 24/7 fixed fares. Book on WhatsApp: +966 57 306 7785.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Taxi Service in Makkah (Mecca) | Taxi Bhai",
    description:
      "Private taxi in Makkah: JED Airport from SAR 250, Ziyarat from SAR 200, Makkah–Madinah from SAR 450. 24/7, fixed fares.",
    url: PAGE_URL,
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Makkah", href: "/locations/makkah" },
];

const faqs: PageFAQItem[] = [
  {
    question: "How much is a taxi from Jeddah Airport to Makkah?",
    answer:
      "A private taxi from King Abdulaziz International Airport (JED) to a Makkah hotel costs SAR 250 in a Camry/Sonata sedan, SAR 350 in a Hyundai Staria (7-seater), or SAR 550 in a GMC Yukon XL. All fares are fixed — no meter, no surge pricing.",
  },
  {
    question: "Is there a taxi available 24 hours in Makkah?",
    answer:
      "Yes — Taxi Bhai operates 24 hours a day, 7 days a week throughout Makkah. Whether your flight lands at 2 am or you need a Ziyarat tour after Fajr prayer, a driver is available. Book via WhatsApp: +966 57 306 7785.",
  },
  {
    question: "What is a Makkah Ziyarat tour?",
    answer:
      "A Makkah Ziyarat tour is a private guided taxi tour of the sacred and historic sites surrounding the Grand Mosque. The tour typically visits Jabal al-Nour (Cave of Hira — where the first Quranic revelation occurred, 270 steps), Jabal Thawr (Cave of Thawr, Hijra shelter), the Plain of Arafat, Mina (tent city), Muzdalifah, and Masjid al-Jinn. It takes 4–8 hours depending on pace and starts from SAR 200 in a sedan.",
  },
  {
    question: "How long does Makkah to Madinah take by taxi?",
    answer:
      "The drive from Makkah to Madinah covers approximately 420 km and takes 4 to 5 hours under normal conditions. The fare starts at SAR 450 in a Camry/Sonata sedan. A comfort stop is included en route. Taxi Bhai offers this route 24/7 with door-to-door hotel service.",
  },
  {
    question: "Which hotel areas in Makkah does Taxi Bhai cover?",
    answer:
      "Taxi Bhai serves all hotel areas in Makkah — including the Al Haram district (walking distance to Masjid al-Haram), Aziziyah (~2 km from the Grand Mosque), the Abraj Al Bait tower complex, Ajyad, Mina (5 km), Arafat (~15 km), and Muzdalifah. Whether you stay close to the Haram or further out, we pick up and drop off at your hotel entrance.",
  },
];

const makkahRoutes = [
  { id: "jed-airport-makkah", label: "Jeddah Airport → Makkah", note: "~80 km · 1–1.5 hrs" },
  { id: "makkah-jed-airport", label: "Makkah → Jeddah Airport", note: "~80 km · 1–1.5 hrs" },
  { id: "makkah-madinah", label: "Makkah → Madinah", note: "~420 km · 4–5 hrs" },
  { id: "madinah-makkah", label: "Madinah → Makkah", note: "~420 km · 4–5 hrs" },
  { id: "makkah-ziyarat", label: "Makkah Ziyarat Tour", note: "4–8 hrs · full private tour" },
  { id: "makkah-taif-ziyarat", label: "Makkah → Taif Ziyarat", note: "~180 km round trip · full day" },
];

const ziyaratSites = [
  {
    name: "Masjid al-Haram (Grand Mosque)",
    note: "The holiest site in Islam — Taxi Bhai drops guests at their hotel in the Al Haram district, within walking distance.",
  },
  {
    name: "Jabal al-Nour — Cave of Hira",
    note: "~5 km from Masjid al-Haram. 270 steps lead to the cave where the first Quranic revelation was revealed to the Prophet Muhammad ﷺ.",
  },
  {
    name: "Jabal Thawr — Cave of Thawr",
    note: "~6 km south of Makkah. The Prophet ﷺ and Abu Bakr (RA) sheltered here for three days during the Hijra migration to Madinah.",
  },
  {
    name: "Plain of Arafat (Arafah)",
    note: "~15 km from Makkah city centre. The most significant station of Hajj — pilgrims stand here on the 9th of Dhul Hijjah.",
  },
  {
    name: "Mina",
    note: "~5 km from Masjid al-Haram. The tent city of Hajj — site of the Jamarat (symbolic stoning of the devil ritual).",
  },
  {
    name: "Muzdalifah",
    note: "Located between Mina and Arafat. Pilgrims gather pebbles here after leaving Arafat during Hajj.",
  },
  {
    name: "Masjid al-Jinn",
    note: "Close to Masjid al-Haram. Historically significant site where a group of jinn are said to have accepted Islam.",
  },
];

export default function MakkahLocationPage() {
  const locationLd = generateLocationPageJsonLd({
    name: "Makkah",
    arabicName: "مكة المكرمة",
    description:
      "Makkah (Mecca) is the holiest city in Islam, home to Masjid al-Haram and the Kaaba. Taxi Bhai provides private airport transfers from Jeddah Airport (JED), intercity transfers to Madinah, Makkah Ziyarat tours, and hourly hire throughout Makkah.",
    pageUrl: PAGE_URL,
    lat: 21.3891,
    lng: 39.8579,
  });
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Locations", url: "https://www.taxibhai.com/locations" },
    { name: "Makkah", url: PAGE_URL },
  ]);
  const webPageLd = generateWebPageJsonLd({
    name: "Taxi Service in Makkah (Mecca) — Airport Transfers & Ziyarat",
    description:
      "Private taxi in Makkah: airport transfers from JED from SAR 250, Makkah Ziyarat from SAR 200, Makkah–Madinah from SAR 450. 24/7 fixed fares.",
    url: PAGE_URL,
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Locations", url: "https://www.taxibhai.com/locations" },
      { name: "Makkah", url: PAGE_URL },
    ],
    speakableSelectors: ["h1", ".answer-block", "h2"],
  });
  const faqLd = generatePageFAQJsonLd(faqs, PAGE_URL);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} light />
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={16} className="text-gold-400" aria-hidden="true" />
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
              Makkah · مكة المكرمة
            </p>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
            Taxi Service in Makkah (Mecca)
          </h1>
          <p className="text-brand-300 text-xl mb-5 font-arabic" lang="ar" dir="rtl">
            مكة المكرمة
          </p>
          <p className="answer-block text-brand-200 text-lg leading-relaxed max-w-2xl mb-8">
            Taxi Bhai provides private taxi services throughout Makkah — including airport
            transfers from Jeddah Airport (JED, ~80 km, from{" "}
            <strong className="text-white">SAR 250</strong>), hotel-to-hotel transfers to
            Madinah (~420 km, from <strong className="text-white">SAR 450</strong>), Makkah
            Ziyarat tours (from <strong className="text-white">SAR 200</strong>), and hourly
            hire. All services are 24/7 with fixed SAR fares.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20taxi%20in%20Makkah."
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
              View all fares <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-brand-800 border-b border-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2 text-brand-200">
            <MapPin size={14} className="text-gold-400" aria-hidden="true" />
            <span>~80 km from Jeddah Airport</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <span className="text-gold-400 font-bold">SAR</span>
            <span>Airport transfer from SAR 250</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <span className="text-gold-400">✓</span>
            <span>Available 24/7 · No meter</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 lg:py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Section 1: JED Airport to Makkah */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              How to get from Jeddah Airport to Makkah
            </h2>
            <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 space-y-4 text-brand-700/80 leading-relaxed text-sm sm:text-base">
              <p>
                King Abdulaziz International Airport (IATA: JED) in Jeddah is the primary
                international gateway for Umrah pilgrims arriving in the Hejaz region. The
                airport sits approximately <strong className="text-brand-900">80 km northwest</strong>{" "}
                of Makkah city centre — a drive of 1 to 1.5 hours via the{" "}
                <strong className="text-brand-900">Haramain Expressway (Route 40)</strong>, a
                high-speed dual carriageway purpose-built for pilgrim traffic.
              </p>
              <p>
                A private Taxi Bhai sedan (Camry/Sonata) covers this route for a fixed fare of{" "}
                <strong className="text-brand-900">SAR 250</strong> — door-to-hotel, no meter,
                no surge pricing regardless of the time of day. Larger groups can book a
                Hyundai Staria (7 seats, SAR 350) or GMC Yukon XL (7 seats luxury, SAR 550).
              </p>
              <p>
                Your driver monitors your flight number in real time so the pickup adjusts
                automatically for any delays. They wait inside the arrivals hall with a name
                board — no need to find a taxi rank or negotiate fares.
              </p>
              <div className="mt-4">
                <Link
                  href="/routes/jeddah-airport-to-makkah"
                  className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-800 font-medium text-sm"
                >
                  Full details: Jeddah Airport to Makkah route <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* Section 2: Makkah Ziyarat */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Makkah Ziyarat — sacred sites of Makkah
            </h2>
            <p className="text-brand-700/80 mb-5 text-sm sm:text-base leading-relaxed">
              A Makkah Ziyarat tour takes you to the significant Islamic sites surrounding the
              Grand Mosque — from mountains that witnessed early revelation to plains central to
              the Hajj pilgrimage. Taxi Bhai runs private Ziyarat tours starting from{" "}
              <strong className="text-brand-900">SAR 200</strong> in a sedan, at your own pace.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {ziyaratSites.map((site) => (
                <div
                  key={site.name}
                  className="bg-white border border-sand rounded-xl p-4 flex flex-col gap-1.5"
                >
                  <p className="font-semibold text-brand-900 text-sm">{site.name}</p>
                  <p className="text-brand-600 text-xs leading-relaxed">{site.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="/services/umrah-ziyarat-transport"
                className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-800 font-medium text-sm"
              >
                About Ziyarat transport service <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* Section 3: Hotel areas */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Hotel areas in Makkah
            </h2>
            <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 space-y-5">
              {[
                {
                  area: "Al Haram area",
                  detail:
                    "The district immediately surrounding Masjid al-Haram (the Grand Mosque). Hotels here — such as those in the Abraj Al Bait complex and along King Abdulaziz Road — are within walking distance of the mosque. This is the most in-demand and highest-occupancy area during Ramadan and Hajj season.",
                },
                {
                  area: "Aziziyah",
                  detail:
                    "Located approximately 2 km from the Grand Mosque, Aziziyah offers a wider range of mid-range hotels. A short taxi ride (or the Makkah Bus) connects guests to the Haram. Taxi Bhai serves all hotels in this district for transfers and Ziyarat departures.",
                },
                {
                  area: "Abraj Al Bait (Clock Tower Complex)",
                  detail:
                    "The Abraj Al Bait towers rise directly opposite the Grand Mosque's King Abdulaziz Gate. The complex includes luxury hotels and shopping, with a direct view of the Kaaba from upper floors. Drop-off and pickup points are managed within the complex perimeter.",
                },
              ].map((item) => (
                <div key={item.area} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold-400 mt-2 shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-900 mb-1">{item.area}</p>
                    <p className="text-brand-700/80 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: All services in Makkah */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              All taxi services in Makkah
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Jeddah Airport → Makkah", href: "/routes/jeddah-airport-to-makkah", note: "From SAR 250 · 80 km" },
                { label: "Makkah → Jeddah Airport", href: "/pricing#makkah-jed-airport", note: "From SAR 200 · 80 km" },
                { label: "Makkah → Madinah", href: "/routes/makkah-to-madinah", note: "From SAR 450 · 420 km" },
                { label: "Madinah → Makkah", href: "/routes/madinah-to-makkah", note: "From SAR 450 · 420 km" },
                { label: "Makkah Ziyarat Tour", href: "/services/umrah-ziyarat-transport", note: "From SAR 200 · private" },
                { label: "Makkah–Taif Ziyarat", href: "/pricing#makkah-taif-ziyarat", note: "From SAR 450 · full day" },
                { label: "Hourly Hire in Makkah", href: "/pricing#per-hour", note: "From SAR 100/hr" },
                { label: "Airport Transfer Service", href: "/services/airport-transfers", note: "All airport routes" },
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

          {/* Section 5: Pricing table */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-2">
              Makkah taxi fares — sedan prices
            </h2>
            <p className="text-brand-600 mb-6 text-sm">
              Sedan (Camry/Sonata, 1–3 passengers) fixed fares. All fares inclusive — no extras.
            </p>
            <div className="bg-white border border-sand rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-50 border-b border-sand">
                      <th className="text-left py-3 px-5 font-semibold text-brand-700">Route</th>
                      <th className="text-left py-3 px-4 font-semibold text-brand-700">Details</th>
                      <th className="text-right py-3 px-5 font-semibold text-brand-700">Sedan (SAR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {makkahRoutes.map((route) => {
                      const row = pricingTable.find((r) => r.routeId === route.id);
                      const price = row?.prices["camry" as VehicleId];
                      if (!price) return null;
                      return (
                        <tr key={route.id} className="border-b border-sand last:border-0 hover:bg-brand-50/50 transition-colors">
                          <td className="py-3.5 px-5 font-medium text-brand-900">{route.label}</td>
                          <td className="py-3.5 px-4 text-brand-500 text-xs">{route.note}</td>
                          <td className="py-3.5 px-5 text-right font-bold text-brand-900 text-base">
                            {price}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="bg-brand-50 border-t border-sand px-5 py-3 text-xs text-brand-500 flex items-center justify-between flex-wrap gap-2">
                <span>Staria, GMC, Hiace, Coaster and Bus rates available.</span>
                <Link href="/pricing" className="text-brand-600 hover:text-brand-800 font-medium">
                  Full pricing table →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      <PageFAQ faqs={faqs} heading="Makkah taxi — common questions" />
      <CtaBanner />
    </>
  );
}
