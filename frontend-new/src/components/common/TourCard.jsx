// src/components/tours/TourCard.jsx
import { Clock, Star, Heart, ArrowUpRight } from "lucide-react";

export default function TourCard({ tour }) {
  return (
    <div
      key={tour.id}
      className="flex flex-col w-[282px] h-[379px] bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.15)]"
    >
      {/* Image */}
      <div className="relative w-full h-[220px]">
        <img
          src={tour.img}
          alt={tour.name}
          className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
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
        {tour.liked && (
          <button className="absolute top-5 right-5">
            <Heart
              className={`size-5.5 ${
                tour.like ? "fill-red-500 text-red-500" : "text-white"
              }`}
            />
          </button>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 px-6 py-6 gap-5">
        {/* Title + Duration */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[18px] font-normal text-[#00315C] leading-[140%] line-clamp-1">
            {tour.name}
          </h3>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-[#707070] text-[16px]">
              <Clock size={18} className="text-[#707070]" />
              <span>{tour.duration}</span>
            </div>

            <div className="flex gap-[2px]">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} size={12} fill="#FFC515" stroke="#FFC515" />
              ))}
              <Star size={12} stroke="#FFC515" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#D1D1D1]" />

        {/* Price + Button */}
        <div className="flex justify-between items-center">
          <div className="flex items-start gap-[2px]">
            <span className="font-bold text-[18px] text-[#00315C] leading-[140%]">
              {tour.price.toLocaleString("vi-VN")}
            </span>
            <span className="font-bold text-[14px] text-[#00315C]">đ</span>
          </div>

          <button className="flex items-center gap-1 hover:opacity-70 transition-opacity">
            <span className="text-[#F27052] font-bold text-[16px] leading-[140%]">
              Xem chi tiết
            </span>
            <ArrowUpRight size={18} className="text-[#F27052]" />
          </button>
        </div>
      </div>
    </div>
  );
}
