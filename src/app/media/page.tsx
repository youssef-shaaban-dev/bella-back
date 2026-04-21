"use client";

import { Play } from "lucide-react";

const videos = [
  { title: "Machine Operation Demo", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
  { title: "PROMO 1", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
  { title: "VFFS System Showcase", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
  { title: "High Speed Packaging", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
  { title: "Integrated Line Overview", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" },
  { title: "Precision Dosing", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" },
];

export default function MediaPage() {
  return (
    <main className="min-h-screen pt-24 bg-gray-50">
      {/* Header */}
      <section className="bg-charcoal py-24 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 uppercase tracking-tighter">
            MEDIA <span className="text-brand-red">LIBRARY</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-body max-w-2xl mx-auto">
            Watch our high-performance machines in action. Browse our collection of operation videos and promotional material.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, idx) => (
              <div key={idx} className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-shadow overflow-hidden group border border-gray-100">
                <div className="relative aspect-video bg-black">
                  <video 
                    src={video.src}
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  {/* Custom Play Button Overlay (Optional, HTML5 controls used for actual playback) */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6 border-t border-gray-100">
                  <h3 className="text-lg font-bold font-heading text-charcoal uppercase">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
