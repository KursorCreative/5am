import { Link } from "react-scroll";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-tattoo-black/95 backdrop-blur-sm py-4 border-b-2 border-tattoo-red">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center transition-all duration-300 hover:bg-tattoo-gray/20 p-2 rounded-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-3xl font-bebas tracking-wider text-white hover:text-tattoo-red transition-colors"
          >
            5am
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-lg font-bebas tracking-wide text-white hover:text-tattoo-red transition-colors"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-lg font-bebas tracking-wide text-white hover:text-tattoo-red transition-colors"
            >
              Services
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-lg font-bebas tracking-wide text-white hover:text-tattoo-red transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="team"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-lg font-bebas tracking-wide text-white hover:text-tattoo-red transition-colors"
            >
              Team
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-lg font-bebas tracking-wide text-white hover:text-tattoo-red transition-colors flex items-center gap-2"
            >
              Contact Us
              <Phone className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;