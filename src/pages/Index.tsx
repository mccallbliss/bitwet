
import React from "react";
import Header from "@/components/Header";
import TourDates from "@/components/TourDates";
import Guestbook from "@/components/Guestbook";
import Footer from "@/components/Footer";
import GlitterCursor from "@/components/GlitterCursor";
import BandMemberBio from "@/components/BandMemberBio";
import TourExperiences from "@/components/TourExperiences";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const bandMembers = [
    { 
      name: "McCall", 
      role: "davvn", 
      img: "/bitwet/images/mccall.jpg",
      bio: "McCall is the energetic lead vocalist of davvn, known for her unique voice and bubbly stage presence. She's been singing since she was 9 years old and draws inspiration from Y2K pop/rock icons. When not on stage, she's designing webistes and collecting 2000's era tech.",
      favoriteSong: "Losing Grip by Avril Lavigne",
      hometown: "Las Vegas + The Twin Cities",
      favoriteEmoji: "🫣 or 💞",
      hobby: "bedazzling or making Sims she never plays",
      twitter: "https://twitter.com/davvnmusic",
      instagram: "https://instagram.com/davvn.music",
      tiktok: "https://tiktok.com/@davvn.music",
      spotify: "https://open.spotify.com/artist/1QF0qdoDTPGn3h3zl3YIpT?si=-tQ2nQ-lReG5HtmmHRynvg",
    },
    { 
      name: "Mike", 
      role: "davvn", 
      img: "/bitwet/images/mike.jpg",
      bio: "Mike is davvn's guitar virtuoso, bringing melodic riffs and nostalgic sounds to every performance. He started playing guitar after finding his dad's old instrument in the attic. He's obsessed with early 2000s rock bands and has an impressive collection of vintage guitar pedals.",
      favoriteSong: "Of all the Gin Joints in the World - Fall Out Boy",
      hometown: "Boston, MA",
      favoriteEmoji: "🍕 or 🤓",
      hobby: "cutting down trees on runescape",
      twitter: "https://twitter.com/davvnmusic",
      instagram: "https://instagram.com/davvn.music",
      tiktok: "https://tiktok.com/@davvn.music",
      spotify: "https://open.spotify.com/artist/1QF0qdoDTPGn3h3zl3YIpT?si=-tQ2nQ-lReG5HtmmHRynvg",
    },
    { 
      name: "Jack", 
      role: "Jack The Underdog", 
      img: "/bitwet/images/jtu-2.jpg",
      bio: "Jack The Underdog is a pop punk artist and songwriter based in Nashville, TN. Jack’s music strives to create a space for all the “underdogs” of society to feel heard. When listening to Jack’s music, you’ll hear a wide array on influences - from pop punk to hyperpop to hip hop. Between Jack's original music that brings a modern twist to an early 2000's nostalgic sound, and his 'swemo' Taylor Swift covers, there’s something for everyone to enjoy. Jack is also a member of the Riot House, a Nashville based independent collective of alternative artists that aims to help amplify the voices within the alternative music community in Nashville.",
      favoriteSong: "LosT by Bring Me The Horizon",
      hometown: "St Paul, MN",
      favoriteEmoji: "❤️‍🔥 or ✨",
      hobby: "catching pokemon",
      twitter: "https://twitter.com/jacktheunderdog",
      instagram: "https://www.instagram.com/jacktheunderdog",
      tiktok: "https://www.tiktok.com/jacktheunderdog",
      spotify: "https://open.spotify.com/artist/5SAYvojx5xHsRISXBOZz0A?si=4bsJ9kwjRaiSwv4qN1dtTw",
    },
  ];

  const tourExperiences = [
    {name: 'Adult Scholastic Book Fair', id: 'sbf'}, 
    {name: 'MySpace Photo Booth', id: 'mspb'}, 
    {name: 'Temporary Tattoo Station', id: 'tts'}, 
    {name: 'VHS Memory Booth', id: 'vhs'}, 
    {name: 'Friendship Bracelets', id: 'fbs'}, 
    {name: 'Poster & CD Signing', id: 'pse'},
  ];

  return (
    <div className="min-h-screen">
      <GlitterCursor />
      
      <Header />
      
      {/* Tour Dates Section */}
      <TourDates />
      
      <div className="max-w-5xl mx-auto px-4">
        <Separator className="border-2 border-dashed border-white" />
      </div>
      
      {/* Band Members Section */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="w-3 h-3 bg-y2k-green rounded-full animate-sparkle mr-2" />
          <h2 className="text-3xl font-bold text-y2k-blue inline-block">Meet The Bands!</h2>
          <div className="w-3 h-3 bg-y2k-green rounded-full animate-sparkle ml-2" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bandMembers.map((member, index) => (
            <BandMemberBio 
              key={index}
              name={member.name}
              role={member.role}
              img={member.img}
              bio={member.bio}
              favoriteSong={member.favoriteSong}
              hometown={member.hometown}
              favoriteEmoji={member.favoriteEmoji}
              hobby={member.hobby}
              tiktok={member.tiktok}
              instagram={member.instagram}
              twitter={member.twitter}
              spotify={member.spotify}
            />
          ))}
        </div>
      </section>
      
      <div className="max-w-5xl mx-auto px-4">
        <Separator className="border-2 border-dashed border-white" />
      </div>
      
      {/* Tour Experiences */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="w-3 h-3 bg-y2k-hotPink rounded-full animate-sparkle mr-2" />
          <h2 className="text-3xl font-bold text-y2k-green inline-block">Tour Experiences!</h2>
          <div className="w-3 h-3 bg-y2k-hotPink rounded-full animate-sparkle ml-2" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tourExperiences.map((xp) => (
            <div key={xp.id} className="y2k-border p-2 bg-white rounded-lg transform hover:rotate-2 transition-transform">
              <div 
                className="h-40 bg-gray-200 flex items-center justify-center"
                style={{
                  backgroundImage: `url(/bitwet/images/experience-${xp.id}.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}
              />
              <p className="text-center mt-2 text-xs font-bold text-y2k-purple">
                {xp.name}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <TourExperiences />
        </div>
      </section>
      
      <div className="max-w-5xl mx-auto px-4">
        <Separator className="border-2 border-dashed border-white" />
      </div>
      
      {/* <Guestbook /> */}
      
      <Footer />
      
      {/* Animated elements */}
      <div className="fixed top-20 left-10 animate-float z-10">
        <div className="w-16 h-16 bg-contain bg-no-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\"%3E%3Cpath fill=\"%23FF66B2\" d=\"M32 5.83l6.4 19.69h20.71l-16.76 12.18 6.4 19.68L32 45.2l-16.76 12.18 6.4-19.68L4.89 25.52h20.71z\"/%3E%3C/svg%3E')" }} />
      </div>
      <div className="fixed bottom-20 right-10 animate-float z-10" style={{ animationDelay: "1s" }}>
        <div className="w-14 h-14 bg-contain bg-no-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"56\" height=\"56\" viewBox=\"0 0 56 56\"%3E%3Cpath fill=\"%239966FF\" d=\"M28 4.86l5.28 16.26h17.1l-13.84 10.05 5.28 16.26L28 37.38l-13.82 10.05 5.28-16.26L5.62 21.12h17.1z\"/%3E%3C/svg%3E')" }} />
      </div>
    </div>
  );
};

export default Index;
