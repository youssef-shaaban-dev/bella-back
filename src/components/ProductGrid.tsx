"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, title: "VFFS SERIES", category: "Vertical Filling", img: "/pouch1.png" },
  { id: 2, title: "RP-8 ROTARY", category: "Pouch Packaging", img: "/pouch2.png" },
  { id: 3, title: "HFFS COMPACT", category: "Horizontal Filling", img: "/pouch3.png" },
  { id: 4, title: "CW-500 CHECK", category: "Weight Control", img: "/pouch4.png" },
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
          <h2 className="text-4xl font-bold text-charcoal font-heading tracking-wide uppercase">MACHINE FINDER</h2>
          <div className="h-1 w-20 bg-brand-red mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
             { id: 1, title: "HFFS Machine", img: "/PacProcess 2025/ 1.jpeg" },
             { id: 2, title: "VFFS Machine", img: "/PacProcess 2025/ 2.jpeg" },
             { id: 3, title: "Premade Pouch", img: "/PacProcess 2025/ 3.jpeg" },
             { id: 4, title: "Integrated Systems", img: "/PacProcess 2025/ 4.jpeg" }
          ].map((product) => (
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
