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

  const filtered =
    activeCategory === "All"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

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
        </div>

        <div className="flex justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            onClick={() => setActiveVideo(null)}
          >
            <video src={activeVideo} controls autoPlay className="max-w-4xl w-full" />
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((video) => (
            <div
              key={video.src}
              className="cursor-pointer"
              onClick={() => setActiveVideo(video.src)}
            >
              <video
                src={video.src}
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
              />
              <p className="mt-2 text-sm">{video.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoVideosSection;
