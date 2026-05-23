"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Play, Maximize2, Film, Image as ImageIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mediaItems = [
  { id: 1, type: 'image', src: "/Homepage/ BP-2500.jpeg", title: "BP-2500 Rotary Sachet Machine" },
  { id: 2, type: 'video', src: "/Homepage/ machine.jpeg", title: "Automated Packaging Line" },
  { id: 3, type: 'image', src: "/Homepage/ Horizontal machine .jpeg", title: "Horizontal Flow Pack Machine" },
];

export default function ProductGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".media-tile", 
        {
          opacity: 0,
          y: 30,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          force3D: true
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-4 justify-center w-full">
            <span className="w-8 h-[1px] bg-brand-red"></span>
            <h3 className="text-brand-red font-bold tracking-widest text-xs uppercase font-heading">Gallery</h3>
            <span className="w-8 h-[1px] bg-brand-red"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal font-heading leading-tight uppercase tracking-tight">
            VISUAL <span className="text-brand-red">MEDIA.</span>
          </h2>
        </div>

        {/* Neat Sequential Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaItems.map((item) => (
            <div 
              key={item.id} 
              className="media-tile group relative overflow-hidden rounded-sm bg-charcoal cursor-pointer aspect-[4/3]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
              />
              
              {/* Gentle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Content Center Play Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                <div className="w-16 h-16 bg-brand-red/95 rounded-full flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                  {item.type === 'video' ? <Play size={24} fill="currentColor" className="ml-1" /> : <Maximize2 size={24} />}
                </div>
              </div>

              {/* Title Caption Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="flex items-center space-x-2 text-brand-red mb-1">
                  {item.type === 'video' ? <Film size={12} /> : <ImageIcon size={12} />}
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">{item.type}</span>
                </div>
                <h4 className="text-white font-heading font-bold uppercase text-base tracking-wide">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
