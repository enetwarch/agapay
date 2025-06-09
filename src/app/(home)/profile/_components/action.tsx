import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ActionProps = Omit<Omit<React.ComponentProps<typeof Button>, "children">, "size"> & {
  icon: IconProp;
  label: string;
};
export default function Action({
  variant = "secondary",
  className,
  icon,
  label,
  ...props
}: ActionProps): React.JSX.Element {
  return (
    <Button variant={variant} size="menu" className={cn("", className)} {...props}>
      <FontAwesomeIcon icon={icon} className="text-xl" aria-hidden={true} />
      <p className="w-full text-left font-medium">{label}</p>
    </Button>
  );
}
