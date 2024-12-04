const Maps = () => {
  return (
    <section className="w-full">
      <div className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11558.26984860363!2d172.64837138715823!3d-43.38331499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318a1ac8c4e7c7%3A0x500ef868479a1e0!2sKaiapoi%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1709780831943!5m2!1sen!2sus"
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