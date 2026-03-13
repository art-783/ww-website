import heroImage from "@/assets/hero-kitchen.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern sustainable kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 font-body animate-fade-up">
            AI-Powered Waste Reduction
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground font-display leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Cut Kitchen Waste.
            <br />
            <span className="text-accent">Data, Not Guesswork.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-body mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "200ms" }}>
            WasteWise provides objective metrics to monitor type and quantity of food waste using AI-powered computer vision — already deployed at Café Athena Education and Udman Hotels & Resorts, New Delhi.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body text-base px-8 py-6 rounded-xl">
              Request a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body text-base px-8 py-6 rounded-xl">
              See Results
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg animate-fade-up" style={{ animationDelay: "500ms" }}>
          {[
            { value: "₹10K", label: "Per Deployment" },
            { value: "1–2", label: "Days to Deploy" },
            { value: "11.9M", label: "Tons Wasted (India)" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent font-body">{stat.value}</p>
              <p className="text-xs text-primary-foreground/60 uppercase tracking-wider font-body mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
