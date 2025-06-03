import Header from "../_components/header";
import TabBar from "../_components/tab-bar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inbox",
};

export default function Inbox(): React.JSX.Element {
  return (
    <>
      <Header label="Inbox" />
      <main className="h-full w-full grow flex-1 flex flex-col items-center p-4 gap-8 pb-34">
        This is the inbox page.
      </main>
      <TabBar currentPage="/inbox" />
    </>
  );
}
