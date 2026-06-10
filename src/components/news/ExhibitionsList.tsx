"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, UserCheck, ChevronDown, ChevronUp, ImageIcon } from "lucide-react";

const exhibitions = [
  {
    id: "pacprocess2026",
    title: "Pacprocess MEA 2026",
    location: "Egypt International Exhibition Center (EIEC), New Cairo",
    dates: "December 2026",
    booth: "Hall 2 - Official Pavilion",
    description: "BellaPack is pleased to announce its participation in PACPROCESS MEA 2026, held at the Egypt International Exhibition Center, one of the leading platforms for processing and packaging technologies in the Middle East and Africa. This participation marks a key opportunity to present BellaPack’s latest advancements in horizontal form-fill-seal (HFFS) packaging technologies, and to demonstrate how our engineering expertise supports manufacturers in improving efficiency, accuracy, and production reliability.",
    status: "upcoming",
    media: ["/News/interpack - pacprocess 2026 announcement.png"]
  },
  {
    id: "pacprocess2025",
    title: "Pacprocess MEA 2025",
    location: "Egypt International Exhibition Center (EIEC), New Cairo",
    dates: "December 7-9, 2025",
    booth: "Hall 2, Booth C12",
    description: "A highly successful run where we live-demonstrated continuous liquid and powder filling operations to hundreds of regional stakeholders and buyers.",
    status: "past",
    media: ["/News/InterPack-PacProcess 2025 .jpeg"]
  },
  {
    id: "propak2024",
    title: "ProPak Mena 2024",
    location: "Egypt International Exhibition Center (EIEC), New Cairo",
    dates: "May 26-28, 2024",
    booth: "Hall 3, Booth D45",
    description: "Showcasing variable-weight and high-frequency custom tooling arrays designed directly by our local engineering units.",
    status: "past",
    media: ["/News/ProPak Mena .jpeg"]
  },
  {
    id: "pacprocess2024",
    title: "Pacprocess MEA 2024",
    location: "Egypt International Exhibition Center (EIEC), New Cairo",
    dates: "December 12-14, 2024",
    booth: "Hall 2, Booth F10",
    description: "Launching the updated BP Series platform to critical acclaim, facilitating multiple immediate regional production unit placements.",
    status: "past",
    media: ["/News/ InterPack- PacProcess 2024.jpeg"]
  }
];

export default function ExhibitionsList() {
  const [expandedId, setExpandedId] = useState<string | null>("pacprocess2026");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        
        <div className="reveal mb-16 max-w-3xl space-y-4">
          <div>
            <h3 className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-heading mb-3">Expo Attendance</h3>
            <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter text-charcoal leading-none">
              Exhibition <span className="text-brand-red">Logbook</span>
            </h2>
          </div>
          <p className="text-gray-500 font-body text-base md:text-lg max-w-2xl leading-relaxed font-semibold">
            Find us on the ground. Meet our senior automation consultants directly at our dedicated booths inside major regional halls.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {exhibitions.map((expo, idx) => {
            const isExpanded = expandedId === expo.id;
            const isUpcoming = expo.status === "upcoming";
            
            return (
              <div 
                key={expo.id} 
                className={`reveal bg-white border ${
                  isUpcoming ? "border-brand-red shadow-lg shadow-brand-red/5" : "border-gray-200 shadow-sm"
                } rounded-sm overflow-hidden transition-all duration-300`}
              >
                {/* Top Header Row */}
                <div 
                  onClick={() => toggleExpand(expo.id)}
                  className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
                >
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`text-[9px] font-bold font-heading uppercase tracking-widest px-3 py-1 rounded-full ${
                        isUpcoming ? "bg-brand-red text-white" : "bg-gray-100 text-gray-500"
                      }`}>
                        {isUpcoming ? "Upcoming Main Event" : "Past Attendance"}
                      </span>
                      <span className="text-xs font-bold font-heading text-brand-red uppercase tracking-wider">{expo.dates.split(",")[0]}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold font-heading uppercase text-charcoal tracking-tight group-hover:text-brand-red transition-colors">
                      {expo.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-6 md:space-x-12 text-gray-500 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-gray-400" />
                      <div className="text-xs font-heading font-bold uppercase tracking-wide text-charcoal/80">EIEC Cairo</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <UserCheck size={16} className="text-gray-400" />
                      <div className="text-xs font-heading font-bold uppercase tracking-wide text-charcoal/80">{expo.booth.split(",")[0]}</div>
                    </div>
                    
                    <button className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 group-hover:bg-brand-red group-hover:text-white transition-colors shrink-0 ml-auto`}>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                </div>

                {/* Expandable Content Area */}
                {isExpanded && (
                  <div className="px-6 pb-8 md:px-8 md:pb-12 animate-[fadeIn_0.3s_ease-out] border-t border-gray-100 pt-8">
                    <div className="flex flex-col gap-8">
                      {/* Description and Location */}
                      <div className="w-full">
                        <div className="bg-gray-50 p-6 border border-gray-100 rounded-sm mb-6">
                          <h4 className="text-xs font-bold font-heading text-brand-red uppercase tracking-widest mb-3 flex items-center">
                            <span>📄 Description & Scope</span>
                          </h4>
                          <p className="text-gray-600 font-body text-base leading-relaxed font-semibold">
                            {expo.description}
                          </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="flex flex-col border-l-2 border-gray-200 pl-4 py-2">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Venue Coordinates</span>
                            <span className="text-xs font-heading font-bold uppercase text-charcoal">{expo.location}</span>
                          </div>
                          <div className="flex flex-col border-l-2 border-gray-200 pl-4 py-2">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Stand Location</span>
                            <span className="text-xs font-heading font-bold uppercase text-charcoal">{expo.booth}</span>
                          </div>
                        </div>
                      </div>

                      {/* Exhibition Images Side */}
                      {expo.media.length > 0 && (
                        <div className="w-full space-y-4 border-t border-gray-100 pt-6 mt-2">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block flex items-center gap-2">
                            <ImageIcon size={12} /> Captured Moments
                          </span>
                          <div className={expo.media.length === 1 ? "w-full" : "grid grid-cols-2 md:grid-cols-3 gap-4"}>
                            {expo.media.map((imgUrl, mIdx) => (
                              <div
                                key={mIdx}
                                className="relative rounded-sm overflow-hidden shadow-sm group/img border border-gray-100 bg-gray-50 flex items-center justify-center"
                              >
                                <Image
                                  src={imgUrl}
                                  alt={`Exhibition capture ${mIdx}`}
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  style={{ width: '100%', height: 'auto' }}
                                  className="group-hover/img:scale-105 transition-transform duration-500 mix-blend-multiply"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
