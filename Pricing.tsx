import React, { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp, ShieldCheck, Zap, Crown, ArrowRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    id: 'silver',
    name: "Silver Package",
    price: "1,750",
    desc: "Essential quality for budget-friendly durable homes.",
    color: "bg-slate-100",
    textColor: "text-slate-600",
    icon: ShieldCheck,
    features: [
      "Steel: Rathi / Kamdhenu (Fe-500)",
      "Cement: Ambuja / ACC",
      "Flooring: Vitrified Tiles (₹50/sqft)",
      "Paint: Tractor Emulsion",
      "Electrical: Anchor / GreatWhite",
      "Plumbing: Supreme PVC"
    ]
  },
  {
    id: 'gold',
    name: "Gold Package",
    price: "2,100",
    desc: "The perfect balance of premium finish and smart cost.",
    color: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-500",
    icon: Zap,
    popular: true,
    features: [
      "Steel: Tata Tiscon / JSW (Fe-550)",
      "Cement: Ultratech Super",
      "Flooring: Premium Vitrified / Granite (₹100/sqft)",
      "Paint: Royal Luxury Emulsion",
      "Electrical: Havells / Polycab",
      "Plumbing: Astral / Ashirvad"
    ]
  },
  {
    id: 'platinum',
    name: "Platinum Package",
    price: "2,650",
    desc: "Luxury specifications for a timeless masterpiece.",
    color: "bg-slate-900",
    textColor: "text-white",
    icon: Crown,
    features: [
      "Steel: Tata Tiscon SD (Fe-550D)",
      "Cement: Ultratech Weather Plus",
      "Flooring: Italian Marble (₹350/sqft)",
      "Paint: Asian Paints Royale Aspira",
      "Electrical: Schneider / Legrand Automation",
      "Plumbing: Grohe / Kohler Fittings"
    ]
  }
];

const categories = [
  {
    name: "Structural & Civil",
    specs: [
      { name: "Steel Brand", silver: "Rathi / Kamdhenu", gold: "Tata Tiscon / JSW", platinum: "Tata Tiscon SD" },
      { name: "Cement Grade", silver: "PPC (Grade 43)", gold: "OPC (Grade 53)", platinum: "Premium Polymer Coated" },
      { name: "Brickwork", silver: "Standard Red Brick", gold: "Machine Made Red Brick", platinum: "AAC Blocks / Fly Ash" },
      { name: "Ceiling Height", silver: "10 Feet", gold: "10.5 Feet", platinum: "11 Feet" },
    ]
  },
  {
    name: "Flooring & Wall",
    specs: [
      { name: "Living Room", silver: "Vitrified Tiles (₹50)", gold: "Italian Design Tiles (₹120)", platinum: "Italian Marble (₹350)" },
      { name: "Bedroom", silver: "Ceramic Tiles", gold: "Wooden Flooring", platinum: "Engineered Wood" },
      { name: "Kitchen Slab", silver: "Black Granite", gold: "Quartz / Nano White", platinum: "Caesarstone" },
      { name: "Bathroom Wall", silver: "7ft Height Tiles", gold: "Ceiling Height Tiles", platinum: "Premium Large Format" },
    ]
  },
  {
    name: "Plumbing & Electrical",
    specs: [
      { name: "Sanitary Ware", silver: "Parryware / Hindware", gold: "Jaquar / Roca", platinum: "Kohler / Grohe" },
      { name: "CP Fittings", silver: "Standard Chrome", gold: "Diverters & Spouts", platinum: "Thermostatic Controllers" },
      { name: "Wires & Cables", silver: "Standard Copper", gold: "FR (Fire Retardant)", platinum: "FRLS (Low Smoke)" },
      { name: "Switches", silver: "Modular White", gold: "Premium Modular", platinum: "Touch / Automation" },
    ]
  },
  {
    name: "Woodwork & Finishing",
    specs: [
      { name: "Main Door", silver: "Flush Door + Laminate", gold: "Teak Wood Frame", platinum: "Burma Teak Carved" },
      { name: "Internal Doors", silver: "Flush Doors", gold: "Membrane Doors", platinum: "Veneer Finish" },
      { name: "Windows", silver: "Aluminum Slide", gold: "UPVC (White)", platinum: "UPVC (Wood Finish) / Alum" },
      { name: "Paint", silver: "Tractor Emulsion", gold: "Apcolite Premium", platinum: "Royale Play / PU Polish" },
    ]
  }
];

