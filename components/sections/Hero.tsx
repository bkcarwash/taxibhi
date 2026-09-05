"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Phone, ArrowRight, CheckCircle2, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const trustPills = [
  "5.0 ★ Google Reviews",
  "24/7 Available",
  "100% Private",
  "Fixed Fares",
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-x-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Full-bleed background: Makkah Clock Tower at night ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/makkah-clock-tower-night.webp"
          alt="Royal Clock Tower (Abraj Al-Bait) illuminated at night in Makkah near Masjid al-Haram"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-[center_15%]"
        />
        {/* Layered brand overlay — heavier on left for text, lighter on right for photo drama */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(105deg, rgba(2,44,34,0.93) 0%, rgba(6,78,59,0.88) 40%, rgba(6,78,59,0.60) 65%, rgba(6,78,59,0.25) 100%)",
          }}
        />
        {/* Bottom fade for smooth section transition */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          aria-hidden="true"
          style={{ background: "linear-gradient(to bottom, transparent, #fffbf5)" }}
        />
      </div>

      {/* ── Spacer: matches fixed header height so content is never behind it ── */}
      <div className="h-16 lg:h-[4.5rem] shrink-0 relative z-10" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex items-center w-full py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-10 lg:gap-8 items-center">

          {/* Left: text & CTAs */}
          <div>
            {/* Category pill */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" aria-hidden="true" />
              Makkah · Madinah · Jeddah · 24/7
            </motion.div>

            {/* H1 */}
            <motion.h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.65] mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-gold-400 text-brand-950 px-3 py-0.5 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                Trusted Umrah
                <br />
                Taxi Service
                <br />
                in Saudi Arabia
              </span>
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              className="text-white/80 text-lg max-w-xl mb-7 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Private airport transfers, hotel-to-hotel routes &amp; Ziyarah
              tours across Makkah, Madinah and Jeddah — with experienced drivers,
              fixed fares, and no shared passengers.
            </motion.p>

            {/* Trust pills */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {trustPills.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  <CheckCircle2 size={11} className="text-gold-400" aria-hidden="true" />
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Rating badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-white/10 border border-gold-400/40 backdrop-blur-sm rounded-2xl px-4 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              aria-label="5.0 out of 5 stars on Google Reviews"
            >
              <div className="flex" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold-400 fill-gold-400" />
                ))}
              </div>
              <div>
                <span className="font-bold text-white text-base">5.0</span>
                <span className="text-white/60 text-sm ml-1.5">· Google Reviews</span>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20a%20transfer."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe59] active:bg-[#15a84d] text-white font-bold px-6 py-3.5 rounded-full transition-all duration-200 active:scale-[0.97] shadow-lg shadow-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                aria-label="Book Taxi Bhai on WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.117 1.533 5.849L.072 23.99l6.328-1.434A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.68-.513-5.214-1.41l-.374-.216-3.757.852.882-3.653-.24-.388A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Book on WhatsApp
              </a>
              <Link
                href="#book"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
              >
                <CalendarCheck size={16} aria-hidden="true" />
                Book a Transfer
              </Link>
            </motion.div>

            {/* Phone numbers */}
            <motion.div
              className="flex flex-col sm:flex-row gap-2 sm:gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              {[
                { country: "Saudi", num: "+966 57 306 7785", tel: "+966573067785" },
                { country: "UK", num: "+44 7413 467638", tel: "+447413467638" },
                { country: "PK", num: "+92 371 2300606", tel: "+923712300606" },
              ].map((p) => (
                <a
                  key={p.num}
                  href={`tel:${p.tel}`}
                  className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded-sm"
                  aria-label={`Call Taxi Bhai ${p.country} number: ${p.num}`}
                >
                  <Phone size={12} className="text-gold-400 shrink-0" aria-hidden="true" />
                  <span className="text-white/40 text-xs">{p.country}</span>
                  <span className="font-medium">{p.num}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Staria van at mosque — real vehicle photo */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main vehicle image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/hero/staria-mosque-mountains.webp"
                    alt="Taxi Bhai Hyundai Staria 7-seater van at a Makkah mosque with mountains — private Umrah transfer"
                    fill
                    priority
                    quality={88}
                    sizes="(max-width: 1280px) 460px, 460px"
                    className="object-cover"
                  />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" aria-hidden="true" />
                </div>
                {/* Caption bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-brand-950/80 backdrop-blur-sm px-5 py-3.5 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">Hyundai Staria</p>
                    <p className="text-brand-300 text-xs">7-seater · Most popular</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gold-400 font-bold text-lg">SAR 350</p>
                    <p className="text-brand-400 text-xs">Jeddah → Makkah</p>
                  </div>
                </div>
              </div>

              {/* Floating badge: 24/7 */}
              <div
                className="absolute -top-4 -right-4 bg-gold-500 text-brand-950 rounded-2xl px-4 py-2.5 shadow-lg"
                aria-hidden="true"
              >
                <p className="font-display font-bold text-lg leading-none">24/7</p>
                <p className="text-xs font-semibold">Available</p>
              </div>

              {/* Floating badge: fleet count */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-4 py-3 shadow-xl border border-sand"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                aria-hidden="true"
              >
                <p className="font-display font-bold text-2xl text-brand-900">6</p>
                <p className="text-brand-500 text-xs font-medium">Vehicle types</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}
