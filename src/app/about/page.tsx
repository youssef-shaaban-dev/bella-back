"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import PhilosophyVision from "@/components/about/PhilosophyVision";
import WhyChoose from "@/components/about/WhyChoose";
import ManufacturingFacility from "@/components/about/ManufacturingFacility";
import CertificationsBanner from "@/components/about/CertificationsBanner";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate all elements with .reveal class on scroll
      const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
      reveals.forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 93%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Custom stagger for the "Why Choose" cards using fromTo for reliability
      gsap.fromTo(
        ".stat-card",
        { scale: 0.95, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 93%",
            toggleActions: "play none none none",
          },
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.06,
          ease: "power3.out",
        }
      );

      // Parallax background effect for Hero
      gsap.to(".parallax-bg", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        yPercent: 30,
        ease: "none",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="bg-white overflow-hidden">
      <AboutHero />
      <CompanyOverview />
      <PhilosophyVision />
      <WhyChoose />
      <ManufacturingFacility />
      <CertificationsBanner />

      {/* Keyframes for the custom smooth animations in Tailwind without extra plugin config if necessary */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}} />
    </main>
  );
}
