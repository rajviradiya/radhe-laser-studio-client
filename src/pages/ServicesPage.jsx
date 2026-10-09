import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { servicesList } from '../data/servicesData';
import { WhatWeDo } from '../components/WhatWeDo';
import { Materials } from '../components/Materials';
import { FinalCTA } from '../components/FinalCTA';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export const ServicesPage = () => {
  return (
    <div className="bg-white">
      <SEOHead
        title="Laser Cutting & Fabrication Services Ahmedabad"
        description="Explore precision CO₂ laser cutting, acrylic fabrication, custom MDF décor, signage, neon, and corporate gifting services in Ahmedabad."
        canonical="https://radhelaserstudio.com/services"
      />

      {/* Services Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Services & Capabilities
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            From single prototype test-cuts to large volume production runs, discover how our Gota,
            Ahmedabad workshop supports your custom fabrication needs.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-12">
          {servicesList.map((service, idx) => (
            <div
              key={service.id}
              className={`rounded-2xl bg-white border border-slate-200 hover:border-red-400 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all shadow-sm hover:shadow-xl ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-64 sm:h-80 group bg-slate-100">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-lg text-xs font-bold bg-[#C2272D] text-white shadow-md">
                  {service.tagline}
                </span>
              </div>

              {/* Text side */}
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {service.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {service.features.slice(0, 6).map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C2272D] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#C2272D] hover:bg-[#A81C21] text-white font-bold text-xs transition-all shadow-sm"
                  >
                    <span>Read Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to={`/quote?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 text-xs font-bold transition-all"
                  >
                    <span>Request Quote for {service.shortTitle}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categorized What We Do */}
      <WhatWeDo />

      {/* Materials */}
      <Materials />

      {/* CTA */}
      <FinalCTA />
    </div>
  );
};
