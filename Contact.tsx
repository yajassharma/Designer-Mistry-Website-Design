import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-slate-50 py-32 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <span className="text-orange-500 font-mono text-sm tracking-widest mb-4 block">/// GET IN TOUCH</span>
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-8">Let's build<br/>something iconic.</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-md">
            Whether you need a BOQ estimate, a design consultation, or full-stack construction management, our AI and experts are ready.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-full bg-white shadow-sm border border-slate-200 group-hover:bg-orange-500 transition-colors">
                <Mail className="w-5 h-5 text-slate-900 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-slate-900 font-medium mb-1">Email Us</h4>
                <p className="text-slate-500">projects@designermistri.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-full bg-white shadow-sm border border-slate-200 group-hover:bg-orange-500 transition-colors">
                <Phone className="w-5 h-5 text-slate-900 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-slate-900 font-medium mb-1">Call Us</h4>
                <p className="text-slate-500">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-full bg-white shadow-sm border border-slate-200 group-hover:bg-orange-500 transition-colors">
                <MapPin className="w-5 h-5 text-slate-900 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-slate-900 font-medium mb-1">HQ</h4>
                <p className="text-slate-500">Cyber City, DLF Phase 2<br/>Gurugram, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-400 font-bold">First Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 focus:border-orange-500 outline-none transition-colors" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-400 font-bold">Last Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 focus:border-orange-500 outline-none transition-colors" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-slate-400 font-bold">Project Type</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 focus:border-orange-500 outline-none transition-colors appearance-none">
                <option>Residential Construction</option>
                <option>Commercial Interior</option>
                <option>Renovation</option>
                <option>Architectural Design</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-slate-400 font-bold">Message</label>
              <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 focus:border-orange-500 outline-none transition-colors h-32 resize-none" placeholder="Tell us about your project requirements..."></textarea>
            </div>

            <button className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg">
              Send Request <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};