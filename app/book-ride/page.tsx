import type { Metadata } from "next";
import { generateBreadcrumbJsonLd, generateHowToBookJsonLd } from "@/lib/schema/jsonLd";
import { BookingForm } from "@/components/booking/BookingForm";
import { Star, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Ride — Book Your Umrah Taxi on WhatsApp",
  description:
    "Book a private Umrah taxi with Taxi Bhai. Fill in your route, vehicle, and travel details — the form builds a WhatsApp booking message instantly. 24/7 availability, fixed fares.",
  alternates: { canonical: "https://www.taxibhai.com/book-ride" },
};

const steps = [
  { num: "01", title: "Choose your route & vehicle", desc: "Select from/to locations and vehicle type. The form shows the live fare." },
  { num: "02", title: "Enter travel details", desc: "Date, time, passengers, flight number, and your WhatsApp number." },
  { num: "03", title: "Send on WhatsApp", desc: "Click the button — WhatsApp opens with your booking pre-filled. Confirmation within minutes." },
];

export default function BookRidePage() {
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Book a Ride", url: "https://www.taxibhai.com/book-ride" },
  ]);
  const howToLd = generateHowToBookJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
      />

      {/* Hero */}
      <div className="bg-brand-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Book a Ride
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Book your Umrah taxi in minutes
          </h1>
          <p className="text-brand-300 text-lg max-w-2xl leading-relaxed">
            Fill in your details below and we&apos;ll send a pre-filled booking message
            to Taxi Bhai on WhatsApp. No payment needed — we confirm your driver and details
            within minutes.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">

            {/* Form */}
            <div>
              <BookingForm />
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              {/* How it works */}
              <div className="bg-white border border-sand rounded-2xl p-6">
                <h2 className="font-display text-lg font-bold text-brand-950 mb-5">
                  How it works
                </h2>
                <ol className="space-y-5">
                  {steps.map((step) => (
                    <li key={step.num} className="flex gap-4">
                      <span
                        className="w-8 h-8 rounded-full bg-brand-900 text-white text-xs font-bold flex items-center justify-center shrink-0"
                        aria-hidden="true"
                      >
                        {step.num}
                      </span>
                      <div>
                        <h3 className="font-semibold text-brand-900 text-sm mb-0.5">
                          {step.title}
                        </h3>
                        <p className="text-brand-600 text-xs leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Trust signals */}
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6">
                <h2 className="font-display text-lg font-bold text-brand-950 mb-4">
                  Why book with Taxi Bhai?
                </h2>
                <ul className="space-y-3">
                  {[
                    { icon: <Star size={14} className="text-gold-500 fill-gold-500" aria-hidden="true" />, text: "5.0 Google rating — 8 verified reviews" },
                    { icon: <Clock size={14} className="text-brand-500" aria-hidden="true" />, text: "24/7 availability — including Ramadan & Hajj" },
                    { icon: <Shield size={14} className="text-brand-500" aria-hidden="true" />, text: "Fixed fares — no meters, no surprises" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-2.5 text-brand-700 text-sm">
                      {item.icon}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct WhatsApp */}
              <div className="bg-white border border-sand rounded-2xl p-6">
                <h2 className="font-display text-base font-bold text-brand-950 mb-2">
                  Prefer to message directly?
                </h2>
                <p className="text-brand-600 text-sm mb-4">
                  WhatsApp, call, or email us directly:
                </p>
                <div className="space-y-2 text-sm">
                  <a href="https://wa.me/966573067785" target="_blank" rel="noopener noreferrer" className="block font-semibold text-brand-800 hover:text-brand-600">
                    Saudi: +966 57 306 7785
                  </a>
                  <a href="tel:+447413467638" className="block font-semibold text-brand-800 hover:text-brand-600">
                    UK: +44 7413 467638
                  </a>
                  <a href="tel:+923712300606" className="block font-semibold text-brand-800 hover:text-brand-600">
                    Pakistan: +92 371 2300606
                  </a>
                  <a href="mailto:info@taxibhai.com" className="block text-brand-600 hover:text-brand-800">
                    info@taxibhai.com
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
