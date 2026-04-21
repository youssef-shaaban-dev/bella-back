"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: "ROTARY PREMADE POUCH",
    img: "/PacProcess 2025/ 1.jpeg",
    desc: "High-performance rotary systems for versatile premade pouch filling.",
  },
  {
    title: "HORIZONTAL FORM FILL",
    img: "/PacProcess 2025/ 2.jpeg",
    desc: "Compact HFFS machines delivering high-speed sealing and accuracy.",
  },
  {
    title: "VERTICAL SACHET",
    img: "/PacProcess 2025/ 3.jpeg",
    desc: "Precision VFFS technology for continuous motion granular and powder filling.",
  },
  {
    title: "INTEGRATED SYSTEMS",
    img: "/PacProcess 2025/ 4.jpeg",
    desc: "Custom-engineered turnkey packaging lines built to specification.",
  },
];

export default function IndustriesOverview() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".industry-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-brand-red font-bold tracking-widest text-xs mb-4 uppercase">Machinery</h3>
            <h2 className="text-5xl md:text-6xl font-bold text-charcoal font-heading leading-tight uppercase tracking-tighter">
              THE CORE <span className="text-brand-red">RANGE.</span>
            </h2>
          </div>
          <p className="text-charcoal/50 max-w-sm font-body text-lg">
            Delivering specialized packaging technologies and machines built with uncompromising precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <div key={i} className="industry-card group relative h-[500px] overflow-hidden rounded-sm cursor-pointer">
              {/* Background Image */}
              <img 
                src={industry.img} 
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-2xl font-bold text-white mb-2 font-heading">{industry.title}</h4>
                  <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {industry.desc}
                  </p>
                </div>
                <div className="flex items-center text-brand-red font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span>Explore Solutions</span>
                  <ArrowUpRight size={16} className="ml-2" />
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
