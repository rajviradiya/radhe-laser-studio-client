import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { faqList } from '../data/faqData';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { FinalCTA } from '../components/FinalCTA';

export const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = faqList.filter(
    (f) =>
      f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Frequently Asked Questions (FAQ) | Radhe Laser Studio"
        description="Got questions about laser cutting, materials, order sizes, or quotes? Browse answers from Radhe Laser Studio Ahmedabad."
        canonical="https://radhelaserstudio.com/faq"
      />

      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed mb-8 font-medium">
            Clear, honest answers about our laser cutting services, custom design submissions,
            materials, and order handling.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search a question or topic..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Accordion Questions */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-500 text-sm mb-4">No matching questions found.</p>
            <a
              href="https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C2272D] text-white text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask us directly on WhatsApp</span>
            </a>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white border border-slate-200 hover:border-red-300 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 text-slate-900 hover:text-[#C2272D] transition-colors focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold pr-2">{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white bg-[#C2272D]' : 'text-slate-500'}`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      <FinalCTA />
    </div>
  );
};
