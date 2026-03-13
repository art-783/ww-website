import Navbar from "@/components/Navbar";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import BusinessModelSection from "@/components/BusinessModelSection";
import Footer from "@/components/Footer";

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <DifferentiatorSection />
        <BusinessModelSection />
      </div>
      <Footer />
    </div>
  );
};

export default WhyUs;
