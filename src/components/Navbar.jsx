import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Tagline */}
          <Link to="/" className="group">
            <Logo variant="dark" size="md" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive(link.path)
                    ? 'text-[#C2272D] bg-red-50 font-bold'
                    : 'text-slate-700 hover:text-[#C2272D] hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20want%20to%20discuss%20a%20laser%20cutting%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl border-2 border-emerald-500 hover:border-emerald-600 bg-white hover:bg-emerald-50/50 text-slate-900 text-sm font-extrabold transition-all shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 stroke-[2.2]" />
              <span>WhatsApp Us</span>
            </a>

            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm text-white bg-[#C2272D] hover:bg-[#A81C21] shadow-md shadow-red-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/quote"
              className="text-xs font-bold px-3 py-2 rounded-lg bg-[#C2272D] text-white"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-black border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between ${
                  isActive(link.path)
                    ? 'text-[#C2272D] bg-red-50'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </nav>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
            <a
              href="https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20want%20to%20discuss%20a%20laser%20cutting%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white border-2 border-emerald-500 text-slate-900 text-sm font-extrabold hover:bg-emerald-50/50 transition-colors shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 stroke-[2.2]" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              to="/quote"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#C2272D] text-white text-sm font-bold"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
