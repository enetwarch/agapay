import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SettingsProps = Omit<React.ComponentProps<"article">, "children"> & {
  icon: IconProp;
  label: string;
};
export default function Settings({ icon, label, className, ...props }: SettingsProps): React.JSX.Element {
  return (
    <article
      className={cn(
        "flex w-full items-center justify-center gap-4 bg-surface px-6 py-4 text-foreground first:rounded-t-md last:rounded-b-md",
        className,
      )}
      {...props}
    >
      <FontAwesomeIcon icon={icon} className="text-xl" />
      <p className="w-full font-medium">{label}</p>
      <Switch />
    </article>
  );
}
