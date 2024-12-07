import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const portfolioImages = [
  {
    id: 1,
    src: "/IMG_6143.jpeg",
    alt: "Detailed tattoo artwork showcasing intricate linework",
    category: "Traditional",
  },
  {
    id: 2,
    src: "/IMG_7029.jpeg",
    alt: "Neo-traditional style tattoo with bold colors",
    category: "Neo-Traditional",
  },
  {
    id: 3,
    src: "/IMG_7799.jpeg",
    alt: "Blackwork style tattoo with detailed patterns",
    category: "Blackwork",
  },
  {
    id: 4,
    src: "/IMG_8939.jpeg",
    alt: "Japanese inspired tattoo design",
    category: "Japanese",
  },
  {
    id: 5,
    src: "/IMG_9410.jpeg",
    alt: "Minimalist tattoo design",
    category: "Minimalist",
  },
  {
    id: 6,
    src: "/IMG_9415.jpeg",
    alt: "Watercolor style tattoo artwork",
    category: "Watercolor",
  },
];

const Portfolio = () => {
  return (
    <section 
      id="portfolio" 
      className="py-20 bg-white relative" 
      aria-label="Portfolio gallery"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-tattoo-black">
          Our <span className="text-tattoo-red">Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {portfolioImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  role="listitem"
                  tabIndex={0}
                  aria-label={`View ${image.category} tattoo design`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tattoo-black/80 via-tattoo-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white text-lg font-semibold tracking-wider">
                      {image.category}
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent 
                className="max-w-3xl bg-white border-tattoo-red"
                aria-label={`${image.category} tattoo design - enlarged view`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;