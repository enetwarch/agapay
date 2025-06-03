import { cn } from "@/lib/utils";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md duration-200", {
  variants: {
    variant: {
      primary: "bg-primary text-background shadow-xs active:opacity-70 transition-opacity",
      secondary: "bg-surface text-foreground shadow-xs active:bg-primary/30 transition-colors",
      ghost: "bg-transparent text-primary active:bg-foreground/10 transition-colors",
    },
    size: {
      default: "py-4 px-8 text-lg font-medium",
      icon: "aspect-square p-2 rounded-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
function Button({ className, variant, size, asChild = false, ...props }: ButtonProps): React.JSX.Element {
  const Component = asChild ? Slot : "button";

  return <Component data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
