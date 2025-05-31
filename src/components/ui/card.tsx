import { cn } from "@/lib/utils";

import { type VariantProps, cva } from "class-variance-authority";

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
function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-title" className={cn("leading-none font-semibold", className)} {...props} />;
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-description" className={cn("text-muted-foreground text-sm", className)} {...props} />;
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("px-6", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-footer" className={cn("flex items-center px-6 [.border-t]:pt-6", className)} {...props} />
  );
}

export { CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
