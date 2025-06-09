import Header from "@/components/header";
import { Div, Main, Section } from "@/components/primitives/block";
import TabBar from "../_components/tab-bar";
import Upgrade from "../_components/upgrade";
import MoneyCard from "./_components/money-card";

export { home as metadata } from "@/constants/metadata";
export default function Home(): React.JSX.Element {
  return (
    <Div size="screen">
      <Header label="Home" />
      <Main size="hastabbar">
        <Section>
          <h2 className="sr-only">Money Card</h2>
          <MoneyCard />
        </Section>
        <Section>
          <h2 className="sr-only">Upgrades</h2>
          <Upgrade title="Active Income" description="$420 per tap" cost="$69k" />
          <Upgrade title="Active Tick" description="1 tap every 2 seconds of hold" cost="$18k" />
          <Upgrade title="Passive Income" description="$420 per tick" cost="$99k" />
          <Upgrade title="Passive Tick" description="1 passive income tick every 2 seconds" cost="$87k" />
        </Section>
      </Main>
      <TabBar currentPage="/home" />
    </Div>
  );
}
