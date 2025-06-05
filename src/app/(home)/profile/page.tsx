import Header from "@/components/header";
import TabBar from "../_components/tab-bar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Profile(): React.JSX.Element {
  return (
    <>
      <Header label="Profile" />
      <main className="h-full w-full grow flex-1 flex flex-col items-center p-4 gap-8 pb-34">
        This is the profile page.
      </main>
      <TabBar currentPage="/profile" />
    </>
  );
}
