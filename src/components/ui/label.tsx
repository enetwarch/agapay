"use client";

import { cn } from "@/lib/utils";

import * as LabelPrimitive from "@radix-ui/react-label";

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root>;
export function Label({ className, ...props }: LabelProps): React.JSX.Element {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn("inline-flex select-none items-center font-medium text-sm", className)}
      {...props}
    />
  );
}
