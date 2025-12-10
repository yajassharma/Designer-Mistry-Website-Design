import React, { useState } from 'react';
import { Hero } from './Hero';
import { ServicesSection } from './Services';
import { CAATSection } from './CAAT';
import { DPRSection } from './DPR';
import { ContactSection } from './Contact';
import { CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyChooseUs = () => (
  <section className="py-24 bg-slate-50/50 backdrop-blur-sm">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-orange-500 font-mono text-sm tracking-widest uppercase block mb-4">Why Designer Mistri</span>
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900">The New Standard in Construction</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Transparent Pricing", desc: "No hidden costs. Real-time rates from our Material Store and Manpower Marketplace." },
          { title: "AI-Driven Precision", desc: "CAAT Engine ensures 99.8% accuracy in BOQ estimation and scheduling." },
          { title: "Verified Quality", desc: "Every step is monitored via Drone feeds and automated Quality Checks." }
        ].map((item, i) => (
          <div key={i} className="bg-white/80 p-8 rounded-xl shadow-sm border border-slate-100 hover:border-orange-200 transition-colors backdrop-blur">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-500">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <DPRSection />
      <CAATSection />
      <ContactSection />
    </>
  );
};