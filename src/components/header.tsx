import type { Pathname } from "@/constants/pathnames";
import { cn } from "@/lib/utils";

import Link from "next/link";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HeaderProps = React.ComponentProps<"header">;
export function Header({ className, ...props }: HeaderProps): React.JSX.Element {
  return (
    <header
      className={cn("w-full bg-background flex justify-center items-center p-4 relative", className)}
      {...props}
    />
  );
}

type HeaderTextProps = React.ComponentProps<"h1">;
export function HeaderText({ className, ...props }: HeaderTextProps): React.JSX.Element {
  return <h1 className={cn("text-xl text-center text-primary whitespace-nowrap font-bold", className)} {...props} />;
}

type HeaderBackLinkProps = React.ComponentProps<typeof Link> & {
  href: Pathname;
};
export function HeaderBackLink({ className, ...props }: HeaderBackLinkProps): React.JSX.Element {
  return (
    <Link
      className={cn(
        "flex items-center justify-center aspect-square p-4 rounded-full transition-colors active:bg-foreground/30 absolute left-4",
        className,
      )}
      {...props}
    >
      <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
    </Link>
  );
}
