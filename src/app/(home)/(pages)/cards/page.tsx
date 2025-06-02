import { Header, HeaderText } from "@/components/ui/header";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cards",
};

export default function Cards(): React.JSX.Element {
  return (
    <>
      <Header>
        <HeaderText>Cards</HeaderText>
      </Header>
      <main>This is the cards page.</main>
    </>
  );
}
