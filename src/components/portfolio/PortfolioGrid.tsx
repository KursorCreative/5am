import { useInView } from "react-intersection-observer";
import PortfolioImage from "./PortfolioImage";
import { portfolioImages } from "./portfolioData";

const PortfolioGrid = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div 
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
        inView ? 'animate-fade-in' : 'opacity-0'
      }`}
      role="list"
      aria-label="Portfolio gallery"
      ref={ref}
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
};

export default PortfolioGrid;