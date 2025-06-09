import { cn } from "@/lib/utils";

import { type VariantProps, cva } from "class-variance-authority";

export const mainVariants = cva("flex flex-col items-center justify-center", {
  variants: {
    size: {
      default: "h-full w-full grow gap-8 p-8",
      hastabbar: "h-full w-full grow gap-8 px-8 pb-28",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type MainProps = React.ComponentProps<"main"> & VariantProps<typeof mainVariants>;
export function Main({ size, className, ...props }: MainProps): React.JSX.Element {
  return <main className={cn(mainVariants({ size, className }))} {...props} />;
}

export const sectionVariants = cva("flex flex-col items-center justify-center", {
  variants: {
    size: {
      default: "w-full gap-4",
      nospace: "w-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type SectionProps = React.ComponentProps<"section"> & VariantProps<typeof sectionVariants>;
export function Section({ size, className, ...props }: SectionProps): React.JSX.Element {
  return <section className={cn(sectionVariants({ size, className }))} {...props} />;
}

export const divVariants = cva("flex flex-col items-center justify-center", {
  variants: {
    size: {
      default: "w-full gap-4",
      screen: "min-h-screen w-full grow",
      nospace: "w-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type DivProps = React.ComponentProps<"div"> & VariantProps<typeof divVariants>;
export function Div({ size, className, ...props }: DivProps): React.JSX.Element {
  return <div className={cn(divVariants({ size, className }))} {...props} />;
}

type FormProps = React.ComponentProps<"form">;
export function Form({ className, ...props }: FormProps): React.JSX.Element {
  return <form className={cn("flex w-full flex-col items-center justify-between gap-8", className)} {...props} />;
}
