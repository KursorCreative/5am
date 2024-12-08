import { CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselSlideProps {
  image: {
    url: string;
    caption: string;
    subcaption: string;
    alt: string;
  };
}

const CarouselSlide = ({ image }: CarouselSlideProps) => {
  return (
    <div className="relative h-screen" role="group" aria-roledescription="slide">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image.url})` }}
        role="img"
        aria-label={image.alt}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-tattoo-black to-tattoo-black/70" aria-hidden="true" />
      </div>
      
      <div className="relative container h-full flex flex-col justify-center items-start py-4 md:py-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 animate-fade-up">
          {image.caption}
          <br />
          <span className="text-tattoo-red">{image.subcaption}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl animate-fade-up">
          Experience the art of tattooing in a modern studio environment.
          Our skilled artists bring your vision to life.
        </p>
        <Button 
          className="border-2 border-white bg-transparent hover:bg-tattoo-red/90 hover:border-tattoo-red text-white px-8 py-6 text-lg animate-fade-up transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:animate-subtle-shake"
          onClick={() => window.location.href = '#contact'}
          aria-label="Book your tattoo - Navigate to contact section"
        >
          <CalendarPlus className="mr-2" />
          Book your tattoo
        </Button>
      </div>
    </div>
  );
};

export default CarouselSlide;