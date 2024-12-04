import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = (id: string) => {
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Team",
    "Hours",
    "Contact"
  ];

  return (
    <nav className="fixed w-full bg-tattoo-black/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-space font-bold text-white">
          5<span className="text-tattoo-red">am</span>
        </a>
        
        <div className="hidden lg:flex space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.toLowerCase());
              }}
              className={`text-white transition-all duration-200 border-b-2 ${
                activeLink === item.toLowerCase()
                  ? "border-tattoo-red text-tattoo-red"
                  : "border-transparent hover:border-tattoo-red hover:text-tattoo-red"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div 
          className="lg:hidden absolute top-full left-0 w-full bg-tattoo-black/90 backdrop-blur-sm py-4"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.toLowerCase());
                }}
                className={`text-white transition-all duration-200 border-b-2 ${
                  activeLink === item.toLowerCase()
                    ? "border-tattoo-red text-tattoo-red"
                    : "border-transparent hover:border-tattoo-red hover:text-tattoo-red"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;