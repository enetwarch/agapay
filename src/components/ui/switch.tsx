"use client";

import { cn } from "@/lib/utils";

import * as SwitchPrimitive from "@radix-ui/react-switch";

export function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-foreground",
        "rounded-full shadow-xs transition-all  disabled:cursor-not-allowed disabled:opacity-50",
        "inline-flex items-center shrink-0 h-6 w-12 px-1",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "block bg-surface pointer-events-none size-4 rounded-full",
          "transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0",
        )}
      />
    </SwitchPrimitive.Root>
  );
}
