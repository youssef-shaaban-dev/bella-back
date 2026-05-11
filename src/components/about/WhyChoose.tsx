import { Award, ShieldCheck, Settings, Zap, Droplets, CheckCircle2 } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "25+ Years Experience",
    desc: "Decades of specialized expertise exclusively in advanced packaging machinery.",
  },
  {
    icon: ShieldCheck,
    title: "High-Grade Materials",
    desc: "Built with Stainless Steel 304 & 316L for ultimate durability and hygienic operation.",
  },
  {
    icon: Settings,
    title: "Siemens PLC Control",
    desc: "Equipped with industry-leading automation systems for precise cycle management.",
  },
  {
    icon: Zap,
    title: "High-Speed Operations",
    desc: "Designed for ultra-fast production cycles with incredibly easy tool-less maintenance.",
  },
  {
    icon: Droplets,
    title: "Custom Formats",
    desc: "Bespoke configurations tailored exactly to your product type (liquid, powder, granule).",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Support",
    desc: "We deliver complete turn-key production lines backed by lifelong technical support.",
  }
];

export default function WhyChoose() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <h2 className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6 uppercase">
            The Advantage of <span className="text-brand-red">Precision</span>
          </h3>
          <p className="text-gray-600 text-lg">
            We combine engineering expertise, industrial reliability, and practical application knowledge to deliver machines that perform consistently under demanding production conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 stats-grid">
          {items.map((card, index) => (
            <div key={index} className="stat-card bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full opacity-0">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-brand-red transition-colors duration-500">
                <card.icon size={30} className="text-brand-red group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-xl font-heading font-bold text-charcoal uppercase mb-4 group-hover:text-brand-red transition-colors duration-300">
                {card.title}
              </h4>
              <p className="text-gray-500 leading-relaxed flex-grow text-sm font-body">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
