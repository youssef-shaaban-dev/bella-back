"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

export default function PackagingTechnologies() {
  const technologies = [
    {
      title: "HORIZONTAL FORM-FILL-SEAL (HFFS)",
      desc: "Integrated pouch forming, filling, and sealing technology designed for high-performance pouch packaging applications.",
      link: "/technology/horizontal-standup"
    },
    {
      title: "VERTICAL FORM-FILL-SEAL (VFFS)",
      desc: "Efficient vertical packaging technology suitable for powders, granules, snacks, and other free-flowing products.",
      link: "/technology/vertical"
    },
    {
      title: "HORIZONTAL FLAT POUCH MACHINES",
      desc: "Engineered for flat and pillow pouch formats, delivering efficient packaging performance across a wide range of products.",
      link: "/technology/horizontal-flat"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="h-px w-8 bg-brand-red"></span>
            <span className="text-brand-red font-bold tracking-[0.25em] text-xs uppercase font-heading">
              TECHNOLOGY PLATFORMS
            </span>
            <span className="h-px w-8 bg-brand-red"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tight text-charcoal mb-6">
            PACKAGING <span className="text-brand-red">TECHNOLOGIES</span>
          </h2>
          <p className="text-gray-500 font-body text-base leading-relaxed font-semibold">
            At BellaPack, we provide advanced pouch packaging machinery designed to meet diverse product, production, and packaging requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, idx) => (
            <div 
              key={idx}
              className="reveal bg-gray-50 border border-gray-100 rounded-sm p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="mb-6 flex-grow">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-brand-red group-hover:scale-110 transition-transform">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading text-charcoal uppercase tracking-tight leading-tight mb-4 group-hover:text-brand-red transition-colors">
                  {tech.title}
                </h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">
                  {tech.desc}
                </p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-gray-200">
                <Link href={tech.link} className="inline-flex items-center space-x-2 text-xs font-bold font-heading uppercase tracking-widest text-charcoal hover:text-brand-red transition-colors group/btn">
                  <span>Explore Technology</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
