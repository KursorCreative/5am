import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <SkipToContent />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main id="main-content" className="pt-20">
        <Portfolio />
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;