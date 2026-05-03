import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Hospitality Investment Advisory",
    description: "For capital decisions requiring both operator and owner judgment. M&A perspective, sector analysis, underwriting support, and review of capital structure, risk and operator/brand assumptions.",
    tags: ["M&A Perspective", "Sector Analysis", "Underwriting Support", "Capital Structure"],
  },
  {
    number: "02",
    title: "Owner & Developer Advisory",
    description: "For owners and developers seeking stronger asset performance. Asset strategy, operator selection, brand positioning, KPI review, and repositioning for premium outcomes.",
    tags: ["Asset Strategy", "Operator Selection", "Brand Positioning", "Repositioning"],
  },
  {
    number: "03",
    title: "Board & Governance Advisory",
    description: "For boards and family offices that need clarity, not noise. Board-level counsel, independent judgment, governance perspective, capital allocation and stakeholder alignment.",
    tags: ["Board Counsel", "Governance", "Capital Allocation", "Stakeholder Alignment"],
  },
  {
    number: "04",
    title: "Strategic Foresight",
    description: "For long-range decisions in a rapidly shifting market. India hospitality cycle mapping, premiumisation trends, micro-market analysis, ESG signals and scenario planning.",
    tags: ["Cycle Mapping", "Premiumisation", "Micro-Market Analysis", "Scenario Planning"],
  },
  {
    number: "05",
    title: "Selective Engagements",
    description: "Confidential, senior counsel delivered through a small number of mandates each year. Retainer plus deliverables, outcome-focused and limited by design.",
    tags: ["Retainer + Deliverables", "Limited Availability", "Confidential", "Outcome-Focused"],
  },
];

export default function Services() {
  return (
    <section id="advisory" className="bg-background scroll-mt-16">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-20 lg:pt-28 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border pb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-4">
              Advisory Areas
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-snug max-w-xl">
              Senior Advisory Across the Hotel Value Chain
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xs lg:text-right">
            A concise, high-trust offering for institutional investors, owners, developers, boards and family offices.
          </p>
        </div>
      </div>

      {/* Services list — editorial rows */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pb-20 lg:pb-28">
        <div className="divide-y divide-border">
          {services.map((service) => (
            <div
              key={service.title}
              className="group py-8 lg:py-10 grid lg:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-12 hover-elevate"
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Number */}
              <span className="font-serif text-4xl font-bold text-border group-hover:text-primary/30 transition-colors leading-none pt-1">
                {service.number}
              </span>

              {/* Title + desc */}
              <div>
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags + arrow */}
              <div className="flex flex-col justify-between">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground border border-border px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="h-5 w-5 text-border group-hover:text-primary transition-colors mt-4 hidden lg:block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
