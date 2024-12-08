import { Mouse } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-4 sm:px-0" aria-hidden="true">
      <div className="flex flex-col items-center justify-center gap-2 mx-auto">
        <Mouse className="w-6 h-6 text-white animate-pulse" />
        <span className="text-sm text-white font-medium tracking-wider animate-pulse">Scroll Down</span>
      </div>
    </div>
  );
};

export default ScrollIndicator;