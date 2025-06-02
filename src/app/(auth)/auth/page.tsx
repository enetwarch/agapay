import { Button } from "@/components/ui/button";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication",
};

export default function Auth(): React.JSX.Element {
  return (
    <main className="w-full h-full grow flex flex-col justify-between items-center p-8 gap-8">
      <figure className="flex w-full flex-col justify-center items-center py-8 gap-4">
        <Image src="/favicon.svg" alt="Agapay Logo" height={128} width={128} />
        <figcaption className="text-primary font-bold text-4xl">Agapay</figcaption>
      </figure>
      <section aria-label="Button Group" className="w-full flex flex-col justify-center items-center gap-4">
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Sign up</Link>
        </Button>
      </section>
    </main>
  );
}
