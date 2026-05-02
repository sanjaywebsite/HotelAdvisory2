import { ArrowDown } from "lucide-react";
import heroImage from "@assets/generated_images/luxury_hotel_lobby_interior.png";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col overflow-hidden bg-black"
    >
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Subtle bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

      {/* Top descriptor — right-aligned */}
      <div className="relative z-10 flex items-start justify-end px-8 lg:px-14 pt-28 lg:pt-32 flex-shrink-0">
        <div className="text-right">
          <p className="text-white/70 text-sm lg:text-base font-light leading-snug">
            Hospitality Advisor,
          </p>
          <p className="text-white/70 text-sm lg:text-base font-light leading-snug">
            Board Director &amp; Investor
          </p>
        </div>
      </div>

      {/* Massive display name — fills the hero */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-10 lg:pb-14 select-none">
        {/* "Dr." small prefix */}
        <div className="px-6 lg:px-10 mb-[-0.15em]">
          <span className="text-white/50 text-xl lg:text-3xl font-light tracking-[0.4em] uppercase">
            Dr.
          </span>
        </div>

        {/* SANJAY — first name, left-anchored */}
        <div className="px-4 lg:px-6 leading-none">
          <h1
            className="font-sans font-black text-white tracking-tighter leading-none"
            style={{ fontSize: "clamp(3.5rem, 14vw, 13rem)" }}
          >
            SANJAY
          </h1>
        </div>

        {/* SETHI — second name row, slightly offset right + gold accent on last letter */}
        <div className="flex items-baseline justify-between px-4 lg:px-6 leading-none mt-[-0.05em]">
          <h1
            className="font-sans font-black text-white tracking-tighter leading-none"
            style={{ fontSize: "clamp(3.5rem, 14vw, 13rem)" }}
          >
            SETHI
            <span className="text-primary">.</span>
          </h1>

          {/* Bottom-right: credential + CTA */}
          <div className="flex flex-col items-end gap-3 pb-2">
            <p className="text-white/45 text-xs tracking-widest uppercase hidden lg:block">
              37 Years · India Hospitality
            </p>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white border border-white/25 hover:border-white/60 rounded-full px-5 py-2.5 transition-all backdrop-blur-sm"
              data-testid="button-hero-consultation"
            >
              Request a Conversation
            </button>
            <button
              onClick={scrollToAbout}
              className="text-white/40 hover:text-white/70 transition-colors"
              aria-label="Scroll down"
              data-testid="button-scroll-down"
            >
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm flex-shrink-0">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-4">
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {[
              { value: "37+", label: "Years in Hospitality" },
              { value: "3,000+", label: "Hotel Keys Led" },
              { value: "IPO", label: "Chalet Hotels, 2019" },
              { value: "Ph.D.", label: "Honoris Causa, 2024" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2.5">
                <span className="font-serif text-lg font-bold text-primary">{stat.value}</span>
                <span className="text-xs text-white/40 tracking-wide uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