export const Pricing = () => {
  const [openCategory, setOpenCategory] = useState<string | null>("Structural & Civil");

  return (
    <div className="pt-32 bg-slate-50 min-h-screen">
       <div className="max-w-[1400px] mx-auto px-6 mb-20 text-center">
         <span className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4 block">/// TRANSPARENT PRICING</span>
         <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6">Built on Trust. Priced for You.</h1>
         <p className="text-xl text-slate-600 max-w-2xl mx-auto">
           Select a package that fits your vision. Every item is tracked in our CAAT engine to ensure zero cost overruns.
         </p>
       </div>

       {/* Cards Section */}
       <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative z-10">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative rounded-3xl p-8 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl ${
                plan.id === 'platinum' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 border border-slate-200'
              } ${plan.popular ? 'ring-2 ring-orange-500 shadow-xl shadow-orange-100' : ''}`}
            >
               {plan.popular && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                   Most Popular
                 </div>
               )}
               
               <div className="flex justify-between items-start mb-6">
                 <div className={`p-3 rounded-2xl ${plan.id === 'platinum' ? 'bg-white/10' : plan.color}`}>
                   <plan.icon className={`w-8 h-8 ${plan.id === 'platinum' ? 'text-orange-400' : plan.textColor}`} />
                 </div>
                 {plan.id === 'platinum' && <Crown className="w-6 h-6 text-yellow-500 fill-current" />}
               </div>

               <h3 className="text-2xl font-serif font-bold mb-2">{plan.name}</h3>
               <p className={`text-sm mb-6 ${plan.id === 'platinum' ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>

               <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-sm font-bold opacity-60">₹</span>
                  <span className="text-5xl font-sans font-bold tracking-tight">{plan.price}</span>
                  <span className="text-sm font-medium opacity-60">/ sq.ft</span>
               </div>

               <button className={`w-full py-4 rounded-xl font-bold mb-8 flex items-center justify-center gap-2 transition-all ${
                 plan.id === 'platinum' 
                   ? 'bg-gradient-to-r from-orange-400 to-orange-600 text-white hover:opacity-90' 
                   : plan.popular 
                     ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30' 
                     : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
               }`}>
                 Choose {plan.name.split(' ')[0]} <ArrowRight className="w-4 h-4" />
               </button>

               <div className="space-y-4">
                 <p className="text-xs font-bold uppercase tracking-widest opacity-50">Key Specifications</p>
                 {plan.features.map((feat, i) => (
                   <div key={i} className="flex items-start gap-3 text-sm">
                     <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.id === 'platinum' ? 'text-orange-400' : 'text-green-500'}`} />
                     <span className={plan.id === 'platinum' ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                   </div>
                 ))}
               </div>
            </div>
          ))}
       </div>

       {/* Comparison Table */}
       <div className="max-w-[1200px] mx-auto px-6 pb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-slate-900">Detailed Specification Comparison</h2>
            <p className="text-slate-500 mt-2">Drill down into the materials used in each package.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
             {/* Table Header - Hidden on Mobile */}
             <div className="hidden md:grid grid-cols-4 bg-slate-50 border-b border-slate-200 p-6">
                <div className="font-bold text-slate-900 uppercase text-xs tracking-widest">Category</div>
                <div className="font-bold text-slate-700 text-center">Silver</div>
                <div className="font-bold text-orange-600 text-center">Gold</div>
                <div className="font-bold text-slate-900 text-center">Platinum</div>
             </div>

             {/* Accordion Items */}
             {categories.map((cat, i) => (
               <div key={i} className="border-b border-slate-100 last:border-0">
                  <button 
                    onClick={() => setOpenCategory(openCategory === cat.name ? null : cat.name)}
                    className="w-full flex justify-between items-center p-6 hover:bg-slate-50 transition-colors md:hidden"
                  >
                    <span className="font-bold text-slate-900">{cat.name}</span>
                    {openCategory === cat.name ? <ChevronUp className="w-5 h-5 text-slate-400"/> : <ChevronDown className="w-5 h-5 text-slate-400"/>}
                  </button>
                  
                  {/* Desktop Title Row (Acts as separator) */}
                  <div className="hidden md:block px-6 py-3 bg-slate-50/50 border-b border-slate-100 text-xs font-bold uppercase tracking-widest text-slate-400">
                    {cat.name}
                  </div>

                  <AnimatePresence>
                    {(openCategory === cat.name || typeof window !== 'undefined' && window.innerWidth >= 768) && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                         <div className="divide-y divide-slate-100">
                           {cat.specs.map((spec, j) => (
                             <div key={j} className="grid grid-cols-1 md:grid-cols-4 p-6 gap-4 md:gap-0 hover:bg-slate-50/80 transition-colors">
                                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                  <Info className="w-3 h-3 text-slate-300" /> {spec.name}
                                </div>
                                <div className="text-sm text-slate-600 md:text-center pl-6 md:pl-0 border-l-2 md:border-l-0 border-slate-100">
                                  <span className="md:hidden text-xs font-bold text-slate-400 block mb-1">Silver:</span>
                                  {spec.silver}
                                </div>
                                <div className="text-sm text-slate-900 font-medium md:text-center pl-6 md:pl-0 border-l-2 md:border-l-0 border-orange-100 bg-orange-50/30 md:bg-transparent rounded md:rounded-none">
                                  <span className="md:hidden text-xs font-bold text-orange-400 block mb-1">Gold:</span>
                                  {spec.gold}
                                </div>
                                <div className="text-sm text-slate-800 md:text-center pl-6 md:pl-0 border-l-2 md:border-l-0 border-slate-900/10">
                                  <span className="md:hidden text-xs font-bold text-slate-900 block mb-1">Platinum:</span>
                                  {spec.platinum}
                                </div>
                             </div>
                           ))}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
             ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
             <h3 className="text-xl font-bold text-blue-900 mb-2">Need a Custom Quote?</h3>
             <p className="text-blue-700 mb-6">We understand that every project is unique. Our CAAT engine can generate a bespoke BOQ based on your specific material choices.</p>
             <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
               Talk to an Expert
             </button>
          </div>
       </div>
    </div>
  );
};