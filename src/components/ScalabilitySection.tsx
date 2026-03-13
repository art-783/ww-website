import { Rocket, Clock, Database, Globe } from "lucide-react";

const points = [
  {
    icon: Database,
    title: "Self-Improving Library",
    description: "Each deployment incrementally trains and builds the image library, adding newer items and making the product better and easier to customize.",
  },
  {
    icon: Clock,
    title: "1–2 Day Deployment",
    description: "The plug-and-play hardware setup with Raspberry Pi and overhead camera can be deployed in any kitchen or grocery store in just 1–2 days.",
  },
  {
    icon: Globe,
    title: "Customer Self-Service (V2)",
    description: "Version 2 will enable customers to customize and implement the solution at their end without any backend support, removing deployment bottlenecks.",
  },
  {
    icon: Rocket,
    title: "Go-To-Market Strategy",
    description: "The product will be made readily accessible online, pitched through food tech forums and seminars, and offered to large restaurant chains and supermarket groups.",
  },
];

const ScalabilitySection = () => {
  return (
    <section className="py-24 px-6 bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3 font-body">
            Scalability
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Built to Scale
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {points.map((point) => (
            <div
              key={point.title}
              className="flex items-start gap-5 p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                <point.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display mb-2">{point.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed font-body">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScalabilitySection;
