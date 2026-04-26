"use client";

import Image from "next/image";
import { ArrowRight, Settings, Sliders, Wrench, Download } from "lucide-react";
import Link from "next/link";

const industries = [
  "Food & Beverage",
  "Spices & Coffee",
  "Snacks & Granules",
  "Detergents & Chemical Products",
  "Cosmetics & Pharmaceuticals"
];

const technologySeries = [
  { name: "Horizontal flat pouches", desc: "Standard entry-level packaging solutions." },
  { name: "Horizontal stand-up pouches", desc: "High-speed servo-driven machinery." },
  { name: "Vertical machines", desc: "Horizontal solutions for complex pouches." },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Hero Header */}
      <section className="bg-brand-blue py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 uppercase tracking-tighter">
            PACKAGING <span className="text-brand-red">SOLUTIONS</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-body max-w-2xl mx-auto">
            Explore our comprehensive range of machinery and integrated systems designed to meet the exact demands of your industry.
          </p>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-charcoal mb-4 uppercase">Industries Served</h2>
            <div className="h-1 w-20 bg-brand-red mx-auto mb-6" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-white border border-gray-200 px-8 py-4 rounded-full text-charcoal font-bold shadow-sm hover:shadow-md hover:border-brand-red transition-all cursor-pointer">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold font-heading text-charcoal mb-4 uppercase">Technology</h2>
            <div className="h-1 w-20 bg-brand-blue mb-6" />
            <p className="text-gray-600 max-w-2xl">
              From entry-level to flagship multi-lane systems, our machine series are categorized to help you find the exact fit for your production needs. Technical downloads are available upon request for each series.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologySeries.map((series, idx) => (
              <div key={idx} className="group border-2 border-gray-100 p-8 rounded-sm hover:border-brand-red transition-colors relative overflow-hidden">
                <h3 className="text-2xl font-bold font-heading text-charcoal mb-3 uppercase group-hover:text-brand-red transition-colors">{series.name}</h3>
                <p className="text-gray-500 mb-8">{series.desc}</p>
                <Link href="/contact" className="inline-flex items-center text-sm font-bold text-brand-blue uppercase tracking-widest group-hover:text-brand-red">
                  <Download className="w-4 h-4 mr-2" />
                  Request Tech Specs
                </Link>
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 rounded-bl-full -z-10 group-hover:bg-brand-red/5 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Systems & Custom Engineering */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden">
              <Image src="/PacProcess 2025/ 2.jpeg" alt="Integrated Systems" fill className="object-cover" />
              <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply" />
            </div>
            <div>
              <h2 className="text-4xl font-bold font-heading mb-6 uppercase">Integrated Project Solutions</h2>
              <div className="h-1 w-20 bg-brand-red mb-8" />
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Beyond standalone machines, our engineering team specializes in <strong>Custom Engineering</strong>. We design, build, and deploy complete turnkey packaging lines synchronized for maximum throughput and minimal downtime.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Sliders className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading uppercase mb-2">Technical & Performance Tools</h4>
                    <p className="text-white/60">Advanced software integrations for line monitoring, OEE tracking, and predictive maintenance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-red/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Wrench className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading uppercase mb-2">Custom Tooling</h4>
                    <p className="text-white/60">Bespoke sealing jaws and dosing systems engineered specifically for your product's physical properties.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
