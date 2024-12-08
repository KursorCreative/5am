import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Carousel } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselImages } from "./hero/carouselData";
import CarouselSlide from "./hero/CarouselSlide";
import SocialLinks from "./hero/SocialLinks";
import ScrollIndicator from "./hero/ScrollIndicator";

const Hero = () => {
  return (
    <section className="relative h-screen" aria-label="Hero section">
      <SocialLinks />

      <Carousel 
        className="w-full h-full" 
        aria-label="Image carousel"
        opts={{
          loop: true,
          align: "start"
        }}
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <CarouselSlide image={image} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="hidden md:block">
          <CarouselPrevious className="left-8 border-2 border-white bg-transparent text-white hover:bg-tattoo-red/90 hover:border-tattoo-red w-16 h-16 transition-all duration-300 backdrop-blur-sm" aria-label="Previous slide">
            <ChevronLeft className="w-10 h-10" aria-hidden="true" />
          </CarouselPrevious>
          <CarouselNext className="right-8 border-2 border-white bg-transparent text-white hover:bg-tattoo-red/90 hover:border-tattoo-red w-16 h-16 transition-all duration-300 backdrop-blur-sm" aria-label="Next slide">
            <ChevronRight className="w-10 h-10" aria-hidden="true" />
          </CarouselNext>
        </div>
      </Carousel>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;