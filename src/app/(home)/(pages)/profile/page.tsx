import { Header, HeaderText } from "@/components/ui/header";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Profile(): React.JSX.Element {
  return (
    <>
      <Header>
        <HeaderText>Profile</HeaderText>
      </Header>
      <main>This is the profile page.</main>
    </>
  );
}
