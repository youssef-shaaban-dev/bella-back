"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function InquiryForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submit for presentation excellence
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="bg-charcoal text-white p-10 lg:p-16 rounded-sm border border-white/5 text-center flex flex-col items-center justify-center h-full animate-[fadeIn_0.5s_ease-out]">
        <div className="w-20 h-20 rounded-full bg-brand-red/10 flex items-center justify-center mb-6">
          <CheckCircle2 className="text-brand-red" size={40} />
        </div>
        <h3 className="text-3xl font-heading font-bold uppercase mb-4">Inquiry Transmitted</h3>
        <p className="text-white/60 max-w-md mx-auto mb-8 text-sm leading-relaxed font-body">
          Thank you for choosing BellaPack. Your technical requirements are now with our engineering evaluation unit. We will generate your custom proposal within 24-48 business hours.
        </p>
        <button 
          onClick={() => setFormSubmitted(false)}
          className="text-xs font-heading font-bold tracking-widest uppercase text-brand-red hover:text-white border-b border-brand-red/30 pb-1 transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-2xl border border-gray-100 p-8 md:p-12 rounded-sm">
      <div className="mb-8 border-b border-gray-100 pb-6">
        <h3 className="text-2xl font-heading font-bold uppercase tracking-tight text-charcoal mb-2">
          Request a Technical Proposal
        </h3>
        <p className="text-gray-500 text-sm font-body leading-relaxed font-semibold">
          Send us your inquiry and our engineering team will provide a custom technical proposal tailored exactly to your product and production capacity.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Full Name *</label>
            <input 
              type="text" 
              required
              className="w-full bg-gray-50 border-b-2 border-transparent border-gray-100 focus:border-brand-red px-4 py-3.5 focus:bg-white focus:shadow-sm outline-none transition-all text-charcoal text-sm font-body font-medium" 
              placeholder="e.g. Ahmed Ali"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Company Name</label>
            <input 
              type="text" 
              className="w-full bg-gray-50 border-b-2 border-transparent border-gray-100 focus:border-brand-red px-4 py-3.5 focus:bg-white focus:shadow-sm outline-none transition-all text-charcoal text-sm font-body font-medium" 
              placeholder="e.g. FMCG Egypt Co."
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Email or Phone *</label>
            <input 
              type="text" 
              required
              className="w-full bg-gray-50 border-b-2 border-transparent border-gray-100 focus:border-brand-red px-4 py-3.5 focus:bg-white focus:shadow-sm outline-none transition-all text-charcoal text-sm font-body font-medium" 
              placeholder="e.g. sales@domain.com or +20..."
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Required Capacity *</label>
            <input 
              type="text" 
              required
              className="w-full bg-gray-50 border-b-2 border-transparent border-gray-100 focus:border-brand-red px-4 py-3.5 focus:bg-white focus:shadow-sm outline-none transition-all text-charcoal text-sm font-body font-medium" 
              placeholder="e.g. 60-100 pouches/min"
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Product Classification *</label>
          <select 
            required
            className="w-full bg-gray-50 border-b-2 border-transparent border-gray-100 focus:border-brand-red px-4 py-3.5 focus:bg-white focus:shadow-sm outline-none transition-all text-charcoal text-sm font-body font-medium appearance-none cursor-pointer"
          >
            <option value="">Select Product Type</option>
            <option value="liquid">Liquid / Viscous</option>
            <option value="powder">Powder</option>
            <option value="granule">Granule / Solid</option>
            <option value="other">Other / Custom</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Message & Application Details *</label>
          <textarea 
            rows={4} 
            required
            className="w-full bg-gray-50 border-b-2 border-transparent border-gray-100 focus:border-brand-red px-4 py-3.5 focus:bg-white focus:shadow-sm outline-none transition-all text-charcoal text-sm font-body font-medium resize-none"
            placeholder="Tell us about your target pouch dimensions, weight, and specialized features..."
          ></textarea>
        </div>

        <div className="pt-2">
          <button 
            type="submit" 
            className="w-full bg-charcoal text-white px-8 py-4 font-heading font-bold uppercase tracking-widest text-sm hover:bg-brand-red transition-all duration-300 flex items-center justify-center group shadow-lg shadow-charcoal/10 hover:shadow-brand-red/20"
          >
            <span>Request a Quote Now</span>
            <ArrowRight size={16} className="ml-3 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </form>
    </div>
  );
}
