"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Wind, Recycle } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Eco-Friendly Materials",
    desc: "Our latest sealing technologies are optimized for 100% recyclable, compostable, and mono-material films.",
    icon: Leaf,
  },
  {
    title: "Energy Efficiency",
    desc: "Intelligent machine design that supports lower energy consumption.",
    icon: Wind,
  },
  {
    title: "Waste Reduction",
    desc: "Precision filling and sealing technologies that minimize product giveaway and film waste.",
    icon: Recycle,
  }
];

export default function Sustainability() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
        y: 15,
        opacity: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 relative overflow-hidden text-white text-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image fill src="/Homepage/slide-banner-4.webp" alt="Machine Line" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h3 className="text-brand-red font-bold tracking-widest text-xs mb-4 uppercase">Sustainability</h3>
          <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase mb-6">
            Sustainability 
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-body text-lg">
            We believe that industrial advancement must go hand-in-hand with environmental stewardship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="stat-item flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
                <span className="text-brand-red mb-4">
                  <Icon size={48} />
                </span>
                <h4 className="text-2xl font-bold font-heading mb-2 uppercase text-center">{item.title}</h4>
                <p className="text-white/50 text-sm text-center">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
