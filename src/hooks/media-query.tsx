"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matchesMedia, setMatchesMedia] = useState<boolean>(false);

  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatchesMedia(event.matches);

    media.addEventListener("change", listener);
    setMatchesMedia(media.matches);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matchesMedia;
}
