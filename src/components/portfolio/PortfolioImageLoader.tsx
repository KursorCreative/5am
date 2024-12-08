import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface PortfolioImageLoaderProps {
  src: string;
  alt: string;
  onLoad: () => void;
}

const PortfolioImageLoader = ({ src, alt, onLoad }: PortfolioImageLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { data: imageSrc } = useQuery({
    queryKey: ['portfolioImage', src],
    queryFn: async () => {
      return new Promise<string>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setIsLoaded(true);
          onLoad();
          resolve(src);
        };
      });
    },
    staleTime: Infinity,
  });

  if (!imageSrc) {
    return (
      <div 
        className="w-full h-64 bg-tattoo-gray/20 animate-pulse"
        aria-hidden="true"
      />
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`w-full h-64 object-cover transition-all duration-300 group-hover:scale-110 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      loading="lazy"
      decoding="async"
    />
  );
};

export default PortfolioImageLoader;