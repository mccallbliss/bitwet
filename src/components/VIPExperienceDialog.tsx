
import React from "react";
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
import { Camera, Gift, Sparkles, Music, Medal, Star } from "lucide-react";

interface VIPDialogProps {
  children: React.ReactNode;
}

const VIPExperienceDialog = ({ children }: VIPDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-3xl bg-gradient-to-br from-y2k-yellow via-white to-y2k-lightPink p-0 border-4 border-y2k-hotPink">
        <div className="absolute -top-3 -left-3 animate-spin-slow">
          <Star className="text-y2k-yellow drop-shadow-lg" size={24} />
        </div>
        <div className="absolute -top-3 -right-3 animate-spin-slow" style={{animationDelay: "0.5s"}}>
          <Star className="text-y2k-hotPink drop-shadow-lg" size={24} />
        </div>
        
        <DialogHeader className="bg-y2k-hotPink text-white p-4 rounded-t-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Medal className="h-6 w-6 text-y2k-yellow animate-bounce-light" />
              <DialogTitle className="text-2xl font-bold drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
                VIP EXPERIENCE!!! 
              </DialogTitle>
              <Medal className="h-6 w-6 text-y2k-yellow animate-bounce-light" style={{animationDelay: "0.5s"}} />
            </div>
            <DialogClose asChild>
              <button className="h-8 w-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform text-y2k-hotPink font-bold">
                X
              </button>
            </DialogClose>
          </div>
        </DialogHeader>
        
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <div className="text-center mb-6">
            <div className="bg-y2k-purple text-white inline-block px-4 py-2 rounded-lg font-bold mb-2 border-2 border-white shadow-[3px_3px_0_rgba(0,0,0,0.2)] animate-pulse">
              * * * LIMITED AVAILABILITY - RESERVE NOW * * *
            </div>
            <DialogDescription className="text-y2k-purple text-center px-8">
              Upgrade your concert experience with our exclusive VIP package - THE ultimate 2000s throwback fan experience!
            </DialogDescription>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg border-2 border-y2k-purple transform hover:rotate-1 transition-transform">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-y2k-green mb-3 mx-auto">
                <Camera className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-y2k-hotPink">Meet & Greet Photos</h3>
              <p className="text-sm text-gray-600">
                Exclusive photo opportunity with davvn and Jack The Underdog before the show! 
                You'll get professional digital photos AND a printed Polaroid to take home!
              </p>
            </div>
            
            {/* <div className="bg-white p-4 rounded-lg border-2 border-y2k-purple transform hover:rotate-1 transition-transform">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-y2k-blue mb-3 mx-auto">
                <Music className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-y2k-hotPink">Acoustic Mini-Set</h3>
              <p className="text-sm text-gray-600">
                Witness an intimate acoustic performance of 3 songs before doors open!
                Plus get a signed setlist from the artists after the show!
              </p>
            </div> */}
            
            <div className="bg-white p-4 rounded-lg border-2 border-y2k-purple transform hover:rotate-1 transition-transform">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-y2k-hotPink mb-3 mx-auto">
                <Gift className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-y2k-hotPink">Merch Bundle</h3>
              <p className="text-sm text-gray-600">
                Exclusive VIP merch pack including a limited edition tour t-shirt, 
                enamel pin set, holographic sticker pack, and a Y2K-themed disposable camera!
              </p>
            </div>
            
            {/* <div className="bg-white p-4 rounded-lg border-2 border-y2k-purple transform hover:rotate-1 transition-transform">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-y2k-yellow mb-3 mx-auto">
                <Sparkles className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-y2k-hotPink">Early Access</h3>
              <p className="text-sm text-gray-600">
                Skip the line with priority early entry! Plus exclusive access to all 
                interactive experiences before general admission fans!
              </p>
            </div> */}
          </div>
          
          <Separator className="border-2 border-dashed border-y2k-purple my-6" />
          
          <div className="bg-gradient-to-r from-y2k-green to-y2k-blue p-4 rounded-lg border-2 border-white mt-4">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-[1px_1px_0_rgba(0,0,0,0.3)]">⭐ VIP PASSES - $50 ⭐</h3>
              <p className="text-sm text-white mb-4">
                <span className="bg-y2k-yellow text-y2k-purple px-2 py-1 rounded font-bold">TBA Additional Surprises!</span> More VIP perks to be 
                announced closer to tour dates! Your VIP experience keeps getting better!
              </p>
              <button className="bg-y2k-hotPink text-white px-6 py-2 rounded-lg font-bold border-2 border-white shadow-[3px_3px_0_rgba(0,0,0,0.2)] hover:bg-y2k-purple transition-colors">
                🌟 GET VIP PASSES NOW 🌟
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-y2k-purple p-3 text-center rounded-b-md">
          <p className="text-white text-sm font-bold">
            ♡ Limited VIP passes available per show - Don't miss out! ♡
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VIPExperienceDialog;
