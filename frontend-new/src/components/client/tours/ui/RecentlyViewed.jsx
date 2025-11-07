import { Clock, Star } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import quyNhonImg from "@/assets/images/quy-nhon.png";

export default function RecentlyViewed() {
  // Mock data - replace with actual recently viewed tours
  const recentTours = [
    {
      id: 1,
      name: "Tour Xe Lửa Quy Nhơn",
      duration: "3 ngày 2 đêm",
      rating: 4.9,
      price: 2945000,
      image: quyNhonImg,
    },
    {
      id: 2,
      name: "Tour Xe Lửa Quy Nhơn",
      duration: "3 ngày 2 đêm",
      rating: 4.9,
      price: 2945000,
      image: quyNhonImg,
    },
    {
      id: 3,
      name: "Tour Xe Lửa Quy Nhơn",
      duration: "3 ngày 2 đêm",
      rating: 4.9,
      price: 2945000,
      image: quyNhonImg,
    },
    {
      id: 4,
      name: "Tour Xe Lửa Quy Nhơn",
      duration: "3 ngày 2 đêm",
      rating: 4.9,
      price: 2945000,
      image: quyNhonImg,
    },
    {
      id: 5,
      name: "Tour Xe Lửa Quy Nhơn",
      duration: "3 ngày 2 đêm",
      rating: 4.9,
      price: 2945000,
      image: quyNhonImg,
    },
    {
      id: 6,
      name: "Tour Xe Lửa Quy Nhơn",
      duration: "3 ngày 2 đêm",
      rating: 4.9,
      price: 2945000,
      image: quyNhonImg,
    },
  ];

  return (
    <section className="flex flex-col gap-15 px-30 pb-25 max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center">
        <SectionTitle title="Đã xem gần đây" />

        <button className="text-lg leading-[140%] text-[#F27052] bg-transparent border-none border-b-[1.5px] border-b-[#F27052] cursor-pointer p-1 transition-opacity hover:opacity-70">
          Xóa tất cả
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {recentTours.map((tour) => (
          <RecentTourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}

function RecentTourCard({ tour }) {
  return (
    <div className="flex bg-white rounded overflow-hidden transition-all hover:-translate-y-[3px] hover:shadow-[0px_8px_20px_rgba(0,0,0,0.1)] cursor-pointer">
      <img
        src={tour.image}
        alt={tour.name}
        className="w-[180px] h-[106px] object-cover shrink-0"
      />

      <div className="flex flex-col justify-between px-6 py-3 flex-1">
        <div className="flex flex-col gap-2">
          <h4 className="text-base font-normal leading-[140%] text-[#00315C] m-0 line-clamp-1">
            {tour.name}
          </h4>

          <div className="flex items-center gap-2 text-sm leading-[130%] text-[#707070]">
            <Clock size={14} className="text-[#707070]" />
            <span>{tour.duration}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-sm leading-[130%] text-[#707070]">
            <Star size={12} fill="#FFC515" stroke="#FFC515" />
            <span>({tour.rating})</span>
          </div>

          <div className="flex items-start gap-0.5">
            <span className="font-bold text-base leading-[140%] text-[#00315C]">
              {tour.price.toLocaleString("vi-VN")}
            </span>
            <span className="font-bold text-xs leading-[130%] text-[#00315C]">
              đ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
