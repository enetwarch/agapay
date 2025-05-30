import type { Pathname } from "@/constants/pathnames";
import { cn } from "@/lib/utils";

import Link from "next/link";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TabBarProps = React.ComponentProps<"nav"> & {
  children?: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
};
export function TabBar({ className, children, ...props }: TabBarProps): React.JSX.Element {
  return (
    <nav
      className={cn("w-full bg-surface flex items-center justify-center p-4 shadow-md shadow-black/30", className)}
      {...props}
    >
      <ul className="w-full h-full flex items-center justify-around">{children}</ul>
    </nav>
  );
}

type TabProps = React.ComponentProps<"li"> & {
  href: Pathname;
  icon: IconProp;
  text: string;
  isCurrentPage?: boolean;
};
export function Tab({ href, icon, text, className, isCurrentPage = false, ...props }: TabProps): React.JSX.Element {
  return (
    <li
      className={cn(
        "w-full flex justify-center items-center",
        isCurrentPage ? "text-primary" : "text-foreground",
        className,
      )}
      {...props}
    >
      <Link
        href={href}
        className={cn(
          "flex flex-col justify-center items-center p-2 rounded-md aspect-square active:bg-primary/30",
          "transition-colors",
        )}
      >
        <FontAwesomeIcon icon={icon} className="text-xl" />
        <p className="text-sm">{text}</p>
      </Link>
    </li>
  );
}
