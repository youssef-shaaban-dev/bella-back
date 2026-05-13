"use client";

import React from "react";
import { Plus, ArrowRight } from "lucide-react";

const machines = [
  {
    series: "B Series",
    title: "Standard Flat Pouch Machines",
    ideal: ["Four-side seal pouches", "Flat pouch packaging"],
    summary: "Extremely reliable and cost-efficient, ideal for broad industrial packing applications.",
    tag: "Standard"
  },
  {
    series: "BS Series",
    title: "Cap & Spout Pouch Machines",
    ideal: ["Easy-open / easy-close pouches", "Spout & cap insertion"],
    summary: "Equipped with next-generation cap vibration sorting and advanced mechanical cap insertion modules.",
    tag: "Advanced"
  },
  {
    series: "BSH Series",
    title: "Custom Shaped Pouch Machines",
    ideal: ["Unique profile designs", "Brand differentiation"],
    summary: "Features localized quick-change horizontal die-cutting systems allowing flexible multi-format runs.",
    tag: "Creative"
  },
  {
    series: "BSS Series",
    title: "Hybrid High-Speed Machines",
    ideal: ["Shaped pouch capability", "In-line cap insertion"],
    summary: "Combines custom profiling and spout assembly inside a single consolidated high-output production unit.",
    tag: "Flagship"
  },
  {
    series: "BW Series",
    title: "Flexible Weight Solutions",
    ideal: ["Variable weights", "Multiple product forms"],
    summary: "Features adaptive continuous weighing systems and automated weight recall modules to limit reset lag.",
    tag: "Dynamic"
  }
];

export default function MachinePortfolio() {
  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Subtly angled split background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#121824] -skew-x-12 origin-top-right pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-brand-red font-bold tracking-[0.25em] text-xs uppercase font-heading mb-4">Engineering Matrix</h3>
          <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter leading-[0.95] mb-6">
            Machinery <span className="text-brand-red">Portfolio</span>
          </h2>
          <p className="text-white/60 font-body text-base leading-relaxed">
            Explore our flagship machine configurations. Our modular series adapt structurally to product viscosity, flow behavior, and client output quotas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machines.map((machine, idx) => (
            <div 
              key={idx} 
              className="reveal bg-white/[0.02] border border-white/5 hover:border-brand-red/50 rounded-sm p-8 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm relative"
            >
              {/* Top-right accent number */}
              <span className="absolute top-6 right-8 text-5xl font-bold font-heading text-white/[0.02] group-hover:text-brand-red/5 transition-colors leading-none pointer-events-none">
                {machine.series.split(" ")[0]}
              </span>

              <div>
                <span className="inline-block bg-brand-red text-white text-[10px] font-heading font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                  {machine.tag} Series
                </span>

                <h3 className="text-3xl font-bold font-heading uppercase tracking-tight text-white leading-tight mb-2">
                  {machine.series}
                </h3>
                <h4 className="text-xs font-bold font-heading text-brand-red uppercase tracking-wider mb-6 pb-4 border-b border-white/5">
                  {machine.title}
                </h4>

                <p className="text-white/60 text-sm font-body mb-8 leading-relaxed">
                  {machine.summary}
                </p>
              </div>

              <div>
                <div className="mb-8">
                  <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase block mb-3">Target Application Format</span>
                  <ul className="space-y-2">
                    {machine.ideal.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center space-x-3">
                        <Plus size={12} className="text-brand-red shrink-0" />
                        <span className="text-xs font-heading font-bold tracking-wide uppercase text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center space-x-2 text-xs font-heading font-bold uppercase tracking-widest text-white/40 group-hover:text-brand-red transition-colors cursor-pointer pt-4 border-t border-white/5">
                  <span>View performance data</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
