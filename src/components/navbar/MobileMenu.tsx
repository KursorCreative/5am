import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-4 bg-tattoo-gray rounded-lg p-4 font-bebas text-lg tracking-wider animate-fade-up">
      <Link
        to="/"
        className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
        onClick={onClose}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
        onClick={onClose}
      >
        About
      </Link>
      <Link
        to="/portfolio"
        className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
        onClick={onClose}
      >
        Portfolio
      </Link>
      <Link
        to="/contact"
        className="block py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
        onClick={onClose}
      >
        Contact Us
      </Link>
      <a 
        href="tel:+15551234567"
        className="flex items-center text-gray-300 hover:text-white transition-colors space-x-2 py-2 focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded group"
        onClick={onClose}
        aria-label="Call us at (555) 123-4567"
      >
        <Phone size={20} className="group-hover:rotate-12 transition-transform duration-300" />
        <span>(555) 123-4567</span>
      </a>
    </div>
  );
};

export default MobileMenu;