import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="hero-section relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden bg-charcoal">
      <div className="parallax-bg absolute inset-0 z-0">
        <Image
          src="/ about us/ flags.jpeg"
          alt="Bella Pack Manufacturing Facility"
          fill
          className="object-cover brightness-[0.35] saturate-[0.8]"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/30 z-0"></div>
      
      <div className="container relative z-10 px-6 pt-32 md:pt-40">
        <div className="inline-flex items-center space-x-3 mb-6 border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full overflow-hidden opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
          <span className="text-xs font-heading font-bold tracking-[0.3em] uppercase text-white/90">Established 2000</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter leading-[0.9] mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] uppercase">
          ABOUT <br />
          <span className="text-brand-red drop-shadow-[0_2px_20px_rgba(230,30,46,0.4)]">BELLA PACK</span>
        </h1>
        
        <p className="text-xl md:text-3xl font-heading font-bold uppercase tracking-widest mb-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] text-brand-red">
          Advanced Packaging Machinery
        </p>

        <div className="h-px w-24 bg-brand-red mx-auto mt-8 mb-4 scale-x-0 animate-[scaleX_1s_ease-out_0.6s_forwards]"></div>
        <p className="text-xl md:text-2xl font-heading font-bold italic tracking-wider opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
          &quot;Where Precision Meets Production&quot;
        </p>
      </div>
    </section>
  );
}
