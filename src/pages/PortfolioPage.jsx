import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { FeaturedWork } from '../components/FeaturedWork';
import { FinalCTA } from '../components/FinalCTA';
import { Sparkles } from 'lucide-react';

export const PortfolioPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Our Work & Portfolio | Laser Cutting Gallery Ahmedabad"
        description="View our portfolio of precision CO₂ laser cutting, acrylic logos, MDF jali panels, signage, neon signs, and personalized gifts crafted in Ahmedabad."
        canonical="https://radhelaserstudio.com/work"
      />

      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Work Portfolio
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Browse genuine fabrication samples across acrylic, MDF, natural wood, mirrors, and
            signage manufactured at our Gota, Ahmedabad workshop.
          </p>
        </div>
      </section>

      {/* Full Gallery with All Category Filters */}
      <FeaturedWork showAll={true} />

      <FinalCTA />
    </div>
  );
};
