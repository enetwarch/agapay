"use client";

import { useEffect } from "react";

/** @global used as a JSX element to apply document level event listeners. */
export function Globals(): null {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => event.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return null;
}
