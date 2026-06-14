"use client";

import Link from "next/link";

export default function SolutionsCTA() {
  return (
    <section className="bg-charcoal text-white py-24 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <h3 className="text-brand-red font-bold tracking-[0.25em] text-xs uppercase font-heading mb-6">
          One Partner. Multiple Industries. Endless Possibilities.
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold font-heading uppercase mb-8 tracking-tight">
          Ready to Optimize Your <span className="text-brand-red">Packaging Operation?</span>
        </h2>
        <p className="text-white/70 font-body text-base md:text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
          Whether you&apos;re launching a new product or expanding production capacity, BellaPack machinery delivers the flexibility, reliability, and performance required for modern pouch packaging applications.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            href="/technology/horizontal-standup" 
            className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-white hover:text-charcoal text-white font-heading font-bold uppercase text-xs tracking-widest rounded-sm transition-all duration-300 shadow-lg shadow-brand-red/10"
          >
            Explore Our Machines
          </Link>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white font-heading font-bold uppercase text-xs tracking-widest rounded-sm transition-all duration-300 border border-white/20"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
