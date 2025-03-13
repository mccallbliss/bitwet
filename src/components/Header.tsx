
import React, { useEffect, useMemo, useState } from "react";

const Header: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const visitorCount = useMemo(() => {
    var numRand = Math. floor(Math. random() * 10001);     
    return String(numRand).split("");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="py-6 px-4 mb-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="star absolute top-5 left-10" />
      <div className="star absolute top-20 right-14" />
      <div className="heart absolute bottom-10 left-1/4" />
      <div className="heart absolute bottom-5 right-1/3" />
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="marquee-container mb-4 bg-y2k-purple text-white py-2 y2k-border">
          <p className="marquee-text text-lg font-bold">
            ⭐️ NEW TOUR DATES ADDED!! ⭐️ VIP PACKAGES AVAILABLE NOW!! ⭐️ MEET & GREET SPOTS LIMITED!! ⭐️
          </p>
        </div>
        
        <div className="relative">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-2 text-y2k-hotPink drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]"
            style={{ textShadow: "3px 3px 0 #FFF, -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF" }}
          >
            Born in the Wrong Eras Tour
          </h1>
          <div 
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <span className="text-5xl md:text-7xl opacity-20">✨</span>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl font-bold text-y2k-purple mt-2 animate-bounce-light">
          davvn x Jack The Underdog * Tour 2024
        </p>
        
        <div className="visitor-counter mt-2 mx-auto max-w-xs">
          <p className="text-xs mb-1">You are visitor #</p>
          <div className="flex justify-center text-sm">
            {visitorCount.map((digit, index) => (
              <span key={index} className="inline-block bg-black text-white px-2 mx-px">{digit}</span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
