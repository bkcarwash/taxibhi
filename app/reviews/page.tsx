import type { Metadata } from "next";
import Link from "next/link";
import { Star, ChevronRight, Quote } from "lucide-react";
import { testimonials, aggregateRating } from "@/lib/data/testimonials";
import { generateBreadcrumbJsonLd, generateWebPageJsonLd } from "@/lib/schema/jsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Customer Reviews — Taxi Bhai Umrah Taxi Service | 5.0 ★ Google Rating",
  description:
    "Read real customer reviews of Taxi Bhai — 5.0 stars on Google. Trusted by Umrah pilgrims for private taxi transfers in Makkah, Madinah, and Jeddah.",
  alternates: { canonical: "https://www.taxibhai.com/reviews" },
  openGraph: {
    title: "Customer Reviews — Taxi Bhai | 5.0 ★ Google Rating",
    description:
      "Real customer reviews of Taxi Bhai's private Umrah taxi service — 5.0 stars on Google from verified pilgrims.",
    url: "https://www.taxibhai.com/reviews",
  },
};

export default function ReviewsPage() {
  const webPageLd = generateWebPageJsonLd({
    type: "WebPage",
    name: "Customer Reviews — Taxi Bhai Umrah Taxi Service | 5.0 ★ Google Rating",
    description:
      "Read real customer reviews of Taxi Bhai — 5.0 stars on Google. Trusted by Umrah pilgrims for private taxi transfers in Makkah, Madinah, and Jeddah.",
    url: "https://www.taxibhai.com/reviews",
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Reviews", url: "https://www.taxibhai.com/reviews" },
    ],
  });

  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Reviews", url: "https://www.taxibhai.com/reviews" },
  ]);

  const aggregateRatingLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.taxibhai.com/#localbusiness",
    name: "Taxi Bhai",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5.0,
      reviewCount: 8,
      bestRating: 5,
      worstRating: 1,
    },
  };

  const reviewsLd = {
    "@context": "https://schema.org",
    "@graph": testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.body,
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
        worstRating: 1,
      },
      datePublished: t.datePublished,
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "Taxi Bhai",
        "@id": "https://www.taxibhai.com/#localbusiness",
      },
    })),
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsLd) }}
      />

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-brand-400 text-xs mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-brand-300">Reviews</span>
          </nav>
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Customer Reviews
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            What our customers say
          </h1>
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} size={20} className="text-gold-400 fill-gold-400" aria-hidden="true" />
              ))}
            </div>
            <span className="text-white font-semibold text-lg">5.0</span>
            <span className="text-brand-300 text-sm">· {aggregateRating.reviewCount} Google reviews</span>
          </div>
          <p className="text-brand-300 text-lg max-w-2xl leading-relaxed">
            Every review below is from a real customer who booked with Taxi Bhai.
            We are proud to maintain a perfect 5.0-star rating on Google.
          </p>
        </div>
      </div>

      {/* Aggregate rating bar */}
      <div className="bg-white border-b border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} size={24} className="text-gold-400 fill-gold-400" aria-hidden="true" />
              ))}
            </div>
            <p className="text-brand-700 text-sm sm:text-base font-medium">
              <strong className="text-brand-900 text-xl font-bold mr-1">5.0</strong>
              out of 5 from {aggregateRating.reviewCount} reviews on Google
            </p>
          </div>
        </div>
      </div>

      {/* Reviews grid */}
      <section className="py-16 lg:py-24 bg-parchment" aria-labelledby="reviews-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="reviews-heading" className="sr-only">Customer reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="bg-white border border-sand rounded-2xl p-6"
              >
                <Quote size={32} className="text-brand-200 mb-4" aria-hidden="true" />
                <p className="text-brand-700 leading-relaxed mb-5">{t.body}</p>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-brand-900 text-sm">{t.name}</p>
                    <span className="inline-block mt-1 text-xs font-medium text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-2.5 py-0.5">
                      {t.route}
                    </span>
                    <p className="text-brand-400 text-xs mt-1">{t.timeAgo}</p>
                  </div>
                  <div className="flex items-center gap-0.5 shrink-0">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star key={n} size={14} className="text-gold-400 fill-gold-400" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Trust statement */}
          <div className="bg-brand-800 rounded-3xl p-8 text-center mb-12">
            <p className="text-white text-lg font-semibold mb-2">
              Genuine reviews, no incentives
            </p>
            <p className="text-brand-300 max-w-2xl mx-auto leading-relaxed">
              All reviews are from real customers who booked with Taxi Bhai and shared
              their experience on Google. We do not pay for reviews.
            </p>
          </div>

          {/* Internal links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/book-ride"
              className="flex items-center justify-between gap-2 bg-brand-800 hover:bg-brand-700 rounded-xl px-4 py-3 text-sm text-white font-semibold transition-colors"
            >
              <span>Book a ride</span>
              <ChevronRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/pricing"
              className="flex items-center justify-between gap-2 bg-white border border-sand hover:border-brand-300 rounded-xl px-4 py-3 text-sm text-brand-800 font-semibold transition-colors"
            >
              <span>View fares</span>
              <ChevronRight size={14} className="text-brand-400" aria-hidden="true" />
            </Link>
            <Link
              href="/faq"
              className="flex items-center justify-between gap-2 bg-white border border-sand hover:border-brand-300 rounded-xl px-4 py-3 text-sm text-brand-800 font-semibold transition-colors"
            >
              <span>Common questions</span>
              <ChevronRight size={14} className="text-brand-400" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
