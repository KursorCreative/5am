import { Paintbrush, Needle, Clock, Users } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Custom Designs",
    description: "Unique tattoos tailored to your vision and style.",
  },
  {
    icon: Needle,
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
    <section id="services" className="py-20 bg-tattoo-black">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our <span className="text-tattoo-purple">Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-tattoo-gray rounded-lg hover:neon-border transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-tattoo-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;