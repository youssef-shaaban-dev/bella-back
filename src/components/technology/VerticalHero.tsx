"use client";

import Image from "next/image";

export default function VerticalHero() {
  return (
    <section className="relative h-inner-hero min-h-inner-hero bg-charcoal text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          fill
          src="/vertical-machines/vertical-machine.webp"
          alt="Vertical Packaging Machinery Header"
          className="w-full h-full object-cover opacity-60"
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
          Vertical <span className="text-brand-red">Form-Fill-Seal</span> MACHINES
        </h1>

        <p className="text-white/80 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Efficient VFFS machinery for various products, delivering accurate dosing, secure sealing, and reliable production performance.
        </p>
      </div>
    </section>
  );
}
