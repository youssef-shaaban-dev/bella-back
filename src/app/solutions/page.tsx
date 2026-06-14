"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import IndustriesWeServe from "@/components/solutions/IndustriesWeServe";
import FlatOverview from "@/components/technology/FlatOverview";
import PouchShapesGallery from "@/components/technology/PouchShapesGallery";
import PackagingTechnologies from "@/components/solutions/PackagingTechnologies";
import CustomEngineering from "@/components/solutions/CustomEngineering";
import PerformanceTools from "@/components/solutions/PerformanceTools";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

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
      <FlatOverview 
        title={
          <>ADVANCED <span className="text-brand-red">POUCH PACKAGING</span> SOLUTIONS</>
        }
        paragraphs={[
          "At BellaPack, our Horizontal Form-Fill-Seal (HFFS) machines are engineered to produce a wide range of pouch formats on a single production platform. From stand-up and flat pouches to shaped, spouted, and zipper configurations, our machines provide the flexibility required to meet diverse market and product requirements.",
          "Designed for liquids, powders, granules, and semi-viscous products, BellaPack machines combine reliable filling, secure sealing, and intelligent automation to ensure consistent packaging quality across every pouch format.",
          "With versatile machine configurations, durable industrial construction, and support for advanced pouch features, BellaPack helps manufacturers deliver high-quality packaging solutions while maintaining efficient and dependable production performance."
        ]}
        capabilities={[
          { title: "FLEXIBLE FORMAT CONFIGURATIONS", desc: "Supports a wide range of pouch styles and packaging requirements." },
          { title: "Quick Format Changeover", desc: "Modular tooling for rapid switching between pouch types." },
          { title: "SPOUT & ZIPPER OPTIONS", desc: "Compatible with top spouts, side spouts, and zipper pouch configurations." },
          { title: "EURO HOLE & HANDLE APPLICATIONS", desc: "Engineered to support pouch formats with integrated hanging and carrying options." },
          { title: "Shaped Die-Cut Pouches", desc: "Custom contour shapes for enhanced shelf differentiation." },
        ]}
        showImage={false}
      />
      <PouchShapesGallery />
      <PackagingTechnologies />
      <CustomEngineering />
      <PerformanceTools />
      <SolutionsCTA />
    </main>
  );
}
