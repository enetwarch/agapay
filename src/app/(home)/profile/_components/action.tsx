import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const actionVariants = cva("flex justify-center items-center first:rounded-t-md last:rounded-b-md duration-200", {
  variants: {
    variant: {
      secondary: "bg-surface text-foreground shadow-xs transition-colors active:bg-primary/30",
      destructive: "bg-destructive text-destructive-foreground shadow-xs transition-opacity active:opacity-70",
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

type ActionProps = React.ComponentProps<"article"> &
  VariantProps<typeof actionVariants> & {
    icon: IconProp;
    label: string;
  };
export default function Action({ ...props }: ActionProps): React.JSX.Element {
  const { variant, size, className, icon, label } = props;

  return (
    <article className={cn(actionVariants({ variant, size, className }))} {...props}>
      <FontAwesomeIcon icon={icon} className="text-lg" />
      <div className="w-full flex flex-col">
        <p className="font-medium">{label}</p>
      </div>
    </article>
  );
}
