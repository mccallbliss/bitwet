
import React from "react";
import { Camera, Gift, Sparkles, Book, Palette, Ticket, Music } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import VIPExperienceDialog from "./VIPExperienceDialog";

type ExperienceProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const Experience = ({ title, description, icon, color }: ExperienceProps) => (
  <div className={`bg-white rounded-lg p-4 border-2 border-${color} transform hover:rotate-2 transition-transform`}>
    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${color} mb-3 mx-auto`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-center text-y2k-purple">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const TourExperiences = () => {
  const experiences = [
    {
      title: "Photo Booth",
      description: "Strike a pose with your besties and take home printed photo strips with glitter frames and Y2K-themed digital stickers!",
      icon: <Camera className="text-white" size={24} />,
      color: "y2k-hotPink"
    },
    {
      title: "Temporary Tattoo Station",
      description: "Get decked out with nostalgic temporary tattoos featuring butterflies, tribal designs, and your favorite band logos!",
      icon: <Palette className="text-white" size={24} />,
      color: "y2k-purple"
    },
    {
      title: "Scholastic Book Fair",
      description: "Browse through Y2K-era teen magazines, sticker books, and posters just like the good old days at school!",
      icon: <Book className="text-white" size={24} />,
      color: "y2k-blue"
    },
    {
      title: "VHS Memory Booth",
      description: "Record a short video message on a real VHS tape that will be compiled into a tour documentary!",
      icon: <Camera className="text-white" size={24} />,
      color: "y2k-green"
    },
    {
      title: "Friendship Bracelet Station",
      description: "Create custom beaded bracelets and trade them with other fans – just like middle school all over again!",
      icon: <Gift className="text-white" size={24} />,
      color: "y2k-yellow"
    },
    {
      title: "CD Signing Experience",
      description: "Purchase a special edition tour CD and get it signed by davvn and Jack The Underdog after the show!",
      icon: <Music className="text-white" size={24} />,
      color: "y2k-hotPink"
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="y2k-button bg-y2k-green">
          <span className="rainbow-text">⋆</span> View Album <span className="rainbow-text">⋆</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl bg-gradient-to-br from-y2k-lightPink to-white p-0 border-4 border-y2k-purple">
        <div className="absolute -top-3 -left-3 animate-spin-slow">
          <Sparkles className="text-y2k-yellow drop-shadow-lg" size={24} />
        </div>
        <div className="absolute -top-3 -right-3 animate-spin-slow" style={{animationDelay: "0.5s"}}>
          <Sparkles className="text-y2k-green drop-shadow-lg" size={24} />
        </div>
        
        <DialogHeader className="bg-y2k-purple text-white p-4 rounded-t-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Ticket className="h-6 w-6 text-y2k-yellow animate-bounce-light" />
              <DialogTitle className="text-2xl font-bold drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
                Tour Experiences!
              </DialogTitle>
              <Ticket className="h-6 w-6 text-y2k-yellow animate-bounce-light" style={{animationDelay: "0.5s"}} />
            </div>
            <DialogClose asChild>
              <button className="h-8 w-8 rounded-full bg-y2k-hotPink flex items-center justify-center hover:scale-110 transition-transform text-white font-bold">
                X
              </button>
            </DialogClose>
          </div>
        </DialogHeader>
        
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <div className="text-center mb-6">
            <div className="bg-y2k-blue text-white inline-block px-4 py-2 rounded-lg font-bold mb-2 border-2 border-white shadow-[3px_3px_0_rgba(0,0,0,0.2)]">
              * * * TOTALLY AWESOME TOUR EXPERIENCES * * *
            </div>
            <DialogDescription className="text-y2k-purple text-center px-8">
              Check out all the rad interactive experiences waiting for you at the "Born in the Wrong Eras" Tour! 
              Each show features these amazing Y2K throwback activities that will transport you straight back to 2003!
            </DialogDescription>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experiences.map((exp, index) => (
              <Experience 
                key={index}
                title={exp.title}
                description={exp.description}
                icon={exp.icon}
                color={exp.color}
              />
            ))}
          </div>
          
          <Separator className="border-2 border-dashed border-y2k-purple my-6" />
          
          <div className="bg-white p-4 rounded-lg border-2 border-y2k-hotPink mt-4">
            <div className="text-center">
              <h3 className="text-xl font-bold text-y2k-hotPink mb-2">⭐ VIP EXPERIENCE PACKAGE ⭐</h3>
              <p className="text-sm text-gray-600 mb-4">
                Upgrade to VIP for exclusive access to ALL experiences without waiting in line, 
                plus a special Y2K-themed gift bag with limited edition merchandise!
              </p>
              <VIPExperienceDialog>
                <button className="bg-y2k-hotPink text-white px-6 py-2 rounded-lg font-bold border-2 border-white shadow-[3px_3px_0_rgba(0,0,0,0.2)] hover:bg-y2k-purple transition-colors">
                  🌟 UPGRADE TO VIP 🌟
                </button>
              </VIPExperienceDialog>
            </div>
          </div>
        </div>
        
        <div className="bg-y2k-green p-3 text-center rounded-b-md">
          <p className="text-white text-sm font-bold">
            ♡ All experiences included with standard ticket purchase! ♡
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TourExperiences;
