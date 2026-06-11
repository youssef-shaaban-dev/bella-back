import { Award } from "lucide-react";

export default function CertificationsBanner() {
  return (
    <section className="bg-gray-50 border-t border-gray-200 text-charcoal py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
              <Award size={32} className="text-brand-red" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold uppercase tracking-widest leading-none">International Standards Compliance</h3>
              <p className="text-gray-500 mt-1 text-sm uppercase tracking-wide">Ensuring consistent quality for local and international markets.</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-white text-charcoal px-8 py-4 font-heading font-bold text-xl uppercase tracking-widest border border-gray-200 shadow-sm rounded-sm cursor-default">
              ISO <span className="text-brand-red">9001</span>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}
