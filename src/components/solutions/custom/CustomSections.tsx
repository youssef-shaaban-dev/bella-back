"use client";

import React from "react";
import Link from "next/link";
import { Settings, Target, Layers } from "lucide-react";

export function CustomHero() {
  return (
    <>
    <section className="bg-charcoal text-white pt-32 md:pt-48 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl flex flex-col items-center">
        <div className="flex items-center justify-center space-x-3 mb-6 reveal">
          <span className="h-px w-8 bg-brand-red"></span>
          <span className="text-brand-red font-bold tracking-[0.25em] text-xs uppercase font-heading text-center">
            Custom Solutions
          </span>
          <span className="h-px w-8 bg-brand-red"></span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 text-center leading-tight reveal">
          CUSTOM ENGINEERING & <br className="hidden md:block" /><span className="text-brand-red">PROJECT SOLUTIONS</span>
        </h1>
        
      </div>
    </section>

    <section className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="text-gray-600 font-body text-lg md:text-xl leading-relaxed space-y-8 font-semibold reveal">
          <p>
            Every packaging application has unique requirements. BellaPack provides engineering flexibility to adapt machine configurations, pouch formats, and packaging materials to specific production objectives.
          </p>
          <p>
            Beyond machinery manufacturing, BellaPack supports customers with application-focused project solutions. From machine customization and pouch development to integrated packaging line planning, our team works closely with manufacturers to develop practical solutions tailored to their production requirements.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export function ProjectSolutions() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-tight text-charcoal">
              PROJECT <span className="text-brand-red">SOLUTIONS</span>
            </h2>
            <p className="text-gray-600 font-body text-base leading-relaxed font-semibold">
              For selected applications, BellaPack provides integrated project solutions that extend beyond the packaging machine itself. This may include equipment integration, product handling systems, conveying solutions, utility requirements, and production line optimization to support complete packaging operations.
            </p>
          </div>

          {/* Card */}
          <div className="reveal bg-white border border-gray-100 rounded-sm shadow-xl p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110 duration-700" />
            <span className="text-[10px] font-heading font-bold uppercase text-brand-red tracking-widest mb-4 block">
              INTEGRATED PROJECT SOLUTIONS
            </span>
            <h3 className="text-2xl font-bold font-heading uppercase text-charcoal mb-4">
              Application-Specific Line Development
            </h3>
            <p className="text-gray-500 font-body text-sm leading-relaxed font-semibold">
              Supporting customers with packaging line planning, equipment integration, and production optimization for selected industrial applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EngineeringFlexibility() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tight text-charcoal mb-8 reveal">
          ENGINEERED AROUND <span className="text-brand-red">YOUR REQUIREMENTS</span>
        </h2>
        <p className="text-gray-600 font-body text-lg leading-relaxed font-semibold reveal">
          BellaPack machinery can be customized to accommodate different pouch formats, product characteristics, packaging materials, and production requirements. Our engineering team works closely with customers to develop machine configurations that align with their operational needs while maintaining reliability, efficiency, and ease of operation.
        </p>
      </div>
    </section>
  );
}

export function CustomizationCapabilities() {
  const capabilities = [
    {
      icon: Settings,
      title: "CUSTOM MACHINE DESIGN",
      desc: "Tailored Machine Configurations"
    },
    {
      icon: Target,
      title: "UNIQUE FORMATS",
      desc: "Custom Pouch Formats"
    },
    {
      icon: Layers,
      title: "MATERIAL ADAPTATION",
      desc: "Material Compatibility"
    }
  ];

  return (
    <section className="py-20 bg-charcoal text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div key={idx} className="reveal text-center p-8 bg-white/5 rounded-sm border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 mx-auto bg-brand-red/20 rounded-full flex items-center justify-center mb-6 text-brand-red">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold font-heading uppercase tracking-wide mb-2">
                  {cap.title}
                </h3>
                <p className="text-white/60 font-body text-sm font-semibold">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CustomQuote() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] text-gray-200/50 font-serif leading-none select-none pointer-events-none">
        &quot;
      </div>
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10 reveal">
        <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tight text-charcoal leading-tight">
          Designed around your product. <br />
          <span className="text-brand-red">Adapted to your production requirements.</span>
        </h2>
      </div>
    </section>
  );
}

export function CustomCTA() {
  return (
    <section className="bg-charcoal text-white py-24 relative overflow-hidden text-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-3xl reveal">
        <h2 className="text-4xl md:text-5xl font-bold font-heading uppercase mb-6 tracking-tight">
          HAVE A <span className="text-brand-red">CUSTOM REQUIREMENT?</span>
        </h2>
        <p className="text-white/70 font-body text-base md:text-lg mb-10 leading-relaxed">
          Speak with our engineering team to discuss your product, pouch format, packaging material, and production objectives.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-white hover:text-charcoal text-white font-heading font-bold uppercase text-xs tracking-widest rounded-sm transition-all duration-300 shadow-lg shadow-brand-red/10"
          >
            REQUEST A CONSULTATION
          </Link>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white font-heading font-bold uppercase text-xs tracking-widest rounded-sm transition-all duration-300 border border-white/20"
          >
            CONTACT OUR TEAM
          </Link>
        </div>
      </div>
    </section>
  );
}
