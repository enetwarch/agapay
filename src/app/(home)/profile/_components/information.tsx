import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InformationProps = Omit<Omit<React.ComponentProps<typeof Card>, "children">, "size"> & {
  icon: IconProp;
  title: string;
  description: string;
};
export default function Information({
  className,
  icon,
  title,
  description,
  ...props
}: InformationProps): React.JSX.Element {
  return (
    <Card size="menu" className={cn("flex-row", className)} {...props}>
      <FontAwesomeIcon icon={icon} className="text-xl" aria-hidden={true} />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
