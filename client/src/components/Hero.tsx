import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Landmark, Users } from "lucide-react";
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),rgba(0,0,0,0.45)_70%,rgba(0,0,0,0.72))]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-24">
        <p className="text-primary font-medium text-xs md:text-sm tracking-[0.35em] uppercase mb-6">
          Independent Hospitality & Board Advisory
        </p>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-white leading-tight mb-6">
          Sanjay Sethi
          <span className="block text-primary mt-2">Advisory</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-4xl mx-auto mb-6 leading-relaxed">
          Advisory anchored in lived experience across the business of operating and investing in hotels.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {credentials.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-md border border-white/15 bg-white/8 backdrop-blur-sm text-sm text-white/85"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {focusPoints.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/8 border border-white/10 backdrop-blur-sm text-sm text-white/85"
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
            className="min-w-[220px] border-white/30 text-white bg-white/10 backdrop-blur-sm"
            data-testid="button-hero-learn-more"
          >
            View Executive Profile
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to content"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
