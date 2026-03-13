import Navbar from "@/components/Navbar";
import TargetSegmentsSection from "@/components/TargetSegmentsSection";
import KitchensSection from "@/components/KitchensSection";
import DemoVideosSection from "@/components/DemoVideosSection";
import Footer from "@/components/Footer";

const Deployments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <TargetSegmentsSection />
        <KitchensSection />
        <DemoVideosSection />
      </div>
      <Footer />
    </div>
  );
};

export default Deployments;
