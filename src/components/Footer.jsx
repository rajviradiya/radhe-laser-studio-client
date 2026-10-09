import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './BrandIcons';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-[#11141A] border-t border-[#1E232E] pt-16 pb-24 sm:pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#222834]">
          {/* Brand Info */}
          <div>
            <div className="mb-4">
              <Logo variant="light" size="md" />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Professional CO₂ laser cutting, engraving, acrylic, MDF, signage, branding, décor and
              customized product solutions in Ahmedabad.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/radhelaserstudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Radhe Laser Studio Instagram"
                className="w-10 h-10 rounded-xl bg-[#1A1E27] border border-[#2B313E] flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:bg-[#222834] transition-all"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/people/Radhe-laseer-Studio/61594708690191/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Radhe Laser Studio Facebook"
                className="w-10 h-10 rounded-xl bg-[#1A1E27] border border-[#2B313E] flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-[#222834] transition-all"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/917984190368"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Radhe Laser Studio WhatsApp"
                className="w-10 h-10 rounded-xl bg-[#1A1E27] border border-[#2B313E] flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-[#222834] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#C2272D] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-red-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-red-400 transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-red-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/quote"
                  className="text-red-400 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Get a Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#C2272D] pl-2.5">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/services/co2-laser-cutting"
                  className="hover:text-red-400 transition-colors"
                >
                  Laser Cutting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/laser-engraving"
                  className="hover:text-red-400 transition-colors"
                >
                  Laser Engraving
                </Link>
              </li>
              <li>
                <Link to="/services/acrylic-work" className="hover:text-red-400 transition-colors">
                  Acrylic Work
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mdf-wood-products"
                  className="hover:text-red-400 transition-colors"
                >
                  MDF Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services/signage-branding"
                  className="hover:text-red-400 transition-colors"
                >
                  Signage & Branding
                </Link>
              </li>
              <li>
                <Link to="/services/event-decor" className="hover:text-red-400 transition-colors">
                  Event Décor & Neon
                </Link>
              </li>
              <li>
                <Link to="/services/custom-gifts" className="hover:text-red-400 transition-colors">
                  Custom Gifts
                </Link>
              </li>
              <li>
                <Link
                  to="/services/bulk-production"
                  className="hover:text-red-400 transition-colors"
                >
                  Bulk Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#C2272D] pl-2.5">
              Ahmedabad Studio
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href="tel:7984190368"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#181C24] border border-[#2B313E] hover:border-red-500/40 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#C2272D] shrink-0" />
                <div>
                  <span className="text-[11px] text-slate-400 block font-semibold">
                    Phone / WhatsApp
                  </span>
                  <span className="font-bold text-white text-base">7984190368</span>
                </div>
              </a>

              <div className="p-3 rounded-xl bg-[#181C24] border border-[#2B313E] flex flex-col gap-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C2272D] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    SHOP NO - 1140, Radhe Laser Studio,
                    <br />
                    Ognaj - Gota Rd, opposite side of Shell Petrol Pump, Gota, Ahmedabad, Gujarat,
                    India.
                  </p>
                </div>
                <a
                  href="https://share.google/JpWNuxXYPa3LG8EFx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 pl-8 pt-1"
                >
                  <span>Get Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 px-1 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Local Customization Studio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Official Studio Ownership Credit */}
        <div className="pt-8 mt-4 border-t border-[#1E232E] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© 2026 Radhe Laser Studio. All Rights Reserved.</p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <p className="font-medium text-slate-300">
              Website Created by{' '}
              <strong className="font-bold text-white tracking-wide">Radhe Laser Studio</strong>
            </p>
          </div>

          <div className="flex items-center gap-5 text-xs text-slate-500">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
              Gota, Ahmedabad
            </span>
            <span className="text-slate-600">•</span>
            <Link
              to="/admin"
              className="text-[11px] font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
