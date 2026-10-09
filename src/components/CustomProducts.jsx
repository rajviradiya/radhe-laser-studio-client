import React, { useState } from 'react';
import { featuredProducts } from '../data/productsData';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, X, MessageCircle, FileText } from 'lucide-react';

export const CustomProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Custom Products
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              Popular made-to-order products customized with individual dimensions, colors, logos,
              and materials.
            </p>
          </div>

          <Link
            to="/quote"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#C2272D] hover:underline transition-colors"
          >
            <span>Have a custom product idea? Request quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 10 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {featuredProducts.map((prod) => (
            <div
              key={prod.id}
              className="rounded-2xl bg-white border border-slate-200 hover:border-red-400 overflow-hidden flex flex-col justify-between transition-all group hover:-translate-y-1 shadow-sm hover:shadow-lg"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-white text-[#C2272D] shadow-sm">
                    {prod.category}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#C2272D] transition-colors mb-1.5">
                    {prod.name}
                  </h3>
                  <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed mb-3 font-medium">
                    {prod.description}
                  </p>
                  <p className="text-[10px] font-semibold text-slate-500">
                    Material: <span className="text-slate-800 font-bold">{prod.material}</span>
                  </p>
                </div>
              </div>

              {/* View Details / Enquire Button */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-[#C2272D] hover:text-white text-slate-700 text-xs font-bold border border-slate-200 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>View Details / Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Details & Enquiry Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
            <div className="relative max-w-lg w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <span className="text-xs font-bold text-[#C2272D] uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1 mb-2">
                  {selectedProduct.name}
                </h3>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-5">
                  <span className="text-xs font-bold text-slate-800 block mb-1.5">
                    Specifications & Highlights:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600 font-medium">
                    {selectedProduct.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C2272D]"></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={`https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20am%20enquiring%20about%20${encodeURIComponent(selectedProduct.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] text-black font-bold text-xs shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Enquiry</span>
                  </a>

                  <Link
                    to={`/quote?product=${encodeURIComponent(selectedProduct.name)}`}
                    onClick={() => setSelectedProduct(null)}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#C2272D] text-white font-bold text-xs shadow-sm"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request Quote</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
