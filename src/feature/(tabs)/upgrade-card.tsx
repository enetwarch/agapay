import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type UpgradeCardProps = Omit<React.ComponentProps<typeof Card>, "children"> & {
  title: string;
  description: string;
  cost: string;
  hasUpgradeIcon?: boolean;
};
export default function UpgradeCard({
  className,
  title,
  description,
  cost,
  hasUpgradeIcon = true,
  ...props
}: UpgradeCardProps): React.JSX.Element {
  return (
    <Card className={cn("flex-row", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button size="small" className="w-24 gap-1">
          {hasUpgradeIcon && <FontAwesomeIcon icon={faCircleUp} aria-hidden={true} />}
          <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">{cost}</p>
        </Button>
      </CardFooter>
    </Card>
  );
}
