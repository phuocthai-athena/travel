import { useState, useEffect } from "react";
import SectionTitle from "@/components/common/SectionTitle";
import TourCard from "@/components/common/TourCard";
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
      img: phuQuocImg,
      name: "Tour Phú Quốc 3 ngày 2 đêm",
      duration: "3 ngày 2 đêm",
      rating: 4,
      price: "2.945.000",
      discount: "-10%",
      liked: false,
    },
    {
      id: 2,
      img: haLongImg,
      name: "Tour Hạ Long 4 ngày 3 đêm",
      duration: "4 ngày 3 đêm",
      rating: 4,
      price: "3.945.000",
      discount: null,
      liked: false,
    },
    {
      id: 3,
      img: ninhBinhImg,
      name: "Tour Ninh Bình 3 ngày 2 đêm",
      duration: "3 ngày 2 đêm",
      rating: 5,
      price: "2.645.000",
      discount: null,
      liked: true,
    },
    {
      id: 4,
      img: mocChauImg,
      name: "Tour Mộc Châu 3 ngày 2 đêm",
      duration: "3 ngày 2 đêm",
      rating: 4,
      price: "1.945.000",
      discount: "-10%",
      liked: true,
    },
    {
      id: 5,
      img: haGiangImg,
      name: "Tour Hà Giang 2 ngày 1 đêm",
      duration: "2 ngày 1 đêm",
      rating: 5,
      price: "1.530.000",
      discount: null,
      liked: true,
    },
    {
      id: 6,
      img: nhaTrangImg,
      name: "Tour Nha Trang 5 ngày 4 đêm",
      duration: "5 ngày 4 đêm",
      rating: 5,
      price: "5.945.000",
      discount: "-10%",
      liked: false,
    },
    {
      id: 7,
      img: hueImg,
      name: "Tour Huế 4 ngày 3 đêm",
      duration: "4 ngày 3 đêm",
      rating: 5,
      price: "3.945.000",
      discount: "-10%",
      liked: false,
    },
    {
      id: 8,
      img: quyNhonImg,
      name: "Tour Quy Nhơn 6 ngày 5 đêm",
      duration: "6 ngày 5 đêm",
      rating: 5,
      price: "7.945.000",
      discount: "-10%",
      liked: false,
    },
  ];

  return (
    <section className="flex flex-col gap-15 px-30 pb-25 max-w-[1440px] mx-auto">
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
    </section>
  );
}
