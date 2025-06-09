import Header from "@/components/header";
import { Div, Main, Section } from "@/components/primitives/block";
import MoneyCard from "@/feature/(tabs)/money-card";
import TabBar from "@/feature/(tabs)/tab-bar";
import UpgradeCard from "@/feature/(tabs)/upgrade-card";

export { home as metadata } from "@/constants/metadata";
export default function Home(): React.JSX.Element {
  return (
    <Div size="screen">
      <Header label="Home" />
      <Main size="tabs">
        <Section>
          <h2 className="sr-only">Money Card</h2>
          <MoneyCard />
        </Section>
        <Section>
          <h2 className="sr-only">Upgrades</h2>
          <UpgradeCard title="Active Income" description="$420 per tap" cost="$69k" />
          <UpgradeCard title="Active Tick" description="1 tap every 2 seconds of hold" cost="$18k" />
          <UpgradeCard title="Passive Income" description="$420 per tick" cost="$99k" />
          <UpgradeCard title="Passive Tick" description="1 passive income tick every 2 seconds" cost="$87k" />
        </Section>
      </Main>
      <TabBar currentPage="/home" />
    </Div>
  );
}
