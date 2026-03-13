const kitchens = [
  {
    name: "Café – Athena Education",
    location: "New Delhi, India",
    type: "Educational Café",
    status: "Live & Operational",
    quote: "The AI-based overhead camera setup identified and quantified food waste in real-time, giving us visibility we never had before into what was actually being thrown away.",
    person: "Operations Team",
  },
  {
    name: "Udman Hotels & Resorts",
    location: "New Delhi, India",
    type: "Hotel Kitchen",
    status: "Live & Operational",
    quote: "WasteWise's lightweight CNN classifies intermediate prep items like doughs and curries that other solutions miss — exactly where 65% of our wastage lies.",
    person: "Kitchen Management",
  },
  {
    name: "Canteen – DPS Vasant Kunj",
    location: "New Delhi, India",
    type: "School Canteen",
    status: "Live & Operational",
    quote: "A fully hands-free system with no workflow changes required. The camera-based tracking runs independently, giving us daily and weekly waste metrics without any manual effort.",
    person: "Canteen Operations",
  },
];

const metrics = [
  { value: ">98%", label: "Image Recognition Accuracy" },
  { value: ">90%", label: "Quantity Estimation Accuracy" },
  { value: ">30%", label: "Waste Reduction Achieved" },
];

const KitchensSection = () => {
  return (
    <section className="py-24 px-6 bg-primary/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3 font-body">
            Proven Deployments
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            3 Live Deployments in New Delhi
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            WasteWise is already developed, tested and implemented at real commercial kitchens. Accuracy calibrated via manual weighing across 20+ food products and 100+ lot sizes.
          </p>
        </div>

        {/* Performance Metrics Bar */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {metrics.map((m) => (
            <div key={m.label} className="text-center p-6 rounded-2xl bg-card border border-border">
              <p className="text-3xl md:text-4xl font-bold text-primary font-body">{m.value}</p>
              <p className="text-xs text-muted-foreground font-body mt-1">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {kitchens.map((kitchen) => (
            <div
              key={kitchen.name}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="mb-4">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full font-body mb-3">
                  {kitchen.status}
                </span>
                <h3 className="text-xl font-bold font-display text-foreground">{kitchen.name}</h3>
                <p className="text-sm text-muted-foreground font-body">
                  {kitchen.type} · {kitchen.location}
                </p>
              </div>
              <blockquote className="border-l-2 border-accent pl-4 italic text-sm text-muted-foreground font-body flex-1">
                "{kitchen.quote}"
              </blockquote>
              <p className="text-sm font-semibold text-foreground mt-4 font-body">— {kitchen.person}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchensSection;
