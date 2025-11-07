import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchFilter({ values, onChange, onSearch }) {
  return (
    <div className="flex flex-col items-start gap-6 w-full">
      {/* Title */}
      <h3 className="text-lg font-bold leading-[1.4] text-[#00315C]">
        Tìm kiếm tour
      </h3>

      {/* Input fields */}
      <div className="flex flex-col items-end gap-3 w-full">
        <Input
          placeholder="Điểm khởi hành..."
          value={values.departure}
          onChange={(v) => onChange("departure", v)}
        />
        <Input
          placeholder="Điểm đến"
          value={values.destination}
          onChange={(v) => onChange("destination", v)}
          hasDropdown
        />
        <Input
          placeholder="Số ngày"
          value={values.days}
          onChange={(v) => onChange("days", v)}
          hasDropdown
        />
      </div>

      {/* Search button */}
      <Button onClick={onSearch} className="w-full">
        Tìm kiếm
        <Search size={18} />
      </Button>
    </div>
  );
}
