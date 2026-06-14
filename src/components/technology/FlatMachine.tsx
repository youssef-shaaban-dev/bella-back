"use client";

import Image from "next/image";
import { Info, ShieldCheck, MessageSquare } from "lucide-react";

export default function FlatMachine() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="reveal text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tight text-charcoal">
            Featured <span className="text-brand-red">Machine</span>
          </h2>
          <p className="text-gray-500 font-body text-sm mt-3 font-semibold leading-relaxed">
            The ideal platform for high-performance flat pouch packaging.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-sm border border-gray-200 shadow-xl overflow-hidden reveal">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="bg-white p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 relative group">
              <div className="relative w-full aspect-square max-w-[300px]">
                <Image
                  src="/horizontal-standup-pouch/B2500_white.webp"
                  alt="B-2500 Machine"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-block w-fit bg-brand-red/10 text-brand-red text-[10px] font-heading font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                LIQUID FILLING
              </span>

              <h3 className="text-3xl font-bold font-heading uppercase text-charcoal mb-4">
                B-2500
              </h3>

              <p className="text-gray-600 font-body text-sm leading-relaxed mb-6 font-semibold">
                For stand-up pouches and flat pouches, liquid filling. Designed to deliver high performance, precise filling accuracy, and consistent operational efficiency for standard packaging formats.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-charcoal/70 text-[10px] font-heading font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
                  Type: Simplex
                </span>
                <span className="bg-gray-100 text-charcoal/70 text-[10px] font-heading font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
                  Speed: 50 ppm
                </span>
                <span className="bg-gray-100 text-charcoal/70 text-[10px] font-heading font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
                  Volume: up to 1500ml
                </span>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-4 rounded-sm mb-8">
                <h4 className="text-xs font-bold font-heading text-brand-red uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Info size={14} />
                  <span>Technical Architecture</span>
                </h4>
                <p className="text-gray-500 font-body text-xs leading-relaxed font-semibold">
                  Hygienic liquid dosing pumps, Siemens PLC touch control panel, CE certified systems. Built for Food & Beverage, Detergents & Chemical Products, Cosmetics & Pharmaceuticals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                <a
                  href={`https://wa.me/201019222211?text=${encodeURIComponent(
                    "Hello, I am interested in inquiring about the B-2500 machine. Could you please provide more details and specifications?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-brand-red hover:bg-charcoal text-white font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-colors gap-2 shadow-md hover:shadow-lg"
                >
                  <MessageSquare size={14} />
                  <span>Request Specs</span>
                </a>
                
                <span className="text-[10px] font-heading font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                  <ShieldCheck className="text-brand-red" size={14} />
                  <span>ISO 9001 & CE Certified</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
