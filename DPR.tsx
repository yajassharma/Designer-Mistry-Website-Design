import React from 'react';
import { Download } from 'lucide-react';

export const DPRSection = () => {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[120px] opacity-60" />
      
      <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
         <h2 className="text-5xl font-serif text-slate-900 mb-6">Transparency Automated</h2>
         <p className="text-slate-600 max-w-2xl mx-auto mb-16">
           Daily Progress Reports (DPR) are generated automatically every night. 
           Images, checklists, and consumption data compiled into a clear dashboard.
         </p>

         <div className="relative mx-auto max-w-5xl bg-white rounded-xl border border-slate-200 p-2 shadow-2xl">
            <div className="bg-slate-50 rounded-lg overflow-hidden relative aspect-video flex flex-col border border-slate-100">
              {/* Fake Dashboard Header */}
              <div className="h-12 border-b border-slate-200 bg-white flex items-center px-4 justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-slate-800 font-bold text-sm">Project: Villa 402</span>
                  <span className="px-2 py-0.5 rounded bg-green-100 text-green-700 text-[10px] uppercase font-bold border border-green-200">On Track</span>
                </div>
                <div className="flex gap-4 text-xs text-slate-500">
                  <span>Physical: 68%</span>
                  <span>Financial: 72%</span>
                </div>
              </div>
              
              <div className="flex-1 p-6 grid grid-cols-3 gap-6">
                {/* Chart Area */}
                <div className="col-span-2 bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
                  <div className="flex justify-between mb-4">
                     <span className="text-xs text-slate-500 font-semibold uppercase">Weekly Burn Rate</span>
                  </div>
                  <div className="flex items-end gap-2 h-32 pl-4 pb-2 border-l border-b border-slate-200">
                     {[40, 60, 35, 80, 55, 70, 65].map((h, i) => (
                       <div key={i} className="flex-1 bg-orange-500 rounded-t-sm hover:bg-orange-600 transition-colors relative group" style={{ height: `${h}%` }}>
                         <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-700 opacity-0 group-hover:opacity-100 font-bold">₹{h}k</div>
                       </div>
                     ))}
                  </div>
                </div>

                {/* KPI Area */}
                <div className="space-y-4">
                   <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
                      <div className="text-xs text-slate-500 mb-1 font-semibold uppercase">Productivity Score</div>
                      <div className="text-2xl text-slate-900 font-serif">94<span className="text-sm font-sans text-green-500">.2%</span></div>
                   </div>
                   <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
                      <div className="text-xs text-slate-500 mb-1 font-semibold uppercase">Labor Attendance</div>
                      <div className="text-2xl text-slate-900 font-serif">42<span className="text-sm font-sans text-slate-400">/45</span></div>
                   </div>
                   <div className="bg-black rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-slate-800 transition-colors shadow-lg">
                      <span className="text-white font-bold text-sm flex items-center gap-2">Download PDF <Download className="w-4 h-4"/></span>
                   </div>
                </div>
              </div>
            </div>
         </div>
      </div>
    </section>
  );
};