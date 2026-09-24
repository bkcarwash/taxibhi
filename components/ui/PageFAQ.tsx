"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PageFAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqs: PageFAQItem[];
  heading?: string;
}

export function PageFAQ({ faqs, heading = "Frequently asked questions" }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white" aria-labelledby="page-faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="page-faq-heading"
          className="font-display text-2xl sm:text-3xl font-bold text-brand-950 mb-8"
        >
          {heading}
        </h2>
        <div className="bg-parchment border border-sand rounded-2xl px-6 sm:px-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-sand last:border-0">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-inset"
                aria-expanded={openIdx === i}
                aria-controls={`page-faq-answer-${i}`}
                id={`page-faq-question-${i}`}
              >
                <span
                  className={cn(
                    "font-display font-semibold text-base transition-colors",
                    openIdx === i ? "text-brand-700" : "text-brand-950"
                  )}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 text-brand-400 transition-transform duration-200",
                    openIdx === i && "rotate-180"
                  )}
                />
              </button>
              <div
                id={`page-faq-answer-${i}`}
                role="region"
                aria-labelledby={`page-faq-question-${i}`}
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIdx === i ? "max-h-[500px] mb-5" : "max-h-0"
                )}
              >
                <p className="text-brand-700/80 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Full text in DOM for crawlers */}
        <div className="sr-only" aria-hidden="true">
          {faqs.map((faq, i) => (
            <div key={`seo-faq-${i}`}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
