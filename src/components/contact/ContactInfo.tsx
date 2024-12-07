import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-tattoo-gray/20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bebas text-center mb-12">
          Get in Touch
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Email */}
          <div className="bg-tattoo-gray/30 p-6 rounded-lg hover:bg-tattoo-gray/40 transition-colors group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-tattoo-red rounded-full group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bebas">Email Us</h2>
              <a 
                href="mailto:info@5amtattoo.com"
                className="text-gray-300 hover:text-white transition-colors underline decoration-tattoo-red/30 hover:decoration-tattoo-red"
              >
                info@5amtattoo.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-tattoo-gray/30 p-6 rounded-lg hover:bg-tattoo-gray/40 transition-colors group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-tattoo-red rounded-full group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bebas">Call Us</h2>
              <a 
                href="tel:+15551234567"
                className="text-gray-300 hover:text-white transition-colors underline decoration-tattoo-red/30 hover:decoration-tattoo-red"
              >
                (555) 123-4567
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="bg-tattoo-gray/30 p-6 rounded-lg hover:bg-tattoo-gray/40 transition-colors group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-tattoo-red rounded-full group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bebas">Visit Us</h2>
              <a 
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors underline decoration-tattoo-red/30 hover:decoration-tattoo-red"
              >
                123 Ink Street, Art District
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-tattoo-gray/30 p-6 rounded-lg hover:bg-tattoo-gray/40 transition-colors group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-tattoo-red rounded-full group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bebas">Hours</h2>
              <div className="text-gray-300">
                <p>Mon-Fri: 10am - 8pm</p>
                <p>Sat: 11am - 6pm</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;