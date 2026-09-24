import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, MapPin, ArrowRight } from "lucide-react";
import {
  generateBreadcrumbJsonLd,
  generateWebPageJsonLd,
  generatePageFAQJsonLd,
  generateRoutePageJsonLd,
} from "@/lib/schema/jsonLd";
import { vehicles } from "@/lib/data/vehicles";
import { getPricingRowForRoute } from "@/lib/data/pricing";
import type { VehicleId } from "@/lib/data/pricing";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageFAQ } from "@/components/ui/PageFAQ";
import type { PageFAQItem } from "@/components/ui/PageFAQ";

const ROUTE_ID = "madinah-makkah";
const PAGE_URL = "https://www.taxibhai.com/routes/madinah-to-makkah";

export const metadata: Metadata = {
  title: "Madinah to Makkah Taxi — Private Transfer from SAR 450 | Taxi Bhai",
  description:
    "Private taxi from Madinah to Makkah from SAR 450. ~420 km, 4–5 hrs via Haramain Expressway. Rest stop and water included. Choose your departure time. Book on WhatsApp: +966 57 306 7785.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Madinah to Makkah Taxi — SAR 450 | Taxi Bhai",
    description:
      "Door-to-door private taxi. Sedan SAR 450 · Staria SAR 550 · GMC SAR 1,000. Rest stop included. 24/7.",
    url: PAGE_URL,
  },
};

const faqs: PageFAQItem[] = [
  {
    question: "How much does a taxi from Madinah to Makkah cost?",
    answer:
      "A private taxi from Madinah to Makkah costs SAR 450 in a Camry/Sonata sedan, SAR 550 in a Hyundai Staria (7-seater), SAR 1,000 in a GMC Yukon XL, SAR 650 in a Toyota Hiace, SAR 1,100 in a Coaster, or SAR 1,400 in a full-size bus. All fares are fixed with no hidden charges.",
  },
  {
    question: "When do Umrah pilgrims typically travel from Madinah to Makkah?",
    answer:
      "Most Umrah itineraries follow one of two patterns: Makkah first (arriving via Jeddah Airport) then Madinah, or Madinah first then Makkah. Pilgrims on the Madinah-first itinerary travel from Madinah to Makkah after completing their time at Masjid an-Nabawi, typically to perform Umrah. This is the most commonly requested intercity route direction for those on Madinah-first packages.",
  },
  {
    question: "Is there a rest stop on the Madinah to Makkah route?",
    answer:
      "Yes — a rest stop is included, usually approximately halfway through the ~420 km journey. The driver stops at a licensed rest area for 20–30 minutes. Bottled water is provided in the vehicle throughout the trip.",
  },
  {
    question: "Can I travel from Madinah to Makkah at night?",
    answer:
      "Yes — Taxi Bhai operates 24/7. Many pilgrims prefer overnight departures from Madinah so they arrive in Makkah in the early morning, ready to perform Umrah. Simply specify your preferred departure time when booking.",
  },
  {
    question: "What is the best vehicle for a family travelling from Madinah to Makkah?",
    answer:
      "For a family of 4–7 with luggage, the Hyundai Staria (7-seater MPV) at SAR 550 is the most popular choice — it has ample boot space and comfortable individual seats. For larger families or more luggage, the Toyota Hiace (12-seater) at SAR 650 offers extra room. For VIP comfort, the GMC Yukon XL at SAR 1,000.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Routes", href: "/routes" },
  { name: "Madinah → Makkah", href: "/routes/madinah-to-makkah" },
];

const included = [
  "Hotel pickup at your Madinah hotel entrance",
  "Rest stop ~halfway through the journey",
  "Bottled water provided throughout",
  "Child seats available on request",
  "Fully private — your group only",
  "Direct drop-off to your Makkah hotel",
];

