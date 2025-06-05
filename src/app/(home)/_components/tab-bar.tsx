import TabBarComponent from "@/components/tab-bar";
import type { HomePathname } from "@/constants/pathnames";
import { cn } from "@/lib/utils";

import { faCreditCard, faEnvelope, faHeart, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

type TabBarProps = Omit<React.ComponentProps<typeof TabBarComponent>, "tabs"> & {
  currentPage: HomePathname;
};
export default function TabBar({ currentPage, className, ...props }: TabBarProps): React.JSX.Element {
  return (
    <TabBarComponent
      className={cn("fixed bottom-0", className)}
      tabs={[
        { href: "/home", icon: faHouse, label: "Home", isCurrentPage: currentPage === "/home" },
        { href: "/cards", icon: faCreditCard, label: "Cards", isCurrentPage: currentPage === "/cards" },
        { href: "/support", icon: faHeart, label: "Support", isCurrentPage: currentPage === "/support" },
        { href: "/inbox", icon: faEnvelope, label: "Inbox", isCurrentPage: currentPage === "/inbox" },
        { href: "/profile", icon: faUser, label: "Profile", isCurrentPage: currentPage === "/profile" },
      ]}
      {...props}
    />
  );
}
