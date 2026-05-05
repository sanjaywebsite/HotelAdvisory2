import { ArrowDown } from "lucide-react";
import portraitImage from "@assets/image_1777724313921.jpeg";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAdvisory = () => {
    document.querySelector("#advisory")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col overflow-hidden bg-[#111]"
    >
      {/* Portrait — full bleed, face at top */}
      <img
        src={portraitImage}
        alt="Dr. Sanjay Sethi — Senior Hospitality Advisor, Board Director and Investor, Mumbai, India"
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{ objectPosition: "50% 15%" }}
      />

      {/* Gradient: transparent at top (face), dark at bottom (text area) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
      {/* Left edge darkening for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      {/* Top bar fade for nav */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />

      {/* Fixed nav spacer */}
      <div className="flex-shrink-0 h-14 lg:h-16" />

      {/* Upper info row */}
      <div className="relative z-10 flex items-start justify-between px-7 lg:px-12 pt-8 lg:pt-10 flex-shrink-0">
        <p className="text-white/40 text-xs tracking-[0.35em] uppercase font-medium">
          Mumbai · India
        </p>
        <div className="text-right max-w-[260px] lg:max-w-sm">
          <p className="text-white/60 text-sm font-light leading-snug">Hospitality Advisor</p>
          <p className="text-white/60 text-sm font-light leading-snug">Board Director &amp; Investor</p>
          <p className="text-white/85 text-[11px] md:text-[13px] lg:text-sm font-normal leading-snug md:leading-relaxed mt-2 md:mt-3">
            Advising boards, investors and developers navigating India&rsquo;s hospitality and real estate landscape.
          </p>
        </div>
      </div>

      {/* Spacer — pushes name to bottom */}
      <div className="flex-1" />

      {/* Display name block — bottom of hero, text over suit */}
      <div className="relative z-10 px-4 lg:px-8 pb-1">

        {/* DR. prefix */}
        <p className="text-primary text-2xl lg:text-4xl font-bold tracking-[0.18em] uppercase mb-1 px-2 lg:px-3">
          Dr.
        </p>

        {/* SANJAY — white, full width */}
        <div
          className="font-sans font-black text-white leading-[0.88] tracking-tighter w-full px-1 lg:px-2"
          style={{ fontSize: "clamp(4.5rem, 18vw, 17rem)" }}
        >
          SANJAY
        </div>

        {/* SETHI + CTA — stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between px-1 lg:px-2 gap-5 lg:gap-0">
          <div
            className="font-sans font-black text-primary leading-[0.88] tracking-tighter"
            style={{ fontSize: "clamp(4.5rem, 18vw, 17rem)" }}
          >
            SETHI
          </div>

          {/* Right: tagline + CTA */}
          <div className="flex flex-col items-start lg:items-end gap-3 pb-3 lg:pb-5 flex-shrink-0 lg:ml-4 px-2 lg:px-0">
            <p className="text-white text-[12px] md:text-[13px] lg:text-base font-normal tracking-wide text-left lg:text-right max-w-full md:max-w-xs leading-snug md:leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
              Senior hospitality advisory for investors, owners, developers and boards.
            </p>
            <div className="flex flex-wrap items-center gap-2 lg:gap-3 w-full lg:w-auto">
              <button
                onClick={scrollToAdvisory}
                className="flex-1 lg:flex-none text-xs lg:text-sm font-semibold text-white/85 hover:text-white border border-white/25 hover:border-white/55 rounded-none px-4 lg:px-6 py-2.5 lg:py-3 transition-all tracking-widest uppercase whitespace-nowrap backdrop-blur-sm"
                data-testid="button-hero-advisory"
              >
                Advisory Areas
              </button>
              <button
                onClick={scrollToContact}
                className="flex-1 lg:flex-none text-xs lg:text-sm font-semibold text-white border border-white/35 hover:border-white rounded-none px-3 lg:px-7 py-2.5 lg:py-3 transition-all tracking-widest uppercase whitespace-nowrap"
                data-testid="button-hero-consultation"
              >
                Request a Conversation
              </button>
            </div>
            <button
              onClick={scrollToAbout}
              className="text-white/35 hover:text-white/70 transition-colors hidden lg:block"
              aria-label="Scroll down"
              data-testid="button-scroll-down"
            >
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm flex-shrink-0">
        <div className="w-full px-7 lg:px-12 py-3.5 lg:py-4">
          <div className="flex flex-wrap gap-x-8 lg:gap-x-12 gap-y-2">
            {[
              { value: "37+", label: "Years in Hospitality" },
              { value: "3,000+", label: "Hotel Keys Led" },
              { value: "IPO", label: "Chalet Hotels, 2019" },
              { value: "Ph.D.", label: "Honoris Causa, 2024" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="font-serif text-base lg:text-lg font-bold text-primary">{stat.value}</span>
                <span className="text-[10px] lg:text-[11px] text-white/35 tracking-widest uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
