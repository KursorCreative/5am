import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import PageHero from "@/components/PageHero";
import ScrollProgress from "@/components/ScrollProgress";
import CookieConsent from "@/components/CookieConsent";

const Disclaimer = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Disclaimer - 5am Tattoo Studio",
      "description": "Read our disclaimer and terms of service for 5am Tattoo Studio.",
      "url": "https://5amtattoo.com/disclaimer"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const breadcrumbs = [
    {
      label: "Disclaimer",
      path: "/disclaimer"
    }
  ];

  return (
    <div className="min-h-screen bg-tattoo-black">
      <SkipToContent />
      <ScrollProgress />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main id="main-content" className="pt-20">
        <PageHero title="Disclaimer" breadcrumbs={breadcrumbs} />
        <div 
          className="bg-white bg-opacity-95 relative"
          style={{
            backgroundImage: "url('/tattoo.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundBlendMode: "overlay"
          }}
        >
          <div className="container mx-auto px-4 py-12">
            <div className="prose max-w-none">
              <p className="mb-4 text-tattoo-black">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-tattoo-black">1. Professional Service</h2>
              <p className="mb-4 text-tattoo-black">
                While we strive to provide the highest quality tattoo services, results may vary
                based on individual skin types, aftercare, and other factors.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-tattoo-black">2. Health Considerations</h2>
              <p className="mb-4 text-tattoo-black">
                Tattoos involve inherent risks. Clients must disclose any relevant health conditions
                and follow all provided aftercare instructions.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-tattoo-black">3. Content Accuracy</h2>
              <p className="mb-4 text-tattoo-black">
                While we make every effort to ensure the accuracy of information on our website,
                we cannot guarantee that all information is complete or current.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Disclaimer;