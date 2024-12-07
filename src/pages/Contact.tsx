import Navbar from "@/components/Navbar";
import Maps from "@/components/Maps";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", values);
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-tattoo-black text-white">
      <SkipToContent />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main id="main-content" className="pt-20">
        {/* Contact Info Section */}
        <section className="py-16 bg-tattoo-gray/20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bebas text-center mb-12">
              Get in Touch
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Email */}
              <div className="bg-tattoo-gray/30 p-6 rounded-lg hover:bg-tattoo-gray/40 transition-colors group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-tattoo-red rounded-full group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bebas">Email Us</h2>
                  <a 
                    href="mailto:info@5amtattoo.com"
                    className="text-gray-300 hover:text-white transition-colors underline decoration-tattoo-red/30 hover:decoration-tattoo-red"
                  >
                    info@5amtattoo.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-tattoo-gray/30 p-6 rounded-lg hover:bg-tattoo-gray/40 transition-colors group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-tattoo-red rounded-full group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bebas">Call Us</h2>
                  <a 
                    href="tel:+15551234567"
                    className="text-gray-300 hover:text-white transition-colors underline decoration-tattoo-red/30 hover:decoration-tattoo-red"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-tattoo-gray/30 p-6 rounded-lg hover:bg-tattoo-gray/40 transition-colors group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-tattoo-red rounded-full group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bebas">Visit Us</h2>
                  <a 
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors underline decoration-tattoo-red/30 hover:decoration-tattoo-red"
                  >
                    123 Ink Street, Art District
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-tattoo-gray/30 p-6 rounded-lg hover:bg-tattoo-gray/40 transition-colors group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-tattoo-red rounded-full group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bebas">Hours</h2>
                  <div className="text-gray-300">
                    <p>Mon-Fri: 10am - 8pm</p>
                    <p>Sat: 11am - 6pm</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-tattoo-black">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bebas text-center mb-8">
              Send Us a Message
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Write your message here..." 
                          className="min-h-[150px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-tattoo-red hover:bg-tattoo-red/90"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </section>

        {/* Map Section */}
        <Maps />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
