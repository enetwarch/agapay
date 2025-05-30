"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

type HeaderProps = React.ComponentProps<"header"> & {
  className?: ClassValue;
};

export default function Header({ className, ...props }: HeaderProps): React.JSX.Element {
  const pathname: string = usePathname();
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (!pathname) return;
    setTitle(document.title);
  }, [pathname]);

  return (
    <header className={cn("w-full bg-surface flex justify-center items-center p-4", className)} {...props}>
      <h1 className="text-xl text-center text-primary whitespace-nowrap font-bold">{title}</h1>
    </header>
  );
}
