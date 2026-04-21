"use client";

import { Leaf, Recycle, Wind, Droplets } from "lucide-react";
import Image from "next/image";

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Hero Header */}
      <section className="bg-charcoal py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/PacProcess 2025/ 3.jpeg" alt="Sustainability Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 uppercase tracking-tighter">
            SUSTAINABILITY IN <span className="text-brand-red">PACKAGING</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-body max-w-3xl mx-auto leading-relaxed">
            At Bella Pack, we believe that industrial advancement must go hand-in-hand with environmental stewardship. We engineer solutions that reduce waste, conserve energy, and support the transition to circular economies.
          </p>
        </div>
      </section>

      {/* Core Initiatives */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Eco-Friendly Materials", icon: <Leaf className="w-10 h-10 text-green-500" />, desc: "Our latest sealing technologies are optimized for 100% recyclable, compostable, and mono-material films." },
              { title: "Energy Efficiency", icon: <Wind className="w-10 h-10 text-blue-500" />, desc: "Servo-driven architectures and smart standby modes reduce electrical consumption by up to 30%." },
              { title: "Waste Reduction", icon: <Recycle className="w-10 h-10 text-orange-500" />, desc: "High-precision dosing and advanced vision systems eliminate product giveaway and film waste." },
              { title: "Sustainable Manufacturing", icon: <Droplets className="w-10 h-10 text-teal-500" />, desc: "Our facilities operate with closed-loop cooling systems and optimized resource management." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold font-heading text-charcoal mb-4 uppercase">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Bella Pack Commitment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-heading text-charcoal mb-6 uppercase">Our Commitment to the Future</h2>
            <div className="h-1 w-20 bg-brand-blue mx-auto mb-10" />
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              We are actively partnering with material scientists and global FMCG brands to test and validate next-generation sustainable packaging formats. Our goal is to ensure that when the world shifts entirely to eco-friendly packaging, Bella Pack machinery is already there, ready to perform without compromising speed or seal integrity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
