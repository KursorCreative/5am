import { Instagram, Facebook, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const getMailchimpClientId = () => {
    return localStorage.getItem("mailchimpClientId");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const clientId = getMailchimpClientId();
    if (!clientId) {
      toast({
        variant: "destructive",
        title: "Configuration Error",
        description: "Please set up your Mailchimp Client ID first"
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://us21.api.mailchimp.com/3.0/lists/${clientId}/members`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed"
        })
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      toast({
        title: "Success!",
        description: "You've been successfully subscribed to our newsletter."
      });
      setEmail("");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to subscribe. Please try again later."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-tattoo-black py-12 relative">
      <button
        onClick={scrollToTop}
        className="absolute right-8 -top-6 bg-tattoo-red hover:bg-tattoo-red/90 text-white p-3 rounded-full transition-all duration-300 hover:transform hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2 bg-tattoo-gray rounded-md focus:outline-none focus:ring-2 focus:ring-tattoo-purple"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 bg-tattoo-purple text-white rounded-md hover:bg-tattoo-purple/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              <button
                type="button"
                onClick={() => {
                  const clientId = prompt("Enter your Mailchimp Client ID:");
                  if (clientId) {
                    localStorage.setItem("mailchimpClientId", clientId);
                    toast({
                      title: "Success",
                      description: "Mailchimp Client ID has been saved"
                    });
                  }
                }}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Configure Mailchimp
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
