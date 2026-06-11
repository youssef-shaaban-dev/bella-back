"use client";

import React from "react";
import { Leaf, Recycle, Zap, ArrowRight } from "lucide-react";

export default function HSEPillars() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-heading mb-3">Operational Responsibility</h3>
          <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tighter text-charcoal">
            Engineered For <span className="text-brand-red">Sustainable Production</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Leaf,
              title: "Material Compatibility",
              desc: "Our machinery is designed to run recyclable, mono-material, and next-generation sustainable pouch structures.",
              color: "text-brand-red",
              bg: "bg-brand-red/5"
            },
            {
              icon: Recycle,
              title: "Waste Reduction",
              desc: "Precision filling and sealing systems help minimize product giveaway, film waste, and rejected pouches.",
              color: "text-brand-red",
              bg: "bg-brand-red/5"
            },
            {
              icon: Zap,
              title: "Energy Efficiency",
              desc: "Servo-driven technologies and optimized machine architectures reduce energy consumption while maintaining high productivity.",
              color: "text-brand-red",
              bg: "bg-brand-red/5"
            }
          ].map((pillar, idx) => (
            <div key={idx} className="reveal bg-white border border-gray-200/80 p-8 rounded-sm shadow-sm flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group text-left">
              <div>
                <div className={`w-12 h-12 rounded-sm ${pillar.bg} ${pillar.color} flex items-center justify-center mb-6 group-hover:bg-charcoal group-hover:text-white transition-colors duration-300`}>
                  <pillar.icon size={24} />
                </div>
                <h4 className="font-heading font-bold uppercase text-charcoal text-lg tracking-tight mb-4 group-hover:text-brand-red transition-colors">{pillar.title}</h4>
                <p className="text-gray-500 font-body text-xs leading-relaxed font-semibold">{pillar.desc}</p>
              </div>
              {/* <div className="border-t border-gray-100 pt-6 mt-6 flex items-center text-[10px] font-heading font-bold uppercase tracking-widest text-brand-red space-x-2">
                <span>Validated Standard</span>
                <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
