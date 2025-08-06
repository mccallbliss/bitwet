const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-primary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl text-neon font-bold">BITWE 2ER</h3>
            <p className="text-muted-foreground text-sm">
              Experience an early 2000s pop-punk and alt rock with davvn and Jack the Underdog.
            </p>
            <div className="flex space-x-4">
              <a href="https://spacehey.com/davvnmusic" className="text-primary hover:text-secondary transition-colors">
                MYSPACE
              </a>
              <a href="#" className="text-primary hover:text-secondary transition-colors">
                AIM
              </a>
              <a href="#" className="text-primary hover:text-secondary transition-colors">
                MSN
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl text-secondary font-bold">EXPERIENCES</h3>
            <div className="space-y-2 text-sm">
              <div className="block text-muted-foreground hover:text-primary transition-colors">
                Scholastic Book Fair Merch Vibes
              </div>
              <div className="block text-muted-foreground hover:text-primary transition-colors">
                Friendship Bracelets
              </div>
              <div className="block text-muted-foreground hover:text-primary transition-colors">
                Poster Signing
              </div>
              <div className="block text-muted-foreground hover:text-primary transition-colors">
                Free Meet & Greet
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl text-accent font-bold">CONTACT</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: davvnmusic@gmail.com</p>
            </div>
            <div className="text-xs text-muted-foreground">
              © 2025 BITWE TOUR. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <div className="inline-block bg-primary/10 border border-primary/30 px-4 py-2">
            <span className="text-primary font-mono text-sm">
              BUILT WITH {'<3'} FOR THE EARLY INTERNET AESTHETIC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;