import { Award, Settings, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "25+ Years Experience",
    desc: "Decades of specialized expertise exclusively in advanced packaging machinery.",
  },
  {
    icon: Settings,
    title: "Intelligent Control Systems",
    desc: "Industry-leading automation architecture designed for accuracy, repeatability, and ease of operation.",
  },
  {
    icon: Zap,
    title: "High-Speed Production",
    desc: "Designed for continuous high-speed operation with minimal downtime.",
  },
  {
    icon: ShieldCheck,
    title: "Global Standards Compliance",
    desc: "Every machine is designed and manufactured in compliance with international quality and safety standards.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Support",
    desc: "From installation to spare parts and training — we support every machine for its full operational life.",
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
          <p className="text-gray-600 text-base md:text-lg font-body leading-relaxed">
            We combine engineering expertise, industrial reliability, and practical application knowledge to deliver machines that perform consistently under demanding production conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stats-grid justify-center">
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
