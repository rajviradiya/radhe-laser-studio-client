import React from 'react';
import { whatWeDoCategories } from '../data/servicesData';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            What We Do
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Detailed breakdown of laser cutting, acrylic fabrication, custom woodcraft, and branding
            solutions delivered by our workshop in Ahmedabad.
          </p>
        </div>

        {/* 8 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeDoCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 hover:bg-white p-6 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#C2272D] pb-3 mb-4 border-b border-slate-200">
                  {cat.category}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                    >
                      <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#C2272D]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <Link
                  to="/quote"
                  className="text-xs font-bold text-slate-600 hover:text-[#C2272D] flex items-center justify-between transition-colors"
                >
                  <span>Enquire for this work</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
