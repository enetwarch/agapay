"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type InputProps = React.ComponentProps<"input">;
export function Input({ className, ...props }: InputProps): React.JSX.Element {
  return (
    <input
      data-slot="input"
      className={cn(
        "bg-surface flex p-4 text-lg rounded-md text-foreground",
        "placeholder:font-normal placeholder:text-foreground/50",
        "outline-3 outline-transparent focus:outline-primary transition-colors duration-200",
        className,
      )}
      {...props}
    />
  );
}

type PasswordInputProps = React.ComponentProps<typeof Input> & {
  type?: "password";
};
export function PasswordInput({ className, onChange, ...props }: PasswordInputProps): React.JSX.Element {
  const [value, setValue] = useState<string>("");
  const [hasEye, setHasEye] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="relative inline-flex justify-center items-center">
      <Input
        value={value}
        type={visible ? "text" : "password"}
        className={cn("w-full pr-14", className)}
        onChange={(event) => {
          setValue(event.target.value);

          if (event.target.value !== "") {
            setHasEye(true);
          } else {
            setHasEye(false);
            setVisible(false);
          }

          onChange?.(event);
        }}
        {...props}
      />
      {hasEye && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-0 text-foreground"
        >
          <Icon icon={visible ? faEyeSlash : faEye} />
        </Button>
      )}
    </div>
  );
}
