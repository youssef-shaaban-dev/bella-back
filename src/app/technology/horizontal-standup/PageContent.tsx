"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StandupHero from "@/components/technology/StandupHero";
import StandupOverview from "@/components/technology/StandupOverview";
import MachinePortfolioGrid from "@/components/technology/MachinePortfolioGrid";
import StandupPouchFormats from "@/components/technology/StandupPouchFormats";
import StandupCTA from "@/components/technology/StandupCTA";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalStandupPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global GSAP ScrollTrigger reveals for static section headers
      const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 12, opacity: 0 },
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
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="min-h-screen bg-white text-charcoal relative">
      <StandupHero />
      <StandupOverview />
      <MachinePortfolioGrid />
      <StandupPouchFormats />
      <StandupCTA />
    </main>
  );
}
