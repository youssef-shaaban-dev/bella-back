"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { 
    id: 1, 
    title: "B Series", 
    category: "Standard Pouch Packaging", 
    img: "/PacProcess 2025/ 1.jpeg",
    desc: "Versatile systems for standard pouch formats."
  },
  { 
    id: 2, 
    title: "BS Series", 
    category: "Cap Insertion Solutions", 
    img: "/PacProcess 2025/ 2.jpeg",
    desc: "Specialized machines for spouted pouch applications."
  },
  { 
    id: 3, 
    title: "BP Series", 
    category: "Powder Filling Specialists", 
    img: "/PacProcess 2025/ 3.jpeg",
    desc: "High-precision auger and vacuum powder filling."
  },
];

export default function ProductGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-brand-red font-bold tracking-widest text-xs mb-4 uppercase">Advanced Machinery</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal font-heading tracking-tight uppercase">CORE PRODUCT RANGE</h2>
          <div className="h-1 w-20 bg-brand-red mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card group cursor-pointer bg-white p-2 rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video w-full mb-4 overflow-hidden rounded-sm">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center justify-between px-2 pb-2">
                <h4 className="text-sm font-bold text-charcoal uppercase tracking-widest">{product.title}</h4>
                <div className="px-4 py-1 border border-charcoal/20 text-xs font-bold uppercase hover:bg-charcoal hover:text-white transition-colors">
                  View
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
