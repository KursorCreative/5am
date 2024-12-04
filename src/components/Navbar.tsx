import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-tattoo-black/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-space font-bold text-white">
          5<span className="text-tattoo-purple">am</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-tattoo-purple transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-tattoo-black/90 backdrop-blur-sm py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-tattoo-purple transition-colors"
                onClick={() => setIsOpen(false)}
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