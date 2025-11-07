import { useState } from "react";
import { startOfDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarFilter() {
  const today = startOfDay(new Date());
  const [dateRange, setDateRange] = useState({
    from: today,
    to: today,
  });

  return (
    <div className="w-full flex flex-col gap-5 items-start">
      {/* Title */}
      <div className="flex flex-col items-start gap-3 w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-lg font-bold text-[#00315C] leading-[1.4]">
            Ngày khởi hành
          </h2>
        </div>
      </div>

      {/* Calendar */}
      <Calendar
        mode="range"
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
      />
    </div>
  );
}
