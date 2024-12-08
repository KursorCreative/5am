import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useInView } from "react-intersection-observer";

interface PortfolioImageProps {
  src: string;
  alt: string;
  category: string;
}

const PortfolioImage = ({ src, alt, category }: PortfolioImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className="relative group cursor-pointer overflow-hidden rounded-lg"
          role="listitem"
          tabIndex={0}
          aria-label={`View ${category} tattoo design`}
          ref={ref}
        >
          {inView && (
            <>
              <div 
                className={`w-full h-64 bg-tattoo-gray/20 ${
                  !isLoaded ? 'block' : 'hidden'
                }`}
                aria-hidden="true"
              />
              <img
                src={src}
                alt={alt}
                className={`w-full h-64 object-cover transition-all duration-300 group-hover:scale-110 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-tattoo-black/80 via-tattoo-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                aria-hidden="true"
              >
                <span className="text-white text-lg font-semibold tracking-wider">
                  {category}
                </span>
              </div>
            </>
          )}
        </div>
      </DialogTrigger>
      <DialogContent 
        className="max-w-3xl bg-white border-tattoo-red"
        aria-label={`${category} tattoo design - enlarged view`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[80vh] object-contain"
        />
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioImage;