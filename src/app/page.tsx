"use client";

import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import FeaturedMachine from "@/components/FeaturedMachine";
import PouchSelection from "@/components/PouchSelection";
import IndustriesOverview from "@/components/IndustriesOverview";
import OperationalExcellence from "@/components/OperationalExcellence";
import NewsExhibitions from "@/components/NewsExhibitions";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Core Value Proposition (Video Hero) */}
      <Hero />
      
      {/* 2. Industries Overview (Pouch Formats & Applications) */}
      <PouchSelection />

      {/* 3. Operational Excellence */}
      <OperationalExcellence />

      {/* 4. Core Product Range (Machine Finder) */}
      <ProductGrid />

      {/* 5. CTA */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-heading uppercase tracking-tighter">
            READY TO OPTIMIZE YOUR <br /> PRODUCTION LINE?
          </h2>
          <p className="text-white/80 max-w-2xl mb-12 font-body text-lg">
            Consult with our engineering team today and discover how Bella Pack's precision technology can transform your operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="/contact" 
              className="bg-white text-brand-blue px-10 py-5 rounded-sm font-heading font-bold text-lg hover:bg-charcoal hover:text-white transition-all duration-500 shadow-2xl flex items-center group"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              href="/solutions" 
              className="border-2 border-white text-white px-10 py-5 rounded-sm font-heading font-bold text-lg hover:bg-white hover:text-brand-red transition-all duration-500"
            >
              EXPLORE SOLUTIONS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
