import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import TeamSection from "@/components/TeamSection";
import PageHero from "@/components/PageHero";
import ScrollProgress from "@/components/ScrollProgress";
import CookieConsent from "@/components/CookieConsent";

const AboutPage = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About - 5am Tattoo Studio",
      "description": "Learn about our talented artists and the story behind 5am Tattoo Studio.",
      "url": "https://5amtattoo.com/about",
      "mainEntity": {
        "@type": "TattooShop",
        "name": "5am Tattoo Studio",
        "description": "Premium tattoo studio specializing in custom designs and professional service.",
        "image": "https://example.com/studio-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kaiapoi",
          "addressCountry": "NZ"
        }
      }
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
      label: "About",
      path: "/about"
    }
  ];

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
        className="pt-20"
        role="main"
        aria-label="About us content"
      >
        <PageHero 
          title="About Us" 
          breadcrumbs={breadcrumbs}
          description="Learn about our talented artists and the story behind 5am Tattoo Studio"
        />
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <About />
        </div>
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <TeamSection />
        </div>
      </main>
      
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default AboutPage;