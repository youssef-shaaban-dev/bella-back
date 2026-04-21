"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Users, Globe2, Lightbulb } from "lucide-react";
import gsap from "gsap";

export default function CareersPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text > *",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-charcoal text-white">
      {/* Hero */}
      <section className="relative pt-40 pb-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/PacProcess 2025/ 5.jpeg" alt="Careers Hero" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10 hero-text text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8">
            ENGINEER YOUR <span className="text-brand-blue">FUTURE</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-body leading-relaxed mb-12">
            Join a global team of innovators pushing the boundaries of industrial packaging technology. At Bella Pack, part of the Coesia Group, your career trajectory is limitless.
          </p>
          
          <Link 
            href="https://www.coesia.com/en/careers#block-coesiatalentlinkcareersiframeblock"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-brand-red text-white px-10 py-5 rounded-sm font-heading font-bold text-lg hover:bg-white hover:text-brand-red transition-colors group"
          >
            <span>VIEW OPEN POSITIONS (COESIA PORTAL)</span>
            <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white text-charcoal rounded-t-3xl">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading uppercase tracking-tighter mb-4">Life at Bella Pack</h2>
            <p className="text-charcoal/60 font-body">Being part of the Coesia family means global opportunities and continuous growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { icon: Globe2, title: "Global Impact", desc: "Work on projects that shape the production lines of the world's biggest brands." },
              { icon: Lightbulb, title: "Innovation First", desc: "We invest heavily in R&D, giving you the tools to pioneer new technologies." },
              { icon: Users, title: "Collaborative Culture", desc: "Join a diverse, cross-functional team of experts dedicated to engineering excellence." }
            ].map((item, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon size={32} className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold font-heading uppercase tracking-wide mb-4">{item.title}</h3>
                <p className="text-charcoal/60 font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
