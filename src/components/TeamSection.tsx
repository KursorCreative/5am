import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Jake",
    role: "Lead Artist",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    bio: "Specializing in traditional Japanese tattoos with 10+ years of experience",
    social: {
      instagram: "https://instagram.com/alexrivers",
      facebook: "https://facebook.com/alexrivers",
    },
  },
  {
    id: 2,
    name: "Joseph",
    role: "Neo-Traditional Artist",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    bio: "Award-winning artist known for bold colors and unique designs",
    social: {
      instagram: "https://instagram.com/sarahchen",
      twitter: "https://twitter.com/sarahchen",
    },
  },
  {
    id: 3,
    name: "Caprice",
    role: "Blackwork Specialist",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    bio: "Pushing the boundaries of geometric and abstract tattoo designs",
    social: {
      instagram: "https://instagram.com/marcusblack",
      linkedin: "https://linkedin.com/in/marcusblack",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-[#f4f4f4]">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-tattoo-black">
          Meet Our <span className="text-tattoo-red">Artists</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-lg border border-gray-300 neon-border hover:border-gray-400 hover:scale-105 transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-1 text-tattoo-black">{member.name}</h3>
              <p className="text-tattoo-red font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              
              <div className="flex gap-4 justify-center">
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-tattoo-red transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {member.social.facebook && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-tattoo-red transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-tattoo-red transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-tattoo-red transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;