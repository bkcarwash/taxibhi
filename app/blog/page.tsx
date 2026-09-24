import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";
import { generateWebPageJsonLd, generateBreadcrumbJsonLd } from "@/lib/schema/jsonLd";

export const metadata: Metadata = {
  title: "Umrah Taxi Guides & Travel Tips — Taxi Bhai Blog",
  description:
    "Expert guides for Umrah pilgrims — taxi fares, airport transfers, Makkah to Madinah routes, Ziyarat tours, and booking tips across Saudi Arabia. Updated 2026.",
  alternates: { canonical: "https://www.taxibhai.com/blog" },
  openGraph: {
    title: "Umrah Taxi Guides & Travel Tips — Taxi Bhai Blog",
    description:
      "Practical guides on Umrah taxi prices, airport transfers, route comparisons, and Ziyarat tours in Saudi Arabia.",
    url: "https://www.taxibhai.com/blog",
  },
};

export default function BlogPage() {
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Blog", url: "https://www.taxibhai.com/blog" },
  ]);
  const webPageLd = generateWebPageJsonLd({
    name: "Umrah Taxi Guides & Travel Tips — Taxi Bhai Blog",
    description:
      "Expert guides for Umrah pilgrims — taxi fares, airport transfers, Makkah to Madinah routes, Ziyarat tours, and booking tips.",
    url: "https://www.taxibhai.com/blog",
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Blog", url: "https://www.taxibhai.com/blog" },
    ],
    speakableSelectors: ["h1", ".post-excerpt"],
  });

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

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-brand-400 text-xs mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-brand-300">Blog</span>
          </nav>
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Travel Guides
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Umrah taxi guides &amp; travel tips
          </h1>
          <p className="text-brand-300 text-lg max-w-2xl leading-relaxed">
            Practical guides for Umrah pilgrims — taxi fares, route comparisons, booking advice,
            and Ziyarat tours across Makkah, Madinah, and Jeddah.
          </p>
        </div>
      </div>

      {/* Post grid */}
      <section className="py-16 lg:py-24 bg-parchment" aria-labelledby="blog-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="blog-heading" className="sr-only">All guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-sand rounded-2xl overflow-hidden hover:border-brand-300 transition-colors group flex flex-col"
              >
                <div className="px-5 pt-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-3 py-1">
                    <Tag size={11} aria-hidden="true" />
                    {post.category}
                  </span>
                </div>
                <div className="px-5 pt-4 pb-3 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold text-brand-900 mb-3 leading-snug group-hover:text-brand-700 transition-colors">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-sm"
                    >
                      {post.h1}
                    </Link>
                  </h3>
                  <p className="post-excerpt text-brand-600 text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-brand-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock size={11} aria-hidden="true" />
                      {post.readMinutes} min read
                    </span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.publishDate}>
                      {new Date(post.publishDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800 hover:text-brand-600 transition-colors"
                    aria-label={`Read: ${post.h1}`}
                  >
                    Read guide
                    <ChevronRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Internal link strip */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/pricing"
              className="flex items-center justify-between gap-2 bg-white border border-sand hover:border-brand-300 rounded-xl px-4 py-3 text-sm text-brand-800 font-semibold transition-colors"
            >
              <span>All route fares</span>
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
    </>
  );
}
