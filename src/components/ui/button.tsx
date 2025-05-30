import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md", {
  variants: {
    variant: {
      primary: "bg-primary text-background shadow-xs active:opacity-70",
    },
    size: {
      full: "w-full py-4 px-8 text-lg font-medium",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "full",
  },
});

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
