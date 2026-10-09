import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export const BulkOrders = () => {
  const targetAudiences = [
    'Retail businesses',
    'Corporate orders',
    'Events',
    'Branding agencies',
    'Interior designers',
    'Product developers',
    'Promotional campaigns',
  ];

  return (
    <section className="py-20 bg-[#11141A] text-white border-b border-[#222834]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#161A22] border border-[#282F3E] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle red ambient light in background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left text */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Need Multiple Pieces?
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                We support prototypes, repeat orders and bulk production for businesses, events and
                organizations.
              </p>

              {/* Target segments */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                  Suitable for:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {targetAudiences.map((aud, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C2272D] shrink-0" />
                      <span>{aud}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right CTA box */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-[#0B0D12]/90 backdrop-blur-md border border-[#282F3E] p-6 text-center space-y-4 shadow-xl">
                <h3 className="text-base font-bold text-white">Discuss Batch Volume & Timeline</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Send your bill of materials (BOM), CAD drawing, or projected volume for customized
                  volume tiered quotation.
                </p>
                <Link
                  to="/quote?service=Bulk+Production&quantity=50"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C2272D] hover:bg-[#A81C21] text-white font-extrabold text-sm shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Request Bulk Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
