import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MobileContactBar = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#11141A]/95 backdrop-blur-md border-t border-[#1E232E] px-3 py-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:7984190368"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-white/5 border border-emerald-500/60 text-slate-100 hover:text-emerald-400 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-emerald-400 stroke-[2.2] mb-0.5" />
          <span className="text-[11px] font-bold">Call Now</span>
        </a>

        <a
          href="https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20want%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-white/5 border border-emerald-500 text-slate-100 hover:text-emerald-400 active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 stroke-[2.2] mb-0.5" />
          <span className="text-[11px] font-bold text-emerald-300">WhatsApp</span>
        </a>

        <Link
          to="/quote"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#C2272D] text-white active:scale-95 font-bold transition-all shadow-md shadow-red-600/30"
        >
          <FileText className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px]">Get Quote</span>
        </Link>
      </div>
    </div>
  );
};
