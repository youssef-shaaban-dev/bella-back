"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import IndustriesWeServe from "@/components/solutions/IndustriesWeServe";
import MachinePortfolio from "@/components/solutions/MachinePortfolio";
import CustomEngineering from "@/components/solutions/CustomEngineering";
import PerformanceTools from "@/components/solutions/PerformanceTools";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionsPage() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 93%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen bg-white text-charcoal relative">
      <SolutionsHero />
      <IndustriesWeServe />
      <MachinePortfolio />
      <CustomEngineering />
      <PerformanceTools />
    </main>
  );
}
