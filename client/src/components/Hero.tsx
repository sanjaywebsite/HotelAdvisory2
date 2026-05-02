import { Button } from "@/components/ui/button";
import { ChevronDown, Landmark, Shield, Users, Building2 } from "lucide-react";
import heroImage from "@assets/generated_images/luxury_hotel_lobby_interior.png";

const credentials = [
  "Former CEO & MD, Chalet Hotels",
  "Founder, Keys Hotels & Resorts",
  "14 years with Taj Group (IHCL)",
];

const focusPoints = [
  { icon: Landmark, label: "Hospitality Investment" },
  { icon: Shield, label: "Board Advisory" },
  { icon: Users, label: "Owner Strategy" },
  { icon: Building2, label: "Operator Strategy" },
];

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 text-center pt-28 lg:pt-32 pb-20">
        <p className="text-primary font-semibold text-xs md:text-sm tracking-[0.38em] uppercase mb-6 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
          Independent Hospitality &amp; Board Advisory
        </p>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-none mb-4 drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)]">
          Dr. Sanjay Sethi
        </h1>
        <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-primary mb-8 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Advisory
        </p>

        <p className="text-base md:text-lg lg:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
          37 years of lived experience across hospitality ownership, operations, and governance — brought to bear on decisions that matter.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {credentials.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-md border border-white/25 bg-black/45 text-sm text-white backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {focusPoints.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/15 bg-black/30 text-sm text-white/90 backdrop-blur-sm"
            >
              <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
              {item.label}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="min-w-[220px]"
            data-testid="button-hero-consultation"
          >
            Request Advisory Conversation
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToAbout}
            className="min-w-[220px] border-white/30 text-white bg-black/25 backdrop-blur-sm"
            data-testid="button-hero-learn-more"
          >
            View Executive Profile
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to content"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
