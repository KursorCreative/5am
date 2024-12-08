import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import { Separator } from "@/components/ui/separator";
import PageHero from "@/components/PageHero";
import ScrollProgress from "@/components/ScrollProgress";
import CookieConsent from "@/components/CookieConsent";

const PrivacyPolicy = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - 5am Tattoo Studio",
      "description": "Read our privacy policy and learn how we protect your data at 5am Tattoo Studio.",
      "url": "https://5amtattoo.com/privacy-policy"
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
      label: "Privacy Policy",
      path: "/privacy-policy"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-tattoo-black">
      <SkipToContent />
      <ScrollProgress />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main id="main-content" className="pt-20">
        <PageHero title="Privacy Policy" breadcrumbs={breadcrumbs} />
        <div 
          className="container mx-auto px-4 py-12"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        >
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
      <CookieConsent />
    </div>
  );
};

export default PrivacyPolicy;