import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const About = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={cn(
        "py-20 bg-white relative transition-opacity duration-500",
        inView ? "opacity-100" : "opacity-0"
      )}
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1542382257-80dedb725088"
              alt="Professional tattoo artist working in our studio"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-tattoo-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              aria-hidden="true"
            />
          </div>
          <div className="space-y-6 animate-fade-up">
            <h2 
              id="about-heading" 
              className="text-3xl md:text-4xl font-bold text-tattoo-black leading-tight"
            >
              About <span className="text-tattoo-red">5am</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Welcome to 5am, where artistry meets innovation in the world of tattoos. 
              Established with a passion for creating unique and meaningful body art, 
              our studio has become a cornerstone of creative expression in the community.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our team of skilled artists brings together years of experience and a 
              deep commitment to their craft, ensuring that each piece tells a story 
              as unique as the individual wearing it. At 5am, we believe in pushing 
              the boundaries of traditional tattooing while maintaining the highest 
              standards of safety and professionalism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;