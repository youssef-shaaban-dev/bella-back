"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlatHero from "@/components/technology/FlatHero";
import FlatOverview from "@/components/technology/FlatOverview";
import PouchShapesGallery from "@/components/technology/PouchShapesGallery";
import FlatCTA from "@/components/technology/FlatCTA";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalFlatPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global GSAP ScrollTrigger reveals for static section headers
      const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
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
      <FlatHero />
      <FlatOverview />
      <PouchShapesGallery />
      <FlatCTA />
    </main>
  );
}
