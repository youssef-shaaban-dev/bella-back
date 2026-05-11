import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function ManufacturingFacility() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 space-y-8 reveal">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-px w-12 bg-brand-red"></div>
                <h2 className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm">The Hub of Production</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-charcoal tracking-tight leading-none">
                MANUFACTURING <br />FACILITY
              </h3>
              <p className="text-lg font-heading font-semibold text-brand-blue uppercase tracking-wider">
                Industrial Zone, 10th of Ramadan City, Egypt
              </p>
            </div>

            <p className="text-gray-600 font-body leading-relaxed">
              Our centralized advanced manufacturing hub drives the realization of each high-complexity machine. The facility integrates rigorous logistics and heavy-precision engineering.
            </p>

            <div className="space-y-6 pt-4">
              {[
                { title: "Precision CNC machining", value: "Every metal component aligns to microns." },
                { title: "Advanced assembly processes", value: "Streamlined ergonomic flow for build integrity." },
                { title: "Strict quality control systems", value: "Multiple checkpoint validation before dispatch." }
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-4 border-b border-gray-100 pb-4">
                  <div className="text-brand-red font-heading font-bold text-2xl">0{idx + 1}</div>
                  <div>
                    <h4 className="font-heading font-bold text-charcoal uppercase tracking-wide mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-3 bg-gray-50 border border-gray-100 px-6 py-4 rounded-sm text-charcoal shadow-sm">
              <ShieldCheck className="text-brand-red w-5 h-5 shrink-0" />
              <p className="font-heading uppercase font-bold tracking-wider text-xs leading-snug">
                Ensures international manufacturing and export standards
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative reveal">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/PacProcess 2025/ 4.jpeg"
                alt="Bella Pack Manufacturing Facility View"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
            </div>
            {/* Geometric Overlay decorative */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-red -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-100 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
