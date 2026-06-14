"use client";

import { useState } from "react";
import Image from "next/image";
import { Package, Droplets, Scissors, Grid3X3 } from "lucide-react";

type PouchShape = {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
};

const pouchShapes: PouchShape[] = [
  {
    id: "stand-up",
    name: "Stand Up Pouch",
    image: "/pouch-shapes/stand-up-pouch.webp",
    category: "standup",
    description: "Classic free-standing format with bottom gusset for excellent shelf presence and product stability.",
  },
  {
    id: "stand-up-zipper",
    name: "Stand Up Pouch with Zipper",
    image: "/pouch-shapes/stand-up-pouch-with-zipper.webp",
    category: "standup",
    description: "Reclosable press-to-close zipper for consumer convenience and extended product freshness.",
  },
  {
    id: "stand-up-euro-zipper",
    name: "Stand Up Pouch with Euro Hole & Zipper",
    image: "/pouch-shapes/stand-up-pouch-with-zipper-and-euro-hole.webp",
    category: "standup",
    description: "Retail-ready hang-display pouch with integrated euro slot and reclosable zipper seal.",
  },
  {
    id: "stand-up-top-spout",
    name: "Stand Up Pouch with Top Spout",
    image: "/pouch-shapes/stand-up-pouch-top-spout.webp",
    category: "spout",
    description: "Top-mounted screw cap spout for controlled dispensing of liquids, sauces, and beverages.",
  },
  {
    id: "stand-up-side-spout",
    name: "Stand Up Pouch with Side Spout",
    image: "/pouch-shapes/stand-up-pouch-with-side-spout.webp",
    category: "spout",
    description: "Corner-positioned spout for ergonomic pouring of viscous liquids and heavy-duty products.",
  },
  {
    id: "stand-up-side-spout-hand",
    name: "Stand Up Pouch with Side Spout & Handle",
    image: "/pouch-shapes/stand-up-pouch-with-side-spout-and-hand.webp",
    category: "spout",
    description: "Large-format carry pouch with integrated handle and side-mounted dispensing spout.",
  },
  {
    id: "shaped-stand-up",
    name: "Shaped Stand Up Pouch",
    image: "/pouch-shapes/shaped-stand-up-pouch.webp",
    category: "shaped",
    description: "Custom die-cut contour pouch for maximum shelf differentiation and brand impact.",
  },
  {
    id: "shaped-side-spout",
    name: "Shaped Stand Up Pouch with Side Spout",
    image: "/pouch-shapes/shaped-stand-up-pouch-with-side-spout.webp",
    category: "shaped",
    description: "Contoured shaped pouch combined with side-mounted spout for liquid products.",
  },
  {
    id: "shaped-top-spout",
    name: "Shaped Standup Pouch with Top Spout",
    image: "/pouch-shapes/shaped-stand-up-pouch-with-top-spout.webp",
    category: "shaped",
    description: "Premium shaped pouch with top cap dispenser — ideal for juices, detergents, and syrups.",
  },
  {
    id: "shaped-zipper",
    name: "Shaped Stand Up Pouch with Zipper",
    image: "/pouch-shapes/shaped-stand-up-pouch-with-zipper.webp",
    category: "shaped",
    description: "Die-cut silhouette with press-to-close reclosable zipper for dry goods and snacks.",
  },
  {
    id: "pillow",
    name: "Pillow Pouch",
    image: "/pouch-shapes/pillow-pouch.webp",
    category: "specialty",
    description: "Classic three-seal pillow bag format — economical and high-speed for single-serve products.",
  },
  {
    id: "string",
    name: "String Pouch",
    image: "/pouch-shapes/string-pouches.webp",
    category: "specialty",
    description: "Multi-pack connected sachets (4-in-a-string) for portion-controlled retail packaging.",
  },
];

const categories = [
  { id: "all", name: "All Pouches", icon: Grid3X3 },
  { id: "standup", name: "Stand Up", icon: Package },
  { id: "spout", name: "Spout Formats", icon: Droplets },
  { id: "shaped", name: "Shaped Pouches", icon: Scissors },
  { id: "specialty", name: "Specialty", icon: Package },
];

import React from "react";

export default function PouchShapesGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? pouchShapes
      : activeCategory === "standup"
      ? pouchShapes.filter((p) => p.name.toLowerCase().includes("stand up") || p.name.toLowerCase().includes("standup"))
      : pouchShapes.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="h-px w-8 bg-brand-red"></span>
            <span className="text-brand-red font-bold tracking-[0.25em] text-xs uppercase font-heading">
              Pouch Format Catalog
            </span>
            <span className="h-px w-8 bg-brand-red"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tight text-charcoal mb-4">
            <>Pouch <span className="text-brand-red">Configurations</span></>
          </h2>
          <p className="text-gray-500 font-body text-base leading-relaxed font-semibold">
            BellaPack machinery supports a wide range of pouch formats, enabling manufacturers to package diverse products with flexibility, reliability, and consistent production quality.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-sm font-heading font-bold text-xs uppercase tracking-widest
                  transition-all duration-300 border
                  ${
                    isActive
                      ? "bg-brand-red text-white border-brand-red shadow-lg shadow-brand-red/20"
                      : "bg-white text-charcoal/70 border-gray-200 hover:border-brand-red hover:text-brand-red"
                  }
                `}
              >
                <Icon size={14} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div
          className={`grid gap-8 transition-all duration-500 ${
            filtered.length <= 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
              : filtered.length <= 3
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {filtered.map((pouch) => (
            <div
              key={pouch.id}
              className="group relative bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(pouch.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={pouch.image}
                  alt={pouch.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                />


              </div>

              {/* Label */}
              <div className="p-4 border-t border-gray-100">
                <h3 className="font-heading font-bold text-charcoal text-sm uppercase tracking-wide text-center leading-snug">
                  {pouch.name}
                </h3>
              </div>

              {/* Red accent line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
