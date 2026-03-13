import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
          Ready to Transform Your Kitchen?
        </h2>
        <p className="text-lg text-muted-foreground font-body mb-10 max-w-2xl mx-auto">
          Join the kitchens already saving money and reducing their environmental footprint with AI-powered waste intelligence.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-base px-10 py-6 rounded-xl">
          Get Started Today
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
