import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <SkipToContent />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main id="main-content" className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to <span className="font-semibold">5am Tattoo Studio</span>. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website or use our services. By accessing or using our website, you agree to the terms outlined in this Privacy Policy.
            </p>
            <p className="text-gray-300">
              For any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:hello@5am.co.nz" className="text-tattoo-red hover:text-tattoo-red/80 underline">hello@5am.co.nz</a>.
            </p>
          </section>

          <Separator className="bg-tattoo-gray/30" />
          
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Information We Collect</h2>
            <p className="text-gray-300 mb-2">We collect personal information to provide and improve our services. This includes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li><span className="font-semibold">Personal Identification Information</span>: Name, email address, phone number, and other contact details submitted through forms.</li>
              <li><span className="font-semibold">Payment Information</span>: Billing address and payment method details, processed securely through third-party providers.</li>
              <li><span className="font-semibold">Website Usage Data</span>: Cookies and similar technologies collect information about your visit, such as pages viewed, time spent on the site, and IP addresses.</li>
            </ul>
          </section>

          <Separator className="bg-tattoo-gray/30" />

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Use of Information</h2>
            <p className="text-gray-300 mb-2">We use the information collected for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>To provide services or respond to inquiries.</li>
              <li>To process payments securely via third-party payment processors.</li>
              <li>To maintain and improve website functionality.</li>
              <li>To ensure compliance with legal obligations and to protect against fraud or misuse.</li>
            </ul>
          </section>

          <Separator className="bg-tattoo-gray/30" />

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Data Sharing</h2>
            <p className="text-gray-300 mb-2">We do not share your personal information with third parties except in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li><span className="font-semibold">Payment Processing</span>: Third-party payment processors handle billing information.</li>
              <li><span className="font-semibold">Legal Compliance</span>: If required by law or court order, we may disclose information to relevant authorities.</li>
              <li><span className="font-semibold">Protection of Rights</span>: If necessary to protect our rights, users, or the public.</li>
            </ul>
          </section>

          <Separator className="bg-tattoo-gray/30" />

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Contact Us</h2>
            <p className="text-gray-300">If you have questions or concerns about this Privacy Policy, please contact us at:</p>
            <div className="text-gray-300 space-y-2">
              <p className="font-semibold">5am Tattoo Studio</p>
              <p>Email: <a href="mailto:hello@5am.co.nz" className="text-tattoo-red hover:text-tattoo-red/80 underline">hello@5am.co.nz</a></p>
              <p>Location: New Zealand</p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;