import { Button, type buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { VariantProps } from "class-variance-authority";

type ActionProps = Omit<React.ComponentProps<"article">, "children"> &
  Omit<VariantProps<typeof buttonVariants>, "size"> & {
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
    <Button variant={variant} size="menu" className={cn("", className)} asChild>
      <article {...props}>
        <FontAwesomeIcon icon={icon} className="text-xl" aria-hidden={true} />
        <div className="flex w-full flex-col">
          <p className="font-medium">{label}</p>
        </div>
      </article>
    </Button>
  );
}
