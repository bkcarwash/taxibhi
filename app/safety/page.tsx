import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Clock, Car, MapPin, Lock, PhoneCall, ChevronRight } from "lucide-react";
import { generateBreadcrumbJsonLd, generateWebPageJsonLd, generatePageFAQJsonLd } from "@/lib/schema/jsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Safety & Service Standards — Taxi Bhai Private Umrah Taxi",
  description:
    "How Taxi Bhai keeps your transfer safe: private-only vehicles, fixed fares, experienced drivers on Umrah routes, real-time flight tracking, and 24/7 availability.",
  alternates: { canonical: "https://www.taxibhai.com/safety" },
  openGraph: {
    title: "Safety & Service Standards — Taxi Bhai",
    description:
      "Private-only vehicles, fixed fares, experienced Umrah drivers, real-time flight tracking, and 24/7 availability.",
    url: "https://www.taxibhai.com/safety",
  },
};

const standards = [
  {
    icon: <Car className="w-6 h-6" aria-hidden="true" />,
    title: "Private vehicle, always",
    body: "Your vehicle is never shared with strangers. What you book is what you get — your group, your driver, your route.",
  },
  {
    icon: <Lock className="w-6 h-6" aria-hidden="true" />,
    title: "Fixed fares, quoted upfront",
    body: "Your fare is agreed before travel and confirmed in writing on WhatsApp. There are no meters, no surge pricing, and no surprises.",
  },
  {
    icon: <MapPin className="w-6 h-6" aria-hidden="true" />,
    title: "Experienced on Umrah routes",
    body: "Our drivers are experienced on all major Umrah transfer routes — from King Abdulaziz Airport to Makkah, Makkah to Madinah, and all Ziyarat stops.",
  },
  {
    icon: <Shield className="w-6 h-6" aria-hidden="true" />,
    title: "Real-time flight monitoring",
    body: "For airport transfers, we track your flight number. If your plane is delayed, your driver already knows and adjusts. You never need to call.",
  },
  {
    icon: <Clock className="w-6 h-6" aria-hidden="true" />,
    title: "24/7 availability",
    body: "Transfers run at all hours. Hajj season, Ramadan, Friday nights, 3 a.m. arrivals — we operate continuously because pilgrim travel does not follow a 9-to-5.",
  },
  {
    icon: <PhoneCall className="w-6 h-6" aria-hidden="true" />,
    title: "Direct driver contact",
    body: "The night before every trip, you receive your driver's name and WhatsApp number. You can reach them directly at any point.",
  },
];

const faqs = [
  {
    question: "Are Taxi Bhai vehicles insured?",
    answer:
      "Yes — all vehicles operating under Taxi Bhai are comprehensively insured. Saudi law requires all commercial vehicles to carry valid insurance, and all our vehicles comply with this requirement.",
  },
  {
    question: "How do I know the quoted fare is what I will pay?",
    answer:
      "The fare is confirmed to you in writing via WhatsApp before travel. It does not change. There is no meter in the vehicle and no additional charges except those you specifically request (such as a child seat or a longer waiting time at a Ziyarat site).",
  },
  {
    question: "What happens if I need to contact my driver on the day?",
    answer:
      "You receive your driver's name and personal WhatsApp number the evening before your trip. You can message or call them directly. The Taxi Bhai office is also available on WhatsApp at +966 57 306 7785.",
  },
];

export default function SafetyPage() {
  const webPageLd = generateWebPageJsonLd({
    type: "WebPage",
    name: "Safety & Service Standards — Taxi Bhai Private Umrah Taxi",
    description:
      "How Taxi Bhai keeps your transfer safe: private-only vehicles, fixed fares, experienced drivers on Umrah routes, real-time flight tracking, and 24/7 availability.",
    url: "https://www.taxibhai.com/safety",
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Safety", url: "https://www.taxibhai.com/safety" },
    ],
  });

  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Safety", url: "https://www.taxibhai.com/safety" },
  ]);

  const faqLd = generatePageFAQJsonLd(faqs, "https://www.taxibhai.com/safety");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-brand-400 text-xs mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-brand-300">Safety</span>
          </nav>
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Safety &amp; Standards
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            How we keep your journey safe
          </h1>
          <p className="text-brand-300 text-lg max-w-2xl leading-relaxed">
            From the moment you book to the moment you arrive — every step of a Taxi Bhai
            transfer is designed around your safety, comfort, and peace of mind.
          </p>
        </div>
      </div>

      {/* Standards grid */}
      <section className="py-16 lg:py-24 bg-parchment" aria-labelledby="standards-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="standards-heading" className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-10 text-center">
            Our service standards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {standards.map((s) => (
              <div key={s.title} className="bg-white border border-sand rounded-2xl p-6">
                <div className="text-brand-700 mb-4">{s.icon}</div>
                <h3 className="font-display text-lg font-bold text-brand-900 mb-2">{s.title}</h3>
                <p className="text-brand-700/80 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Private only explainer */}
          <div className="bg-white border border-sand rounded-2xl p-8 mb-16">
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-4">
              What &ldquo;private only&rdquo; means
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-4">
              When we say private, we mean it. There are no shared shuttles, no pooled
              passengers, and no strangers in your vehicle. When you book a transfer
              with Taxi Bhai, your family or group is the only party in that vehicle.
            </p>
            <p className="text-brand-700/80 leading-relaxed mb-4">
              Your driver goes directly to your destination. There are no detours to
              pick up or drop off others, and no waiting while other passengers arrange
              their luggage. The route, the timing, and the stops are all agreed
              exclusively with you.
            </p>
            <p className="text-brand-700/80 leading-relaxed">
              For pilgrims travelling with elderly parents, young children, or
              individuals with mobility needs, this matters. You can travel at your
              own pace, with your own people, in a vehicle that belongs to your booking.
            </p>
          </div>

          {/* FAQs */}
          <h2 className="font-display text-2xl font-bold text-brand-950 mb-6">
            Safety questions
          </h2>
          <div className="space-y-5 mb-12">
            {faqs.map((faq, i) => (
              <article key={i} className="bg-white border border-sand rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-brand-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-brand-700/80 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>

          {/* Internal links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/reviews"
              className="flex items-center justify-between gap-2 bg-white border border-sand hover:border-brand-300 rounded-xl px-4 py-3 text-sm text-brand-800 font-semibold transition-colors"
            >
              <span>See customer reviews</span>
              <ChevronRight size={14} className="text-brand-400" aria-hidden="true" />
            </Link>
            <Link
              href="/fleet"
              className="flex items-center justify-between gap-2 bg-white border border-sand hover:border-brand-300 rounded-xl px-4 py-3 text-sm text-brand-800 font-semibold transition-colors"
            >
              <span>Our fleet</span>
              <ChevronRight size={14} className="text-brand-400" aria-hidden="true" />
            </Link>
            <Link
              href="/book-ride"
              className="flex items-center justify-between gap-2 bg-brand-800 hover:bg-brand-700 rounded-xl px-4 py-3 text-sm text-white font-semibold transition-colors"
            >
              <span>Book a transfer</span>
              <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
