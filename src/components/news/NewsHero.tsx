"use client";

import Image from "next/image";

export default function NewsHero() {
  return (
    <section className="hero-section relative h-inner-hero min-h-inner-hero flex items-center justify-center text-center text-white overflow-hidden bg-charcoal">
      {/* Parallax Background using their actual PacProcess 2025 stand photo */}
      <div className="parallax-bg absolute inset-0 z-0 ">
        <Image
          src="/News/pacprocess-2025.webp"
          alt="BellaPack Exhibition Stand"
          fill
          className="object-cover brightness-[0.23] saturate-[0.8]"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-charcoal/40 via-transparent to-charcoal/90 z-0"></div>

      <div className="container relative z-10 px-6 pt-32 md:pt-40">
        <div className="reveal inline-flex items-center space-x-3 mb-6 border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full overflow-hidden">
          <span className="w-2 h-2 rounded-full bg-brand-red"></span>
          <span className="text-xs font-heading font-bold tracking-[0.3em] uppercase text-white/90">Official Updates</span>
        </div>

        <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter leading-[0.9] mb-6 uppercase">
          News & <span className="text-brand-red drop-shadow-[0_2px_20px_rgba(230,30,46,0.3)]">Exhibitions</span>
        </h1>

        <p className="reveal text-sm md:text-base font-body max-w-3xl mx-auto font-medium leading-relaxed text-gray-300">
          Keep track of BellaPack&apos;s upcoming trade fair appearances, global launches, and major technological milestones on the international stage.
        </p>
      </div>
    </section>
  );
}
