const modes = [
  {
    label: "01",
    title: "Board & Independent Director Roles",
    terms: "Ongoing retainer basis",
    description: "Long-term board seats and independent directorships with sustained governance, oversight and strategic counsel.",
  },
  {
    label: "02",
    title: "Strategic Advisory & M&A",
    terms: "Project or success-fee basis",
    description: "Defined mandates across investments, transactions, asset strategy and operator decisions — structured around clear deliverables and outcomes.",
  },
  {
    label: "03",
    title: "Keynotes, Assessments & Reviews",
    terms: "Per-day engagement",
    description: "Senior keynote speaking, leadership assessments, board reviews and one-off strategic interventions billed by the day.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="bg-card border-t border-border scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-20 lg:pt-28 pb-20 lg:pb-28">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border pb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-4">
              How We Work Together
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-snug max-w-xl">
              Three Ways to Engage
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xs lg:text-right">
            Engagements are deliberately structured. Each model is matched to the nature of the mandate.
          </p>
        </div>

        {/* Three engagement modes */}
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border mt-10">
          {modes.map((mode) => (
            <div
              key={mode.title}
              className="bg-background p-7 lg:p-9 flex flex-col"
              data-testid={`how-${mode.label}`}
            >
              <span className="font-serif text-2xl font-bold text-border leading-none mb-6">
                {mode.label}
              </span>
              <h3 className="font-serif text-lg lg:text-xl font-semibold text-foreground mb-2 leading-snug">
                {mode.title}
              </h3>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
                {mode.terms}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {mode.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
