import type { Metadata } from "next";
import Link from "next/link";
import { Check, MapPin, ArrowRight, Clock } from "lucide-react";
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

const PAGE_URL = "https://www.taxibhai.com/locations/madinah";

export const metadata: Metadata = {
  title: "Taxi Service in Madinah (Medina) — Airport Transfers & Ziyarat | Taxi Bhai",
  description:
    "Private taxi in Madinah (Medina): from Madinah Airport (MED) from SAR 150, Madinah Ziyarat from SAR 200, Madinah–Makkah from SAR 450. 24/7 fixed fares. Book on WhatsApp.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Taxi Service in Madinah (Medina) | Taxi Bhai",
    description:
      "Private taxi in Madinah: MED Airport from SAR 150, Ziyarat from SAR 200, Madinah–Makkah from SAR 450. 24/7 fixed fares.",
    url: PAGE_URL,
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Madinah", href: "/locations/madinah" },
];

const faqs: PageFAQItem[] = [
  {
    question: "How far is Madinah Airport from the city?",
    answer:
      "Prince Mohammad bin Abdulaziz International Airport (IATA: MED) is approximately 15 km northwest of central Madinah. The drive to hotels near Masjid an-Nabawi takes 30 to 45 minutes under normal traffic. Taxi Bhai covers this route for a fixed fare of SAR 150 in a sedan.",
  },
  {
    question: "What are the Ziyarat sites in Madinah?",
    answer:
      "The main Madinah Ziyarat sites are: Masjid an-Nabawi (Prophet's Mosque — the 2nd holiest site in Islam and burial place of the Prophet ﷺ), Al-Baqi Cemetery (Jannat al-Baqi — where many companions are buried), Masjid Quba (the first mosque built in Islam, ~4 km from Nabawi), Masjid al-Qiblatayn (where the Qibla changed from Jerusalem to Makkah), Uhud Mountain and its battlefield (~5 km north), Shuhada al-Uhud Cemetery, and Masjid al-Fath in the Seven Mosques area.",
  },
  {
    question: "Is Masjid Quba the first mosque in Islam?",
    answer:
      "Yes. Masjid Quba is recognised as the first mosque ever built in Islam. It was established by the Prophet Muhammad ﷺ upon his arrival in Madinah during the Hijra in 622 CE. The Prophet ﷺ is reported to have said that praying two rak'ahs at Masjid Quba earns the reward of an Umrah. It is located approximately 4 km south of Masjid an-Nabawi and is a major stop on the Madinah Ziyarat tour.",
  },
  {
    question: "How much is Madinah to Makkah by taxi?",
    answer:
      "The private taxi fare from Madinah to Makkah starts at SAR 450 in a Camry/Sonata sedan (1–3 passengers). The route covers approximately 420 km and takes 4 to 5 hours. A Hyundai Staria (7 seats) is SAR 550 and a GMC Yukon XL (luxury) is SAR 1000. All fares are fixed — no meter, no hidden charges.",
  },
  {
    question: "Can I visit Badr from Madinah in one day?",
    answer:
      "Yes — the Madinah to Badr day trip is a popular option. Badr is approximately 150 km southwest of Madinah, a 2.5 to 3 hour drive each way. Taxi Bhai offers this as a return day trip, visiting the historic Battle of Badr site and the Shuhada al-Badr cemetery. The return fare starts at SAR 400+ in a sedan, depending on waiting time. Book via WhatsApp to confirm exact pricing.",
  },
];

const madinahRoutes = [
  { id: "med-airport-madinah", label: "Madinah Airport → Madinah", note: "~15 km · 30–45 mins" },
  { id: "madinah-med-airport", label: "Madinah → Madinah Airport", note: "~15 km · 30–45 mins" },
  { id: "madinah-makkah", label: "Madinah → Makkah", note: "~420 km · 4–5 hrs" },
  { id: "makkah-madinah", label: "Makkah → Madinah", note: "~420 km · 4–5 hrs" },
  { id: "madinah-ziyarat", label: "Madinah Ziyarat Tour", note: "4–8 hrs · private" },
  { id: "madinah-badr", label: "Madinah → Badr (Day Trip)", note: "~150 km one way · full day" },
];

