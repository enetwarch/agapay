import Header from "@/components/header";
import TabBar from "../_components/tab-bar";
import Upgrade from "../_components/upgrade";
import MoneyCard from "./_components/money-card";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Tap your way to riches! Earn money, unlock upgrades, and boost your income in this addictive clicker game.",
};

export default function Home(): React.JSX.Element {
  return (
    <>
      <Header label="Home" />
      <main className="flex h-full w-full flex-1 grow flex-col items-center gap-8 p-4 pb-34">
        <section className="flex w-full flex-col items-center justify-center gap-4">
          <MoneyCard />
        </section>
        <section className="flex w-full flex-col items-center justify-center gap-4">
          <Upgrade title="Active Income" description="$420 per tap" cost="$69k" />
          <Upgrade title="Active Tick" description="1 tap every 2 seconds of hold" cost="$12k" />
          <Upgrade title="Passive Income" description="$420 per tick" cost="$99k" />
          <Upgrade title="Passive Tick" description="1 passive income tick every 2 seconds" cost="$87k" />
        </section>
      </main>
      <TabBar currentPage="/home" />
    </>
  );
}
