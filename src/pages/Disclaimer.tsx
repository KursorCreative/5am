import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <SkipToContent />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main id="main-content" className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
        <div className="prose prose-invert max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Professional Service</h2>
          <p className="mb-4">
            While we strive to provide the highest quality tattoo services, results may vary
            based on individual skin types, aftercare, and other factors.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Health Considerations</h2>
          <p className="mb-4">
            Tattoos involve inherent risks. Clients must disclose any relevant health conditions
            and follow all provided aftercare instructions.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Content Accuracy</h2>
          <p className="mb-4">
            While we make every effort to ensure the accuracy of information on our website,
            we cannot guarantee that all information is complete or current.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;