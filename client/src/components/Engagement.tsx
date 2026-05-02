import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Engagement() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div>
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-5">
              Engagement Model
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-snug">
              Selective. Confidential.<br />Experience-Led.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Advisory engagements are limited by design — typically 4 to 5 focused days per month — structured around outcomes, not hours. This is not a consulting firm. It is access to one person's three decades of direct experience.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              Engagements are available on retainer with clear deliverables. All conversations and mandates are held in the strictest confidence.
            </p>
            <Button onClick={scrollToContact} className="gap-2" data-testid="button-engagement-cta">
              Enquire About Availability
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border border border-border">
            {[
              { label: "Commitment", value: "4–5 Days/Month" },
              { label: "Structure", value: "Retainer + Deliverables" },
              { label: "Confidentiality", value: "Absolute" },
              { label: "Availability", value: "Select Mandates" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-background p-6 lg:p-8"
                data-testid={`engagement-${item.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">{item.label}</p>
                <p className="font-serif text-lg font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
