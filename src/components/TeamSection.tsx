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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    bio: "Pushing the boundaries of geometric and abstract tattoo designs",
    social: {
      instagram: "https://instagram.com/marcusblack",
      linkedin: "https://linkedin.com/in/marcusblack",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container px-4 mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bebas mb-16 text-center text-tattoo-black">
          Meet Our <span className="text-tattoo-red">Artists</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-lg p-6">
                <div className="relative mb-8 aspect-square overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bebas mb-1 text-tattoo-black group-hover:text-tattoo-red transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-tattoo-red font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6 text-sm">{member.bio}</p>
                  
                  <div className="flex gap-4 justify-center">
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-tattoo-red transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-tattoo-red transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-tattoo-red transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-tattoo-red transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;