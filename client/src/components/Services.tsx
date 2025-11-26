import { Card } from "@/components/ui/card";
import { TrendingUp, Settings, Compass, Users } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Strategic guidance for hospitality investments",
    points: [
      "Sector outlook and market intelligence",
      "Underwriting support and due diligence",
      "Deal frameworks and structuring",
      "Operator selection and negotiations",
    ],
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    description: "Driving performance and brand value",
    points: [
      "Performance uplift strategies",
      "Brand architecture and positioning",
      "Asset strategy optimization",
      "Operational benchmarking",
    ],
  },
  {
    icon: Compass,
    title: "Strategic Foresight",
    description: "Long-term market perspective",
    points: [
      "India hospitality market mapping",
      "ESG integration and sustainability",
      "Long-term demand signal analysis",
      "Competitive landscape assessment",
    ],
  },
  {
    icon: Users,
    title: "Owner & Board Advisory",
    description: "Strategic clarity for decision-makers",
    points: [
      "Board-level strategic counsel",
      "Investor communication support",
      "Developer partnership guidance",
      "Fund strategy alignment",
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
            Comprehensive Advisory Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Decision-grade guidance across the full spectrum of hospitality investment and operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="p-8 lg:p-10 hover-elevate transition-all duration-300"
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-md bg-primary/10">
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
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
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
