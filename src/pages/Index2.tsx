import Header from "@/components/bitwet-2/Header";
import BandsSection from "@/components/bitwet-2/BandsSection";
import TourDates from "@/components/bitwet-2/TourDates";
import Footer from "@/components/bitwet-2/Footer";

const Index2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TourDates />
      <BandsSection />
      <Footer />
      
      {/* Floating decorative elements */}
      <div className="fixed top-1/4 left-4 star-burst w-4 h-4 opacity-30 animate-pulse"></div>
      <div className="fixed bottom-1/3 right-8 star-burst w-6 h-6 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Index2;