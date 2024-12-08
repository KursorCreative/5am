import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import TeamSection from "@/components/TeamSection";
import PageHero from "@/components/PageHero";

const AboutPage = () => {
  const breadcrumbs = [
    {
      label: "About",
      path: "/about"
    }
  ];

  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <SkipToContent />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main id="main-content" className="pt-20">
        <PageHero title="About Us" breadcrumbs={breadcrumbs} />
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <About />
        </div>
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <TeamSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;