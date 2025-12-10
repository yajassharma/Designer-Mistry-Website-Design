import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useAIImage } from './useAIImage';
import BlurText from './BlurText';
import GradientText from './GradientText';

export const Hero = () => {
  const { imageUrl } = useAIImage(
    "Low angle wide shot of a magnificent modern glass and concrete structure at twilight, warm interior lights glowing, architectural photography, hyperrealistic, 8k, minimalistic sky", 
    true
  );

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <AnimatePresence>
           {imageUrl ? (
             <motion.img 
               initial={{ scale: 1.1, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 1.5 }}
               src={imageUrl} 
               className="w-full h-full object-cover"
               alt="Hero Architecture"
             />
           ) : (
             <div className="w-full h-full bg-slate-200 animate-pulse" />
           )}
        </AnimatePresence>
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-orange-500 uppercase tracking-[0.2em] text-sm font-medium mb-6 bg-white/10 backdrop-blur-md inline-block px-3 py-1 rounded">India's First Unified AI Platform</p>
          
          <div className="mb-8">
            {/* Constructing: Simple Sans-Serif Font */}
            <div className="text-white text-[10vw] md:text-[8vw] leading-[0.9] font-sans font-bold drop-shadow-sm whitespace-nowrap tracking-tight">
              <BlurText 
                text="Constructing" 
                delay={150} 
                animateBy="letters" 
                direction="top"
                className="block"
              />
            </div>
            
            {/* Intelligence: Gradient Text */}
            <div className="ml-[5vw] md:ml-[10vw] text-[10vw] md:text-[8vw] leading-[1.2] font-serif italic whitespace-nowrap">
              <GradientText
                colors={["#fdba74", "#fff7ed", "#fdba74", "#ffffff", "#fdba74"]} 
                animationSpeed={5}
                showBorder={false}
                className="mx-0 pb-6 pr-4" // Increased bottom padding to prevent 'g' cutoff
              >
                Intelligence
              </GradientText>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-8 items-start max-w-2xl ml-auto mr-12">
             <p className="text-white/80 text-lg font-light leading-relaxed drop-shadow-md">
               Designer Mistri standardizes the unorganized construction market. 
               We bring price transparency, automation, and trust to every brick laid.
             </p>
             <button className="group flex items-center gap-4 bg-white text-black border border-white px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all shadow-lg whitespace-nowrap">
                <span className="uppercase tracking-wider text-sm font-bold">Start Your Project</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </motion.div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-30 translate-y-[1px]">
        <svg viewBox="0 0 1440 320" className="w-full h-auto text-white fill-current">
            <path fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};