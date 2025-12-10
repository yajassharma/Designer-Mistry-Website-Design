import React from 'react';

const articles = [
  { title: "5 Mistakes to Avoid in Home Construction", cat: "Construction", date: "Oct 24, 2024" },
  { title: "How AI is Reducing Construction Costs by 20%", cat: "Technology", date: "Oct 20, 2024" },
  { title: "Vastu Tips for South Facing Plots", cat: "Vastu", date: "Oct 18, 2024" },
  { title: "Cement Grades Explained: OPC vs PPC", cat: "Materials", date: "Oct 15, 2024" },
  { title: "The Ultimate House Construction Checklist", cat: "Guides", date: "Oct 10, 2024" },
  { title: "Labor Laws Every Homeowner Should Know", cat: "Legal", date: "Oct 05, 2024" },
];

export const Blog = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
         <h1 className="text-6xl font-serif text-slate-900 mb-6">Knowledge Hub</h1>
         <p className="text-xl text-slate-600">Insights, guides, and latest trends in construction.</p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
         {articles.map((art, i) => (
           <div key={i} className="group cursor-pointer">
              <div className="bg-slate-100 aspect-video rounded-xl mb-6 group-hover:bg-slate-200 transition-colors relative overflow-hidden">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-slate-900">{art.cat}</div>
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-2 group-hover:text-orange-500 transition-colors">{art.title}</h3>
              <p className="text-sm text-slate-400">{art.date}</p>
           </div>
         ))}
      </div>
    </div>
  );
};