import { Badge } from "@/components/ui/badge";
import { Building2, Award, TrendingUp, Users } from "lucide-react";

const credentials = [
  { label: "CHA Certified", icon: Award },
  { label: "IIM Bangalore", icon: Building2 },
  { label: "Cornell University", icon: Building2 },
  { label: "XLRI Jamshedpur", icon: Building2 },
];

const highlights = [
  { icon: Building2, value: "37+", label: "Years Experience" },
  { icon: TrendingUp, value: "3,000+", label: "Hotel Keys Managed" },
  { icon: Award, value: "IPO", label: "Leadership" },
  { icon: Users, value: "Global", label: "PE Advisory" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Who I Am
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Decades of Leadership in India's Hospitality Sector
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Experience shaped by real-world execution: operating hotels, designing brands, 
                steering investments, leading IPOs, and advising boards and global investors.
              </p>
              <p>
                My journey spans leadership roles across <span className="text-foreground font-medium">Taj Group</span> (14 years), 
                founding <span className="text-foreground font-medium">Keys Hotels</span>, and serving as 
                Managing Director & CEO of <span className="text-foreground font-medium">Chalet Hotels</span>, 
                where I led the company through its successful IPO and significant portfolio expansion.
              </p>
              <p>
                Today, I advise global private equity firms, institutional investors, developers, 
                and boards seeking experienced, grounded guidance in India's dynamic hospitality market.
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
        </div>
      </div>
    </section>
  );
}
