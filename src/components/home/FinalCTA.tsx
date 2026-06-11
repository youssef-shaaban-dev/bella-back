"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-brand-blue/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-heading uppercase tracking-tighter">
          READY TO OPTIMIZE YOUR  <br /> PACKAGING OPERATIONS?
        </h2>
        <p className="text-white/80 max-w-2xl mb-12 font-body text-lg">
          Partner with BellaPack to develop a packaging solution tailored to your products, production targets, and business goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            href="/contact"
            className="bg-brand-red text-white px-10 py-5 rounded-sm font-heading font-bold text-lg hover:bg-white hover:text-brand-red transition-all duration-500 shadow-2xl flex items-center group"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
