"use client";

import { cn } from "@/lib/utils";

import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type MobileOnlyProps = React.ComponentProps<"aside">;
export default function MobileOnly({ className, ...props }: MobileOnlyProps): React.JSX.Element {
  return (
    <aside
      className={cn(
        "bg-background hidden sm:flex min-h-screen min-w-screen flex-col justify-center items-center gap-4 p-4",
        className,
      )}
      {...props}
    >
      <FontAwesomeIcon icon={faMobile} className="text-9xl" />
      <p className="text-3xl text-center font-bold">Please view on mobile</p>
    </aside>
  );
}
