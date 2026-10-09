import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { QuoteForm } from '../components/QuoteForm';
import { ShieldCheck, MessageCircle, Clock, FileCheck } from 'lucide-react';

export const QuotePage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEOHead
        title="Request a Quote | Radhe Laser Studio Ahmedabad"
        description="Submit your laser cutting requirements, dimensions, and design files (DXF, CDR, AI, PDF, SVG) for a fast, accurate quote."
        canonical="https://radhelaserstudio.com/quote"
      />

      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Request a Custom Quote
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Provide your specifications, upload your CAD/vector file or reference photo, and our
            team in Gota, Ahmedabad will provide a transparent quote.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 text-xs text-slate-500 font-semibold">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C2272D]" />
              <span>Prompt Review Within Business Hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>No Obligation Feasibility Check</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Quote Form Container */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
        <QuoteForm />

        {/* WhatsApp Fast-Track alternative */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Already have your design ready on your mobile?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              You can also send vector files or photos directly to our WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20have%20a%20design%20to%20send%20directly."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-xs shadow-sm hover:bg-[#20ba59] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send on WhatsApp (7984190368)</span>
          </a>
        </div>
      </section>
    </div>
  );
};
