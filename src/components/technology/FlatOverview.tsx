"use client";

import Image from "next/image";
import { CheckCircle2, Layers } from "lucide-react";

import React from "react";

export interface FlatOverviewProps {
  title?: React.ReactNode;
  paragraphs?: React.ReactNode[];
  capabilities?: { title: string; desc: string }[];
  showImage?: boolean;
}

export default function FlatOverview({
  title = (
    <>Complete <span className="text-brand-red">Flat Pouch</span> Packaging Solutions</>
  ),
  paragraphs = [
    <span key="1">At <span className="text-brand-red font-bold">BellaPack</span>, our Horizontal Form-Fill-Seal (HFFS) flat pouch lines are designed to produce over 12 distinct pouch configurations on a single production platform. From classic stand-up pouches and pillow bags to advanced shaped formats with spouts, zippers, euro holes, and carry handles, our machines offer unmatched versatility.</span>,
    "Each pouch format is engineered for specific product categories — liquid beverages, powders, granules, sauces, dairy products, and more. Our modular station design means switching between pouch types requires minimal changeover, reducing downtime and maximizing production throughput.",
    "Whether you need a string pouch for multi-pack sachets, a shaped stand-up pouch with a side spout for liquid detergents, or a classic zipper pouch for coffee and spices, BellaPack's flat pouch lines deliver consistent seal quality, precise filling, and premium shelf presentation across every format."
  ],
  capabilities = [
    { title: "Flat Pouch Production", desc: "" },
    { title: "Accurate Filling Systems", desc: "" },
    { title: "Secure Heat Sealing", desc: "" },
    { title: "Flexible Dosing Integration", desc: "" },
    { title: "Reliable Automation", desc: "" },
    { title: "Consistent Packaging Quality", desc: "" },
  ],
  showImage = true
}: FlatOverviewProps = {}) {
  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Box: Tech Value Prop */}
          <div className="reveal lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-tight text-charcoal">
              {title}
            </h2>
            
            <div className="text-gray-600 font-body text-base leading-relaxed space-y-6 font-semibold">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right Box: Key Features */}
          <div className="reveal lg:col-span-5 space-y-6">
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm shadow-md">
              <h3 className="text-xl font-bold font-heading uppercase text-charcoal border-b border-gray-200 pb-4 mb-6 flex items-center gap-2">
                <Layers className="text-brand-red" size={22} />
                <span>Key Capabilities</span>
              </h3>
              
              <ul className="space-y-4 font-heading font-bold text-xs uppercase tracking-wider text-charcoal/80">
                {capabilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <span className="p-1 bg-brand-red/10 text-brand-red rounded-sm mt-0.5">
                      <CheckCircle2 size={16} />
                    </span>
                    <div>
                      <span className="block text-sm text-charcoal leading-tight mb-1">{item.title}</span>
                      <span className="block text-[10px] font-body font-normal text-gray-500">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Group Image */}
            {showImage && (
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm border border-gray-100 shadow-lg group">
                <Image 
                  src="/solutions/flatPouch.webp" 
                  alt="Flat Pouch" 
                  fill 
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105 bg-gray-50"
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

