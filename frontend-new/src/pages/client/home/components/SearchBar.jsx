import { useState } from "react";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState("hotel");

  // Dynamic labels based on active tab
  const getLabels = () => {
    if (activeTab === "tour") {
      return {
        startDate: "Ngày đi",
        endDate: "Ngày về",
      };
    }
    return {
      startDate: "Ngày nhận phòng",
      endDate: "Ngày trả phòng",
    };
  };

  const labels = getLabels();

  return (
    <div className="absolute bottom-[-92px] left-[120px] right-[120px] z-20">
      <div
        className="flex flex-col"
        style={{
          filter:
            "drop-shadow(0px 54px 22px rgba(79, 79, 79, 0.01)) drop-shadow(0px 31px 18px rgba(79, 79, 79, 0.05)) drop-shadow(0px 14px 14px rgba(79, 79, 79, 0.09)) drop-shadow(0px 3px 7px rgba(79, 79, 79, 0.1)) drop-shadow(0px 0px 0px rgba(79, 79, 79, 0.1))",
        }}
      >
        {/* Tabs */}
        <div
          className="flex w-[261px]"
          style={{
            filter: "drop-shadow(4px 6px 19px rgba(0, 0, 0, 0.1))",
          }}
        >
          <button
            onClick={() => setActiveTab("tour")}
            className={`flex items-center gap-2 px-6 py-3 transition-colors ${
              activeTab === "tour"
                ? "bg-white text-[#00315C]"
                : "bg-white text-[#707070]"
            }`}
            style={{
              borderRadius: "8px 0px 0px 0px",
              width: "111px",
              height: "46px",
            }}
          >
            <MapPin className="w-[18px] h-[18px]" />
            <span className="text-[16px] leading-[140%] font-normal">Tour</span>
          </button>
          <button
            onClick={() => setActiveTab("hotel")}
            className={`flex items-center gap-2 px-6 py-3 flex-1 transition-colors ${
              activeTab === "hotel"
                ? "bg-[#00315C] text-white"
                : "bg-white text-[#707070]"
            }`}
            style={{
              borderRadius: "0px 8px 0px 0px",
              width: "150px",
              height: "46px",
            }}
          >
            <MapPin className="w-[22px] h-[22px]" />
            <span className="text-[16px] leading-[140%] font-normal flex-1">
              Khách sạn
            </span>
          </button>
        </div>

        {/* Search Form */}
        <div
          className="bg-white flex items-end"
          style={{
            borderRadius: "0px 8px 8px 8px",
            padding: "30px 24px",
            gap: "12px",
          }}
        >
          {/* Departure Location */}
          <div className="flex flex-col" style={{ width: "300px", gap: "4px" }}>
            <Label
              htmlFor="departure"
              className="text-[16px] leading-[140%] font-bold text-[#00315C]"
            >
              Khởi hành từ
            </Label>
            <Input
              id="departure"
              placeholder="Nhập địa điểm..."
              className="h-[46px] border-[#D1D1D1] rounded text-[16px] leading-[140%] font-normal placeholder:text-[#707070]"
              style={{ padding: "12px" }}
            />
          </div>

          {/* Destination */}
          <div className="flex flex-col" style={{ width: "300px", gap: "4px" }}>
            <Label
              htmlFor="destination"
              className="text-[16px] leading-[140%] font-bold text-[#00315C]"
            >
              Điểm đến
            </Label>
            <Input
              id="destination"
              placeholder="Bạn muốn đi đâu?"
              className="h-[46px] border-[#D1D1D1] rounded text-[16px] leading-[140%] font-normal placeholder:text-[#707070]"
              style={{ padding: "12px" }}
            />
          </div>

          {/* Start Date */}
          <div className="flex flex-col" style={{ width: "172px", gap: "4px" }}>
            <Label
              htmlFor="startDate"
              className="text-[16px] leading-[140%] font-bold text-[#00315C]"
            >
              {labels.startDate}
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#707070] pointer-events-none z-10" />
              <Input
                id="startDate"
                type="date"
                className="h-[46px] border-[#D1D1D1] rounded text-[16px] leading-[140%] font-normal text-[#707070] pl-10"
                style={{ padding: "12px 12px 12px 40px" }}
              />
            </div>
          </div>

          {/* End Date */}
          <div className="flex flex-col" style={{ width: "172px", gap: "4px" }}>
            <Label
              htmlFor="endDate"
              className="text-[16px] leading-[140%] font-bold text-[#00315C]"
            >
              {labels.endDate}
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#707070] pointer-events-none z-10" />
              <Input
                id="endDate"
                type="date"
                className="h-[46px] border-[#D1D1D1] rounded text-[16px] leading-[140%] font-normal text-[#707070] pl-10"
                style={{ padding: "12px 12px 12px 40px" }}
              />
            </div>
          </div>

          {/* Search Button */}
          <Button
            className="bg-[#F27052] hover:bg-[#F27052]/90 text-white rounded flex items-center justify-center"
            style={{
              width: "160px",
              height: "49px",
              padding: "12px 24px",
              gap: "4px",
            }}
          >
            <span className="text-[18px] leading-[140%] font-bold">
              Tìm kiếm
            </span>
            <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
