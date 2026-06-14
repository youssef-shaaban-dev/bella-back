"use client";
import { ArrowRight, Settings } from "lucide-react";

const studies = [
  {
    id: 1,
    tag: "CUSTOMER SUCESS",
    title: "PROVEN INDUSTRIAL PERFORMANCE",
    challenge: "A leading Egyptian spice exporter required immediate volumetric filling upgrades to process highly volatile powder products at scale.",
    solution: "Implemented BP Series high-speed powder packing machines incorporating precision servo dosing and custom anti-dust vertical feeding setups.",
    results: [
      { label: "Production Output", value: "+40%", suffix: "Increase" },
      { label: "Filling Accuracy", value: "99.8%", suffix: "Toleration" },
      { label: "Material Waste", value: "-25%", suffix: "Reduction" }
    ],
    accent: "border-brand-red"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
      {/* Decorative overlay */}
      <div className="absolute left-0 top-0 w-full h-full opacity-20 pointer-events-none mix-blend-multiply">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-dashed border-charcoal/20 rounded-full animate-[spin_120s_linear_infinite]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="reveal flex items-center space-x-3 mb-4">
          <span className="h-px w-8 bg-brand-red"></span>
          <h3 className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-heading">PROVEN RELIABILITY</h3>
        </div>

        <div className="reveal mb-16 max-w-4xl space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter text-charcoal leading-none">
            TRUSTED FOR <span className="text-brand-red">LONG-TERM</span> PERFORMANCE
          </h2>
          <p className="text-gray-500 font-body text-base md:text-lg max-w-2xl leading-relaxed font-semibold">
            Explore how BellaPack has driven massive efficiencies leading regional and international manufacturing giants.
          </p>
        </div>

        <div className="space-y-16">
          {studies.map((study, idx) => (
            <div
              key={study.id}
              className={`reveal bg-white border-t-4 ${study.accent} shadow-xl overflow-hidden rounded-sm grid lg:grid-cols-12 items-stretch`}
            >
              {/* Text info */}
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-gray-100 text-charcoal/60 px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full mb-6 border border-gray-200 font-heading">
                    {study.tag}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold font-heading uppercase text-charcoal mb-6 tracking-tight flex items-center">
                    {study.title}
                  </h3>

                  <div className="mb-8">
                    <p className="text-gray-600 font-body text-base leading-relaxed mb-6">
                      BellaPack machines are designed for durability, reliability, and continuous operation. Our machines have been supporting leading manufacturers for years, with production lines operating successfully for years.
                    </p>
                  </div>
                </div>


              </div>

              {/* Highlight Card Side */}
              <div className="lg:col-span-5 bg-charcoal text-white p-12 flex flex-col justify-center items-center text-center relative overflow-hidden">
                {/* High tech decorative accents inside */}
                <div className="absolute top-0 right-0 opacity-10 w-64 h-64 select-none border border-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 opacity-10 w-64 h-64 select-none border border-white rounded-full -translate-x-1/2 translate-y-1/2"></div>

                <div className="relative z-10">
                  <Settings size={48} className="text-brand-red mx-auto mb-6 animate-[spin_15s_linear_infinite]" />
                  <blockquote className="font-heading text-2xl italic font-bold uppercase tracking-wide text-white/90 leading-snug mb-8">
                    &ldquo;B-2500 SERIES OPERATING SUCCESSFULLY AT SAVOLA GROUP FOR OVER 10 YEARS&rdquo;
                  </blockquote>

              
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
