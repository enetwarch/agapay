"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import type { Pathname } from "@/constants/pathnames";

import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NotFound(): React.JSX.Element {
  const router = useRouter();

  useEffect(() => {
    if (!router) return;

    const rootPathname: Pathname = "/";
    const redirectTimeout = setTimeout(() => router.push(rootPathname), 10000);

    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <main className="flex flex-col justify-center items-center w-full h-full p-4 gap-4">
      <FontAwesomeIcon icon={faBan} className="text-9xl" />
      <p className="text-3xl text-center font-bold">404 Page Not Found</p>
    </main>
  );
}
