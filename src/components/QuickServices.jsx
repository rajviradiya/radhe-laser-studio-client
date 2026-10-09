import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Crosshair, Layers, Box, Building2, PartyPopper, Sparkles } from 'lucide-react';

export const QuickServices = () => {
  const quickServices = [
    {
      title: 'CO₂ Laser Cutting',
      description: 'Precision cutting and engraving for suitable materials.',
      link: '/services/co2-laser-cutting',
      icon: Crosshair,
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=85',
      tag: 'Sheet Cutting',
    },
    {
      title: 'Acrylic Work',
      description: 'Acrylic letters, logos, name plates, displays and custom products.',
      link: '/services/acrylic-work',
      icon: Layers,
      image:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=85',
      tag: 'Letters & Logos',
    },
    {
      title: 'MDF & Wood Products',
      description: 'Custom MDF cutouts, décor, panels, stencils and personalized products.',
      link: '/services/mdf-wood-products',
      icon: Box,
      image:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
      tag: 'Décor & Jali',
    },
    {
      title: 'Signage & Branding',
      description: 'Shop signs, office branding, reception logos and display products.',
      link: '/services/signage-branding',
      icon: Building2,
      image:
        'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=85',
      tag: 'Corporate 3D',
    },
    {
      title: 'Event Décor',
      description: 'Custom décor, event signs, wedding products and decorative cutouts.',
      link: '/services/event-decor',
      icon: PartyPopper,
      image:
        'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=85',
      tag: 'Weddings & Neon',
    },
    {
      title: 'Custom Products',
      description: 'Personalized products, gifts, prototypes and custom designs.',
      link: '/services/custom-gifts',
      icon: Sparkles,
      image:
        'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85',
      tag: 'Bespoke Orders',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading matching Figma */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Quick Services
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Direct fabrication and precision cutting services suited for individuals, architects,
            interior designers, and corporate branding.
          </p>
        </div>

        {/* 6 Cards Grid matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickServices.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white border border-slate-200 hover:border-red-400 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm"
              >
                {/* Image top */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Floating badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/90 backdrop-blur-md text-[#C2272D] shadow-sm">
                    {card.tag}
                  </span>

                  {/* Icon badge */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center text-[#C2272D]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#C2272D] transition-colors mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  <Link
                    to={card.link}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-slate-50 hover:bg-[#C2272D] text-slate-700 hover:text-white text-sm font-bold border border-slate-200 group-hover:border-red-300 transition-all"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
