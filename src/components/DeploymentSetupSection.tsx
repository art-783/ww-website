import { useState } from "react";
import { Cpu, Camera, Wifi, Play } from "lucide-react";

const photos = [
  { src: `${import.meta.env.BASE_URL}images/setup-full.jpeg`, caption: "Full setup — Raspberry Pi + camera mounted above dustbin at Udman Kitchen" },
  { src: `${import.meta.env.BASE_URL}images/setup-closeup.jpeg`, caption: "Close-up — Raspberry Pi with camera module on wall-mounted shelf" },
  { src: `${import.meta.env.BASE_URL}images/setup-wide.jpeg`, caption: "Wide view — camera positioned to capture the waste bin area" },
];

const setupVideos = [
  { src: `${import.meta.env.BASE_URL}videos/setup-video-1.mp4`, caption: "Deployment walkthrough at Udman Hotels" },
  { src: `${import.meta.env.BASE_URL}videos/setup-video-2.mp4`, caption: "Live system in operation" },
];

const DeploymentSetupSection = () => {
  const [activeMedia, setActiveMedia] = useState<{ type: "image" | "video"; src: string } | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {activeMedia && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center"
            onClick={() => setActiveMedia(null)}
          >
            {activeMedia.type === "image" ? (
              <img src={activeMedia.src} className="max-w-4xl w-full" />
            ) : (
              <video src={activeMedia.src} controls autoPlay className="max-w-4xl w-full" />
            )}
          </div>
        )}

        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {photos.map((photo) => (
            <div key={photo.src} onClick={() => setActiveMedia({ type: "image", src: photo.src })}>
              <img src={photo.src} className="w-full" />
              <p className="text-xs">{photo.caption}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {setupVideos.map((video) => (
            <div key={video.src} onClick={() => setActiveMedia({ type: "video", src: video.src })}>
              <video src={video.src} muted loop className="w-full aspect-video object-cover" />
              <p className="text-xs">{video.caption}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DeploymentSetupSection;
