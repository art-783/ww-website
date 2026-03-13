import { Camera, Cpu, BarChart3, Lightbulb, ShoppingCart } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Overhead Camera Capture",
    description:
      "An overhead camera near the kitchen dustbin records food being discarded in real-time. The setup uses a Raspberry Pi for a low-cost, plug-and-play deployment.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Classification & Quantification",
    description:
      "A lightweight CNN identifies the food type. The system locks onto the vessel as an ellipse, samples the rim color for reference, and computes percent fill by area to derive approximate volume.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Cloud Logging & Dashboard",
    description:
      "Food type, volume, timestamp, and details are logged to a cloud database. A web dashboard shows daily/weekly trends and item-wise waste breakdowns for managers.",
  },
  {
    icon: Lightbulb,
    step: "04",
    title: "Actionable Insights",
    description:
      "With historical waste data, real-time inventory and orders, WasteWise suggests how much to prepare and when — reducing both shortages and over-production with clear, actionable insights.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3 font-body">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            The WasteWise Solution
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A data-driven approach to one of the most overlooked parts of restaurant and grocery store operations — lowering costs, cutting waste, and supporting sustainability without adding extra work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <span className="absolute top-6 right-6 text-5xl font-bold text-primary/10 font-display">
                {step.step}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Grocery / Supermarket extension */}
        <div className="p-8 rounded-2xl bg-primary/[0.04] border border-border">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <ShoppingCart className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">
                For Grocery Stores & Supermarkets
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                The solution helps stores carrying fresh produce similarly to kitchens. Additionally, a computer vision model is being developed to track color and texture changes of fresh items in real time and send alarms to managers in case of rot or infestation (for grains, flours, etc.).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
