import { TrendingUp, Building, Globe, BarChart3 } from "lucide-react";

const drivers = [
  {
    icon: TrendingUp,
    title: "Premiumisation Wave",
    description: "Rising demand for luxury and upper-upscale properties across key markets",
  },
  {
    icon: Building,
    title: "Supply Constraints",
    description: "Limited quality inventory creating opportunities for well-positioned assets",
  },
  {
    icon: Globe,
    title: "Global Investor Interest",
    description: "Increasing capital flows from international funds and institutional investors",
  },
  {
    icon: BarChart3,
    title: "Structural Demand",
    description: "Domestic consumption and travel propelling multi-year growth trajectory",
  },
];

export default function WhyNow() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Why It Matters
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              India's Hospitality Opportunity
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              India's hospitality sector is entering a multi-year expansion cycle. Operators, 
              owners, and investors increasingly need experienced, grounded, decision-grade guidance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {drivers.map((driver) => (
              <div
                key={driver.title}
                className="flex gap-4 p-6 rounded-md bg-card border border-card-border"
                data-testid={`driver-${driver.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="p-2.5 h-fit rounded-md bg-primary/10">
                  <driver.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">{driver.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {driver.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
