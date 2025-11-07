import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RatingFilter({ selected = null, onChange }) {
  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className="flex flex-col items-start w-full gap-5">
      {/* Title */}
      <div className="flex flex-col items-start gap-3 w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-lg font-bold text-[#00315C] leading-[1.4]">
            Đánh giá
          </h2>
        </div>
      </div>

      {/* Star levels */}
      <RadioGroup value={selected} onValueChange={(v) => onChange(Number(v))}>
        {ratings.map((rating) => (
          <div key={rating} className="flex items-center gap-3">
            <RadioGroupItem value={rating} id={`rating-${rating}`} />
            <Label
              htmlFor={`rating-${rating}`}
              className="flex gap-1 cursor-pointer"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  fill={star <= rating ? "#FFC515" : "transparent"}
                  stroke={star <= rating ? "#FFC515" : "#FFC515"}
                  strokeWidth={1.5}
                />
              ))}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
