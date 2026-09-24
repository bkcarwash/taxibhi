import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";
import {
  generateArticleJsonLd,
  generateBreadcrumbJsonLd,
  generatePageFAQJsonLd,
} from "@/lib/schema/jsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";

const SITE_URL = "https://www.taxibhai.com";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.lastModified,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;

  const articleLd = generateArticleJsonLd({
    title: post.title,
    description: post.excerpt,
    url,
    publishDate: post.publishDate,
    lastModified: post.lastModified,
    category: post.category,
  });
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.category, url: `${SITE_URL}/blog` },
  ]);
  const faqLd =
    post.faqs.length > 0 ? generatePageFAQJsonLd(post.faqs, url) : null;

  const relatedPosts = post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is (typeof blogPosts)[0] => p !== undefined);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-1.5 text-brand-400 text-xs mb-4"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} aria-hidden="true" />
            <Link href="/blog" className="hover:text-gold-400 transition-colors">
              Blog
            </Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-brand-300 truncate max-w-[180px]">
              {post.category}
            </span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 bg-gold-500/10 border border-gold-500/30 rounded-full px-3 py-1">
              <Tag size={11} aria-hidden="true" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-brand-400">
              <Clock size={11} aria-hidden="true" />
              {post.readMinutes} min read
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            {post.h1}
          </h1>
          <p className="answer-block text-brand-300 text-lg leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
          <p className="mt-4 text-brand-500 text-xs">
            Published{" "}
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            {" · "}Updated{" "}
            <time dateTime={post.lastModified}>
              {new Date(post.lastModified).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
        </div>
      </div>

      {/* Body */}
      <article className="py-16 lg:py-20 bg-parchment">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sections */}
          <div className="space-y-10">
            {post.sections.map((section, i) => (
              <div
                key={i}
                className={
                  section.isAnswerBlock
                    ? "bg-brand-50 border-l-4 border-brand-700 rounded-r-2xl px-6 py-5"
                    : ""
                }
              >
                {section.heading && (
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-900 mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-brand-700 leading-relaxed mb-3 last:mb-0">
                    {p}
                  </p>
                ))}
                {section.list && section.list.length > 0 && (
                  <ul className="mt-3 space-y-2.5">
                    {section.list.map((item, k) => (
                      <li
                        key={k}
                        className="flex items-start gap-2.5 text-brand-700 leading-relaxed"
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Related page links */}
          {post.relatedPageLinks.length > 0 && (
            <div className="mt-12 border-t border-sand pt-10">
              <h2 className="font-display text-lg font-bold text-brand-900 mb-4">
                Related pages
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {post.relatedPageLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between gap-2 bg-white border border-sand hover:border-brand-300 rounded-xl px-4 py-3 text-sm font-semibold text-brand-800 hover:text-brand-600 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      size={14}
                      className="text-brand-400 shrink-0"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {post.faqs.length > 0 && (
            <div className="mt-12 border-t border-sand pt-10">
              <h2 className="font-display text-xl font-bold text-brand-900 mb-6">
                Frequently asked questions
              </h2>
              <div className="space-y-5">
                {post.faqs.map((faq, i) => (
                  <article
                    key={i}
                    className="bg-white border border-sand rounded-2xl p-5 sm:p-6"
                  >
                    <h3 className="faq-question font-display text-base sm:text-lg font-bold text-brand-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="faq-answer text-brand-600 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 border-t border-sand pt-10">
              <h2 className="font-display text-xl font-bold text-brand-900 mb-6">
                More guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="bg-white border border-sand hover:border-brand-300 rounded-2xl p-4 transition-colors group block"
                  >
                    <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">
                      {related.category}
                    </span>
                    <p className="mt-1.5 text-sm font-bold text-brand-900 leading-snug group-hover:text-brand-700 transition-colors line-clamp-3">
                      {related.h1}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs text-brand-500">
                      <Clock size={11} aria-hidden="true" />
                      {related.readMinutes} min
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
