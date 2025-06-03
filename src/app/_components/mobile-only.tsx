"use client";

import { useMediaQuery } from "@/hooks/media-query";
import { cn } from "@/lib/utils";

import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type MobileOnlyProps = React.ComponentProps<"section">;
export default function MobileOnly({ className, ...props }: MobileOnlyProps): React.JSX.Element | null {
  const isMobileView = useMediaQuery("(max-width: 639px)");

  if (isMobileView) return null;
  return (
    <section className={cn("hidden sm:flex flex-col justify-center items-center gap-4 p-4", className)} {...props}>
      <FontAwesomeIcon icon={faMobile} className="text-9xl" />
      <p className="text-3xl text-center font-bold">Please view on mobile</p>
    </section>
  );
}
