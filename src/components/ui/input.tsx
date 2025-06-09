"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type InputProps = React.ComponentProps<"input">;
export function Input({ className, onChange, ...props }: InputProps): React.JSX.Element {
  const [value, setValue] = useState<string>("");

  return (
    <input
      data-slot="input"
      value={value}
      className={cn(
        "flex rounded-md bg-surface p-4 text-foreground text-lg outline-2 outline-transparent transition-colors duration-200 placeholder:font-normal placeholder:text-foreground/50 focus:outline-foreground",
        className,
      )}
      onChange={(event) => {
        setValue(event.target.value);
        onChange?.(event);
      }}
      {...props}
    />
  );
}

type PasswordInputProps = React.ComponentProps<typeof Input> & {
  type?: "password";
};
export function PasswordInput({ className, onChange, ...props }: PasswordInputProps): React.JSX.Element {
  const [hasEye, setHasEye] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="relative inline-flex items-center justify-center">
      <Input
        type={visible ? "text" : "password"}
        onChange={(event) => {
          if (event.target.value !== "") {
            setHasEye(true);
          } else {
            setHasEye(false);
            setVisible(false);
          }

          onChange?.(event);
        }}
        className={cn("w-full pr-14", className)}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        disabled={!hasEye}
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Hide password" : "Show password"}
        className="absolute right-2 text-foreground opacity-100 transition-opacity duration-200 disabled:opacity-0"
      >
        <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} className="text-lg" />
      </Button>
    </div>
  );
}
