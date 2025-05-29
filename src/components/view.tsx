"use client";

import { TabletSmartphone } from "lucide-react";
import { useEffect, useState } from "react";

export default function View(): React.JSX.Element | null {
  const [matchesMedia, setMatchesMedia] = useState<boolean>(false);

  useEffect(() => {
    // Uses the sm: responsive property from Tailwind CSS.
    const media: MediaQueryList = window.matchMedia("(min-width: 640px)");
    const listener = (event: MediaQueryListEvent) => setMatchesMedia(event.matches);

    media.addEventListener("change", listener);
    setMatchesMedia(media.matches);

    return () => media.removeEventListener("change", listener);
  }, []);

  if (!matchesMedia) return null;

  return (
    <section role="alert" className="flex flex-col items-center justify-center gap-4">
      <TabletSmartphone size={96} strokeWidth={3} />
      <p className="text-2xl text-center font-bold">Please view on mobile</p>
    </section>
  );
}
