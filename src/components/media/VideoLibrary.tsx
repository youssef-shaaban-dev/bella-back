"use client";

import React, { useState } from "react";
import { Play, Film, Layers, Tv } from "lucide-react";

const videoCategories = [
  { id: "all", name: "All Media" },
  { id: "operation", name: "Machine Operations" },
  { id: "exhibition", name: "Exhibitions & Events" },
  { id: "application", name: "Client Applications" },
];

const videos = [
  { 
    title: "Horizontal Form Fill Seal Operation", 
    category: "operation", 
    desc: "High-speed HFFS machine processing real liquid products with high precision.",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
  },
  { 
    title: "PacProcess 2025 Highlights", 
    category: "exhibition", 
    desc: "Highlights from our official pavilion, showcasing full filling lines to international buyers.",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" 
  },
  { 
    title: "VFFS End-to-End Customer Line", 
    category: "application", 
    desc: "Complete operational turnkey solution integrated directly at a customer's confectionery facility.",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" 
  },
  { 
    title: "Granule Packaging Performance Test", 
    category: "operation", 
    desc: "High-precision dosing and high-output test run on multi-head granules packaging machines.",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" 
  },
  { 
    title: "Gulfood Manufacturing Showcase", 
    category: "exhibition", 
    desc: "Live machinery demonstrations and stakeholder discussions on the floor.",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" 
  },
  { 
    title: "Cosmetics Liquid Filling Assembly", 
    category: "application", 
    desc: "Automated cosmetic pouch filling machine operating in sterile manufacturing environment.",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" 
  },
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
              Bella Pack's video archive brings the factory floor direct to you. Explore our videos to fully evaluate our extreme operating speeds, stable machine performance, and clean final production quality.
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

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, idx) => (
            <div 
              key={idx} 
              className="reveal bg-white border border-gray-100 hover:border-gray-200 rounded-sm overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video bg-black overflow-hidden">
                <video 
                  src={video.src}
                  controls
                  preload="none"
                  poster="/PacProcess 2025/ 1.jpeg"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-brand-red/10 text-brand-red px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full mb-3">
                    {videoCategories.find(c => c.id === video.category)?.name.replace("s & Events", "").replace(" Applications", "").replace(" Machine", "") || video.category}
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
