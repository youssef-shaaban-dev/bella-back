"use client";

import React, { useState } from "react";
import { Beef, Coffee, Cookie, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";

const industries = [
  {
    id: "food",
    icon: Beef,
    title: "Food & Beverage",
    description: "Engineered specifically for extreme hygiene requirements and steady-state volumetric filling consistency.",
    features: ["Juices", "Edible Oils", "Tomato Paste", "Ghee", "Grains"],
    badge: "High Hygiene"
  },
  {
    id: "spices",
    icon: Coffee,
    title: "Spices & Coffee",
    description: "High-precision powder control designed to maintain absolute aroma integrity and prevent cross-batch contamination.",
    features: ["Spices", "Fine Coffee", "Flour & Powders"],
    badge: "Aroma Preservation"
  },
  {
    id: "snacks",
    icon: Cookie,
    title: "Snacks & Granules",
    description: "Ultra high-output automation lines tuned to gently handle fragile solids and variable granule densities.",
    features: ["Nuts & Seeds", "Hard Candies", "Salty Snacks"],
    badge: "High Speed"
  },
  {
    id: "chemical",
    icon: ShieldAlert,
    title: "Chemical Products",
    description: "Fortified machinery tailored for highly caustic compositions. Utilizes premium-grade Titanium alloy reinforcements.",
    features: ["Liquid Detergents", "Bleach Agents", "Corrosive Chemicals"],
    badge: "Titanium Reinforced"
  },
  {
    id: "pharma",
    icon: Sparkles,
    title: "Cosmetics & Pharma",
    description: "Ultra-sanitary closed-loop fluidic filling systems conforming to strict hygienic processing metrics.",
    features: ["Creams & Lotions", "Shower Gels", "Liquid Pharma"],
    badge: "Sanitary Grade"
  }
];

export default function IndustriesWeServe() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="reveal flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16 border-b border-gray-100 pb-8">
          <div>
            <h3 className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-heading mb-3">Vertical Markets</h3>
            <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter text-charcoal leading-none">
              Industries We <span className="text-brand-red">Serve</span>
            </h2>
          </div>
          <p className="text-gray-500 font-body text-sm max-w-md font-semibold">
            Each line is custom-tailored to meet the distinct handling conditions, sanitary requirements, and target speed vectors of your sector.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left navigation */}
          <div className="reveal lg:col-span-5 space-y-3">
            {industries.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-6 rounded-sm border transition-all duration-300 flex items-center justify-between group ${
                    isActive 
                      ? "bg-charcoal text-white border-charcoal shadow-xl scale-[1.02]" 
                      : "bg-gray-50 text-charcoal border-gray-100 hover:bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      isActive ? "bg-brand-red text-white" : "bg-white text-charcoal group-hover:bg-brand-red/10 group-hover:text-brand-red"
                    }`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold opacity-50 uppercase tracking-widest font-heading mb-0.5">Sector 0{idx + 1}</span>
                      <h4 className="text-lg md:text-xl font-heading font-bold uppercase tracking-tight">{item.title}</h4>
                    </div>
                  </div>
                  
                  <span className={`hidden sm:inline-block text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-heading ${
                    isActive ? "bg-white/10 text-brand-red" : "bg-gray-200 text-gray-500"
                  }`}>
                    {item.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right detailed content box */}
          <div className="reveal lg:col-span-7 relative min-h-[400px] bg-gray-50 rounded-sm border border-gray-100 p-8 md:p-16 overflow-hidden flex flex-col justify-between">
            {/* Dynamic backdrop */}
            <div className="absolute right-0 bottom-0 text-[250px] font-heading font-black text-charcoal/[0.02] leading-none translate-y-1/3 select-none">
              {industries[activeIdx].title.split(" ")[0]}
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center space-x-2 bg-brand-red/10 text-brand-red px-4 py-1.5 text-xs font-bold font-heading uppercase tracking-widest rounded-full">
                  <CheckCircle2 size={14} />
                  <span>Performance Validated</span>
                </span>
                
                <h5 className="text-sm text-gray-400 font-heading uppercase font-bold tracking-widest">0{activeIdx + 1} / 05</h5>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold font-heading uppercase text-charcoal tracking-tight mb-6 leading-tight">
                {industries[activeIdx].title}
              </h3>

              <p className="text-gray-600 font-body text-lg leading-relaxed mb-10 max-w-xl">
                {industries[activeIdx].description}
              </p>
            </div>

            <div className="relative z-10 pt-8 border-t border-gray-200/60">
              <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em] mb-6">Tailored Formulations Supported</h5>
              <div className="flex flex-wrap gap-3">
                {industries[activeIdx].features.map((feat, fIdx) => (
                  <div key={fIdx} className="bg-white text-charcoal border border-gray-200 px-5 py-3 text-sm font-heading font-bold uppercase tracking-wider rounded-sm shadow-sm flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
