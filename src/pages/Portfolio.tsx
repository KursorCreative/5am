import { Suspense, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import PageHero from "@/components/PageHero";
import ScrollProgress from "@/components/ScrollProgress";
import CookieConsent from "@/components/CookieConsent";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useQueryClient } from "@tanstack/react-query";

const PortfolioPage = () => {
  const queryClient = useQueryClient();

  // Prefetch portfolio images
  useEffect(() => {
    const prefetchImages = async () => {
      const images = await import("@/components/portfolio/portfolioData").then(
        (mod) => mod.portfolioImages
      );
      images.forEach((image) => {
        queryClient.prefetchQuery({
          queryKey: ['portfolioImage', image.id],
          queryFn: () => new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image.src;
            img.onload = () => resolve(image.src);
            img.onerror = () => reject(new Error(`Failed to load image ${image.id}`));
          }),
          staleTime: Infinity,
        });
      });
    };
    prefetchImages();
  }, [queryClient]);

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Portfolio - 5am Tattoo Studio",
      "description": "View our collection of custom tattoo designs and artwork at 5am Tattoo Studio.",
      "image": "https://example.com/portfolio-image.jpg",
      "url": "https://5amtattoo.com/portfolio"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const breadcrumbs = [
    {
      label: "Portfolio",
      path: "/portfolio"
    }
  ];

  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <SkipToContent />
      <ScrollProgress />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main id="main-content" className="pt-20">
        <PageHero title="Our Work" breadcrumbs={breadcrumbs} />
        <div className="relative w-full lg:w-[100vw] lg:left-[calc(-50vw+50%)] max-w-none">
          <Suspense fallback={<LoadingSpinner />}>
            <Portfolio />
          </Suspense>
        </div>
      </main>
      
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default PortfolioPage;