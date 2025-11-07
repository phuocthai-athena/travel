import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-base font-bold leading-[1.4] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#F27052] text-white hover:bg-[#DE4724] disabled:bg-[#FDB5A4] hover:shadow-[0px_0px_0px_0px_#F270521A,0px_1px_3px_0px_#F270521A,0px_5px_5px_0px_#F2705217,0px_12px_7px_0px_#F270520D,0px_22px_9px_0px_#F2705203,0px_34px_9px_0px_#F2705200]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11.5 px-6 py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
