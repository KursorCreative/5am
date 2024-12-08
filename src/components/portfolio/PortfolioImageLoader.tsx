import { memo } from "react";

interface PortfolioImageLoaderProps {
  src: string;
  alt: string;
  onLoad: () => void;
  onError: () => void;
}

const PortfolioImageLoader = memo(({ src, alt, onLoad, onError }: PortfolioImageLoaderProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      loading="lazy"
      onLoad={onLoad}
      onError={onError}
    />
  );
});

PortfolioImageLoader.displayName = 'PortfolioImageLoader';

export default PortfolioImageLoader;