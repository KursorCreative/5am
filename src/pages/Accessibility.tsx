import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import PageHero from "@/components/PageHero";
import ScrollProgress from "@/components/ScrollProgress";
import CookieConsent from "@/components/CookieConsent";

const Accessibility = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Accessibility Statement - 5am Tattoo Studio",
      "description": "Our commitment to digital accessibility and WCAG 2.1 AA compliance at 5am Tattoo Studio.",
      "url": "https://5amtattoo.com/accessibility"
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
      label: "Accessibility",
      path: "/accessibility"
    }
  ];

  return (
    <div className="min-h-screen bg-tattoo-black">
      <SkipToContent />
      <ScrollProgress />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main id="main-content" className="pt-20">
        <PageHero 
          title="Accessibility Statement" 
          description="Our commitment to digital accessibility"
          breadcrumbs={breadcrumbs}
        />
        
        <div 
          className="bg-white relative"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="container mx-auto px-4 py-16">
            <div className="prose max-w-none text-tattoo-black">
              <h2 className="text-3xl font-bebas mb-6">Our Commitment to Accessibility</h2>
              <p className="mb-6">
                At 5am Tattoo Studio, we are committed to ensuring digital accessibility for people of all abilities. 
                We aim to consistently improve the user experience for everyone and apply the relevant accessibility 
                standards to achieve this.
              </p>

              <h3 className="text-2xl font-bebas mb-4">Conformance Status</h3>
              <p className="mb-6">
                We conform to WCAG 2.1 Level AA standards. This means our website is:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Perceivable - Information and user interface components must be presentable to users in ways they can perceive</li>
                <li>Operable - User interface components and navigation must be operable</li>
                <li>Understandable - Information and the operation of user interface must be understandable</li>
                <li>Robust - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents</li>
              </ul>

              <h3 className="text-2xl font-bebas mb-4">Accessibility Features</h3>
              <p className="mb-4">Our website includes the following accessibility features:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Semantic HTML for better screen reader compatibility</li>
                <li>ARIA landmarks and labels where appropriate</li>
                <li>Sufficient color contrast ratios (minimum 4.5:1 for normal text)</li>
                <li>Keyboard navigation support</li>
                <li>Skip to main content link</li>
                <li>Alt text for images</li>
                <li>Resizable text without loss of functionality</li>
                <li>Clear focus indicators</li>
                <li>Consistent navigation</li>
                <li>Form labels and error messages</li>
              </ul>

              <h3 className="text-2xl font-bebas mb-4">Assistive Technologies Supported</h3>
              <p className="mb-6">
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
              </ul>

              <h3 className="text-2xl font-bebas mb-4">Known Limitations</h3>
              <p className="mb-6">
                While we strive for WCAG 2.1 Level AA compliance, we are continuously working 
                to improve our accessibility features. If you encounter any accessibility barriers, 
                please contact us.
              </p>

              <h3 className="text-2xl font-bebas mb-4">Contact Information</h3>
              <p className="mb-6">
                We welcome your feedback on the accessibility of our website. Please contact us if you:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Encounter any accessibility barriers</li>
                <li>Need information in an alternative format</li>
                <li>Have suggestions for improvement</li>
              </ul>
              <p>
                Email: <a href="mailto:accessibility@5amtattoo.com" className="text-tattoo-red hover:underline">accessibility@5amtattoo.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Accessibility;