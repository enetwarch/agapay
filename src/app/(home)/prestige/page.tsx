import Header from "@/components/header";
import TabBar from "../_components/tab-bar";
import Upgrade from "../_components/upgrade";
import BadgeCard from "./_components/badge-card";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestige",
};

export default function Prestige(): React.JSX.Element {
  return (
    <>
      <Header label="Prestige" />
      <main className="h-full w-full grow flex-1 flex flex-col items-center p-4 gap-8 pb-34">
        <section className="flex flex-col justify-center items-center w-full gap-4">
          <BadgeCard />
        </section>
        <section className="flex flex-col justify-center items-center w-full gap-4">
          <Upgrade title="Income Boost" description="+15% boost to total income earnings" cost="*69" />
          <Upgrade title="Prestige Boost" description="+15% boost to total prestige earnings" cost="*24" />
          <Upgrade title="Starting Balance" description="$69,420 after every prestige" cost="*83" />
          <Upgrade
            title="Offline Time"
            description="Allows 24 hours of offline earnings"
            cost="Max"
            hasUpgradeIcon={false}
          />
        </section>
      </main>
      <TabBar currentPage="/prestige" />
    </>
  );
}
