"use client";

import { useEffect } from "react";

/** @global used as a JSX element to apply document level event listeners. */
export function Globals(): null {
  useEffect(() => {
    const controller = new AbortController();
    document.addEventListener("contextmenu", (e) => e.preventDefault(), controller);

    return () => controller.abort();
  }, []);

  return null;
}
