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
    <div className="flex h-full w-full grow flex-col items-center justify-center">
      <Header label="Prestige" />
      <main className="flex h-full w-full flex-1 grow flex-col items-center gap-8 px-8 pb-28">
        <section className="flex w-full flex-col items-center justify-center gap-4">
          <BadgeCard />
        </section>
        <section className="flex w-full flex-col items-center justify-center gap-4">
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
    </div>
  );
}
