"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Industries Served",
    img: "/solution1.png",
    desc: "Comprehensive packaging lines tailored for food, chemical, and pharmaceutical sectors.",
  },
  {
    title: "Technology",
    img: "/solution2.png",
    desc: "Cutting-edge IoT-enabled mechanics ensuring peak automation efficiency.",
  },
  {
    title: "Project Solutions",
    img: "/solution3.png",
    desc: "Turnkey manufacturing solutions engineered end-to-end for scalable operations.",
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
        <div className="max-w-3xl mb-20">
          <h3 className="text-brand-red font-bold tracking-widest text-xs mb-4 uppercase">What We Offer</h3>
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal font-heading leading-tight uppercase tracking-tighter mb-6">
            OUR <span className="text-brand-red">SOLUTIONS.</span>
          </h2>
          <p className="text-charcoal/50 max-w-xl font-body text-lg leading-relaxed">
            Explore our integrated approach that combines sector-specific expertise, state-of-the-art engineering, and end-to-end implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <div key={i} className="industry-card group relative h-[500px] overflow-hidden rounded-sm cursor-pointer">
              {/* Background Image */}
              <img 
                src={solution.img} 
                alt={solution.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-3xl font-bold text-white mb-2 font-heading uppercase">{solution.title}</h4>
                  <p className="text-white/70 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
