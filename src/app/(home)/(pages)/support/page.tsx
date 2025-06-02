import { Header, HeaderText } from "@/components/ui/header";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
};

export default function Support(): React.JSX.Element {
  return (
    <>
      <Header>
        <HeaderText>Support</HeaderText>
      </Header>
      <main>This is the support page.</main>
    </>
  );
}
