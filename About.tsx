import React from 'react';
import { useAIImage } from './useAIImage';
import { motion } from 'framer-motion';
import { Brain, Layers, Cpu, Code2, Linkedin, ExternalLink } from 'lucide-react';
import GradientText from './GradientText';

export const About = () => {
  const { imageUrl } = useAIImage("Futuristic architectural blueprint transforming into digital data stream, orange and blue glowing particles, dark background, cinematic, 8k", true);

  return (
    <div className="pt-32 bg-white min-h-screen">
      
      {/* Immersive Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0 opacity-60">
           {imageUrl && (
             <motion.img 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
                src={imageUrl} 
                className="w-full h-full object-cover" 
                alt="AI Architecture"
             />
           )}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <GradientText colors={["#F97316", "#FFD700", "#F97316"]} animationSpeed={3}>
                   <span className="text-sm font-bold tracking-[0.3em] uppercase">The Origin Story</span>
                </GradientText>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight">
                Architecting <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-200">Intelligence</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                We are not just building structures; we are compiling the source code for the future of construction.
              </p>
            </motion.div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             
             {/* Text Content */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-2 mb-6">
                   <div className="h-[1px] w-12 bg-orange-500" />
                   <span className="text-orange-500 uppercase tracking-widest text-sm font-bold">The Visionary</span>
                </div>
                
                <h2 className="text-5xl font-serif text-white mb-8">
                  From High-Rises <br/>to <span className="text-orange-500 italic">High-Tech.</span>
                </h2>
                
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                   <p>
                     <strong className="text-white">Mr. Himanshu</strong> brings 3 years of core construction experience working as a Site Engineer on some of India’s most premium real-estate projects. He started his journey with <span className="text-white">DLF – The Arbour</span> (42-storey luxury tower) and <span className="text-white">Anant Raj – The Estate Residences</span>, handling day-to-day site execution, quality control, reinforcement checks, and structural coordination.
                   </p>
                   <p>
                     Later, working as an Assistant Engineer at <span className="text-white">PSP Projects Ltd.</span> on the Adani 32-storey high-rise residential tower, he gained deep exposure to high-rise methodologies, MIVAN/Alu-form practices, and large-scale project management.
                   </p>
                   <p>
                     "Alongside my site journey, I always dreamed bigger," he says. "I wanted to create a tech-driven ecosystem for construction. That's why I founded <span className="text-orange-500 font-bold">CAAT → Designer Mistri</span>, with a vision to bring AI-powered planning and transparent execution to every client."
                   </p>
                </div>

                <div className="mt-12 flex gap-8">
                   <div>
                      <div className="text-4xl font-serif text-white mb-1">3+</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">Years Experience</div>
                   </div>
                   <div>
                      <div className="text-4xl font-serif text-white mb-1">3</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">Landmark Towers</div>
                   </div>
                </div>
             </motion.div>

             {/* Modern Founder Card */}
             <div className="flex justify-center lg:justify-end relative h-[600px] flex items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  viewport={{ once: true }}
                  className="relative group w-full max-w-[400px] aspect-[3/4]"
                >
                    {/* Decorative Background Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500 via-purple-500 to-blue-500 rounded-[32px] opacity-70 blur-2xl group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Main Card */}
                    <div className="relative h-full w-full rounded-[30px] overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
                        {/* Image */}
                        <img 
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                          alt="Mr. Himanshu" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-12 h-1 bg-orange-500 mb-4 rounded-full" />
                            <h3 className="text-3xl font-serif text-white mb-1">Mr. Himanshu</h3>
                            <p className="text-orange-300 font-medium tracking-wide uppercase text-xs mb-6">Founder & Civil Engineer</p>
                            
                            <div className="flex gap-4 pt-4 border-t border-white/10">
                                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                                   <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                                   <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Visuals */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
           <div className="text-center mb-16">
              <span className="text-slate-400 font-mono text-xs uppercase tracking-widest block mb-4">/// OUR ENGINE</span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900">The Neural Core</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: Brain, title: "Generative Design", desc: "AI that dreams up concepts based on your verbal description." },
                { icon: Layers, title: "Material Intelligence", desc: "Live pricing API connected to 500+ local vendors." },
                { icon: Cpu, title: "Predictive Scheduling", desc: "Machine learning models that forecast delays before they happen." },
                { icon: Code2, title: "Automated Compliance", desc: "Real-time checking of local building bylaws." }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-500 hover:bg-white hover:shadow-xl transition-all duration-300">
                   <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                      <item.icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-slate-900 flex items-center justify-center text-center px-6 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="max-w-4xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight italic">
              "We are building the operating system for the physical world. Where every brick has a data point, and every beam has a digital twin."
            </h2>
            <div className="mt-8">
               <div className="text-orange-500 font-bold tracking-widest uppercase text-sm">Mr. Himanshu</div>
               <div className="text-slate-500 text-xs mt-1">Founder, Designer Mistri</div>
            </div>
         </div>
      </section>

    </div>
  );
};