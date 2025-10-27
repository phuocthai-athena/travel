import { cn } from "@/lib/utils";
import { Calendar, ArrowUpRight } from "lucide-react";

export default function SearchForm({
  type = "tour", // "tour" | "hotel"
  formData,
  onChange,
  onSubmit,
  className,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "bg-white flex items-end rounded-md p-[30px_24px] gap-3 w-[1200px] h-[132px]",
        className
      )}
      style={{
        boxShadow:
          "0px 54px 22px rgba(79, 79, 79, 0.01), 0px 31px 18px rgba(79, 79, 79, 0.05), 0px 14px 14px rgba(79, 79, 79, 0.09), 0px 3px 7px rgba(79, 79, 79, 0.1)",
      }}
    >
      {type === "tour" ? (
        <>
          {/* Khởi hành từ */}
          <div className="flex flex-col gap-1 w-[300px]">
            <label className="text-[16px] font-bold text-[#00315C]">
              Khởi hành từ
            </label>
            <input
              type="text"
              placeholder="Nhập địa điểm..."
              value={formData.departure}
              onChange={(e) => onChange("departure", e.target.value)}
              className="h-[46px] px-3 border border-[#D1D1D1] rounded text-[16px] text-[#00315C] placeholder:text-[#707070] outline-none"
            />
          </div>

          {/* Điểm đến */}
          <div className="flex flex-col gap-1 w-[300px]">
            <label className="text-[16px] font-bold text-[#00315C]">
              Điểm đến
            </label>
            <input
              type="text"
              placeholder="Bạn muốn đi đâu?"
              value={formData.destination}
              onChange={(e) => onChange("destination", e.target.value)}
              className="h-[46px] px-3 border border-[#D1D1D1] rounded text-[16px] text-[#00315C] placeholder:text-[#707070] outline-none"
            />
          </div>

          {/* Ngày đi */}
          <div className="flex flex-col gap-1 w-[172px]">
            <label className="text-[16px] font-bold text-[#00315C]">
              Ngày đi
            </label>
            <div className="relative flex items-center">
              <Calendar className="absolute left-3 text-[#707070]" size={18} />
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => onChange("startDate", e.target.value)}
                className="h-[46px] pl-10 pr-3 w-full border border-[#D1D1D1] rounded text-[16px] text-[#707070] outline-none"
              />
            </div>
          </div>

          {/* Ngày về */}
          <div className="flex flex-col gap-1 w-[172px]">
            <label className="text-[16px] font-bold text-[#00315C]">
              Ngày về
            </label>
            <div className="relative flex items-center">
              <Calendar className="absolute left-3 text-[#707070]" size={18} />
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => onChange("endDate", e.target.value)}
                className="h-[46px] pl-10 pr-3 w-full border border-[#D1D1D1] rounded text-[16px] text-[#707070] outline-none"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Điểm đến */}
          <div className="flex flex-col gap-1 w-[300px]">
            <label className="text-[16px] font-bold text-[#00315C]">
              Điểm đến
            </label>
            <input
              type="text"
              placeholder="Bạn muốn đi đâu?"
              value={formData.hotelDestination}
              onChange={(e) => onChange("hotelDestination", e.target.value)}
              className="h-[46px] px-3 border border-[#D1D1D1] rounded text-[16px] text-[#00315C] placeholder:text-[#707070] outline-none"
            />
          </div>

          {/* Số phòng | số khách */}
          <div className="flex flex-col gap-1 w-[300px]">
            <label className="text-[16px] font-bold text-[#00315C]">
              Số phòng | số khách
            </label>
            <input
              type="text"
              placeholder="1 phòng, 2 khách"
              value={formData.roomsGuests}
              onChange={(e) => onChange("roomsGuests", e.target.value)}
              className="h-[46px] px-3 border border-[#D1D1D1] rounded text-[16px] text-[#00315C] placeholder:text-[#707070] outline-none"
            />
          </div>

          {/* Nhận phòng */}
          <div className="flex flex-col gap-1 w-[172px]">
            <label className="text-[16px] font-bold text-[#00315C]">
              Nhận phòng
            </label>
            <div className="relative flex items-center">
              <Calendar className="absolute left-3 text-[#707070]" size={18} />
              <input
                type="date"
                value={formData.checkinDate}
                onChange={(e) => onChange("checkinDate", e.target.value)}
                className="h-[46px] pl-10 pr-3 w-full border border-[#D1D1D1] rounded text-[16px] text-[#707070] outline-none"
              />
            </div>
          </div>

          {/* Trả phòng */}
          <div className="flex flex-col gap-1 w-[172px]">
            <label className="text-[16px] font-bold text-[#00315C]">
              Trả phòng
            </label>
            <div className="relative flex items-center">
              <Calendar className="absolute left-3 text-[#707070]" size={18} />
              <input
                type="date"
                value={formData.checkoutDate}
                onChange={(e) => onChange("checkoutDate", e.target.value)}
                className="h-[46px] pl-10 pr-3 w-full border border-[#D1D1D1] rounded text-[16px] text-[#707070] outline-none"
              />
            </div>
          </div>
        </>
      )}

      {/* Nút tìm kiếm */}
      <button
        type="submit"
        className="bg-[#F27052] hover:bg-[#F27052]/90 text-white flex items-center justify-center rounded h-[49px] px-6 gap-2 font-bold text-[18px]"
        style={{ width: "160px" }}
      >
        Tìm kiếm
        <ArrowUpRight className="w-5 h-5" />
      </button>
    </form>
  );
}
