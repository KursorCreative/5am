import { Phone } from "lucide-react";

const PhoneLink = () => {
  return (
    <a 
      href="tel:+15551234567"
      className="flex items-center text-gray-300 hover:text-white transition-colors space-x-2 focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded group"
      aria-label="Call us at (555) 123-4567"
    >
      <Phone size={20} className="group-hover:rotate-12 transition-transform duration-300" />
      <span>(555) 123-4567</span>
    </a>
  );
};

export default PhoneLink;