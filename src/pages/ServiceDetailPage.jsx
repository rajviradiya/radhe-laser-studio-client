import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { servicesList } from '../data/servicesData';
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export const ServiceDetailPage = () => {
  const { slug } = useParams();

  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = servicesList.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={`${service.title} in Ahmedabad`}
        description={`${service.description} High-tolerance laser fabrication at Radhe Laser Studio, Gota, Ahmedabad.`}
        canonical={`https://radhelaserstudio.com/services/${service.slug}`}
      />

      {/* Breadcrumb Bar */}
      <div className="border-b border-slate-200 bg-slate-50 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link to="/" className="hover:text-[#C2272D] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/services" className="hover:text-[#C2272D] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#C2272D] font-bold">{service.title}</span>
        </div>
      </div>

      {/* Service Hero */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.title} <span className="text-[#C2272D]">Ahmedabad</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                {service.description}
              </p>

              {/* Direct CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to={`/quote?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#C2272D] hover:bg-[#A81C21] text-white font-extrabold text-sm shadow-xl shadow-red-600/20 transition-all"
                >
                  <span>Get a Quote for {service.shortTitle}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20want%20to%20discuss%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 text-sm font-bold transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Local studio reassurance */}
              <div className="flex items-center gap-4 pt-2 text-xs text-slate-500 font-semibold">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Studio on Ognaj-Gota Rd
                </span>
                <span>•</span>
                <span>Prototypes & Bulk Orders Welcome</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                <img
                  src={service.heroImage}
                  alt={`${service.title} in Ahmedabad`}
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white">
                  <p className="text-[11px] text-red-400 font-bold uppercase">
                    Material Compatibility
                  </p>
                  <p className="text-xs text-slate-200 mt-1 font-medium">
                    {service.materials.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Applications Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Capabilities Card */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 text-xs font-bold text-[#C2272D] uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4 text-[#C2272D]" />
              <span>Service Capabilities</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
              What We Fabricate & Deliver
            </h2>
            <ul className="space-y-3">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C2272D] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications Card */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 text-xs font-bold text-[#C2272D] uppercase tracking-widest mb-4">
              <Layers className="w-4 h-4 text-[#C2272D]" />
              <span>Use Cases & Industries</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Common Applications</h2>
            <ul className="space-y-3">
              {service.applications.map((app, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#C2272D] shrink-0 mt-2"></span>
                  <span>{app}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-red-50 border border-red-200">
              <span className="text-xs font-bold text-[#C2272D] block mb-1">
                Material Compatibility Note
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Material compatibility depends on material type, composition and thickness. Send us
                your requirement and we can confirm feasibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-lg font-bold text-slate-900 mb-6">
            Other Custom Fabrication Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                to={`/services/${other.slug}`}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-red-400 p-5 transition-all shadow-sm hover:shadow-md"
              >
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#C2272D] transition-colors mb-1">
                  {other.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 mb-3">{other.description}</p>
                <span className="text-xs font-bold text-[#C2272D] flex items-center gap-1">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
