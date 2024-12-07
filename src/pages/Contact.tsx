import Navbar from "@/components/Navbar";
import Maps from "@/components/Maps";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <SkipToContent />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main id="main-content" className="pt-20">
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <ContactInfo />
        </div>
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <ContactForm />
        </div>
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <Maps />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;