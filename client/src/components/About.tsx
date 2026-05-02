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
  { icon: TrendingUp, value: "Multi-Market", label: "Growth Leadership" },
  { icon: Users, value: "Board", label: "Advisory" },
  { icon: Compass, value: "Global", label: "Investor Reach" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Who I Am
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              A Career Built on Operating Depth and Strategic Judgment
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                37 years across hotels and resorts, spanning luxury, upper-upscale, mid-market, and select business-led properties — with lived experience across the full cycle of ownership, development, operations, growth, and governance.
              </p>
              <p>
                My work has covered India and select global geographies, with direct exposure to diverse markets, guest segments, and capital contexts. I have also worked closely across adjacent sectors including airlines, retail, luxury lifestyle, F&B, wellness, and real estate.
              </p>
              <p>
                The advisory is selective by design: built for decisions that require experience, discretion, and a dual lens of owners and operators.
              </p>
            </div>

            <div className="mt-6 p-6 lg:p-8 rounded-md bg-card border border-card-border shadow-sm">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                Recognition
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ph.D. Honoris Causa, 2024.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Hall of Fame - Hotelier India 2019.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Hall of Fame - Hospitality Horizon India.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Best Hospitality Professional India - Pacific Asia Hotel Writers Association.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Certified Independent Director - IICA.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Certified in Corporate Governance - IICA.
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
                className="bg-card border border-card-border rounded-md p-6 lg:p-8 text-center shadow-sm"
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

            <div className="mt-6 p-6 lg:p-8 rounded-md bg-card border border-card-border shadow-sm">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                Executive Positioning
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Independent senior advisory for hospitality and adjacent industries, serving investors, owners, and boards seeking a calm, experienced voice on growth, governance, talent, stakeholder relationships, and long-term value creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
