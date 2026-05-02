import { Calendar, FileText, Lock, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Calendar,
    label: "4–5 Days/Month",
    description: "Focused time allocation for high-impact advisory",
  },
  {
    icon: FileText,
    label: "Retainer + Deliverables",
    description: "Structured around outcomes, not hours",
  },
  {
    icon: Lock,
    label: "Confidential",
    description: "Absolute discretion on all matters",
  },
  {
    icon: Award,
    label: "Experience-Led",
    description: "Judgment drawn from 37 years in the field",
  },
];

export default function Engagement() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-primary font-semibold text-xs tracking-[0.32em] uppercase mb-4">
              Engagement Model
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-background mb-6">
              Selective Senior Advisory
            </h2>
            <p className="text-base text-background/70 mb-8 leading-relaxed">
              A focused, high-trust model aligned with strategic outcomes for hospitality, related sectors, and board-level decision making. Advisory engagements are limited to ensure full attention and depth.
            </p>
            <p className="text-sm text-background/50 mb-8">
              Available for select mandates with global investors, owners, developers, and funds.
            </p>
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="border-background/30 text-background bg-background/10 backdrop-blur-sm"
              data-testid="button-engagement-cta"
            >
              Enquire About Availability
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="p-5 rounded-md bg-background/5 border border-background/10"
                data-testid={`engagement-${feature.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <feature.icon className="h-5 w-5 text-primary mb-3" />
                <p className="font-semibold text-background text-sm mb-1">{feature.label}</p>
                <p className="text-xs text-background/55 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
