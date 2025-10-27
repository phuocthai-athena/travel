import { ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import TourCard from "@/components/common/TourCard";
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
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}
