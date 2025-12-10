import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { CAATPage } from './CAATPage';
import { Footer } from './Footer';
import { About } from './About';
import { HowItWorks } from './HowItWorks';
import { ServicesPage } from './ServicesPage';
import { ServiceDetail } from './ServiceDetail';
import { Portfolio } from './Portfolio';
import { Pricing } from './Pricing';
import { Blog } from './Blog';
import { ContactSection } from './Contact';
import LiquidEther from './LiquidEther';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ContactPage = () => (
  <div className="pt-32">
    <ContactSection />
  </div>
);

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0 }}>
        <LiquidEther
            colors={['#fff7ed', '#fed7aa', '#f97316']}
        />
      </div>
      <div className="relative flex flex-col min-h-screen z-10 bg-transparent">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/caat" element={<CAATPage />} />
            <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);