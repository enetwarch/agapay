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
export default function Upgrade({ ...props }: UpgradeProps): React.JSX.Element {
  const { className, title, description, cost, hasUpgradeIcon = true } = props;

  return (
    <article className={cn("w-full flex justify-center items-center rounded-md bg-surface p-4 gap-2", className)}>
      <div className="w-full flex flex-col justify-center items-center">
        <h3 className="w-full">{title}</h3>
        <p className="w-full text-sm opacity-70">{description}</p>
      </div>
      <Button size="small" className="gap-1">
        {hasUpgradeIcon && <FontAwesomeIcon icon={faCircleUp} />}
        {cost}
      </Button>
    </article>
  );
}
