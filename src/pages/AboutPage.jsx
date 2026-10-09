import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { WhyUs } from '../components/WhyUs';
import { FinalCTA } from '../components/FinalCTA';
import { MapPin, MessageCircle, ArrowRight, Zap, ShieldCheck, ExternalLink } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="About Radhe Laser Studio | Custom Laser Cutting Ahmedabad"
        description="Learn about Radhe Laser Studio, our custom CO₂ laser cutting and fabrication studio serving Ahmedabad on Ognaj-Gota Road."
        canonical="https://radhelaserstudio.com/about"
      />

      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            About Radhe Laser Studio
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Professional CO₂ laser cutting, engraving, and customization studio based in Gota,
            Ahmedabad.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Precision • Creativity • Customization
            </h2>

            {/* Studio Overview */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Radhe Laser Studio is a custom laser cutting and fabrication studio serving
              individuals, businesses, designers, event professionals and organizations in
              Ahmedabad.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We work on custom CO₂ laser cutting, engraving, acrylic and MDF products, signage,
              branding, décor, personalized products, prototypes and bulk production.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Customers can share a design, reference image, dimensions or simply an idea, and our
              team can discuss the suitable production approach.
            </p>

            {/* Project Inquiries */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#C2272D] hover:bg-[#A81C21] text-white font-extrabold text-sm shadow-xl shadow-red-600/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20would%20like%20to%20discuss%20a%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50/40 border-2 border-emerald-500 hover:border-emerald-600 text-slate-900 text-sm font-extrabold transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 stroke-[2.2]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Location quick link */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2 mt-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C2272D] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  <strong>Studio Address:</strong> SHOP NO - 1140, Radhe Laser Studio, Ognaj - Gota
                  Rd, opposite side of Shell Petrol Pump, Gota, Ahmedabad, Gujarat, India.
                </p>
              </div>
              <a
                href="https://share.google/JpWNuxXYPa3LG8EFx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C2272D] hover:underline pl-8"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Visual Column: Figma 3-Image Collage */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=85"
                  alt="Corporate Reception 3D Signage"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=85"
                  alt="Precision Laser Cut MDF Lattice"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=85"
                alt="CO2 Laser Cutting bed in Ahmedabad"
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#C2272D] uppercase tracking-wider">
                    Ahmedabad Workshop
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">Gota Studio</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Calibrated High-Precision Equipment
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Equipped with commercial CO₂ laser systems capable of clean cuts on acrylic, MDF,
                  natural wood, and laser-compatible materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Radhe Laser Studio */}
      <WhyUs />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};
