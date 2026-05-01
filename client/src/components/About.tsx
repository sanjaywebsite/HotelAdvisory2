import { Badge } from "@/components/ui/badge";
import { Building2, Award, TrendingUp, Users, Compass } from "lucide-react";

const credentials = [
  { label: "CHA Certified", icon: Award },
  { label: "IHM Pusa", icon: Building2 },
  { label: "IIM Bangalore", icon: Building2 },
  { label: "Cornell University", icon: Building2 },
];

const highlights = [
  { icon: Building2, value: "37+", label: "Years in Hospitality" },
  { icon: TrendingUp, value: "IPO", label: "Leadership" },
  { icon: Users, value: "Board", label: "Advisory" },
  { icon: Compass, value: "Global", label: "Investor Reach" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Who I Am
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              A Career Built on Operating Discipline and Strategic Judgment
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Leadership across Taj, Keys, and Chalet Hotels, shaped by execution in real businesses —
                from asset strategy and brand building to capital allocation and board counsel.
              </p>
              <p>
                I have led hotels, created portfolios, guided IPO readiness, and worked with owners,
                developers, funds, and global investors looking for grounded judgment in a complex market.
              </p>
              <p>
                The advisory is selective by design: built for decisions that require experience,
                discretion, and an operator’s lens.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {credentials.map((cred) => (
                <Badge
                  key={cred.label}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm"
                >
                  <cred.icon className="h-3.5 w-3.5 mr-1.5" />
                  {cred.label}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-card border border-card-border rounded-md p-6 lg:p-8 text-center"
                  data-testid={`stat-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-6 lg:p-8 rounded-md bg-card border border-card-border">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                Executive Positioning
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Independent senior advisory for hospitality investors, owners, and boards seeking a calm,
                experienced voice on growth, governance, and long-term value creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
