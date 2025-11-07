import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputWithLabel({
  id,
  type,
  label,
  value,
  onChange,
  className,
  placeholder,
}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
}
