import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroImage from "@assets/generated_images/luxury_hotel_lobby_interior.png";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient: strong on left, fades to translucent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/30" />
      {/* Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Main content — left-aligned, vertically centered */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 pt-24 pb-16">
          <div className="max-w-2xl">

            {/* Overline */}
            <p className="text-primary text-xs font-semibold tracking-[0.35em] uppercase mb-10">
              Independent Advisory
            </p>

            {/* Name */}
            <h1 className="font-serif font-bold text-white leading-[0.92] mb-0">
              <span className="block text-5xl md:text-7xl lg:text-[5.5rem]">Dr. Sanjay</span>
              <span className="block text-5xl md:text-7xl lg:text-[5.5rem]">Sethi</span>
            </h1>

            {/* Gold rule */}
            <div className="h-px w-16 bg-primary mt-8 mb-8" />

            {/* Tagline */}
            <p className="text-white/80 text-lg lg:text-xl font-light leading-relaxed max-w-xl mb-10">
              37 years building, operating, and governing India's finest hospitality assets — now available as a senior advisory voice for capital decisions that matter.
            </p>

            {/* Credentials — plain text, no chips */}
            <div className="flex flex-wrap gap-x-6 gap-y-1 mb-12">
              {[
                "Former CEO & MD, Chalet Hotels",
                "Founder, Keys Hotels & Resorts",
                "14 years at Taj Group (IHCL)",
              ].map((c, i) => (
                <span key={c} className="flex items-center gap-2 text-sm text-white/55">
                  {i !== 0 && <span className="hidden sm:inline h-3 w-px bg-white/25" />}
                  {c}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="gap-2"
                data-testid="button-hero-consultation"
              >
                Request a Conversation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <button
                onClick={scrollToAbout}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors px-2"
                data-testid="button-hero-learn-more"
              >
                View Profile
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-5">
          <div className="flex flex-wrap gap-x-12 gap-y-3">
            {[
              { value: "37+", label: "Years in Hospitality" },
              { value: "3,000+", label: "Hotel Keys Led" },
              { value: "3", label: "Major Brands Built" },
              { value: "IPO", label: "Chalet Hotels, 2019" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="font-serif text-xl font-bold text-primary">{stat.value}</span>
                <span className="text-xs text-white/45 tracking-wide uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
