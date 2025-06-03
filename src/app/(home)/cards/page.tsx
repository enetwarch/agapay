import Header from "../_components/header";
import TabBar from "../_components/tab-bar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cards",
};

export default function Cards(): React.JSX.Element {
  return (
    <>
      <Header label="Cards" />
      <main className="h-full w-full grow flex-1 flex flex-col items-center p-4 gap-8 pb-34">
        This is the cards page.
      </main>
      <TabBar currentPage="/cards" />
    </>
  );
}
