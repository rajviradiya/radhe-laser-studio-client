import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-red-50/40 to-slate-100 border-b border-slate-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Have a Design or Idea?
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Send us your design, dimensions, reference image or simply tell us what you need. We'll
          discuss the best way to turn your idea into a finished product.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C2272D] hover:bg-[#A81C21] text-white font-extrabold text-base shadow-xl shadow-red-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href="https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20have%20a%20design%20to%20share%20for%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-emerald-50/40 border-2 border-emerald-500 hover:border-emerald-600 text-slate-900 font-extrabold text-base shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600 stroke-[2.2]" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Direct Call Helper */}
        <div className="pt-4 text-xs text-slate-500">
          Prefer calling directly?{' '}
          <a href="tel:7984190368" className="text-[#C2272D] font-bold hover:underline">
            Call 7984190368
          </a>{' '}
          • Studio at Ognaj-Gota Rd, Gota, Ahmedabad
        </div>
      </div>
    </section>
  );
};
