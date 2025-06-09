import { cn } from "@/lib/utils";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

export const buttonVariants = cva("flex items-center justify-center whitespace-nowrap duration-200", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground shadow-lg transition-opacity active:opacity-70",
      secondary: "bg-surface text-foreground shadow-lg transition-colors active:bg-foreground/30",
      ghost: "bg-transparent text-primary transition-colors active:bg-foreground/10",
    },
    size: {
      medium: "gap-2 rounded-md px-8 py-4 font-medium text-lg",
      small: "gap-1 rounded-md px-4 py-2 font-medium text-md",
      menu: "w-full gap-4 rounded-none px-6 py-4 shadow-none first:rounded-t-md last:rounded-b-md",
      link: "rounded-md px-2 py-1 font-medium text-sm",
      icon: "aspect-square rounded-full p-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps): React.JSX.Element {
  const Component = asChild ? Slot : "button";
  return <Component data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
