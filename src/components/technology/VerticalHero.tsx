"use client";

import Image from "next/image";

export default function VerticalHero() {
  return (
    <section className="relative h-[80vh] min-h-[450px] bg-charcoal text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          fill
          src="/ vertical machines/Vertical machine.png" 
          alt="Vertical Packaging Machinery Header" 
          className="w-full h-full object-cover opacity-30 transform scale-105 hover:scale-100 transition-transform duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/80 to-white" />
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
          Vertical <span className="text-brand-red">Form-Fill-Seal</span> Systems
        </h1>
        
        <p className="text-white/80 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Bella Pack&apos;s high-speed VFFS platforms deliver extreme throughput, micro-metric filling accuracy, and compact footprints. The ultimate solution for high-density granular, powder, and liquid lines.
        </p>
      </div>
    </section>
  );
}
