import { Calendar, FileText, Lock, Award } from "lucide-react";

const features = [
  { icon: Calendar, label: "4-5 Days/Month" },
  { icon: FileText, label: "Retainer + Deliverables" },
  { icon: Lock, label: "Confidential" },
  { icon: Award, label: "Experience-Led" },
];

export default function Engagement() {
  return (
    <section className="py-20 lg:py-24 bg-card border-y border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
          Engagement Model
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
          Selective Senior Advisory
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          A focused, high-trust model aligned with strategic outcomes for hospitality, related sectors, and board-level decision making.
        </p>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 px-5 py-3 rounded-md bg-background border border-border"
              data-testid={`engagement-${feature.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <feature.icon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{feature.label}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-10">
          Available for select advisory engagements with global investors, owners, developers, and funds.
        </p>
      </div>
    </section>
  );
}
