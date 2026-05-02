import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Landmark, Users, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/luxury_hotel_lobby_interior.png";

const credentials = [
  "Former CEO & MD, Chalet Hotels",
  "Founder, Keys Hotels",
  "14 years with Taj Group",
];

const focusPoints = [
  { icon: Landmark, label: "Hospitality Investment" },
  { icon: Shield, label: "Board Advisory" },
  { icon: Users, label: "Owner Strategy" },
  { icon: Shield, label: "Operator Strategy" },
];

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/92 via-black/72 to-black/88" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(0,0,0,0)_40%),radial-gradient(circle_at_center,rgba(255,193,7,0.16),rgba(0,0,0,0)_55%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-28 lg:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white/80 backdrop-blur-md mb-6">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Independent Hospitality & Board Advisory
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-white leading-tight mb-6">
          Dr. Sanjay Sethi
          <span className="block text-primary mt-2">Advisory</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-4xl mx-auto mb-8 leading-relaxed">
          Advisory anchored in lived experience across the business of operating and investing in hotels.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {credentials.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-md border border-white/15 bg-white/10 text-sm text-white/90 backdrop-blur-md"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {focusPoints.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/15 bg-black/20 text-sm text-white/90 backdrop-blur-md"
            >
              <item.icon className="h-4 w-4 text-primary" />
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
            className="min-w-[220px] border-white/25 text-white bg-white/10 backdrop-blur-md"
            data-testid="button-hero-learn-more"
          >
            View Executive Profile
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToContact}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to content"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
