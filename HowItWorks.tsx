import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    { title: "User Request", desc: "You describe your project in plain English to CAAT." },
    { title: "Instant Bidding", desc: "Our engine retrieves live rates from local vendors." },
    { title: "Execution", desc: "Teams are deployed. Materials arrive JIT (Just-In-Time)." },
    { title: "Quality Control", desc: "AI verifies site photos against design specs." },
    { title: "Payment", desc: "Funds are released only after QC approval." },
  ];

  return (
    <div className="pt-32 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 text-center mb-20">
        <h1 className="text-6xl font-serif text-slate-900 mb-6">How CAAT Works</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">From concept to keys, our automated workflow handles the complexity.</p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
         <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
               {steps.map((step, i) => (
                 <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                 </div>
               ))}
            </div>
         </div>

         <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-slate-50 p-12 rounded-3xl">
             <div>
                <h3 className="text-3xl font-serif mb-6">The CAAT Advantage</h3>
                <ul className="space-y-4">
                   {['Zero ambiguity in BOQs', '20% faster completion', 'Auditable digital trail'].map((item, i) => (
                     <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="text-green-500 w-5 h-5" />
                        <span className="text-slate-700 font-medium">{item}</span>
                     </li>
                   ))}
                </ul>
             </div>
             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <div className="font-mono text-xs text-slate-400 mb-2">System Log</div>
                <div className="space-y-2 text-sm font-mono">
                   <p className="text-green-600">> Initiating project "Villa 402"</p>
                   <p className="text-blue-600">> Parsing requirements...</p>
                   <p className="text-slate-600">> Found 12 matching vendors in 5km radius</p>
                   <p className="text-slate-600">> Generating construction schedule...</p>
                   <p className="text-slate-900 font-bold">> READY TO BUILD</p>
                </div>
             </div>
         </div>
      </div>
    </div>
  );
};