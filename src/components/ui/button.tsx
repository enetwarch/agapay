import { cn } from "@/lib/utils";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors duration-200",
  {
    variants: {
      variant: {
        primary: "bg-primary text-background shadow-xs active:opacity-70 transition-opacity",
        secondary: "bg-surface text-foreground shadow-xs active:bg-primary/30 transition-colors",
        ghost: "bg-transparent text-primary active:bg-surface/70 transition-colors",
      },
      size: {
        wfull: "w-full py-4 px-8 text-lg font-medium",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "wfull",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
function Button({ className, variant, size, asChild = false, ...props }: ButtonProps): React.JSX.Element {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
