import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-tattoo-black">
      <SkipToContent />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main 
        id="main-content" 
        className="container mx-auto px-4 pt-24 pb-12"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to <span className="font-semibold">5am Tattoo Studio</span>. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website or use our services. By accessing or using our website, you agree to the terms outlined in this Privacy Policy.
            </p>
            <p className="text-gray-700">
              For any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:hello@5am.co.nz" className="text-tattoo-red hover:text-tattoo-red/80 underline">hello@5am.co.nz</a>.
            </p>
          </section>

          <Separator className="bg-tattoo-gray/30" />
          
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Information We Collect</h2>
            <p className="text-gray-700 mb-2">We collect personal information to provide and improve our services. This includes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><span className="font-semibold">Personal Identification Information</span>: Name, email address, phone number, and other contact details submitted through forms.</li>
              <li><span className="font-semibold">Payment Information</span>: Billing address and payment method details, processed securely through third-party providers.</li>
              <li><span className="font-semibold">Website Usage Data</span>: Cookies and similar technologies collect information about your visit, such as pages viewed, time spent on the site, and IP addresses.</li>
            </ul>
          </section>

          <Separator className="bg-tattoo-gray/30" />

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Use of Information</h2>
            <p className="text-gray-700 mb-2">We use the information collected for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>To provide services or respond to inquiries.</li>
              <li>To process payments securely via third-party payment processors.</li>
              <li>To maintain and improve website functionality.</li>
              <li>To ensure compliance with legal obligations and to protect against fraud or misuse.</li>
            </ul>
          </section>

          <Separator className="bg-tattoo-gray/30" />

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Data Sharing</h2>
            <p className="text-gray-700 mb-2">We do not share your personal information with third parties except in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><span className="font-semibold">Payment Processing</span>: Third-party payment processors handle billing information.</li>
              <li><span className="font-semibold">Legal Compliance</span>: If required by law or court order, we may disclose information to relevant authorities.</li>
              <li><span className="font-semibold">Protection of Rights</span>: If necessary to protect our rights, users, or the public.</li>
            </ul>
          </section>

          <Separator className="bg-tattoo-gray/30" />

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Security Measures</h2>
            <p className="text-gray-700 mb-2">We implement robust security measures to protect your data:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Secure servers and encryption technologies.</li>
              <li>Regular system monitoring and updates.</li>
              <li>Restricted access to personal data, limited to authorised personnel only.</li>
            </ul>
          </section>

          <Separator className="bg-tattoo-gray/30" />

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Cookies</h2>
            <p className="text-gray-700">We use cookies to enhance your experience on our website. Cookies help us:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Track website performance and user preferences.</li>
              <li>Provide personalised content.</li>
              <li>Improve functionality and usability.</li>
            </ul>
            <p className="text-gray-700">You can adjust your browser settings to decline cookies, but some website features may not function properly.</p>
          </section>

          <Separator className="bg-tattoo-gray/30" />

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Children's Privacy</h2>
            <p className="text-gray-700">
              While our website is accessible to all, it is not targeted at children under 13 years of age. We do not knowingly collect personal information from children. If we learn that a child has provided us with personal data, we will take steps to delete the information.
            </p>
          </section>

          <Separator className="bg-tattoo-gray/30" />

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">User Rights</h2>
            <p className="text-gray-700 mb-2">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><span className="font-semibold">Access</span>: Request access to the data we hold about you.</li>
              <li><span className="font-semibold">Rectification</span>: Request corrections to any inaccurate or incomplete data.</li>
              <li><span className="font-semibold">Erasure</span>: Request deletion of your personal data, where applicable.</li>
              <li><span className="font-semibold">Objection</span>: Object to the processing of your data for specific purposes.</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, contact us at <a href="mailto:hello@5am.co.nz" className="text-tattoo-red hover:text-tattoo-red/80 underline">hello@5am.co.nz</a>.
            </p>
          </section>

          <Separator className="bg-tattoo-gray/30" />

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may contain links to external sites. We are not responsible for the privacy practices of these websites. Please review their privacy policies before providing your personal data.
            </p>
          </section>

          <Separator className="bg-tattoo-gray/30" />

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Updates to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in legal requirements or our operations. Any updates will be posted on this page with the effective date clearly indicated.
            </p>
          </section>

          <Separator className="bg-tattoo-gray/30" />

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-tattoo-red">Contact Us</h2>
            <p className="text-gray-700">If you have questions or concerns about this Privacy Policy, please contact us at:</p>
            <div className="text-gray-700 space-y-2">
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