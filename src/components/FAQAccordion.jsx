import React, { useState } from 'react';
import { faqList } from '../data/faqData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQAccordion = ({ limit }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const items = limit ? faqList.slice(0, limit) : faqList;

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Common questions regarding ordering, materials, custom designs, and studio location in
            Ahmedabad.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-slate-200 hover:border-red-300 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 text-slate-900 hover:text-[#C2272D] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold pr-2">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white bg-[#C2272D]' : 'text-slate-600'}`}
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

        {/* Quick query helper */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Have a specific question not listed here?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Feel free to message our team directly for quick advice.
            </p>
          </div>
          <a
            href="https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-emerald-700 text-xs font-bold transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
