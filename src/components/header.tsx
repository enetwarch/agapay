import { Button } from "@/components/ui/button";
import type { Pathname } from "@/constants/pathnames";
import { cn } from "@/lib/utils";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type HeaderProps = Omit<React.ComponentProps<"header">, "children"> & {
  label: string;
  backHref?: Pathname;
};
export default function Header({ className, label, backHref, ...props }: HeaderProps): React.JSX.Element {
  return (
    <header className={cn("relative flex w-full items-center justify-center p-4", className)} {...props}>
      {backHref && (
        <Button variant="ghost" size="icon" className="absolute left-4" asChild>
          <Link href={backHref}>
            <FontAwesomeIcon icon={faArrowLeft} className="text-foreground text-xl" />
          </Link>
        </Button>
      )}
      <h1 className="font-bold text-primary text-xl">{label}</h1>
    </header>
  );
}
