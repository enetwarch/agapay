import { cn } from "@/lib/utils";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md duration-200", {
  variants: {
    variant: {
      primary: "bg-primary text-background shadow-xs transition-opacity active:opacity-70",
      secondary: "bg-surface text-foreground shadow-xs transition-colors active:bg-primary/30",
      ghost: "bg-transparent text-primary transition-colors active:bg-foreground/10",
    },
    size: {
      default: "px-8 py-4 font-medium text-lg",
      small: "px-4 py-2 font-medium text-md",
      link: "px-2 py-1 font-medium text-md",
      icon: "aspect-square rounded-full p-2",
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
