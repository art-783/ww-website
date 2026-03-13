import { Rocket, CalendarClock, Eye, Bell } from "lucide-react";

const roadmapItems = [
  {
    icon: Rocket,
    phase: "Now",
    title: "Version 1 — Live",
    description: "Waste identification and tracking via overhead camera + lightweight CNN. Deployed at 3 sites. Continue deploying Ver 1 in as many stores as possible for next 6–8 months.",
  },
  {
    icon: CalendarClock,
    phase: "6 Months",
    title: "Cultural Heuristic Engine",
    description: "Introduce demand prediction using heuristic models with historical data and real-time counter position. Account for cultural spikes — Diwali, Christmas, Eid, etc.",
  },
  {
    icon: Eye,
    phase: "V2",
    title: "Fresh Produce Monitoring",
    description: "Computer vision system to monitor degradation of fresh items using color and texture change in real time. Track rot and infestation for grains, flours, and loose produce.",
  },
  {
    icon: Bell,
    phase: "V2",
    title: "Automated Alerts & Self-Service",
    description: "Send alarms to trigger discounted sales before spoilage. Make the solution easy to customize and implement at the customer's end without backend support.",
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3 font-body">
            Product Roadmap
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
            What's Next for WasteWise
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            Version 2 targeted for deployment by end of 2026, with iterative improvements driven by real deployment feedback.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {roadmapItems.map((item) => (
            <div
              key={item.title}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <span className="absolute top-6 right-6 text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full font-body">
                {item.phase}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
