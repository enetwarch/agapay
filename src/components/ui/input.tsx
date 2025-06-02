import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input">;
export function Input({ className, ...props }: InputProps): React.JSX.Element {
  return (
    <input
      data-slot="input"
      className={cn(
        "bg-surface flex p-4 text-lg rounded-md text-foreground",
        "placeholder:font-normal placeholder:text-foreground/50",
        "outline-3 outline-transparent focus:outline-primary transition-colors duration-200",
        className,
      )}
      {...props}
    />
  );
}
