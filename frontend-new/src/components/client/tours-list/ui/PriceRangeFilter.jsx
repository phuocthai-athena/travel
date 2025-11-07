import { Slider } from "@/components/ui/slider";

export default function PriceRangeFilter({
  range,
  onChange,
  min = 200_000,
  max = 100_000_000,
}) {
  const handleChange = (value) => {
    onChange(value);
  };

  const formatVND = (v) => {
    if (v >= 1_000_000) {
      return `${(v / 1_000_000).toLocaleString("vi-VN", {
        maximumFractionDigits: 0,
      })}Tr`;
    } else {
      return `${(v / 1_000).toLocaleString("vi-VN", {
        maximumFractionDigits: 0,
      })}K`;
    }
  };

  return (
    <div className="flex flex-col items-start w-full gap-5">
      {/* Title */}
      <div className="flex flex-col items-start gap-3 w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-lg font-bold text-[#00315C] leading-[1.4]">
            Khoảng giá
          </h2>
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col items-start gap-3 w-full">
        <p className="text-sm text-[#707070] leading-[1.4] font-normal">
          Set your budget range ({formatVND(min)} - {formatVND(max)}).
        </p>
      </div>

      {/* Slider */}
      <div className="flex flex-col items-start gap-5 w-full">
        <Slider
          min={min}
          max={max}
          value={range}
          onValueChange={handleChange}
        />
      </div>
    </div>
  );
}
