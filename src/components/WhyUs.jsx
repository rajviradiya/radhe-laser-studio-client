import React from 'react';
import { whyChooseUs } from '../data/servicesData';
import { Sliders, Compass, Package, Grid, MapPin, Cpu, CheckCircle2 } from 'lucide-react';

export const WhyUs = () => {
  const iconMap = [Sliders, Compass, Package, Grid, MapPin, Cpu];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header matching Figma */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Why Radhe Laser Studio
          </h2>
          <p className="text-slate-600 text-sm">
            We prioritize accurate dimensions, prompt feasibility review, and reliable local
            Ahmedabad production.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, idx) => {
            const Icon = iconMap[idx] || CheckCircle2;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 hover:bg-white p-6 flex flex-col justify-start transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100/60 border border-red-200 flex items-center justify-center text-[#C2272D] mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>

                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
