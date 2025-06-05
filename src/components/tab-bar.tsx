import type { Pathname } from "@/constants/pathnames";
import { cn } from "@/lib/utils";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type TabBarProps = Omit<React.ComponentProps<"nav">, "children"> & {
  tabs: {
    href: Pathname;
    icon: IconProp;
    label: string;
    isCurrentPage?: boolean;
  }[];
};
export default function TabBar({ tabs, className, ...props }: TabBarProps): React.JSX.Element {
  return (
    <nav className={cn("w-full bg-surface flex items-center justify-center p-4 rounded-t-xl", className)} {...props}>
      <ul className="w-full h-full flex items-center justify-around">
        {tabs.map(({ href, icon, label, isCurrentPage = false }) => (
          <li key={href} className="w-full flex justify-center items-center h-full rounded-md">
            <Link
              href={href}
              aria-current={isCurrentPage ? "page" : undefined}
              className={cn(
                "flex flex-col justify-center items-center p-2 rounded-md active:bg-primary/30 transition-colors duration-200",
                "aria-[current=page]:text-background aria-[current=page]:bg-primary",
              )}
            >
              <FontAwesomeIcon icon={icon} className="text-lg" />
              <p className="text-xs font-medium">{label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
