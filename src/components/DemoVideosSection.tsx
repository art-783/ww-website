import { useState } from "react";
import { Play, Camera } from "lucide-react";

const videos = [
  { src: `${import.meta.env.BASE_URL}videos/chicken_curry.mp4`, label: "Chicken Curry", category: "Finished" },
  { src: `${import.meta.env.BASE_URL}videos/dal_tadka.mp4`, label: "Dal Tadka", category: "Finished" },
  { src: `${import.meta.env.BASE_URL}videos/corn_palak.mp4`, label: "Corn Palak", category: "Finished" },
  { src: `${import.meta.env.BASE_URL}videos/gobhi_mattar.mp4`, label: "Gobhi Mattar", category: "Finished" },
  { src: `${import.meta.env.BASE_URL}videos/chopped_onions.mp4`, label: "Chopped Onions", category: "Prep" },
  { src: `${import.meta.env.BASE_URL}videos/chopped_onions_2.mp4`, label: "Chopped Onions (2)", category: "Prep" },
  { src: `${import.meta.env.BASE_URL}videos/diced_vegetables_for_manchurian.mp4`, label: "Diced Vegetables", category: "Prep" },
  { src: `${import.meta.env.BASE_URL}videos/dahi_kebab_pre_prep.mp4`, label: "Dahi Kebab Prep", category: "Prep" },
  { src: `${import.meta.env.BASE_URL}videos/dahi_kebab_pre_prep_2.mp4`, label: "Dahi Kebab Prep (2)", category: "Prep" },
  { src: `${import.meta.env.BASE_URL}videos/dahi_kebab_pre_prep_3.mp4`, label: "Dahi Kebab Prep (3)", category: "Prep" },
  { src: `${import.meta.env.BASE_URL}videos/kheer.mp4`, label: "Kheer", category: "Finished" },
  { src: `${import.meta.env.BASE_URL}videos/paneer_makhni.mp4`, label: "Paneer Makhni", category: "Finished" },
  { src: `${import.meta.env.BASE_URL}videos/rice.mp4`, label: "Rice", category: "Finished" },
  { src: `${import.meta.env.BASE_URL}videos/mattar_mushroom_pre_prep.mp4`, label: "Mattar Mushroom Prep", category: "Prep" },
  { src: `${import.meta.env.BASE_URL}videos/mattar_mushroom_pre_prep_2.mp4`, label: "Mattar Mushroom Prep (2)", category: "Prep" },
];

const categories = ["All", "Finished", "Prep"];

const DemoVideosSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filtered = activeCategory === "All" ? videos : videos.filter((v) => v.category === activeCategory);

  return (
    <section className="py-24 px-6 bg-primary/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3 font-body">
            Live From Udman Kitchen
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            WasteWise in Action
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Real overhead camera footage from Udman Hotels & Resorts, New Delhi — showing how WasteWise identifies and classifies food waste across finished dishes and intermediate prep items.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-body transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/30"
              }`}
            >
              {cat === "Finished" ? "Finished Dishes" : cat === "Prep" ? "Intermediate Prep" : cat}
            </button>
          ))}
        </div>

        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-6"
            onClick={() => setActiveVideo(null)}
          >
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full rounded-2xl shadow-2xl"
              />
              <button
                onClick={() => setActiveVideo(null)}
                className="mt-4 mx-auto block text-sm text-primary-foreground/70 hover:text-primary-foreground font-body"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((video) => (
            <div
              key={video.src}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => setActiveVideo(video.src)}
            >
              <div className="relative aspect-video bg-muted">
                <video
                  src={video.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-all duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-accent-foreground ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold font-display text-foreground text-sm">{video.label}</h3>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">
                    {video.category === "Finished" ? "Finished Dish" : "Intermediate Prep"}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Camera className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoVideosSection;
