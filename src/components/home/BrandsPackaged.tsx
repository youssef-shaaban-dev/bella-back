"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = ["ALL", "DETERGENTS", "FOOD & DAIRY", "BEVERAGES & SPICES"];

const products = [
  // Detergents
  {
    name: "Persil Liquid Gel",
    brand: "Henkel / Persil",
    category: "DETERGENTS",
    img: "/Homepage/Products/persil.png",
    glow: "shadow-green-500/20 hover:border-green-500/30",
    desc: "Precision gel-filling at high velocities with drop-tight seal execution.",
    customScale: 1.2
  },
  {
    name: "Pril Dishwashing Liquid",
    brand: "Henkel / Pril",
    category: "DETERGENTS",
    img: "/Homepage/Products/pril no spout.png",
    glow: "shadow-blue-500/20 hover:border-blue-500/30",
    desc: "Continuous high-speed flow packing with dynamic viscosity adjustment.",
    customScale: 1.2
  },
  {
    name: "Clorox Bleach Pouch",
    brand: "Clorox",
    category: "DETERGENTS",
    img: "/Homepage/Products/clorox.png",
    glow: "shadow-blue-600/20 hover:border-blue-600/30",
    desc: "Chemical-resistant filling lines built with anti-corrosion stainless steel.",
    customScale: 0.85
  },
  {
    name: "Dosh Liquid Gel",
    brand: "Dosh",
    category: "DETERGENTS",
    img: "/Homepage/Products/Dosh.png",
    glow: "shadow-teal-500/20 hover:border-teal-500/30",
    desc: "Multi-head nozzle dosing ensuring absolute zero product giveaway.",
    customScale: 1.5
  },
  {
    name: "Bahi White Liquid",
    brand: "Bahi",
    category: "DETERGENTS",
    img: "/Homepage/Products/Bahi White .png",
    glow: "shadow-blue-400/20 hover:border-blue-400/30",
    desc: "Robust stand-up sachet form-fill-seal optimized for home care products.",
    customScale: 1.2
  },

  // Food & Dairy
  {
    name: "Gardino Paste",
    brand: "Gardino",
    category: "FOOD & DAIRY",
    img: "/Homepage/Products/ gardino.png",
    glow: "shadow-red-500/20 hover:border-red-500/30",
    desc: "Aseptic hot-fill sachet packaging maintaining taste and natural aroma.",
    customScale: 1
  },
  {
    name: "El Hanem Margarine",
    brand: "El Hanem",
    category: "FOOD & DAIRY",
    img: "/Homepage/Products/el hanem 2.png",
    glow: "shadow-yellow-500/20 hover:border-yellow-500/30",
    desc: "High-accuracy high-viscosity paste dosing for shortening and margarines.",
    customScale: 1.3
  },
  {
    name: "Rwaby Margarine",
    brand: "Rwaby",
    category: "FOOD & DAIRY",
    img: "/Homepage/Products/rwaby.png",
    glow: "shadow-green-600/20 hover:border-green-600/30",
    desc: "Robust oxygen barrier sealing for long shelf-life dairy and butter spreads.",
    customScale: 1.3
  },
  {
    name: "Janah Shortening",
    brand: "Janah",
    category: "FOOD & DAIRY",
    img: "/Homepage/Products/janah.png",
    glow: "shadow-orange-500/20 hover:border-orange-500/30",
    desc: "Servo-driven multi-lane filling lines with hot jacketed hopper systems.",
    customScale: 1.3
  },
  {
    name: "Crystal Ghee",
    brand: "Crystal",
    category: "FOOD & DAIRY",
    img: "/Homepage/Products/Crystal.png",
    glow: "shadow-yellow-600/20 hover:border-yellow-600/30",
    desc: "Advanced volumetric pump filling engineered for liquid butter products.",
    customScale: 1.6
  },
  {
    name: "Malezy Butter",
    brand: "Malezy",
    category: "FOOD & DAIRY",
    img: "/Homepage/Products/malezy.png",
    glow: "shadow-amber-500/20 hover:border-amber-500/30",
    desc: "Perfect pillow-pack format with high speed and zero seal integrity leaks.",
    customScale: 0.7
  },

  // Beverages & Spices
  {
    name: "Ahmed El Sheikh Coffee",
    brand: "Ahmed El Sheikh",
    category: "BEVERAGES & SPICES",
    img: "/Homepage/Products/ahmed el sheikh coffee.jpeg",
    glow: "shadow-amber-900/20 hover:border-amber-900/30",
    desc: "Nitrogen gas flushing to protect aroma and roast quality in coffee pouches.",
    customScale: 0.65
  },
  {
    name: "Brix Instant Drink",
    brand: "Brix",
    category: "BEVERAGES & SPICES",
    img: "/Homepage/Products/brix .png",
    glow: "shadow-purple-500/20 hover:border-purple-500/30",
    desc: "Multi-lane powder auger filling with fast dust extraction and high output.",
    customScale: 1.3
  },
  {
    name: "Miro Milk Powder",
    brand: "Miro Milk",
    category: "BEVERAGES & SPICES",
    img: "/Homepage/Products/miro milk.jpeg",
    glow: "shadow-cyan-400/20 hover:border-cyan-400/30",
    desc: "Hygienic powder packaging with strict hermetic seal validation.",
    customScale: 0.65
  },
  {
    name: "Qamaren Nectar Pouch",
    brand: "Qamaren",
    category: "BEVERAGES & SPICES",
    img: "/Homepage/Products/Qamaren .png",
    glow: "shadow-orange-600/20 hover:border-orange-600/30",
    desc: "Spouted liquid pouch filling with high-accuracy flowmeter controls.",
    customScale: 1.6
  }
];

