import { Leaf, Flame, Heart, ArrowDownRight } from "lucide-react";

const sdgs = [
  {
    icon: Leaf,
    number: "SDG 12",
    title: "Responsible Consumption & Production",
    description: "Reduces food waste at retail, food service, and grocery stores through objective, data-driven metrics.",
  },
  {
    icon: Flame,
    number: "SDG 13",
    title: "Climate Action",
    description: "Prevents methane emissions from decomposing food waste — shifting focus from reactive disposal to predictive prevention.",
  },
  {
    icon: Heart,
    number: "SDG 2",
    title: "Zero Hunger (Indirect)",
    description: "Encourages efficient food utilization and resource conservation. For NGOs and shelter kitchens — available at $100 one-time cost on a no-profit basis.",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-24 px-6 bg-primary/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3 font-body">
            Impact & Sustainability
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            UN Sustainable Development Goals
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Measuring waste is the first step. Preventing it with these insights is the real solution.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {sdgs.map((sdg) => (
            <div
              key={sdg.number}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <sdg.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent font-body mb-2">{sdg.number}</p>
              <h3 className="text-lg font-bold font-display text-foreground mb-3">{sdg.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{sdg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
