import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, MapPin, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-60"></div>

      {/* Red ambient focal glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[300px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Custom Laser Cutting & <span className="text-[#C2272D]">Creative Décor,</span> Made
              for You
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              CO₂ laser cutting, engraving, acrylic work, MDF products, signage, branding, décor and
              customized products in Ahmedabad.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-white font-extrabold text-base bg-[#C2272D] hover:bg-[#A81C21] shadow-xl shadow-red-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20want%20to%20discuss%20a%20laser%20cutting%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-slate-900 font-extrabold text-base bg-white hover:bg-emerald-50/40 border-2 border-emerald-500 hover:border-emerald-600 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 stroke-[2.2]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Service Capabilities */}
            <div className="pt-2">
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-bold text-slate-700 tracking-wide uppercase">
                <span className="flex items-center gap-1.5 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#C2272D]" />
                  Custom Orders
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1.5 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#C2272D]" />
                  Prototypes
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1.5 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#C2272D]" />
                  Bulk Production
                </span>
              </div>
            </div>

            {/* Trust badge */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Calibrated CO₂ Laser Machines</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#C2272D]" />
                <span>DXF, CDR, AI, PDF, SVG Vector Support</span>
              </div>
            </div>
          </div>

          {/* Right Image / Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85"
                  alt="Precision CO2 Laser Cutting in action at Radhe Laser Studio Ahmedabad"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
