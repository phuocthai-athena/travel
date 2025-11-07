import Advantages from "@/components/client/tours/ui/Advantages";
import Banner from "@/components/client/tours/ui/Banner";
import DestinationSuggestions from "@/components/client/tours/ui/DestinationSuggestions";
import PromoBanner from "@/components/client/tours/ui/PromoBanner";
import RecentlyViewed from "@/components/client/tours/ui/RecentlyViewed";
import SummerTours from "@/components/client/tours/ui/SummerTours";
import TourSuggestions from "@/components/client/tours/ui/TourSuggestions";

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
