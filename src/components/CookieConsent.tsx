import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-tattoo-gray/95 backdrop-blur-sm p-4 shadow-lg z-50 animate-fade-up"
      role="alert"
      aria-live="polite"
    >
      <div className="container mx-auto flex items-center justify-between gap-4">
        <p className="text-white text-sm md:text-base">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
          <Link 
            to="/privacy-policy" 
            className="text-tattoo-red hover:text-tattoo-red/80 underline focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 rounded"
            onClick={(e) => e.stopPropagation()}
          >
            Read our Privacy Policy
          </Link>
        </p>
        <div className="flex items-center gap-2">
          <Button
            onClick={acceptCookies}
            className="bg-tattoo-red hover:bg-tattoo-red/90 text-white"
          >
            Accept
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-tattoo-red"
            aria-label="Close cookie consent"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;