"use client";

import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCreditCard, faEnvelope, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { ClassValue } from "clsx";

// Add more pathnames if necessary to maintain typesafety.
const pathnames = ["/home", "/cards", "/inbox", "/profile"] as const;
type Pathname = (typeof pathnames)[number];

type TabBarProps = React.ComponentProps<"nav"> & {
  className?: ClassValue;
};

export default function TabBar({ className, ...props }: TabBarProps): React.JSX.Element {
  const pathname: Pathname = usePathname() as Pathname;

  return (
    <nav className={cn("w-full bg-surface flex items-center justify-center p-4", className)} {...props}>
      <ul className="w-full h-full flex items-center justify-around">
        <Tab href="/home" icon={faHouse} text="Home" isActive={pathname === "/home"} />
        <Tab href="/cards" icon={faCreditCard} text="Cards" isActive={pathname === "/cards"} />
        <Tab href="/inbox" icon={faEnvelope} text="Inbox" isActive={pathname === "/inbox"} />
        <Tab href="/profile" icon={faUser} text="Profile" isActive={pathname === "/profile"} />
      </ul>
    </nav>
  );
}

type TabProps = {
  href: Pathname;
  icon: IconProp;
  text: string;
  isActive?: boolean;
};

function Tab({ href, icon, text, isActive = false }: TabProps): React.JSX.Element {
  const textColor: ClassValue = isActive ? "text-primary" : "text-foreground";

  return (
    <li className={cn("w-full h-full flex justify-center items-center", textColor)}>
      <Link
        href={href}
        className={cn(
          "flex flex-col justify-center items-center p-2 rounded-full aspect-square active:bg-primary/30",
          "transition-colors",
        )}
      >
        <FontAwesomeIcon icon={icon} className="text-xl" />
        <p className="text-sm">{text}</p>
      </Link>
    </li>
  );
}
