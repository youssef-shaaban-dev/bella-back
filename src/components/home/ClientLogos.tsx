import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";

const clientLogos = [
  { name: "Clorox", img: "/clients_logos/clorox.webp" },
  { name: "Arma", img: "/clients_logos/Arma.webp" },
  { name: "Savola Group", img: "/clients_logos/savola-logo.webp" },
  { name: "OXI Brite", img: "/clients_logos/OXI.webp" },
  { name: "Domty", img: "/clients_logos/Domty.webp" },
  { name: "Persil", img: "/clients_logos/Persil.webp" },
  { name: "Sidco Saudi Arabia", img: "/clients_logos/sidco-saudi-arabia.webp" },
  { name: "Afia", img: "/clients_logos/afia-logo.webp" },
  { name: "ACT", img: "/clients_logos/ACT.webp" },
  { name: "Beyti", img: "/clients_logos/beyti.webp" },
  { name: "Dixie Mills", img: "/clients_logos/dixie-mills-logo.webp" },
  { name: "El Rabea", img: "/clients_logos/el-rabea-logo.webp" },
  { name: "Gardino", img: "/clients_logos/gardino-logo.webp" },
  { name: "Harvest", img: "/clients_logos/harvest-logo.webp" },
  { name: "Miro Milk", img: "/clients_logos/miro-milk-logo.webp" },
  { name: "Pril", img: "/clients_logos/pril-logo.webp" },
  { name: "Rawaby", img: "/clients_logos/rawaby-logo.webp" }
];

export default function ClientLogos() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden border-b border-gray-100 relative">
      <ScrollReveal className="container mx-auto px-6 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal tracking-widest uppercase">
          OUR CLIENTS
        </h2>
        <div className="w-12 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
      </ScrollReveal>

      {/* Infinite Slider Marquee Container */}
      <div className="relative w-full overflow-hidden py-6 md:py-8 select-none">
        
        {/* Left Mask Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
        
        {/* Right Mask Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />

        {/* Scrolling Inner Container */}
        <div className="flex animate-marquee-scroll w-max">
          {/* First loop of logos */}
          <div className="flex gap-8 items-center shrink-0 pr-8">
            {clientLogos.map((logo, index) => (
              <div
                key={`${logo.name}-1-${index}`}
                className="relative w-40 h-20 md:w-48 md:h-24 p-2 md:p-4 flex items-center justify-center transition-all duration-300 group cursor-pointer shrink-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo.img}
                    alt={`${logo.name} logo`}
                    fill
                    sizes="(max-width: 768px) 160px, 192px"
                    className="object-contain mix-blend-multiply transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second loop of logos (seamless connection) */}
          <div className="flex gap-8 items-center shrink-0 pr-8">
            {clientLogos.map((logo, index) => (
              <div
                key={`${logo.name}-2-${index}`}
                className="relative w-40 h-20 md:w-48 md:h-24 p-2 md:p-4 flex items-center justify-center transition-all duration-300 group cursor-pointer shrink-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo.img}
                    alt={`${logo.name} logo`}
                    fill
                    sizes="(max-width: 768px) 160px, 192px"
                    className="object-contain mix-blend-multiply transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

