"use client";

import { Tab, TabBar as TabBarComponent } from "@/components/tab-bar";

import { isTabPathname } from "@/constants/pathnames";
import { usePathname } from "next/navigation";

import { faCreditCard, faEnvelope, faHeart, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

type TabBarProps = React.ComponentProps<typeof TabBarComponent>;

/** @throws {RangeError} if the current page pathname is not listed in "@/constants/pathnames/" type TabPathname. */
export default function TabBar(props: TabBarProps): React.JSX.Element {
  const pathname = usePathname();

  if (!isTabPathname(pathname)) {
    throw new RangeError(`404 Error: Unknown tab pathname "${pathname}"`);
  }

  return (
    <TabBarComponent {...props}>
      <Tab href="/home" icon={faHouse} text="Home" isCurrentPage={pathname === "/home"} />
      <Tab href="/cards" icon={faCreditCard} text="Cards" isCurrentPage={pathname === "/cards"} />
      <Tab href="/support" icon={faHeart} text="Support" isCurrentPage={pathname === "/support"} />
      <Tab href="/inbox" icon={faEnvelope} text="Inbox" isCurrentPage={pathname === "/inbox"} />
      <Tab href="/profile" icon={faUser} text="Profile" isCurrentPage={pathname === "/profile"} />
    </TabBarComponent>
  );
}
