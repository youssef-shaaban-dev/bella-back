"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Food & Beverage",
    img: "/Homepage/3.png",
    desc: "High-hygiene filling and packing lines engineered for tomato paste, juices, ghee, edible oils, and grains.",
    link: "/solutions"
  },
  {
    title: "Spices & Coffee",
    img: "/Homepage/4.png",
    desc: "High-precision powder filling solutions ensuring accurate dosing, aroma preservation, and zero waste.",
    link: "/solutions"
  },
  {
    title: "Snacks & Granules",
    img: "/Homepage/5.png",
    desc: "High-speed packaging systems designed for continuous, reliable bagging of snacks, nuts, and candies.",
    link: "/solutions"
  },
  {
    title: "Detergents & Chemicals",
    img: "/Homepage/6.png",
    desc: "Heavy-duty titanium-reinforced packaging lines built specifically to handle liquid detergents and corrosive bleach.",
    link: "/solutions"
  },
  {
    title: "Cosmetics & Pharma",
    img: "/Homepage/7.png",
    desc: "Ultra-sanitary dosing systems tailored for high-hygiene creams, gels, and pharmaceutical liquids.",
    link: "/solutions"
  }
];

export default function OurSolutions() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".industry-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.06,
        duration: 0.45,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h3 className="text-brand-red font-bold tracking-widest text-xs mb-4 uppercase">What We Offer</h3>
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal font-heading leading-tight uppercase tracking-tighter mb-6">
            OUR <span className="text-brand-red">SOLUTIONS.</span>
          </h2>
          <p className="text-charcoal/50 max-w-xl font-body text-lg leading-relaxed">
            Explore our integrated approach that combines sector-specific expertise, state-of-the-art engineering, and end-to-end implementation.
          </p>
        </div>

        {/* Premium Flex Wrap Grid that centers items beautifully */}
        <div className="flex flex-wrap justify-center gap-6">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="industry-card group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-20px)] h-[500px] overflow-hidden rounded-sm cursor-pointer shrink-0"
            >
              {/* Background Image */}
              <Image
                src={solution.img}
                alt={solution.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading uppercase">{solution.title}</h4>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed font-body">
                    {solution.desc}
                  </p>
                </div>
                <div className="flex items-center text-brand-red font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span>Explore Solution</span>
                  <ArrowUpRight size={18} className="ml-2" />
                </div>
              </div>

              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
