import { CheckCircle2, Award, TrendingUp } from "lucide-react";

export default function PhilosophyVision() {
  return (
    <section className="relative py-24 bg-charcoal text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--primary-red)_0,transparent_70%)]"></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          
          <div className="space-y-8 flex flex-col justify-center reveal">
            <div className="space-y-3">
              <h2 className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm flex items-center gap-3">
                <span className="h-px w-8 bg-brand-red inline-block"></span>
                Our Philosophy
              </h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                WE GO BEYOND JUST MANUFACTURING MACHINES
              </h3>
              <p className="text-gray-400 text-lg max-w-md">
                Driven by engineering excellence and innovation, our solutions are built to deliver consistent performance and long-term value.
              </p>
            </div>

            <ul className="space-y-5">
              {[
                "Supporting our customers’ production success",
                "Building long-term partnerships",
                "Ensuring operational reliability and efficiency"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-white/5 group-hover:bg-brand-red transition-all duration-500 flex items-center justify-center border border-white/10">
                    <CheckCircle2 size={18} className="text-white" />
                  </div>
                  <span className="font-heading uppercase tracking-wider text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white text-charcoal p-10 md:p-16 relative flex flex-col justify-center reveal">
            <div className="absolute top-0 right-0 bg-brand-red text-white px-4 py-1 font-heading font-bold tracking-widest text-xs uppercase">
              The Vision
            </div>
            <Award className="w-16 h-16 text-brand-red/20 absolute top-8 right-8" />
            <h3 className="text-2xl font-heading font-bold uppercase text-brand-red mb-6 flex items-center gap-2">
              <TrendingUp size={24} />
              Regional Leader
            </h3>
            <blockquote className="text-2xl md:text-3xl font-heading font-bold italic leading-snug text-charcoal border-l-4 border-brand-red pl-6">
              &quot;To become a leading regional manufacturer of packaging machines, delivering reliable, high-performance solutions that compete globally while offering competitive value.&quot;
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
