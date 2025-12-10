import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useAIImage } from './useAIImage';

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  prompt: string;
}

const servicesData: ServiceItem[] = [
  { id: 'construction', title: "Construction Cell", desc: "Complete execution via bidding.", prompt: "Construction site wide angle, raw concrete, cranes, blue sky" },
  { id: 'design', title: "Interior Design", desc: "3D concepts & portfolio based hiring.", prompt: "Bright luxury modern living room interior, minimal furniture, sunlight" },
  { id: 'material', title: "Material Store", desc: "Live local prices from verified vendors.", prompt: "Organized warehouse of construction materials, bricks, cement, bright industrial aesthetic" },
  { id: 'manpower', title: "Manpower Cell", desc: "Skilled labour at area-wise rates.", prompt: "Portrait of a construction worker in safety gear, confident smile, bright site background" },
  { id: 'plumbing', title: "Plumbing Services", desc: "Book jobs with rate transparency.", prompt: "Macro shot of copper plumbing pipes and modern fixtures, clean background" },
  { id: 'electrical', title: "Electrical Work", desc: "Scope & price predefined experts.", prompt: "Abstract electrical wiring, glowing circuits, white background technology" },
];

interface ServiceRowProps {
  service: ServiceItem;
  setActive: (s: ServiceItem) => void;
  isActive: boolean;
}

const ServiceRow: React.FC<ServiceRowProps> = ({ service, setActive, isActive }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActive(service);
    }
  }, [isInView, service, setActive]);

  return (
    <motion.div 
      ref={ref}
      onMouseEnter={() => setActive(service)}
      className={`group cursor-pointer border-t border-slate-200/50 py-10 flex items-center justify-between transition-all duration-300 backdrop-blur-sm ${isActive ? 'opacity-100 pl-4 bg-white/60' : 'opacity-60 hover:opacity-100'}`}
    >
      <div className="flex items-baseline gap-6">
        <span className="text-sm font-mono text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">0{servicesData.indexOf(service) + 1}</span>
        <h3 className={`text-3xl md:text-5xl font-serif transition-colors ${isActive ? 'text-black italic' : 'text-slate-400 group-hover:text-slate-900'}`}>
          {service.title}
        </h3>
      </div>
      <p className="hidden md:block text-sm text-slate-500 max-w-xs text-right group-hover:text-slate-800 transition-colors">
        {service.desc}
      </p>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState<ServiceItem>(servicesData[0]);
  const { imageUrl, generate } = useAIImage(activeService.prompt);
  const prevServiceRef = useRef(activeService.id);

  useEffect(() => {
    if (prevServiceRef.current !== activeService.id) {
       generate();
       prevServiceRef.current = activeService.id;
    }
  }, [activeService]);

  // Initial load
  useEffect(() => { generate(); }, []);

  return (
    <section id="projects" className="relative bg-white/50 backdrop-blur-sm py-24">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Sticky Visual Side */}
        {/* Mobile: Sticky at top (offset by navbar), Height 45vh */}
        {/* Desktop: Sticky at top-24, Height 80vh */}
        <div className="order-1 lg:order-1 relative h-[45vh] lg:h-[80vh] w-full sticky top-20 lg:top-24 rounded-2xl overflow-hidden shadow-2xl z-0">
          <AnimatePresence mode="wait">
            {imageUrl ? (
              <motion.img 
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                src={imageUrl}
                alt={activeService.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
               <div className="w-full h-full bg-slate-100 animate-pulse" />
            )}
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8">
             <span className="bg-white/90 backdrop-blur px-3 py-1 rounded text-xs uppercase tracking-widest text-slate-900 border border-white shadow-sm font-bold">
               Interactive Visualizer
             </span>
          </div>
        </div>

        {/* Content Side */}
        <div className="order-2 lg:order-2 flex flex-col justify-center z-10 lg:py-0">
          <div className="mb-16 bg-white/80 backdrop-blur-md p-6 rounded-xl lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
             <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">Our Ecosystem</h2>
             <p className="text-4xl font-serif text-slate-900 mb-6">The 8 Integrated Service Cells</p>
             <p className="text-slate-600 leading-relaxed max-w-md">
               From raw materials to the final coat of paint, Designer Mistri connects every stakeholder in the ecosystem through a unified workflow.
             </p>
          </div>

          <div className="flex flex-col pb-32 lg:pb-0">
            {servicesData.map((s) => (
              <ServiceRow 
                key={s.id} 
                service={s} 
                setActive={setActiveService}
                isActive={activeService.id === s.id}
              />
            ))}
          </div>
          <div className="mt-8 border-t border-slate-200 pt-4 text-right">
             <a href="#" className="text-slate-500 hover:text-orange-500 text-sm transition-colors flex items-center justify-end gap-2 font-medium">
               View All Services <ArrowRight className="w-4 h-4" />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};