"use client";

import { Landmark } from "lucide-react";
import { useEffect } from "react";

import { useRouter } from "next/navigation";

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

    session ? router.push("/") : setTimeout(() => router.push("/"), config.delay);
  }, [router]);

  return (
    <main className="flex flex-col justify-center items-center">
      <Landmark size={128} strokeWidth={3} className="text-primary" />
    </main>
  );
}
