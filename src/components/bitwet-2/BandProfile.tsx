interface BandProfileProps {
  name: string;
  description: string;
  image?: string;
  links?: { platform: string; url: string }[];
}

const BandProfile = ({ name, description, image, links }: BandProfileProps) => {
  return (
    <div className="card-retro relative group">
      <div className="absolute -top-2 -right-2 star-burst w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="space-y-4">
        <h3 className="text-2xl text-neon glitch" data-text={name}>
          {name}
        </h3>
        
        {image && (
          <div className="w-full h-48 bg-muted/30 border border-primary/20 flex items-center justify-center">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        )}
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {links && links.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm text-accent uppercase tracking-wider">
              {'>> Links'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="inline-block bg-primary/10 border border-primary/30 px-3 py-1 text-xs text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BandProfile;