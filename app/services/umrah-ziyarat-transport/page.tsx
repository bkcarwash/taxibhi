import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, MapPin, ArrowRight, Star } from "lucide-react";
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

const PAGE_URL = "https://www.taxibhai.com/services/umrah-ziyarat-transport";

export const metadata: Metadata = {
  title: "Umrah Taxi & Ziyarat Tours — Makkah, Madinah & Jeddah | Taxi Bhai",
  description:
    "Private Umrah transport and Ziyarat tours. Makkah Ziyarat (Jabal al-Nour, Arafat, Mina) from SAR 200. Madinah Ziyarat (Masjid an-Nabawi, Quba, Uhud) from SAR 200. Day trips to Taif and Badr.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Umrah Taxi & Ziyarat Tours — Makkah, Madinah & Jeddah | Taxi Bhai",
    description:
      "Private Umrah transport and Ziyarat tours. Makkah Ziyarat from SAR 200. Madinah Ziyarat from SAR 200. Day trips to Taif and Badr.",
    url: PAGE_URL,
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Umrah & Ziyarat Transport", href: "/services/umrah-ziyarat-transport" },
];

const ziyaratRoutes = [
  { id: "makkah-ziyarat", label: "Makkah Ziyarat Tour", duration: "4–8 hrs" },
  { id: "madinah-ziyarat", label: "Madinah Ziyarat Tour", duration: "4–8 hrs" },
  { id: "jeddah-ziyarat", label: "Jeddah Ziyarat Tour", duration: "Full day" },
  { id: "makkah-taif-ziyarat", label: "Makkah → Taif Day Trip", duration: "Full day" },
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
    question: "How much does a Makkah Ziyarat tour cost?",
    answer:
      "A private Makkah Ziyarat tour starts from SAR 200 in a sedan (Camry/Sonata) covering all key sites: Jabal al-Nour (Cave of Hira), Jabal Thawr, Plain of Arafat, Mina, Muzdalifah, and Masjid al-Jinn. For larger vehicles: Staria SAR 300, GMC SAR 500, Hiace SAR 600. The tour is fully private and lasts 4 to 8 hours.",
  },
  {
    question: "What sites are included in a Madinah Ziyarat tour?",
    answer:
      "A Madinah Ziyarat tour typically covers: Masjid an-Nabawi (the Prophet's Mosque), Al-Baqi Cemetery (the historic graveyard adjacent to the mosque), Masjid Quba (the first mosque ever built in Islam), Masjid al-Qiblatayn (where the direction of prayer changed), Uhud Mountain, and Shuhada al-Uhud (the graves of the martyrs of Uhud). The tour is private and runs at your own pace.",
  },
  {
    question: "Is Ziyarat the same as Umrah?",
    answer:
      "No. Umrah is a specific Islamic pilgrimage with obligatory rituals (Ihram, Tawaf around the Kaabah, Sa'i between Safa and Marwa, and Halq/Taqsir). Ziyarat means 'visitation' — it refers to the voluntary visiting of sacred and historic Islamic sites such as Jabal al-Nour, Uhud, Quba, and Arafat. Ziyarat has great spiritual merit but is not a required pilgrimage ritual.",
  },
  {
    question: "How long does a Ziyarat tour take?",
    answer:
      "A standard Makkah or Madinah Ziyarat tour takes between 4 and 8 hours depending on how many sites you visit, how long you spend at each, and traffic conditions. A half-day tour (4–5 hours) covers the main sites. A full-day tour (6–8 hours) allows more time at each location and includes lunch.",
  },
  {
    question: "Can I do a day trip from Makkah to Taif?",
    answer:
      "Yes. The Makkah to Taif day trip covers approximately 180 km round trip and is available from SAR 450 in a sedan. Taif (the City of Roses) sits 1,800 metres above sea level in the Hejaz mountains and is known for its cool climate, rose gardens, and Islamic heritage sites including Masjid Abdullah ibn Abbas. The driver returns you to your Makkah hotel the same evening.",
  },
];

