import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TopContactBar } from './components/TopContactBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileContactBar } from './components/MobileContactBar';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { AdminPage } from './pages/AdminPage';

export const App = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* Client layout headers */}
      {!isAdmin && <TopContactBar />}
      {!isAdmin && <Navbar />}

      {/* Main content view */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/work" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Client layout footers & floating tools */}
      {!isAdmin && <Footer />}
      {!isAdmin && <FloatingWhatsApp />}
      {!isAdmin && <MobileContactBar />}
    </div>
  );
};

export default App;
