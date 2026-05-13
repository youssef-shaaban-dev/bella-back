"use client";

import React from "react";
import { Wrench, BookOpen, Cpu, LifeBuoy, Lightbulb, Check } from "lucide-react";

const serviceOfferings = [
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Our specialized mechanical and electrical engineering group is fully equipped to stabilize operations and prolong machine lifespan.",
    points: [
      "Diagnose technical issues directly",
      "On-site & remote troubleshooting",
      "Rapid intervention, minimal downtime",
    ],
    accent: "text-brand-red",
    bg: "bg-brand-red/5"
  },
  {
    icon: BookOpen,
    title: "Training & Docs",
    description: "Structured transfer of expertise to ensure your operational staff can run and maintain packing lines efficiently and safely.",
    points: [
      "Operator and maintenance training",
      "Detailed manuals & guides",
      "Pneumatic, electrical & mechanical diagrams",
    ],
    accent: "text-brand-blue",
    bg: "bg-brand-blue/5"
  },
  {
    icon: Cpu,
    title: "Original Spare Parts",
    description: "Full inventory management for critical spare parts to ensure continuous zero-lag supply chain fulfillments.",
    points: [
      "Guaranteed quality components",
      "Expedited local & global shipping",
      "Consumable, mechanical & electrical sets",
    ],
    accent: "text-charcoal",
    bg: "bg-charcoal/5"
  },
  {
    icon: LifeBuoy,
    title: "Technical Support",
    description: "Fast-response tier-2 and tier-3 specialized engineering backup for advanced systemic architecture.",
    points: [
      "Specialized PLC & programming tuning",
      "Advanced electronic diagnosis",
      "Direct remote control assistance",
    ],
    accent: "text-brand-red",
    bg: "bg-brand-red/5"
  },
  {
    icon: Lightbulb,
    title: "Consultancy Services",
    description: "Providing expert knowledge pools to dynamically maximize ROI and improve raw performance across factories.",
    points: [
      "Production efficiency reviews",
      "Optimal configuration matching",
      "Packaging waste reduction",
    ],
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
            const isLastOdd = index === serviceOfferings.length - 1 && index % 3 === 2; // Just logic checking, let's actually make last items nicely spaced
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

                <ul className="space-y-3 pt-4 border-t border-gray-100">
                  {svc.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-3">
                      <Check size={14} className="text-brand-red mt-1 shrink-0" />
                      <span className="text-xs font-heading font-bold text-charcoal/80 uppercase tracking-wide">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
