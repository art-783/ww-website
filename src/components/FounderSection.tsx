import { Award, Code, Brain } from "lucide-react";

const credentials = [
  "Gold Medal – International Olympiad in AI (IOAI), Beijing 2025",
  "USACO Gold",
  "Silver Medal – Indian National Olympiad in Informatics, 2025",
  "AI Intern – RemoFirst LLC, CA — developing LLM-based products",
];

const FounderSection = () => {
  return (
    <section className="py-24 px-6 bg-foreground text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3 font-body">
          The Team
        </p>
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">
          Built by Arjun Tyagi
        </h2>
        <p className="text-primary-foreground/70 font-body text-lg mb-4">
          Sole Developer & Founder · Grade 11, New Delhi
        </p>
        <p className="text-primary-foreground/50 font-body max-w-2xl mx-auto mb-10">
          WasteWise is entirely developed, tested, and deployed by Arjun — from training the CNN models to building the Raspberry Pi hardware setup and the cloud dashboard.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
          {credentials.map((cred) => (
            <div
              key={cred}
              className="flex items-start gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <Award className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm font-body text-primary-foreground/80">{cred}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
