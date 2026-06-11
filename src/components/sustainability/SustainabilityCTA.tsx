"use client";

import Link from "next/link";

export default function SustainabilityCTA() {
  return (
    <section className="bg-charcoal text-white py-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-size-[40px_40px] opacity-20"></div>
      <div className="container relative z-10 px-6 max-w-3xl mx-auto reveal">
        <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tighter mb-6 leading-none">
          MOVING TOWARD MORE <span className="text-brand-red">SUSTAINABLE PACKAGING?</span>
        </h2>
        <p className="text-gray-400 font-body text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto font-medium">
          Our engineering team can help you evaluate sustainable pouch materials and identify machine configurations that support your environmental and production goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-brand-red text-white hover:bg-white hover:text-charcoal font-heading font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-sm shadow-lg w-full sm:w-auto"
          >
            CONTACT OUR TEAM
          </Link>
          <Link
            href="/solutions"
            className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-heading font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-sm w-full sm:w-auto"
          >
            EXPLORE OUR MACHINES
          </Link>
        </div>
      </div>
    </section>
  );
}
