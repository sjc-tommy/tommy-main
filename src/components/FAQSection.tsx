import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, Search } from 'lucide-react';
import { GENERAL_FAQS } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filterQuery, setFilterQuery] = useState('');

  const filteredFaqs = GENERAL_FAQS.filter(
    (f) =>
      f.question.toLowerCase().includes(filterQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#E5E2DB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#FF7A45] uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7269] mt-2">
            Direct answers regarding veterinary safety, export compliance, B2B wholesale MOQ, and 2-year warranty support.
          </p>

          {/* Quick Filter Input */}
          <div className="relative max-w-md mx-auto mt-6">
            <input
              type="text"
              placeholder="Filter questions (e.g. 'Wi-Fi', 'B2B', 'warranty')..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full px-4 py-2.5 pl-10 text-xs bg-white border border-[#E5E2DB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
            />
            <Search className="w-4 h-4 text-[#6B7269] absolute left-3.5 top-3" />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5E2DB] overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F3D2E]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#E8F3EE] text-[#0F3D2E] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#0F3D2E] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#6B7269] leading-relaxed border-t border-[#E5E2DB]/60 bg-[#FAF7F2]/50 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
