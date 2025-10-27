import { Clock, Star, Heart, ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import phuQuoc from "@/assets/images/phu-quoc.png";
import haLong from "@/assets/images/ha-long.png";
import ninhBinh from "@/assets/images/ninh-binh.png";
import mocChau from "@/assets/images/moc-chau.png";
import haGiang from "@/assets/images/ha-giang.png";
import nhaTrang from "@/assets/images/nha-trang.png";
import hue from "@/assets/images/hue.png";
import quyNhon from "@/assets/images/quy-nhon.png";

export default function SummerTours() {
  const tours = [
    {
      id: 1,
      name: "Tour Phú Quốc 3 ngày 2 đêm",
      img: phuQuoc,
      price: 2945000,
      duration: "3 ngày 2 đêm",
      discount: true,
      liked: false,
    },
    {
      id: 2,
      name: "Tour Hạ Long 4 ngày 3 đêm",
      img: haLong,
      price: 3945000,
      duration: "4 ngày 3 đêm",
      discount: false,
      liked: false,
    },
    {
      id: 3,
      name: "Tour Ninh Bình 3 ngày 2 đêm",
      img: ninhBinh,
      price: 2645000,
      duration: "3 ngày 2 đêm",
      discount: false,
      liked: true,
    },
    {
      id: 4,
      name: "Tour Mộc Châu 3 ngày 2 đêm",
      img: mocChau,
      price: 1945000,
      duration: "3 ngày 2 đêm",
      discount: true,
      liked: true,
    },
    {
      id: 5,
      name: "Tour Hà Giang 2 ngày 1 đêm",
      img: haGiang,
      price: 1530000,
      duration: "2 ngày 1 đêm",
      discount: false,
      liked: true,
    },
    {
      id: 6,
      name: "Tour Nha Trang 5 ngày 4 đêm",
      img: nhaTrang,
      price: 5945000,
      duration: "5 ngày 4 đêm",
      discount: true,
      liked: false,
    },
    {
      id: 7,
      name: "Tour Huế 4 ngày 3 đêm",
      img: hue,
      price: 3945000,
      duration: "4 ngày 3 đêm",
      discount: true,
      liked: false,
    },
    {
      id: 8,
      name: "Tour Quy Nhơn 6 ngày 5 đêm",
      img: quyNhon,
      price: 7945000,
      duration: "6 ngày 5 đêm",
      discount: true,
      liked: false,
    },
  ];

  return (
    <section className="flex flex-col gap-[60px] px-[120px] pb-[100px] max-w-[1440px] mx-auto">
      {/* Title & Button */}
      <div className="flex justify-between items-center w-[1200px]">
        <SectionTitle title="Tour du lịch hè giá tốt" />

        <button className="flex items-center gap-2 px-6 py-3 bg-[#F27052] hover:bg-[#E05E41] rounded transition-colors">
          <span className="text-white font-bold text-[18px] leading-[140%]">
            Xem thêm tour
          </span>
          <ArrowUpRight size={20} className="text-white" />
        </button>
      </div>

      {/* Tour grid */}
      <div className="grid grid-cols-4 gap-6 w-[1200px]">
        {tours.map((tour) => (
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
                <div className="absolute top-5 left-5 rounded px-3 py-1 font-bold text-[16px] text-[#00315C]">
                  -10%
                </div>
              )}
              <button
                className={`absolute top-5 right-5 w-[36px] h-[36px] flex items-center justify-center rounded-full ${
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
                  <span className="font-bold text-[14px] text-[#00315C]">
                    đ
                  </span>
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
        ))}
      </div>
    </section>
  );
}
