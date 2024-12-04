const hours = [
  { day: "Monday", hours: "10:00 AM - 8:00 PM" },
  { day: "Tuesday", hours: "10:00 AM - 8:00 PM" },
  { day: "Wednesday", hours: "10:00 AM - 8:00 PM" },
  { day: "Thursday", hours: "10:00 AM - 8:00 PM" },
  { day: "Friday", hours: "10:00 AM - 10:00 PM" },
  { day: "Saturday", hours: "12:00 PM - 10:00 PM" },
  { day: "Sunday", hours: "By Appointment" },
];

const Hours = () => {
  return (
    <section className="py-20 bg-tattoo-gray">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Opening <span className="text-tattoo-purple">Hours</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          {hours.map((item) => (
            <div
              key={item.day}
              className="flex justify-between items-center py-4 border-b border-tattoo-purple/20"
            >
              <span className="font-space font-medium">{item.day}</span>
              <span className="text-gray-400">{item.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hours;