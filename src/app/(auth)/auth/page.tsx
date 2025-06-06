import { Button } from "@/components/ui/button";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication",
};

export default function Auth(): React.JSX.Element {
  return (
    <main className="flex h-full w-full grow flex-col items-center justify-between gap-8 p-8">
      <figure className="flex w-full flex-col items-center justify-center gap-4 py-8">
        <Image src="/favicon.svg" alt="Agapay Logo" height={128} width={128} />
        <figcaption className="font-bold text-4xl text-primary">Agapay</figcaption>
      </figure>
      <section aria-label="Button Group" className="flex w-full flex-col items-center justify-center gap-4">
        <Button className="w-full" asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <Button className="w-full" asChild>
          <Link href="/signup">Sign up</Link>
        </Button>
      </section>
    </main>
  );
}
