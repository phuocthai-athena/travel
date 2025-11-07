import HeroBanner from "@/components/client/home/ui/HeroBanner";
import HowItWorks from "@/components/client/home/ui/HowItWorks";
import FlashSaleTours from "@/components/client/home/ui/FlashSaleTours";
import Statistics from "@/components/client/home/ui/Statistics";
import HotelPromotions from "@/components/client/home/ui/HotelPromotions";
import PopularDestinations from "@/components/client/home/ui/PopularDestinations";
import CustomerReviews from "@/components/client/home/ui/CustomerReviews";
import FeaturedBlogs from "@/components/client/home/ui/FeaturedBlogs";

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
