import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    title: "Mentorship",
    description: "Guidance for young hospitality professionals and entrepreneurs on careers, judgment, and long-term growth in the industry.",
  },
  {
    title: "Sounding Board",
    description: "A confidential space to pressure-test ideas on hotel, F&B, and hospitality-led venture plans — with no agenda other than honest feedback.",
  },
  {
    title: "Practical Conversations",
    description: "Direct, real-world conversations on business challenges, operational re-engineering, and choices that don't have a textbook answer.",
  },
  {
    title: "Non-Commercial Only",
    description: "The GBP does not facilitate vendor recommendations, employment referrals, or commercial introductions. It is a personal initiative, run entirely in spare time.",
  },
];

export default function GBP() {
  return (
    <section id="gbp" className="bg-background">

      {/* Section header — consistent with main site */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-20 lg:pt-28 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border pb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-4">
              Give Back Project
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-snug max-w-2xl">
              A Non-Commercial Initiative for the Next Generation
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xs lg:text-right">
            A spare-time initiative to mentor young hospitality professionals and share what a long career in the industry has taught.
          </p>
        </div>
      </div>

      {/* Editorial rows — identical structure to Services */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pb-20 lg:pb-28">
        <div className="divide-y divide-border">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group py-8 lg:py-10 grid lg:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-12 hover-elevate"
              data-testid={`card-gbp-${pillar.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Number */}
              <span className="font-serif text-4xl font-bold text-border group-hover:text-primary/30 transition-colors leading-none pt-1">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title + desc */}
              <div>
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-end">
                <ArrowUpRight className="h-5 w-5 text-border group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dark note block */}
      <div className="bg-foreground text-background border-t border-background/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-12 lg:py-16">
          <div className="grid lg:grid-cols-[1fr_480px] gap-10 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-4">
                How To Reach Out
              </p>
              <p className="font-serif text-xl lg:text-2xl font-light text-background/90 leading-relaxed">
                If you are a young hospitality professional or founder with a genuine question, reach out via email with a brief note on who you are and what you are working on.
              </p>
            </div>
            <div className="border border-background/15">
              <a
                href="mailto:contact@sanjaysethi.co"
                className="flex items-start justify-between p-8 group"
                data-testid="link-gbp-email"
              >
                <div>
                  <p className="text-xs text-background/40 tracking-[0.3em] uppercase mb-1">Email</p>
                  <p className="text-background font-medium group-hover:text-primary transition-colors">
                    contact@sanjaysethi.co
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-background/30 group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
              </a>
              <div className="border-t border-background/15 px-8 py-5">
                <p className="text-xs text-background/40 leading-relaxed">
                  Response times may vary. The GBP is a personal initiative — not a formal service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
