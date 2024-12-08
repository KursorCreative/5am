import { useState, memo, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import PortfolioImageDialog from "./PortfolioImageDialog";
import PortfolioImageLoader from "./PortfolioImageLoader";

interface PortfolioImageProps {
  src: string;
  alt: string;
  category: string;
}

const PortfolioImage = memo(({ src, alt, category }: PortfolioImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '100px'
  });

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    console.error(`Failed to load ${category} image`);
  }, [category]);

  return (
    <PortfolioImageDialog src={src} alt={alt}>
      <div 
        className="relative group cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
        role="listitem"
        tabIndex={0}
        aria-label={`View ${category} tattoo design`}
        ref={ref}
      >
        {inView && (
          <>
            <PortfolioImageLoader 
              src={src} 
              alt={alt} 
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-tattoo-black/80 via-tattoo-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 ${
                isLoaded ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
              aria-hidden="true"
            >
              <span className="text-white text-lg font-semibold tracking-wider">
                {category}
              </span>
            </div>
          </>
        )}
      </div>
    </PortfolioImageDialog>
  );
});

PortfolioImage.displayName = 'PortfolioImage';

export default PortfolioImage;