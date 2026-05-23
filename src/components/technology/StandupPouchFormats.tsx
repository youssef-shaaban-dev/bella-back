"use client";

import React from "react";
import Image from "next/image";

export default function StandupPouchFormats() {
  return (
    <section className="py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Box: Graphic */}
          <div className="relative group max-w-xl mx-auto lg:mx-0 w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-gray-100 shadow-lg">
              <Image 
                src="/solutions/spices & coffee/coffee bellapack pouch.png" 
                alt="Custom Stand-up Pouch Format" 
                fill 
                className="object-contain p-6 transition-transform duration-700 group-hover:scale-105 bg-gray-50"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-charcoal text-white p-6 shadow-2xl border-l-4 border-brand-red max-w-xs hidden md:block">
              <span className="text-xl font-heading font-bold uppercase text-brand-red block mb-1">Zipper Sealer</span>
              <span className="text-xs font-body text-white/70">
                Full HFFS support for press-to-close zipper feeds and tear-notch toolings.
              </span>
            </div>
          </div>

          {/* Right Box: Content */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-brand-red"></span>
              <h3 className="text-brand-red font-bold tracking-widest text-xs uppercase font-heading">Flexible Options</h3>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase text-charcoal leading-tight">
              Supporting Premium <span className="text-brand-red">Pouch Configurations</span>
            </h2>
            
            <p className="text-gray-500 font-body text-base leading-relaxed font-semibold">
              Our Horizontal Stand-Up Pouch lines are built with active modular stations, enabling simple mechanical adjustments to handle a multitude of modern packaging layouts on the same frame.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { title: "Press-To-Close Zipper", desc: "Easy reclosable pouches." },
                { title: "Cap & Corner Spout", desc: "For sanitary liquid dispensing." },
                { title: "Die-Cut Shaped Pouch", desc: "Maximize shelf-appeal design." },
                { title: "Carry Handles & Punch", desc: "Heavy-duty ergonomic configurations." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 border-l-2 border-brand-red pl-4">
                  <div>
                    <h4 className="font-heading font-bold text-charcoal uppercase text-sm tracking-wide mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-xs font-body">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
