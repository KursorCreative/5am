const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542382257-80dedb725088"
              alt="Tattoo artist working on a detailed design"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              About <span className="text-tattoo-purple">5am</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to 5am, where artistry meets innovation in the world of tattoos. 
              Established with a passion for creating unique and meaningful body art, 
              our studio has become a cornerstone of creative expression in the community.
            </p>
            <p className="text-gray-600 leading-relaxed">
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