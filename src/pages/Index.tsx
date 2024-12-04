import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Hours from "@/components/Hours";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Hours />
      <Footer />
    </div>
  );
};

export default Index;