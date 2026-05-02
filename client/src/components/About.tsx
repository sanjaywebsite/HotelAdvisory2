import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const recognitions = [
  "Ph.D. Honoris Causa, 2024",
  "Hall of Fame — Hotelier India, 2019",
  "Hall of Fame — Hospitality Horizon India",
  "Best Hospitality Professional — Pacific Asia Hotel Writers Association",
  "Certified Independent Director & Corporate Governance — IICA",
];

const education = [
  "IHM Pusa, New Delhi",
  "IIM Bangalore",
  "Cornell University",
  "CHA Certified",
];

export default function About() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="bg-background">
      {/* Pull quote opening — full width, high contrast */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-8">
            Who I Am
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed max-w-5xl">
            "A career built not in conference rooms, but on the ground — across luxury properties, 
            mid-market brands, boardrooms, and capital transactions. The kind of depth that only 
            comes from having lived every side of the table."
          </blockquote>
        </div>
      </div>

      {/* Two-column body */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 lg:gap-24">

          {/* Left — main bio */}
          <div>
            <div className="space-y-6 text-muted-foreground text-base lg:text-lg leading-relaxed mb-12">
              <p>
                37 years across the full arc of Indian hospitality — luxury and upper-upscale, mid-market and select-service, development and operations, fundraising and governance. Not as an observer, but as the person responsible for outcomes.
              </p>
              <p>
                Built Keys Hotels & Resorts from concept to an established brand. Led Chalet Hotels through a successful IPO, expanded to 3,000+ keys in partnership with Marriott, Hyatt, Accor, and Taj. Spent 14 formative years with the Taj Group, learning the discipline of luxury operations at scale.
              </p>
              <p>
                Today, the advisory is deliberately selective — available to investors, owners, developers, and boards who need a voice that has been on both sides of every decision they are facing.
              </p>
            </div>

            <Button onClick={scrollToContact} variant="outline" className="gap-2" data-testid="button-about-cta">
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Right — recognition + education */}
          <div className="space-y-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-5">
                Recognition
              </p>
              <ul className="space-y-3">
                {recognitions.map((r) => (
                  <li key={r} className="text-sm text-muted-foreground leading-snug border-b border-border pb-3 last:border-0">
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-5">
                Education
              </p>
              <ul className="space-y-3">
                {education.map((e) => (
                  <li key={e} className="text-sm text-muted-foreground border-b border-border pb-3 last:border-0">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stat band — full width, slight contrast */}
      <div className="border-t border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "37+", label: "Years in Hospitality" },
              { value: "3,000+", label: "Hotel Keys Led" },
              { value: "3", label: "Major Brands Shaped" },
              { value: "2024", label: "Ph.D. Honoris Causa" },
            ].map((stat) => (
              <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <p className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
