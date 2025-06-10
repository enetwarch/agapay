import Header from "@/components/header";
import { Main, Section } from "@/components/primitives/block";
import BadgeCard from "@/features/(tabs)/badge-card";
import TabBar from "@/features/(tabs)/tab-bar";
import Upgrade from "@/features/(tabs)/upgrade-card";

export { prestige as metadata } from "@/constants/metadata";
export default function Prestige(): React.JSX.Element {
  return (
    <>
      <Header label="Prestige" />
      <Main>
        <Section>
          <h2 className="sr-only">Badge Card</h2>
          <BadgeCard />
        </Section>
        <Section>
          <h2 className="sr-only">Upgrades</h2>
          <Upgrade title="Income Boost" description="+15% boost to total income earnings" cost="*69" />
          <Upgrade title="Prestige Boost" description="+15% boost to total prestige earnings" cost="*24" />
          <Upgrade title="Starting Balance" description="$69,420 after every prestige" cost="*83" />
          <Upgrade
            title="Offline Time"
            description="Allows 24 hours of offline earnings"
            cost="Max"
            hasUpgradeIcon={false}
          />
        </Section>
      </Main>
      <TabBar currentPage="/prestige" />
    </>
  );
}
