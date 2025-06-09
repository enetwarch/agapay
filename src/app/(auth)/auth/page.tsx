import Brand from "@/components/brand";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export { auth as metadata } from "@/constants/metadata";
export default function Auth(): React.JSX.Element {
  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center">
      <Header label="Authentication" />
      <main className="flex h-full w-full grow flex-col items-center justify-between gap-8 p-8">
        <Brand />
        <section aria-label="Button Group" className="flex w-full flex-col items-center justify-center gap-4">
          <h2 className="sr-only">Action Buttons</h2>
          <Button className="w-full" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
