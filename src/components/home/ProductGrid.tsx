"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Maximize2, Film, Image as ImageIcon, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mediaItems = [
  { 
    id: 1, 
    type: 'video', 
    src: "https://drive.google.com/file/d/1XYQHb8maGJ5PPmQKMo45iTm1fwp-aEUf/preview",
    driveId: "1XYQHb8maGJ5PPmQKMo45iTm1fwp-aEUf",
    thumbnail: "/News/pacprocess-2025.webp",
    title: "Colorx Liquid Detergent Pouch Line",
    desc: "High-precision HFFS liquid dosing and horizontal stand-up pouch sealing line."
  },
  { 
    id: 2, 
    type: 'video', 
    src: "https://drive.google.com/file/d/1aS5Jej-j0TTQAxmmruMoICs2Vmb1zre1/preview",
    driveId: "1aS5Jej-j0TTQAxmmruMoICs2Vmb1zre1",
    thumbnail: "/News/pacprocess-2026.webp",
    title: "Interpack - Pacprocess MEA 2024 Showcase",
    desc: "Turnkey packaging machinery running live demonstrations on the international expo floor."
  },
  { 
    id: 3, 
    type: 'image', 
    src: "/Homepage/BP-2500.webp", 
    thumbnail: "/Homepage/BP-2500.webp",
    title: "BP-2500 Rotary Sachet Machine",
    desc: "Ultra-precise rotary multi-lane sachet packaging model for custom powder dosing."
  },
];

export default function ProductGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedMedia, setSelectedMedia] = useState<typeof mediaItems[0] | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".media-tile", 
        {
          opacity: 0,
          y: 15,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 93%",
          },
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power2.out",
          force3D: true
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Escape key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMedia(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-4 justify-center w-full">
            <span className="w-8 h-[1px] bg-brand-red"></span>
            <h3 className="text-brand-red font-bold tracking-widest text-xs uppercase font-heading">
              Visual Media & Showcase
            </h3>
            <span className="w-8 h-[1px] bg-brand-red"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal font-heading leading-tight uppercase tracking-tight">
            Witness Precision in <span className="text-brand-red">Action.</span>
          </h2>
          <p className="text-gray-500 font-body text-sm max-w-xl mx-auto mt-4 leading-relaxed font-semibold">
            Explore our industrial run highlights. Click on any video or photo tile to view detailed high-resolution footage of our premium packaging systems.
          </p>
        </div>

        {/* Neat Grid for 3 media elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedMedia(item)}
              className="media-tile group relative overflow-hidden rounded-sm bg-charcoal cursor-pointer aspect-[4/3] border border-gray-100 hover:border-brand-red transition-all duration-500 shadow-md hover:shadow-xl"
            >
              {item.type === 'video' && item.driveId ? (
                <iframe
                  src={item.src}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ border: 'none' }}
                />
              ) : (
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-all duration-750 group-hover:scale-105 group-hover:opacity-90"
                />
              )}
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

              {/* Live Run Indicator for Videos */}
              {item.type === 'video' && (
                <div className="absolute top-4 left-4 flex items-center space-x-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  <span className="text-[8px] font-heading font-bold tracking-widest uppercase text-white/90">
                    LIVE RUN VIDEO
                  </span>
                </div>
              )}

              {/* Play / Maximize Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                <div className="w-16 h-16 bg-brand-red/95 rounded-full flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300 shadow-brand-red/30">
                  {item.type === 'video' ? <Play size={24} fill="currentColor" className="ml-1" /> : <Maximize2 size={24} />}
                </div>
              </div>

              {/* Title Caption Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="flex items-center space-x-2 text-brand-red mb-1.5">
                  {item.type === 'video' ? <Film size={12} /> : <ImageIcon size={12} />}
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-red">{item.type}</span>
                </div>
                <h4 className="text-white font-heading font-bold uppercase text-base tracking-wide leading-snug group-hover:text-brand-red transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-white/50 text-[11px] font-body mt-1.5 line-clamp-1 group-hover:text-white/70 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Fidelity Lightbox Modal for Video & Image Playback */}
      {selectedMedia && (
        <div 
          onClick={() => setSelectedMedia(null)}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-md animate-[fadeIn_0.2s_ease-out] p-4 md:p-8"
        >
          {/* Close button */}
          <button 
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 p-3 rounded-full border border-white/10 transition-all z-110"
            aria-label="Close Media Modal"
          >
            <X size={24} />
          </button>

          {/* Modal Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-charcoal rounded-sm overflow-hidden border border-white/10 shadow-2xl flex flex-col aspect-video"
          >
            {selectedMedia.type === 'video' && selectedMedia.driveId ? (
              <div className="relative w-full h-full bg-black flex items-center justify-center">
                <iframe
                  src={selectedMedia.src}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full min-h-[300px] md:min-h-0"
                  style={{ border: 'none' }}
                />
              </div>

            ) : (
              <div className="relative w-full h-full bg-charcoal flex items-center justify-center p-4">
                <div className="relative w-full h-full min-h-[300px] md:min-h-auto">
                  <Image 
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            )}

            {/* Info details underlay inside modal */}
            <div className="bg-charcoal p-6 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="inline-block bg-brand-red/10 text-brand-red px-2.5 py-0.5 text-[9px] font-bold tracking-widest uppercase rounded-full mb-1">
                  {selectedMedia.type} SPECIFICATION
                </span>
                <h3 className="text-white font-heading font-bold uppercase text-lg tracking-wide">
                  {selectedMedia.title}
                </h3>
              </div>
              <p className="text-white/50 text-xs font-body max-w-md md:text-right leading-relaxed font-semibold">
                {selectedMedia.desc}
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
