"use client";

import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const exhibitions = [
  {
    title: "PacProcess MEA 2026",
    date: "December 2026",
    location: "Egypt International Exhibition Center, New Cairo",
    desc: "Join us as we unveil the next generation of HFFS sachet and shaped pouch machines in Hall 2. Live demonstrations and senior engineering consultations will be available.",
    status: "Upcoming Event",
  }
];

export default function NewsExhibitions() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h3 className="text-brand-red font-bold tracking-widest text-xs mb-4 uppercase">Latest News</h3>
            <h2 className="text-5xl font-bold text-charcoal font-heading uppercase tracking-tighter">
              EXHIBITIONS & EVENTS
            </h2>
          </div>
          <Link href="/news" className="text-brand-red font-bold flex items-center group text-xs tracking-widest font-heading">
            <span>VIEW ALL NEWS</span>
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {exhibitions.map((event, i) => (
            <div key={i} className="group relative bg-charcoal rounded-sm overflow-hidden flex flex-col md:flex-row h-full md:h-80 border border-charcoal hover:border-brand-red transition-colors duration-500 shadow-lg">
              {/* Event Visual (Actual Poster) */}
              <div className="w-full md:w-1/3 relative overflow-hidden h-64 md:h-full bg-charcoal/20">
                <Image
                  src="/News/pacprocess-2026.webp"
                  alt="Pacprocess MEA 2026 Announcement"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-bold px-3 py-1 rounded-full z-10">{event.status}</span>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3 p-10 flex flex-col justify-center text-left">
                <h4 className="text-3xl font-bold text-white mb-4 font-heading tracking-wide uppercase">{event.title}</h4>
                <div className="flex items-center text-white/40 text-xs mb-6 space-x-6">
                  <div className="flex items-center">
                    <MapPin size={14} className="text-brand-red mr-2" />
                    <span className="font-heading font-bold uppercase tracking-wider">{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="text-brand-red mr-2" />
                    <span className="font-heading font-bold uppercase tracking-wider">{event.date}</span>
                  </div>
                </div>
                <p className="text-white/50 text-sm mb-8 max-w-xl font-body leading-relaxed">
                  {event.desc}
                </p>
                <Link href="/contact" className="text-white font-bold text-xs tracking-widest uppercase border-b border-brand-red pb-2 self-start hover:text-brand-red transition-colors font-heading">
                  BOOK A MEETING
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
