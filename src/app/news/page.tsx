"use client";

import NewsExhibitions from "@/components/NewsExhibitions";

export default function NewsPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Header */}
      <section className="bg-brand-red py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 uppercase tracking-tighter">
            LATEST <span className="text-charcoal">NEWS</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-body max-w-2xl mx-auto">
            Stay updated with our upcoming exhibitions, technological breakthroughs, and corporate announcements.
          </p>
        </div>
      </section>

      {/* Reusing the existing News component which contains the Exhibitions data */}
      <div className="py-12">
        <NewsExhibitions />
      </div>
    </main>
  );
}
