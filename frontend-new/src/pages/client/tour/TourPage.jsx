import Advantages from "./components/Advantages";
import Banner from "./components/Banner";
import DestinationSuggestions from "./components/DestinationSuggestions";
import PromoBanner from "./components/PromoBanner";
import RecentlyViewed from "./components/RecentlyViewed";
import SummerTours from "./components/SummerTours";
import TourSuggestions from "./components/TourSuggestions";

export default function TourPage() {
  const handleSearch = (params) => {
    // Handle search logic here
    console.log("Search params:", params);
  };

  return (
    <>
      <Banner onSearch={handleSearch} />
      <DestinationSuggestions />
      <SummerTours />
      <PromoBanner />
      <TourSuggestions />
      <Advantages />
      <RecentlyViewed />
    </>
  );
}
