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
    bio: "With over a decade of experience in traditional Japanese tattoos, Jake has mastered the art of bringing ancient designs into the modern era. His work is characterized by bold lines, vibrant colors, and meticulous attention to detail. Specializing in large-scale pieces, Jake's portfolio includes everything from full back pieces to intricate sleeve designs.",
    specialties: ["Traditional Japanese", "Large Scale Pieces", "Cover-ups"],
    social: {
      instagram: "https://instagram.com/jake_tattoo",
      facebook: "https://facebook.com/jake_tattoo",
    },
  },
  {
    id: 2,
    name: "Joseph",
    role: "Neo-Traditional Artist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    bio: "Joseph brings a fresh perspective to traditional tattoo designs, infusing them with contemporary elements and bold color choices. His award-winning work has been featured in numerous tattoo magazines and conventions. Known for his unique ability to blend classic motifs with modern aesthetics, Joseph creates pieces that stand the test of time.",
    specialties: ["Neo-Traditional", "Color Work", "Custom Designs"],
    social: {
      instagram: "https://instagram.com/joseph_ink",
      twitter: "https://twitter.com/joseph_ink",
    },
  },
  {
    id: 3,
    name: "Caprice",
    role: "Blackwork Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    bio: "Caprice specializes in contemporary blackwork and geometric designs, pushing the boundaries of what's possible with black ink. Her minimalist approach and precise line work have earned her a dedicated following. She excels in creating powerful, meaningful pieces that incorporate sacred geometry and modern patterns.",
    specialties: ["Blackwork", "Geometric", "Fine Line"],
    social: {
      instagram: "https://instagram.com/caprice_tattoo",
      linkedin: "https://linkedin.com/in/caprice_tattoo",
    },
  },
];

const TeamSection = () => {
  return (
    <section 
      className="py-24 bg-white relative" 
      aria-labelledby="team-heading"
    >
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      
      <div className="container px-4 mx-auto relative z-10">
        <h2 
          id="team-heading" 
          className="text-4xl md:text-5xl font-bebas mb-16 text-center text-tattoo-black leading-tight"
        >
          Meet Our <span className="text-tattoo-red">Artists</span>
        </h2>
        
        <div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          role="list"
          aria-label="Team members"
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 shadow-xl transition-all duration-300 hover:-translate-y-2"
              role="listitem"
            >
              <div className="relative overflow-hidden rounded-t-lg p-6">
                <div className="relative mb-8 aspect-square overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bebas mb-1 text-tattoo-black group-hover:text-tattoo-red transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-tattoo-red font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-base font-bold text-tattoo-black mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="text-sm px-3 py-1 rounded-full bg-tattoo-red/10 text-tattoo-red"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div 
                    className="flex gap-4 justify-center"
                    role="list"
                    aria-label={`${member.name}'s social media links`}
                  >
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-tattoo-red transition-colors focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 rounded-full p-1"
                        aria-label={`Follow ${member.name} on Instagram`}
                      >
                        <Instagram className="w-5 h-5" aria-hidden="true" />
                      </a>
                    )}
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-tattoo-red transition-colors focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 rounded-full p-1"
                        aria-label={`Follow ${member.name} on Facebook`}
                      >
                        <Facebook className="w-5 h-5" aria-hidden="true" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-tattoo-red transition-colors focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 rounded-full p-1"
                        aria-label={`Follow ${member.name} on Twitter`}
                      >
                        <Twitter className="w-5 h-5" aria-hidden="true" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-tattoo-red transition-colors focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 rounded-full p-1"
                        aria-label={`Connect with ${member.name} on LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" aria-hidden="true" />
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