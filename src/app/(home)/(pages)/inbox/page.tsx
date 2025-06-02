import { Header, HeaderText } from "@/components/ui/header";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inbox",
};

export default function Inbox(): React.JSX.Element {
  return (
    <>
      <Header>
        <HeaderText>Inbox</HeaderText>
      </Header>
      <main>This is the inbox page.</main>
    </>
  );
}
