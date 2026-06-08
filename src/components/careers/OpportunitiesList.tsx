"use client";

import React from "react";
import { Briefcase, UserCog, TrendingUp, GraduationCap, ArrowRight, Mail } from "lucide-react";

const opportunities = [
  {
    icon: UserCog,
    title: "Engineering & Technical Roles",
    desc: "Direct mechanical design, electrical drafting, and software PLC automation setups."
  },
  {
    icon: Briefcase,
    title: "Precision Technicians",
    desc: "Hands-on machine fabrication, assembly, wiring, and on-site installation calibration."
  },
  {
    icon: TrendingUp,
    title: "Sales & Business Dev",
    desc: "Managing local accounts, coordinating global shipments, and handling key industrial partnerships."
  },
  {
    icon: GraduationCap,
    title: "Internship Programs",
    desc: "For high-potential engineering undergraduates looking for direct factory experience."
  }
];

export default function OpportunitiesList() {
  return (
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        
        <div className="reveal flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 border-b border-gray-100 pb-8">
          <div>
            <h3 className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-heading mb-3">Active Tracks</h3>
            <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter text-charcoal leading-none">
              Career <span className="text-brand-red">Opportunities</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opp, idx) => (
            <div 
              key={idx} 
              className="reveal flex items-start space-x-6 bg-gray-50 border border-gray-100 p-8 rounded-sm hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-sm bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 text-brand-red group-hover:bg-charcoal group-hover:text-white transition-colors duration-300">
                <opp.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold uppercase text-charcoal mb-3 tracking-wide group-hover:text-brand-red transition-colors">
                  {opp.title}
                </h3>
                <p className="text-gray-500 text-sm font-body leading-relaxed font-medium">
                  {opp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note Prompt & Email CTA */}
        <div className="reveal bg-gray-50 border border-gray-200/60 p-10 md:p-12 rounded-sm text-center max-w-3xl mx-auto space-y-6">
          <div>
            <p className="text-charcoal font-heading font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
              Can’t find a specific role matching your profile?
            </p>
            <p className="text-gray-500 text-sm font-body max-w-lg mx-auto leading-relaxed">
              Submit a general application by emailing your CV to our Talent Acquisition team. We will review your profile for future openings.
            </p>
          </div>
          
          <div className="pt-2">
            <a 
              href="mailto:careers@bellapacktec.com?subject=Job Application - BellaPack"
              className="inline-flex items-center space-x-3 bg-brand-red hover:bg-charcoal text-white font-heading font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-sm transition-all shadow-md hover:shadow-lg group"
            >
              <Mail size={16} />
              <span>careers@bellapacktec.com</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
