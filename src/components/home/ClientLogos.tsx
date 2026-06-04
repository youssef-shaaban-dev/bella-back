"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clientLogos = [
  { name: "Clorox", img: "/clients_ logos/clorox.webp" },
  { name: "Arma", img: "/clients_ logos/Arma.webp" },
  { name: "Savola Group", img: "/clients_ logos/savola logo.webp" },
  { name: "OXI Brite", img: "/clients_ logos/OXI.webp" },
  { name: "Domty", img: "/clients_ logos/Domty .webp" },
  { name: "Persil", img: "/clients_ logos/Persil .webp" },
  { name: "Sidco Saudi Arabia", img: "/clients_ logos/ sidco saudi arabia.webp" },
  { name: "Afia", img: "/clients_ logos/Afia logo.webp" },
  { name: "ACT", img: "/clients_ logos/ACT.webp" },
  { name: "Beyti", img: "/clients_ logos/beyti .webp" },
  { name: "Dixie Mills", img: "/clients_ logos/dixie mills logo.webp" },
  { name: "El Rabea", img: "/clients_ logos/el rabea logo.webp" },
  { name: "Gardino", img: "/clients_ logos/gardino logo.webp" },
  { name: "Harvest", img: "/clients_ logos/harvest logo.webp" },
  { name: "Miro Milk", img: "/clients_ logos/miro milk logo.webp" },
  { name: "Pril", img: "/clients_ logos/pril logo.webp" },
  { name: "Rawaby", img: "/clients_ logos/rawaby logo.webp" }
];

export default function ClientLogos() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the whole section on scroll
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 93%",
        },
        opacity: 0,
        y: 15,
        duration: 0.4,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 md:py-24 bg-white overflow-hidden border-b border-gray-100 relative"
    >
      {/* Bulletproof self-contained CSS styles for marquee scroll animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-scroll {
          animation: marquee-scroll 45s linear infinite;
        }
        .animate-marquee-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal tracking-widest uppercase">
          OUR CLIENTS
        </h2>
        <div className="w-12 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
      </div>

      {/* Infinite Slider Marquee Container */}
      <div className="relative w-full overflow-hidden py-6 md:py-8 select-none">
        
        {/* Left Mask Overlay (Smooth Fade-In Effect) */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
        
        {/* Right Mask Overlay (Smooth Fade-Out Effect) */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />

        {/* Scrolling Inner Container */}
        <div className="flex animate-marquee-scroll w-max">
          {/* First loop of logos */}
          <div className="flex gap-8 items-center shrink-0 pr-8">
            {clientLogos.map((logo, index) => (
              <div
                key={`${logo.name}-1-${index}`}
                className="relative w-40 h-20 md:w-48 md:h-24 p-2 md:p-4 flex items-center justify-center transition-all duration-300 group cursor-pointer shrink-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo.img}
                    alt={`${logo.name} logo`}
                    fill
                    sizes="(max-width: 768px) 160px, 192px"
                    className="object-contain mix-blend-multiply transition-all duration-500 transform group-hover:scale-110"
                    priority={index < 5}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second loop of logos (seamless connection) */}
          <div className="flex gap-8 items-center shrink-0 pr-8">
            {clientLogos.map((logo, index) => (
              <div
                key={`${logo.name}-2-${index}`}
                className="relative w-40 h-20 md:w-48 md:h-24 p-2 md:p-4 flex items-center justify-center transition-all duration-300 group cursor-pointer shrink-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo.img}
                    alt={`${logo.name} logo`}
                    fill
                    sizes="(max-width: 768px) 160px, 192px"
                    className="object-contain mix-blend-multiply transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
