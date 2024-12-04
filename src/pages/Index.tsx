import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import TeamSection from "@/components/TeamSection";
import Hours from "@/components/Hours";
import Maps from "@/components/Maps";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <Navbar />
      <div id="home" className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)]">
        <Hero />
      </div>
      <div id="about" className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)]">
        <About />
      </div>
      <div id="services" className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)]">
        <Services />
      </div>
      <div id="portfolio" className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)]">
        <Portfolio />
      </div>
      <div id="team" className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)]">
        <TeamSection />
      </div>
      <div id="hours" className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)]">
        <Hours />
      </div>
      <div id="contact" className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)]">
        <Maps />
        <Footer />
      </div>
    </div>
  );
};

export default Index;