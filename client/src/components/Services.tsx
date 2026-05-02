import { Card } from "@/components/ui/card";
import { TrendingUp, Settings, Compass, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "For capital decisions that require the experience of operator and owner judgment.",
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
    description: "For owners seeking stronger asset performance.",
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
    description: "For long-range decisions in a changing market.",
    points: [
      "India hospitality mapping",
      "ESG and future-demand signals",
      "Competitive and micro-market analysis",
      "Scenario planning for growth and resilience",
    ],
  },
  {
    icon: Users,
    title: "Owner & Board Advisory",
    description: "For boards that need clarity, not noise.",
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
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            What I Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Senior Advisory Across the Hotel Value Chain
          </h2>
          <p className="text-lg text-muted-foreground">
            A concise offering for institutions, owners, developers, and boards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="p-8 lg:p-10 hover-elevate transition-all duration-300 shadow-sm"
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-md bg-primary/10 border border-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl lg:text-2xl font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mt-1">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
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
