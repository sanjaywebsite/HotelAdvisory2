import { TrendingUp, Building, Globe, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const drivers = [
  {
    icon: TrendingUp,
    title: "Premiumisation Wave",
    description: "Rising demand for luxury and upper-upscale properties across key Indian markets is creating significant capital and advisory opportunity.",
  },
  {
    icon: Building,
    title: "Supply Constraints",
    description: "Limited quality inventory creates sustained pricing power and strong risk-adjusted returns for well-positioned assets.",
  },
  {
    icon: Globe,
    title: "Global Investor Interest",
    description: "Increasing capital flows from international PE funds, family offices, and institutional investors into India hospitality.",
  },
  {
    icon: BarChart3,
    title: "Structural Demand Growth",
    description: "Domestic consumption, infrastructure expansion, and travel propelling a multi-year growth trajectory unlike any previous cycle.",
  },
];

export default function WhyNow() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-primary font-semibold text-xs tracking-[0.32em] uppercase mb-4">
              Why It Matters
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-snug">
              India's Hospitality Opportunity
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8">
              India's hospitality sector is entering a multi-year expansion cycle. Operators, owners, and investors increasingly need experienced, grounded, decision-grade guidance — not generalist consulting.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10">
              This is the moment for advisory that has lived through every cycle of Indian hospitality, and can distinguish signal from noise.
            </p>
            <Button onClick={scrollToContact} data-testid="button-whynow-cta">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {drivers.map((driver) => (
              <div
                key={driver.title}
                className="p-6 rounded-md bg-card border border-card-border"
                data-testid={`driver-${driver.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="p-2.5 rounded-md bg-primary/10 w-fit mb-4">
                  <driver.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{driver.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {driver.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
