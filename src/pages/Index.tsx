import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TeamSection from "@/components/TeamSection";
import Hours from "@/components/Hours";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import InstagramFeed from "@/components/InstagramFeed";
import ScrollProgress from "@/components/ScrollProgress";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "TattooShop",
      "name": "5am Tattoo Studio",
      "image": "https://example.com/image.jpg",
      "description": "Professional tattoo studio offering custom designs and professional equipment",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kaiapoi",
        "addressCountry": "NZ"
      },
      "openingHours": "Mo-Su 09:00-17:00"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="min-h-screen bg-tattoo-black text-white"
      role="document"
    >
      <SkipToContent />
      <ScrollProgress />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main 
        id="main-content"
        role="main"
        aria-label="Main content"
      >
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <Hero />
        </div>
        
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <About />
        </div>
        
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <Services />
        </div>

        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <InstagramFeed />
        </div>
        
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <TeamSection />
        </div>
        
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <Hours />
        </div>
      </main>
      
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;