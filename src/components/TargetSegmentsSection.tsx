import { Hotel, UtensilsCrossed, Factory, Cloud, ShoppingBasket, Store, Landmark } from "lucide-react";

const segments = [
  { icon: Hotel, name: "Restaurants & Hotels", examples: "Taj, Park, ITC etc." },
  { icon: UtensilsCrossed, name: "Buffet Food Courts", examples: "Haldirams, Bikanervala etc." },
  { icon: Factory, name: "Industrial Kitchens", examples: "Catering units, canteens" },
  { icon: Cloud, name: "Cloud & Food Kitchens", examples: "Zomato, Swiggy kitchens" },
  { icon: ShoppingBasket, name: "Supermarkets", examples: "Reliance Fresh, Big Basket" },
  { icon: Store, name: "Grocery Stores", examples: "Safal, local stores" },
  { icon: Landmark, name: "Govt Granaries", examples: "FCI, state warehouses" },
];

const TargetSegmentsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3 font-body">
            Target Segments
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
            Built For Every Scale
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {segments.map((seg) => (
            <div
              key={seg.name}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center group hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <seg.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold font-display text-foreground mb-1">{seg.name}</h3>
              <p className="text-xs text-muted-foreground font-body">{seg.examples}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetSegmentsSection;
