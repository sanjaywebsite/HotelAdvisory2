import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/luxury_hotel_lobby_interior.png";

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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-20">
        <p className="text-primary font-medium text-sm lg:text-base tracking-widest uppercase mb-6">
          Senior Hospitality Advisory
        </p>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Sanjay Sethi
          <span className="block text-primary mt-2">Advisory</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-3xl mx-auto mb-4 leading-relaxed">
          Advisory anchored in lived experience across the business of operating and investing in hotels.
        </p>

        <p className="text-base md:text-lg text-white/70 mb-10">
          37+ years leading India's premier hospitality brands
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="min-w-[200px]"
            data-testid="button-hero-consultation"
          >
            Schedule a Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToAbout}
            className="min-w-[200px] border-white/30 text-white bg-white/10 backdrop-blur-sm"
            data-testid="button-hero-learn-more"
          >
            Learn More
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
