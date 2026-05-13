"use client";

import React from "react";

export default function SolutionsHero() {
  return (
    <section className="relative pt-48 pb-32 text-white overflow-hidden">
      {/* Custom layered background with brand red blur and charcoal base */}
      <div className="absolute inset-0 bg-charcoal">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]bg-size-[40px_40px] opacity-30"></div>
        <div className="absolute -right-48 top-0 w-[600px] h-[600px] bg-brand-red filter blur-[120px] opacity-10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
        <div className="reveal flex items-center space-x-3 mb-6 justify-center lg:justify-start">
          <span className="h-px w-8 bg-brand-red"></span>
          <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase font-heading">System Integration</span>
        </div>

        <div className="max-w-4xl">
          <h1 className="reveal text-5xl md:text-8xl font-bold font-heading uppercase tracking-tighter mb-8 leading-[0.95]">
            Integrated <span className="text-brand-red">Packaging</span> Solutions
          </h1>

          <p className="reveal text-lg md:text-xl text-white/75 font-body max-w-3xl leading-relaxed">
            At Bella Pack Tec, we deliver advanced, custom-tailored packaging systems engineered to meet the exact parameters of diverse product compositions, speeds, and factory scales.
          </p>
        </div>
      </div>
    </section>
  );
}
