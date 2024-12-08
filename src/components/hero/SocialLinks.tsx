import { Instagram, Mail } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-6 pt-[250px]" aria-label="Social media links">
      <a 
        href="#" 
        className="text-white hover:text-tattoo-red transition-colors duration-300 hover:scale-110 transform hover:rotate-6 flex items-center gap-2"
        aria-label="Follow us on Instagram"
      >
        <Instagram size={24} className="filter drop-shadow-lg" aria-hidden="true" />
        <span className="text-sm font-medium">Follow us</span>
      </a>
      <a 
        href="#" 
        className="text-white hover:text-tattoo-red transition-colors duration-300 hover:scale-110 transform hover:rotate-6 flex items-center gap-2"
        aria-label="Contact us via email"
      >
        <Mail size={24} className="filter drop-shadow-lg" aria-hidden="true" />
        <span className="text-sm font-medium">Email us</span>
      </a>
    </div>
  );
};

export default SocialLinks;