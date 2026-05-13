"use client";

import React from "react";

export default function ServicesHero() {
  return (
    <section className="relative pt-48 pb-32 bg-charcoal text-white overflow-hidden">
      {/* Geometric patterns for advanced engineering theme */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_theme(colors.brand-red)_1px,_transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="reveal flex items-center justify-center space-x-3 mb-6">
          <span className="h-px w-8 bg-brand-red"></span>
          <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase font-heading">Lifecycle Excellence</span>
          <span className="h-px w-8 bg-brand-red"></span>
        </div>

        <h1 className="reveal text-5xl md:text-8xl font-bold font-heading uppercase tracking-tighter mb-8 max-w-6xl mx-auto leading-[0.95]">
          Support & <span className="text-brand-red">Service</span>
        </h1>

        <p className="reveal text-lg md:text-xl text-white/70 font-body max-w-3xl mx-auto leading-relaxed">
          At Bella Pack Tec, we are committed to delivering end-to-end service excellence. We ensure maximum machine performance, operational reliability, and long-term value while minimizing production downtime.
        </p>
      </div>
    </section>
  );
}
