"use client";

import { useEffect, useState } from "react";

type MediaViewProps = {
  mediaQuery: string;
  children: React.ReactNode;
};

export default function MediaView({ mediaQuery, children }: MediaViewProps): React.ReactNode | null {
  const [matchesMedia, setMatchesMedia] = useState<boolean>(false);

  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(mediaQuery);
    const listener = (event: MediaQueryListEvent) => setMatchesMedia(event.matches);

    media.addEventListener("change", listener);
    setMatchesMedia(media.matches);

    return () => media.removeEventListener("change", listener);
  }, [mediaQuery]);

  if (matchesMedia) return null;
  return children;
}
