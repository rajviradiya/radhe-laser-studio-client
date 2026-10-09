import React from 'react';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export const TopContactBar = () => {
  return (
    <div className="bg-[#11141A] text-xs text-slate-300 py-2.5 px-4 sm:px-6 border-b border-[#222834]">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="tel:7984190368"
            className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors group"
          >
            <Phone className="w-3.5 h-3.5 text-[#C2272D] group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-white">7984190368</span>
          </a>

          <a
            href="https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio,%20I%20would%20like%20to%20inquire%20about%20laser%20cutting"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href="https://share.google/JpWNuxXYPa3LG8EFx"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Radhe Laser Studio on Google Maps"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#C2272D] shrink-0" />
            <span className="truncate max-w-[280px] md:max-w-none">
              Shop No. 1140, Ognaj - Gota Rd, Opp. Shell Petrol Pump, Gota, Ahmedabad
            </span>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-slate-300">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C2272D]" />
            <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
          </div>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-emerald-400 font-medium">Studio Open for Inquiries</span>
        </div>
      </div>
    </div>
  );
};
