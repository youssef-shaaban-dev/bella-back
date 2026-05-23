"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SustainabilityHero() {
  return (
    <section className="hero-section relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="parallax-bg absolute inset-0 z-0 scale-110">
        <Image
          src="/Sustainability/sustainability pouches dark background.png"
          alt="Bella Pack Sustainable Packaging Pouches"
          fill
          className="object-cover brightness-[0.25] saturate-[0.8]"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/90 z-0"></div>

      <div className="container relative z-10 px-6">
        <div className="reveal inline-flex items-center space-x-3 mb-6 border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full overflow-hidden">
          <span className="w-2 h-2 rounded-full bg-brand-red"></span>
          <span className="text-xs font-heading font-bold tracking-[0.3em] uppercase text-white/90">Together for Tomorrow</span>
        </div>

        <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter leading-[0.9] mb-6 uppercase">
          SUSTAINABILITY <br />
          IN <span className="text-brand-red drop-shadow-[0_2px_20px_rgba(230,30,46,0.3)]">PACKAGING</span>
        </h1>

        <p className="reveal text-sm md:text-base font-body max-w-3xl mx-auto font-medium leading-relaxed text-gray-300">
          Sustainable packaging is no longer just an option—it is an industry responsibility. It means using fewer natural resources, reducing material waste, and lowering energy consumption throughout the production process.
        </p>

        <div className="reveal flex items-center justify-center space-x-2 mt-8 text-xs font-heading font-bold uppercase tracking-widest text-white/60">
          <Link href="/" className="hover:text-brand-red transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span className="text-white">Sustainability</span>
        </div>
      </div>
    </section>
  );
}
