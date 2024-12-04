import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    caption: "Where Art Meets Skin",
  },
  {
    url: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28",
    caption: "Custom Designs",
  },
  {
    url: "https://images.unsplash.com/photo-1590246814883-55516d74fec6",
    caption: "Professional Artists",
  },
];

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="h-screen">
              <div className="relative h-full">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${image.url}')`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-tattoo-black to-tattoo-black/70" />
                </div>
                
                <div className="relative container h-full flex flex-col justify-center items-start">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
                    {image.caption}
                    <br />
                    <span className="text-tattoo-purple">5am Studio</span>
                  </h1>
                  <p className="text-lg md:text-xl mb-8 max-w-md animate-fade-up opacity-80">
                    Premium custom tattoos by world-class artists. Open when inspiration strikes.
                  </p>
                  <a
                    href="#contact"
                    className="group inline-flex items-center px-6 py-3 bg-tattoo-purple text-white rounded-md hover:bg-tattoo-purple/90 transition-colors animate-fade-up"
                  >
                    Book Now
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default Hero;