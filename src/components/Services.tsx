import { Clock, Users } from "lucide-react";

type ServiceItem = {
  icon: string | typeof Clock | typeof Users;
  title: string;
  description: string;
  isLocalIcon?: boolean;
};

const services: ServiceItem[] = [
  {
    icon: "/tattoo.png",
    title: "Custom Designs",
    description: "Unique tattoos tailored to your vision and style.",
    isLocalIcon: true
  },
  {
    icon: "/tattoo-gun.png",
    title: "Professional Equipment",
    description: "Top-quality, sterilized equipment for your safety.",
    isLocalIcon: true
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
      className="py-20 bg-[#f4f4f4]"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <h2 
          id="services-heading" 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-tattoo-black leading-tight"
        >
          Our <span className="text-tattoo-red">Services</span>
        </h2>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-white rounded-lg hover:neon-border transition-all duration-300 focus-within:ring-2 focus-within:ring-tattoo-red focus-within:ring-offset-2"
              role="listitem"
              tabIndex={0}
            >
              {service.isLocalIcon ? (
                <img 
                  src={service.icon as string} 
                  alt="" 
                  className="w-12 h-12 mb-4"
                  aria-hidden="true"
                />
              ) : (
                // @ts-ignore - We know this is a valid Lucide icon component
                <service.icon 
                  className="w-12 h-12 text-tattoo-red mb-4" 
                  aria-hidden="true"
                />
              )}
              <h3 className="text-xl font-bold mb-2 text-tattoo-black leading-relaxed">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;