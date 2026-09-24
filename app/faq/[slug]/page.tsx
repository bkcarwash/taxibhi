import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MessageCircle } from "lucide-react";
import { faqs } from "@/lib/data/faqs";
import { generateBreadcrumbJsonLd, generatePageFAQJsonLd, generateWebPageJsonLd } from "@/lib/schema/jsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";

const SITE_URL = "https://www.taxibhai.com";

export async function generateStaticParams() {
  return faqs.map((faq) => ({ slug: faq.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const faq = faqs.find((f) => f.id === slug);
  if (!faq) return {};
  const url = `${SITE_URL}/faq/${faq.id}`;
  const desc = faq.answer.length > 155 ? faq.answer.slice(0, 152) + "…" : faq.answer;
  return {
    title: `${faq.question} | Taxi Bhai`,
    description: desc,
    alternates: { canonical: url },
    openGraph: { title: faq.question, description: desc, url },
  };
}

export default async function FaqItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const faq = faqs.find((f) => f.id === slug);
  if (!faq) notFound();

  const url = `${SITE_URL}/faq/${faq.id}`;

  const faqLd = generatePageFAQJsonLd([{ question: faq.question, answer: faq.answer }], url);
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "FAQ", url: `${SITE_URL}/faq` },
    { name: faq.question, url },
  ]);
  const webPageLd = generateWebPageJsonLd({
    type: "FAQPage",
    name: `${faq.question} | Taxi Bhai`,
    description: faq.answer.slice(0, 155),
    url,
    breadcrumb: [
      { name: "Home", url: SITE_URL },
      { name: "FAQ", url: `${SITE_URL}/faq` },
      { name: faq.question, url },
    ],
    speakableSelectors: ["h1", ".faq-answer"],
  });

  const related = faqs.filter((f) => f.id !== faq.id).slice(0, 5);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-brand-400 text-xs mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <Link href="/faq" className="hover:text-gold-400 transition-colors">FAQ</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-brand-300">Answer</span>
          </nav>
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Frequently Asked Question
          </p>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
            {faq.question}
          </h1>
        </div>
      </div>

      {/* Answer */}
      <section className="py-14 lg:py-20 bg-parchment">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Answer block */}
          <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 mb-10">
            <p className="faq-answer text-brand-700 leading-relaxed text-base sm:text-lg">
              {faq.answer}
            </p>
          </div>

          {/* CTA */}
          <div className="bg-brand-900 rounded-2xl p-6 sm:p-8 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold mb-1">Ready to book?</p>
              <p className="text-brand-300 text-sm">Fixed fares, private vehicles, 24/7.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20a%20transfer."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
              >
                <MessageCircle size={15} aria-hidden="true" />
                WhatsApp
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
              >
                View fares
              </Link>
            </div>
          </div>

          {/* More questions */}
          <h2 className="font-display text-xl font-bold text-brand-900 mb-5">More questions</h2>
          <div className="space-y-2.5">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/faq/${r.id}`}
                className="flex items-center justify-between gap-3 bg-white border border-sand hover:border-brand-300 rounded-xl px-4 py-3.5 text-sm font-semibold text-brand-800 hover:text-brand-700 transition-colors"
              >
                <span>{r.question}</span>
                <ChevronRight size={14} className="text-brand-400 shrink-0" aria-hidden="true" />
              </Link>
            ))}
            <Link
              href="/faq"
              className="flex items-center justify-between gap-3 bg-brand-800 hover:bg-brand-700 rounded-xl px-4 py-3.5 text-sm font-semibold text-white transition-colors"
            >
              <span>View all {faqs.length} questions</span>
              <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

        </div>
      </section>

      <CtaBanner />
    </>
  );
}
