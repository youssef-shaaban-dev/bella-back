"use client";

import React from "react";
import Image from "next/image";

export default function StandupHero() {
  return (
    <section className="relative h-inner-hero min-h-inner-hero bg-charcoal text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          fill
          src="/horizontal stand up pouch/WhatsApp Image 2026-05-20 at 12.55.57 PM.jpeg" 
          alt="Horizontal Stand-up Pouch Machine Header" 
          className="w-full h-full object-cover opacity-35 transform scale-105 hover:scale-100 transition-transform duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/40 via-charcoal/80 to-charcoal/90" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <div className="flex items-center justify-center space-x-3 mb-4 animate-[fadeIn_0.5s_ease-out]">
          <span className="h-px w-8 bg-brand-red"></span>
          <span className="text-brand-red font-bold tracking-[0.25em] text-xs uppercase font-heading">
            Technology & Machinery
          </span>
          <span className="h-px w-8 bg-brand-red"></span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-6 leading-tight">
          Horizontal <span className="text-brand-red">Stand-Up</span> Pouches
        </h1>
        
        <p className="text-white/80 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Bella Pack&apos;s HFFS systems represent the apex of packaging presentation and efficiency. Meticulously engineered for liquids, powders, granules, and pastes with high-tolerance sealing precision.
        </p>
      </div>
    </section>
  );
}
