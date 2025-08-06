import BandProfile from "./BandProfile";

const BandsSection = () => {
  return (
    <section id="bands" className="py-16 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-neon-pink glitch mb-4" data-text="THE BANDS">
            THE BANDS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <BandProfile
            name="davvn"
            description="Capturing attention with their 'new nostalgic' sound, the duo davvn channels the music of the early 2000s that they grew up with in order to heal their inner child and create connection. davvn brings powerful vocals, driving guitar riffs, and an unapologetic attitude that feels both nostalgic and refreshingly modern."
            links={[
              { platform: "YOUTUBE", url: "https://www.youtube.com/@davvnmusic" },
              { platform: "TIKTOK", url: "https://www.tiktok.com/@davvn.music" },
              { platform: "INSTAGRAM", url: "https://www.instagram.com/davvn.music" },
              { platform: "MERCH", url: "https://davvn.com/merch" }
            ]}
          />
          
          <BandProfile
            name="JACK THE UNDERDOG"
            description="Jack The Underdog is an alternative hyperpoppunk artist and songwriter based in Nashville, TN. Jack’s music strives to create a space for all the underdogs of society to feel heard, acknowledged, and welcomed in. His songs are inspired by everything from pop punk to hyperpop to hip hop, so between his original music and his cover of Taylor Swift’s “Back To December”, there’s something for everyone."
            links={[
              { platform: "YOUTUBE", url: "hhttps://www.youtube.com/channel/UCY9JPio2HZTucHpe9BN6daw" },
              { platform: "TIKTOK", url: "https://tiktok.com/@jacktheunderdog" },
              { platform: "INSTAGRAM", url: "https://www.instagram.com/jacktheunderdog/" },
              { platform: "MERCH", url: "https://www.jackohmes.com/new-page-1" }
            ]}
          />
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-card border-2 border-accent p-6 transform -rotate-1">
            <p className="text-accent text-lg font-bold mb-2">
              CATCH THEIR SONG "SUBSTANCE" LIVE
            </p>
            <p className="text-muted-foreground">
              Both artists will perform their collaboration at all tour dates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BandsSection;