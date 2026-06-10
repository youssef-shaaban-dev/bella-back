"use client";

import React from "react";
import { Play } from "lucide-react";

export default function MediaHero() {
  return (
    <section className="relative h-inner-hero min-h-inner-hero bg-charcoal text-white text-center overflow-hidden flex items-center justify-center">
      {/* Background accents removed per user request */}

      <div className="container mx-auto px-6 relative z-10 pt-32 md:pt-40">
        <div className="reveal flex items-center justify-center space-x-3 mb-6">
          <span className="h-px w-8 bg-brand-red"></span>
          <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase font-heading">Inside BellaPack</span>
          <span className="h-px w-8 bg-brand-red"></span>
        </div>

        <h1 className="reveal text-5xl md:text-8xl font-bold font-heading uppercase tracking-tighter mb-8 max-w-5xl mx-auto leading-[0.95]">
          Media <span className="text-brand-red">Center</span>
        </h1>

        <p className="reveal text-lg md:text-xl text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
          Explore our interactive video library to witness BellaPack&apos;s engineering precision, operating live in real-world high-output production environments.
        </p>
      </div>
    </section>
  );
}
