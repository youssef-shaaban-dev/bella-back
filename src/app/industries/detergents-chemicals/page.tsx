"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldAlert, CheckCircle2, ChevronRight, Settings2, ShieldCheck, Zap, ArrowLeft } from "lucide-react";

export default function DetergentsChemicalsPage() {
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  const images = [
    "/solutions/ Detergents & Chemicals Products/ Detergents pouches.jpeg"
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Cinematic Hero Section */}
      <section className="hero-section relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110">
          <Image
            src="/solutions/ Detergents & Chemicals Products/ Detergents pouches.jpeg"
            alt="Detergents & Chemical Products Packaging"
            fill
            className="object-cover brightness-[0.25] saturate-[0.8]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/90 z-0"></div>

        <div className="container relative z-10 px-6">
          <div className="inline-flex items-center space-x-2 mb-4 border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
            <span className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase text-white/90">Sector 04</span>
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold font-heading uppercase tracking-tighter leading-none mb-6">
            Detergents & <span className="text-brand-red">Chemicals</span>
          </h1>

          <div className="flex items-center justify-center space-x-2 text-xs font-heading font-bold uppercase tracking-widest text-white/60">
            <Link href="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link href="/solutions" className="hover:text-brand-red transition-colors">Solutions</Link>
            <ChevronRight size={10} />
            <span className="text-white">Detergents & Chemicals</span>
          </div>
        </div>
      </section>

      {/* 2. Detailed Split Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Detailed Text Copy */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="h-px w-8 bg-brand-red"></span>
                  <h3 className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-heading">Titanium-Reinforced Chemical Proof Systems</h3>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tight text-charcoal leading-tight">
                  Accurate & Safe Chemical <span className="text-brand-red">Filling</span>
                </h2>
              </div>

              <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed">
                At Bella Pack Tec, we provide advanced packaging solutions designed to meet the demanding requirements of detergent and chemical product manufacturers. Our systems are engineered to deliver safe, efficient, and reliable packaging performance for liquid, powder, and granular chemical products across various industrial applications.
              </p>

              <p className="text-gray-500 font-body text-sm leading-relaxed">
                We understand the importance of precision, durability, and product protection in the chemical packaging industry. That is why our packaging technologies are developed to ensure accurate filling, secure sealing, and consistent packaging quality while supporting high-speed production operations. Whether packaging cleaning products, detergents, industrial chemicals, or household solutions, Bella Pack delivers flexible pouch packaging systems tailored to modern manufacturing needs.
              </p>

              {/* Formulations checklist */}
              <div className="pt-8 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Supported Formulations</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Liquid Detergents & Softeners",
                    "Chlorine Bleach & Oxidizers",
                    "Corrosive Household Chemicals",
                    "Detergent Powders & Granules",
                    "Dishwasher Liquid Refills",
                    "Chemical Gels & Paste Packs"
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-50 border border-gray-100 p-4 rounded-sm flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-xs font-heading font-bold uppercase tracking-wide text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Gallery Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative bg-white border border-gray-200/80 rounded-sm overflow-hidden shadow-sm group p-6">
                <Image
                  src={images[activeImgIdx]}
                  alt="Detergents & Chemicals packaging gallery"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Thumbnails (If more than one image exists, otherwise not rendered) */}
              {images.length > 1 && (
                <div className="flex gap-2 justify-center flex-wrap">
                  {images.map((img, i) => (
                    <button
                      key={img}
                      onClick={() => setActiveImgIdx(i)}
                      className={`relative w-16 h-16 border rounded-sm overflow-hidden bg-white shrink-0 transition-all ${
                        activeImgIdx === i 
                          ? "border-brand-red ring-2 ring-brand-red/10 scale-105" 
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Detergents thumbnail ${i + 1}`}
                        fill
                        sizes="64px"
                        className="object-contain p-1"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Recommended Machinery */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-heading mb-3">Recommended Technology</h3>
            <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tighter text-charcoal">
              Target <span className="text-brand-red">Machinery</span> Configurations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                series: "BS Series",
                title: "Anti-Corrosion Spout & Cap",
                desc: "Manufactured strictly with Anti-Corrosive Titanium alloys or SS 316L, designed specifically for acid detergents, bleaches, and aggressive chemicals.",
                tech: ["Titanium / SS316L Construction", "Hastelloy Chemical Pumps", "Anti-drip Dosing Valves"]
              },
              {
                series: "B Series",
                title: "Auger Powder Chemical Packaging",
                desc: "Equipped with dust-tight auger feeders to packaging detergent powders, washing soda, and agricultural chemicals safely.",
                tech: ["Dust-Tight Closed Auger", "Air-Purged Sealing Jaws", "Static Eliminator Bars"]
              },
              {
                series: "BSS Series",
                title: "Dynamic Flow Liquid Sachet",
                desc: "Hybrid continuous flow sachet machine for liquid household cleaners, dishwashing soaps, and liquid soaps.",
                tech: ["Multi-Lane Dosing Pumps", "Flexible Heat Seal Tooling", "Embossed Code Printers"]
              }
            ].map((mach, idx) => (
              <div key={idx} className="bg-white border border-gray-200/80 p-8 rounded-sm shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="inline-block bg-brand-red text-white font-heading font-bold text-xs uppercase px-3 py-1 mb-4 rounded-sm tracking-widest">{mach.series}</span>
                  <h4 className="font-heading font-bold uppercase text-charcoal text-lg tracking-tight mb-2">{mach.title}</h4>
                  <p className="text-gray-500 font-body text-xs leading-relaxed mb-6 font-semibold">{mach.desc}</p>
                </div>
                <div className="border-t border-gray-100 pt-6 space-y-2">
                  {mach.tech.map((t, tIdx) => (
                    <div key={tIdx} className="flex items-center text-[10px] font-heading font-bold uppercase tracking-wider text-charcoal/80 space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sleek CTA */}
      <section className="bg-charcoal text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-size-[40px_40px] opacity-20"></div>
        <div className="container relative z-10 px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tighter mb-6 leading-none">
            Need a <span className="text-brand-red">Corrosive-Proof</span> Solution?
          </h2>
          <p className="text-gray-400 font-body text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto font-medium">
            Contact our chemical engineering division to discuss alloy certifications, pump compatibility, or CAD footprints.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-red text-white hover:bg-white hover:text-charcoal font-heading font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-sm shadow-lg w-full sm:w-auto"
            >
              Get a Proposal
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-heading font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-sm w-full sm:w-auto flex items-center justify-center space-x-2"
            >
              <ArrowLeft size={12} />
              <span>Back to Solutions</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
