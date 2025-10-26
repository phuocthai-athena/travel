import HeroBanner from "./components/HeroBanner";
import HowItWorks from "./components/HowItWorks";
import FlashSaleTours from "./components/FlashSaleTours";
import Statistics from "./components/Statistics";
import HotelPromotions from "./components/HotelPromotions";
import PopularDestinations from "./components/PopularDestinations";
import CustomerReviews from "./components/CustomerReviews";
import FeaturedBlogs from "./components/FeaturedBlogs";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <HowItWorks />
      <FlashSaleTours />
      <Statistics />
      <HotelPromotions />
      <PopularDestinations />
      <CustomerReviews />
      <FeaturedBlogs />
    </>
  );
}