export default function UmrahZiyaratPage() {
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Services", url: "https://www.taxibhai.com/services" },
    { name: "Umrah & Ziyarat Transport", url: PAGE_URL },
  ]);

  const serviceLd = generateServicePillarJsonLd({
    serviceId: "umrah-ziyarat-transport",
    name: "Umrah Taxi & Ziyarat Tours",
    description:
      "Private Umrah transport and Ziyarat tours in Makkah, Madinah, and Jeddah. Day trips to Taif and Badr. All private, from SAR 200.",
    pageUrl: PAGE_URL,
    startingPrice: "SAR 200",
  });

  const webPageLd = generateWebPageJsonLd({
    name: "Umrah Taxi & Ziyarat Tours — Makkah, Madinah & Jeddah | Taxi Bhai",
    description:
      "Private Umrah transport and Ziyarat tours. Makkah Ziyarat from SAR 200. Madinah Ziyarat from SAR 200. Day trips to Taif and Badr.",
    url: PAGE_URL,
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Services", url: "https://www.taxibhai.com/services" },
      { name: "Umrah & Ziyarat Transport", url: PAGE_URL },
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
            Umrah &amp; Ziyarat
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Umrah Taxi &amp; Private Ziyarat Tours — Saudi Arabia
          </h1>
          <p className="answer-block text-brand-300 text-lg max-w-2xl leading-relaxed mb-8">
            Ziyarat means the voluntary visitation of sacred Islamic sites. Taxi Bhai offers private Ziyarat
            tours in Makkah (Jabal al-Nour, Arafat, Mina, Muzdalifah, Jabal Thawr) and Madinah
            (Masjid an-Nabawi, Quba, Uhud, Al-Baqi, Qiblatayn) from SAR&nbsp;200. All tours are fully
            private — no shared vehicles, no fixed departure times.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20a%20Ziyarat%20tour."
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
              View Tour Fares <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-parchment py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Section 1 — What is Ziyarat */}
          <section aria-labelledby="what-is-ziyarat">
            <h2 id="what-is-ziyarat" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              What is Ziyarat?
            </h2>
            <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8">
              <p className="text-brand-700/80 leading-relaxed mb-4">
                <strong className="text-brand-950">Ziyarat</strong> (Arabic: زيارة) literally means &ldquo;visitation&rdquo;.
                In the context of Islamic pilgrimage, it refers to the voluntary visiting of sacred, historic, and spiritually
                significant sites in Makkah and Madinah — and further afield in Saudi Arabia.
              </p>
              <p className="text-brand-700/80 leading-relaxed mb-4">
                Ziyarat is <strong className="text-brand-950">distinct from Umrah</strong>. Umrah is a formalised pilgrimage
                with specific obligatory rituals: entering the state of Ihram, performing Tawaf (seven circuits of the Kaabah),
                Sa&rsquo;i (walking seven times between Safa and Marwa), and Halq or Taqsir (hair cutting). These acts are
                necessary for Umrah to be valid.
              </p>
              <p className="text-brand-700/80 leading-relaxed">
                Ziyarat, by contrast, has no prescribed rituals. It is the spiritual act of visiting sites connected to
                the Prophet Muhammad (peace be upon him), the Companions, and key events in Islamic history. It is highly
                recommended and spiritually rewarding, but not obligatory. Many pilgrims perform Ziyarat before or after
                their Umrah as an extension of their spiritual journey.
              </p>
            </div>
          </section>

          {/* Section 2 — Makkah Ziyarat sites */}
          <section aria-labelledby="makkah-ziyarat-sites">
            <h2 id="makkah-ziyarat-sites" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              What are the Makkah Ziyarat sites?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              A Makkah Ziyarat tour visits the following sacred sites. Your private driver is familiar with each
              location and its Islamic significance:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Jabal al-Nour (Cave of Hira)",
                  desc: "The mountain where the first revelation of the Quran was received by the Prophet Muhammad (PBUH). The cave of Hira at its peak requires climbing approximately 270 steps. One of the most visited sites for Umrah pilgrims.",
                },
                {
                  name: "Jabal Thawr",
                  desc: "The mountain where the Prophet and Abu Bakr (RA) took refuge during the migration (Hijra) to Madinah. The cave at its summit is significant in early Islamic history.",
                },
                {
                  name: "Plain of Arafat (Wuquf)",
                  desc: "The vast plain where pilgrims gather on the 9th of Dhul Hijjah during Hajj. Arafat holds the Mount of Mercy (Jabal ar-Rahmah) and Masjid al-Namirah. Spiritually profound to visit even outside Hajj season.",
                },
                {
                  name: "Mina",
                  desc: "Known as the City of Tents, Mina is the site of the Jamarat (stone pillars) where the symbolic stoning of the devil takes place during Hajj. Visiting Mina outside Hajj allows pilgrims to reflect on the rites of Ibrahim (AS).",
                },
                {
                  name: "Muzdalifah",
                  desc: "The open area between Arafat and Mina where pilgrims spend the night after leaving Arafat during Hajj, collecting pebbles for the Jamarat. Masjid al-Mash&rsquo;ar al-Haram is located here.",
                },
                {
                  name: "Masjid al-Jinn",
                  desc: "The mosque built at the site where a group of jinn reportedly accepted Islam after hearing the Prophet recite the Quran. A unique and spiritually interesting stop on any Makkah Ziyarat tour.",
                },
              ].map((site) => (
                <div key={site.name} className="bg-white border border-sand rounded-2xl p-5">
                  <div className="flex items-start gap-2 mb-2">
                    <Star size={14} className="text-gold-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <p className="font-semibold text-brand-950 text-sm">{site.name}</p>
                  </div>
                  <p className="text-brand-700/75 text-sm leading-relaxed">{site.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Madinah Ziyarat sites */}
          <section aria-labelledby="madinah-ziyarat-sites">
            <h2 id="madinah-ziyarat-sites" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              What are the Madinah Ziyarat sites?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Madinah Al-Munawwarah is home to some of the most sacred sites in Islam. A private Taxi Bhai
              Ziyarat tour covers:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Masjid an-Nabawi",
                  desc: "The Prophet's Mosque — the second holiest site in Islam. Built by the Prophet Muhammad (PBUH) upon his arrival in Madinah, it contains his blessed tomb. Your driver will take you to the mosque for your visit.",
                },
                {
                  name: "Al-Baqi Cemetery (Jannatul Baqi)",
                  desc: "The historic graveyard directly east of Masjid an-Nabawi. It contains the graves of many Companions and members of the Prophet's family, including Hazrat Uthman (RA), Hazrat Fatima (RA), and Hazrat Aisha (RA).",
                },
                {
                  name: "Masjid Quba",
                  desc: "The first mosque ever constructed in Islamic history, built by the Prophet upon his arrival in Madinah. Praying two rak'ahs here is said to carry the reward equivalent to performing Umrah.",
                },
                {
                  name: "Masjid al-Qiblatayn",
                  desc: "The Mosque of the Two Qiblahs — where, during a prayer, the direction of Qibla was changed from Jerusalem to Makkah by divine revelation. Historically unique in Islam.",
                },
                {
                  name: "Uhud Mountain & Shuhada al-Uhud",
                  desc: "The site of the Battle of Uhud (625 CE). The graves of the 70 martyrs — including Hamza ibn Abdul Muttalib (RA), the Prophet's uncle — are here. The mountain itself is visible from much of Madinah.",
                },
                {
                  name: "Masjid al-Ghamama",
                  desc: "One of the oldest mosques in Madinah, built on the site where the Prophet is believed to have offered the Eid prayer and made du'a for rain (Salat al-Istisqa). A short walk from Masjid an-Nabawi.",
                },
              ].map((site) => (
                <div key={site.name} className="bg-white border border-sand rounded-2xl p-5">
                  <div className="flex items-start gap-2 mb-2">
                    <Star size={14} className="text-gold-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <p className="font-semibold text-brand-950 text-sm">{site.name}</p>
                  </div>
                  <p className="text-brand-700/75 text-sm leading-relaxed">{site.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Day trips */}
          <section aria-labelledby="day-trips">
            <h2 id="day-trips" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              What day trips are available from Makkah and Madinah?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Beyond the city Ziyarat tours, Taxi Bhai offers two popular day trips to destinations of
              deep Islamic and historical significance:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white border border-sand rounded-2xl p-6">
                <p className="font-display font-bold text-brand-950 text-lg mb-1">Taif Day Trip</p>
                <p className="text-brand-500 text-xs mb-3">From Makkah · ~180 km round trip · from SAR 450</p>
                <p className="text-brand-700/80 text-sm leading-relaxed mb-3">
                  Taif — the City of Roses — sits 1,800 metres above sea level in the Hejaz mountains,
                  just 90 km from Makkah. Famous for its cool climate, rose gardens, and honey markets,
                  Taif is also home to important Islamic sites including Masjid Abdullah ibn Abbas and
                  Masjid Addas. The scenic mountain road (Al-Hada highway) is itself a highlight.
                </p>
                <ul className="space-y-1.5 text-sm text-brand-700">
                  <li className="flex items-center gap-2"><Check size={13} aria-hidden="true" className="text-brand-700 shrink-0" /> Masjid Abdullah ibn Abbas (cousin of the Prophet)</li>
                  <li className="flex items-center gap-2"><Check size={13} aria-hidden="true" className="text-brand-700 shrink-0" /> Al-Hada mountain scenic route</li>
                  <li className="flex items-center gap-2"><Check size={13} aria-hidden="true" className="text-brand-700 shrink-0" /> Rose and honey markets</li>
                  <li className="flex items-center gap-2"><Check size={13} aria-hidden="true" className="text-brand-700 shrink-0" /> Return to Makkah same day</li>
                </ul>
              </div>
              <div className="bg-white border border-sand rounded-2xl p-6">
                <p className="font-display font-bold text-brand-950 text-lg mb-1">Badr Day Trip</p>
                <p className="text-brand-500 text-xs mb-3">From Madinah · ~150 km one way · from SAR 400</p>
                <p className="text-brand-700/80 text-sm leading-relaxed mb-3">
                  Badr is the site of Islam's first major military victory — the Battle of Badr (624 CE),
                  in which the early Muslim community, vastly outnumbered, defeated the Quraysh army. The
                  journey from Madinah takes approximately 2.5 to 3 hours one way through desert landscape.
                  The site is historically and spiritually profound for all Muslims.
                </p>
                <ul className="space-y-1.5 text-sm text-brand-700">
                  <li className="flex items-center gap-2"><Check size={13} aria-hidden="true" className="text-brand-700 shrink-0" /> Battlefield of Badr (site of the first great victory)</li>
                  <li className="flex items-center gap-2"><Check size={13} aria-hidden="true" className="text-brand-700 shrink-0" /> Shuhada al-Badr (graves of the Badr martyrs)</li>
                  <li className="flex items-center gap-2"><Check size={13} aria-hidden="true" className="text-brand-700 shrink-0" /> Mosque at the battle site</li>
                  <li className="flex items-center gap-2"><Check size={13} aria-hidden="true" className="text-brand-700 shrink-0" /> Return to Madinah included</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 — Pricing */}
          <section aria-labelledby="ziyarat-pricing">
            <h2 id="ziyarat-pricing" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              How much do Ziyarat tours cost?
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-5">
              Fixed fares in SAR — the price shown is for the whole vehicle, not per person.
              See the{" "}
              <Link href="/pricing" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
                full pricing page
              </Link>{" "}
              for a complete breakdown.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-sand">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-brand-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold min-w-[200px]">Tour</th>
                    <th className="text-left px-3 py-3 font-semibold whitespace-nowrap">Duration</th>
                    {vehicleColumns.map((v) => (
                      <th key={v.id} className="text-right px-3 py-3 font-semibold whitespace-nowrap">{v.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ziyaratRoutes.map((route, i) => {
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
            <p className="text-brand-500 text-xs mt-2">
              Madinah → Badr: SAR 400+ (sedan). Call or WhatsApp for a custom quote on this route.
            </p>
          </section>

          {/* Internal links */}
          <section aria-labelledby="related-services">
            <h2 id="related-services" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-4">
              Plan your complete Umrah journey
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/services/airport-transfers", label: "Airport Transfers", sub: "JED and MED — from SAR 150" },
                { href: "/services/intercity-transfers", label: "Intercity Transfers", sub: "Makkah ↔ Madinah from SAR 450" },
                { href: "/fleet", label: "Our Vehicle Fleet", sub: "Sedan, Staria, GMC, Hiace, Coaster, Bus" },
                { href: "/pricing", label: "Full Pricing Page", sub: "All routes, all vehicles — fixed SAR fares" },
                { href: "/faq", label: "Frequently Asked Questions", sub: "Answers to common pilgrim queries" },
                { href: "/book-ride", label: "Book Your Ziyarat Tour", sub: "WhatsApp booking, confirmed in minutes" },
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

      <PageFAQ faqs={faqs} heading="Umrah & Ziyarat transport — common questions" />
      <CtaBanner />
    </>
  );
}
