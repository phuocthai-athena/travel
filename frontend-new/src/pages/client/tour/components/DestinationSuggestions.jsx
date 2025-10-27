import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import mocChauImg from "@/assets/images/moc-chau.png";
import caoBangImg from "@/assets/images/ha-giang.png";
import haLongImg from "@/assets/images/ha-long.png";
import ninhBinhImg from "@/assets/images/ninh-binh.png";

export default function DestinationSuggestions() {
  const destinations = [
    { id: 1, name: "Mộc Châu", tours: "3 tours", image: mocChauImg },
    { id: 2, name: "Cao Bằng", tours: "11 tours", image: caoBangImg },
    { id: 3, name: "Hạ Long", tours: "15 tours", image: haLongImg },
    { id: 4, name: "Ninh Bình", tours: "8 tours", image: ninhBinhImg },
  ];

  return (
    <section
      className="relative flex flex-col items-start px-30 pt-50 pb-27 gap-15"
      style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center w-[1200px] h-[54px]">
        {/* Title */}
        <SectionTitle title="Khám phá điểm đến gần đây" />

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#FEF4F2] transition-transform hover:scale-105">
            <ChevronLeft size={18} className="text-[#F27052]" />
          </button>
          <button className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#F27052] transition-transform hover:scale-105">
            <ChevronRight size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="grid grid-cols-4 gap-6 w-[1200px]">
        {destinations.map((item) => (
          <div
            key={item.id}
            className="relative w-[282px] h-[380px] rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-[5px]"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.5)]"></div>

            {/* Bottom Info */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
              <h3 className="text-[18px] font-bold text-white leading-[140%]">
                {item.name}
              </h3>
              <span className="text-[16px] font-normal text-[#FFC515] leading-[140%]">
                {item.tours}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
