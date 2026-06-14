"use client";

import React from "react";
import { CheckCircle2, Layers } from "lucide-react";

export interface SolutionsOverviewProps {
  title: React.ReactNode;
  paragraphs: React.ReactNode[];
  capabilities: { title: string; desc: string }[];
}

export default function SolutionsOverview({
  title,
  paragraphs,
  capabilities
}: SolutionsOverviewProps) {
  return (
    <section className="py-20 relative bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Box: Tech Value Prop */}
          <div className="reveal lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-tight text-charcoal leading-tight">
              {title}
            </h2>
            
            <div className="text-gray-600 font-body text-base leading-relaxed space-y-6 font-medium">
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
                    <span className="p-1 bg-brand-red/10 text-brand-red rounded-sm mt-0.5 shrink-0">
                      <CheckCircle2 size={16} />
                    </span>
                    <div>
                      <span className="block text-sm text-charcoal leading-tight mb-1">{item.title}</span>
                      <span className="block text-[10px] font-body font-normal text-gray-500 normal-case">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
