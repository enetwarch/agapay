"use client";

import { FullScreenIcon, FullScreenSection, FullScreenText } from "@/components/ui/full-screen";
import { useMediaQuery } from "@/hooks/media-query";

import { faMobile } from "@fortawesome/free-solid-svg-icons";

type ViewProps = React.ComponentProps<typeof FullScreenSection>;
export default function MobileOnlyView(props: ViewProps): React.JSX.Element | null {
  const isMobileView = useMediaQuery("(max-width: 639px)");

  if (isMobileView) return null;
  return (
    <FullScreenSection {...props}>
      <FullScreenIcon icon={faMobile} />
      <FullScreenText>Please view on mobile</FullScreenText>
    </FullScreenSection>
  );
}
