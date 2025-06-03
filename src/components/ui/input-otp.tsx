"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import * as React from "react";

import { cn } from "@/lib/utils";

type InputOTPProps = React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
};
export function InputOTP({ className, containerClassName, ...props }: InputOTPProps): React.JSX.Element {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn("flex items-center gap-4", containerClassName)}
      className={cn("", className)}
      {...props}
    />
  );
}

type InputOTPGroupProps = React.ComponentProps<"div">;
export function InputOTPGroup({ className, ...props }: InputOTPGroupProps): React.JSX.Element {
  return <div data-slot="input-otp-group" className={cn("flex items-center gap-1", className)} {...props} />;
}

type InputOTPSlotProps = React.ComponentProps<"div"> & {
  index: number;
};
export function InputOTPSlot({ index, className, ...props }: InputOTPSlotProps): React.JSX.Element {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "outline-2 duration-200 bg-surface relative flex w-10 items-center justify-center text-sm transition-all rounded-md aspect-square outline-transparent data-[active=true]:outline-foreground",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}
