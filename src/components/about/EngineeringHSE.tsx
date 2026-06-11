import { Settings, ShieldCheck, CheckCircle2, Leaf, Users } from "lucide-react";

const engineeringItems = [
  "AISI 304 / 316L stainless steel",
  "Optional Titanium components",
  "Advanced dosing systems",
  "High filling accuracy"
];

const hseItems = [
  { title: "Safety First", icon: ShieldCheck, text: "Machines are designed with advanced safety features and ergonomic designs to ensure maximum operator protection." },
  { title: "Operational Safety", icon: CheckCircle2, text: "Compliance with industrial safety standards." },
  { title: "Environmental Responsibility", icon: Leaf, text: "Energy-efficient systems and reduced material waste." },
  { title: "Employee Wellbeing", icon: Users, text: "Safe working environment supported by training and protocols." }
];

export default function EngineeringHSE() {
  return (
    <section className="relative bg-charcoal text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          {/* Engineering & Quality */}
          <div className="space-y-8 pb-16 lg:pb-0 lg:pr-12 reveal">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-white/5 rounded-sm border border-white/10 text-brand-red">
                <Settings size={32} />
              </div>
              <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">Engineering & Quality</h2>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Each machine is engineered with obsessive attention to detail to ensure reliable lifespan and highest hygiene compliance.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {engineeringItems.map((spec, i) => (
                <div key={i} className="bg-white/5 p-4 border-l-2 border-brand-red flex items-center">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-white">{spec}</span>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-8 pt-4">
              <div>
                <span className="text-brand-red font-heading font-bold text-lg uppercase tracking-widest">Focus</span>
                <ul className="mt-2 space-y-1 text-sm font-body font-bold uppercase tracking-widest text-white/60">
                  <li>• Precision</li>
                  <li>• Durability</li>
                  <li>• Performance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* HSE */}
          <div className="space-y-8 pt-16 lg:pt-0 lg:pl-12 reveal">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-white/5 rounded-sm border border-white/10 text-green-500">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">Health, Safety &amp; Environment</h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              We are committed to maintaining the highest standards of safety and sustainability.
            </p>

            <ul className="space-y-4">
              {hseItems.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 group">
                  <item.icon size={18} className="text-brand-red mt-1 group-hover:scale-125 transition-transform" />
                  <div>
                    <span className="block text-sm font-heading font-bold uppercase text-white">{item.title}</span>
                    <span className="text-xs text-gray-400">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-white/5 border-l-2 border-green-500">
              <span className="block text-sm font-heading font-bold uppercase text-white mb-1">Continuous Improvement</span>
              <span className="text-xs text-gray-400 leading-relaxed">HSE is a core element of our culture, supported by continuous evaluation and optimization of our processes to ensure compliance, safety, and environmental responsibility.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
