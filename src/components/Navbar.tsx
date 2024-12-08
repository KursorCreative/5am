import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "./navbar/Logo";
import NavLink from "./navbar/NavLink";
import PhoneLink from "./navbar/PhoneLink";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-tattoo-black/95 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="hidden md:flex items-center space-x-8 font-bebas text-lg tracking-wider">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <PhoneLink />
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded transition-transform hover:scale-105"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;