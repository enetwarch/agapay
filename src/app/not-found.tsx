"use client";

import type { Pathname } from "@/constants/pathnames";

import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound(): React.JSX.Element {
  const router = useRouter();

  useEffect(() => {
    if (!router) return;

    const rootPathname: Pathname = "/";
    const redirectTimeout = setTimeout(() => router.push(rootPathname), 10000);

    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-4 p-4">
      <FontAwesomeIcon icon={faBan} className="text-9xl" />
      <p className="text-center font-bold text-3xl">404 Page Not Found</p>
    </main>
  );
}
