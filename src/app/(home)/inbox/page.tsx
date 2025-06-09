import Header from "@/components/header";
import { Div, Main, Section } from "@/components/primitives/block";
import TabBar from "../_components/tab-bar";
import Entry from "./_components/entry";

export { inbox as metadata } from "@/constants/metadata";
export default function Inbox(): React.JSX.Element {
  return (
    <Div size="screen">
      <Header label="Inbox" />
      <Main size="hastabbar">
        <Section>
          <h2 className="sr-only">Inbox Entries</h2>
          <Entry
            title="Milestone Reached"
            body="Congratulations on reaching +200% Income Boost! This will upgrade the looks of your money card to Platinum. This is currently the highest rank of cosmetics for your card."
          />
          <Entry
            title="Milestone Reached"
            body="Congratulations on reaching +200% Prestige Boost! This will upgrade the looks of your prestige card to Platinum. This is currently the highest rank of cosmetics for yoru card."
          />
          <Entry
            title="Milestone Reached"
            body="Congratulations on reaching +100% Income Boost! This will upgrade the looks of your money card to Gold."
          />
          <Entry
            title="Milestone Reached"
            body="Congratulations on reaching +100% Prestige Boost! This will upgrade the looks of your prestige card to Gold."
          />
          <Entry
            title="Milestone Reached"
            body="Congratulations on reaching +50% Income Boost! This will upgrade the looks of your money card to Silver."
          />
          <Entry
            title="Milestone Reached"
            body="Congratulations on reaching +50% Prestige Boost! This will upgrade the looks of your prestige card to Silver."
            isRead
          />
          <Entry
            title="Support Appreciation"
            body="Thanks for buying me a coffee! You will be granted *10,000 prestige points"
            isRead
          />
          <Entry
            title="Prestige Unlocked"
            body="You can now Prestige and restart with powerful bonuses. Check out the prestige tap and press the card to proceed."
            isRead
          />
          <Entry title="Achievement" body="You've tapped 1,000,000 times. Your finger deserves a raise." isRead />
        </Section>
      </Main>
      <TabBar currentPage="/inbox" />
    </Div>
  );
}
