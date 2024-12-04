import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import TeamSection from "@/components/TeamSection";
import Hours from "@/components/Hours";
import Maps from "@/components/Maps";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <div id="home" className="relative w-full lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:w-screen max-w-[2000px] mx-auto">
        <Hero />
      </div>
      
      <div id="about" className="relative w-full lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:w-screen max-w-[2000px] mx-auto">
        <About />
      </div>
      
      <div id="services" className="relative w-full lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:w-screen max-w-[2000px] mx-auto">
        <Services />
      </div>
      
      <div id="portfolio" className="relative w-full lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:w-screen max-w-[2000px] mx-auto">
        <Portfolio />
      </div>
      
      <div id="team" className="relative w-full lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:w-screen max-w-[2000px] mx-auto">
        <TeamSection />
      </div>
      
      <div id="hours" className="relative w-full lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:w-screen max-w-[2000px] mx-auto">
        <Hours />
      </div>
      
      <div id="contact" className="relative w-full lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:w-screen max-w-[2000px] mx-auto">
        <Maps />
        <Footer />
      </div>
    </div>
  );
};

export default Index;