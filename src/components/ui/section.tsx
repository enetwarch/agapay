import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const sectionVariants = cva("bg-background flex flex-col justify-center items-center", {
  variants: {
    size: {
      wfull: "w-full gap-4",
      screen: "h-screen w-screen gap-4 p-4",
    },
  },
  defaultVariants: {
    size: "wfull",
  },
});

type SectionProps = React.ComponentProps<"section"> & VariantProps<typeof sectionVariants>;
export function Section({ className, size, ...props }: SectionProps): React.JSX.Element {
  return <section className={cn(sectionVariants({ size, className }))} {...props} />;
}
