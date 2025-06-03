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
      <main className="h-full w-full grow flex-1 flex flex-col items-center p-4 gap-8 pb-34">
        This is the support page.
      </main>
      <TabBar currentPage="/support" />
    </>
  );
}
