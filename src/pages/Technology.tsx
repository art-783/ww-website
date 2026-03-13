import Navbar from "@/components/Navbar";
import DeploymentSetupSection from "@/components/DeploymentSetupSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <DeploymentSetupSection />
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Technology;
