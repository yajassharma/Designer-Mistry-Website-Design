import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAIImage } from './useAIImage';
import { CheckCircle, ArrowRight } from 'lucide-react';

const serviceData: any = {
  construction: {
    title: "Construction Services",
    subtitle: "Full Project Execution",
    desc: "From ground breaking to handover, we manage every aspect of your construction project using our proprietary BOQ and BIM systems.",
    features: ["Automated BOQ Generation", "Drone Monitoring", "Timeline Tracking", "Transparent Bidding System"],
    prompt: "Construction site with modern equipment, drone flying overhead, engineers with tablets, bright blue sky"
  },
  manpower: {
    title: "Manpower Marketplace",
    subtitle: "Skilled & Unskilled Labor",
    desc: "Access a verified pool of skilled masons, carpenters, and helpers. All personnel are vetted and rated.",
    features: ["Skilled Labor", "Helpers & Supervisors", "Masons & Carpenters", "Daily/Hourly Pricing"],
    prompt: "Group of construction workers in safety gear smiling, professional portrait, bright background"
  },
  material: {
    title: "Material Store",
    subtitle: "Direct Marketplace",
    desc: "Sourcing cement, steel, sand, and bricks directly from manufacturers to ensure the best rates.",
    features: ["Live Rate Updates", "Bulk Ordering", "Quality Assured", "JIT Delivery"],
    prompt: "Warehouse full of construction materials, cement bags, steel rods, organized, bright industrial light"
  },
  plumbing: {
    title: "Plumbing Services",
    subtitle: "Expert Piping Solutions",
    desc: "Residential and commercial plumbing executed by certified professionals.",
    features: ["Leak Detection", "Pipe Fitting", "Fixture Installation", "Maintenance"],
    prompt: "Close up of copper plumbing pipes and modern faucet, clean bright bathroom background"
  },
  electrical: {
    title: "Electrical Works",
    subtitle: "Safe & Certified",
    desc: "Complete electrical planning and installation for modern homes.",
    features: ["Wiring & Cabling", "Load Calculation", "Smart Home Setup", "Safety Audits"],
    prompt: "Electrician working on a fuse box, glowing wires, modern technology abstract background"
  },
  cleaning: {
    title: "Cleaning Services",
    subtitle: "Post-Construction Deep Clean",
    desc: "Making your new space move-in ready with industrial grade cleaning.",
    features: ["Debris Removal", "Deep Floor Cleaning", "Window Washing", "Sanitization"],
    prompt: "Bright clean empty room with cleaning equipment, sparkling clean floor"
  },
  painting: {
    title: "Painting Services",
    subtitle: "Premium Finishes",
    desc: "Interior and exterior painting with texture and weather-proofing expertise.",
    features: ["Color Consultation", "Texture Painting", "Waterproofing", "Stencil Work"],
    prompt: "Wall being painted with a roller, bright orange paint, sharp focus"
  },
  design: {
    title: "Interior Designing",
    subtitle: "3D Visualization",
    desc: "Transforming spaces with functional and aesthetic design concepts.",
    features: ["3D Rendering", "Space Planning", "Furniture Selection", "Lighting Design"],
    prompt: "Modern luxury living room interior design, 3d render style, photorealistic, bright sunlight"
  }
};

export const ServiceDetail = () => {
  const { id } = useParams();
  const data = serviceData[id || 'construction'];
  const { imageUrl, generate } = useAIImage(data.prompt, true);

  useEffect(() => {
    generate();
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) return <div>Service not found</div>;

  return (
    <div className="pt-32 bg-white min-h-screen">
      <div className="h-[400px] w-full relative overflow-hidden bg-slate-100">
         {imageUrl ? <img src={imageUrl} className="w-full h-full object-cover" alt={data.title} /> : <div className="w-full h-full animate-pulse bg-slate-200" />}
         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center">
               <span className="text-orange-500 font-bold tracking-widest uppercase bg-black/50 px-3 py-1 rounded backdrop-blur-md">{data.subtitle}</span>
               <h1 className="text-5xl md:text-6xl font-serif text-white mt-4">{data.title}</h1>
            </div>
         </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 py-24">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="col-span-2">
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
               <p className="text-lg text-slate-600 leading-relaxed mb-12">{data.desc}</p>
               
               <h3 className="text-xl font-bold text-slate-900 mb-6">Key Features</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.features.map((f: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                       <CheckCircle className="text-orange-500 w-5 h-5" />
                       <span className="text-slate-800 font-medium">{f}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="col-span-1">
               <div className="bg-slate-900 text-white p-8 rounded-2xl sticky top-28">
                  <h3 className="text-2xl font-serif mb-4">Get a Quote</h3>
                  <p className="text-white/60 text-sm mb-8">Get precise pricing for {data.title.toLowerCase()} within minutes using CAAT.</p>
                  <Link to="/contact" className="w-full block text-center bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">
                     Request Pricing
                  </Link>
                  <p className="text-center text-xs text-white/30 mt-4">No hidden charges.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};