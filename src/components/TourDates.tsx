
import React from "react";
import { Badge } from "@/components/ui/badge";
import VIPExperienceDialog from "./VIPExperienceDialog";

interface TourDate {
  id: number;
  city: string;
  venue: string;
  date: string;
  link?: string;
  soldOut: boolean;
}

const tourDates: TourDate[] = [
  { id: 1, city: "Columbus, OH", venue: "Rumba Cafe", date: "May 15, 2025", link: "https://www.ticketweb.com/event/jack-the-underdog-davvn-rumba-cafe-tickets/14267113?pl=celebrity&irgwc=1&clickid=xmfVN0SJ1xyKW3c3YPSUi0yjUksw4Y2HUzMrxI0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272", soldOut: false },
  { id: 2, city: "Chicago, IL", venue: "Burlington Bar", date: "May 16, 2025", link: "https://dice.fm/event/2wvm26-davvn-jack-the-underdog-em-grace-16th-may-the-burlington-chicago-tickets?pid=530cb286&_branch_match_id=1079957625313546285&utm_medium=partners_api&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1fc2SjZOMUpONbCwNLYvyEyxNTU2SE4ysjBTqytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAA7B84UgAAAA%3D", soldOut: false },
  { id: 3, city: "Detroit, MI", venue: "New Dodge Lounge", date: "May 18, 2025", link: "https://newdodgelounge.ticketleap.com/new-dodge-lounge-presents-davvn-x-jack-the-underdog-wsg-inconsi/", soldOut: false },
  { id: 4, city: "Milwaukee, WI", venue: "Cactus Club", date: "May 20, 2025", link: "https://tickets.venuepilot.com/e/jack-the-underdog-davvn-haydentheposer-2025-05-20-cactus-club-milwaukee-61d6c1", soldOut: false },
  { id: 5, city: "St Paul, MN", venue: "Amsterdam Bar & Hall", date: "May 23, 2025", link: "https://dice.fm/partner/amsterdam-llc-dba-amsterdam-bar--hall/event/53vvey-born-in-the-wrong-eras-tour-23rd-may-amsterdam-bar-hall-saint-paul-tickets?dice_id=5420739&dice_channel=web&dice_tags=organic&dice_campaign=Amsterdam+LLC+dba+Amsterdam+Bar+%26+Hall&dice_feature=mio_marketing&_branch_match_id=1402558761988136003&utm_source=web&utm_campaign=Amsterdam+LLC+dba+Amsterdam+Bar+%26+Hall&utm_medium=mio_marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1S%2BxSDZIMjI0N0hJsrCvK0pNSy0qysxLj08qyi8vTi2ydc4oys9NBQCplj9wOwAAAA%3D%3D&pid=530cb286", soldOut: false },
  { id: 6, city: "Des Moines, IA", venue: "xBk Live", date: "May 24, 2025", link: "https://wl.seetickets.us/event/davvn-and-jack-the-underdog/641550?afflky=xBkLive", soldOut: false },
  { id: 7, city: "Kansas City, MO", venue: "Minibar", date: "May 25, 2025", link: "https://dice.fm/event/mxkmvl-davvn-x-jack-the-underdog-born-in-the-wrong-eras-25th-may-minibar-kansas-city-tickets?pid=530cb286&_branch_match_id=1079957625313546285&utm_medium=partners_api&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1S9Js7A0NjK3sDAzNrYvyEyxNTU2SE4ysjBTqytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAU8am40gAAAA%3D", soldOut: false },
  { id: 8, city: "Lawrence, KS", venue: "Replay Lounge", date: "May 26, 2025", soldOut: false },
  { id: 9, city: "St Louis, MO", venue: "Red Flag", date: "May 27, 2025", link: "https://www.etix.com/ticket/p/59813169/davvn-saint-louis-red-flag", soldOut: false },
  { id: 10, city: "Nashville, TN", venue: "The East Room", date: "May 28, 2025", link: "https://www.ticketweb.com/event/jack-the-underdog-davvn-the-east-room-tickets/14268233?irgwc=1&clickid=xmfVN0SJ1xyKW3c3YPSUi0yjUksw4YT-UzMrxI0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272", soldOut: false },
];

const TourDates: React.FC = () => {
  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <div className="w-3 h-3 bg-y2k-yellow rounded-full animate-sparkle mr-2" />
        <h2 className="text-3xl font-bold text-y2k-hotPink inline-block">Tour Dates!</h2>
        <div className="w-3 h-3 bg-y2k-yellow rounded-full animate-sparkle ml-2" />
      </div>
      
      <div className="y2k-border bg-white p-4 rounded-lg mb-6">
        <div className="overflow-x-auto">
          <table className="y2k-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>City</th>
                <th>Venue</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tourDates.map((tour) => (
                <tr key={tour.id}>
                  <td className="font-bold">{tour.date}</td>
                  <td>{tour.city}</td>
                  <td>{tour.venue}</td>
                  <td>
                    {tour.link && (
                      <div>
                        {tour.soldOut ? (
                          <Badge link={tour.link} className="bg-red-500 hover:bg-red-600 rainbow-text animate-blink">
                            SOLD OUT!!!
                          </Badge>
                        ) : (
                          <Badge link={tour.link} className="bg-green-500 hover:bg-green-600">
                            Get Tickets!
                          </Badge>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center">
        <VIPExperienceDialog>
          <button className="y2k-button">
            <span className="rainbow-text">✧･ﾟ</span> Get VIP Passes <span className="rainbow-text">✧･ﾟ</span>
          </button>
        </VIPExperienceDialog>
      </div>
    </section>
  );
};

export default TourDates;
