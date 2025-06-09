import Brand from "@/components/brand";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import TabBar from "../_components/tab-bar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
};

export default function Support(): React.JSX.Element {
  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center">
      <Header label="Support" />
      <main className="flex h-full w-full flex-1 grow flex-col items-center gap-8 p-8 pb-28">
        <Brand />
        <section className="flex w-full flex-col items-center justify-center gap-4 px-4">
          <p className="text-center">
            This simple clicker game is made by a solo dev as a hobby project. Consider contributing or supporting me if
            you want to see more projects like this.
          </p>
          <strong className="font-bold">Enetwarch</strong>
        </section>
        <section className="flex w-full flex-col items-center justify-center gap-4">
          <Button className="w-full" asChild>
            <a href="https://github.com/enetwarch/agapay" target="_blank" rel="noreferrer">
              Source Code
            </a>
          </Button>
          <Button className="w-full" asChild>
            <a href="https://github.com/enetwarch/agapay" target="_blank" rel="noreferrer">
              Buy Me a Coffee
            </a>
          </Button>
        </section>
      </main>
      <TabBar currentPage="/support" />
    </div>
  );
}
