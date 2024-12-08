import { memo } from "react";
import { portfolioImages } from "./portfolioData";
import PortfolioImage from "./PortfolioImage";

const PortfolioGrid = memo(() => {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      role="list"
      aria-label="Portfolio gallery"
    >
      {portfolioImages.map((image) => (
        <PortfolioImage
          key={image.id}
          src={image.src}
          alt={image.alt}
          category={image.category}
        />
      ))}
    </div>
  );
});

PortfolioGrid.displayName = 'PortfolioGrid';

export default PortfolioGrid;