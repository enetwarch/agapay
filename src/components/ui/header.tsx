import type { Pathname } from "@/constants/pathnames";
import { cn } from "@/lib/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type HeaderProps = React.ComponentProps<"header">;
export function Header({ className, ...props }: HeaderProps): React.JSX.Element {
  return (
    <header
      data-slot="header"
      className={cn("w-full bg-background flex justify-center items-center p-4 relative", className)}
      {...props}
    />
  );
}

type HeaderTextProps = React.ComponentProps<"h1">;
export function HeaderText({ className, ...props }: HeaderTextProps): React.JSX.Element {
  return (
    <h1
      data-slot="header-text"
      className={cn("text-xl text-center text-primary whitespace-nowrap font-bold", className)}
      {...props}
    />
  );
}

type HeaderLinkProps = React.ComponentProps<typeof Link> & {
  href: Pathname;
};
export function HeaderLink({ className, ...props }: HeaderLinkProps): React.JSX.Element {
  return (
    <Link
      className={cn(
        "flex items-center justify-center aspect-square p-4 rounded-full transition-colors active:bg-foreground/30",
        className,
      )}
      {...props}
    />
  );
}

type HeaderIconProps = React.ComponentProps<typeof FontAwesomeIcon>;
export function HeaderIcon({ className, ...props }: HeaderIconProps): React.JSX.Element {
  return <FontAwesomeIcon className={cn("text-xl", className)} {...props} />;
}
