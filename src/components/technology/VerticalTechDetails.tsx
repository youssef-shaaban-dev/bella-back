"use client";

import React from "react";
import { Settings2 } from "lucide-react";

const specs = [
  { label: "Sealing Style", value: "4 Side Seal" },
  { label: "Speed", value: "70 Strokes / minute maximum (Depends upon the type of product & quantity to be filled)" },
  { label: "No. of Tracks", value: "Depends upon the width of the pouch" },
  { label: "Laminate Specification", value: "Width – 1000 mm max. • Roll Dia – 600mm. max. • Reel Core I.D.- 150/76 mm" },
  { label: "Packing Material", value: "Laminates with one side heat sealable" },
  { label: "Filling Capacity", value: "1ml - 300ml" },
  { label: "Product To Be Packed", value: "Liquid / Paste within a dosable viscosity range" },
  { label: "Sealing Drives", value: "Vertical – Servo Driven • Horizontal – Servo Driven" },
  { label: "Filling Mechanism", value: "Piston Filler" },
  { label: "Perforation and Cutting", value: "As per customer requirement" },
  { label: "Laminate Roll Unwind", value: "Motor driven – Bonfiglioli Geared Motor" },
  { label: "Laminate Draw Off System", value: "PLC based Servo Driven" },
  { label: "Control", value: "Through Touch Screen Panel (HMI)" },
  { label: "Laminate Tracking System", value: "E+L web aligner – Digital" },
  { label: "Main Control Panel", value: "Air cooled panel – BCH make or Rittal" },
  { label: "Contact Parts", value: "SS 316 L" },
  { label: "Indirect Contact Parts", value: "SS 304 / 316" },
  { label: "Batch Cutting", value: "Can be programmed through PLC" },
  { label: "Mat Format", value: "In built feature of the Machine" },
  { label: "Electrical Spec.", value: "Main Motor – 2.2 KW, 3 Phase, 415 V • Connected load – 14 Kw • Consumption – 11 Kw" },
  { label: "PLC controlled Operations", value: "RTD module with PLC for Temperature controllers" },
  { label: "Layout Dimensions", value: "Length - 3200 mm • Width – 2600 mm • Height – 2100 mm" },
  { label: "Machine Weight", value: "Net Weight – 3500 kgs • Gross weight – 4000 kgs" },
  { label: "Compressed Air", value: "Operating Pressure – 5 Bar • Consumption – 3 CFM" },
  { label: "Pneumatics", value: "FESTO or equivalent" },
  { label: "Machine Efficiency", value: "90%*" },
  { label: "Scrap Rate", value: "Less than 2%*" },
  { label: "Machine Colour", value: "Shell Grey – Powder coated" },
  { label: "Weight Variation", value: "Within +/- 1%** of the filled quantity" },
];

export default function VerticalTechDetails() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="reveal flex items-center justify-center space-x-3 mb-4">
          <span className="h-px w-8 bg-brand-red"></span>
          <h2 className="text-brand-red font-bold tracking-[0.25em] text-xs uppercase font-heading flex items-center gap-2">
            <Settings2 size={16} />
            Technical Specifications
          </h2>
          <span className="h-px w-8 bg-brand-red"></span>
        </div>
        
        <h3 className="reveal text-3xl md:text-5xl font-bold font-heading uppercase tracking-tight text-charcoal text-center mb-12">
          Machine <span className="text-brand-red">Details</span>
        </h3>

        <div className="reveal bg-white rounded-sm border border-gray-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {specs.map((spec, idx) => (
              <div 
                key={idx} 
                className={`
                  p-6 flex flex-col justify-center
                  border-b border-gray-100
                  ${idx % 2 === 0 ? "md:border-r" : ""}
                  hover:bg-gray-50 transition-colors
                `}
              >
                <dt className="text-xs font-bold font-heading uppercase text-brand-red tracking-wider mb-2">
                  {spec.label}
                </dt>
                <dd className="text-sm font-body text-charcoal/80 font-semibold leading-relaxed">
                  {spec.value}
                </dd>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-100 p-6 border-t border-gray-200">
            <p className="text-[11px] font-body text-gray-500 font-semibold leading-relaxed">
              * Depends upon the type of product, density, and flow characteristics.<br />
              ** Under optimal testing conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
