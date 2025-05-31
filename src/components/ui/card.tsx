import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardVariants = cva(
  "bg-primary text-card-foreground flex flex-col rounded-xl shadow-md shadow-black/30 relative duration-200 overflow-hidden",
  {
    variants: {
      variant: {
        primary: "bg-primary text-background active:opacity-70 transition-opacity",
        surface: "bg-surface text-foreground active:bg-primary/30 transition-colors",
      },
      size: {
        wfull: "w-full h-50 p-4 gap-4",
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
  return <div data-slot="card-header" className={cn("flex flex-col absolute top-4 left-4", className)} {...props} />;
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
        "flex justify-center items-center p-2 gap-2 absolute bottom-4 right-4 bg-foreground rounded-md",
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
        "flex flex-col text-background justify-center items-center p-2 rounded-md active:bg-background/30 transition-colors duration-200",
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
