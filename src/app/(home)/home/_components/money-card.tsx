import { cn } from "@/lib/utils";

type MoneyCardProps = Omit<React.ComponentProps<"article">, "children">;
export default function MoneyCard({ className, ...props }: MoneyCardProps): React.JSX.Element {
  return (
    <article
      className={cn(
        "relative flex h-50 w-full flex-col gap-4 overflow-hidden rounded-xl bg-primary p-4 text-background text-card-foreground shadow-black/30 shadow-md transition-opacity duration-200 active:opacity-70",
        className,
      )}
      {...props}
    >
      <div className="absolute top-4 left-4 flex flex-col">
        <h3 className="font-bold text-3xl text-primary-foreground">$69420</h3>
      </div>
    </article>
  );
}
