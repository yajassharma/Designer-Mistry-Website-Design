import React from 'react';
import { useAIImage } from './useAIImage';

const ProjectCard = ({ title, type }: { title: string, type: string }) => {
  const { imageUrl } = useAIImage(`Modern ${type} building architecture photography, ${title}, photorealistic, bright`, true);
  
  return (
    <div className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
      {imageUrl && <img src={imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={title} />}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
        <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">{type}</p>
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
         <h1 className="text-6xl font-serif text-slate-900 mb-6">Our Work</h1>
         <p className="text-xl text-slate-600">A gallery of precision, quality, and trust.</p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
         <ProjectCard title="Villa 402, Gurugram" type="Residential" />
         <ProjectCard title="Tech Park Lobby" type="Commercial" />
         <ProjectCard title="Modern Farmhouse" type="Residential" />
         <ProjectCard title="Urban Loft Renovation" type="Interior" />
         <ProjectCard title="Skyline Apartments" type="Construction" />
         <ProjectCard title="Zen Garden Office" type="Landscape" />
      </div>
    </div>
  );
};