"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function SustainabilityDetails() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Text Copy */}
          <div className="lg:col-span-6 space-y-8 text-left reveal">
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
              Sustainability in packaging starts with intelligent engineering. At BellaPack, we design machinery that reduces material waste, improves sealing consistency, and maximizes dosing accuracy—helping manufacturers achieve higher efficiency while minimizing environmental impact.
            </p>

            <p className="text-gray-500 font-body text-sm leading-relaxed">
              Our equipment is engineered to be compatible with a wide range of sustainable packaging materials, including recyclable and mono-material pouch structures. This flexibility enables manufacturers to transition toward more environmentally responsible packaging solutions without compromising production performance, product protection, or operational reliability.
            </p>
            <p className="text-gray-500 font-body text-sm leading-relaxed">
              By combining precision automation with adaptable machine designs, we help our customers meet both their production goals and sustainability commitments while preparing for the future of packaging.
            </p>
            {/* Monomaterial features */}
            <div className="pt-6 border-t border-gray-100 grid sm:grid-cols-2 gap-4">
              {[
                "Reduced Material Waste",
                "Energy-Efficient Operation",
                "Optimized Production Efficiency",
                "Long-Term Equipment Reliability"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-xs font-heading font-bold uppercase tracking-wider text-charcoal/80">
                  <CheckCircle2 size={16} className="text-brand-red shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-6 reveal">
            <div className="relative rounded-sm overflow-hidden border border-gray-100 shadow-2xl group">
              <Image
                src="/Sustainability/sustainability-in-packaging.webp"
                alt="Sustainably packed pouches mockup"
                width={800}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
