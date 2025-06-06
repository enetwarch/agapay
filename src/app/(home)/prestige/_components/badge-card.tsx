import { cn } from "@/lib/utils";

type BadgeCardProps = Omit<React.ComponentProps<"article">, "children">;
export default function BadgeCard({ className, ...props }: BadgeCardProps): React.JSX.Element {
  return (
    <article
      className={cn(
        "relative flex flex-col overflow-hidden rounded-xl bg-primary text-background text-card-foreground shadow-black/30 shadow-md transition-opacity duration-200 active:opacity-70",
        className,
      )}
      {...props}
    >
      <div className="absolute top-4 left-4 flex flex-col">
        <h3 className="font-bold text-3xl">$69420</h3>
      </div>
    </article>
  );
}
