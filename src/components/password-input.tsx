"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type PasswordInputProps = Omit<React.ComponentProps<typeof Input>, "type">;
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
