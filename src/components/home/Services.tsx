"use client";

import { useEffect, useRef } from "react";
import { Wrench, Settings2, Boxes, GraduationCap, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Technical Support",
    desc: "24/7 worldwide remote diagnostics and rapid on-site emergency support services.",
    icon: Wrench,
  },
  {
    title: "Custom Engineering",
    desc: "Bespoke modular machine adjustments engineered precisely for your unique workflows.",
    icon: Settings2,
  },
  {
    title: "Spare Parts Supply",
    desc: "Extensive global inventory of genuine certified parts with prioritized fast delivery.",
    icon: Boxes,
  },
  {
    title: "Operator Training",
    desc: "Comprehensive validation and on-site technical educational courses for personnel.",
    icon: GraduationCap,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations removed per user request so cards always appear instantly
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50 text-charcoal overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-brand-red font-bold tracking-widest text-xs mb-4 uppercase font-heading">Value Added</h3>
          <h2 className="text-4xl md:text-5xl font-bold font-heading uppercase tracking-tight mb-6">
            Services
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx} 
                className="service-card group relative bg-white border border-gray-100 p-10 transition-all duration-500 hover:border-brand-red/30 hover:shadow-xl rounded-sm flex flex-col h-full"
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-gray-100 group-hover:bg-brand-red text-charcoal group-hover:text-white transition-colors duration-500 rounded-sm">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                
                <h4 className="text-xl font-bold font-heading uppercase mb-4 tracking-wide group-hover:text-brand-red transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-body flex-grow">
                  {service.desc}
                </p>

              
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
