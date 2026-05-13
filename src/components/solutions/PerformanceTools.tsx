"use client";

import React from "react";
import Link from "next/link";
import { FileText, Box, Layers, Lock, ArrowRight } from "lucide-react";

export default function PerformanceTools() {
  return (
    <section className="reveal py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        
        <div className="bg-charcoal text-white rounded-sm shadow-2xl overflow-hidden grid md:grid-cols-12 items-stretch">
          
          {/* Text/Actions Area */}
          <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-between">
            <div>
              <span className="text-brand-red font-heading font-bold uppercase tracking-[0.3em] text-xs block mb-4">Integration Resources</span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tighter mb-6 leading-none">
                Technical & <span className="text-brand-red">Performance</span> Tools
              </h2>
              <p className="text-white/60 font-body text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Ensure seamless downstream integration at your facility. We provide complete CAD files, exact floor footprint schematics, and multi-page structural tech specs to verified engineers.
              </p>
            </div>

            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-brand-red text-white font-heading font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-charcoal transition-all duration-300 group shadow-lg"
              >
                <span>Request Documentation Access</span>
                <ArrowRight size={14} className="ml-3 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="block text-[10px] text-white/30 font-body mt-3 italic">
                * Secure access is granted via official firm credentials submission.
              </span>
            </div>
          </div>

          {/* Files Visualization Side */}
          <div className="md:col-span-5 bg-[#131a27] p-8 md:p-16 flex flex-col justify-center relative overflow-hidden border-t md:border-t-0 md:border-l border-white/5">
            {/* Backdrop visual */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            <div className="relative z-10 space-y-4">
              {[
                { icon: FileText, title: "PDF Data Sheets", format: "Detailed system parameters." },
                { icon: Box, title: "CAD Assembly Layouts", format: "Floor footprint matching." },
                { icon: Layers, title: "Structural Tolerances", format: "Detailed machine metrics." },
              ].map((doc, dIdx) => (
                <div key={dIdx} className="flex items-center justify-between bg-white/[0.03] border border-white/5 p-4 rounded-sm hover:bg-white/[0.06] transition-colors group">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-brand-red/10 rounded-sm flex items-center justify-center shrink-0">
                      <doc.icon className="text-brand-red" size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-heading font-bold uppercase text-white tracking-wide">{doc.title}</h4>
                      <p className="text-[10px] text-white/50 font-body uppercase tracking-wider">{doc.format}</p>
                    </div>
                  </div>
                  
                  <Lock size={14} className="text-white/20 group-hover:text-brand-red transition-colors shrink-0" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
