"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const config = Object.freeze({
  sessionKey: "accessed",
  delay: 2000,
});

export default function Index(): React.JSX.Element {
  const router = useRouter();

  useEffect(() => {
    if (!router) return;

    const sessionItem: string | null = sessionStorage.getItem(config.sessionKey);
    const session: boolean = sessionItem ? (JSON.parse(sessionItem) as boolean) : false;
    sessionStorage.setItem(config.sessionKey, "true");

    session ? router.push("/home") : setTimeout(() => router.push("/home"), config.delay);
  }, [router]);

  return (
    <main className="flex flex-col justify-center items-center w-full h-full p-4">
      <Image src="/favicon.svg" alt="logo" height={128} width={128} />
    </main>
  );
}
