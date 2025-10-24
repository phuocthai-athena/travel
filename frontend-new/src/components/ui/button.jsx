import * as React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/lib/button-variants";

export const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
