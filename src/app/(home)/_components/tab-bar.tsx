import { Icon } from "@/components/ui/icon";
import {
  TabBar as TabBarComponent,
  TabBarLink,
  TabBarList,
  TabBarListItem,
  TabBarTabLabel,
} from "@/components/ui/tab-bar";
import type { HomePathname } from "@/constants/pathnames";
import { cn } from "@/lib/utils";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCreditCard, faEnvelope, faHeart, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

type TabBarProps = Omit<React.ComponentProps<typeof TabBarComponent>, "children"> & {
  currentPage: HomePathname;
};
export default function TabBar({ currentPage, className, ...props }: TabBarProps): React.JSX.Element {
  return (
    <TabBarComponent className={cn("fixed bottom-0", className)} {...props}>
      <TabBarList>
        <TabItem href="/home" icon={faHouse} label="Home" isCurrentPage={currentPage === "/home"} />
        <TabItem href="/cards" icon={faCreditCard} label="Cards" isCurrentPage={currentPage === "/cards"} />
        <TabItem href="/support" icon={faHeart} label="Support" isCurrentPage={currentPage === "/support"} />
        <TabItem href="/inbox" icon={faEnvelope} label="Inbox" isCurrentPage={currentPage === "/inbox"} />
        <TabItem href="/profile" icon={faUser} label="Profile" isCurrentPage={currentPage === "/profile"} />
      </TabBarList>
    </TabBarComponent>
  );
}

type TabItemProps = Omit<React.ComponentProps<typeof TabBarListItem>, "children"> & {
  href: HomePathname;
  icon: IconProp;
  label: string;
  isCurrentPage?: boolean;
};
function TabItem({ href, icon, label, isCurrentPage = false, ...props }: TabItemProps): React.JSX.Element {
  return (
    <TabBarListItem
      className={isCurrentPage ? "text-primary" : "text-foreground"}
      aria-current={isCurrentPage ? "page" : undefined}
      {...props}
    >
      <TabBarLink href={href}>
        <Icon icon={icon} />
        <TabBarTabLabel>{label}</TabBarTabLabel>
      </TabBarLink>
    </TabBarListItem>
  );
}