const ziyaratSites = [
  {
    name: "Masjid an-Nabawi (Prophet's Mosque)",
    note: "The second holiest mosque in Islam. The burial place of the Prophet Muhammad ﷺ is located within the mosque beneath the Green Dome.",
  },
  {
    name: "Al-Baqi Cemetery (Jannat al-Baqi)",
    note: "Adjacent to Masjid an-Nabawi. The burial place of many of the Prophet's ﷺ companions, family members, and the early Muslims.",
  },
  {
    name: "Masjid Quba",
    note: "The first mosque ever built in Islam (~4 km from Nabawi). The Prophet ﷺ said praying two rak'ahs here equals the reward of Umrah.",
  },
  {
    name: "Masjid al-Qiblatayn",
    note: "The Mosque of the Two Qiblas — the historic site where the Qibla direction changed from Jerusalem (Al-Quds) to Makkah during prayer.",
  },
  {
    name: "Uhud Mountain & Battlefield",
    note: "~5 km north of Masjid an-Nabawi. Site of the Battle of Uhud (625 CE) — one of the pivotal early battles in Islamic history.",
  },
  {
    name: "Shuhada al-Uhud Cemetery",
    note: "The burial site of the martyrs of Uhud, including Sayyiduna Hamza ibn Abd al-Muttalib (RA), uncle of the Prophet ﷺ.",
  },
  {
    name: "Masjid al-Fath (Seven Mosques area)",
    note: "A historic cluster of mosques associated with the Battle of the Trench (Khandaq, 627 CE), including Masjid al-Fath and Masjid Salman al-Farisi.",
  },
];

