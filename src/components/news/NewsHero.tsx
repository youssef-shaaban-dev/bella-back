"use client";

import React from "react";

export default function NewsHero() {
  return (
    <section className="relative pt-48 pb-32 bg-[#0C111B] text-white overflow-hidden border-b border-white/5">
      {/* Clean abstract geometry overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute right-0 bottom-0 w-[800px] h-[800px] border border-dashed border-brand-red/30 rounded-full translate-x-1/4 translate-y-1/4 animate-[spin_240s_linear_infinite]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="reveal flex items-center justify-center space-x-3 mb-6">
          <span className="h-px w-8 bg-brand-red"></span>
          <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase font-heading">Official Updates</span>
          <span className="h-px w-8 bg-brand-red"></span>
        </div>

        <h1 className="reveal text-5xl md:text-8xl font-bold font-heading uppercase tracking-tighter mb-8 max-w-5xl mx-auto leading-none">
          News & <span className="text-brand-red">Exhibitions</span>
        </h1>

        <p className="reveal text-lg md:text-xl text-white/75 font-body max-w-2xl mx-auto leading-relaxed">
          Keep track of Bella Pack Tec&apos;s upcoming trade fair appearances, global launches, and major technological milestones on the international stage.
        </p>
      </div>
    </section>
  );
}
