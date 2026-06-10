"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck, Info, MessageSquare, X, ChevronRight
} from "lucide-react";

const categories = [
  { id: "all", name: "All Models" },
  { id: "spout", name: "Cap & Spout Series" },
  { id: "rotary", name: "High-Speed Rotary" },
  { id: "standard", name: "Flagship Flat & Stand-Up" },
  { id: "shaped", name: "Custom Shaped & Punch" },
];

const machineModels = [
  {
    id: "bs-2500",
    name: "BS-2500 Spout Pack",
    category: "spout",
    img: "/horizontal stand up pouch/BS-2500.jpeg",
    specs: ["Output: 2,500 PPM", "Spout Type: Center/Corner", "Dosing: Volumetric Liquid"],
    desc: "Engineered for medium-to-high speed liquid and viscous product filling, featuring a specialized Cap & Spout feeding system. It guarantees high-torque, hermetic capping and reliable spout sealing.",
    techDetails: "Servo-driven capping head, CIP/SIP integration, 316L sanitary stainless steel contact parts."
  },
  {
    id: "bs-2500-shpu",
    name: "BS-2500-SHPU Shaped",
    category: "spout",
    img: "/horizontal stand up pouch/BS-2500-SHPU.jpeg",
    specs: ["Custom Shapes", "Punch Unit: Hydraulic", "Output: 2,200 PPM"],
    desc: "Combines automatic Cap & Spout application with dual-axis shaped pouch contour die-cutting and active punch units. Perfect for fruit purees, yogurt pouches, and child-safe juice shapes.",
    techDetails: "High-precision photo-eye tracking, heated contour sealing dies, heavy-duty punch alignment."
  },
  {
    id: "bs-2500_pu",
    name: "BS-2500_PU Punch Spout",
    category: "spout",
    img: "/horizontal stand up pouch/BS-2500_PU.jpeg",
    specs: ["Euro Slot Punch", "Output: 2,400 PPM", "Spout Capper: High-torque"],
    desc: "Advanced Cap & Spout sealing platform equipped with heavy-duty vertical punching units for custom hanging slots, tear notches, and handles.",
    techDetails: "Hardened steel punch dies, active cap presence sensor, Siemens PLC touch controls."
  },
  {
    id: "bp-2500-da",
    name: "BP-2500-DA Dual Auger",
    category: "rotary",
    img: "/horizontal stand up pouch/BP-2500-DA.jpeg",
    specs: ["Dosing: Dual Auger", "Accuracy: ±0.5%", "Output: 3,000 PPM"],
    desc: "Dual-Auger rotary powder dosing system designed for extreme output speeds, ensuring zero-dust packaging of fine flour, milk powders, and spices.",
    techDetails: "Integrated dust extraction nozzles, twin-lane dry powder dosing, quick-change auger tooling."
  },
  {
    id: "bp-2500-a",
    name: "BP-2500-A Auger Rotary",
    category: "rotary",
    img: "/horizontal stand up pouch/BP-2500-A.jpeg",
    specs: ["Dosing: Single Auger", "Output: 2,800 PPM", "Max Width: 180mm"],
    desc: "High-speed Rotary HFFS machine with an integrated single Auger doser, optimized for ground coffee, baking ingredients, and chemical powders.",
    techDetails: "Servo-driven auger shaft, hopper level monitoring, nitrogen flushing for aroma preservation."
  },
  {
    id: "b2500",
    name: "B2500 Standard",
    category: "standard",
    img: "/horizontal stand up pouch/B2500.jpeg",
    specs: ["Pouch: Flat / Stand-up", "Zipper Feed: Optional", "Output: 2,500 PPM"],
    desc: "Our signature multi-purpose flagship horizontal stand-up pouch packer, offering flexible width adjustments and high mechanical reliability.",
    techDetails: "Mechanical cam-driven grid, automatic pouch pouch-opening verification, multi-stage temperature control."
  },
  {
    id: "b2500-d",
    name: "B2500-D Duplex Twin",
    category: "standard",
    img: "/horizontal stand up pouch/B2500-D.jpeg",
    specs: ["Lane: Duplex (Twin)", "Output: 4,800 PPM", "Double Dosing: Yes"],
    desc: "Double-output Duplex machine series designed to simultaneously form, fill, and seal twin pouch lanes, doubling production capacity.",
    techDetails: "Synchronized dual-dosing valves, independent lane temperature monitors, dual discharge chutes."
  },
  {
    id: "b-2500-shpu",
    name: "B-2500-SHPU Shape & Punch",
    category: "shaped",
    img: "/horizontal stand up pouch/B-2500-SHPU.jpeg",
    specs: ["Contour Cutting: Active", "Slot Punch: Included", "Output: 2,200 PPM"],
    desc: "Standard horizontal form-fill-seal model equipped with custom shaped pouch knives and a high-precision hydraulic punch.",
    techDetails: "Independent shaped knives calibration, scrap material vacuum collector, digital punch frequency setup."
  },
  {
    id: "b-2500-pu",
    name: "B-2500-PU Standard Punch",
    category: "shaped",
    img: "/horizontal stand up pouch/B-2500-PU.jpeg",
    specs: ["Euro Slot: Dual Punch", "Max Width: 220mm", "Output: 2,400 PPM"],
    desc: "Standard HFFS flat/stand-up pouch machine with automatic punch tools for round corners, euro-slots, and carry handles.",
    techDetails: "Hydraulic punch alignment, round corner die tooling, high-tensile frame structure."
  },
  {
    id: "b-2500-bsh",
    name: "B-2500-BSH Spout Shape",
    category: "shaped",
    img: "/horizontal stand up pouch/B-2500-BSH.jpeg",
    specs: ["Pouch Shape: Custom", "Spout Insert: Yes", "Output: 2,000 PPM"],
    desc: "Modular horizontal pouch machine optimized for custom shaped die-cutting and capping, ideal for premium B2B liquid food packs.",
    techDetails: "Active pouch alignment guide, specialized corner spout insertion jaws, contour seal test logs."
  },
  {
    id: "b-2500-sh",
    name: "B-2500-SH Shaped Cutter",
    category: "shaped",
    img: "/horizontal stand up pouch/B-2500- SH.jpeg",
    specs: ["Contour Sealer: Heated", "Output: 2,100 PPM", "Tolerances: ±0.1mm"],
    desc: "Designed specifically for highly contoured shaped pouches, utilizing precision heat-sealing jaws and cold-cut contour knives.",
    techDetails: "Micro-metric knife adjustments, premium anodized sealing jaws, optical bag registration."
  },
];

