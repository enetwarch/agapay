"use client";

import { Icon } from "@/components/ui/icon";
import {
  TabBar as TabBarComponent,
  TabBarLink,
  TabBarList,
  TabBarListItem,
  TabBarTabLabel,
} from "@/components/ui/tab-bar";
import { type Pathname, isTabPathname } from "@/constants/pathnames";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCreditCard, faEnvelope, faHeart, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

type Tab = {
  href: Pathname;
  icon: IconProp;
  label: string;
};
const tabs: Tab[] = [
  { href: "/home", icon: faHouse, label: "Home" },
  { href: "/cards", icon: faCreditCard, label: "Cards" },
  { href: "/support", icon: faHeart, label: "Support" },
  { href: "/inbox", icon: faEnvelope, label: "Inbox" },
  { href: "/profile", icon: faUser, label: "Profile" },
] as const;

type TabBarProps = React.ComponentProps<typeof TabBarComponent>;
/** @throws {RangeError} if the current page pathname is not listed in "@/constants/pathnames/" type TabPathname. */
export default function TabBar(props: TabBarProps): React.JSX.Element {
  const pathname = usePathname();

  if (!isTabPathname(pathname)) {
    throw new RangeError(`404 Error: Unknown tab pathname "${pathname}"`);
  }

  return (
    <TabBarComponent {...props}>
      <TabBarList>
        {tabs.map(({ href, icon, label }) => (
          <TabBarListItem key={href} className={pathname === href ? "text-primary" : "text-foreground"}>
            <TabBarLink href={href}>
              <Icon icon={icon} />
              <TabBarTabLabel>{label}</TabBarTabLabel>
            </TabBarLink>
          </TabBarListItem>
        ))}
      </TabBarList>
    </TabBarComponent>
  );
}
