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
        <div className="mb-20">
          <h3 className="text-brand-red font-bold tracking-widest text-xs mb-4 uppercase">Operational Excellence</h3>
          <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase mb-6">
            BSS <span className="text-brand-red">SERIES</span> PERFORMANCE
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-body text-lg">
            Experience in performance with our high-speed BSS Series, designed for continuous industrial production with minimal downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="stat-item flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
            <span className="text-brand-red mb-4">
              <ShieldCheck size={48} />
            </span>
            <h4 className="text-2xl font-bold font-heading mb-2 uppercase">Precision Filling</h4>
            <p className="text-white/50 text-sm">Extreme accuracy in volumetric and weight-based dosing.</p>
          </div>
          <div className="stat-item flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
            <span className="text-brand-red mb-4">
              <Cpu size={48} />
            </span>
            <h4 className="text-2xl font-bold font-heading mb-2 uppercase">Accurate Forming</h4>
            <p className="text-white/50 text-sm">Perfect pouch geometry with servo-driven precision.</p>
          </div>
          <div className="stat-item flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
            <span className="text-brand-red mb-4">
              <FlaskConical size={48} />
            </span>
            <h4 className="text-2xl font-bold font-heading mb-2 uppercase">Consistent Sealing</h4>
            <p className="text-white/50 text-sm">Hermetic seals ensured by advanced thermal control.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
