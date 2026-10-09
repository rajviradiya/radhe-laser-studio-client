import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ContactForm } from '../components/ContactForm';
import { MapPin } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Contact Us | Radhe Laser Studio Ahmedabad"
        description="Visit our studio on Ognaj-Gota Road, Ahmedabad or contact us via Phone or WhatsApp at 7984190368 for custom laser cutting quotes."
        canonical="https://radhelaserstudio.com/contact"
      />

      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Contact Radhe Laser Studio
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Have a project to discuss or need material advice? Reach us via phone, WhatsApp, or
            visit our studio in Gota, Ahmedabad.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <ContactForm />
      </section>
    </div>
  );
};
