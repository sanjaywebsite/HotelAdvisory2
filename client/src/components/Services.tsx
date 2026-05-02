import { Card } from "@/components/ui/card";
import { TrendingUp, Settings, Compass, Users, CheckCircle } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "For capital decisions requiring both operator and owner judgment.",
    points: [
      "Sector outlook and demand mapping",
      "Underwriting support and deal framing",
      "Operator selection and negotiation strategy",
      "Risk review across assumptions and capital structure",
    ],
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    description: "For owners seeking stronger asset performance and repositioning.",
    points: [
      "Performance uplift and KPI review",
      "Brand architecture and asset strategy",
      "Efficiency, service, and operating model review",
      "Asset repositioning for premium outcomes",
    ],
  },
  {
    icon: Compass,
    title: "Strategic Foresight",
    description: "For long-range decisions in a rapidly shifting hospitality market.",
    points: [
      "India hospitality landscape mapping",
      "ESG and future-demand signals",
      "Competitive and micro-market analysis",
      "Scenario planning for growth and resilience",
    ],
  },
  {
    icon: Users,
    title: "Owner & Board Advisory",
    description: "For boards and family offices that need clarity, not noise.",
    points: [
      "Board-level strategic counsel",
      "Investor, developer, and partner alignment",
      "Capital allocation and governance perspective",
      "Confidential second opinion on key decisions",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-xs tracking-[0.32em] uppercase mb-4">
            What I Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-5">
            Senior Advisory Across the Hotel Value Chain
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">
            A concise, high-trust offering for institutions, owners, developers, and boards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="p-8 lg:p-10 hover-elevate"
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
