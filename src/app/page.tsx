"use client";

import { Landmark } from "lucide-react";
import { useEffect } from "react";

import { useRouter } from "next/navigation";

type IndexProps = Readonly<{
  sessionKey?: string;
  delay?: number;
}>;

export default function Index({ sessionKey = "accessed", delay = 2000 }: IndexProps): React.JSX.Element {
  const router = useRouter();

  useEffect(() => {
    if (!router) return;

    const sessionItem: string | null = sessionStorage.getItem(sessionKey);
    const session: boolean = sessionItem ? (JSON.parse(sessionItem) as boolean) : false;
    sessionStorage.setItem(sessionKey, "true");

    session ? router.push("/") : setTimeout(() => router.push("/"), delay);
  }, [sessionKey, delay, router]);

  return (
    <main className="flex flex-col justify-center items-center">
      <Landmark size={128} strokeWidth={3} className="text-primary" />
    </main>
  );
}
