import { Clock } from "lucide-react";

const hours = [
  { day: "Monday - Friday", time: "10:00 AM - 8:00 PM" },
  { day: "Saturday", time: "11:00 AM - 6:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const Hours = () => {
  return (
    <section 
      className="relative py-20 bg-no-repeat bg-center min-h-[600px]"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1590246814883-55516d74fec6')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-tattoo-black/50" />
      
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-tattoo-white">
          Opening <span className="text-tattoo-red">Hours</span>
        </h2>
        
        <div className="max-w-2xl mx-auto bg-tattoo-gray/90 p-8 rounded-lg">
          <div className="space-y-6">
            {hours.map((schedule) => (
              <div
                key={schedule.day}
                className="flex items-center justify-between border-b border-tattoo-white/20 pb-4 last:border-0"
              >
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-tattoo-gold" />
                  <span className="text-tattoo-white">{schedule.day}</span>
                </div>
                <span className="text-tattoo-white font-medium">{schedule.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;