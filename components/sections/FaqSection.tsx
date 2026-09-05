"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data/faqs";
import { cn } from "@/lib/utils";

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-sand last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        id={`faq-question-${faq.id}`}
      >
        <span
          className={cn(
            "font-display font-semibold text-base sm:text-lg transition-colors",
            isOpen ? "text-brand-700" : "text-brand-950"
          )}
        >
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          aria-hidden="true"
          className={cn(
            "shrink-0 text-brand-500 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Full text always in DOM for SEO/AI crawlers — CSS only collapse */}
      <div
        id={`faq-answer-${faq.id}`}
        role="region"
        aria-labelledby={`faq-question-${faq.id}`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[400px] mb-5" : "max-h-0"
        )}
      >
        <p className="text-brand-700/80 leading-relaxed text-sm sm:text-base">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export function FaqSection({ preview = false }: { preview?: boolean }) {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);
  const displayFaqs = preview ? faqs.slice(0, 4) : faqs;

  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Common Questions
          </p>
          <h2
            id="faq-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-950"
          >
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-parchment border border-sand rounded-2xl px-6 sm:px-8"
        >
          {displayFaqs.map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() =>
                setOpenId(openId === faq.id ? null : faq.id)
              }
            />
          ))}
        </motion.div>

        {/* Full-text hidden from view but present in DOM for crawlers */}
        <div className="sr-only" aria-hidden="true">
          {faqs.map((faq) => (
            <div key={`seo-${faq.id}`}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
