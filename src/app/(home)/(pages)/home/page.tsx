import ActiveIncomeCard from "./components/active-income-card";
import BalanceCard from "./components/balance-card";
import PassiveIncomeCard from "./components/passive-income-card";

import { Header, HeaderText } from "@/components/ui/header";
import { Section } from "@/components/ui/section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home(): React.JSX.Element {
  return (
    <>
      <Header>
        <HeaderText>Home</HeaderText>
      </Header>
      <Section>
        <BalanceCard />
      </Section>
      <Section>
        <ActiveIncomeCard />
        <PassiveIncomeCard />
      </Section>
    </>
  );
}
