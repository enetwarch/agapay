"use client";

import { cn } from "@/lib/utils";

import * as LabelPrimitive from "@radix-ui/react-label";

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root>;
export function Label({ className, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn("inline-flex font-medium items-center text-sm select-none", className)}
      {...props}
    />
  );
}