export default function MadinahLocationPage() {
  const locationLd = generateLocationPageJsonLd({
    name: "Madinah",
    arabicName: "المدينة المنورة",
    description:
      "Madinah Al-Munawwarah is the second holiest city in Islam, home to Masjid an-Nabawi (the Prophet's Mosque). Taxi Bhai provides private airport transfers from Madinah Airport (MED), transfers to Makkah, Madinah Ziyarat tours, and day trips to Badr.",
    pageUrl: PAGE_URL,
    lat: 24.4672,
    lng: 39.615,
  });
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Locations", url: "https://www.taxibhai.com/locations" },
    { name: "Madinah", url: PAGE_URL },
  ]);
  const webPageLd = generateWebPageJsonLd({
    name: "Taxi Service in Madinah (Medina) — Airport Transfers & Ziyarat",
    description:
      "Private taxi in Madinah: airport transfers from MED from SAR 150, Madinah Ziyarat from SAR 200, Madinah–Makkah from SAR 450. 24/7 fixed fares.",
    url: PAGE_URL,
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Locations", url: "https://www.taxibhai.com/locations" },
      { name: "Madinah", url: PAGE_URL },
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
      <div className="bg-brand-950 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} light />
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={16} className="text-gold-400" aria-hidden="true" />
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
              Madinah · المدينة المنورة
            </p>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
            Taxi Service in Madinah (Medina)
          </h1>
          <p className="text-brand-300 text-xl mb-5 font-arabic" lang="ar" dir="rtl">
            المدينة المنورة
          </p>
          <p className="answer-block text-brand-200 text-lg leading-relaxed max-w-2xl mb-8">
            Taxi Bhai serves Madinah Al-Munawwarah with private airport transfers from Madinah
            Airport (MED, ~15 km, from <strong className="text-white">SAR 150</strong>),
            intercity transfers to Makkah (~420 km, from{" "}
            <strong className="text-white">SAR 450</strong>), Madinah Ziyarat tours (from{" "}
            <strong className="text-white">SAR 200</strong>), and day trips to Badr. All 24/7
            with fixed fares.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20taxi%20in%20Madinah."
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
      <div className="bg-brand-900 border-b border-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2 text-brand-200">
            <MapPin size={14} className="text-gold-400" aria-hidden="true" />
            <span>~15 km from Madinah Airport (MED)</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <Clock size={14} className="text-gold-400" aria-hidden="true" />
            <span>30–45 mins airport transfer</span>
          </div>
          <div className="flex items-center gap-2 text-brand-200">
            <span className="text-gold-400 font-bold">SAR</span>
            <span>Airport transfer from SAR 150</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 lg:py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Section 1: Getting to Madinah */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Getting to Madinah — airport and intercity options
            </h2>
            <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 space-y-5">
              {[
                {
                  title: "From Madinah Airport (MED) — 15 km",
                  body: "Prince Mohammad bin Abdulaziz International Airport handles direct international flights into Madinah during Umrah and Hajj seasons. It is only ~15 km from the city's hotel district near Masjid an-Nabawi — approximately 30 to 45 minutes by private taxi. Fixed fare: SAR 150 sedan.",
                },
                {
                  title: "From Jeddah Airport (JED) — 430 km",
                  body: "Many pilgrims arrive at Jeddah's King Abdulaziz Airport and travel directly to Madinah — particularly those whose Umrah itinerary begins in Madinah before Makkah. The drive covers approximately 430 km and takes 5 to 6 hours. Fixed fare: SAR 500 sedan. A comfort stop is included.",
                },
                {
                  title: "From Makkah — 420 km",
                  body: "The Makkah to Madinah intercity transfer is the most commonly booked route by Umrah pilgrims completing their stay in Makkah before visiting the Prophet's ﷺ Mosque. The journey covers ~420 km in 4 to 5 hours. Fixed fare: SAR 450 sedan. Fully private, door-to-hotel.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold-400 mt-2 shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-900 mb-1 text-sm sm:text-base">{item.title}</p>
                    <p className="text-brand-700/80 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Ziyarat sites */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Madinah Ziyarat — sacred sites of the Prophet's city
            </h2>
            <p className="text-brand-700/80 mb-5 text-sm sm:text-base leading-relaxed">
              Madinah holds some of the most spiritually significant sites in Islam, clustered
              within a few kilometres of Masjid an-Nabawi. A private Madinah Ziyarat tour with
              Taxi Bhai starts from <strong className="text-brand-900">SAR 200</strong> and covers
              all major sites at your own pace.
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
          </section>

          {/* Section 3: Madinah to Badr */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Madinah to Badr — day trip
            </h2>
            <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 space-y-4 text-brand-700/80 leading-relaxed text-sm sm:text-base">
              <p>
                Badr is one of the most historically significant sites in Islamic history — it is
                where the first major battle of Islam was fought in 624 CE (2 AH). Located
                approximately <strong className="text-brand-900">150 km southwest of Madinah</strong>,
                the site can be visited as a full-day return trip.
              </p>
              <p>
                The drive takes 2.5 to 3 hours each way via the Haramain Highway. Key sites at
                Badr include the{" "}
                <strong className="text-brand-900">Shuhada al-Badr cemetery</strong> (burial
                ground of the Muslim martyrs of Badr), the mosque marking the battlefield, and
                the mountain pass where the battle unfolded.
              </p>
              <p>
                Taxi Bhai offers this route as a private return day trip with waiting time
                included. The fare varies by vehicle and waiting time — contact us via WhatsApp
                for a fixed quote.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check size={14} className="text-brand-600 shrink-0" aria-hidden="true" />
                  <span>~150 km one way</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check size={14} className="text-brand-600 shrink-0" aria-hidden="true" />
                  <span>2.5–3 hrs each way</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check size={14} className="text-brand-600 shrink-0" aria-hidden="true" />
                  <span>Return included in fare</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: All services */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              All taxi services in Madinah
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Madinah Airport → Madinah Hotel", href: "/routes/madinah-airport-to-madinah-hotel", note: "From SAR 150 · 15 km" },
                { label: "Madinah → Madinah Airport", href: "/pricing#madinah-med-airport", note: "From SAR 100 · 15 km" },
                { label: "Madinah → Makkah", href: "/routes/madinah-to-makkah", note: "From SAR 450 · 420 km" },
                { label: "Makkah → Madinah", href: "/routes/makkah-to-madinah", note: "From SAR 450 · 420 km" },
                { label: "Jeddah Airport → Madinah", href: "/routes/jeddah-airport-to-madinah", note: "From SAR 500 · 430 km" },
                { label: "Madinah Ziyarat Tour", href: "/services/umrah-ziyarat-transport", note: "From SAR 200 · private" },
                { label: "Madinah → Badr Day Trip", href: "/pricing#madinah-badr", note: "~300 km return" },
                { label: "Hourly Hire in Madinah", href: "/pricing#per-hour", note: "From SAR 100/hr" },
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
              Madinah taxi fares — sedan prices
            </h2>
            <p className="text-brand-600 mb-6 text-sm">
              Sedan (Camry/Sonata, 1–3 passengers) fixed fares. All fares are fully inclusive.
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
                    {madinahRoutes.map((route) => {
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

      <PageFAQ faqs={faqs} heading="Madinah taxi — common questions" />
      <CtaBanner />
    </>
  );
}
