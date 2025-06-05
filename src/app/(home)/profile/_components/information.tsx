import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const informationVariants = cva("flex justify-center items-center first:rounded-t-md last:rounded-b-md duration-200", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground transition-opacity active:opacity-70",
      secondary: "bg-surface text-foreground shadow-xs transition-colors active:bg-primary/30",
    },
    size: {
      default: "w-full py-4 px-6 gap-4",
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
export default function Information({ ...props }: InformationProps): React.JSX.Element {
  const { variant, size, className, icon, title, description } = props;

  return (
    <article className={cn(informationVariants({ variant, size, className }))} {...props}>
      <FontAwesomeIcon icon={icon} className="text-lg" />
      <div className="w-full flex flex-col">
        <p className="font-medium">{title}</p>
        <p className="opacity-70 text-sm">{description}</p>
      </div>
    </article>
  );
}
