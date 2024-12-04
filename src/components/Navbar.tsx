import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-scroll";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-tattoo-black/95 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-2xl font-bold text-white cursor-pointer"
          >
            5<span className="text-tattoo-red">am</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              to="team"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Team
            </Link>
            <Link
              to="hours"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Hours
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Contact Us
            </Link>
            <a 
              href="tel:+15551234567"
              className="flex items-center text-gray-300 hover:text-white transition-colors space-x-2 focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded"
              aria-label="Call us at (555) 123-4567"
            >
              <Phone size={20} />
              <span>(555) 123-4567</span>
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-tattoo-gray rounded-lg p-4">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <Link
              to="team"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Team
            </Link>
            <Link
              to="hours"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Hours
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            <a 
              href="tel:+15551234567"
              className="flex items-center text-gray-300 hover:text-white transition-colors space-x-2 py-2 focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded"
              onClick={closeMenu}
              aria-label="Call us at (555) 123-4567"
            >
              <Phone size={20} />
              <span>(555) 123-4567</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;