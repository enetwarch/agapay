"use client";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

import { useMediaQuery } from "@/hooks/media-query";

import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type MobileOnlyProps = React.ComponentProps<typeof Section>;
export default function MobileOnly({ className, ...props }: MobileOnlyProps): React.JSX.Element | null {
  const isMobileView = useMediaQuery("(max-width: 639px)");

  if (isMobileView) return null;
  return (
    <Section size="screen" className={cn("hidden sm:flex", className)} {...props}>
      <FontAwesomeIcon icon={faMobile} className="text-9xl" />
      <p className="text-3xl text-center font-bold">Please view on mobile</p>
    </Section>
  );
}
