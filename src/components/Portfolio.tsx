import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const portfolioImages = [
  {
    id: 1,
    src: "/placeholder.svg",
    alt: "Traditional style tattoo",
    category: "Traditional",
  },
  {
    id: 2,
    src: "/placeholder.svg",
    alt: "Neo-traditional tattoo art",
    category: "Neo-Traditional",
  },
  {
    id: 3,
    src: "/placeholder.svg",
    alt: "Blackwork style tattoo",
    category: "Blackwork",
  },
  {
    id: 4,
    src: "/placeholder.svg",
    alt: "Japanese style tattoo",
    category: "Japanese",
  },
  {
    id: 5,
    src: "/placeholder.svg",
    alt: "Minimalist tattoo design",
    category: "Minimalist",
  },
  {
    id: 6,
    src: "/placeholder.svg",
    alt: "Watercolor style tattoo",
    category: "Watercolor",
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-[#f4f4f4]">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
          Our <span className="text-tattoo-purple">Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      {image.category}
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl bg-white border-tattoo-purple">
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