import type { Pathname } from "@/constants/pathnames";
import { cn } from "@/lib/utils";

import Link from "next/link";

type TabBarProps = React.ComponentProps<"nav">;
export function TabBar({ className, ...props }: TabBarProps): React.JSX.Element {
  return (
    <nav
      className={cn("w-full bg-surface flex items-center justify-center p-2 shadow-md shadow-black/30", className)}
      {...props}
    />
  );
}

type TabBarListProps = React.ComponentProps<"ul">;
export function TabBarList({ className, ...props }: TabBarListProps): React.JSX.Element {
  return <ul className={cn("w-full h-full flex items-center justify-around", className)} {...props} />;
}

type TabBarListItemProps = React.ComponentProps<"li">;
export function TabBarListItem({ className, ...props }: TabBarListItemProps): React.JSX.Element {
  return <li className={cn("w-full flex justify-center items-center", className)} {...props} />;
}

type TabBarLinkProps = React.ComponentProps<typeof Link> & {
  href: Pathname;
};
export function TabBarLink({ className, ...props }: TabBarLinkProps): React.JSX.Element {
  return (
    <Link
      className={cn(
        "flex flex-col justify-center items-center p-2 rounded-md aspect-square active:bg-primary/30 transition-colors duration-200",
        className,
      )}
      {...props}
    />
  );
}

type TabBarTabLabelProps = React.ComponentProps<"p">;
export function TabBarTabLabel({ className, ...props }: TabBarTabLabelProps): React.JSX.Element {
  return <p className={cn("text-sm", className)} {...props} />;
}
