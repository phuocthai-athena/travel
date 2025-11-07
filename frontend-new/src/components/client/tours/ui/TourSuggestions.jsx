import { useState } from "react";
import { Clock, Star, Heart, ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import mocChau from "@/assets/images/moc-chau.png";
import nhaTrang from "@/assets/images/nha-trang.png";
import hue from "@/assets/images/hue.png";
import quyNhon from "@/assets/images/quy-nhon.png";

export default function TourSuggestions() {
  const [activeTab, setActiveTab] = useState("daily");

  const tabs = [
    { id: "daily", label: "Tour trong ngày" },
    { id: "short", label: "Tour ngắn ngày" },
    { id: "experience", label: "Tour trải nghiệm" },
    { id: "resort", label: "Tour nghỉ dưỡng" },
  ];

  const mockTours = [
    {
      id: 1,
      name: "Tour Mộc Châu 3 ngày 2 đêm",
      img: mocChau,
      price: 1945000,
      duration: "3 ngày 2 đêm",
      discount: true,
      liked: true,
    },
    {
      id: 2,
      name: "Tour Nha Trang 5 ngày 4 đêm",
      img: nhaTrang,
      price: 5945000,
      duration: "5 ngày 4 đêm",
      discount: true,
      liked: false,
    },
    {
      id: 3,
      name: "Tour Huế 4 ngày 3 đêm",
      img: hue,
      price: 3945000,
      duration: "4 ngày 3 đêm",
      discount: true,
      liked: false,
    },
    {
      id: 4,
      name: "Tour Quy Nhơn 6 ngày 5 đêm",
      img: quyNhon,
      price: 7945000,
      duration: "6 ngày 5 đêm",
      discount: true,
      liked: false,
    },
  ];

  return (
    <section className="flex flex-col gap-15 px-30 pb-15 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center w-[1200px]">
        {/* Left: Title */}
        <SectionTitle title="V-Travel gợi ý" />

        {/* Right: Tabs */}
        <div className="flex flex-row items-center">
          {tabs.map((tab, index) => (
            <div key={tab.id} className="flex items-center">
              {index > 0 && (
                <div className="h-3 w-px border border-[#E7E7E7] mx-3" />
              )}
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`text-lg leading-[140%] transition-colors ${
                  activeTab === tab.id
                    ? "text-[#F27052]"
                    : "text-[#707070] hover:text-[#F27052]"
                }`}
              >
                {tab.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 w-[1200px]">
        {mockTours.map((tour) => (
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
              {tour.discount && (
                <div className="absolute top-5 left-5 rounded px-3 py-1 font-bold text-base text-[#00315C]">
                  -10%
                </div>
              )}
              <button
                className={`absolute top-5 right-5 size-9 flex items-center justify-center rounded-full ${
                  tour.liked
                    ? "bg-[#FC4337]/20"
                    : "bg-black/20 hover:bg-black/40"
                } transition-all`}
              >
                <Heart
                  size={18}
                  stroke={tour.liked ? "#FC4337" : "#fff"}
                  fill={tour.liked ? "#FC4337" : "none"}
                />
              </button>
            </div>

            {/* Info */}
            <div className="flex flex-col flex-1 px-6 py-6 gap-5">
              {/* Title + Duration */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-normal text-[#00315C] leading-[140%] line-clamp-1">
                  {tour.name}
                </h3>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-[#707070] text-base">
                    <Clock size={18} className="text-[#707070]" />
                    <span>{tour.duration}</span>
                  </div>

                  <div className="flex gap-0.5">
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
                <div className="flex items-start gap-0.5">
                  <span className="font-bold text-lg text-[#00315C] leading-[140%]">
                    {tour.price.toLocaleString("vi-VN")}
                  </span>
                  <span className="font-bold text-sm text-[#00315C]">đ</span>
                </div>

                <button className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                  <span className="text-[#F27052] font-bold text-base leading-[140%]">
                    Xem chi tiết
                  </span>
                  <ArrowUpRight size={18} className="text-[#F27052]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-3">
        <span className="size-2 rounded-full bg-[#E7E7E7]" />
        <span className="size-3 rounded-full bg-[#F27052]" />
        <span className="size-2 rounded-full bg-[#E7E7E7]" />
      </div>
    </section>
  );
}
