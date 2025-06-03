import { cn } from "@/lib/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

type HeaderIconProps = React.ComponentProps<typeof FontAwesomeIcon>;
export function HeaderIcon({ className, ...props }: HeaderIconProps): React.JSX.Element {
  return <FontAwesomeIcon className={cn("text-xl", className)} {...props} />;
}
