"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Index(): React.JSX.Element {
  const router = useRouter();

  useEffect(() => {
    if (!router) return;

    const sessionItem: string | null = sessionStorage.getItem("accessed");
    const session: boolean = sessionItem ? (JSON.parse(sessionItem) as boolean) : false;
    sessionStorage.setItem("accessed", "true");

    session ? router.push("/home") : setTimeout(() => router.push("/home"), 2000);
  }, [router]);

  return (
    <main className="flex h-full w-full flex-col items-center justify-center p-4">
      <Image src="/favicon.svg" alt="logo" height={128} width={128} />
    </main>
  );
}
