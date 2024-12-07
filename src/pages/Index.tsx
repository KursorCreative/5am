import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TeamSection from "@/components/TeamSection";
import Hours from "@/components/Hours";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <SkipToContent />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <div id="home" className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
        <Hero />
      </div>
      
      <main id="main-content">
        <div id="about" className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <About />
        </div>
        
        <div id="services" className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <Services />
        </div>
        
        <div id="team" className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <TeamSection />
        </div>
        
        <div id="hours" className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <Hours />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;