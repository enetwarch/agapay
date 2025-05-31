"use client";

import { cn } from "@/lib/utils";

import { FullScreenIcon, FullScreenSection, FullScreenText } from "@/components/ui/full-screen";
import { useMediaQuery } from "@/hooks/media-query";

import { faMobile } from "@fortawesome/free-solid-svg-icons";

type MobileOnlyProps = React.ComponentProps<typeof FullScreenSection>;
export default function MobileOnly({ className, ...props }: MobileOnlyProps): React.JSX.Element | null {
  const isMobileView = useMediaQuery("(max-width: 639px)");

  if (isMobileView) return null;
  return (
    <FullScreenSection className={cn("hidden sm:flex", className)} {...props}>
      <FullScreenIcon icon={faMobile} />
      <FullScreenText>Please view on mobile</FullScreenText>
    </FullScreenSection>
  );
}
