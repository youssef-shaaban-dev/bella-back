"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";

export default function FoodBeveragePage() {
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  const images = [
    "/solutions/Food & Beverage/ Food .jpeg",
    "/solutions/Food & Beverage/ food 2 .jpeg"
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Cinematic Hero Section */}
      <section className="hero-section relative h-inner-hero min-h-inner-hero flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110">
          <Image
            src="/solutions/Food & Beverage/ food 2 .jpeg"
            alt="Food & Beverage Industry Packaging"
            fill
            className="object-cover brightness-[0.25] saturate-[0.8]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/40 via-transparent to-charcoal/90 z-0"></div>

        <div className="container relative z-10 px-6">
          <div className="inline-flex items-center space-x-2 mb-4 border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
            <span className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase text-white/90">Sector 01</span>
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold font-heading uppercase tracking-tighter leading-none mb-6">
            Food & <span className="text-brand-red">Beverage</span>
          </h1>

          <div className="flex items-center justify-center space-x-2 text-xs font-heading font-bold uppercase tracking-widest text-white/60">
            <Link href="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link href="/solutions" className="hover:text-brand-red transition-colors">Solutions</Link>
            <ChevronRight size={10} />
            <span className="text-white">Food & Beverage</span>
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
                  <h3 className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-heading">Smart Hygienic Packaging Systems</h3>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tight text-charcoal leading-tight">
                  High-Performance F&B <span className="text-brand-red">Packaging</span>
                </h2>
              </div>

              <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed">
                At Bella Pack Tec, we provide advanced packaging technologies tailored to the evolving needs of the Food & Beverage industry. Our solutions are designed to support manufacturers with high-performance packaging systems that combine efficiency, precision, hygiene, and reliability.
              </p>

              <p className="text-gray-500 font-body text-sm leading-relaxed">
                From dry products and powders to liquids and granules, our machines are engineered to handle a wide variety of food applications while maintaining product integrity and production consistency. We help businesses optimize their packaging operations with smart automation, flexible configurations, and durable machine construction suitable for continuous industrial performance.
              </p>

              {/* Formulations checklist */}
              <div className="pt-8 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Supported Formulations</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Tomato Paste & Sauces",
                    "Edible Oils & Fats",
                    "Juices & Liquid Drinks",
                    "Ghee & Dairy Products",
                    "Coffee & Powder Premixes",
                    "Grains & Granular Foods"
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
                  alt="Food & Beverage packaging gallery"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Thumbnails */}
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
                      alt={`Food & Beverage thumbnail ${i + 1}`}
                      fill
                      sizes="64px"
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
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
                series: "B Series",
                title: "HFFS Flat Sachet Flat-bed",
                desc: "Standard flat-bag packaging line, optimized for single-serving sachets, powders, sauces, and liquids with extreme hygiene ratings.",
                tech: ["Standard Flat Bag", "Liquid Dosing Pumps", "Hygienic Steel 316"]
              },
              {
                series: "BS Series",
                title: "Vibration Capping & Spout",
                desc: "Equipped with advanced vibration capping and spouted dosing tools. Perfect for liquid juices, condiments, and baby food pouches.",
                tech: ["Spout Insert Tools", "Vibration Cap Feeders", "Rotary Dosing Units"]
              },
              {
                series: "BSS Series",
                title: "All-in-One Hybrid Solutions",
                desc: "Custom high-speed lines engineered to handle granular, dry and liquid foods interchangeably on a modular frame.",
                tech: ["Dynamic Dosing Mixers", "Gas Flush Systems", "Laser Code Printers"]
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
            Ready to <span className="text-brand-red">Optimize</span> Your F&B Line?
          </h2>
          <p className="text-gray-400 font-body text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto font-medium">
            Contact our engineering division to request custom CAD footprints, layout proposals, or parameter testing.
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
