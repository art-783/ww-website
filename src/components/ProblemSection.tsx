import { AlertTriangle, Store, UtensilsCrossed, Warehouse } from "lucide-react";

const stats = [
  {
    icon: UtensilsCrossed,
    value: "290M",
    unit: "tonnes",
    label: "Food Service Waste Globally",
    detail: "Restaurants & Canteens (28%)",
  },
  {
    icon: Store,
    value: "131M",
    unit: "tonnes",
    label: "Retail Waste Globally",
    detail: "Supermarkets & Grocery (12%)",
  },
  {
    icon: Warehouse,
    value: "11.9M",
    unit: "tonnes",
    label: "India Commercial Kitchens",
    detail: "Thrown away in 2021 alone",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 px-6 bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-accent" />
              <p className="text-sm font-semibold uppercase tracking-widest text-accent font-body">
                The Problem
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              1.05 Billion Tonnes of Food Wasted Every Year
            </h2>
            <p className="text-primary-foreground/70 font-body leading-relaxed mb-6">
              Out of the 1.05 billion tonnes of total food waste generated globally, restaurants and food service contribute 290 million tonnes (28%), while retail supermarkets and grocery stores add another 131 million tonnes (12%).
            </p>
            <p className="text-primary-foreground/70 font-body leading-relaxed">
              Commercial kitchens in India alone threw away <span className="text-accent font-semibold">11.9 million tons in 2021</span> (UNEP Food Waste Index) — largely due to bad planning and forecasting. Existing businesses still rely on sales experience alone, which tells only half the story and doesn't reveal what was actually thrown away behind the counters.
            </p>
          </div>
          <div className="space-y-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-start gap-5 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-3xl font-bold font-body text-accent">
                    {stat.value} <span className="text-lg font-normal text-primary-foreground/50">{stat.unit}</span>
                  </p>
                  <p className="text-sm font-semibold text-primary-foreground font-body">{stat.label}</p>
                  <p className="text-xs text-primary-foreground/50 font-body">{stat.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
