import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Maps from "@/components/Maps";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import PageHero from "@/components/PageHero";
import ScrollProgress from "@/components/ScrollProgress";
import CookieConsent from "@/components/CookieConsent";

const ContactPage = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact - 5am Tattoo Studio",
      "description": "Get in touch with 5am Tattoo Studio for appointments and inquiries.",
      "url": "https://5amtattoo.com/contact"
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
      label: "Contact",
      path: "/contact"
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
        aria-label="Contact information and form"
      >
        <PageHero 
          title="Get in Touch" 
          breadcrumbs={breadcrumbs}
          description="Contact us to book your appointment or ask any questions about our services"
        />
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <ContactInfo />
        </div>
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <ContactForm />
        </div>
        <div 
          className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none"
          role="complementary"
          aria-label="Studio location map"
        >
          <Maps />
        </div>
      </main>
      
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default ContactPage;