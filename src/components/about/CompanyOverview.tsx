import Image from "next/image";
import { Factory, Globe } from "lucide-react";

export default function CompanyOverview() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative reveal">
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl rounded-sm group">
              <Image
                src="/PacProcess 2025/ 2.jpeg"
                alt="HFFS Machines"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-8 border-white/20 m-4 pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 md:right-[-40px] bg-brand-red text-white p-8 rounded-sm shadow-2xl hidden md:block z-20 max-w-[240px]">
              <span className="text-6xl font-heading font-bold leading-none block mb-1">25+</span>
              <span className="text-sm font-heading font-semibold uppercase tracking-widest">Years of Expert Experience</span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-12 flex flex-col space-y-8 reveal">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="h-px w-12 bg-brand-red"></div>
                <h2 className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm">Company Overview</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-charcoal leading-none">
                ENGINEERING THE FUTURE OF <span className="text-brand-red">EGYPTIAN</span> MANUFACTURING
              </h3>
            </div>

            <div className="space-y-6 text-gray-600 font-body text-lg leading-relaxed">
              <p>
                <strong className="text-charcoal">Established in 2000</strong>, Bella Pack Tec is a 100% Egyptian-owned packaging machine manufacturer, specializing in horizontal form fill seal (HFFS) packaging machines and advanced filling solutions.
              </p>
              <p>
                With over 25 years of experience, we provide high-performance packaging machines designed to meet the demands of modern industries, including <span className="font-bold text-charcoal">food, beverage, chemicals, cosmetics, and pharmaceutical products</span>.
              </p>
              <p>
                Our focus is on delivering reliable, efficient, and scalable production solutions that help businesses grow and compete in local and international markets.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-50 rounded-full">
                  <Factory size={24} className="text-brand-red" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-charcoal tracking-wider">HFFS EXPERTS</h4>
                  <p className="text-xs text-gray-500 uppercase">Precision Solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-50 rounded-full">
                  <Globe size={24} className="text-brand-red" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-charcoal tracking-wider">LOCAL & GLOBAL</h4>
                  <p className="text-xs text-gray-500 uppercase">Market Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
