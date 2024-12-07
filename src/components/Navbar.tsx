import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinkClasses = "relative text-gray-300 hover:text-white transition-colors cursor-pointer group";
  const navLinkAfterClasses = "absolute -bottom-1 left-0 w-full h-0.5 bg-tattoo-red transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100";

  return (
    <nav className="bg-tattoo-black/95 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-white cursor-pointer hover:text-tattoo-red transition-colors"
          >
            5<span className="text-tattoo-red">am</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 font-bebas text-lg tracking-wider">
            <Link to="/" className={navLinkClasses}>
              Home
              <span className={navLinkAfterClasses}></span>
            </Link>
            <Link to="/about" className={navLinkClasses}>
              About
              <span className={navLinkAfterClasses}></span>
            </Link>
            <Link to="/portfolio" className={navLinkClasses}>
              Portfolio
              <span className={navLinkAfterClasses}></span>
            </Link>
            <Link to="/contact" className={navLinkClasses}>
              Contact Us
              <span className={navLinkAfterClasses}></span>
            </Link>
            <a 
              href="tel:+15551234567"
              className="flex items-center text-gray-300 hover:text-white transition-colors space-x-2 focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded group"
              aria-label="Call us at (555) 123-4567"
            >
              <Phone size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>(555) 123-4567</span>
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded transition-transform hover:scale-105"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-tattoo-gray rounded-lg p-4 font-bebas text-lg tracking-wider animate-fade-up">
            <Link
              to="/"
              className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            <a 
              href="tel:+15551234567"
              className="flex items-center text-gray-300 hover:text-white transition-colors space-x-2 py-2 focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded group"
              onClick={closeMenu}
              aria-label="Call us at (555) 123-4567"
            >
              <Phone size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>(555) 123-4567</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;