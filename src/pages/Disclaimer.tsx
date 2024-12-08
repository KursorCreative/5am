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
    <div 
      className="min-h-screen bg-tattoo-black"
      role="document"
    >
      <SkipToContent />
      <ScrollProgress />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main 
        id="main-content" 
        className="pt-20"
        role="main"
        aria-label="Disclaimer content"
      >
        <PageHero title="Disclaimer" breadcrumbs={breadcrumbs} />
        <div 
          className="bg-white relative"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="container mx-auto px-4 py-12">
            <div className="prose max-w-none">
              <p className="mb-4 text-tattoo-black">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section aria-labelledby="professional-service">
                <h2 id="professional-service" className="text-2xl font-bold mt-8 mb-4 text-tattoo-black">1. Professional Service</h2>
                <p className="mb-4 text-tattoo-black">
                  While we strive to provide the highest quality tattoo services, results may vary
                  based on individual skin types, aftercare, and other factors.
                </p>
              </section>
              
              <section aria-labelledby="health-considerations">
                <h2 id="health-considerations" className="text-2xl font-bold mt-8 mb-4 text-tattoo-black">2. Health Considerations</h2>
                <p className="mb-4 text-tattoo-black">
                  Tattoos involve inherent risks. Clients must disclose any relevant health conditions
                  and follow all provided aftercare instructions.
                </p>
              </section>
              
              <section aria-labelledby="content-accuracy">
                <h2 id="content-accuracy" className="text-2xl font-bold mt-8 mb-4 text-tattoo-black">3. Content Accuracy</h2>
                <p className="mb-4 text-tattoo-black">
                  While we make every effort to ensure the accuracy of information on our website,
                  we cannot guarantee that all information is complete or current.
                </p>
              </section>
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