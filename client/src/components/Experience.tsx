const timeline = [
  {
    period: "1991 – 2006",
    role: "Senior Leadership",
    company: "Taj Group of Hotels (IHCL)",
    description:
      "14 years of progressive leadership — General Manager and Area Director positions — building deep operational expertise across luxury hospitality. Also served as Assessor of Tata Group Companies (TBEM).",
    highlight: "Operational Mastery",
  },
  {
    period: "2006 – 2024",
    role: "Founder, CEO & Managing Director",
    company: "Keys Hotels & Resorts (Berggruen Hotels)",
    description:
      "Co-founded and built a portfolio of hotels from the ground up across budget and mid-market segments, establishing Keys as a recognized name in Indian hospitality.",
    highlight: "Brand Creation",
  },
  {
    period: "2015 – 2026",
    role: "Managing Director & CEO",
    company: "Chalet Hotels Limited",
    description:
      "Led a successful IPO, drove asset strategy, and expanded the portfolio to 3,000+ keys across premium properties in partnership with Marriott, Hyatt, Accor, and Taj. Launched lifestyle brand Athiva in 2025.",
    highlight: "IPO Leadership",
  },
  {
    period: "Present",
    role: "Senior Advisor & Independent Director",
    company: "Global PE, Funds & Developers",
    description:
      "Strategic counsel to private equity firms, institutional investors, developers, and boards on India hospitality investments and operations.",
    highlight: "Advisory",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-card border-t border-border scroll-mt-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-20 lg:pt-28 pb-20 lg:pb-28">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border pb-10 mb-0">
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-4">
              Career Snapshot
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Four Decades of<br />Leadership
            </h2>
          </div>
        </div>

        {/* Timeline — table-style rows */}
        <div className="divide-y divide-border">
          {timeline.map((item, index) => (
            <div
              key={item.company}
              className="py-8 lg:py-10 grid lg:grid-cols-[180px_1fr_1fr] gap-4 lg:gap-12"
              data-testid={`timeline-${item.company.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              {/* Period + highlight */}
              <div>
                <p className="text-sm font-mono text-muted-foreground mb-2">{item.period}</p>
                <span className="inline-block text-xs font-semibold tracking-wide text-primary bg-primary/10 px-2.5 py-1 rounded-sm border border-primary/15">
                  {item.highlight}
                </span>
              </div>

              {/* Role + company */}
              <div>
                <h3 className="font-serif text-lg lg:text-xl font-semibold text-foreground mb-1">
                  {item.role}
                </h3>
                <p className="text-primary text-sm font-medium">{item.company}</p>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
