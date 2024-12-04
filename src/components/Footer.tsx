import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tattoo-black py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              5<span className="text-tattoo-purple">am</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Premium tattoo studio specializing in custom designs and professional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-tattoo-purple transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-tattoo-purple transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-tattoo-purple transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-4">
              <p className="flex items-center text-gray-400">
                <MapPin className="mr-2" size={20} />
                123 Ink Street, Art District
              </p>
              <p className="flex items-center text-gray-400">
                <Phone className="mr-2" size={20} />
                (555) 123-4567
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="mr-2" size={20} />
                info@5amtattoo.com
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new artists and special offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-tattoo-gray rounded-md focus:outline-none focus:ring-2 focus:ring-tattoo-purple"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-tattoo-purple text-white rounded-md hover:bg-tattoo-purple/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-tattoo-gray text-center text-gray-400">
          <p>&copy; 2024 5am Tattoo Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;