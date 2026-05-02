import { Badge } from "@/components/ui/badge";
import { Building2, Award, TrendingUp, Users, Compass, GraduationCap } from "lucide-react";

const credentials = [
  { label: "CHA Certified", icon: Award },
  { label: "IHM Pusa", icon: GraduationCap },
  { label: "IIM Bangalore", icon: GraduationCap },
  { label: "Cornell University", icon: GraduationCap },
];

const highlights = [
  { icon: Building2, value: "37+", label: "Years in Hospitality" },
  { icon: TrendingUp, value: "3,000+", label: "Hotel Keys Led" },
  { icon: Users, value: "Board", label: "Level Advisory" },
  { icon: Compass, value: "Global", label: "Investor Reach" },
];

const recognitions = [
  "Ph.D. Honoris Causa, 2024",
  "Hall of Fame — Hotelier India, 2019",
  "Hall of Fame — Hospitality Horizon India",
  "Best Hospitality Professional India — Pacific Asia Hotel Writers Association",
  "Certified Independent Director — IICA",
  "Certified in Corporate Governance — IICA",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-primary font-semibold text-xs tracking-[0.32em] uppercase mb-4">
              Who I Am
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8 leading-snug">
              A Career Built on Operating Depth and Strategic Judgment
            </h2>
            <div className="space-y-5 text-muted-foreground text-base lg:text-lg leading-relaxed">
              <p>
                37 years across hotels and resorts — spanning luxury, upper-upscale, mid-market, and select business-led properties — with lived experience across the full cycle of ownership, development, operations, growth, and governance.
              </p>
              <p>
                My work has covered India and select global geographies, with direct exposure to diverse markets, guest segments, and capital contexts. I have also worked closely across adjacent sectors including airlines, retail, luxury lifestyle, F&B, wellness, and real estate.
              </p>
              <p>
                The advisory is selective by design: built for decisions that require experience, discretion, and a dual lens of owners and operators.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8 mb-8">
              {credentials.map((cred) => (
                <Badge key={cred.label} variant="secondary" className="px-3 py-1.5 text-sm gap-1.5">
                  <cred.icon className="h-3.5 w-3.5" />
                  {cred.label}
                </Badge>
              ))}
            </div>

            <div className="p-6 lg:p-8 rounded-md bg-card border border-card-border">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary mb-4">
                Recognition
              </p>
              <ul className="space-y-2">
                {recognitions.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-card border border-card-border rounded-md p-6 text-center"
                  data-testid={`stat-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <item.icon className="h-7 w-7 text-primary mx-auto mb-3" />
                  <p className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-1">
                    {item.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="p-6 lg:p-8 rounded-md bg-card border border-card-border">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary mb-4">
                Executive Positioning
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                Independent senior advisory for hospitality and adjacent industries — serving investors, owners, and boards seeking a calm, experienced voice on growth, governance, talent, stakeholder relationships, and long-term value creation.
              </p>
            </div>

            <div className="p-6 lg:p-8 rounded-md bg-primary/5 border border-primary/15">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary mb-4">
                Current Focus
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                Available for select advisory mandates with global PE firms, institutional investors, developers, family offices, and boards seeking independent hospitality counsel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
