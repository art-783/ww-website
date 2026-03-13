import { IndianRupee, ChefHat, Zap, Target } from "lucide-react";

const differentiators = [
  {
    icon: ChefHat,
    title: "Recognizes Indian Prep",
    description:
      "Unlike foreign solutions, WasteWise identifies intermediate prep typical to Indian cuisine — doughs, curries, gravies — where 65% of wastage lies.",
  },
  {
    icon: Zap,
    title: "Real-Time Suggestions",
    description:
      "Offers real-time suggestions on how much to prepare or stock based on heuristic models using historical waste data — not just reporting after the fact.",
  },
  {
    icon: IndianRupee,
    title: "Fraction of the Cost",
    description:
      "At approximately ₹10,000 per deployment, WasteWise costs a minuscule fraction compared to costly foreign solutions, making it accessible to businesses of all sizes.",
  },
  {
    icon: Target,
    title: "Complete Waste Visibility",
    description:
      "Tells managers exactly what was thrown away, why — bad vendor supply, chef errors, wrong quantities, pilferage — not just sales-side data.",
  },
];

const DifferentiatorSection = () => {
  return (
    <section className="py-24 px-6 bg-primary/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3 font-body">
            Why WasteWise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
            What Sets Us Apart
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-5 p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
