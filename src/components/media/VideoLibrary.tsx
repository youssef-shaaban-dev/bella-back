"use client";

import React, { useState } from "react";
import { Play, Film, Layers, Tv } from "lucide-react";

const videoCategories = [
  { id: "all", name: "All Media" },
  { id: "exhibition", name: "Exhibitions & Events" },
  { id: "application", name: "Client Applications & Operations" },
];

const videos = [
  { 
    title: "Interpack - Pacprocess MEA 2024 Showcase", 
    category: "exhibition", 
    desc: "Complete exhibition logbook video capturing live machinery demonstrations, client negotiations, and our high-frequency turnkey sachet models in action at the international exhibition.",
    src: "https://drive.google.com/file/d/1aS5Jej-j0TTQAxmmruMoICs2Vmb1zre1/preview" 
  },
  { 
    title: "Colorx Liquid Detergent Stand-up Pouch Line", 
    category: "application", 
    desc: "High-precision HFFS liquid dosing and horizontal stand-up pouch sealing line packaging Colorx liquid detergents in real-time operation.",
    src: "https://drive.google.com/file/d/1XYQHb8maGJ5PPmQKMo45iTm1fwp-aEUf/preview" 
  }
];

export default function VideoLibrary() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredVideos = activeFilter === "all" 
    ? videos 
    : videos.filter(v => v.category === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Context Block */}
        <div className="reveal bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-sm max-w-5xl mx-auto mb-16 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="md:max-w-xl">
            <h2 className="text-3xl font-bold font-heading uppercase tracking-tight text-charcoal mb-4">
              Witness Precision in <span className="text-brand-red">Real-Time</span>
            </h2>
            <p className="text-gray-600 font-body leading-relaxed text-base">
              Bella Pack&apos;s video archive brings the factory floor direct to you. Explore our videos to fully evaluate our extreme operating speeds, stable machine performance, and clean final production quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto shrink-0">
            {[
              { icon: Film, text: "Operation with Real Products" },
              { icon: Tv, text: "Exhibition Showcases" },
              { icon: Layers, text: "Turnkey Production Lines" },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 bg-white px-4 py-3 rounded-sm border border-gray-100 shadow-sm">
                <item.icon className="text-brand-red shrink-0" size={18} />
                <span className="text-xs font-heading font-bold text-charcoal uppercase tracking-wider">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs/Filters */}
        <div className="reveal flex flex-wrap items-center justify-center gap-3 mb-12">
          {videoCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-3 font-heading font-bold uppercase text-xs tracking-widest rounded-sm transition-all border ${
                activeFilter === cat.id 
                  ? "bg-charcoal text-white border-charcoal" 
                  : "bg-transparent text-charcoal border-gray-200 hover:border-charcoal"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Video Grid with dynamic styling for visual balance */}
        <div className={`grid gap-8 ${
          filteredVideos.length === 1 
            ? "max-w-2xl mx-auto grid-cols-1" 
            : "max-w-5xl mx-auto grid-cols-1 md:grid-cols-2"
        }`}>
          {filteredVideos.map((video, idx) => (
            <div 
              key={idx} 
              className="reveal bg-white border border-gray-100 hover:border-gray-200 rounded-sm overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video bg-black overflow-hidden">
                <iframe 
                  src={video.src}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-brand-red/10 text-brand-red px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full mb-3">
                    {videoCategories.find(c => c.id === video.category)?.name.replace("s & Events", "").replace(" Applications & Operations", "Applications") || video.category}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-charcoal uppercase tracking-wide leading-tight mb-2 group-hover:text-brand-red transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-body line-clamp-3">
                    {video.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
