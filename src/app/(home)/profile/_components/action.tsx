import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const actionVariants = cva("flex items-center justify-center duration-200 first:rounded-t-md last:rounded-b-md", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground shadow-xs transition-opacity active:opacity-70",
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

type ActionProps = Omit<React.ComponentProps<"article">, "children"> &
  VariantProps<typeof actionVariants> & {
    icon: IconProp;
    label: string;
  };
export default function Action({ variant, size, className, icon, label, ...props }: ActionProps): React.JSX.Element {
  return (
    <article className={cn(actionVariants({ variant, size, className }))} {...props}>
      <FontAwesomeIcon icon={icon} className="text-xl" />
      <div className="flex w-full flex-col">
        <p className="font-medium">{label}</p>
      </div>
    </article>
  );
}
