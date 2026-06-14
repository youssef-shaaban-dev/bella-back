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
    <span key="1"><span className="text-brand-red font-bold">BellaPack</span> Horizontal Flat Pouch machinery delivers reliable and efficient packaging performance for a wide range of products and industries. Combining accurate filling, secure sealing, and flexible dosing integration</span>
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
        {/* Top: Centered Content */}
        <div className="reveal text-center mb-16 space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-tight text-charcoal">
            {title}
          </h2>
          
          <div className="text-gray-600 font-body text-base leading-relaxed space-y-6 font-semibold">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Bottom: Side by Side (Key Capabilities & Image) */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Box: Key Features */}
          <div className="reveal h-full">
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm shadow-md h-full">
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
          </div>

          {/* Right Box: Group Image */}
          {showImage && (
            <div className="reveal h-full">
              <div className="relative h-full min-h-[350px] lg:min-h-full w-full overflow-hidden rounded-sm border border-gray-100 shadow-lg group">
                <Image 
                  src="/solutions/flatPouch.webp" 
                  alt="Flat Pouch" 
                  fill 
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105 bg-gray-50"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

