import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

function RadioGroup({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-5", className)}
      {...props}
    />
  );
}

function RadioGroupItem({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        // base style
        "relative flex items-center justify-center size-4 rounded-full border-2 border-[#707070] transition-all duration-200",
        // khi checked
        "data-[state=checked]:border-[#FC4337]",
        // disabled / focus
        "disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-[#FC4337]/30",
        className
      )}
      {...props}
    >
      {/* indicator (dot bên trong) */}
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="absolute size-2 rounded-full bg-[#FC4337] transition-all duration-200 data-[state=checked]:size-2 data-[state=unchecked]:size-0"
      />
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
