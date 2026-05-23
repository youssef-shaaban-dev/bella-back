"use client";

import React from "react";
import Link from "next/link";
import { Home, Compass, Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-[85vh] flex items-center justify-center bg-charcoal text-white overflow-hidden py-32 z-10">
      {/* Premium Industrial Tech Background overlays */}
      <div className="absolute inset-0 bg-charcoal z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px] opacity-40"></div>
        {/* Soft glowing brand red circular blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red filter blur-[130px] opacity-20 rounded-full"></div>
      </div>

      <div className="container relative z-10 px-6 max-w-3xl mx-auto text-center">
        {/* Dynamic badge */}
        <div className="inline-flex items-center space-x-3 mb-8 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
          <span className="text-xs font-heading font-bold tracking-[0.3em] uppercase text-white/80">System Out of Bounds</span>
        </div>

        {/* Massive 404 numbers with glowing outline and middle red slash */}
        <h1 className="text-[120px] sm:text-[180px] lg:text-[220px] font-heading font-black tracking-tighter leading-none select-none text-white/5 relative">
          4<span className="text-brand-red drop-shadow-[0_2px_40px_rgba(230,30,46,0.6)]">0</span>4
          <span className="absolute inset-0 flex items-center justify-center text-white/95 text-[100px] sm:text-[150px] lg:text-[180px] font-black z-10">
            4<span className="text-brand-red">0</span>4
          </span>
        </h1>

        {/* Industrial Subheading */}
        <h2 className="text-2xl sm:text-4xl font-heading font-bold uppercase tracking-tight text-white mb-4 mt-6">
          Line Sequence <span className="text-brand-red">Not Found</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 font-body text-sm sm:text-base leading-relaxed max-w-lg mx-auto font-medium mb-12">
          The requested system layout or parameter path has moved, changed, or has been temporarily decommissioned from our server grid.
        </p>

        {/* Dynamic CTA Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-4 bg-brand-red text-white hover:bg-white hover:text-charcoal font-heading font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-sm shadow-lg w-full sm:w-auto flex items-center justify-center space-x-2"
          >
            <Home size={12} />
            <span>Return to Home</span>
          </Link>
          
          <Link
            href="/solutions"
            className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-heading font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-sm w-full sm:w-auto flex items-center justify-center space-x-2"
          >
            <Compass size={12} />
            <span>Explore Solutions</span>
          </Link>
        </div>

        {/* Micro System Metadata block for a highly custom premium feeling */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-wrap items-center justify-center gap-6 text-[10px] font-heading font-bold uppercase tracking-widest text-white/30">
          <div className="flex items-center space-x-2">
            <Wrench size={10} className="text-brand-red" />
            <span>Status: Out of Calibration</span>
          </div>
          <span>•</span>
          <span>Index: ERR_404_ROUTE</span>
          <span>•</span>
          <span>System: HFFS Core</span>
        </div>
      </div>
    </main>
  );
}
