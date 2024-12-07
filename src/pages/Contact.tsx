import Navbar from "@/components/Navbar";
import Maps from "@/components/Maps";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <SkipToContent />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main id="main-content" className="pt-20">
        <Maps />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;