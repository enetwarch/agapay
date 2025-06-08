import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type UpgradeProps = Omit<React.ComponentProps<"article">, "children"> & {
  title: string;
  description: string;
  cost: string;
  hasUpgradeIcon?: boolean;
};
export default function Upgrade({
  className,
  title,
  description,
  cost,
  hasUpgradeIcon = true,
  ...props
}: UpgradeProps): React.JSX.Element {
  return (
    <article
      className={cn("flex w-full items-center justify-center gap-4 rounded-md bg-surface p-4 shadow-lg", className)}
      {...props}
    >
      <div className="flex w-full flex-col items-center justify-center">
        <h3 className="w-full">{title}</h3>
        <p className="w-full text-sm opacity-70">{description}</p>
      </div>
      <Button size="small" className="w-full max-w-24 gap-1">
        {hasUpgradeIcon && <FontAwesomeIcon icon={faCircleUp} aria-hidden={true} />}
        <p className="overflow-ellipsis overflow-hidden whitespace-nowrap">{cost}</p>
      </Button>
    </article>
  );
}
