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
    image: "/pouch shapes/stand up pouch.png",
    category: "standup",
    description: "Classic free-standing format with bottom gusset for excellent shelf presence and product stability.",
  },
  {
    id: "stand-up-zipper",
    name: "Stand Up Pouch with Zipper",
    image: "/pouch shapes/stand up pouch with zipper.png",
    category: "standup",
    description: "Reclosable press-to-close zipper for consumer convenience and extended product freshness.",
  },
  {
    id: "stand-up-euro-zipper",
    name: "Stand Up Pouch with Euro Hole & Zipper",
    image: "/pouch shapes/stand up pouch with zipper and euro hole.png",
    category: "standup",
    description: "Retail-ready hang-display pouch with integrated euro slot and reclosable zipper seal.",
  },
  {
    id: "stand-up-top-spout",
    name: "Stand Up Pouch with Top Spout",
    image: "/pouch shapes/stand up pouch top spout.png",
    category: "spout",
    description: "Top-mounted screw cap spout for controlled dispensing of liquids, sauces, and beverages.",
  },
  {
    id: "stand-up-side-spout",
    name: "Stand Up Pouch with Side Spout",
    image: "/pouch shapes/stand up pouch with side spout.png",
    category: "spout",
    description: "Corner-positioned spout for ergonomic pouring of viscous liquids and heavy-duty products.",
  },
  {
    id: "stand-up-side-spout-hand",
    name: "Stand Up Pouch with Side Spout & Handle",
    image: "/pouch shapes/stand up pouch with side spout and hand.png",
    category: "spout",
    description: "Large-format carry pouch with integrated handle and side-mounted dispensing spout.",
  },
  {
    id: "shaped-stand-up",
    name: "Shaped Stand Up Pouch",
    image: "/pouch shapes/shaped stand up pouch.png",
    category: "shaped",
    description: "Custom die-cut contour pouch for maximum shelf differentiation and brand impact.",
  },
  {
    id: "shaped-side-spout",
    name: "Shaped Stand Up Pouch with Side Spout",
    image: "/pouch shapes/shaped stand up pouch with side spout.png",
    category: "shaped",
    description: "Contoured shaped pouch combined with side-mounted spout for liquid products.",
  },
  {
    id: "shaped-top-spout",
    name: "Shaped Standup Pouch with Top Spout",
    image: "/pouch shapes/shaped stand up pouch with top spout.png",
    category: "shaped",
    description: "Premium shaped pouch with top cap dispenser — ideal for juices, detergents, and syrups.",
  },
  {
    id: "shaped-zipper",
    name: "Shaped Stand Up Pouch with Zipper",
    image: "/pouch shapes/shaped stand up pouch with zipper.png",
    category: "shaped",
    description: "Die-cut silhouette with press-to-close reclosable zipper for dry goods and snacks.",
  },
  {
    id: "pillow",
    name: "Pillow Pouch",
    image: "/pouch shapes/pillow pouch.png",
    category: "specialty",
    description: "Classic three-seal pillow bag format — economical and high-speed for single-serve products.",
  },
  {
    id: "string",
    name: "String Pouch",
    image: "/pouch shapes/string pouches.png",
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

export default function PouchShapesGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? pouchShapes
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
            12 Pouch <span className="text-brand-red">Configurations</span>
          </h2>
          <p className="text-gray-500 font-body text-base leading-relaxed font-semibold">
            Every pouch format below can be produced on Bella Pack&apos;s Horizontal Form-Fill-Seal platform with minimal changeover time.
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
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div
                  className={`
                    absolute inset-0 bg-charcoal/90 flex items-center justify-center p-6
                    transition-all duration-400
                    ${hoveredId === pouch.id ? "opacity-100" : "opacity-0 pointer-events-none"}
                  `}
                >
                  <p className="text-white/90 font-body text-sm text-center leading-relaxed">
                    {pouch.description}
                  </p>
                </div>
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

        {/* Bottom Stats */}
        <div className="reveal mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "12+", label: "Pouch Formats" },
            { value: "4", label: "Spout Options" },
            { value: "4", label: "Shaped Variants" },
            { value: "< 15min", label: "Changeover Time" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <span className="block text-3xl md:text-4xl font-heading font-bold text-brand-red mb-1">
                {stat.value}
              </span>
              <span className="block text-xs font-heading font-bold text-charcoal/60 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
