const drivers = [
  {
    label: "01",
    title: "Premiumisation Wave",
    description: "Rising demand for luxury and upper-upscale properties across key Indian markets is creating significant capital opportunity and compressing viable supply.",
  },
  {
    label: "02",
    title: "Supply Constraints",
    description: "Limited quality inventory sustains pricing power and delivers strong risk-adjusted returns for well-positioned, well-operated assets.",
  },
  {
    label: "03",
    title: "Global Investor Interest",
    description: "Capital flows from international PE funds, family offices, and institutional investors into India hospitality are accelerating — and so is the need for grounded local counsel.",
  },
  {
    label: "04",
    title: "Structural Demand Growth",
    description: "Domestic consumption, infrastructure expansion, and MICE travel are propelling a multi-year growth trajectory unlike any previous cycle.",
  },
];

export default function WhyNow() {
  return (
    <section className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">

        {/* Header */}
        <div className="border-b border-background/10 pb-10 mb-0">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-4">
            Why Now
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-background leading-snug">
              India's Hospitality Moment
            </h2>
            <p className="text-background/55 text-base leading-relaxed lg:pb-1">
              India's hospitality sector is entering a multi-year expansion cycle. Operators, owners, and investors need experienced, grounded guidance — not generalist consulting.
            </p>
          </div>
        </div>

        {/* Driver rows */}
        <div className="divide-y divide-background/10">
          {drivers.map((driver) => (
            <div
              key={driver.title}
              className="py-7 grid lg:grid-cols-[60px_240px_1fr] gap-4 lg:gap-10 items-start"
              data-testid={`driver-${driver.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <span className="font-serif text-2xl font-bold text-background/20 leading-none pt-0.5">
                {driver.label}
              </span>
              <h3 className="font-semibold text-background text-base">{driver.title}</h3>
              <p className="text-background/55 text-sm leading-relaxed">{driver.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
