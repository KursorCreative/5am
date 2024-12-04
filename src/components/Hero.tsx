import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Carousel } from "@/components/ui/carousel";
import { Mouse, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28",
    caption: "Welcome to",
    subcaption: "5am Tattoo Studio",
  },
  {
    url: "https://images.unsplash.com/photo-1590246814883-55516d74fec6",
    caption: "Artistic",
    subcaption: "Expression",
  },
  {
    url: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28",
    caption: "Custom",
    subcaption: "Designs",
  },
];

const Hero = () => {
  return (
    <section className="relative h-screen">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative h-screen">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-tattoo-black to-tattoo-black/70" />
              </div>
              
              <div className="relative container h-full flex flex-col justify-center items-start py-14">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
                  {image.caption}
                  <br />
                  <span className="text-tattoo-red">{image.subcaption}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl animate-fade-up">
                  Experience the art of tattooing in a modern studio environment.
                  Our skilled artists bring your vision to life.
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 bg-tattoo-black text-white hover:bg-tattoo-gray w-16 h-16">
          <ChevronLeft className="w-12 h-12" />
        </CarouselPrevious>
        <CarouselNext className="right-4 bg-tattoo-black text-white hover:bg-tattoo-gray w-16 h-16">
          <ChevronRight className="w-12 h-12" />
        </CarouselNext>
      </Carousel>

      {/* Scroll Mouse Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <Mouse className="w-6 h-6 text-white" />
          <span className="text-sm text-white">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;