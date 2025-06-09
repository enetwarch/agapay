import { cn } from "@/lib/utils";

import { type VariantProps, cva } from "class-variance-authority";

export const cardVariants = cva("flex flex-col items-center justify-center shadow-lg", {
  variants: {
    variant: {
      secondary: "bg-surface text-foreground",
      primary: "bg-primary text-primary-foreground",
    },
    size: {
      default: "w-full gap-4 p-4 rounded-md",
      menu: "w-full px-6 py-4 gap-4 rounded-none first:rounded-t-md last:rounded-b-md shadow-none",
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "default",
  },
});

type CardProps = React.ComponentProps<"article"> & VariantProps<typeof cardVariants>;
export function Card({ variant, size, className, ...props }: CardProps): React.JSX.Element {
  return <article data-slot="card" className={cn(cardVariants({ variant, size, className }))} {...props} />;
}

type CardHeaderProps = React.ComponentProps<"header">;
export function CardHeader({ className, ...props }: CardHeaderProps): React.JSX.Element {
  return (
    <header
      data-slot="card-header"
      className={cn("flex w-full flex-col items-center justify-center [.flex-row]:gap-4", className)}
      {...props}
    />
  );
}

type CardTitleProps = React.ComponentProps<"h3">;
export function CardTitle({ className, ...props }: CardTitleProps): React.JSX.Element {
  return <h3 data-slot="card-title" className={cn("w-full font-medium", className)} {...props} />;
}

type CardDescriptionProps = React.ComponentProps<"p">;
export function CardDescription({ className, ...props }: CardDescriptionProps): React.JSX.Element {
  return <p data-slot="card-description" className={cn("w-full text-sm opacity-70", className)} {...props} />;
}

type CardContentProps = React.ComponentProps<"div">;
export function CardContent({ className, ...props }: CardContentProps): React.JSX.Element {
  return (
    <div data-slot="card-content" className={cn("flex flex-col justify-center items-center", className)} {...props} />
  );
}

type CardFooterProps = React.ComponentProps<"footer">;
export function CardFooter({ className, ...props }: CardFooterProps): React.JSX.Element {
  return (
    <footer data-slot="card-footer" className={cn("flex items-center justify-center gap-4", className)} {...props} />
  );
}
