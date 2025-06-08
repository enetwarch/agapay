"use client";

import { useEffect } from "react";

export default function GlobalEffects(): React.JSX.Element {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => event.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    document.documentElement.classList.add("dark");

    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return <></>;
}
