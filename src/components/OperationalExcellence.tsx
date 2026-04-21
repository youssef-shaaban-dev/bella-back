"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Cpu, FlaskConical, Gauge } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Precision Engineering",
    desc: "Every component is machined to micron-level tolerances for flawless operation.",
    icon: Cpu,
    stat: "0.01mm",
    label: "Accuracy"
  },
  {
    title: "Quality Assurance",
    desc: "Rigorous 48-hour continuous stress testing before any machine leaves our facility.",
    icon: ShieldCheck,
    stat: "100%",
    label: "Testing Rate"
  },
  {
    title: "Chemical Compliance",
    desc: "Materials certified for corrosive and high-sensitivity chemical packaging.",
    icon: FlaskConical,
    stat: "ISO-9001",
    label: "Certified"
  },
  {
    title: "High-Speed Throughput",
    desc: "Market-leading cycle times that maximize your ROI and production output.",
    icon: Gauge,
    stat: "120+",
    label: "Bags/Min"
  }
];

export default function OperationalExcellence() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden text-white text-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/PacProcess 2025/ 5.jpeg" alt="Machine Line" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="stat-item flex flex-col items-center">
            <span className="text-6xl font-heading font-bold mb-2">16</span>
            <span className="text-sm tracking-widest uppercase font-bold text-white/70">Years of Exp</span>
          </div>
          <div className="stat-item flex flex-col items-center border-l border-white/20">
            <span className="text-6xl font-heading font-bold mb-2">23</span>
            <span className="text-sm tracking-widest uppercase font-bold text-white/70">Countries</span>
          </div>
          <div className="stat-item flex flex-col items-center border-l border-white/20">
            <span className="text-6xl font-heading font-bold mb-2">53</span>
            <span className="text-sm tracking-widest uppercase font-bold text-white/70">Machine Types</span>
          </div>
          <div className="stat-item flex flex-col items-center border-l border-white/20">
            <span className="text-6xl font-heading font-bold mb-2">33</span>
            <span className="text-sm tracking-widest uppercase font-bold text-white/70">Awards</span>
          </div>
        </div>
      </div>
    </section>
  );
}
