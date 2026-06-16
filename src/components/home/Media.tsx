"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Maximize2, Film, Image as ImageIcon, X } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const mediaItems = [
  { 
    id: 1, 
    type: 'video' as const, 
    src: "https://drive.google.com/file/d/1aS5Jej-j0TTQAxmmruMoICs2Vmb1zre1/preview",
    driveId: "1aS5Jej-j0TTQAxmmruMoICs2Vmb1zre1",
    thumbnail: "/News/pacprocess-2024.webp",
    title: "Pacprocess 2024",
    desc: "Highlights from our machinery demonstrations at Pacprocess 2024."
  },
  { 
    id: 2, 
    type: 'video' as const, 
    src: "https://drive.google.com/file/d/1DXs8D780Az29mtIoNnMrAEgjdft_RjA3/preview",
    driveId: "1DXs8D780Az29mtIoNnMrAEgjdft_RjA3",
    thumbnail: "/Homepage/BP-2500.webp",
    title: "Propak 2024",
    desc: "Showcasing our robust automated packaging solutions at Propak 2024."
  },
  { 
    id: 3, 
    type: 'video' as const, 
    src: "https://drive.google.com/file/d/16XMbvDGq6kVz9RFO8u0nLLHPPTVi1H_r/preview", 
    driveId: "16XMbvDGq6kVz9RFO8u0nLLHPPTVi1H_r",
    thumbnail: "/News/pacprocess-2026.webp",
    title: "Persil Production Line",
    desc: "High-speed filling and sealing performance for the Persil liquid detergent production line."
  },
];

export default function Media() {
  const [selectedMedia, setSelectedMedia] = useState<typeof mediaItems[0] | null>(null);

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
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        
        <ScrollReveal className="text-center mb-20">
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
            Discover our packaging solutions in action through detailed videos from real production environments.
          </p>
        </ScrollReveal>

        {/* Grid — thumbnails only, NO iframes on initial load */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={60}>
          {mediaItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedMedia(item)}
              className="group relative overflow-hidden rounded-sm bg-charcoal cursor-pointer aspect-[4/3] border border-gray-100 hover:border-brand-red transition-all duration-500 shadow-md hover:shadow-xl"
            >
              {/* Always show thumbnail — iframe only loads in modal */}
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-all duration-750 group-hover:scale-105 group-hover:opacity-90"
              />
              
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
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
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
        </ScrollReveal>
      </div>

      {/* Lightbox Modal — iframe loads ONLY when opened */}
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
