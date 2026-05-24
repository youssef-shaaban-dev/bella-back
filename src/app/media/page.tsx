"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MediaHero from "@/components/media/MediaHero";
import VideoLibrary from "@/components/media/VideoLibrary";

gsap.registerPlugin(ScrollTrigger);

export default function MediaPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>(".reveal");
      
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 93%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-charcoal">
      <MediaHero />
      <VideoLibrary />
    </main>
  );
}