export default function BrandsPackaged() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProducts = activeCategory === "ALL" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  useEffect(() => {
    // Reveal section headers and the grid container on scroll (using static parents to avoid unmount bugs)
    const ctx = gsap.context(() => {
      gsap.from(".brands-header-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 93%",
        },
        y: 15,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out"
      });

      gsap.from(".brands-tabs-container", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        y: 10,
        opacity: 0,
        duration: 0.35,
        ease: "power3.out"
      });

      gsap.from(gridRef.current, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 90%",
        },
        y: 18,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
        onComplete: () => {
          ScrollTrigger.refresh();
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate grid elements on category change
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".product-card-item");
    if (!cards || cards.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(cards, 
        { opacity: 0, scale: 0.97, y: 8 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, stagger: 0.03, ease: "power2.out" }
      );
    });

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden relative border-t border-gray-100">
      {/* Absolute Decorative Grid backgrounds for premium technical feeling */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-bl from-brand-red/5 to-transparent rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 brands-header-content">
          <div className="inline-flex items-center space-x-3 mb-4 justify-center w-full">
            <span className="w-8 h-px bg-brand-red"></span>
            <span className="text-brand-red font-bold tracking-widest text-xs uppercase font-heading flex items-center gap-1.5">
              <Sparkles size={12} /> PROUDLY PACKAGED BY BELLA PACK
            </span>
            <span className="w-8 h-px bg-brand-red"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-charcoal font-heading leading-tight uppercase tracking-tight mb-6">
            BRANDS TRUST <span className="text-brand-red">OUR MACHINES.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-body text-base md:text-lg leading-relaxed">
            From globally recognized giants to premier local brands, discover the diverse household names whose detergents, foods, and beverages are filled and packaged with maximum precision using our machinery.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 brands-tabs-container">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-2 md:px-6 md:py-3 font-heading font-bold text-[11px] md:text-sm tracking-widest uppercase transition-all duration-300 rounded-sm cursor-pointer border ${
                activeCategory === cat 
                  ? "bg-charcoal text-white border-charcoal shadow-lg shadow-charcoal/20" 
                  : "bg-white text-gray-500 border-gray-100 hover:text-charcoal hover:bg-gray-100 hover:border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 min-h-[400px]"
        >
          {filteredProducts.map((prod) => (
            <div
              key={prod.name}
              className="product-card-item bg-white border border-gray-100 p-6 rounded-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-gray-300 flex flex-col group"
            >
              {/* Image Container unified height and transparent background */}
              <div className="relative h-56 w-full bg-transparent overflow-hidden mb-6 flex items-center justify-center transition-colors">
                <div 
                  className="relative w-full h-full flex items-center justify-center"
                  style={{ transform: `scale(${(prod).customScale || 1})` }}
                >
                  <Image
                    src={prod.img}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain p-2 mix-blend-multiply group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="grow flex flex-col">
                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-brand-red mb-1">
                  {prod.brand}
                </span>
                <h4 className="text-lg font-bold font-heading text-charcoal uppercase tracking-wide group-hover:text-brand-red transition-colors mb-3 leading-snug">
                  {prod.name}
                </h4>
                <p className="text-gray-500 text-xs font-body leading-relaxed grow">
                  {prod.desc}
                </p>
              </div>

              {/* Specifications Tag */}
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-[10px] font-body text-gray-400">
                <span className="font-bold uppercase tracking-wider text-charcoal/30">{prod.category}</span>
                <span className="text-brand-blue font-semibold">Servo-Controlled</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
