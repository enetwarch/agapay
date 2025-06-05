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
    <header className={cn("w-full flex justify-center items-center relative p-6", className)} {...props}>
      {backHref && (
        <Button variant="ghost" size="icon" className="absolute left-8 text-foreground" asChild>
          <Link href={backHref}>
            <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
          </Link>
        </Button>
      )}
      <h1 className="text-xl font-bold text-foreground">{label}</h1>
    </header>
  );
}
