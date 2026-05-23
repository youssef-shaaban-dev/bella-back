"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Cpu, Settings } from "lucide-react";

export default function VerticalOverview() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: The Single Official Machine Photo */}
          <div className="reveal lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-sm overflow-hidden border border-gray-100 shadow-2xl bg-gray-50 group">
              <Image 
                src="/ vertical machines/Vertical machine.png" 
                alt="Bella Pack Official Vertical Packaging Machine"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain p-6 transition-transform duration-700 group-hover:scale-103"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal/90 backdrop-blur-md text-white p-4 border-l-4 border-brand-red rounded-sm shadow-xl">
                <span className="text-xs font-heading font-bold uppercase text-brand-red block mb-1">Official Model</span>
                <span className="text-[11px] font-body text-white/70 block leading-relaxed font-semibold">
                  Advanced VFFS technology with integrated volumetric dosing systems.
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: The Official Copy from the docx file */}
          <div className="reveal lg:col-span-7 space-y-8 flex flex-col">
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-brand-red"></span>
              <h2 className="text-brand-red font-bold tracking-widest text-xs uppercase font-heading">
                Technology Specifications
              </h2>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold font-heading uppercase text-charcoal tracking-tight leading-tight">
              Vertical Packaging <span className="text-brand-red">Machines</span> Solutions
            </h3>

            <div className="text-gray-600 font-body text-base leading-relaxed space-y-6 font-semibold border-l-2 border-gray-100 pl-6">
              <p>
                At <span className="text-brand-red font-bold">Bella Pack Tec</span>, we provide advanced Vertical Packaging Machines designed to deliver high-speed performance, precise filling accuracy, and reliable packaging efficiency for a wide range of industries and production applications. Our vertical packaging systems are engineered to handle powders, granules, liquids, and solid products with consistent packaging quality and secure sealing performance.
              </p>
              <p>
                Designed for modern manufacturing environments, these machines combine intelligent automation, flexible packaging capabilities, and durable industrial construction to support continuous and efficient production operations. Vertical packaging machines are ideal for businesses seeking fast, space-efficient, and cost-effective packaging solutions while maintaining product protection and professional packaging presentation.
              </p>
              <p>
                Bella Pack systems are developed to optimize production speed, reduce material waste, and improve operational efficiency across various product categories. With user-friendly control systems and advanced filling technologies, our machines provide stable performance and flexible packaging options suitable for different bag sizes and packaging formats.
              </p>
            </div>

            {/* Quality Certifications badge row */}
            <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-6 text-gray-500">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="text-brand-red" size={20} />
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-charcoal/80">ISO 9001 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cpu className="text-brand-red" size={20} />
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-charcoal/80">Servo-Driven Controls</span>
              </div>
              <div className="flex items-center space-x-2">
                <Settings className="text-brand-red animate-spin-slow" size={20} />
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-charcoal/80">CE Certified Systems</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
