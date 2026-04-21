"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "YEARS OF EXPERIENCE", value: 25, suffix: "+" },
  { label: "MACHINES SOLD", value: 1500, suffix: "+" },
  { label: "COUNTRIES SERVED", value: 45, suffix: "" },
  { label: "SUCCESS RATE", value: 99, suffix: "%" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((_, i) => {
        const target = { val: 0 };
        const endVal = stats[i].value;
        const counterEl = document.getElementById(`counter-${i}`);

        if (counterEl) {
          gsap.to(target, {
            val: endVal,
            duration: 2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
            onUpdate: () => {
              counterEl.innerText = Math.floor(target.val).toLocaleString();
            },
            ease: "power2.out",
          });
        }
      });

      // Background reveal
      gsap.from(".stats-bg", {
        scaleX: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-brand-red overflow-hidden">
      <div className="absolute inset-0 stats-bg bg-brand-blue origin-left" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center text-white">
              <div className="flex items-center justify-center font-heading font-bold text-6xl md:text-8xl mb-4">
                <span id={`counter-${i}`}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="font-heading font-bold tracking-[0.2em] text-xs md:text-sm text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 border-r-4 border-t-4 border-white/10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border-l-4 border-b-4 border-white/10 translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
