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
    <section id="services" className="py-20 bg-[#f4f4f4] relative">
      {/* Top Paint Divider */}
      <svg
        className="absolute top-0 left-0 w-full h-8"
        preserveAspectRatio="none"
        viewBox="0 0 1200 32"
      >
        <path
          d="M0,0 Q300,32 600,16 T1200,0 V32 H0 Z"
          fill="rgba(178, 34, 34, 0.7)"
          className="opacity-70"
        />
        <path
          d="M0,8 Q400,32 600,24 T1200,8 V32 H0 Z"
          fill="rgba(178, 34, 34, 0.5)"
          className="opacity-50"
        />
      </svg>

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

      {/* Bottom Paint Divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-8 rotate-180"
        preserveAspectRatio="none"
        viewBox="0 0 1200 32"
      >
        <path
          d="M0,0 Q300,32 600,16 T1200,0 V32 H0 Z"
          fill="rgba(178, 34, 34, 0.7)"
          className="opacity-70"
        />
        <path
          d="M0,8 Q400,32 600,24 T1200,8 V32 H0 Z"
          fill="rgba(178, 34, 34, 0.5)"
          className="opacity-50"
        />
      </svg>
    </section>
  );
};

export default Services;