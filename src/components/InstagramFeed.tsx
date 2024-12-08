import { Instagram } from "lucide-react";
import { Button } from "./ui/button";

const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80",
      alt: "Professional tattoo artist working in studio",
      likes: 234,
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1590246814883-55516d74fec6?auto=format&fit=crop&w=800&q=80",
      alt: "Close-up of detailed tattoo artwork",
      likes: 456,
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      alt: "Tattoo design sketches",
      likes: 189,
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      alt: "Custom tattoo design process",
      likes: 567,
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      alt: "Tattoo studio interior",
      likes: 432,
    },
    {
      id: 6,
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
      alt: "Tattoo equipment setup",
      likes: 654,
    },
    {
      id: 7,
      imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
      alt: "Tattoo artist at work",
      likes: 345,
    },
    {
      id: 8,
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      alt: "Close-up of tattoo machine",
      likes: 789,
    },
  ];

  return (
    <section className="py-16 bg-tattoo-black" aria-label="Instagram Feed">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bebas mb-4 text-white">Follow Our Journey</h2>
          <p className="text-gray-400 text-center max-w-2xl mb-8">
            Stay updated with our latest work and behind-the-scenes moments on Instagram
          </p>
          <Button
            variant="outline"
            className="bg-transparent border-2 border-tattoo-red hover:bg-tattoo-red text-white px-6 py-2 rounded-none transition-all duration-300"
            onClick={() => window.open('https://instagram.com/5amtattoostudios', '_blank')}
            aria-label="Follow us on Instagram"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow @5amtattoostudios
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              <img
                src={post.imageUrl}
                alt={post.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center">
                  <Instagram className="mr-2" />
                  <span>{post.likes} likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;