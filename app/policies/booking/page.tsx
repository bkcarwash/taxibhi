import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, X, Clock, CreditCard, Plane, MessageCircle, ChevronRight } from "lucide-react";
import { generateBreadcrumbJsonLd, generateWebPageJsonLd } from "@/lib/schema/jsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Booking & Cancellation Policy — Taxi Bhai Umrah Taxi",
  description:
    "Full booking and cancellation policy for Taxi Bhai: how to book, how far in advance, cancellation window, no-show rules, payment methods, and what to do if your flight is delayed.",
  alternates: { canonical: "https://www.taxibhai.com/policies/booking" },
  openGraph: {
    title: "Booking & Cancellation Policy — Taxi Bhai",
    description:
      "How to book, cancellation windows, payment, and flight delay policies for Taxi Bhai private Umrah transfers.",
    url: "https://www.taxibhai.com/policies/booking",
  },
};

export default function BookingPolicyPage() {
  const webPageLd = generateWebPageJsonLd({
    type: "WebPage",
    name: "Booking & Cancellation Policy — Taxi Bhai Umrah Taxi",
    description:
      "Full booking and cancellation policy for Taxi Bhai: how to book, how far in advance, cancellation window, no-show rules, payment methods, and what to do if your flight is delayed.",
    url: "https://www.taxibhai.com/policies/booking",
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Policies", url: "https://www.taxibhai.com/policies/booking" },
      { name: "Booking Policy", url: "https://www.taxibhai.com/policies/booking" },
    ],
  });

  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Policies", url: "https://www.taxibhai.com/policies/booking" },
    { name: "Booking Policy", url: "https://www.taxibhai.com/policies/booking" },
  ]);

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-brand-400 text-xs mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-brand-400">Policies</span>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-brand-300">Booking Policy</span>
          </nav>
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Policies
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Booking &amp; cancellation policy
          </h1>
          <p className="text-brand-300 text-lg max-w-2xl leading-relaxed">
            Clear, fair rules — so you know exactly where you stand.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-parchment">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section 1 */}
          <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-brand-700">
                <MessageCircle size={22} aria-hidden="true" />
              </div>
              <h2 className="font-display text-xl font-bold text-brand-900">How to book</h2>
            </div>
            <p className="text-brand-700/80 leading-relaxed mb-4">
              Booking is done via WhatsApp (<a href="https://wa.me/966573067785" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold underline">+966 57 306 7785</a>) or the website booking form. When you send your booking request, include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-brand-700/80 mb-4">
              <li>Pickup location</li>
              <li>Drop-off location</li>
              <li>Date and time</li>
              <li>Number of passengers</li>
              <li>Any luggage notes</li>
              <li>Vehicle preference</li>
              <li>Flight number (for airport transfers)</li>
            </ul>
            <p className="text-brand-700/80 leading-relaxed">
              You receive a confirmed fare by reply. Keep that message — it is your booking confirmation.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-brand-700">
                <CalendarCheck size={22} aria-hidden="true" />
              </div>
              <h2 className="font-display text-xl font-bold text-brand-900">How far ahead should I book?</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="shrink-0 w-2 h-2 rounded-full bg-brand-700 mt-2" aria-hidden="true" />
                <span className="text-brand-700/80">
                  <strong className="text-brand-900">Airport transfers:</strong> at least 24 hours before your flight lands
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 w-2 h-2 rounded-full bg-brand-700 mt-2" aria-hidden="true" />
                <span className="text-brand-700/80">
                  <strong className="text-brand-900">Makkah ↔ Madinah intercity routes:</strong> 24–48 hours ahead
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 w-2 h-2 rounded-full bg-brand-700 mt-2" aria-hidden="true" />
                <span className="text-brand-700/80">
                  <strong className="text-brand-900">Ziyarat tours and local city rides:</strong> 12 hours ahead
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 w-2 h-2 rounded-full bg-brand-700 mt-2" aria-hidden="true" />
                <span className="text-brand-700/80">
                  <strong className="text-brand-900">Same-day bookings:</strong> accepted subject to availability — WhatsApp is the fastest way to check
                </span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-brand-700">
                <X size={22} aria-hidden="true" />
              </div>
              <h2 className="font-display text-xl font-bold text-brand-900">Cancellation policy</h2>
            </div>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <span className="shrink-0 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold mt-0.5">Free</span>
                <span className="text-brand-700/80">
                  <strong className="text-brand-900">More than 6 hours before pickup:</strong> free cancellation, no charge
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mt-0.5">50%</span>
                <span className="text-brand-700/80">
                  <strong className="text-brand-900">Less than 6 hours before pickup:</strong> a cancellation fee equivalent to 50% of the fare may apply
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold mt-0.5">Full</span>
                <span className="text-brand-700/80">
                  <strong className="text-brand-900">Same-day cancellation after driver has departed:</strong> full fare may be charged
                </span>
              </li>
            </ul>
            <p className="text-brand-700/80 text-sm">
              To cancel, send a WhatsApp message to <a href="https://wa.me/966573067785" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold underline">+966 57 306 7785</a> as early as possible.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-brand-700">
                <Clock size={22} aria-hidden="true" />
              </div>
              <h2 className="font-display text-xl font-bold text-brand-900">No-show policy</h2>
            </div>
            <p className="text-brand-700/80 leading-relaxed">
              If you are not at the agreed pickup point within 30 minutes of the confirmed pickup time and have not contacted us, the booking may be treated as a no-show and the full fare charged.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-brand-700">
                <CreditCard size={22} aria-hidden="true" />
              </div>
              <h2 className="font-display text-xl font-bold text-brand-900">Payment</h2>
            </div>
            <ul className="space-y-2 text-brand-700/80">
              <li className="flex items-start gap-2">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400 mt-2" aria-hidden="true" />
                <span><strong className="text-brand-900">Standard method:</strong> cash in Saudi Riyals (SAR) to the driver at the end of the journey</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400 mt-2" aria-hidden="true" />
                <span><strong className="text-brand-900">Group bookings (2+ vehicles):</strong> bank transfer deposit available on request</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400 mt-2" aria-hidden="true" />
                <span>All fares are quoted and payable in SAR only</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-brand-700">
                <Plane size={22} aria-hidden="true" />
              </div>
              <h2 className="font-display text-xl font-bold text-brand-900">Flight delays</h2>
            </div>
            <p className="text-brand-700/80 leading-relaxed">
              For airport transfers, Taxi Bhai monitors your flight in real time. If your flight is delayed, your driver&rsquo;s pickup time adjusts automatically. You do not need to call or message us. Your driver will be in the arrivals hall when you land.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white border border-sand rounded-2xl p-6 sm:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-brand-700">
                <MessageCircle size={22} aria-hidden="true" />
              </div>
              <h2 className="font-display text-xl font-bold text-brand-900">Changes to your booking</h2>
            </div>
            <p className="text-brand-700/80 leading-relaxed">
              Route or time changes can be requested via WhatsApp. Changes are accepted subject to availability. If a change results in a different fare, you will be told before it is confirmed.
            </p>
          </div>

          {/* Internal links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/book-ride"
              className="flex items-center justify-between gap-2 bg-brand-800 hover:bg-brand-700 rounded-xl px-4 py-3 text-sm text-white font-semibold transition-colors"
            >
              <span>Book now</span>
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
              <span>FAQ</span>
              <ChevronRight size={14} className="text-brand-400" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
