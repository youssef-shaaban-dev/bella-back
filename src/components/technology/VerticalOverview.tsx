"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function VerticalOverview() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: The Single Official Machine Photo */}
            <div className="relative w-full max-w-lg aspect-[3/4] rounded-sm overflow-hidden border border-gray-100 shadow-2xl bg-gray-50 group">
              <Image 
                src="/vertical-machines/vertical-machine.webp" 
                alt="BellaPack Official Vertical Packaging Machine"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain p-6 transition-transform duration-700 group-hover:scale-103"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal/90 backdrop-blur-md text-white p-4 border-l-4 border-brand-red rounded-sm shadow-xl">
                <span className="text-xs font-heading font-bold uppercase text-brand-red block mb-1">VFFS SERIES</span>
                <span className="text-[11px] font-body text-white/70 block leading-relaxed font-semibold">
                  Reliable VFFS machinery for diverse industries.
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: The Official Copy from the docx file */}
          <div className="reveal lg:col-span-7 space-y-8 flex flex-col">
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-brand-red"></span>
              <h2 className="text-brand-red font-bold tracking-widest text-xs uppercase font-heading">
                VFFS TECHNOLOGY
              </h2>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold font-heading uppercase text-charcoal tracking-tight leading-tight">
              Vertical Packaging <span className="text-brand-red">Machines</span> Solutions
            </h3>

            <div className="text-gray-600 font-body text-base leading-relaxed space-y-6 font-semibold border-l-2 border-gray-100 pl-6">
              <p>
                At BellaPack, we provide advanced Vertical Form-Fill-Seal (VFFS) machinery for powders, granules, and different products. Our machines combine accurate dosing, secure sealing, and reliable automation to deliver efficient and consistent packaging performance. With flexible bag formats, user-friendly controls, and durable industrial construction, BellaPack VFFS machines help manufacturers achieve reliable production operations across a wide range of packaging applications.
              </p>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-xl font-bold font-heading uppercase text-charcoal mb-6 flex items-center gap-2">
                  <span>VFFS Overview</span>
                </h4>
                <ul className="space-y-4">
                  {[
                    "Provision for Two Rolls on unwind",
                    "Sealers are both end supported",
                    "End roll detection synchronized with PLC & Filling",
                    "Provision for batch cutting & counting",
                    "Temperature Control and Heater Failure Indication is through PLC hence, eliminating the need for temperature controller",
                    "Paper break detection sensor",
                    "Joint detection sensor (optional)",
                    "Hopper level controller"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="p-1 bg-brand-red/10 text-brand-red rounded-sm mt-0.5 flex-shrink-0">
                        <CheckCircle2 size={16} />
                      </span>
                      <span className="text-sm text-charcoal/80 leading-relaxed block">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
