"use client";

import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const exhibitions = [
  {
    title: "PacProcess 2025",
    date: "May 15-18, 2025",
    location: "Cairo International Convention Centre",
    desc: "Join us as we unveil the next generation of BP Series rotary pouch machines. Live demonstrations and engineering consultations available.",
    status: "Upcoming",
  }
];

export default function NewsExhibitions() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h3 className="text-brand-red font-bold tracking-widest text-xs mb-4 uppercase">Latest News</h3>
            <h2 className="text-5xl font-bold text-charcoal font-heading uppercase tracking-tighter">
              EXHIBITIONS & EVENTS
            </h2>
          </div>
          <Link href="/news" className="text-brand-red font-bold flex items-center group">
            <span>VIEW ALL NEWS</span>
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {exhibitions.map((event, i) => (
            <div key={i} className="group relative bg-charcoal rounded-sm overflow-hidden flex flex-col md:flex-row h-full md:h-80 border border-charcoal hover:border-brand-red transition-colors duration-500">
              {/* Event Visual (Placeholder) */}
              <div className="w-full md:w-1/3 bg-brand-red/10 flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FE2638_1px,transparent_1px)] [background-size:20px_20px]" />
                <span className="bg-brand-red text-white text-[10px] font-bold px-3 py-1 rounded-full mb-6 relative z-10">{event.status}</span>
                <Calendar className="text-brand-red mb-4 relative z-10" size={48} />
                <p className="text-white font-bold text-2xl font-heading relative z-10">{event.date}</p>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3 p-10 flex flex-col justify-center">
                <h4 className="text-3xl font-bold text-white mb-4 font-heading tracking-wide uppercase">{event.title}</h4>
                <div className="flex items-center text-white/40 text-sm mb-6 space-x-6">
                  <div className="flex items-center">
                    <MapPin size={16} className="text-brand-red mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-white/50 text-sm mb-8 max-w-xl font-body leading-relaxed">
                  {event.desc}
                </p>
                <Link href="/contact" className="text-white font-bold text-xs tracking-widest uppercase border-b border-brand-red pb-2 self-start hover:text-brand-red transition-colors">
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
