"use client";

import Image from "next/image";
import React from "react";

export default function ContactHero() {
  return (
    <section className="relative h-inner-hero min-h-inner-hero text-white overflow-hidden flex items-center justify-center">
      {/* High quality industrial background overlay */}
      <div className="absolute inset-0">
        <Image 
          src="/PacProcess 2025/ 1.jpeg" 
          alt="Bella Pack Contact Support" 
          className="w-full h-full object-cover opacity-80 scale-105 animate-[pulse_12s_ease-in-out_infinite]" 
          priority
          fill
        />
        <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/95 to-charcoal/80" />
        <div className="absolute inset-0 bg-charcoal/20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left pt-32 md:pt-40">
        <div className="reveal flex items-center space-x-3 mb-6 justify-center md:justify-start">
          <span className="h-px w-8 bg-brand-red"></span>
          <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase font-heading">Connect with us</span>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h1 className="reveal text-5xl md:text-8xl font-bold font-heading uppercase tracking-tighter leading-[0.9] mb-6">
              Get in <span className="text-brand-red">Touch</span>
            </h1>
            <p className="reveal text-lg md:text-xl text-white/80 font-body max-w-2xl leading-relaxed">
              We are ready to support your project and provide the right automated packaging solution tailored specifically to your precise production capacity.
            </p>
          </div>
          
          <div className="md:col-span-5 flex justify-center md:justify-end pt-6 md:pt-0">
            <div className="reveal bg-brand-red text-white p-8 rounded-sm max-w-xs border-b-8 border-charcoal shadow-2xl">
              <h3 className="font-heading font-bold uppercase tracking-wider text-xs text-white/60 mb-2">Call for partnership</h3>
              <a href="tel:+01019222211" className="text-2xl md:text-3xl font-heading font-bold hover:text-charcoal transition-colors block mb-3">
                +01019222211
              </a>
              <p className="text-xs opacity-75 font-body font-semibold tracking-wide">Available Sun-Thu, 9am - 5pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
