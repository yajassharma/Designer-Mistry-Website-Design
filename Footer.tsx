import React from 'react';
import { Smartphone, Play } from 'lucide-react';
import { MistriLogo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div className="max-w-md">
            <MistriLogo className="w-16 h-16 mb-8" />
            <h2 className="text-4xl font-serif text-white mb-6">Constructing the future.</h2>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-all flex items-center gap-2">
                <Smartphone className="w-4 h-4" /> App Store
              </button>
              <button className="border border-white/20 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2">
                <Play className="w-4 h-4 fill-current" /> Google Play
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 mt-12 md:mt-0">
            <div>
              <h4 className="text-white font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CAAT Engine</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-white/30 text-xs">
          <p>© 2024 Designer Mistri. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy</a>
             <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
