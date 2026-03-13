import { Leaf, BarChart3, Brain, Utensils } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Tracking",
    description: "Computer vision identifies and categorizes waste in real-time, learning your kitchen's patterns.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast demand and optimize purchasing to minimize over-ordering and spoilage.",
  },
  {
    icon: Utensils,
    title: "Menu Optimization",
    description: "Smart suggestions for menu adjustments based on ingredient availability and waste trends.",
  },
  {
    icon: Leaf,
    title: "Sustainability Reports",
    description: "Track your environmental impact with CO₂ savings, landfill diversion, and cost reduction metrics.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3 font-body">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
            Intelligence at Every Stage
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
