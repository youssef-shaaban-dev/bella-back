"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck, Info, MessageSquare, X, ChevronRight
} from "lucide-react";

const categories = [
  { id: "all", name: "All Models" },
  { id: "liquid", name: "Liquid Filling" },
  { id: "powder", name: "Powder Filling" },
  { id: "granules", name: "Granules & Snacks" },
];

const machineModels = [
  {
    id: "b-2500",
    name: "B-2500",
    category: "liquid",
    img: "/horizontal-standup-pouch/B2500.webp",
    specs: ["Type: Simplex", "Speed: 50 ppm", "Volume: up to 1500ml"],
    desc: "For stand-up pouches and flat pouches, liquid filling. Designed to deliver high performance, precise filling accuracy, and consistent operational efficiency for standard packaging formats.",
    techDetails: "Hygienic liquid dosing pumps, Siemens PLC touch control panel, CE certified systems. Built for Food & Beverage, Detergents & Chemical Products, Cosmetics & Pharmaceuticals.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch.webp", "/pouch-shapes/pillow-pouch.webp"]
  },
  {
    id: "b-2500-d",
    name: "B-2500-D",
    category: "liquid",
    img: "/horizontal-standup-pouch/B2500-D.webp",
    specs: ["Type: Duplex", "Speed: 100 ppm", "Volume: up to 500ml (Duplex) / 1500ml (Simplex)"],
    desc: "For stand-up pouches and flat pouches, liquid filling in a duplex configuration. Doubles production capacity on the same floor footprint.",
    techDetails: "Synchronized dual-lane dosing valves, independent lane temperature monitors, dual discharge chutes. Suitable for Food & Beverage, Detergents & Chemical Products, Cosmetics & Pharmaceuticals.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch.webp", "/pouch-shapes/pillow-pouch.webp"]
  },
  {
    id: "b-2500-sh",
    name: "B-2500-SH",
    category: "liquid",
    img: "/horizontal-standup-pouch/B-2500-SH.webp",
    specs: ["Type: Simplex", "Speed: 50 ppm", "Volume: up to 1500ml"],
    desc: "For custom shaped stand-up pouch, liquid filling. Designed specifically for highly contoured shaped pouches, utilizing precision heat-sealing jaws and cold-cut contour knives.",
    techDetails: "Micro-metric knife adjustments, custom shaped contour die-cutting, active punch alignment guide. Suitable for Food & Beverage, Detergents & Chemical Products, Cosmetics & Pharmaceuticals.",
    pouchFormats: ["/pouch-shapes/shaped-stand-up-pouch.webp"]
  },
  {
    id: "b-2500-dsh",
    name: "B-2500-DSH",
    category: "liquid",
    img: "/horizontal-standup-pouch/B-2500-SHPU.webp",
    specs: ["Type: Duplex", "Speed: 100 ppm", "Volume: up to 500ml (Duplex) / 1500ml (Simplex)"],
    desc: "For custom shaped stand-up pouch, liquid filling in a duplex configuration. Engineered for high-speed shaped contour die-cutting and active punch units.",
    techDetails: "Heated contour sealing dies, heavy-duty punch alignment, synchronized dual shaped knives calibration. Suitable for Food & Beverage, Detergents & Chemical Products, Cosmetics & Pharmaceuticals.",
    pouchFormats: ["/pouch-shapes/shaped-stand-up-pouch.webp"]
  },
  {
    id: "bs-2500",
    name: "BS-2500",
    category: "liquid",
    img: "/horizontal-standup-pouch/BS-2500.webp",
    specs: ["Type: Simplex", "Speed: 50 PPM", "Volume: up to 1500ml"],
    desc: "For custom shaped stand-up pouch with top spout, liquid filling. Features specialized high-torque cap feeding and reliable spout sealing.",
    techDetails: "Active cap presence sensor, servo-driven capping head, CIP/SIP integration, 316L sanitary stainless steel contact parts. Suitable for Food & Beverage, Detergents & Chemical Products, Cosmetics & Pharmaceuticals.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch-top-spout.webp"]
  },
  {
    id: "bs-2500-d",
    name: "BS-2500-D",
    category: "liquid",
    img: "/horizontal-standup-pouch/BS-2500.webp",
    specs: ["Type: Duplex", "Speed: 100 ppm", "Volume: up to 500ml (Duplex) / 1500ml (Simplex)"],
    desc: "For stand-up pouches and flat pouches, liquid filling in a duplex configuration. Provides double-lane spouted capping feed and double-lane liquid dosing.",
    techDetails: "Dual lane spouted capping feed, high-torque capping assembly, dual lane volumetric liquid dosing. Suitable for Food & Beverage, Detergents & Chemical Products, Cosmetics & Pharmaceuticals.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch-top-spout.webp"]
  },
  {
    id: "bs-2500-sh",
    name: "BS-2500-SH",
    category: "liquid",
    img: "/horizontal-standup-pouch/BS-2500-SHPU.webp",
    specs: ["Type: Simplex", "Speed: 50 PPM", "Volume: up to 1500ml"],
    desc: "For custom shaped stand-up pouch with top spout, liquid filling. Integrates bespoke shaped die-cutting and capping technology on a simplex platform.",
    techDetails: "Active cap insertion guide, heated contour sealing dies, heavy-duty shaped punch calibration. Suitable for Food & Beverage, Detergents & Chemical Products, Cosmetics & Pharmaceuticals.",
    pouchFormats: ["/pouch-shapes/shaped-stand-up-pouch-with-top-spout.webp"]
  },
  {
    id: "bs-2500-dsh",
    name: "BS-2500-DSH",
    category: "liquid",
    img: "/horizontal-standup-pouch/BS-2500-SHPU.webp",
    specs: ["Type: Duplex", "Speed: 100 ppm", "Volume: up to 500ml (Duplex) / 1500ml (Simplex)"],
    desc: "For custom shaped stand-up pouch with top spout, liquid filling in a duplex configuration. Engineered for maximum output of premium retail spouted packs.",
    techDetails: "Synchronized shaped contour knives, dual spouted capping heads, clean-in-place sanitary setup. Suitable for Food & Beverage, Detergents & Chemical Products, Cosmetics & Pharmaceuticals.",
    pouchFormats: ["/pouch-shapes/shaped-stand-up-pouch-with-top-spout.webp"]
  },
  {
    id: "bp-2500-a",
    name: "BP-2500-A",
    category: "powder",
    img: "/horizontal-standup-pouch/BP-2500-A.webp",
    specs: ["Type: Simplex", "Speed: 50 ppm", "Volume: up to 1500ml"],
    desc: "For stand-up pouch, powder filling. Features a single-screw auger dosing system designed for high accuracy and minimal dust emission.",
    techDetails: "Servo-driven auger shaft, hopper level monitoring, nitrogen gas flushing for aroma preservation. Suitable for Spices & Coffee, Food & Beverage, Cosmetics & Pharmaceuticals.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch.webp"]
  },
  {
    id: "bp-2500-da",
    name: "BP-2500-DA",
    category: "powder",
    img: "/horizontal-standup-pouch/BP-2500-DA.webp",
    specs: ["Type: Duplex", "Speed: 100 ppm", "Volume: up to 500ml (Duplex) / 1500ml (Simplex)"],
    desc: "For stand-up pouch, powder filling in a duplex configuration. Implements dual-lane auger dosing for high-speed continuous packaging.",
    techDetails: "Integrated twin-lane dry powder auger dosing, active dust extraction nozzles, twin-lane sealing. Suitable for Spices & Coffee, Food & Beverage, Cosmetics & Pharmaceuticals.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch.webp"]
  },
  {
    id: "bp-3000-za",
    name: "BP-3000-ZA",
    category: "powder",
    img: "/horizontal-standup-pouch/BP-2500-A.webp",
    specs: ["Type: Simplex", "Speed: 50 ppm", "Volume: up to 1500ml"],
    desc: "For stand-up pouch with zipper, powder filling. Enables inline press-to-close zipper feeding and sealing for dry goods.",
    techDetails: "Zipper heat-sealing unit, optical zip registration, Siemens PLC touch control panel. Suitable for Spices & Coffee, Food & Beverage, Cosmetics & Pharmaceuticals.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch-with-zipper.webp"]
  },
  {
    id: "bp-3000-dza",
    name: "BP-3000-DZA",
    category: "powder",
    img: "/horizontal-standup-pouch/BP-2500-DA.webp",
    specs: ["Type: Duplex", "Speed: 100 ppm", "Volume: up to 500ml (Duplex) / 1500ml (Simplex)"],
    desc: "For stand-up pouch with zipper, powder filling in a duplex configuration. Combines dual zipper feed with duplex auger dosing.",
    techDetails: "Simultaneous dual-lane zipper feeding, dual powder auger dosers, double discharge chutes. Suitable for Spices & Coffee, Food & Beverage, Cosmetics & Pharmaceuticals.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch-with-zipper.webp"]
  },
  {
    id: "bp-3000-zsha",
    name: "BP-3000-ZSHA",
    category: "powder",
    img: "/horizontal-standup-pouch/B-2500-SHPU.webp",
    specs: ["Type: Simplex", "Speed: 50 ppm", "Volume: up to 1500ml"],
    desc: "For custom shaped stand-up pouch with zipper, powder filling. Delivers highly differentiated shaped profiles with reclosable zipper seals.",
    techDetails: "Heated shaped sealing jaws, inline zipper application, optical shape registration. Suitable for Spices & Coffee, Food & Beverage, Cosmetics & Pharmaceuticals.",
    pouchFormats: ["/pouch-shapes/shaped-stand-up-pouch-with-zipper.webp"]
  },
  {
    id: "bp-3000-dzsha",
    name: "BP-3000-DZSHA",
    category: "powder",
    img: "/horizontal-standup-pouch/B-2500-SHPU.webp",
    specs: ["Type: Duplex", "Speed: 100 ppm", "Volume: up to 500ml (Duplex) / 1500ml (Simplex)"],
    desc: "For custom shaped stand-up pouch with zipper, fine powder filling in a duplex configuration. Designed for maximum production speed and accuracy.",
    techDetails: "Dual-lane shaped die-cutting, synchronized zipper sealer, heavy-duty hydraulic punch. Suitable for Spices & Coffee, Food & Beverage, Cosmetics & Pharmaceuticals.",
    pouchFormats: ["/pouch-shapes/shaped-stand-up-pouch-with-zipper.webp"]
  },
  {
    id: "bp-2500-c",
    name: "BP-2500-C",
    category: "granules",
    img: "/horizontal-standup-pouch/BP-2500-A.webp",
    specs: ["Type: Simplex", "Speed: 50 ppm", "Volume: up to 1500ml"],
    desc: "For stand-up pouches, legumes and granules filling. Features robust volumetric cup dosing or linear scales for high accuracy.",
    techDetails: "Volumetric dosing cups, heavy-duty build, dust collection ports, Siemens PLC touch controls. Suitable for Snacks & Granular Products, Spices & Coffee.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch.webp"]
  },
  {
    id: "bp-2500-dc",
    name: "BP-2500-DC",
    category: "granules",
    img: "/horizontal-standup-pouch/BP-2500-DA.webp",
    specs: ["Type: Duplex", "Speed: 100 ppm", "Volume: up to 500ml (Duplex) / 1500ml (Simplex)"],
    desc: "For stand-up pouches, legumes and granules filling in a duplex configuration. Employs double cup fillers to maximize output.",
    techDetails: "Double lane cup dosing systems, synchronized discharge gates, high speed sealing jaws. Suitable for Snacks & Granular Products, Spices & Coffee.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch.webp"]
  },
  {
    id: "bp-3000-zc",
    name: "BP-3000-ZC",
    category: "granules",
    img: "/horizontal-standup-pouch/BP-2500-A.webp",
    specs: ["Type: Simplex", "Speed: 50 ppm", "Volume: up to 1500ml"],
    desc: "For stand-up pouches with zipper, legumes and granules filling. Merges fast dry filling with inline reclosable zipper feeding.",
    techDetails: "Inline zipper feed, volumetric cup dosing integration, heavy-duty sealing dies. Suitable for Snacks & Granular Products, Spices & Coffee.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch-with-zipper.webp"]
  },
  {
    id: "bp-3000-dzc",
    name: "BP-3000-DZC",
    category: "granules",
    img: "/horizontal-standup-pouch/BP-2500-DA.webp",
    specs: ["Type: Duplex", "Speed: 100 ppm", "Volume: up to 500ml (Duplex) / 1500ml (Simplex)"],
    desc: "For stand-up pouches with zipper, legumes and granules filling in a duplex configuration. Ensures hermetic zipper and bag seals.",
    techDetails: "Dual-lane zipper attachment, double volumetric dosing system, double discharge gates. Suitable for Snacks & Granular Products, Spices & Coffee.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch-with-zipper.webp"]
  },
  {
    id: "bp-3000-zshc",
    name: "BP-3000-ZSHC",
    category: "granules",
    img: "/horizontal-standup-pouch/B-2500-SHPU.webp",
    specs: ["Type: Simplex", "Speed: 50 ppm", "Volume: up to 1500ml"],
    desc: "For custom shaped stand-up pouches with zipper, legumes and granules filling. Designed for premium contoured snack and grain formats.",
    techDetails: "Hydraulic punch alignment, heated shaped sealing jaws, inline zipper application. Suitable for Snacks & Granular Products, Spices & Coffee.",
    pouchFormats: ["/pouch-shapes/shaped-stand-up-pouch-with-zipper.webp"]
  },
  {
    id: "bp-3000-dzshc",
    name: "BP-3000-DZSHC",
    category: "granules",
    img: "/horizontal-standup-pouch/B-2500-SHPU.webp",
    specs: ["Type: Duplex", "Speed: 100 ppm", "Volume: up to 500ml (Duplex) / 1500ml (Simplex)"],
    desc: "For custom shaped stand-up pouches with zipper, legumes and granules filling in a duplex configuration. Delivers high speed shaped outline execution.",
    techDetails: "Synchronized dual shaped knives, dual zipper sealing, double cup dosing. Suitable for Snacks & Granular Products, Spices & Coffee.",
    pouchFormats: ["/pouch-shapes/shaped-stand-up-pouch-with-zipper.webp"]
  },
  {
    id: "bm-2500",
    name: "BM-2500",
    category: "granules",
    img: "/horizontal-standup-pouch/B2500.webp",
    specs: ["Type: Simplex", "Speed: 50 ppm", "Volume: up to 1500ml"],
    desc: "For stand-up pouches, snacks filling. Designed specifically for gentle snack handling, integrating with multi-head combinational weighers.",
    techDetails: "Multi-head combination weigher integration interface, nitrogen flushing, zero-drip chutes. Suitable for Snacks & Granular Products.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch.webp"]
  },
  {
    id: "bm-2500-d",
    name: "BM-2500-D",
    category: "granules",
    img: "/horizontal-standup-pouch/B2500-D.webp",
    specs: ["Type: Duplex", "Speed: 100 ppm", "Volume: up to 500ml (Duplex) / 1500ml (Simplex)"],
    desc: "For stand-up pouches, snacks filling in a duplex configuration. Synchronizes dual lane discharge with dual weigher scaling.",
    techDetails: "Dual multi-head weigher sync, independent discharge gates, twin lane sealing. Suitable for Snacks & Granular Products.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch.webp"]
  },
  {
    id: "bm-3000-z",
    name: "BM-3000-Z",
    category: "granules",
    img: "/horizontal-standup-pouch/B-2500-PU.webp",
    specs: ["Type: Simplex", "Speed: 50 ppm", "Volume: up to 1500ml"],
    desc: "For stand-up pouches with zipper, snacks filling. Combines weigher speed with inline reclosable zipper feeding.",
    techDetails: "Inline zipper heat seal jaws, nitrogen flushing for shelf freshness, product safety gates. Suitable for Snacks & Granular Products.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch-with-zipper.webp"]
  },
  {
    id: "bm-3000-dz",
    name: "BM-3000-DZ",
    category: "granules",
    img: "/horizontal-standup-pouch/B2500-D.webp",
    specs: ["Type: Duplex", "Speed: 100 ppm", "Volume: up to 500ml (Duplex) / 1500ml (Simplex)"],
    desc: "For stand-up pouches with zipper, snacks filling in a duplex configuration. The ultimate throughput solution for premium zipper snacks.",
    techDetails: "Synchronized dual-lane zipper feeders, dual weigher integrations, double discharge channels. Suitable for Snacks & Granular Products.",
    pouchFormats: ["/pouch-shapes/stand-up-pouch-with-zipper.webp"]
  },
  {
    id: "bm-3000-zsh",
    name: "BM-3000-ZSH",
    category: "granules",
    img: "/horizontal-standup-pouch/B-2500-SHPU.webp",
    specs: ["Type: Simplex", "Speed: 50 ppm", "Volume: up to 1500ml"],
    desc: "For custom shaped stand-up pouches with zipper, snacks filling. Creates high shelf-appeal contour shaped pouches with zippers.",
    techDetails: "Heated contour sealing dies, hydraulic contour shaped knives, inline zipper application. Suitable for Snacks & Granular Products.",
    pouchFormats: ["/pouch-shapes/shaped-stand-up-pouch-with-zipper.webp"]
  },
  {
    id: "bm-3000-dzsh",
    name: "BM-3000-DZSH",
    category: "granules",
    img: "/horizontal-standup-pouch/B-2500-SHPU.webp",
    specs: ["Type: Duplex", "Speed: 100 ppm", "Volume: up to 500ml (Duplex) / 1500ml (Simplex)"],
    desc: "For shaped stand-up pouch with zipper, snacks filling in a duplex configuration. Top-tier speed and precision packaging presentation.",
    techDetails: "Twin-axis shaped die cutting, dual-lane zipper feeding, advanced Siemens PLC controls. Suitable for Snacks & Granular Products.",
    pouchFormats: ["/pouch-shapes/shaped-stand-up-pouch-with-zipper.webp"]
  }
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
            BellaPack features 26 highly-specialized sachet and shaped stand-up pouch machines. Utilize the category filters below to locate the model best suited for your B2B line.
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
                  <p className="text-gray-500 text-xs font-body line-clamp-3 mb-4 leading-relaxed font-semibold">
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

                  {/* Compatible Pouch Formats inline review */}
                  {item.pouchFormats && item.pouchFormats.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <span className="text-[9px] font-heading font-bold text-gray-400 uppercase tracking-widest block mb-2">Pouch Formats</span>
                      <div className="flex gap-2">
                        {item.pouchFormats.map((pImg, pIdx) => (
                          <div 
                            key={pIdx} 
                            className="relative w-10 h-10 bg-gray-50 border border-gray-200 p-1 rounded-sm flex items-center justify-center group/pouch shadow-xs" 
                            title={pImg.split("/").pop()?.replace(".webp", "")}
                          >
                            <Image 
                              src={pImg} 
                              alt="Pouch Format" 
                              fill 
                              className="object-contain p-1 transition-transform group-hover/pouch:scale-110" 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-100 pt-4 mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedModel(item)}
                    className="text-xs font-heading font-bold text-brand-red hover:text-charcoal uppercase tracking-widest flex items-center gap-1.5 transition-colors"
                  >
                    <span>Technical Specs</span>
                    <ChevronRight size={14} />
                  </button>
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

                <p className="text-gray-600 font-body text-sm leading-relaxed mb-6 font-semibold">
                  {selectedModel.desc}
                </p>

                <div className="bg-gray-50 border border-gray-100 p-5 rounded-sm mb-6">
                  <h4 className="text-xs font-bold font-heading text-brand-red uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Info size={14} />
                    <span>Technical Architecture</span>
                  </h4>
                  <p className="text-gray-500 font-body text-xs leading-relaxed font-semibold">
                    {selectedModel.techDetails}
                  </p>
                </div>

                {selectedModel.pouchFormats && selectedModel.pouchFormats.length > 0 && (
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-xs font-bold font-heading text-brand-red uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <ShieldCheck size={14} />
                      <span>Compatible Pouch Formats</span>
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {selectedModel.pouchFormats.map((pImg, pIdx) => {
                        const name = pImg.split("/").pop()?.replace(".webp", "").replace(/-/g, " ");
                        return (
                          <div key={pIdx} className="flex flex-col items-center gap-2">
                            <div className="relative w-16 h-16 bg-gray-50 border border-gray-200 p-2 rounded-sm flex items-center justify-center shadow-xs">
                              <Image src={pImg} alt="Pouch Format" fill className="object-contain p-2" />
                            </div>
                            <span className="text-[9px] font-heading font-bold text-gray-500 uppercase tracking-wide text-center max-w-[90px] leading-tight block">{name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
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

