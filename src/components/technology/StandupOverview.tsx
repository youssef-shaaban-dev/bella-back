"use client";

import React from "react";
import { Settings, CheckCircle2 } from "lucide-react";

export default function StandupOverview() {
  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Box: Tech Value Prop */}
          <div className="reveal lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-tight text-charcoal">
              Advanced <span className="text-brand-red">Stand-Up Pouch</span> Packaging Solutions
            </h2>
            
            <div className="text-gray-600 font-body text-base leading-relaxed space-y-6 font-semibold">
              <p>
                At <span className="text-brand-red font-bold">BellaPack</span>, we provide advanced Horizontal Stand-Up Pouch packaging solutions designed to combine premium product presentation with high-performance packaging efficiency. Our systems are engineered to deliver precise filling, secure sealing, and reliable automation for a wide range of industries including food & beverage, coffee, spices, detergents, cosmetics, pharmaceuticals, and chemical products.
              </p>
              <p>
                Stand-up pouches have become one of the most popular modern packaging formats due to their attractive shelf appearance, product protection, and flexible packaging capabilities. BellaPack’s Horizontal Stand-Up Pouch machines are designed to support high-speed production while maintaining packaging accuracy, durability, and consistent sealing quality.
              </p>
              <p>
                Our advanced packaging systems are suitable for liquids, powders, granules, creams, and gel-based products, offering flexible pouch configurations and user-friendly automation technologies that improve operational efficiency and reduce product waste. With durable industrial construction and intelligent control systems, BellaPack delivers packaging solutions that help brands enhance shelf appeal, preserve product quality, and optimize production performance.
              </p>
            </div>
          </div>

          {/* Right Box: Key Tech Specs list */}
          <div className="reveal lg:col-span-5 bg-gray-50 border border-gray-100 p-8 rounded-sm shadow-md">
            <h3 className="text-xl font-bold font-heading uppercase text-charcoal border-b border-gray-200 pb-4 mb-6 flex items-center gap-2">
              <Settings className="text-brand-red animate-spin-slow" size={22} />
              <span>Standard Technologies</span>
            </h3>
            
            <ul className="space-y-4 font-heading font-bold text-xs uppercase tracking-wider text-charcoal/80">
              {[
                { title: "Servo-Driven Accuracy", desc: "Total movement control with zero film slip." },
                { title: "Closed-Loop Dosing", desc: "Intelligent feedback systems matching weight tolerances." },
                { title: "Universal Seal Tooling", desc: "Hermetic seals optimized for compostable films." },
                { title: "User-Friendly Touch HMI", desc: "Fully automated Siemens PLC configuration screen." },
                { title: "Zero-Waste Dosing", desc: "Dosing nozzles with active drip and splash arrestors." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <span className="p-1 bg-brand-red/10 text-brand-red rounded-sm mt-0.5">
                    <CheckCircle2 size={16} />
                  </span>
                  <div>
                    <span className="block text-sm text-charcoal leading-tight mb-1">{item.title}</span>
                    <span className="block text-[10px] font-body font-normal text-gray-500">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
