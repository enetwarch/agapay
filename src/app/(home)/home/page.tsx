import Header from "../_components/header";
import TabBar from "../_components/tab-bar";
import ActiveIncomeCard from "./_components/active-income-card";
import BalanceCard from "./_components/balance-card";
import PassiveIncomeCard from "./_components/passive-income-card";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home(): React.JSX.Element {
  return (
    <>
      <Header label="Home" />
      <main className="h-full w-full grow flex-1 flex flex-col items-center p-4 gap-8 pb-34">
        <section className="flex flex-col justify-center items-center w-full gap-4">
          <BalanceCard />
        </section>
        <section className="flex flex-col justify-center items-center w-full gap-4">
          <ActiveIncomeCard />
          <PassiveIncomeCard />
        </section>
      </main>
      <TabBar currentPage="/home" />
    </>
  );
}
