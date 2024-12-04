import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h4 className="text-lg font-bold mb-4 text-gray-100">Contact</h4>
      <div className="space-y-4">
        <p className="flex items-center text-gray-300">
          <MapPin className="mr-2" size={20} />
          <a 
            href="https://maps.google.com" 
            className="hover:text-white focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded transition-colors underline decoration-tattoo-red/30 hover:decoration-tattoo-red"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Find us at 123 Ink Street, Art District (opens in new tab)"
          >
            123 Ink Street, Art District
          </a>
        </p>
        <p className="flex items-center text-gray-300">
          <Phone className="mr-2" size={20} />
          <a 
            href="tel:+15551234567" 
            className="hover:text-white focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded transition-colors underline decoration-tattoo-red/30 hover:decoration-tattoo-red"
            aria-label="Call us at (555) 123-4567"
          >
            (555) 123-4567
          </a>
        </p>
        <p className="flex items-center text-gray-300">
          <Mail className="mr-2" size={20} />
          <a 
            href="mailto:info@5amtattoo.com" 
            className="hover:text-white focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 p-1 rounded transition-colors underline decoration-tattoo-red/30 hover:decoration-tattoo-red"
            aria-label="Email us at info@5amtattoo.com"
          >
            info@5amtattoo.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;