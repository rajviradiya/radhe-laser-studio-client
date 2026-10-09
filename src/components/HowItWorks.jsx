import React from 'react';
import { processSteps } from '../data/servicesData';
import { Link } from 'react-router-dom';
import { ArrowRight, Workflow } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header matching Figma */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            How It Works
          </h2>
          <p className="text-slate-600 text-sm">
            From your concept or vector drawing to finished laser cut fabrication in 4 clear steps.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-white border border-slate-200 hover:border-red-400 p-6 flex flex-col justify-between transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-black text-[#C2272D] block mb-4 font-mono">
                  {step.step}
                </span>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5">{step.title}</h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress connector indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-bold">
                <span>Stage {step.step}</span>
                <span className="text-[#C2272D]">Step {idx + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Project CTA */}
        <div className="text-center">
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#C2272D] hover:bg-[#A81C21] text-white font-extrabold text-sm shadow-xl shadow-red-600/20 transition-all transform hover:-translate-y-0.5"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
