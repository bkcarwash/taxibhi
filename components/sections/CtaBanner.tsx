"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

const WaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.117 1.533 5.849L.072 23.99l6.328-1.434A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.68-.513-5.214-1.41l-.374-.216-3.757.852.882-3.653-.24-.388A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

export function CtaBanner() {
  return (
    <section
      className="py-20 lg:py-24 bg-brand-900 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative arcs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-brand-700 opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full border border-brand-700 opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Ready to travel?
          </p>
          <h2
            id="cta-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Book your Umrah taxi in minutes
          </h2>
          <p className="text-brand-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Fixed fares, private vehicles, 24/7 availability. Confirm your driver details in minutes — no payment needed upfront.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary: WhatsApp */}
            <a
              href="https://wa.me/966573067785?text=Hello%20Taxi%20Bhai%2C%20I%27d%20like%20to%20book%20a%20transfer."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe59] active:bg-[#15a84d] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 active:scale-[0.97] shadow-lg shadow-brand-950/40"
              aria-label="Book Taxi Bhai on WhatsApp"
            >
              <WaIcon />
              Book on WhatsApp
            </a>

            {/* Secondary: booking form */}
            <Link
              href="/book-ride"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 active:bg-gold-600 text-brand-950 font-bold px-8 py-4 rounded-full text-base transition-all duration-200 active:scale-[0.97] shadow-lg shadow-brand-950/20"
            >
              <CalendarCheck size={18} aria-hidden="true" />
              Fill Booking Form
            </Link>

            {/* Ghost: pricing */}
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-4 rounded-full text-base transition-all duration-200"
            >
              View Fares
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Contact numbers */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
            {[
              { label: "Saudi", num: "+966 57 306 7785", href: "tel:+966573067785" },
              { label: "UK", num: "+44 7413 467638", href: "tel:+447413467638" },
              { label: "Pakistan", num: "+92 371 2300606", href: "tel:+923712300606" },
              { label: "Email", num: "info@taxibhai.com", href: "mailto:info@taxibhai.com" },
            ].map((c) => (
              <a
                key={c.num}
                href={c.href}
                className="text-brand-300 hover:text-gold-400 transition-colors"
              >
                <span className="text-brand-500">{c.label}: </span>
                {c.num}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
