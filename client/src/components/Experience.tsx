const timeline = [
  {
    period: "1991 - 2006",
    role: "Senior Leadership Roles",
    company: "Taj Group of Hotels (IHCL)",
    description:
      "14 years of progressive leadership including General Manager and Area Director positions, building deep operational expertise across luxury hospitality. Assessor of Tata group Companies (TBEM).",
    highlight: "Operational Mastery",
  },
  {
    period: "2006 - 2024",
    role: "Founder, CEO & Managing Director",
    company: "Keys Hotels (Berggruen Hotels)",
    description:
      "Co-founded and built a portfolio of hotels across budget and mid-market segments, establishing the Keys brand as a recognized name in Indian hospitality.",
    highlight: "Brand Creation",
  },
  {
    period: "2015 - 2026",
    role: "Managing Director & CEO",
    company: "Chalet Hotels Limited",
    description:
      "Led the company through its successful IPO, drove asset strategy, and expanded the portfolio to 3,000+ keys across premium properties with Marriott, Hyatt, Accor, and Taj partnerships. Launched the premier lifestyle brand Athiva in 2025.",
    highlight: "IPO Leadership",
  },
  {
    period: "Present",
    role: "Senior Advisor",
    company: "Global PE, Funds & Developers",
    description:
      "Providing strategic counsel to private equity firms, institutional investors, developers, and boards on India hospitality investments and operations. Independent and Non-Executive Director.",
    highlight: "Strategic Advisory",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Experience Snapshot
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            A Career of Leadership
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.company}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                data-testid={`timeline-${item.company.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background z-10" />

                <div className={`flex-1 ml-12 lg:ml-0 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md mb-3 border border-primary/10">
                    {item.highlight}
                  </span>
                  <p className="text-sm text-muted-foreground mb-1">{item.period}</p>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-1">
                    {item.role}
                  </h3>
                  <p className="text-primary font-medium mb-3">{item.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
