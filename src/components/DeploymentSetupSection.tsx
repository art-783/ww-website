import { useState } from "react";
import { Cpu, Camera, Wifi, Play } from "lucide-react";

const photos = [
  { src: "/images/setup-full.jpeg", caption: "Full setup — Raspberry Pi + camera mounted above dustbin at Udman Kitchen" },
  { src: "/images/setup-closeup.jpeg", caption: "Close-up — Raspberry Pi with camera module on wall-mounted shelf" },
  { src: "/images/setup-wide.jpeg", caption: "Wide view — camera positioned to capture the waste bin area" },
];

const setupVideos = [
  { src: "/videos/setup-video-1.mp4", caption: "Deployment walkthrough at Udman Hotels" },
  { src: "/videos/setup-video-2.mp4", caption: "Live system in operation" },
];

const specs = [
  { icon: Cpu, label: "Raspberry Pi", detail: "Low-cost edge compute" },
  { icon: Camera, label: "Overhead Camera", detail: "Mounted near dustbin" },
  { icon: Wifi, label: "Cloud Connected", detail: "Real-time data logging" },
];

const DeploymentSetupSection = () => {
  const [activeMedia, setActiveMedia] = useState<{ type: "image" | "video"; src: string } | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3 font-body">
            Hardware Setup
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Plug-and-Play Deployment
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Real photos and videos from the Udman Hotels & Resorts kitchen deployment — a Raspberry Pi and camera mounted on a simple shelf, operational within hours.
          </p>
        </div>

        {/* Specs bar */}
        <div className="flex justify-center gap-8 mb-12">
          {specs.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold font-display text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground font-body">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {activeMedia && (
          <div
            className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-6"
            onClick={() => setActiveMedia(null)}
          >
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              {activeMedia.type === "image" ? (
                <img src={activeMedia.src} alt="Setup" className="w-full rounded-2xl shadow-2xl" />
              ) : (
                <video src={activeMedia.src} controls autoPlay className="w-full rounded-2xl shadow-2xl" />
              )}
              <button
                onClick={() => setActiveMedia(null)}
                className="mt-4 mx-auto block text-sm text-primary-foreground/70 hover:text-primary-foreground font-body"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Photos */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-pointer bg-card"
              onClick={() => setActiveMedia({ type: "image", src: photo.src })}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="p-4 text-xs text-muted-foreground font-body">{photo.caption}</p>
            </div>
          ))}
        </div>

        {/* Videos */}
        <div className="grid sm:grid-cols-2 gap-6">
          {setupVideos.map((video) => (
            <div
              key={video.src}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-pointer bg-card"
              onClick={() => setActiveMedia({ type: "video", src: video.src })}
            >
              <div className="relative aspect-video">
                <video
                  src={video.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-all duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-accent-foreground ml-0.5" />
                  </div>
                </div>
              </div>
              <p className="p-4 text-xs text-muted-foreground font-body">{video.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeploymentSetupSection;
