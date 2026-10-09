import React from 'react';
import { materialsList } from '../data/servicesData';
import { AlertCircle, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Materials = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Materials We Work With
          </h2>
          <p className="text-slate-600 text-sm">
            We work with verified laser-compatible sheet materials engineered to provide clean cut
            edges and precise vector engraving.
          </p>
        </div>

        {/* 5 Material Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
          {materialsList.map((mat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 hover:border-red-400 p-5 flex flex-col justify-between transition-all group shadow-sm hover:shadow-md"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-50 text-[#C2272D] border border-red-200 mb-3 inline-block">
                  {mat.highlight}
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#C2272D] transition-colors mb-2">
                  {mat.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{mat.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px]">
                <div className="flex justify-between text-slate-500">
                  <span>Thickness:</span>
                  <span className="font-bold text-slate-800">{mat.thickness}</span>
                </div>
                <div className="text-slate-500">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    Finishes:
                  </span>
                  <span className="text-slate-700 truncate block font-medium">{mat.finishes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Material Compatibility Guidance */}
        <div className="rounded-2xl bg-red-50 border border-red-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3.5">
            <AlertCircle className="w-6 h-6 text-[#C2272D] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">Important Material Note</h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-0.5">
                Material compatibility depends on material type, composition and thickness. Send us
                your requirement and we can confirm feasibility.
              </p>
            </div>
          </div>

          <Link
            to="/quote"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#C2272D] hover:bg-[#A81C21] text-white font-bold text-xs transition-all shadow-md shadow-red-600/20"
          >
            Check My Material
          </Link>
        </div>
      </div>
    </section>
  );
};
