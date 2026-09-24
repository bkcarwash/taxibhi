import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/lib/data/faqs";
import { generateFAQPageJsonLd, generateBreadcrumbJsonLd, generateWebPageJsonLd } from "@/lib/schema/jsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Umrah Taxi Service | Taxi Bhai",
  description:
    "Answers to common questions about Taxi Bhai: How much is a taxi from Jeddah Airport to Makkah? How do I book? What vehicles are available? Prices, Ziyarat, group travel, and more.",
  alternates: { canonical: "https://www.taxibhai.com/faq" },
  openGraph: {
    title: "Umrah Taxi FAQ — Prices, Booking & Services | Taxi Bhai",
    description:
      "Common questions about Umrah taxis in Saudi Arabia: fares, routes, booking method, vehicle types, Ziyarat tours, and more. Answered by Taxi Bhai.",
    url: "https://www.taxibhai.com/faq",
  },
};

export default function FaqPage() {
  const faqLd = generateFAQPageJsonLd();
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "FAQ", url: "https://www.taxibhai.com/faq" },
  ]);
  const webPageLd = generateWebPageJsonLd({
    type: "FAQPage",
    name: "Frequently Asked Questions — Taxi Bhai Umrah Taxi Service",
    description:
      "Answers to common questions about Umrah taxi services: prices, routes, booking, vehicles, Ziyarat tours.",
    url: "https://www.taxibhai.com/faq",
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "FAQ", url: "https://www.taxibhai.com/faq" },
    ],
    speakableSelectors: ["h1", ".faq-question", ".faq-answer"],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-brand-400 text-xs mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-brand-300">FAQ</span>
          </nav>
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Common Questions
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Frequently asked questions about Umrah taxi services
          </h1>
          <p className="text-brand-300 text-lg max-w-2xl leading-relaxed">
            Everything you need to know about booking a private taxi in Saudi Arabia —
            prices, routes, vehicles, and how to book.
          </p>
        </div>
      </div>

      {/* FAQ list */}
      <section className="py-16 lg:py-24 bg-parchment" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="sr-only">All questions</h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Link
                key={faq.id}
                href={`/faq/${faq.id}`}
                className="group flex items-start justify-between gap-4 bg-white border border-sand hover:border-brand-300 rounded-2xl px-6 py-5 transition-colors"
              >
                <div className="flex items-start gap-4 min-w-0">
                  <span
                    className="shrink-0 w-7 h-7 rounded-full bg-brand-800 text-white text-xs font-bold flex items-center justify-center mt-0.5"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="faq-question font-display text-base sm:text-lg font-bold text-brand-900 group-hover:text-brand-700 transition-colors leading-snug mb-1.5">
                      {faq.question}
                    </p>
                    <p className="faq-answer text-brand-500 text-sm leading-relaxed line-clamp-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className="text-brand-300 group-hover:text-brand-600 shrink-0 mt-1 transition-colors"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 bg-brand-900 rounded-3xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Still have a question?
            </h2>
            <p className="text-brand-300 mb-6 max-w-md mx-auto">
              Message us on WhatsApp — we typically reply within minutes, 24 hours a day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%20have%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp us now
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                View all pricing
              </Link>
            </div>
          </div>

          {/* Internal links */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/pricing"
              className="flex items-center justify-between gap-2 bg-white border border-sand hover:border-brand-300 rounded-xl px-4 py-3 text-sm text-brand-800 font-semibold transition-colors"
            >
              <span>All route prices</span>
              <ChevronRight size={14} className="text-brand-400" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="flex items-center justify-between gap-2 bg-white border border-sand hover:border-brand-300 rounded-xl px-4 py-3 text-sm text-brand-800 font-semibold transition-colors"
            >
              <span>Our services</span>
              <ChevronRight size={14} className="text-brand-400" aria-hidden="true" />
            </Link>
            <Link
              href="/book-ride"
              className="flex items-center justify-between gap-2 bg-brand-800 hover:bg-brand-700 rounded-xl px-4 py-3 text-sm text-white font-semibold transition-colors"
            >
              <span>Book a taxi now</span>
              <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
