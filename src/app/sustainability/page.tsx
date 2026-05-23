"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SustainabilityHero from "@/components/sustainability/SustainabilityHero";
import SustainabilityDetails from "@/components/sustainability/SustainabilityDetails";
import HSEPillars from "@/components/sustainability/HSEPillars";
import SustainabilityCTA from "@/components/sustainability/SustainabilityCTA";

gsap.registerPlugin(ScrollTrigger);

export default function SustainabilityPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global GSAP ScrollTrigger reveals
      const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="min-h-screen bg-white text-charcoal relative">
      <SustainabilityHero />
      <SustainabilityDetails />
      <HSEPillars />
      <SustainabilityCTA />
    </main>
  );
}
