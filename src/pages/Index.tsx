import HeroSection from "@/components/HeroSection";
import FeaturedExhibitions from "@/components/FeaturedExhibitions";
import MuseumInfo from "@/components/MuseumInfo";
import NewsEvents from "@/components/NewsEvents";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedExhibitions />
      <MuseumInfo />
      <NewsEvents />
      <Footer />
    </div>
  );
};

export default Index;
