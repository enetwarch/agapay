import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const informationVariants = cva("flex items-center justify-center duration-200 first:rounded-t-md last:rounded-b-md", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground transition-opacity active:opacity-70",
      secondary: "bg-surface text-foreground shadow-xs transition-colors active:bg-primary/30",
    },
    size: {
      default: "w-full gap-4 px-6 py-4",
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "default",
  },
});

type InformationProps = Omit<React.ComponentProps<"article">, "children"> &
  VariantProps<typeof informationVariants> & {
    icon: IconProp;
    title: string;
    description: string;
  };
export default function Information({
  variant,
  size,
  className,
  icon,
  title,
  description,
  ...props
}: InformationProps): React.JSX.Element {
  return (
    <article className={cn(informationVariants({ variant, size, className }))} {...props}>
      <FontAwesomeIcon icon={icon} className="text-xl" />
      <div className="flex w-full flex-col">
        <p className="font-medium">{title}</p>
        <p className="text-sm opacity-70">{description}</p>
      </div>
    </article>
  );
}
