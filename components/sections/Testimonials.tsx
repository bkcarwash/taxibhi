"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials, aggregateRating } from "@/lib/data/testimonials";

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {[...Array(count)].map((_, i) => (
        <Star
          key={i}
          size={13}
          className="text-gold-500 fill-gold-500"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      className="py-20 lg:py-28 bg-parchment"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Verified Google Reviews
          </p>
          <h2
            id="reviews-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-950 mb-4"
          >
            Trusted by pilgrims worldwide
          </h2>
          <div
            className="inline-flex items-center gap-3 bg-gold-50 border border-gold-200 rounded-full px-5 py-2"
            aria-label="5.0 average Google rating from 8 reviews"
          >
            <StarRow />
            <span className="font-bold text-brand-900 text-lg">
              {aggregateRating.ratingValue.toFixed(1)}
            </span>
            <span className="text-brand-600 text-sm">
              from {aggregateRating.reviewCount} Google reviews
            </span>
          </div>
        </motion.div>

        {/* Pull-quote feature — first review, large treatment with atmospheric background */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-brand-900 text-white rounded-3xl overflow-hidden mb-6"
          aria-label={`Featured review from ${testimonials[0].name}`}
        >
          {/* Atmospheric Nabawi courtyard image — right side, desktop */}
          <div
            className="absolute right-0 top-0 bottom-0 w-2/5 hidden lg:block"
            aria-hidden="true"
          >
            <Image
              src="/images/ziyarat/madinah-nabawi-umbrella-courtyard.webp"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0px, 420px"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #022c22 0%, rgba(2,44,34,0.9) 25%, rgba(2,44,34,0.4) 70%, transparent 100%)",
              }}
            />
          </div>

          {/* Decorative radial glow */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5"
            aria-hidden="true"
            style={{
              background: "radial-gradient(circle, #d97706 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
          />

          {/* Review content */}
          <div className="relative p-8 sm:p-10 lg:max-w-[62%]">
            <Quote
              className="w-10 h-10 text-gold-400/40 mb-4"
              aria-hidden="true"
            />
            <blockquote>
              <p className="font-display text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed mb-6 max-w-2xl">
                &ldquo;{testimonials[0].body}&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold font-display text-base"
                  aria-hidden="true"
                >
                  {testimonials[0].name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[0].name}
                  </div>
                  <div className="text-brand-400 text-sm">
                    {testimonials[0].label} · {testimonials[0].timeAgo} ·{" "}
                    {testimonials[0].route}
                  </div>
                </div>
                <div className="ml-auto">
                  <StarRow />
                </div>
              </footer>
            </blockquote>
          </div>
        </motion.div>

        {/* Grid of remaining reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(1).map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`bg-white border border-sand rounded-2xl p-5 flex flex-col gap-3 ${
                i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              aria-label={`Review by ${t.name}`}
            >
              <div className="flex items-center justify-between">
                <StarRow />
                <span className="text-brand-400 text-xs">{t.timeAgo}</span>
              </div>
              <blockquote>
                <p className="text-brand-800 text-sm leading-relaxed">
                  &ldquo;{t.body}&rdquo;
                </p>
              </blockquote>
              <div className="flex items-center gap-2.5 mt-auto pt-2 border-t border-sand">
                <div
                  className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-sm"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-brand-500">{t.route}</div>
                </div>
                <div className="ml-auto">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    aria-label="Google"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