export default function MachinePortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedModel, setSelectedModel] = useState<typeof machineModels[0] | null>(null);

  const filteredModels = activeFilter === "all"
    ? machineModels
    : machineModels.filter(m => m.category === activeFilter);

  return (
    <section className="py-24 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-6">

        <div className="reveal text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tight text-charcoal">
            Machine <span className="text-brand-red">Portfolio</span>
          </h2>
          <p className="text-gray-500 font-body text-sm mt-3 font-semibold leading-relaxed">
            BellaPack features 11 highly-specialized sachet and shaped stand-up pouch machines. Utilize the category filters below to locate the model best suited for your B2B line.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="reveal flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-3 text-[10px] font-heading font-bold uppercase tracking-widest rounded-sm transition-all border ${activeFilter === cat.id
                  ? "bg-charcoal text-white border-charcoal shadow-md"
                  : "bg-white text-charcoal border-gray-200 hover:border-charcoal hover:bg-gray-50"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Machine Grid - standard CSS transitions avoid dynamic React/GSAP bugs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModels.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 hover:border-gray-300 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group animate-[fadeIn_0.4s_ease-out]"
            >
              <div className="relative aspect-4/3 bg-white flex items-center justify-center overflow-hidden border-b border-gray-100 p-2">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain mix-blend-multiply group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500 drop-shadow-sm"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[9px] font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {categories.find(c => c.id === item.category)?.name.replace(" Series", "").replace("Flagship ", "").replace("Custom ", "")}
                </div>
              </div>

              <div className="p-5 grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-heading uppercase text-charcoal mb-2 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-xs font-body line-clamp-2 mb-4 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Specs list */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.specs.map((spec, sIdx) => (
                      <span key={sIdx} className="bg-gray-100 text-charcoal/70 text-[9px] font-heading font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedModel(item)}
                    className="text-xs font-heading font-bold text-brand-red hover:text-charcoal uppercase tracking-widest flex items-center gap-1.5 transition-colors"
                  >
                    <span>Technical Specs</span>
                    <ChevronRight size={14} />
                  </button>
                  <span className="text-[10px] font-heading font-bold text-gray-400 uppercase tracking-widest">
                    CE Approved
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Technical Specification Overlay Modal */}
      {selectedModel && (
        <div
          onClick={() => setSelectedModel(null)}
          className="fixed inset-0 z-100 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-charcoal w-full max-w-2xl rounded-sm overflow-hidden border border-gray-200 shadow-2xl relative max-h-[90vh] overflow-y-auto p-6 md:p-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedModel(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-brand-red p-2 hover:bg-gray-50 rounded-full transition-all"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col justify-between h-full">
              <div>
                <span className="inline-block bg-brand-red/10 text-brand-red text-[9px] font-heading font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                  MODEL OVERVIEW
                </span>

                <h3 className="text-3xl font-bold font-heading uppercase text-charcoal mb-4 pr-8">
                  {selectedModel.name}
                </h3>

                <div className="relative aspect-video rounded-sm overflow-hidden border border-gray-200 mb-6 bg-white flex items-center justify-center p-4">
                  <Image
                    src={selectedModel.img}
                    alt={selectedModel.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                  {selectedModel.desc}
                </p>

                <div className="bg-gray-50 border border-gray-100 p-5 rounded-sm">
                  <h4 className="text-xs font-bold font-heading text-brand-red uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Info size={14} />
                    <span>Technical Architecture</span>
                  </h4>
                  <p className="text-gray-500 font-body text-xs leading-relaxed font-semibold">
                    {selectedModel.techDetails}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[10px] font-heading font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck className="text-brand-red" size={16} />
                  <span>ISO 9001 & CE Certified</span>
                </span>

                <a
                  href={`https://wa.me/201019222211?text=${encodeURIComponent(
                    `Hello, I am interested in inquiring about the machine: ${selectedModel.name}. Could you please provide more details and specifications?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 bg-brand-red hover:bg-charcoal text-white font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-colors gap-2 shadow-md hover:shadow-lg"
                >
                  <MessageSquare size={14} />
                  <span>Request Specs via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
