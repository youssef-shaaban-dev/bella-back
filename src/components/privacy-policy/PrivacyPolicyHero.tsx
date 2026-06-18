export default function PrivacyPolicyHero() {
  return (
    <section className="relative h-inner-hero min-h-inner-hero bg-charcoal text-white text-center overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-6 relative z-10 pt-32 md:pt-40">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <span className="h-px w-8 bg-brand-red"></span>
          <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase font-heading">Legal Information</span>
          <span className="h-px w-8 bg-brand-red"></span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold font-heading uppercase tracking-tighter mb-8 max-w-5xl mx-auto leading-[0.95]">
          Privacy <span className="text-brand-red">Policy</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
          Last Updated: June 17, 2026
        </p>
      </div>
    </section>
  );
}
