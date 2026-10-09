import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ExternalLink,
  Navigation,
  Compass,
} from 'lucide-react';

export const LocationSection = () => {
  const googleMapsUrl = 'https://share.google/JpWNuxXYPa3LG8EFx';

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 relative overflow-hidden">
      {/* Background subtle grid and red ambient glow */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header matching Figma */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Visit Radhe Laser Studio in Ahmedabad
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl mx-auto">
            Conveniently located on Ognaj - Gota Road, opposite side of Shell Petrol Pump. Visit us
            for material selection, live sample inspection, design discussions, and finished order
            pickups.
          </p>
        </div>

        {/* 2-Column Grid matching Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Studio Details & Quick Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#C2272D] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Studio Address
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 mt-0.5 leading-snug">
                    SHOP NO - 1140, Radhe Laser Studio
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                    Ognaj - Gota Rd, opposite side of Shell Petrol Pump, Gota, Ahmedabad, Gujarat,
                    India.
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold mt-2.5">
                    <Compass className="w-3.5 h-3.5 text-[#C2272D]" />
                    <span>Landmark: Opposite Shell Petrol Pump</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#C2272D] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Workshop Timings
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <strong className="text-sm font-extrabold text-slate-900">
                      Monday – Saturday: 10:00 AM – 8:00 PM
                    </strong>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Sunday: By Appointment / Call for urgent feasibility & bulk project review.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#C2272D] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Call / WhatsApp Direct
                  </span>
                  <a
                    href="tel:7984190368"
                    className="text-lg font-black text-slate-900 hover:text-[#C2272D] transition-colors mt-0.5 block"
                  >
                    7984190368
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Call before visiting to ensure material samples or design specialists are ready
                    for your project.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons matching Figma */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C2272D] hover:bg-[#A81C21] text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-red-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Maps)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20am%20planning%20to%20visit%20your%20studio%20on%20Ognaj-Gota%20Road."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50/40 border-2 border-emerald-500 hover:border-emerald-600 text-slate-900 font-extrabold text-xs sm:text-sm shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4.5 h-4.5 text-emerald-600 stroke-[2.2]" />
                <span>WhatsApp Location</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Google Map Card matching Figma */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xl flex flex-col">
              {/* Map Header Strip */}
              <div className="p-4 border-b border-slate-200 bg-slate-50/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-red-100 border border-red-200 flex items-center justify-center text-[#C2272D]">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-none">
                      Radhe Laser Studio | Laser Cutting & Engraving
                    </h4>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Ognaj - Gota Road • Gota, Ahmedabad
                    </span>
                  </div>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-red-300 text-[11px] font-bold text-[#C2272D] hover:bg-red-50 shadow-2xs transition-all"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Viewport */}
              <div className="relative flex-1 min-h-[340px] sm:min-h-[400px] w-full bg-slate-100">
                <iframe
                  title="Radhe Laser Studio Location on Google Maps"
                  src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sRadhe+Laser+Studio,+SHOP+NO+-+1140,+Ognaj+-+Gota+Rd,+opposite+side+of+Shell+Petrol+Pump,+Gota,+Ahmedabad,+Gujarat!6i15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Map Footer Information */}
              <div className="p-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Gota, Ahmedabad Studio
                </span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#C2272D] hover:underline flex items-center gap-1"
                >
                  <span>View Larger Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
