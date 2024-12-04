const About = () => {
  return (
    <section id="about" className="py-20 bg-tattoo-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Tattoo artist at work"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About <span className="text-tattoo-purple">5am</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to 5am, where artistry meets innovation in the world of tattoos. 
              Established with a passion for creating unique and meaningful body art, 
              our studio has become a cornerstone of creative expression in the community.
            </p>
            <p className="text-gray-300 leading-relaxed">
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