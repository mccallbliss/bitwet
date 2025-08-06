import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-card border-b-2 border-primary/30">
      {/* Animated background elements */}
      <div className="star-burst w-8 h-8 top-4 right-20 opacity-60"></div>
      <div className="star-burst w-6 h-6 top-12 right-32 opacity-40"></div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl text-neon glitch" data-text="Born In The Wrong Era*s 2er">
            Born In The Wrong Era*s 2er
          </h1>
          
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl text-neon-pink">
              DAVVN & JACK THE UNDERDOG
            </h2>
            <p className="text-lg text-accent uppercase tracking-wider">
              Fall 2025 Tour
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-cyber"
              onClick={() => document.getElementById('tour-dates')?.scrollIntoView({ behavior: 'smooth' })}
            >
              GET TICKETS NOW
            </Button>
            <div className="text-sm text-muted-foreground">
              Don't miss out!
            </div>
          </div>
          
          <div className="inline-block bg-secondary/20 border-2 border-secondary px-4 py-2 transform rotate-2">
            <span className="text-secondary font-bold">★ TIME TRAVEL TO THE 2000s! ★</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;