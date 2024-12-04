import { Paintbrush, WandSparkles, Clock, Users } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Custom Designs",
    description: "Unique tattoos tailored to your vision and style.",
  },
  {
    icon: WandSparkles,
    title: "Professional Equipment",
    description: "Top-quality, sterilized equipment for your safety.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Early morning and late night appointments available.",
  },
  {
    icon: Users,
    title: "Expert Artists",
    description: "Skilled professionals with years of experience.",
  },
];

const Services = () => {
  return (
    <section 
      id="services" 
      className="py-20 bg-[#f4f4f4] relative before:content-[''] before:absolute before:top-0 
                 before:left-0 before:right-0 before:h-4 
                 before:bg-gradient-to-r before:from-transparent before:via-tattoo-red/70 before:to-transparent
                 after:content-[''] after:absolute after:bottom-0 
                 after:left-0 after:right-0 after:h-4 
                 after:bg-gradient-to-r after:from-transparent after:via-tattoo-red/70 after:to-transparent"
    >
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-tattoo-black">
          Our <span className="text-tattoo-red">Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-white rounded-lg hover:neon-border transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-tattoo-red mb-4" />
              <h3 className="text-xl font-bold mb-2 text-tattoo-black">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;