"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function SustainabilityDetails() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text Copy */}
          <div className="lg:col-span-7 space-y-8 text-left reveal">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="h-px w-8 bg-brand-red"></span>
                <h3 className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-heading">Precision Engineering</h3>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tight text-charcoal leading-tight">
                Doing More With Less, <br />
                <span className="text-brand-red">Without Compromise</span>
              </h2>
            </div>

            <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed">
              In the world of packaging machinery, sustainability is achieved through precision engineering: machines that minimize film scrap, eliminate sealing errors, and optimize dosing accuracy. A truly sustainable packaging solution protects the product effectively while leaving the lightest possible footprint on the planet.
            </p>

            <p className="text-gray-500 font-body text-sm leading-relaxed">
              It also means building equipment that lasts longer, requires fewer repairs, and can be adapted for multiple product types—reducing the need for multiple production lines. At its core, sustainable packaging is about doing more with less, without compromising quality or safety. Every small improvement in how we pack today contributes to a cleaner, healthier tomorrow for the entire industry.
            </p>

            {/* Monomaterial features */}
            <div className="pt-6 border-t border-gray-100 grid sm:grid-cols-2 gap-4">
              {[
                "Mono-material Recyclable PE/PP",
                "Compostable & Biodegradable Paper",
                "Minimal Seal Temperature Fluctuations",
                "Modular Changeover Toolsets"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-xs font-heading font-bold uppercase tracking-wider text-charcoal/80">
                  <CheckCircle2 size={16} className="text-brand-red shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 reveal">
            <div className="relative rounded-sm overflow-hidden border border-gray-100 shadow-2xl bg-gray-50 group p-6">
              <Image
                src="/Sustainability/sustainability pouches.png"
                alt="Sustainably packed pouches mockup"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className="mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
