"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Settings, Shield, Zap, Activity, Cpu, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "AI CONTROL UNIT",
    desc: "Self-learning algorithms optimize packaging speed based on product flow.",
    icon: Cpu,
  },
  {
    title: "TOTAL HYGIENE",
    desc: "Surgical-grade stainless steel with zero-gap construction for easy cleaning.",
    icon: Shield,
  },
  {
    title: "ENERGY RECOVERY",
    desc: "Recovers up to 25% of kinetic energy to power secondary systems.",
    icon: Zap,
  },
  {
    title: "REMOTE MONITORING",
    desc: "Full IoT integration for real-time diagnostic reporting from anywhere.",
    icon: Globe,
  },
];

export default function FeaturedMachine() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white text-charcoal text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase tracking-wide mb-12 fade-up">
          BELLA PACK HORIZONTAL POUCH MACHINE MANUFACTURER
        </h2>

        <div className="relative w-full max-w-4xl mx-auto aspect-[2/1] mb-12 fade-up">
          <Image
            src="/featured-machine.png"
            alt="Horizontal Pouch Machine"
            fill
            className="object-contain"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-bold font-heading uppercase tracking-widest fade-up">
          THE BEST SOLUTION FOR PACKAGING.
        </h3>
      </div>
    </section>
  );
}
