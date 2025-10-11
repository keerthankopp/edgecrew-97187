import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionFlow from "@/components/SolutionFlow";
import TrustSection from "@/components/TrustSection";
import TeamTraction from "@/components/TeamTraction";
import FutureVision from "@/components/FutureVision";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionFlow />
      <TrustSection />
      <TeamTraction />
      <FutureVision />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
