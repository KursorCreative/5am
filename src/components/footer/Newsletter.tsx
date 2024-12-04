import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Newsletter subscription logic here
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

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
      <h4 className="text-xl sm:text-2xl font-bebas tracking-wider mb-4 text-gray-100">Newsletter</h4>
      <p className="text-sm sm:text-base text-gray-300 mb-6">
        Subscribe to get updates on new artists and special offers.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-2.5 bg-tattoo-gray text-white rounded-md 
                     border border-transparent focus:border-tattoo-red
                     focus:outline-none focus:ring-2 focus:ring-tattoo-red/20
                     placeholder:text-gray-400 text-sm sm:text-base"
            aria-label="Email address for newsletter"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2.5 bg-tattoo-red text-white rounded-md 
                     hover:bg-tattoo-red/90 transition-colors 
                     disabled:opacity-50 disabled:cursor-not-allowed
                     focus:outline-none focus:ring-2 focus:ring-tattoo-red 
                     focus:ring-offset-2 focus:ring-offset-tattoo-black
                     text-sm sm:text-base font-medium whitespace-nowrap"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;