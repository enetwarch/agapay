import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const cardVariants = cva(
  "relative flex flex-col overflow-hidden rounded-xl bg-primary text-card-foreground shadow-black/30 shadow-md duration-200",
  {
    variants: {
      variant: {
        primary: "bg-primary text-background transition-opacity active:opacity-70",
        surface: "bg-surface text-foreground transition-colors active:bg-primary/30",
      },
      size: {
        wfull: "h-50 w-full gap-4 p-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "wfull",
    },
  },
);

type CardProps = React.ComponentProps<"div"> & VariantProps<typeof cardVariants>;
export function Card({ variant, size, className, ...props }: CardProps): React.JSX.Element {
  return <div data-slot="card" className={cn(cardVariants({ variant, size, className }))} {...props} />;
}

type CardHeaderProps = React.ComponentProps<"div">;
export function CardHeader({ className, ...props }: CardHeaderProps): React.JSX.Element {
  return <div data-slot="card-header" className={cn("absolute top-4 left-4 flex flex-col", className)} {...props} />;
}

type CardTitleProps = React.ComponentProps<"div">;
export function CardTitle({ className, ...props }: CardTitleProps): React.JSX.Element {
  return <div data-slot="card-title" className={cn("font-bold text-2xl", className)} {...props} />;
}

type CardDescriptionProps = React.ComponentProps<"div">;
export function CardDescription({ className, ...props }: CardDescriptionProps): React.JSX.Element {
  return <div data-slot="card-description" className={cn("text-md", className)} {...props} />;
}

type CardFooterProps = React.ComponentProps<"div">;
export function CardFooter({ className, ...props }: CardFooterProps): React.JSX.Element {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "absolute right-4 bottom-4 flex items-center justify-center gap-2 rounded-md bg-foreground p-2",
        className,
      )}
      {...props}
    />
  );
}

type CardActionProps = React.ComponentProps<"div">;
export function CardAction({ className, ...props }: CardActionProps): React.JSX.Element {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "flex flex-col items-center justify-center rounded-md p-2 text-background transition-colors duration-200 active:bg-background/30",
        className,
      )}
      {...props}
    />
  );
}

type CardActionIconProps = React.ComponentProps<typeof FontAwesomeIcon>;
export function CardActionIcon({ className, icon, ...props }: CardActionIconProps): React.JSX.Element {
  return <FontAwesomeIcon icon={icon} className={cn("text-lg", className)} {...props} />;
}
