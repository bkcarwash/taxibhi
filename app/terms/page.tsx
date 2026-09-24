import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { generateBreadcrumbJsonLd, generateWebPageJsonLd } from "@/lib/schema/jsonLd";

export const metadata: Metadata = {
  title: "Terms & Conditions — Taxi Bhai",
  description:
    "Taxi Bhai's terms and conditions: service scope, fixed fares, cancellation rules, luggage policy, liability, and governing law.",
  alternates: { canonical: "https://www.taxibhai.com/terms" },
  openGraph: {
    title: "Terms & Conditions — Taxi Bhai",
    description:
      "Service terms for Taxi Bhai private Umrah taxi: fares, cancellation, liability, and governing law.",
    url: "https://www.taxibhai.com/terms",
  },
};

export default function TermsPage() {
  const webPageLd = generateWebPageJsonLd({
    type: "WebPage",
    name: "Terms & Conditions — Taxi Bhai",
    description:
      "Taxi Bhai's terms and conditions: service scope, fixed fares, cancellation rules, luggage policy, liability, and governing law.",
    url: "https://www.taxibhai.com/terms",
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Terms & Conditions", url: "https://www.taxibhai.com/terms" },
    ],
  });

  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Terms & Conditions", url: "https://www.taxibhai.com/terms" },
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
            <span className="text-brand-300">Terms &amp; Conditions</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-brand-400 text-sm">Last updated: 24 September 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Legal caveat */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800 text-sm mb-8">
            These terms were prepared as a general guide for Taxi Bhai&rsquo;s services. We
            recommend having them reviewed by a legal advisor qualified in Saudi Arabian law.
          </div>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">1. Service</h2>
            <p className="text-brand-700/80 leading-relaxed">
              Taxi Bhai provides private vehicle transfers and Ziyarat tours in the Kingdom
              of Saudi Arabia. All transfers are private — vehicles are not shared with
              other customers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">2. Booking</h2>
            <p className="text-brand-700/80 leading-relaxed">
              A booking is confirmed when Taxi Bhai sends a written confirmation via WhatsApp
              or email. Verbal agreements are not binding.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">3. Fares and payment</h2>
            <p className="text-brand-700/80 leading-relaxed">
              All fares are quoted per vehicle in Saudi Riyals (SAR) and are fixed at the time
              of booking. The fare does not change based on traffic, time of day, or any other
              factor. Payment is made in cash to the driver on arrival at the drop-off location,
              unless a bank transfer deposit has been separately agreed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">4. Cancellation</h2>
            <p className="text-brand-700/80 leading-relaxed">
              See the full{" "}
              <Link href="/policies/booking" className="text-brand-700 font-semibold underline">
                Booking Policy
              </Link>
              . Free cancellation applies if cancelled more than 6 hours before the agreed
              pickup time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">5. No-show</h2>
            <p className="text-brand-700/80 leading-relaxed">
              If you are not at the pickup point within 30 minutes of the confirmed time without
              prior notice, the full fare may be charged.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">6. Luggage</h2>
            <p className="text-brand-700/80 leading-relaxed">
              A standard amount of luggage is included in all fares. Oversized or excessive
              luggage must be declared at the time of booking. Additional luggage charges may
              apply for large groups with very heavy luggage where a larger vehicle is required.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">7. Flight delays</h2>
            <p className="text-brand-700/80 leading-relaxed">
              For airport transfers, Taxi Bhai monitors flight arrivals in real time. A driver
              waiting for a delayed flight will not charge extra for reasonable waiting time
              caused by the delay. If the delay is extreme (6+ hours), we will contact you to
              rearrange.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">8. Liability</h2>
            <p className="text-brand-700/80 leading-relaxed">
              Taxi Bhai takes reasonable care to provide the service as booked. We are not
              liable for delays caused by traffic, road closures, weather, government
              checkpoints, or other events beyond our reasonable control. Our liability is
              limited to the fare paid for the affected transfer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">9. Conduct</h2>
            <p className="text-brand-700/80 leading-relaxed">
              Taxi Bhai reserves the right to refuse service or terminate a transfer without
              refund if a passenger behaves in a manner that endangers the driver, other
              passengers, or the vehicle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">10. Governing law</h2>
            <p className="text-brand-700/80 leading-relaxed">
              These terms are governed by the laws of the Kingdom of Saudi Arabia.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">11. Contact</h2>
            <p className="text-brand-700/80 leading-relaxed">
              <a href="mailto:info@taxibhai.com" className="text-brand-700 font-semibold underline">info@taxibhai.com</a>
              {" "}|{" "}
              <a href="tel:+966573067785" className="text-brand-700 font-semibold underline">+966 57 306 7785</a>
            </p>
          </section>

          {/* Internal links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-sand">
            <Link
              href="/policies/booking"
              className="flex items-center gap-1.5 text-sm text-brand-700 font-semibold hover:text-brand-900 transition-colors"
            >
              <ChevronRight size={14} aria-hidden="true" />
              Booking Policy
            </Link>
            <Link
              href="/privacy-policy"
              className="flex items-center gap-1.5 text-sm text-brand-700 font-semibold hover:text-brand-900 transition-colors"
            >
              <ChevronRight size={14} aria-hidden="true" />
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
