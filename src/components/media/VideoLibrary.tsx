"use client";

import { useState } from "react";
import {  Film, Layers, Tv } from "lucide-react";

const videoCategories = [
  { id: "all", name: "All Media" },
  { id: "exhibition", name: "Exhibitions & Events" },
  { id: "application", name: "Client Applications & Operations" },
];

const videos = [
  {
    title: "Colorx Liquid Detergent Pouch Line",
    category: "application",
    desc: "High-precision HFFS liquid dosing and horizontal stand-up pouch sealing line.",
    src: "https://drive.google.com/file/d/1kdNc_ek_dvu5tLX6se-_QIgcIY25iKdh/preview"
  },
  {
    title: "Interpack - Pacprocess MEA 2024 Showcase",
    category: "exhibition",
    desc: "Turnkey packaging machinery running live demonstrations on the international expo floor.",
    src: "https://drive.google.com/file/d/1aS5Jej-j0TTQAxmmruMoICs2Vmb1zre1/preview"
  },
  {
    title: "BP-2500 Rotary Sachet Machine",
    category: "application",
    desc: "Ultra-precise rotary multi-lane sachet packaging model for custom powder dosing.",
    src: "https://drive.google.com/file/d/1DXs8D780Az29mtIoNnMrAEgjdft_RjA3/preview"
  },
  {
    title: "BellaPack Production Line Demo",
    category: "application",
    desc: "Demonstration of BellaPack machinery in a high-speed production environment.",
    src: "https://drive.google.com/file/d/1sFQMmCWHBK2Y2UsWyhamPt-hECkcJvpO/preview"
  },
  {
    title: "Machine Operation Showcase",
    category: "application",
    desc: "Witness the reliable filling and sealing performance of our packaging solutions.",
    src: "https://drive.google.com/file/d/1ZSHXC_4qxqRdTy3I7Ikc4XoXvPOxzy6h/preview"
  },
  {
    title: "Client Application Highlight",
    category: "application",
    desc: "Real-world application of our horizontal form-fill-seal technology.",
    src: "https://drive.google.com/file/d/1IzIUzMOeyZ6PJtg5h6T4_wqS_KGJSwcA/preview"
  },
  {
    title: "Packaging Machinery in Action",
    category: "application",
    desc: "Robust construction and intelligent automation delivering consistent quality.",
    src: "https://drive.google.com/file/d/16XMbvDGq6kVz9RFO8u0nLLHPPTVi1H_r/preview"
  },
  {
    title: "BellaPack Exhibition Showcase",
    category: "exhibition",
    desc: "Highlights from our recent trade fair demonstrations and machinery displays.",
    src: "https://drive.google.com/file/d/1lFGJEkXz0BrkiR_xHWLwk6vYS-t2hLXY/preview"
  },
  {
    title: "High-Speed Pouch Packaging",
    category: "application",
    desc: "Advanced dosing integration ensuring precise product handling and secure sealing.",
    src: "https://drive.google.com/file/d/1GTcubeSM3L-mFFlxXb-dm8QOQsQvWi4M/preview"
  },
  {
    title: "Automated Packaging System",
    category: "application",
    desc: "Seamless operation of our integrated packaging and sealing modules.",
    src: "https://drive.google.com/file/d/1X2CJzKc3P1RGe72J79YyNgrC_82j9ieK/preview"
  },
  {
    title: "Industrial Machinery Operations",
    category: "application",
    desc: "Durable and reliable performance in demanding packaging scenarios.",
    src: "https://drive.google.com/file/d/12ijpSSG_QrJXJCf3zXYhyHAwoLTs_WzB/preview"
  },
  {
    title: "Precision Dosing & Sealing",
    category: "application",
    desc: "Showcasing the accuracy and speed of BellaPack filling systems.",
    src: "https://drive.google.com/file/d/1jWEOPrHjZDSI9Yjo-eirAiAnI16tKV4E/preview"
  },
  {
    title: "Production Efficiency Demo",
    category: "application",
    desc: "Maximized uptime and minimal maintenance requirements in action.",
    src: "https://drive.google.com/file/d/1O9RQMyE_CWmkMKLdgu-XaV0UBjJ4KRe1/preview"
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
              Explore BellaPack machinery operating in real production environments. Watch actual packaging applications, machine performance, and exhibition demonstrations across a variety of industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto shrink-0">
            {[
              { icon: Film, text: "Product Applications" },
              { icon: Tv, text: "Trade Show Highlights" },
              { icon: Layers, text: "Live Machine Operation" },
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
              className={`px-6 py-3 font-heading font-bold uppercase text-xs tracking-widest rounded-sm transition-all border ${activeFilter === cat.id
                  ? "bg-charcoal text-white border-charcoal"
                  : "bg-transparent text-charcoal border-gray-200 hover:border-charcoal"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Video Grid with dynamic styling for visual balance */}
        <div className={`grid gap-8 ${filteredVideos.length === 1
            ? "max-w-2xl mx-auto grid-cols-1"
            : "max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}>
          {filteredVideos.map((video, idx) => (
            <div
              key={idx}
              className="reveal bg-white border border-gray-100 hover:border-gray-200 rounded-sm overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video bg-black overflow-hidden">
                <iframe
                  src={video.src}
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
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
