import ActiveIncomeCard from "@/app/(tabs)/home/active-income-card";
import BalanceCard from "@/app/(tabs)/home/balance-card";
import PassiveIncomeCard from "@/app/(tabs)/home/passive-income-card";

import { Section } from "@/components/ui/section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home(): React.JSX.Element {
  return (
    <>
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
