
import React from "react";
import { X } from "lucide-react";
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

type BandMemberProps = {
  name: string;
  role: string;
  img: string;
  bio?: string;
  favoriteSong?: string;
  hometown?: string;
  favoriteEmoji?: string;
  hobby?: string;
};

const BandMemberBio = ({ name, role, img, bio, favoriteSong, hometown, favoriteEmoji, hobby }: BandMemberProps) => {
  const defaultBio = `${name} is an amazing performer with a unique style and incredible talent. 
  They've been performing since they were young and continue to wow audiences everywhere!`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="y2k-border bg-white p-4 rounded-lg text-center transform hover:rotate-1 transition-transform cursor-pointer">
          <img 
            src={img} 
            alt={name} 
            className="w-32 h-32 mx-auto mb-3 pixel-photo"
          />
          <h3 className="text-xl font-bold text-y2k-hotPink">{name}</h3>
          <p className="text-y2k-purple">{role}</p>
          <p className="text-xs mt-2 text-gray-500">♡ Click to read bio ♡</p>
        </div>
      </DialogTrigger>
      <DialogContent className="y2k-border bg-gradient-to-b from-y2k-lightPink to-white p-0 border-4 border-y2k-hotPink max-w-lg">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-y2k-yellow rounded-full animate-bounce-light border-2 border-white" />
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-y2k-green rounded-full animate-bounce-light border-2 border-white" style={{animationDelay: "0.5s"}} />
        
        <DialogHeader className="bg-y2k-purple text-white p-4 rounded-t-md">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
              <span className="rainbow-text">★</span> {name}'s Bio <span className="rainbow-text">★</span>
            </DialogTitle>
            <DialogClose asChild>
              <X className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
            </DialogClose>
          </div>
        </DialogHeader>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <img 
              src={img} 
              alt={name} 
              className="w-32 h-32 object-cover border-4 border-white shadow-[5px_5px_0_rgba(0,0,0,0.2)] rotate-3 pixel-photo"
            />
            <div>
              <h3 className="text-2xl font-bold text-y2k-hotPink mb-1">{name}</h3>
              <p className="text-y2k-purple font-bold">{role}</p>
              <div className="flex mt-2 space-x-2">
                {["✌️", "💖", "🎵", "🌟"].map((emoji, i) => (
                  <span 
                    key={i} 
                    className="inline-block bg-y2k-lightPink p-1 rounded-full border border-y2k-hotPink text-sm animate-bounce-light"
                    style={{animationDelay: `${i * 0.2}s`}}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <Separator className="border-2 border-dashed border-y2k-purple my-4" />
          
          <DialogDescription className="text-foreground text-base">
            <div className="bg-white border-2 border-y2k-blue p-3 rounded-lg">
              {bio || defaultBio}
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div className="bg-y2k-lightPink p-2 rounded-md border border-y2k-pink">
                <span className="font-bold">Favorite song:</span> {favoriteSong || "Lucky by Britney Spears"}
              </div>
              <div className="bg-y2k-lightPink p-2 rounded-md border border-y2k-pink">
                <span className="font-bold">Hometown:</span> {hometown ?? "Internet, CA"}
              </div>
              <div className="bg-y2k-lightPink p-2 rounded-md border border-y2k-pink">
                <span className="font-bold">Fav emoji:</span> {favoriteEmoji ?? '✨'}
              </div>
              <div className="bg-y2k-lightPink p-2 rounded-md border border-y2k-pink">
                <span className="font-bold">Hobby:</span> {hobby ?? "Vintage shopping"}
              </div>
            </div>
          </DialogDescription>
        </div>
        
        <div className="bg-y2k-green p-4 text-center rounded-b-md">
          <p className="text-white text-sm font-bold">
            ♡ Follow {name} on social media! ♡
          </p>
          <div className="flex justify-center space-x-3 mt-2">
            {["📸", "🐦", "📱", "🎵"].map((icon, i) => (
              <span key={i} className="cursor-pointer hover:scale-125 transition-transform">{icon}</span>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BandMemberBio;
