import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Smartphone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MistriLogo } from './Logo';
import GlassSurface from './GlassSurface';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'CAAT AI', path: '/caat' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-5 left-1/2 w-[95%] max-w-[1200px] z-50"
      >
        <GlassSurface
          width="100%"
          height={72}
          borderRadius={40}
          backgroundOpacity={0.6}
          blur={15}
          borderWidth={0.5}
          className="px-2 md:px-6 shadow-xl shadow-orange-500/10 border-orange-100/40"
          contentClassName="justify-between"
          brightness={110}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <MistriLogo className="w-9 h-9 group-hover:rotate-90 transition-transform duration-500" strokeColor="black" />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none tracking-tight font-sans text-slate-900">DESIGNER</span>
                <span className="text-xs font-bold leading-none font-sans text-orange-600" style={{ fontFamily: '"Playfair Display", serif' }}>MISTRI</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Removed pill container styling */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 z-10 ${
                    isActive 
                      ? 'text-orange-700' 
                      : 'text-slate-600 hover:text-orange-600'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/80 rounded-full -z-10 shadow-sm border border-orange-100/50"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center">
              <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-lg hover:bg-black transition-all transform hover:scale-105 border border-white/10 flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Download App
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="xl:hidden z-50 text-slate-900 p-2.5 bg-white/50 hover:bg-orange-100 rounded-full transition-colors backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </GlassSurface>
      </motion.nav>

       {/* Mobile Menu Overlay */}
       <div className={`fixed inset-0 bg-[#fffcf8]/95 backdrop-blur-xl z-40 xl:hidden flex flex-col justify-center items-center transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-6 text-center">
           {navLinks.map((link) => (
             <Link 
               key={link.name} 
               to={link.path} 
               onClick={() => setMobileMenuOpen(false)}
               className="text-2xl font-serif text-slate-800 hover:text-orange-500 transition-colors"
             >
               {link.name}
             </Link>
           ))}
           <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold mt-4 shadow-xl shadow-orange-500/20 flex items-center gap-2 mx-auto">
             <Smartphone className="w-5 h-5" />
             Download App
           </button>
        </div>
      </div>
    </>
  );
};