import Navbar from "@/components/Navbar";
import RoadmapSection from "@/components/RoadmapSection";
import ImpactSection from "@/components/ImpactSection";
import ScalabilitySection from "@/components/ScalabilitySection";
import FounderSection from "@/components/FounderSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <RoadmapSection />
        <ImpactSection />
        <ScalabilitySection />
        <FounderSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
