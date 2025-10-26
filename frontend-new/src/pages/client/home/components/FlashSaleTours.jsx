import { Clock, Star, Heart, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import SectionTitle from "@/components/common/SectionTitle";
import phuQuocImg from "@/assets/images/phu-quoc.png";
import haLongImg from "@/assets/images/ha-long.png";
import ninhBinhImg from "@/assets/images/ninh-binh.png";
import mocChauImg from "@/assets/images/moc-chau.png";
import haGiangImg from "@/assets/images/ha-giang.png";
import nhaTrangImg from "@/assets/images/nha-trang.png";
import hueImg from "@/assets/images/hue.png";
import quyNhonImg from "@/assets/images/quy-nhon.png";

export default function FlashSaleTours() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 10,
    minutes: 11,
    seconds: 21,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tours = [
    {
      id: 1,
      image: phuQuocImg,
      name: "Tour Phú Quốc 3 ngày 2 đêm",
      duration: "3 ngày 2 đêm",
      rating: 4,
      price: "2.945.000",
      discount: "-10%",
      isFavorite: false,
    },
    {
      id: 2,
      image: haLongImg,
      name: "Tour Hạ Long 4 ngày 3 đêm",
      duration: "4 ngày 3 đêm",
      rating: 4,
      price: "3.945.000",
      discount: null,
      isFavorite: false,
    },
    {
      id: 3,
      image: ninhBinhImg,
      name: "Tour Ninh Bình 3 ngày 2 đêm",
      duration: "3 ngày 2 đêm",
      rating: 5,
      price: "2.645.000",
      discount: null,
      isFavorite: true,
    },
    {
      id: 4,
      image: mocChauImg,
      name: "Tour Mộc Châu 3 ngày 2 đêm",
      duration: "3 ngày 2 đêm",
      rating: 4,
      price: "1.945.000",
      discount: "-10%",
      isFavorite: true,
    },
    {
      id: 5,
      image: haGiangImg,
      name: "Tour Hà Giang 2 ngày 1 đêm",
      duration: "2 ngày 1 đêm",
      rating: 5,
      price: "1.530.000",
      discount: null,
      isFavorite: true,
    },
    {
      id: 6,
      image: nhaTrangImg,
      name: "Tour Nha Trang 5 ngày 4 đêm",
      duration: "5 ngày 4 đêm",
      rating: 5,
      price: "5.945.000",
      discount: "-10%",
      isFavorite: false,
    },
    {
      id: 7,
      image: hueImg,
      name: "Tour Huế 4 ngày 3 đêm",
      duration: "4 ngày 3 đêm",
      rating: 5,
      price: "3.945.000",
      discount: "-10%",
      isFavorite: false,
    },
    {
      id: 8,
      image: quyNhonImg,
      name: "Tour Quy Nhơn 6 ngày 5 đêm",
      duration: "6 ngày 5 đêm",
      rating: 5,
      price: "7.945.000",
      discount: "-10%",
      isFavorite: false,
    },
  ];

  return (
    <section className="container mx-auto px-[120px] pb-[100px]">
      <div className="flex flex-col items-center gap-[60px]">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <SectionTitle title="ưu đãi hot hôm nay" align="left" />

          {/* Countdown Timer */}
          <div className="flex items-center gap-3">
            <span className="text-lg text-[#497E91]">
              CHƯƠNG TRÌNH DIỄN RA TRONG
            </span>
            <div className="flex items-center gap-1">
              <div className="bg-[#F27052] text-white px-2.5 py-2 rounded font-bold text-base min-w-[35px] text-center">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <span className="text-[#F27052] font-bold">:</span>
              <div className="bg-[#F27052] text-white px-2.5 py-2 rounded font-bold text-base min-w-[32px] text-center">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <span className="text-[#F27052] font-bold">:</span>
              <div className="bg-[#F27052] text-white px-2.5 py-2 rounded font-bold text-base min-w-[32px] text-center">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>

        {/* Tours Grid - Row 1 */}
        <div className="grid grid-cols-4 gap-6 w-full">
          {tours.slice(0, 4).map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Tours Grid - Row 2 */}
        <div className="grid grid-cols-4 gap-6 w-full">
          {tours.slice(4, 8).map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TourCard({ tour }) {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-[220px] bg-gray-200">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />

        {/* Discount Badge */}
        {tour.discount && (
          <div className="absolute top-5 left-5 bg-white px-3 py-1 rounded">
            <span className="font-bold text-base text-[#00315C]">
              {tour.discount}
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button className="absolute top-5 right-5">
          <Heart
            className={`w-[22px] h-[22px] ${
              tour.isFavorite ? "fill-red-500 text-red-500" : "text-white"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">
        {/* Title & Info */}
        <div className="space-y-3">
          <h3 className="text-lg font-normal text-[#00315C] line-clamp-1">
            {tour.name}
          </h3>

          <div className="flex items-center justify-between">
            {/* Duration */}
            <div className="flex items-center gap-2">
              <Clock className="w-[18px] h-[18px] text-gray-500" />
              <span className="text-base text-gray-500">{tour.duration}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < tour.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Price & Button */}
        <div className="pt-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-0.5">
              <span className="text-lg font-bold text-[#00315C]">
                {tour.price}
              </span>
              <span className="text-sm font-bold text-[#00315C]">đ</span>
            </div>

            <button className="flex items-center gap-1 text-[#F27052] hover:underline">
              <span className="font-bold text-base">Xem chi tiết</span>
              <ArrowUpRight className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
