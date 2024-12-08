import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Error = () => {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div 
      className="min-h-screen bg-tattoo-black flex items-center justify-center p-4"
      role="main"
      aria-labelledby="error-title"
    >
      <div className="text-center space-y-6">
        <h1 
          id="error-title"
          className="text-4xl md:text-6xl font-bebas text-white mb-4"
        >
          Oops! Something went wrong
        </h1>
        
        <p className="text-gray-300 text-lg font-montserrat mb-8">
          {error?.statusText || error?.message || "An unexpected error occurred"}
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-tattoo-red hover:bg-red-700 text-white font-montserrat py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 focus:ring-offset-tattoo-black"
          aria-label="Return to homepage"
        >
          <Home className="w-5 h-5" aria-hidden="true" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default Error;