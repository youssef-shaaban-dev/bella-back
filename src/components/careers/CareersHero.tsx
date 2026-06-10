"use client";

import Image from "next/image";
import React from "react";

export default function CareersHero() {
  return (
    <section className="relative h-inner-hero min-h-inner-hero bg-charcoal text-white overflow-hidden flex items-center justify-center">
      {/* Visual accents for industrial careers feeling */}
      <div className="absolute inset-0">
        <Image 
          src="/News/pacprocess-2025.jpeg" 
          alt="Join BellaPack" 
          className="w-full h-full object-cover opacity-20 grayscale select-none"
          fill
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/90 to-charcoal/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-32 md:pt-40">
        <div className="reveal flex items-center justify-center space-x-3 mb-6">
          <span className="h-px w-8 bg-brand-red"></span>
          <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase font-heading">Join The Mission</span>
          <span className="h-px w-8 bg-brand-red"></span>
        </div>

        <h1 className="reveal text-5xl md:text-8xl font-bold font-heading uppercase tracking-tighter mb-8 max-w-5xl mx-auto leading-[0.95]">
          Work at <span className="text-brand-red">BellaPack</span>
        </h1>

        <p className="reveal text-lg md:text-xl text-white/70 font-body max-w-3xl mx-auto leading-relaxed">
          At BellaPack, we believe that our people are the foundation of our success. We are continuously looking for talented, motivated, and passionate individuals who want to contribute to the development of high-performance packaging machinery.
        </p>
      </div>
    </section>
  );
}
