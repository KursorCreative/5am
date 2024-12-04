const Maps = () => {
  return (
    <section className="w-full">
      <div className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0637485474936!2d-122.41941682392766!3d37.77492971642611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sDowntown%20San%20Francisco%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1708823006123!5m2!1sen!2sus"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="5am Tattoo Studio Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Maps;