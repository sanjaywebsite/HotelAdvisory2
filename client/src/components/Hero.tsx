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
      className="relative w-full h-screen flex flex-col overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background hotel image — very dark, central focus */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Directional vignette: darker at edges, slightly lighter centre */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_55%,transparent_0%,rgba(0,0,0,0.55)_100%)]" />

      {/* Top spacer for fixed nav */}
      <div className="flex-shrink-0 h-14 lg:h-16" />

      {/* Upper area: descriptor right, small overline left */}
      <div className="relative z-10 flex items-start justify-between px-7 lg:px-14 pt-10 lg:pt-14 flex-shrink-0">
        <p className="text-white/30 text-xs tracking-[0.35em] uppercase font-medium">
          Mumbai · India
        </p>
        <div className="text-right">
          <p className="text-white/55 text-sm lg:text-base font-light leading-snug">
            Hospitality Advisor
          </p>
          <p className="text-white/55 text-sm lg:text-base font-light leading-snug">
            Board Director &amp; Investor
          </p>
        </div>
      </div>

      {/* MAIN: Centered stacked display name — fills the hero vertically */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">

        {/* "DR." small prefix */}
        <p className="text-primary text-sm lg:text-base font-semibold tracking-[0.5em] uppercase mb-3 lg:mb-4">
          Dr.
        </p>

        {/* SANJAY — line 1 */}
        <div
          className="font-sans font-black text-white leading-none tracking-tighter w-full"
          style={{ fontSize: "clamp(4rem, 16vw, 15rem)" }}
        >
          SANJAY
        </div>

        {/* SETHI — line 2 in gold/primary */}
        <div
          className="font-sans font-black text-primary leading-none tracking-tighter w-full"
          style={{ fontSize: "clamp(4rem, 16vw, 15rem)" }}
        >
          SETHI
        </div>

        {/* Tagline below name */}
        <p className="text-white/45 text-xs lg:text-sm tracking-[0.28em] uppercase mt-6 lg:mt-8 max-w-lg">
          37 Years Building &amp; Leading India's Finest Hospitality Assets
        </p>

        {/* CTA */}
        <div className="flex items-center gap-6 mt-8 lg:mt-10">
          <button
            onClick={scrollToContact}
            className="text-sm font-semibold text-white border border-white/30 hover:border-white hover:text-white rounded-none px-7 py-3 transition-all tracking-wide uppercase"
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
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm flex-shrink-0">
        <div className="max-w-7xl mx-auto px-7 lg:px-14 py-4 lg:py-5">
          <div className="flex flex-wrap gap-x-10 gap-y-2 justify-center lg:justify-start">
            {[
              { value: "37+", label: "Years in Hospitality" },
              { value: "3,000+", label: "Hotel Keys Led" },
              { value: "IPO", label: "Chalet Hotels, 2019" },
              { value: "Ph.D.", label: "Honoris Causa, 2024" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2.5">
                <span className="font-serif text-base lg:text-lg font-bold text-primary">{stat.value}</span>
                <span className="text-[11px] text-white/35 tracking-widest uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
