"use client";

import React from "react";
import { Heart, ShieldCheck, Leaf, ArrowRight } from "lucide-react";

export default function HSEPillars() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-heading mb-3">Operational Responsibility</h3>
          <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tighter text-charcoal">
            HSE <span className="text-brand-red">Excellence</span> Standards
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Health & Ergonomics",
              desc: "We design machinery layouts focusing on zero-reach hazards, comfortable maintenance heights, noise suppression below 70dB, and food-safe product contact zones.",
              color: "text-brand-red",
              bg: "bg-brand-red/5"
            },
            {
              icon: ShieldCheck,
              title: "Safety Systems",
              desc: "Integrated with advanced light curtains, magnetic safety interlocks, quick-vent pneumatics, and dynamic dual-channel emergency stop loops for ultimate safety.",
              color: "text-brand-blue",
              bg: "bg-brand-blue/5"
            },
            {
              icon: Leaf,
              title: "Environmental Protection",
              desc: "Full support for compostable materials, 30% electrical power saving in standby, closed-loop systems, and optimized tooling preventing duplication.",
              color: "text-green-600",
              bg: "bg-green-50"
            }
          ].map((pillar, idx) => (
            <div key={idx} className="reveal bg-white border border-gray-200/80 p-8 rounded-sm shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow text-left">
              <div>
                <div className={`w-12 h-12 rounded-sm ${pillar.bg} ${pillar.color} flex items-center justify-center mb-6`}>
                  <pillar.icon size={24} />
                </div>
                <h4 className="font-heading font-bold uppercase text-charcoal text-lg tracking-tight mb-4">{pillar.title}</h4>
                <p className="text-gray-500 font-body text-xs leading-relaxed font-semibold">{pillar.desc}</p>
              </div>
              <div className="border-t border-gray-100 pt-6 mt-6 flex items-center text-[10px] font-heading font-bold uppercase tracking-widest text-brand-red space-x-2">
                <span>Validated Standard</span>
                <ArrowRight size={10} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
