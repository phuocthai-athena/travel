import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CategoryFilters({ categories, setCategory }) {
  const selected = Object.keys(categories).find((key) => categories[key]) || "";

  return (
    <RadioGroup value={selected} onValueChange={(v) => setCategory(v)}>
      {Object.keys(categories).map((key) => (
        <div key={key} className="flex items-center gap-3">
          <RadioGroupItem value={key} id={key} />
          <Label htmlFor={key} className="text-[#707070]">
            Tour {key}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
