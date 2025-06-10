"use client";

import { cn } from "@/lib/utils";

import * as SwitchPrimitive from "@radix-ui/react-switch";

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>;
export function Switch({ className, ...props }: SwitchProps): React.JSX.Element {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "inline-flex h-6 w-12 shrink-0 items-center rounded-full px-1 shadow-xs transition-all hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-foreground",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-4 rounded-full bg-surface transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0",
        )}
      />
    </SwitchPrimitive.Root>
  );
}
