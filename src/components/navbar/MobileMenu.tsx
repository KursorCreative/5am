import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <nav 
      className="md:hidden mt-4 bg-tattoo-gray rounded-lg p-4 font-bebas text-lg tracking-wider animate-fade-up"
      aria-label="Mobile navigation"
    >
      <Link
        to="/"
        className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 focus:ring-offset-tattoo-gray rounded px-2"
        onClick={onClose}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 focus:ring-offset-tattoo-gray rounded px-2"
        onClick={onClose}
      >
        About
      </Link>
      <Link
        to="/portfolio"
        className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 focus:ring-offset-tattoo-gray rounded px-2"
        onClick={onClose}
      >
        Portfolio
      </Link>
      <Link
        to="/contact"
        className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 focus:ring-offset-tattoo-gray rounded px-2"
        onClick={onClose}
      >
        Contact Us
      </Link>
      <a 
        href="tel:+15551234567"
        className="flex items-center text-gray-300 hover:text-white transition-colors space-x-2 py-2 focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 focus:ring-offset-tattoo-gray rounded px-2 group"
        onClick={onClose}
        aria-label="Call us at (555) 123-4567"
      >
        <Phone size={20} className="group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
        <span>(555) 123-4567</span>
      </a>
    </nav>
  );
};

export default MobileMenu;