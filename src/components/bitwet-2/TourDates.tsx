const tourDates = [
  { date: "OCT 16", city: "LOUISVILLE, KY", venue: "What the Lou", link: "https://events.cocoatickets.com/what-the-lou/davvn-jack-the-underdog-live-what-the-lou" },
  { date: "OCT 17", city: "AKRON, OH", venue: "The Rialto Theatre", link: "https://www.therialtotheatre.com/tickets/yacobucci-jack-the-underdog-davvn-10172025" },
  { date: "OCT 18", city: "COLUMBUS, OH", venue: "Warehouse", special: "FESTIVAL DATE", link: "https://www.eventbrite.com/e/high-spirits-art-music-festival-columbus-oh-tickets-1366209562579?aff=DWLT" },
  { date: "OCT 19", city: "PITTSBURGH, PA", venue: "The Poetry Lounge", link: "https://www.radioactiveeventscenter.com/event-details-registration/jack-the-underdog-davvn-born-in-the-wrong-eras-tour-at-poetry-lounge" },
  { date: "OCT 21", city: "PHILADELPHIA, PA", venue: "Kung Fu Necktie", link: "https://www.etix.com/ticket/p/45229371/jack-the-underdog-davyn-philadelphia-kung-fu-necktie" },
  { date: "OCT 23", city: "BOSTON, MA", venue: "Cantab Lounge", link: "https://tunehatch.com/shows/197580202" },
  { date: "OCT 24", city: "NEW YORK CITY, NY", venue: "Berlin Under A", link: "https://www.ticketweb.com/event/davvn-jack-the-underdog-berlin-tickets/13903374?pl=berlin" },
  { date: "OCT 25", city: "BALTIMORE, MD", venue: "American Legion Post 38", special: "FESTIVAL DATE", link: "https://www.eventbrite.com/e/skull-house-rock-tickets-1264177973349?aff=oddtdtcreator" },
  { date: "OCT 26", city: "BALTIMORE, MD", venue: "American Legion Post 38", special: "EMO NIGHT", link: "https://www.eventbrite.com/e/skull-house-rock-tickets-1264177973349?aff=oddtdtcreator" },
  { date: "OCT 27", city: "RICHMOND, VA", venue: "Richmond Music Hall", link: "https://www.etix.com/ticket/p/48238894/davvn-and-jack-the-underdog-richmond-richmond-music-hall" },
  { date: "OCT 28", city: "CHARLOTTE, NC", venue: "The Milestone Club", link: "https://www.freshtix.com/events/davvn?fbclid=PAQ0xDSwLs0zVleHRuA2FlbQIxMAABp7kF9uHp-nUfC8QO-FZWpr2LEjS86EEknNefwJCLEGy4IQRwdPHcPdq8HKM8_aem_bednIwyC0scKlJkfBv8HOQ" },
];

const TourDates = () => {
  return (
    <section id="tour-dates" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-neon glitch mb-4" data-text="TOUR DATES">
            TOUR DATES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="card-retro">
            <div className="space-y-1">
              {tourDates.map((show, index) => (
                <a
                  key={index}
                  href={show.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 px-4 border-b border-border/30 last:border-b-0 hover:bg-primary/5 transition-all duration-200 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                  tabIndex={0}
                  aria-label={`Tickets for ${show.city} at ${show.venue}${show.special ? ' - ' + show.special : ''}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <div className="text-primary font-bold text-lg font-mono tracking-wider">
                      {show.date}
                    </div>
                    <div className="text-foreground font-semibold text-base">
                      {show.city}
                    </div>
                    {!show.special && (
                      <div className="text-muted-foreground text-sm">
                        @ {show.venue}
                      </div>
                    )}
                    {show.special && (
                      <div className="inline-block bg-secondary/20 border border-secondary px-2 py-1 text-xs text-secondary font-bold">
                        ★ {show.special}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <span className="bg-primary/20 border border-primary/50 text-primary px-4 py-1 text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 group-hover:scale-105">
                      TICKETS
                    </span>
                    <div className="text-muted-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      {'>>'}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="text-secondary text-lg font-bold">
                ★ FESTIVAL DATE | ★★ EMO NIGHT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDates;