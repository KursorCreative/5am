import { ArrowUp } from "lucide-react";
import SocialLinks from "./footer/SocialLinks";
import ContactInfo from "./footer/ContactInfo";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-tattoo-black py-12 relative">
      <button
        onClick={scrollToTop}
        className="absolute right-8 -top-6 bg-tattoo-red hover:bg-tattoo-red/90 text-white p-3 rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 focus:outline-none"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              5<span className="text-tattoo-red">am</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Premium tattoo studio specializing in custom designs and professional service.
            </p>
            <SocialLinks />
          </div>
          
          <ContactInfo />
        </div>
        
        <div className="mt-12 pt-8 border-t border-tattoo-gray">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link 
              to="/portfolio" 
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded transition-colors"
            >
              Portfolio
            </Link>
            <Link 
              to="/privacy-policy" 
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/disclaimer" 
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded transition-colors"
            >
              Disclaimer
            </Link>
          </div>
          
          <p className="text-gray-300 text-center">
            &copy; 2024 5am Tattoo Studio. All rights reserved. | 
            <a 
              href="https://kursorcreative.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded transition-colors underline decoration-tattoo-red/30 hover:decoration-tattoo-red"
              aria-label="Visit Kursor Creative website (opens in new tab)"
            >
              Site by Kursor Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;