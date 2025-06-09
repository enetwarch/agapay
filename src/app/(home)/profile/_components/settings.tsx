"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type SettingsProps = Omit<Omit<React.ComponentProps<typeof Button>, "children">, "size"> & {
  icon: IconProp;
  label: string;
};
export default function Settings({
  icon,
  label,
  variant = "secondary",
  className,
  ...props
}: SettingsProps): React.JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Button
      variant={variant}
      size="menu"
      className={cn("", className)}
      onClick={() => setChecked((v) => !v)}
      asChild
      {...props}
    >
      <div>
        <FontAwesomeIcon icon={icon} className="text-xl" aria-hidden={true} />
        <p className="w-full font-medium text-left">{label}</p>
        <Switch checked={checked} onCheckedChange={setChecked} onClick={(e) => e.stopPropagation()} />
      </div>
    </Button>
  );
}
