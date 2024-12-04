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
      <div id="home" className="w-full lg:w-screen lg:-ml-[calc((100vw-1280px)/2)] xl:-ml-[calc((100vw-1280px)/2)]">
        <Hero />
      </div>
      <div id="about" className="w-full lg:w-screen lg:-ml-[calc((100vw-1280px)/2)] xl:-ml-[calc((100vw-1280px)/2)]">
        <About />
      </div>
      <div id="services" className="w-full lg:w-screen lg:-ml-[calc((100vw-1280px)/2)] xl:-ml-[calc((100vw-1280px)/2)]">
        <Services />
      </div>
      <div id="portfolio" className="w-full lg:w-screen lg:-ml-[calc((100vw-1280px)/2)] xl:-ml-[calc((100vw-1280px)/2)]">
        <Portfolio />
      </div>
      <div id="team" className="w-full lg:w-screen lg:-ml-[calc((100vw-1280px)/2)] xl:-ml-[calc((100vw-1280px)/2)]">
        <TeamSection />
      </div>
      <div id="hours" className="w-full lg:w-screen lg:-ml-[calc((100vw-1280px)/2)] xl:-ml-[calc((100vw-1280px)/2)]">
        <Hours />
      </div>
      <div id="contact" className="w-full lg:w-screen lg:-ml-[calc((100vw-1280px)/2)] xl:-ml-[calc((100vw-1280px)/2)]">
        <Maps />
        <Footer />
      </div>
    </div>
  );
};

export default Index;