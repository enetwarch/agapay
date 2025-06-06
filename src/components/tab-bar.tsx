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
    <nav className={cn("flex w-full items-center justify-center rounded-t-xl bg-surface p-4", className)} {...props}>
      <ul className="flex h-full w-full items-center justify-around">
        {tabs.map(({ href, icon, label, isCurrentPage = false }) => (
          <li key={href} className="flex h-full w-full items-center justify-center rounded-md">
            <Link
              href={href}
              aria-current={isCurrentPage ? "page" : undefined}
              className="flex flex-col items-center justify-center rounded-md p-2 transition-colors duration-200 active:bg-primary/30 aria-[current=page]:bg-primary aria-[current=page]:text-background"
            >
              <FontAwesomeIcon icon={icon} className="text-lg" />
              <p className="font-medium text-xs">{label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
