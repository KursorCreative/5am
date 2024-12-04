import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import TeamSection from "@/components/TeamSection";
import Hours from "@/components/Hours";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <TeamSection />
      <Hours />
      <Footer />
    </div>
  );
};

export default Index;