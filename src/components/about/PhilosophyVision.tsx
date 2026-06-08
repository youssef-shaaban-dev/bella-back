import { Sparkles, Check } from "lucide-react";

const values = [
  {
    title: "Teamwork",
    desc: "We build lasting partnerships by working closely with our customers and each other. We believe the best results come from collaboration — aligning our engineering expertise with our customers' production goals, and working as one team to deliver solutions that create shared success."
  },
  {
    title: "Precision",
    desc: "We engineer accuracy into everything we build. From dosing tolerances to sealing integrity, every mechanical and control decision we make is driven by the precision our customers' production lines demand."
  },
  {
    title: "Commitment",
    desc: "We stand behind every machine we deliver, for its entire operational life. Our relationship with customers does not end at installation. We provide ongoing technical support, spare parts, and service as we measure our success by the long-term performance of our machines in the field."
  },
  {
    title: "Agility",
    desc: "We respond with speed and purpose. When a production line stops, every hour counts. We operate with a sense of urgency — moving quickly to diagnose, support, and resolve to minimize production downtime."
  }
];

export default function PhilosophyVision() {
  return (
    <section className="relative py-24 bg-charcoal text-white overflow-hidden">
      {/* Absolute Decorative Graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--primary-red)_0,transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column: Our Mission */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-center reveal">
            <div className="space-y-4">
              <h2 className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm flex items-center gap-3">
                <span className="h-px w-8 bg-brand-red inline-block"></span>
                Our Mission
              </h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold leading-tight uppercase">
                BUILT AROUND YOUR <span className="text-brand-red">PRODUCTION SUCCESS</span>
              </h3>
              <p className="text-gray-300 font-body text-base md:text-lg leading-relaxed pt-2">
                Our mission is to deliver high-performance packaging machinery that combines engineering precision, operational reliability, and long-term value. 
              </p>
              <p className="text-gray-400 font-body text-sm leading-relaxed">
                We are committed to building lasting partnerships with our customers — providing solutions that grow with their production demands and perform consistently under the most demanding industrial conditions.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-heading font-bold uppercase tracking-widest text-brand-red">
                Our Engineering Focus
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-3">
                {[
                  { name: "Precision", desc: "Engineered accuracy in every decision" },
                  { name: "Durability", desc: "Heavy-duty build for long life" },
                  { name: "Consistent Performance", desc: "Reliability run after run" }
                ].map((focus, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center">
                      <Check size={12} className="text-brand-red" />
                    </div>
                    <div>
                      <span className="text-sm text-gray-200 font-body font-semibold block leading-none">{focus.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
              <h4 className="font-heading font-bold uppercase text-brand-red text-sm tracking-widest mb-2 flex items-center gap-2">
                <Sparkles size={16} /> Partnerships Built to Last
              </h4>
              <p className="text-xs text-gray-400 font-body leading-relaxed">
                We design and build our machinery to withstand continuous, heavy-duty industrial operation, ensuring your production remains fully optimized.
              </p>
            </div>
          </div>

          {/* Right Column: Our Values */}
          <div className="lg:col-span-7 flex flex-col justify-center reveal">
            <div className="space-y-3 mb-10">
              <h2 className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm flex items-center gap-3">
                <span className="h-px w-8 bg-brand-red inline-block"></span>
                Our Values
              </h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase">
                WHAT DRIVES EVERYTHING WE BUILD
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="p-6 bg-white/5 border border-white/5 hover:border-white/10 transition-colors rounded-sm flex flex-col h-full">
                  <span className="text-brand-red font-heading font-bold text-lg block mb-1">
                    0{idx + 1}
                  </span>
                  <h4 className="font-heading font-bold text-white uppercase text-base tracking-wide mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-body leading-relaxed flex-grow">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
