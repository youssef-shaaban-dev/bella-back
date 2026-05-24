"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NewsHero from "@/components/news/NewsHero";
import TeamSection from "@/components/news/TeamSection";
import ExhibitionsList from "@/components/news/ExhibitionsList";

gsap.registerPlugin(ScrollTrigger);

export default function NewsPage() {
  const rootRef = useRef<HTMLDivElement>(null);

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
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="min-h-screen bg-white text-charcoal relative">
      <NewsHero />
      <TeamSection />
      <ExhibitionsList />
    </main>
  );
}
