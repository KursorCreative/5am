import { Instagram, Facebook, Mail } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a 
        href="#" 
        className="text-gray-300 hover:text-tattoo-red transition-colors focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded-full"
        aria-label="Follow us on Instagram"
      >
        <Instagram size={24} />
      </a>
      <a 
        href="#" 
        className="text-gray-300 hover:text-tattoo-red transition-colors focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded-full"
        aria-label="Follow us on Facebook"
      >
        <Facebook size={24} />
      </a>
      <a 
        href="#" 
        className="text-gray-300 hover:text-tattoo-red transition-colors focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded-full"
        aria-label="Send us an email"
      >
        <Mail size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;