export default function MadinahToMakkahPage() {
  const pricing = getPricingRowForRoute(ROUTE_ID);
  const webPageLd = generateWebPageJsonLd({
    name: "Madinah to Makkah Taxi Transfer — Private, Door-to-Door",
    description:
      "Private taxi from Madinah to Makkah from SAR 450. ~420 km, 4–5 hrs. Rest stop included. Choose departure time. 24/7.",
    url: PAGE_URL,
    breadcrumb: breadcrumbItems.map(i => ({ name: i.name, url: i.href })),
    speakableSelectors: ["h1", ".answer-block", "h2"],
  });
  const breadcrumbLd = generateBreadcrumbJsonLd(breadcrumbItems.map(i => ({ name: i.name, url: i.href })));
  const routeLd = generateRoutePageJsonLd(ROUTE_ID, PAGE_URL);
  const faqLd = generatePageFAQJsonLd(faqs, PAGE_URL);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {routeLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(routeLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} light />
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={16} className="text-gold-400" aria-hidden="true" />
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Intercity Transfer</p>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Madinah to Makkah Taxi Transfer
          </h1>
          <p className="answer-block text-brand-200 text-lg leading-relaxed max-w-2xl mb-8">
            Private door-to-door taxi from your Madinah hotel to Makkah Al-Mukarramah from{" "}
            <strong className="text-white">SAR 450</strong>. Covers ~420 km in 4–5 hours via
            the Haramain Expressway. Rest stop and bottled water included. Depart at any
            time — 24/7.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20taxi%20from%20Madinah%20to%20Makkah."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-900 font-semibold text-sm px-5 py-3 rounded-full hover:bg-brand-50 active:scale-95 transition-colors"
            >
              Book on WhatsApp
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium text-sm px-5 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              All fare options <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-brand-800 border-b border-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-6 text-sm">
          {[
            { icon: <MapPin size={14} className="text-gold-400" aria-hidden="true" />, text: "~420 km" },
            { icon: <Clock size={14} className="text-gold-400" aria-hidden="true" />, text: "4–5 hours" },
            { icon: <span className="text-gold-400 font-bold">SAR</span>, text: "From SAR 450" },
          ].map(({ icon, text }, i) => (
            <div key={i} className="flex items-center gap-2 text-brand-200">{icon}<span>{text}</span></div>
          ))}
          <div className="flex items-center gap-2 text-brand-200"><span className="text-gold-400">✓</span><span>Rest stop · Water · Private · Flexible departure</span></div>
        </div>
      </div>

      <div className="py-16 lg:py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <section>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-2">
              Madinah to Makkah fare — all vehicles
            </h2>
            <p className="text-brand-600 mb-6 text-sm">Fixed fares — confirmed at booking, no changes on the day.</p>
            <div className="bg-white border border-sand rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-50 border-b border-sand">
                      <th className="text-left py-3 px-5 font-semibold text-brand-700">Vehicle</th>
                      <th className="text-left py-3 px-4 font-semibold text-brand-700">Passengers</th>
                      <th className="text-right py-3 px-5 font-semibold text-brand-700">Fixed Fare (SAR)</th>
                      <th className="py-3 px-4 text-right" />
                    </tr>
                  </thead>
                  <tbody>
                    {vehicles.map((v) => {
                      const price = pricing?.prices[v.id as VehicleId];
                      if (!price) return null;
                      return (
                        <tr key={v.id} className="border-b border-sand last:border-0 hover:bg-brand-50/50 transition-colors">
                          <td className="py-3.5 px-5 font-medium text-brand-900">{v.name}</td>
                          <td className="py-3.5 px-4 text-brand-600">{v.capacity}</td>
                          <td className="py-3.5 px-5 text-right font-bold text-brand-900 text-base">{price}</td>
                          <td className="py-3.5 px-4 text-right">
                            <a href={`https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20need%20a%20${encodeURIComponent(v.name)}%20from%20Madinah%20to%20Makkah.`} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-800 font-medium text-xs whitespace-nowrap">Book →</a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="bg-brand-50 border-t border-sand px-5 py-3 text-xs text-brand-500">
                Includes: fuel, driver, A/C, rest stop, bottled water, luggage loading. Cash (SAR) or bank transfer.
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950 mb-5">What's included</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white border border-sand rounded-xl p-4">
                  <Check size={16} className="text-brand-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <p className="text-brand-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950 mb-4">About the Madinah–Makkah route</h2>
            <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 space-y-4 text-brand-700/80 text-sm sm:text-base leading-relaxed">
              <p>
                The Madinah to Makkah route is the return leg of the Umrah intercity transfer and is equally important for pilgrims whose itinerary begins in Madinah. After spending time visiting Masjid an-Nabawi, Al-Baqi Cemetery, Masjid Quba, and Uhud, many pilgrims travel to Makkah to complete their Umrah rituals.
              </p>
              <p>
                The route follows the Haramain Expressway (Route 15) south from Madinah, passing through the western coastal region before entering the Makkah Province. The rest stop is typically around the Rabigh area, roughly halfway through the ~420 km journey.
              </p>
              <p>
                Before embarking on this journey, pilgrims intending to perform Umrah should enter the state of Ihram at the appropriate Miqat point. The Miqat for those coming from Madinah is Dhul Hulayfah (Abyar Ali), located just outside Madinah. Taxi Bhai drivers are aware of this requirement and can advise on timing accordingly.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-950 mb-4">Related routes & services</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "Makkah → Madinah", href: "/routes/makkah-to-madinah", note: "Return direction" },
                { label: "Madinah Airport → Hotel", href: "/routes/madinah-airport-to-madinah-hotel", note: "Airport pickup" },
                { label: "Madinah Ziyarat Tour", href: "/services/umrah-ziyarat-transport", note: "Sacred sites" },
                { label: "Intercity Transfers", href: "/services/intercity-transfers", note: "All intercity routes" },
                { label: "Locations: Madinah", href: "/locations/madinah", note: "City guide" },
                { label: "All Pricing", href: "/pricing", note: "Complete fare table" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="flex flex-col gap-0.5 bg-white border border-sand hover:border-brand-300 rounded-xl px-4 py-3.5 transition-colors">
                  <span className="text-brand-800 font-medium text-sm">{link.label}</span>
                  <span className="text-brand-400 text-xs">{link.note}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

      <PageFAQ faqs={faqs} heading="Madinah to Makkah — common questions" />
      <CtaBanner />
    </>
  );
}
