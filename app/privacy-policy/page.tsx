import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { generateBreadcrumbJsonLd, generateWebPageJsonLd } from "@/lib/schema/jsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy — Taxi Bhai",
  description:
    "Taxi Bhai's privacy policy: what personal data we collect when you make a booking, how it is used, who it is shared with, and how you can access or delete it.",
  alternates: { canonical: "https://www.taxibhai.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy — Taxi Bhai",
    description:
      "What personal data Taxi Bhai collects, how it is used, and your rights under Saudi PDPL.",
    url: "https://www.taxibhai.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const webPageLd = generateWebPageJsonLd({
    type: "WebPage",
    name: "Privacy Policy — Taxi Bhai",
    description:
      "Taxi Bhai's privacy policy: what personal data we collect, how it is used, who it is shared with, and how you can access or delete it.",
    url: "https://www.taxibhai.com/privacy-policy",
    breadcrumb: [
      { name: "Home", url: "https://www.taxibhai.com" },
      { name: "Privacy Policy", url: "https://www.taxibhai.com/privacy-policy" },
    ],
  });

  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.taxibhai.com" },
    { name: "Privacy Policy", url: "https://www.taxibhai.com/privacy-policy" },
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
            <span className="text-brand-300">Privacy Policy</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-brand-400 text-sm">Last updated: 24 September 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Legal caveat */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800 text-sm mb-8">
            This policy was drafted as a general guide adapted to the services Taxi Bhai
            provides. We recommend having this reviewed by a legal advisor qualified in
            Saudi Arabian law before relying on it as your sole compliance document.
          </div>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">1. Who we are</h2>
            <p className="text-brand-700/80 leading-relaxed">
              Taxi Bhai is a private transportation service operating in the Kingdom of
              Saudi Arabia. If you have any questions about this policy, please contact
              us at <a href="mailto:info@taxibhai.com" className="text-brand-700 font-semibold underline">info@taxibhai.com</a> or{" "}
              <a href="tel:+966573067785" className="text-brand-700 font-semibold underline">+966 57 306 7785</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">2. What data we collect</h2>
            <p className="text-brand-700/80 leading-relaxed mb-3">
              When you make or enquire about a booking, we may collect:
            </p>
            <ul className="space-y-2 text-brand-700/80">
              <li className="flex items-start gap-2">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400 mt-2" aria-hidden="true" />
                <span><strong className="text-brand-900">Name</strong> — to identify you at pickup</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400 mt-2" aria-hidden="true" />
                <span><strong className="text-brand-900">Phone / WhatsApp number</strong> — to confirm your booking and connect you with your driver</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400 mt-2" aria-hidden="true" />
                <span><strong className="text-brand-900">Pickup and drop-off location</strong> — to fulfil the transfer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400 mt-2" aria-hidden="true" />
                <span><strong className="text-brand-900">Flight number</strong> (airport transfers) — to track your arrival time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400 mt-2" aria-hidden="true" />
                <span><strong className="text-brand-900">Email address</strong> (optional) — if provided for email correspondence</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400 mt-2" aria-hidden="true" />
                <span><strong className="text-brand-900">Message content</strong> — any messages you send via WhatsApp or the website booking form</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">3. Why we collect it</h2>
            <p className="text-brand-700/80 leading-relaxed mb-3">
              We only collect data needed to provide and confirm your transfer. Your data is used to:
            </p>
            <ul className="space-y-1.5 text-brand-700/80 list-disc pl-5">
              <li>Arrange and confirm your booking</li>
              <li>Assign and notify your driver</li>
              <li>Monitor your flight (where applicable)</li>
              <li>Respond to your enquiries</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">4. Who we share it with</h2>
            <p className="text-brand-700/80 leading-relaxed mb-3">
              We share your name, pickup location, and contact number with your assigned driver.
              We do not sell your data or share it with advertisers.
            </p>
            <p className="text-brand-700/80 leading-relaxed">
              We may use third-party services including WhatsApp (Meta), email providers, and
              our booking system to process and store bookings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">5. How long we keep it</h2>
            <p className="text-brand-700/80 leading-relaxed">
              Booking records are retained for 12 months from the date of travel to allow us
              to handle any follow-up enquiries. After that period, personal data is deleted
              unless required to be retained under Saudi law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">
              6. Your rights under the Saudi Personal Data Protection Law (PDPL, Royal Decree M/19)
            </h2>
            <p className="text-brand-700/80 leading-relaxed mb-3">You have the right to:</p>
            <ul className="space-y-1.5 text-brand-700/80 list-disc pl-5 mb-3">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
            </ul>
            <p className="text-brand-700/80 leading-relaxed">
              To make a request, email{" "}
              <a href="mailto:info@taxibhai.com" className="text-brand-700 font-semibold underline">info@taxibhai.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">7. Cookies</h2>
            <p className="text-brand-700/80 leading-relaxed">
              Our website may use standard cookies for analytics and performance monitoring.
              No cookies are used for advertising or tracking across other websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">8. Changes to this policy</h2>
            <p className="text-brand-700/80 leading-relaxed">
              We may update this policy. The &ldquo;last updated&rdquo; date at the top of this page
              reflects the most recent version.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">9. Contact</h2>
            <p className="text-brand-700/80 leading-relaxed">
              <a href="mailto:info@taxibhai.com" className="text-brand-700 font-semibold underline">info@taxibhai.com</a>
              {" "}|{" "}
              <a href="tel:+966573067785" className="text-brand-700 font-semibold underline">+966 57 306 7785</a>
            </p>
          </section>

          {/* Internal links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-sand">
            <Link
              href="/contact"
              className="flex items-center gap-1.5 text-sm text-brand-700 font-semibold hover:text-brand-900 transition-colors"
            >
              <ChevronRight size={14} aria-hidden="true" />
              Back to Contact
            </Link>
            <Link
              href="/terms"
              className="flex items-center gap-1.5 text-sm text-brand-700 font-semibold hover:text-brand-900 transition-colors"
            >
              <ChevronRight size={14} aria-hidden="true" />
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
