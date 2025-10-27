import { Heart, MapPin, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/common/SectionTitle";
import TruncatedTextWithTooltip from "@/components/common/TruncatedTextWithTooltip";
import vinpearlResortImg from "@/assets/images/vinpearl-resort.png";
import meliaResortImg from "@/assets/images/melia-resort.png";
import ibisHotelImg from "@/assets/images/ibis-hotel.png";

export default function HotelPromotions() {
  const hotels = [
    {
      id: 1,
      name: "Vinpearl Resort & Golf Nam Hội An",
      location: "Huyện Thăng Bình, Quảng Nam",
      price: "3.355.845",
      rating: 5.0,
      image: vinpearlResortImg,
      isFavorite: false,
    },
    {
      id: 2,
      name: "Sol by Meliá Phú Quốc Resort",
      location: "Dương Tơ, Phú Quốc, Kiên Giang",
      price: "1.374.822",
      rating: 4.9,
      image: meliaResortImg,
      isFavorite: false,
    },
    {
      id: 3,
      name: "Khách Sạn ibis Styles Vũng Tàu",
      location: "Thành Phố Vũng Tàu, Bà Rịa Vũng Tàu",
      price: "1.163.688",
      rating: 4.8,
      image: ibisHotelImg,
      isFavorite: false,
    },
  ];

  return (
    <section className="flex flex-col gap-15 px-30 pb-25 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <SectionTitle title="Du lịch nghỉ dưỡng" />

        <Button className="bg-[#F27052] hover:bg-[#F27052]/90 text-white px-6 py-3 gap-2 rounded">
          <span className="font-bold text-lg leading-[140%]">
            Xem thêm tour
          </span>
          <ArrowUpRight className="size-5" />
        </Button>
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-4 gap-6 w-full">
        {/* Promotion Card */}
        <div className="relative h-[411px] rounded-lg overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(359.34deg, rgba(2, 30, 58, 0.5) -7.46%, rgba(255, 255, 255, 0.205) 48.05%, rgba(36, 175, 131, 0.5) 104.82%), url('/hotel-promo-bg.jpg')",
              backdropFilter: "blur(5px)",
            }}
          />
          <div className="relative p-5 h-full flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-lg leading-[140%] font-bold text-white">
                ƯU ĐÃI HOT HÔM NAY!
              </h3>
              <div className="flex flex-col gap-0">
                <p className="text-2xl leading-[140%] font-normal text-white">
                  Giảm 20%
                </p>
                <p className="text-xl leading-[140%] font-normal text-white">
                  Dành cho resort, khách sạn
                </p>
              </div>
            </div>
            <Button className="bg-[#F27052] hover:bg-[#F27052]/90 text-white w-fit px-6 py-3 gap-2 rounded">
              <span className="font-bold text-lg leading-[140%]">
                Xem tất cả
              </span>
              <ArrowUpRight className="size-5" />
            </Button>
          </div>
        </div>

        {/* Hotel Cards */}
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}

function HotelCard({ hotel }) {
  return (
    <div className="relative h-[411px] rounded-lg overflow-hidden group">
      {/* Image */}
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-full object-cover"
      />

      {/* Favorite Button */}
      <button className="absolute top-5 right-5 z-10">
        <Heart
          className={`size-5 ${
            hotel.isFavorite ? "fill-red-500 text-red-500" : "stroke-white"
          }`}
          strokeWidth={2.5}
          fill="none"
        />
      </button>

      {/* Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-[rgba(112,112,112,0.4)] backdrop-blur-[2px] p-6 rounded-b-lg flex flex-col gap-3">
        {/* Location Info */}
        <div className="flex flex-col gap-3">
          <TruncatedTextWithTooltip className="text-lg leading-[140%] font-bold text-white">
            {hotel.name}
          </TruncatedTextWithTooltip>
          <div className="flex items-center gap-2 text-white">
            <MapPin className="size-4.5 shrink-0" />
            <TruncatedTextWithTooltip className="text-base leading-[140%] font-normal flex-1">
              {hotel.location}
            </TruncatedTextWithTooltip>
          </div>
        </div>

        <div className="h-px bg-white" style={{ opacity: 0.8 }} />

        {/* Price & Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-0.5 text-white">
            <span className="font-bold text-lg leading-[140%]">
              {hotel.price}
            </span>
            <span className="font-bold text-sm leading-[140%]">đ</span>
          </div>

          <div className="flex items-center gap-1">
            <Star className="size-3.5 fill-[#FFC515] text-[#FFC515]" />
            <span className="font-normal text-base leading-[140%] text-white">
              ({hotel.rating})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
