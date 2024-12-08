import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import PageHero from "@/components/PageHero";

const PortfolioPage = () => {
  const breadcrumbs = [
    {
      label: "Portfolio",
      path: "/portfolio"
    }
  ];

  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <SkipToContent />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main id="main-content" className="pt-20">
        <PageHero title="Our Work" breadcrumbs={breadcrumbs} />
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <Portfolio />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;