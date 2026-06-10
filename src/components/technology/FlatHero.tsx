"use client";

import Image from "next/image";

export default function FlatHero() {
  return (
    <section className="relative h-inner-hero min-h-inner-hero bg-charcoal text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          fill
          src="/pouch shapes/group pouch shapes banner.png" 
          alt="Horizontal Flat Pouch Packaging Formats" 
          className="w-full h-full object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/40 via-charcoal/80 to-charcoal/90" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <div className="flex items-center justify-center space-x-3 mb-4 animate-[fadeIn_0.5s_ease-out]">
          <span className="h-px w-8 bg-brand-red"></span>
          <span className="text-brand-red font-bold tracking-[0.25em] text-xs uppercase font-heading">
            Technology &amp; Machinery
          </span>
          <span className="h-px w-8 bg-brand-red"></span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-6 leading-tight">
          Horizontal <span className="text-brand-red">Flat</span> Pouches
        </h1>
        
        <p className="text-white/80 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          BellaPack&apos;s HFFS flat pouch systems deliver unmatched versatility across 12 distinct pouch configurations — from classic pillow pouches to shaped spout formats — all on a single high-speed production line.
        </p>
      </div>
    </section>
  );
}
