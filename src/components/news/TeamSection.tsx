"use client";

import React from "react";
import { Users, Award, Globe, Zap } from "lucide-react";

export default function TeamSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-red/10 text-brand-red px-4 py-1 text-xs font-bold font-heading uppercase tracking-widest rounded-full mb-4">
            <Users size={12} />
            <span>INDUSTRY PROFESSIONALS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter text-charcoal mb-6 leading-none">
            Meet Our <span className="text-brand-red">Team</span>
          </h2>
          <p className="text-gray-600 font-body text-lg leading-relaxed">
            Behind every BellaPack machine is a team committed to engineering excellence, manufacturing quality, and customer success. Together, we design, build, and support packaging solutions that help manufacturers operate with confidence and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Award,
              title: "Certified Engineers",
              desc: "Direct mechanical & electrical graduates from premier technical institutes."
            },
            {
              icon: Zap,
              title: "R&D Pioneers",
              desc: "Continuously developing custom patented sealing systems and logic configurations."
            },
            {
              icon: Users,
              title: "Client Success Unit",
              desc: "Providing seamless round-the-clock diagnostics and technical guidance."
            },
            {
              icon: Globe,
              title: "Logistics Experts",
              desc: "Ensuring complex machine layouts navigate international borders safely."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="reveal p-8 bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group rounded-sm"
            >
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center border border-gray-100 mb-6 shadow-sm group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 text-brand-red">
                <item.icon size={20} />
              </div>

              <h3 className="text-lg md:text-xl font-heading font-bold uppercase text-charcoal mb-3 group-hover:text-brand-red transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm font-body leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
