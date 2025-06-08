import { Button, type buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { VariantProps } from "class-variance-authority";

type InformationProps = Omit<React.ComponentProps<"article">, "children"> &
  Omit<VariantProps<typeof buttonVariants>, "size"> & {
    icon: IconProp;
    title: string;
    description: string;
  };
export default function Information({
  variant = "secondary",
  className,
  icon,
  title,
  description,
  ...props
}: InformationProps): React.JSX.Element {
  return (
    <Button variant={variant} size="menu" className={cn("pointer-events-none", className)} asChild>
      <article {...props}>
        <FontAwesomeIcon icon={icon} className="text-xl" aria-hidden={true} />
        <div className="flex w-full flex-col">
          <p className="font-medium">{title}</p>
          <p className="text-sm opacity-70">{description}</p>
        </div>
      </article>
    </Button>
  );
}
