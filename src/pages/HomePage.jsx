import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { QuickServices } from '../components/QuickServices';
import { WhatWeDo } from '../components/WhatWeDo';
import { Materials } from '../components/Materials';
import { FeaturedWork } from '../components/FeaturedWork';
import { WhyUs } from '../components/WhyUs';
import { HowItWorks } from '../components/HowItWorks';
import { CustomProducts } from '../components/CustomProducts';
import { BulkOrders } from '../components/BulkOrders';
import { FAQAccordion } from '../components/FAQAccordion';
import { FinalCTA } from '../components/FinalCTA';
import { LocationSection } from '../components/LocationSection';

export const HomePage = () => {
  return (
    <>
      <SEOHead
        title="Radhe Laser Studio"
        description="Professional CO₂ laser cutting, engraving, acrylic work, MDF products, signage, branding, décor and customized products in Gota, Ahmedabad."
        canonical="https://radhelaserstudio.com/"
      />
      {/* 3. Hero */}
      <Hero />

      {/* 4. Main services */}
      <QuickServices />

      {/* 5. What we do */}
      <WhatWeDo />

      {/* 6. Materials */}
      <Materials />

      {/* 7. Featured work */}
      <FeaturedWork showAll={false} />

      {/* 8. Why Radhe Laser Studio */}
      <WhyUs />

      {/* 9. How it works */}
      <HowItWorks />

      {/* 10. Custom products */}
      <CustomProducts />

      {/* 11. Bulk orders */}
      <BulkOrders />

      {/* 12. Final CTA Banner */}
      <FinalCTA />

      {/* 13. FAQ Accordion */}
      <FAQAccordion />

      {/* 14. Studio Location Section matching Figma bottom */}
      <LocationSection />
    </>
  );
};
