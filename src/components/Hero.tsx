import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Carousel } from "@/components/ui/carousel";
import { Mouse, ChevronLeft, ChevronRight, Instagram, Mail, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  {
    url: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28",
    caption: "Welcome to",
    subcaption: "5am Tattoo Studio",
    alt: "Professional tattoo artist working in studio"
  },
  {
    url: "https://images.unsplash.com/photo-1590246814883-55516d74fec6",
    caption: "Artistic",
    subcaption: "Expression",
    alt: "Close-up of detailed tattoo artwork"
  },
  {
    url: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28",
    caption: "Custom",
    subcaption: "Designs",
    alt: "Tattoo artist creating custom design"
  },
];

const Hero = () => {
  return (
    <section className="relative h-screen" aria-label="Hero section">
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-6 pt-[250px]" aria-label="Social media links">
        <a 
          href="#" 
          className="text-white hover:text-tattoo-red transition-colors duration-300 hover:scale-110 transform hover:rotate-6 flex items-center gap-2"
          aria-label="Follow us on Instagram"
        >
          <Instagram size={24} className="filter drop-shadow-lg" aria-hidden="true" />
          <span className="text-sm font-medium">Follow us</span>
        </a>
        <a 
          href="#" 
          className="text-white hover:text-tattoo-red transition-colors duration-300 hover:scale-110 transform hover:rotate-6 flex items-center gap-2"
          aria-label="Contact us via email"
        >
          <Mail size={24} className="filter drop-shadow-lg" aria-hidden="true" />
          <span className="text-sm font-medium">Email us</span>
        </a>
      </div>

      <Carousel 
        className="w-full h-full" 
        aria-label="Image carousel"
        opts={{
          loop: true,
          align: "start"
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative h-screen" role="group" aria-roledescription="slide">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
                role="img"
                aria-label={image.alt}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-tattoo-black to-tattoo-black/70" aria-hidden="true" />
              </div>
              
              <div className="relative container h-full flex flex-col justify-center items-start py-4 md:py-8">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
                  {image.caption}
                  <br />
                  <span className="text-tattoo-red">{image.subcaption}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl animate-fade-up">
                  Experience the art of tattooing in a modern studio environment.
                  Our skilled artists bring your vision to life.
                </p>
                <Button 
                  className="border-2 border-white bg-transparent hover:bg-tattoo-red/90 hover:border-tattoo-red text-white px-8 py-6 text-lg animate-fade-up transition-all duration-300"
                  onClick={() => window.location.href = '#contact'}
                  aria-label="Book your tattoo - Navigate to contact section"
                >
                  <CalendarPlus className="mr-2" />
                  Book your tattoo
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-8 border-2 border-white bg-transparent text-white hover:bg-tattoo-red/90 hover:border-tattoo-red w-16 h-16 transition-all duration-300 backdrop-blur-sm" aria-label="Previous slide">
          <ChevronLeft className="w-10 h-10" aria-hidden="true" />
        </CarouselPrevious>
        <CarouselNext className="right-8 border-2 border-white bg-transparent text-white hover:bg-tattoo-red/90 hover:border-tattoo-red w-16 h-16 transition-all duration-300 backdrop-blur-sm" aria-label="Next slide">
          <ChevronRight className="w-10 h-10" aria-hidden="true" />
        </CarouselNext>
      </Carousel>

      {/* Scroll Mouse Icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-4 sm:px-0" aria-hidden="true">
        <div className="flex flex-col items-center justify-center gap-2 mx-auto">
          <Mouse className="w-6 h-6 text-white animate-pulse" />
          <span className="text-sm text-white font-medium tracking-wider animate-pulse">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;