"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);



const products = [
  // Detergents
  {
    brand: "Henkel / Persil",
    img: "/Homepage/Products/persil.webp",
    glow: "shadow-green-500/20 hover:border-green-500/30",
    customScale: 1.2
  },
  {
    brand: "Henkel / Pril",
    img: "/Homepage/Products/pril no spout.webp",
    glow: "shadow-blue-500/20 hover:border-blue-500/30",
    customScale: 1.2
  },
  {
    brand: "Clorox",
    img: "/Homepage/Products/clorox.webp",
    glow: "shadow-blue-600/20 hover:border-blue-600/30",
    customScale: 0.85
  },
  {
    brand: "Dosh",
    img: "/Homepage/Products/Dosh.webp",
    glow: "shadow-teal-500/20 hover:border-teal-500/30",
    customScale: 1.5
  },
  {
    brand: "Bahi",
    img: "/Homepage/Products/Bahi-White.webp",
    glow: "shadow-blue-400/20 hover:border-blue-400/30",
    customScale: 1.2
  },

  // Food & Dairy
  {
    brand: "Gardino",
    img: "/Homepage/Products/gardino-2.webp",
    glow: "shadow-red-500/20 hover:border-red-500/30",
    customScale: 1
  },
  {
    brand: "El Hanem",
    img: "/Homepage/Products/el hanem 2.webp",
    glow: "shadow-yellow-500/20 hover:border-yellow-500/30",
    customScale: 1.3
  },
  {
    brand: "Rwaby",
    img: "/Homepage/Products/rwaby.webp",
    glow: "shadow-green-600/20 hover:border-green-600/30",
    customScale: 1.3
  },
  {
    brand: "Janah",
    img: "/Homepage/Products/janah.webp",
    glow: "shadow-orange-500/20 hover:border-orange-500/30",
    customScale: 1.3
  },
  {
    brand: "Crystal",
    img: "/Homepage/Products/Crystal.webp",
    glow: "shadow-yellow-600/20 hover:border-yellow-600/30",
    customScale: 1.6
  },
  {
    brand: "Malezy",
    img: "/Homepage/Products/malezy.webp",
    glow: "shadow-amber-500/20 hover:border-amber-500/30",
    customScale: 0.7
  },

  // Beverages & Spices
  {
    name: "Ahmed El Sheikh Coffee",
    brand: "Ahmed El Sheikh",
    category: "BEVERAGES & SPICES",
    img: "/Homepage/Products/ahmed el sheikh coffee.webp",
    glow: "shadow-amber-900/20 hover:border-amber-900/30",
    desc: "Nitrogen gas flushing to protect aroma and roast quality in coffee pouches.",
    customScale: 0.65
  },
  {
    name: "Brix Instant Drink",
    brand: "Brix",
    category: "BEVERAGES & SPICES",
    img: "/Homepage/Products/brix.webp",
    glow: "shadow-purple-500/20 hover:border-purple-500/30",
    desc: "Multi-lane powder auger filling with fast dust extraction and high output.",
    customScale: 1.3
  },
  {
    name: "Miro Milk Powder",
    brand: "Miro Milk",
    category: "BEVERAGES & SPICES",
    img: "/Homepage/Products/miro-milk.webp",
    glow: "shadow-cyan-400/20 hover:border-cyan-400/30",
    desc: "Hygienic powder packaging with strict hermetic seal validation.",
    customScale: 0.65
  },
  {
    name: "Qamaren Nectar Pouch",
    brand: "Qamaren",
    category: "BEVERAGES & SPICES",
    img: "/Homepage/Products/Qamaren.webp",
    glow: "shadow-orange-600/20 hover:border-orange-600/30",
    desc: "Spouted liquid pouch filling with high-accuracy flowmeter controls.",
    customScale: 1.6
  }
];

export default function BrandsPackaged() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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



  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50 overflow-hidden relative border-t border-gray-100">
      {/* Absolute Decorative Grid backgrounds for premium technical feeling */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-bl from-brand-red/5 to-transparent rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 brands-header-content">
          <div className="inline-flex items-center space-x-3 mb-4 justify-center w-full">
            <span className="w-8 h-px bg-brand-red"></span>
            <span className="text-brand-red font-bold tracking-widest text-xs uppercase font-heading flex items-center gap-1.5">
              <Sparkles size={12} /> TRUSTED BY LEADING BRANDS
            </span>
            <span className="w-8 h-px bg-brand-red"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-charcoal font-heading leading-tight uppercase tracking-tight mb-6">
            BRANDS TRUST <span className="text-brand-red">OUR MACHINES.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-body text-base md:text-lg leading-relaxed">
            Leading brands trust BellaPack packaging systems to deliver precision filling, reliable sealing, and efficient production across a wide range of applications.
          </p>
        </div>



        {/* Products Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 min-h-[400px]"
        >
          {products.map((prod) => (
            <div
              key={prod.brand}
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
                    alt={prod.brand}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain p-2 mix-blend-multiply group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-end pt-4">
                <h4 className="text-[11px] md:text-xs font-bold font-heading text-brand-red uppercase tracking-widest leading-snug">
                  {prod.brand}
                </h4>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
