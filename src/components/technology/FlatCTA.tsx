"use client";

import Link from "next/link";

export default function FlatCTA() {
  return (
    <section className="bg-charcoal text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold font-heading uppercase mb-6 tracking-tight">
          READY TO PRODUCE <span className="text-brand-red">FLAT POUCHES?</span>
        </h2>
        <p className="text-white/60 font-body text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover how BellaPack flat pouch machinery can support your packaging requirements with reliable performance and flexible production capabilities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-white hover:text-charcoal text-white font-heading font-bold uppercase text-xs tracking-widest rounded-sm transition-all duration-300 shadow-lg shadow-brand-red/10"
          >
            REQUEST A QUOTE
          </Link>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white font-heading font-bold uppercase text-xs tracking-widest rounded-sm transition-all duration-300 border border-white/20"
          >
            CONTACT OUR TEAM
          </Link>
        </div>
      </div>
    </section>
  );
}
