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
      <div id="home" className="relative w-full lg:w-screen lg:left-[calc(-50vw+50%)] 3xl:max-w-[2000px] 3xl:mx-auto">
        <Hero />
      </div>
      <div id="about" className="relative w-full lg:w-screen lg:left-[calc(-50vw+50%)] 3xl:max-w-[2000px] 3xl:mx-auto">
        <About />
      </div>
      <div id="services" className="relative w-full lg:w-screen lg:left-[calc(-50vw+50%)] 3xl:max-w-[2000px] 3xl:mx-auto">
        <Services />
      </div>
      <div id="portfolio" className="relative w-full lg:w-screen lg:left-[calc(-50vw+50%)] 3xl:max-w-[2000px] 3xl:mx-auto">
        <Portfolio />
      </div>
      <div id="team" className="relative w-full lg:w-screen lg:left-[calc(-50vw+50%)] 3xl:max-w-[2000px] 3xl:mx-auto">
        <TeamSection />
      </div>
      <div id="hours" className="relative w-full lg:w-screen lg:left-[calc(-50vw+50%)] 3xl:max-w-[2000px] 3xl:mx-auto">
        <Hours />
      </div>
      <div id="contact" className="relative w-full lg:w-screen lg:left-[calc(-50vw+50%)] 3xl:max-w-[2000px] 3xl:mx-auto">
        <Maps />
        <Footer />
      </div>
    </div>
  );
};

export default Index;