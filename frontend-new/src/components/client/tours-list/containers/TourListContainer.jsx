import { useState } from "react";
import TourCard from "@/components/common/TourCard";
import PaginationComp from "@/components/common/PaginationComp";

import phuQuocImg from "@/assets/images/phu-quoc.png";
import haLongImg from "@/assets/images/ha-long.png";
import ninhBinhImg from "@/assets/images/ninh-binh.png";
import mocChauImg from "@/assets/images/moc-chau.png";
import haGiangImg from "@/assets/images/ha-giang.png";
import nhaTrangImg from "@/assets/images/nha-trang.png";
import hueImg from "@/assets/images/hue.png";
import quyNhonImg from "@/assets/images/quy-nhon.png";

export default function TourListContainer() {
  const [page, setPage] = useState(1);
  const totalPages = 12;

  const currentTours = [
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
    {
      id: 9,
      img: haGiangImg,
      name: "Tour Hà Giang 2 ngày 1 đêm",
      duration: "2 ngày 1 đêm",
      rating: 5,
      price: "1.530.000",
      discount: null,
      liked: true,
    },
    {
      id: 10,
      img: nhaTrangImg,
      name: "Tour Nha Trang 5 ngày 4 đêm",
      duration: "5 ngày 4 đêm",
      rating: 5,
      price: "5.945.000",
      discount: "-10%",
      liked: false,
    },
    {
      id: 11,
      img: hueImg,
      name: "Tour Huế 4 ngày 3 đêm",
      duration: "4 ngày 3 đêm",
      rating: 5,
      price: "3.945.000",
      discount: "-10%",
      liked: false,
    },
    {
      id: 12,
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
    <div className="flex flex-col w-full gap-8">
      {/* Tours Grid */}
      <div className="grid grid-cols-3 gap-6 w-full">
        {currentTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>

      {/* Pagination */}
      <PaginationComp
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
