"use client";

import React from "react";
import Link from "next/link";

export default function StandupCTA() {
  return (
    <section className="bg-charcoal text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold font-heading uppercase mb-6 tracking-tight">
          Configure Your <span className="text-brand-red">Stand-Up Pouch</span> Line
        </h2>
        <p className="text-white/60 font-body text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          Need customized sealing jaws, multi-head weighers, or double auger configurations? Contact our Cairo central engineering unit to define your exact production parameters.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-white hover:text-charcoal text-white font-heading font-bold uppercase text-xs tracking-widest rounded-sm transition-all duration-300 shadow-lg shadow-brand-red/10"
          >
            Consult an Engineer
          </Link>
          <Link 
            href="/solutions" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white font-heading font-bold uppercase text-xs tracking-widest rounded-sm transition-all duration-300 border border-white/20"
          >
            Explore Solutions v2
          </Link>
        </div>
      </div>
    </section>
  );
}
