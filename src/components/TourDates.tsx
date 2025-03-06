
import React from "react";
import { Badge } from "@/components/ui/badge";

interface TourDate {
  id: number;
  city: string;
  venue: string;
  date: string;
  soldOut: boolean;
}

const tourDates: TourDate[] = [
  { id: 1, city: "New York, NY", venue: "Madison Square Garden", date: "Sept 15, 2023", soldOut: true },
  { id: 2, city: "Los Angeles, CA", venue: "The Forum", date: "Sept 22, 2023", soldOut: false },
  { id: 3, city: "Chicago, IL", venue: "United Center", date: "Sept 28, 2023", soldOut: false },
  { id: 4, city: "Miami, FL", venue: "American Airlines Arena", date: "Oct 5, 2023", soldOut: false },
  { id: 5, city: "Dallas, TX", venue: "American Airlines Center", date: "Oct 12, 2023", soldOut: false },
  { id: 6, city: "Seattle, WA", venue: "Climate Pledge Arena", date: "Oct 19, 2023", soldOut: false },
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
                    {tour.soldOut ? (
                      <Badge className="bg-red-500 hover:bg-red-600 rainbow-text animate-blink">
                        SOLD OUT!!!
                      </Badge>
                    ) : (
                      <Badge className="bg-green-500 hover:bg-green-600">
                        Get Tickets!
                      </Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center">
        <button className="y2k-button">
          <span className="rainbow-text">✧･ﾟ</span> Get VIP Passes <span className="rainbow-text">✧･ﾟ</span>
        </button>
      </div>
    </section>
  );
};

export default TourDates;
