import React from 'react';

export const CAATSection = () => {
  const features = [
    { title: "BOQ Generator", desc: "Auto-generates Excel/PDF Bill of Quantities with item-wise pricing." },
    { title: "Procurement Engine", desc: "Automated Purchase Orders based on local material rates." },
    { title: "Scheduling Optimizer", desc: "Auto Gantt chart updates with structural dependencies." },
    { title: "Vision AI QC", desc: "470+ Quality Checks verified through image analysis." },
  ];

  return (
    <section id="caat-engine" className="bg-slate-50 py-32 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5">
            <span className="text-orange-500 font-mono text-sm tracking-widest mb-4 block">/// SYSTEM CORE</span>
            <h2 className="text-6xl font-serif text-slate-900 mb-8">CAAT<span className="text-orange-500">.</span></h2>
            <p className="text-2xl text-slate-700 font-light mb-8">Construction Aggregator AI Technology</p>
            <p className="text-slate-600 leading-loose mb-8">
              CAAT is the central intelligence engine. It understands natural language inputs to extract structured parameters, triggering automated business actions like BOQ generation, scheduling, and billing.
            </p>
            <button className="text-slate-900 border-b border-orange-500 pb-1 hover:text-orange-500 transition-colors text-sm uppercase tracking-wider font-medium">
              Read Technical Documentation
            </button>
          </div>

          <div className="lg:col-span-1" />

          <div className="lg:col-span-6">
            <div className="space-y-12">
              {features.map((f, i) => (
                <div key={i} className="group border-b border-slate-200 pb-8 hover:border-orange-500 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium text-slate-900 group-hover:text-orange-500 transition-colors">{f.title}</h3>
                    <span className="text-slate-400 font-mono text-xs">0{i+1}</span>
                  </div>
                  <p className="text-slate-500 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Simulated Terminal - Kept Dark for High Contrast and Realism */}
            <div className="mt-12 bg-[#1e1e1e] rounded-lg border border-slate-300 shadow-2xl p-6 font-mono text-xs text-slate-300">
               <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-white/30">bash — 80x24</span>
               </div>
               <div className="space-y-2">
                 <p><span className="text-orange-500">user@mistri:~$</span> need 50 bags cement sector 42</p>
                 <p className="text-blue-400">analyzing_intent...</p>
                 <p className="pl-4">{"{"}</p>
                 <p className="pl-8 text-green-400">"item": "Cement (PPC)",</p>
                 <p className="pl-8 text-green-400">"qty": 50,</p>
                 <p className="pl-8 text-green-400">"location": "Sector 42",</p>
                 <p className="pl-8 text-green-400">"avg_price": "₹380/bag"</p>
                 <p className="pl-4">{"}"}</p>
                 <p className="text-white"> Generating PO #8821... <span className="animate-pulse">_</span></p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};