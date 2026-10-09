import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Sparkles, Filter, X } from 'lucide-react';
import { api } from '../services/api';

const fallbackPortfolio = [
  {
    _id: 'port-1',
    title: 'Precision Laser Cut Geometric Panels',
    category: 'Laser Cutting',
    material: '3.5mm Cast Acrylic & MDF',
    description:
      'High-tolerance CO₂ laser cut decorative pattern panels for interior architectural application in Ahmedabad.',
    imageUrl:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=85',
  },
  {
    _id: 'port-2',
    title: 'Corporate Reception 3D Acrylic Logo',
    category: 'Signage',
    material: 'Gold Mirror Acrylic on 5mm Matte Black Backing',
    description:
      'Dual-layer precision laser cut corporate reception branding with clean bevel and wall standoff mounts.',
    imageUrl:
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=85',
  },
  {
    _id: 'port-3',
    title: 'Dimensional Solid Acrylic Letters',
    category: 'Acrylic',
    material: '8mm High-Gloss Cast Acrylic',
    description:
      'Crisp laser contoured typography with laser polished edges for showroom entry display.',
    imageUrl:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=85',
  },
  {
    _id: 'port-4',
    title: 'Laser Carved MDF Jali Décor Screen',
    category: 'MDF',
    material: '12mm High-Density Engineered MDF',
    description:
      'Complex lattice cut pattern without edge burn, calibrated for residential partition installation.',
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
  },
  {
    _id: 'port-5',
    title: 'Custom Acrylic Villa Name Plate',
    category: 'Name Plates',
    material: 'Frosted Acrylic + Rose Gold Mirror Accents',
    description:
      'Customized residential entrance name plate with weatherproof laser engraving and brass hardware.',
    imageUrl:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85',
  },
  {
    _id: 'port-6',
    title: 'Retail Storefront Backlit Acrylic Sign Board',
    category: 'Branding',
    material: 'Translucent White Acrylic + Black Acrylic Borders',
    description:
      'Durable illuminated retail fascia lettering prepared for LED backlighting and weather exposure.',
    imageUrl:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=85',
  },
  {
    _id: 'port-7',
    title: 'Custom LED Flex Neon Event Sign',
    category: 'Décor',
    material: 'Laser Cut Clear Acrylic Backing + Silicone Neon',
    description:
      'Contour-cut transparent acrylic base with warm amber neon tubing for wedding and stage backdrop.',
    imageUrl:
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=85',
  },
  {
    _id: 'port-8',
    title: 'Laser Engraved Wooden Corporate Desktop Organizers',
    category: 'Gifts',
    material: 'Natural Steamed Beechwood & Birch Ply',
    description:
      'Batch engraved employee onboarding gift set with individual name customization and sharp contrast.',
    imageUrl:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85',
  },
  {
    _id: 'port-9',
    title: 'High-Tolerance Prototype Laser Components',
    category: 'Custom Products',
    material: '2mm Precision Acrylic & Engineered Plywood',
    description:
      'Reusable high-detail laser cut components for architectural scale models and industrial prototyping.',
    imageUrl:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=85',
  },
];

export const FeaturedWork = ({ showAll = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [portfolioItems, setPortfolioItems] = useState(fallbackPortfolio);
  const [activeModalItem, setActiveModalItem] = useState(null);

  const categories = [
    'All',
    'Laser Cutting',
    'Acrylic',
    'MDF',
    'Signage',
    'Branding',
    'Name Plates',
    'Décor',
    'Gifts',
    'Custom Products',
  ];

  useEffect(() => {
    api
      .getPortfolio()
      .then((data) => {
        if (data && data.success && data.portfolio?.length > 0) {
          setPortfolioItems(data.portfolio);
        }
      })
      .catch(() => {
        // Retains fallbackPortfolio seamlessly
      });
  }, []);

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const displayItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header matching Figma */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Work
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              Photographs of actual laser cutting, acrylic shaping, signage, and custom fabrication
              executed for clients across Ahmedabad.
            </p>
          </div>

          <Link
            to="/quote"
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C2272D] hover:bg-[#A81C21] text-white text-xs font-bold transition-all shadow-md shadow-red-600/20"
          >
            <span>Want Something Similar? Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#C2272D] text-white shadow-md shadow-red-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-black border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item) => (
            <div
              key={item._id}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-red-400 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image with zoom trigger */}
              <div
                className="relative h-60 overflow-hidden cursor-pointer bg-slate-100"
                onClick={() => setActiveModalItem(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>

                {/* Category tag */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-white text-[#C2272D] shadow-sm">
                  {item.category}
                </span>

                {/* Inspect button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-[#C2272D]" />
                    <span>View Details</span>
                  </span>
                </div>
              </div>

              {/* Item Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#C2272D] transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <div className="inline-block text-[11px] font-medium text-slate-600 mb-2">
                    Material: <span className="text-[#C2272D] font-bold">{item.material}</span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">
                    Custom Made to Order
                  </span>
                  <Link
                    to={`/quote?service=${encodeURIComponent(item.category)}&product=${encodeURIComponent(item.title)}`}
                    className="text-xs font-bold text-[#C2272D] hover:text-[#A81C21] flex items-center gap-1"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button if not on full work page */}
        {!showAll && (
          <div className="mt-12 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 text-sm font-bold transition-all"
            >
              <span>View All Portfolio Items</span>
              <ArrowRight className="w-4 h-4 text-[#C2272D]" />
            </Link>
          </div>
        )}

        {/* Modal for item inspection */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
            <div className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                className="w-full h-72 sm:h-80 object-cover"
              />

              <div className="p-6">
                <span className="text-xs font-bold text-[#C2272D] uppercase tracking-wider">
                  {activeModalItem.category}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1 mb-2">
                  {activeModalItem.title}
                </h3>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-4">
                  <span className="text-[#C2272D] font-bold">Material Specification: </span>
                  {activeModalItem.material}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {activeModalItem.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20am%20interested%20in%20a%20project%20like%20${encodeURIComponent(activeModalItem.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <Link
                    to={`/quote?service=${encodeURIComponent(activeModalItem.category)}&product=${encodeURIComponent(activeModalItem.title)}`}
                    onClick={() => setActiveModalItem(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#C2272D] text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
