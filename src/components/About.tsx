const About = () => {
  return (
    <section 
      id="about" 
      className="py-20 bg-white relative" 
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
    >
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
            <h2 className="text-3xl md:text-4xl font-bold text-tattoo-black">
              About <span className="text-tattoo-red">5am</span>
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