import { portfolioImages } from "./portfolio/portfolioData";
import PortfolioImage from "./portfolio/PortfolioImage";

const Portfolio = () => {
  return (
    <section 
      id="portfolio" 
      className="py-20 bg-white relative" 
      aria-labelledby="portfolio-heading"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="container">
        <h2 
          id="portfolio-heading"
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-tattoo-black"
        >
          Our <span className="text-tattoo-red">Portfolio</span>
        </h2>

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
      </div>
    </section>
  );
};

export default Portfolio;