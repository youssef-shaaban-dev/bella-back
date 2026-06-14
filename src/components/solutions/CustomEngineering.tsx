"use client";

import React from "react";
import Image from "next/image";
import { Settings2, Ruler, Hammer } from "lucide-react";

export default function CustomEngineering() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="reveal lg:col-span-5 relative group">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm shadow-2xl bg-charcoal/5">
              <Image
                src="/solutions/spices-coffee/coffee-bellapack-pouch.webp"
                alt="Bespoke Industrial Automation"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>

            {/* Accent badge */}
            <div className="absolute -bottom-8 -right-8 bg-brand-red text-white p-8 max-w-[240px] border-b-4 border-charcoal shadow-2xl hidden md:block z-20">
              <span className="text-3xl font-bold font-heading uppercase leading-none block mb-2">100%</span>
              <span className="text-xs font-body font-bold tracking-wider uppercase text-white/80">
                Engineered & Manufactured in Egypt
              </span>
            </div>
          </div>

          {/* Content side */}
          <div className="reveal lg:col-span-7">
            <div className="flex items-center space-x-3 mb-4">
              <span className="h-px w-8 bg-brand-red"></span>
              <h3 className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-heading">ENGINEERING FLEXIBILITY</h3>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter text-charcoal mb-8 leading-tight">
              Custom <span className="text-brand-red">Engineering</span> & Solutions
            </h2>

            <p className="text-gray-600 font-body text-lg leading-relaxed mb-10">
              Tailored machine design, custom pouch formats, and adaptation to specific packaging materials. Our engineering team works closely with clients to deliver fully customized packaging solutions.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Settings2, title: "Custom Machine Design", desc: "Optimized layouts." },
                { icon: Ruler, title: "Unique Formats", desc: "Bespoke sealing dies." },
                { icon: Hammer, title: "Material Compatibility", desc: "Foil/Laminate tuning." },
              ].map((item, idx) => (
                <div key={idx} className="border border-gray-100 p-6 bg-gray-50 rounded-sm flex flex-col">
                  <item.icon className="text-brand-red mb-4" size={24} />
                  <h4 className="font-heading font-bold text-charcoal text-sm uppercase tracking-wide mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-xs font-body font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 border-l-4 border-brand-red bg-gray-50 rounded-r-sm">
              <p className="text-sm text-gray-600 font-body font-semibold leading-relaxed italic">
                &ldquo;Every packaging challenge is unique. Our engineering team develops machine configurations tailored to specific products, pouch formats, and production requirements.&rdquo;
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
