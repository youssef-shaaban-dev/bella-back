"use client";

import React from "react";
import { Wrench, BookOpen, Cpu, LifeBuoy, Lightbulb, Check } from "lucide-react";

const serviceOfferings = [
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Mechanical and electrical support to keep your production line running at full capacity, ensuring maximum operational reliability.",
    points: [
      "On-site maintenance",
      "Rapid response to minimize production downtime",
      "Full mechanical and electrical servicing",
    ],
    accent: "text-brand-red",
    bg: "bg-brand-red/5"
  },
  {
    icon: BookOpen,
    title: "Training & Documentation",
    description: "Ensuring your team can operate and maintain every machine efficiently and safely, with complete diagrammatic charts.",
    points: [
      "Machine operation & troubleshooting",
      "Preventive maintenance procedures",
      "User manuals & maintenance guides",
      "Mechanical, electrical, and pneumatic diagrams"
    ],
    note: "All documentation is available upon purchase or on request.",
    accent: "text-brand-blue",
    bg: "bg-brand-blue/5"
  },
  {
    icon: Cpu,
    title: "Spare Parts",
    description: "Available on demand to ensure uninterrupted production and stable supply chain fulfillments across your factories.",
    points: [
      "Components with guaranteed quality and reliability",
      "Fast delivery and fulfilment",
      "Mechanical, electrical, and consumable components"
    ],
    note: "Our inventory system is designed to minimize downtime and maximize production continuity.",
    accent: "text-charcoal",
    bg: "bg-charcoal/5"
  },
  {
    icon: LifeBuoy,
    title: "Technical Support",
    description: "Fast and reliable support to resolve issues quickly and minimize production downtime through tier-2 specialized engineering backup.",
    points: [
      "Mechanical, electrical, and electronic diagnosis",
      "PLC and control system support",
      "Remote and on-site assistance"
    ],
    accent: "text-brand-red",
    bg: "bg-brand-red/5"
  },
  {
    icon: Lightbulb,
    title: "Consultancy Services",
    description: "Expert guidance to help you get the absolute most out of your packaging operations and maximize total system ROI.",
    points: [
      "Optimize production efficiency",
      "Select the right machine configuration",
      "Improve packaging performance"
    ],
    note: "Our goal is to help you achieve maximum ROI from your packaging line.",
    accent: "text-brand-blue",
    bg: "bg-brand-blue/5"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tighter text-charcoal leading-none mb-6">
            Engineering <span className="text-brand-red">Performance</span> Pillars
          </h2>
          <p className="text-gray-500 font-body text-base leading-relaxed">
            From preventive calibration to on-demand rapid deployment, our engineering services guarantee absolute continuous output stability for your packaging investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceOfferings.map((svc, index) => {
            return (
              <div 
                key={index} 
                className="reveal bg-white border border-gray-100 rounded-sm p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-sm ${svc.bg} ${svc.accent} flex items-center justify-center mb-6 group-hover:bg-charcoal group-hover:text-white transition-colors duration-300`}>
                    <svc.icon size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold uppercase text-charcoal mb-4 tracking-wide group-hover:text-brand-red transition-colors">
                    {svc.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm font-body leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div>
                  <ul className="space-y-3 pt-4 border-t border-gray-100 mb-4">
                    {svc.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-3">
                        <Check size={14} className="text-brand-red mt-1 shrink-0" />
                        <span className="text-xs font-heading font-bold text-charcoal/80 uppercase tracking-wide text-left">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {svc.note && (
                    <p className="mt-4 pt-3 border-t border-dashed border-gray-100 text-[10px] text-gray-400 font-body font-semibold italic text-left">
                      Note: {svc.note}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
