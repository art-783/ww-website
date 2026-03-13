import { DollarSign, Clock, TrendingUp, Calendar } from "lucide-react";

const BusinessModelSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3 font-body">
            Business Model
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
            Simple, Scalable Pricing
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Pricing */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-bold font-display text-foreground mb-6">Pricing</h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground font-body">$100 one-time</p>
                  <p className="text-sm text-muted-foreground font-body">Hardware setup (Raspberry Pi + camera)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground font-body">$59/month</p>
                  <p className="text-sm text-muted-foreground font-body">SaaS subscription for dashboard & analytics</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground font-body">$300–500/month savings</p>
                  <p className="text-sm text-muted-foreground font-body">Average kitchen savings from waste reduction</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground font-body">&lt; 2 months payback</p>
                  <p className="text-sm text-muted-foreground font-body">ROI within the first two months</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground font-body italic">
                For NGOs and shelter kitchens — available at $100 one-time cost on a no-profit basis.
              </p>
            </div>
          </div>

          {/* Financial Projections */}
          <div className="p-8 rounded-2xl bg-foreground text-primary-foreground">
            <h3 className="text-xl font-bold font-display mb-6">Financial Projections (Conservative)</h3>
            <div className="space-y-6">
              {[
                { year: "Year 1", deployments: "25 deployments", revenue: "~$18,000–$20,000" },
                { year: "Year 2", deployments: "150 deployments", revenue: "~$100,000+" },
                { year: "Year 3", deployments: "600 deployments", revenue: "~$450,000+" },
              ].map((row) => (
                <div key={row.year} className="flex items-center justify-between pb-4 border-b border-primary-foreground/10 last:border-0">
                  <div>
                    <p className="font-bold font-body text-accent">{row.year}</p>
                    <p className="text-sm text-primary-foreground/60 font-body">{row.deployments}</p>
                  </div>
                  <p className="text-xl font-bold font-body">{row.revenue}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-primary-foreground/50 font-body mt-6">
              Projected SaaS gross margin: 65–75%. Scalable via low-cost deployment + growing dataset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
