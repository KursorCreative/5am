import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import TeamSection from "@/components/TeamSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <SkipToContent />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main id="main-content" className="pt-20">
        <About />
        <TeamSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;