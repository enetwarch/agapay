import { cn } from "@/lib/utils";

import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BrandProps = React.ComponentProps<"section"> & {
  hasText?: boolean;
};
export default function Brand({ hasText = true, className, ...props }: BrandProps): React.JSX.Element {
  return (
    <section className={cn("flex w-full flex-col items-center justify-center gap-4 p-4", className)} {...props}>
      <FontAwesomeIcon icon={faBuildingColumns} className="text-9xl text-primary" />
      <h2 className="font-bold text-primary">Agapay</h2>
    </section>
  );
}
