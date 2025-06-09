import Header from "@/components/header";
import TabBar from "../_components/tab-bar";
import Upgrade from "../_components/upgrade";
import MoneyCard from "./_components/money-card";

export { home as metadata } from "@/constants/metadata";
export default function Home(): React.JSX.Element {
  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center">
      <Header label="Home" />
      <main className="flex h-full w-full flex-1 grow flex-col items-center gap-8 px-8 pb-28">
        <section className="flex w-full flex-col items-center justify-center gap-4">
          <h2 className="sr-only">Money Card</h2>
          <MoneyCard />
        </section>
        <section className="flex w-full flex-col items-center justify-center gap-4">
          <h2 className="sr-only">Upgrades</h2>
          <Upgrade title="Active Income" description="$420 per tap" cost="$69k" />
          <Upgrade title="Active Tick" description="1 tap every 2 seconds of hold" cost="$18k" />
          <Upgrade title="Passive Income" description="$420 per tick" cost="$99k" />
          <Upgrade title="Passive Tick" description="1 passive income tick every 2 seconds" cost="$87k" />
        </section>
      </main>
      <TabBar currentPage="/home" />
    </div>
  );
}
