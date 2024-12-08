import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true as these are essential
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    const consentTimestamp = localStorage.getItem("cookieConsentTimestamp");
    const savedPreferences = localStorage.getItem("cookiePreferences");
    const currentTime = new Date().getTime();
    const sevenDays = 7 * 24 * 60 * 60 * 1000;

    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }

    if (!consent || (consentTimestamp && currentTime - parseInt(consentTimestamp) > sevenDays)) {
      setIsVisible(true);
      localStorage.removeItem("cookieConsent");
      localStorage.removeItem("cookieConsentTimestamp");
      localStorage.removeItem("cookiePreferences");
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentTimestamp", new Date().getTime().toString());
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const rejectAll = () => {
    const allRejected = {
      necessary: true, // Necessary cookies are always enabled
      functional: false,
      marketing: false,
    };
    setPreferences(allRejected);
    savePreferences(allRejected);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed bottom-0 left-0 right-0 bg-tattoo-gray/95 backdrop-blur-sm p-4 shadow-lg z-50 animate-fade-up"
        role="alert"
        aria-live="polite"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm md:text-base">
            We use cookies to enhance your experience. You can customize your cookie preferences.{" "}
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
              onClick={() => setShowPreferences(true)}
              variant="outline"
              className="text-white border-white hover:bg-tattoo-gray/50"
            >
              Cookie Settings
            </Button>
            <Button
              onClick={acceptAll}
              className="bg-tattoo-red hover:bg-tattoo-red/90 text-white"
            >
              Accept All
            </Button>
            <Button
              onClick={rejectAll}
              variant="ghost"
              className="text-white hover:text-tattoo-red"
            >
              Reject All
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="bg-tattoo-black text-white border-tattoo-gray">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bebas">Cookie Preferences</DialogTitle>
            <DialogDescription className="text-white/80">
              Customize your cookie preferences below. Necessary cookies are required for basic website functionality.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-white">Necessary Cookies</Label>
                <p className="text-sm text-white/60">Required for the website to function properly</p>
              </div>
              <Switch checked={true} disabled />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-white">Functional Cookies</Label>
                <p className="text-sm text-white/60">Enable enhanced website features and preferences</p>
              </div>
              <Switch
                checked={preferences.functional}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, functional: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-white">Marketing Cookies</Label>
                <p className="text-sm text-white/60">Help us improve through analytics and marketing</p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, marketing: checked }))
                }
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <Button
              variant="ghost"
              onClick={() => setShowPreferences(false)}
              className="text-white hover:text-tattoo-red"
            >
              Cancel
            </Button>
            <Button
              onClick={saveCustomPreferences}
              className="bg-tattoo-red hover:bg-tattoo-red/90 text-white"
            >
              Save Preferences
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;