"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pouches = [
  { id: 1, name: "Stand-up Pouch", img: "/pouch1.png" },
  { id: 2, name: "Flat Bottom", img: "/pouch2.png" },
  { id: 3, name: "Spout Pouch", img: "/pouch3.png" },
  { id: 4, name: "Pillow Bag", img: "/pouch4.png" },
  { id: 5, name: "Vacuum Bag", img: "/pouch1.png" }, // Reusing for demo
  { id: 6, name: "Zipper Pouch", img: "/pouch2.png" }, // Reusing for demo
];

export default function PouchSelection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(itemsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h3 className="text-brand-blue font-bold tracking-widest text-xs mb-2 uppercase">Industry & Packaging</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 font-heading uppercase tracking-tighter text-charcoal">
              WIDE INDUSTRY <br />
              <span className="text-brand-blue">APPLICATION</span>
            </h2>
            <div className="h-1 w-20 bg-brand-red mt-6" />
          </div>
          <p className="text-gray-500 max-w-xl font-body text-lg">
            Our machinery offers wide applications in various industries, adapting to all types of packaging requirements for Food & Beverage, Spices & Coffee, Snacks & Granules, Detergents & Chemical Products, and Cosmetics & Pharmaceuticals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {pouches.map((pouch, index) => (
            <div
              key={pouch.id}
              ref={(el) => { itemsRef.current[index] = el; }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-brand-blue flex items-center justify-center p-4 transition-all duration-500 group-hover:border-brand-red group-hover:scale-105 shadow-lg group-hover:shadow-brand-red/20">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-50">
                 {/* @ts-ignore */}
                 <Image
                    src={pouch.img}
                    alt={pouch.name}
                    fill
                    onLoad={() => ScrollTrigger.refresh()}
                    className="object-contain p-4 transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Rotating border effect on hover */}
                <div className="absolute inset-[-4px] rounded-full border-2 border-transparent border-t-brand-red border-l-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
              <span className="mt-6 font-heading font-bold text-sm tracking-widest text-charcoal group-hover:text-brand-red transition-colors">
                {pouch.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
