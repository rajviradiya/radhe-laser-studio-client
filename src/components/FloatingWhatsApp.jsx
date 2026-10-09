import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl =
    'https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20have%20an%20inquiry%20regarding%20custom%20laser%20cutting.';

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-5 sm:right-8 z-50 flex items-end gap-3 pointer-events-auto">
      {/* Quick message tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#161A22] text-white border border-[#282F3E] shadow-2xl py-2 px-3.5 rounded-xl text-xs max-w-xs animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>
            Need quick pricing? <strong>Chat with us on WhatsApp</strong>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Radhe Laser Studio"
        className="relative group flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#25D366] to-[#128C7E] rounded-full text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
        <MessageCircle className="w-7 h-7 relative z-10 fill-white" />
      </a>
    </div>
  );
};
