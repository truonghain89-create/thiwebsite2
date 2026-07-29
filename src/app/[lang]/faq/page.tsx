"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import { useApp, Language } from "@/context/AppContext";
import { faqs, FAQItem } from "@/data/mockData";
import { Plus, Minus, Search, HelpCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function FAQPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang as Language;
  const { t } = useApp();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState<FAQItem[]>(faqs);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      setFilteredFaqs(
        faqs.filter(
          (f) =>
            (f.question[lang] || f.question.en).toLowerCase().includes(q) ||
            (f.answer[lang] || f.answer.en).toLowerCase().includes(q)
        )
      );
    } else {
      setFilteredFaqs(faqs);
    }
  }, [searchQuery, lang]);

  return (
    <div className="pt-24 pb-20 bg-[#FCFDFB] min-h-screen">
      <div className="max-w-[768px] mx-auto px-6 flex flex-col gap-10">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center">
          <span className="text-xs uppercase font-extrabold text-secondary tracking-widest block mb-1">
            Common Questions
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-black text-text-primary leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-text-secondary mt-1.5 leading-relaxed max-w-[50ch]">
            Find quick answers relating to visa regulations, seasonal packing lists, and custom itineraries.
          </p>
        </div>

        {/* Search Input filter */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search queries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs font-semibold pl-10 pr-4 py-3 rounded-xl border border-border-nature focus:border-primary focus:outline-none bg-nature-white text-text-primary shadow-sm"
          />
          <Search className="w-4 h-4 text-text-secondary/50 absolute left-4 top-3.5" />
        </div>

        {/* FAQ list */}
        {filteredFaqs.length > 0 ? (
          <div className="flex flex-col gap-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-nature-white border border-border-nature/40 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none hover:bg-soft-mint/20 transition-colors"
                  >
                    <span className="font-playfair font-bold text-sm text-text-primary">
                      {faq.question[lang]}
                    </span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-secondary shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-secondary shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs text-text-secondary leading-relaxed font-medium">
                      {faq.answer[lang]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="border border-border-nature border-dashed rounded-3xl p-12 flex flex-col items-center gap-4 text-center bg-nature-white">
            <HelpCircle className="w-10 h-10 text-text-secondary/50 animate-pulse" />
            <div>
              <h4 className="font-playfair text-lg font-bold text-text-primary">No FAQs matched</h4>
              <p className="text-xs text-text-secondary mt-1">Try clearing your filters or contact our concierge directly.</p>
            </div>
            <Link
              href={`/${lang}/contact`}
              className="px-5 py-2 bg-secondary text-white font-semibold text-xs rounded-xl"
            >
              Contact Concierge
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
