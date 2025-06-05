import Brand from "@/components/brand";
import { Button } from "@/components/ui/button";
import Header from "../_components/header";
import TabBar from "../_components/tab-bar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
};

export default function Support(): React.JSX.Element {
  return (
    <>
      <Header label="Support" />
      <main className="h-full w-full grow flex-1 flex flex-col items-center p-4 gap-8 pb-26">
        <Brand />
        <section className="w-full flex flex-col justify-center items-center gap-4 p-4">
          <p className="text-center">
            This simple clicker game is made by a solo dev as a hobby project. Consider contributing or supporting me if
            you want to see more projects like this.
          </p>
          <strong className="font-bold">- Enetwarch</strong>
        </section>
        <section className="w-full flex flex-col justify-center items-center gap-4 p-4">
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
    </>
  );
}
