"use client";

import React from "react";
import { Play } from "lucide-react";

export default function MediaHero() {
  return (
    <section className="relative bg-charcoal pt-48 pb-28 text-white text-center overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-brand-red filter blur-[100px]"></div>
        <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-brand-blue filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="reveal flex items-center justify-center space-x-3 mb-6">
          <span className="h-px w-8 bg-brand-red"></span>
          <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase font-heading">Inside Bella Pack</span>
          <span className="h-px w-8 bg-brand-red"></span>
        </div>

        <h1 className="reveal text-5xl md:text-8xl font-bold font-heading uppercase tracking-tighter mb-8 max-w-5xl mx-auto leading-[0.95]">
          Media <span className="text-brand-red">Center</span>
        </h1>

        <p className="reveal text-lg md:text-xl text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
          Explore our interactive video library to witness Bella Pack&apos;s engineering precision, operating live in real-world high-output production environments.
        </p>
      </div>
    </section>
  );
}
