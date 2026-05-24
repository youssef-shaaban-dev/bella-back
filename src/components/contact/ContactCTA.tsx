"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="reveal py-20 bg-linear-to-r from-charcoal to-[#131A27] text-white text-center relative z-20 border-t-4 border-brand-red">
      <div className="container mx-auto px-6">
        <h3 className="text-brand-red font-heading font-bold uppercase text-xs tracking-[0.3em] mb-4">Ready for the Next Phase?</h3>
        <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tighter mb-8 leading-none max-w-3xl mx-auto">
          Start Your Packaging <span className="text-brand-red">Project</span> Today
        </h2>
        <Link
          href="https://wa.me/+201019222211"
          target="_blank"
          className="inline-flex items-center px-10 py-5 bg-white text-charcoal font-heading font-bold uppercase tracking-widest text-sm hover:bg-brand-red hover:text-white transition-all duration-300 group rounded-sm shadow-2xl shadow-black/20"
        >
          Start consultation now
          <ArrowRight size={18} className="ml-3 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
