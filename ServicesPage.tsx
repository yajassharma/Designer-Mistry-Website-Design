import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Hammer, Users, ShoppingCart, Droplets, Zap, Sparkles, Paintbrush, Armchair, HardHat, BrickWall, Ruler } from 'lucide-react';
import { useAIImage } from './useAIImage';

const services = [
  { 
    id: 'construction', 
    name: "Turnkey Construction", 
    icon: Hammer, 
    desc: "From ground-breaking to handover, we execute complete civil structures with precision BOQ tracking.",
    prompt: "Construction site wide angle, raw concrete structure, cranes, blue sky, cinematic",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2"
  },
  { 
    id: 'design', 
    name: "Interior Design", 
    icon: Armchair, 
    desc: "Immersive 3D visualization and execution.",
    prompt: "Luxury modern living room interior, bright sunlight, minimal furniture, photorealistic",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2"
  },
  { 
    id: 'material', 
    name: "Material Store", 
    icon: ShoppingCart, 
    desc: "Direct-from-factory pricing on verified supplies.",
    prompt: "Organized warehouse of construction materials, bricks, cement, industrial aesthetic",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  { 
    id: 'manpower', 
    name: "Manpower", 
    icon: Users, 
    desc: "Verified skilled labor marketplace.",
    prompt: "Construction workers team portrait, safety gear, professional, bright",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  { 
    id: 'plumbing', 
    name: "Plumbing", 
    icon: Droplets, 
    desc: "Expert piping & fixtures.",
    prompt: "Modern bathroom plumbing fixtures close up, chrome, water drops, clean",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  { 
    id: 'electrical', 
    name: "Electrical", 
    icon: Zap, 
    desc: "Safe, certified wiring.",
    prompt: "Electrical circuit board close up, glowing lights, technology abstract",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  { 
    id: 'painting', 
    name: "Painting", 
    icon: Paintbrush, 
    desc: "Premium finishes.",
    prompt: "Wall painting texture, bright colors, artistic stroke, macro",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  { 
    id: 'cleaning', 
    name: "Deep Cleaning", 
    icon: Sparkles, 
    desc: "Move-in ready.",
    prompt: "Sparkling clean empty room, bright windows, sunshine, white floor",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  }
];

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const { imageUrl } = useAIImage(service.prompt, true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-3xl bg-slate-100 ${service.colSpan} ${service.rowSpan} min-h-[300px] border border-slate-200 hover:shadow-2xl transition-all duration-500`}
    >
      {/* Background Image with Reveal Effect */}
      <div className="absolute inset-0 z-0">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={service.name} 
            className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-100 group-hover:scale-110" 
          />
        ) : (
          <div className="w-full h-full bg-slate-200" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white group-hover:via-black/20 group-hover:to-black/80 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
            <service.icon className="w-6 h-6" />
          </div>
          <Link 
            to={`/services/${service.id}`}
            className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white/20 backdrop-blur text-white hover:bg-white hover:text-black"
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div>
          <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-white transition-colors duration-300 mb-2">
            {service.name}
          </h3>
          <p className="text-slate-600 group-hover:text-white/80 transition-colors duration-300 text-sm leading-relaxed max-w-[90%]">
            {service.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesPage = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
       {/* Header Section */}
       <div className="max-w-[1400px] mx-auto px-6 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest mb-6">
                <HardHat className="w-3 h-3" /> Comprehensive Solutions
             </div>
             <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-tight">
               Mastering Every <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Dimension</span> of Build.
             </h1>
             <p className="text-xl text-slate-600 leading-relaxed">
               Designer Mistri isn't just an app—it's a complete ecosystem. We integrate the fragmented construction supply chain into a single, intelligent workflow.
             </p>
          </motion.div>
       </div>

       {/* Bento Grid */}
       <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 mb-32">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
       </div>

       {/* Stats Strip */}
       <div className="bg-slate-900 py-20 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[150px]" />
             <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-blue-500 rounded-full blur-[150px]" />
          </div>
          
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10 text-center">
             {[
               { label: "Projects Delivered", value: "500+" },
               { label: "Active Sites", value: "42" },
               { label: "Vendor Partners", value: "150+" },
               { label: "Quality Checks", value: "470" }
             ].map((stat, i) => (
               <div key={i}>
                 <div className="text-4xl md:text-5xl font-serif text-white mb-2">{stat.value}</div>
                 <div className="text-orange-500 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
               </div>
             ))}
          </div>
       </div>

       {/* Bottom CTA */}
       <div className="py-32 text-center bg-slate-50">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-4xl font-serif text-slate-900 mb-6">Ready to start your journey?</h2>
            <p className="text-slate-600 mb-8">Get a precise BOQ and start your project with zero friction.</p>
            <div className="flex justify-center gap-4">
               <Link to="/contact" className="px-8 py-4 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30">
                 Start a Project
               </Link>
               <Link to="/pricing" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
                 View Pricing
               </Link>
            </div>
          </div>
       </div>
    </div>
  );
};